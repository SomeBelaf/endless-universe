/*Подключения модулей*/
const gulp = require("gulp"),
  gulpIf = require("gulp-if"),
  del = require("del"),
  browserSync = require("browser-sync"),
  rename = require("gulp-rename"),
  fs = require("fs"),
  plumber = require("gulp-plumber"),
  sass = require("gulp-sass"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  uncss = require("gulp-uncss"),
  imageMin = require("gulp-imageMin"),
  svgSprite = require("gulp-svg-sprite"),
  svgmin = require("gulp-svgmin"),
  cheerio = require("gulp-cheerio"),
  replace = require("gulp-replace"),
  fonter = require("gulp-fonter"),
  ttf2woff = require("gulp-ttf2woff"),
  ttf2woff2 = require("gulp-ttf2woff2");

const reload = browserSync.reload;

let isDevelopment = true;
// !process.env.NODE_ENV || process.env.NODE_ENV == "development";

const path = {
  build: {
    html: "dist/",
    js: "dist/js/",
    css: "dist/css/",
    fonts: "dist/assets/fonts/",
    image: "dist/assets/images/",
    fonts: "dist/assets/fonts/",
  },
  src: {
    fontOtf: "src/assets/fonts/**/*.otf",
    fonts: "src/assets/fonts/",
  },
  watch: {
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    scss: "src/styles/scss/**/*.scss",
    css: "src/styles/css/**/*.css",
    image: "src/assets/images/**/*.+(jpg|png|jpeg|gif|ico|webp|cur)",
    svg: "src/assets/images/svg/**/*.svg",
    fonts: "src/assets/fonts/**/*.ttf",
  },
  buildFolder: "./dist",
};

const validateFonts = [
  {
    regExp: /(-ThinItalic)|(ThinItalic)/g,
    weight: 100,
    style: "italic",
  },
  {
    regExp: /(-Thin)|(Thin)/g,
    weight: 100,
    style: "normal",
  },
  {
    regExp: /(-LightItalic)|(LightItalic)/g,
    weight: 300,
    style: "italic",
  },
  {
    regExp: /(-Light)|(Light)/g,
    weight: 300,
    style: "normal",
  },
  {
    regExp: /(-RegularItalic)|(RegularItalic)/g,
    weight: 400,
    style: "italic",
  },
  {
    regExp: /(-Regular)|(Regular)/g,
    weight: 400,
    style: "normal",
  },
  {
    regExp: /(-MediumItalic)|(MediumItalic)/g,
    weight: 500,
    style: "italic",
  },
  {
    regExp: /(-Medium)|(Medium)/g,
    weight: 500,
    style: "normal",
  },
  {
    regExp: /(-BoldItalic)|(BoldItalic)/g,
    weight: 700,
    style: "italic",
  },
  {
    regExp: /(-Bold)|(Bold)/g,
    weight: 700,
    style: "normal",
  },
  {
    regExp: /(-BlackItalic)|(BlackItalic)/g,
    weight: 900,
    style: "italic",
  },
  {
    regExp: /(-Black)|(Black)/g,
    weight: 900,
    style: "normal",
  },
];

/*Browser-sync*/
gulp.task("browser-sync", function () {
  browserSync.init({
    port: 3001,
    server: {
      baseDir: path.buildFolder,
      index: "index.html",
    },
  });
});

/*Удаление папки*/
gulp.task("clean", async function () {
  return del.sync(path.buildFolder); //удаление папки
});

/*Сборка html*/
gulp.task("html", function () {
  return gulp
    .src(path.watch.html) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(gulp.dest(path.build.html)) //перенос файлов в папку
    .pipe(reload({ stream: true }));
});

/*Перевод scss в css*/
gulp.task("scss", function () {
  return gulp
    .src(path.watch.scss) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(sass().on("error", sass.logError)) //вывод ошибок
    .pipe(
      gulpIf(
        isDevelopment,
        sass({ outputStyle: "compressed" }),
        sass({ outputStyle: "expanded" })
      )
    ) //минимизазия файла
    .pipe(
      autoprefixer({
        browsers: ["last 8 versions"],
        cascade: false,
        grid: true,
      })
    )
    .pipe(concat("style.css")) //конкатинация всех найдених файлов
    // .pipe(
    //   uncss({
    //     html: ["index.html", path.watch.html],
    //   })
    // )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.css)) //перенос файлов в папку
    .pipe(reload({ stream: true }));
});

/*Сборка всех файлов css в один */
gulp.task("cssLibs", function () {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css",
    ]) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(sass({ outputStyle: "compressed" })) //минимизазия файлов
    .pipe(concat("libs.css")) //конкатинация всех найдених файлов
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.css)) //перенос файла в папку
    .pipe(reload({ stream: true }));
});

/*Сборка js*/
gulp.task("js", function () {
  return gulp
    .src(path.watch.js) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulpIf(isDevelopment, uglify())) //минимизазия файла
    .pipe(gulp.dest(path.build.js)) //перенос файла в папку
    .pipe(reload({ stream: true }));
});

/*Сборка файлов js в один файл */
gulp.task("jsLibs", function () {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/slick-carousel/slick/slick.min.js",
    ]) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(concat("libs.js")) //конкатинация всех найдених файлов
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify()) //минимизазия файла
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.js)) //перенос файла в папку
    .pipe(reload({ stream: true }));
});

/*Сборка картинок*/
gulp.task("image", function () {
  return gulp
    .src(path.watch.image) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(
      imageMin([
        imageMin.gifsicle({ interlaced: true }),
        imageMin.mozjpeg({ quality: 75, progressive: true }),
        imageMin.optipng({ optimizationLevel: 5 }),
        imageMin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true,
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest(path.build.image)) //перенос файла в папку
    .pipe(reload({ stream: true }));
});

/*Сборка Svg спрайта*/
gulp.task("buildSvgSprite", function () {
  return gulp
    .src(path.watch.svg)
    .pipe(plumber()) //обработка ошибок
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    ) //минимизазия файла
    .pipe(
      cheerio({
        run: function ($) {
          $("fill").remove();
          $("stroke").remove();
          $("style").remove();
        },
        parserOptions: { xmlMode: true },
      })
    ) // убрать fill, style, stroke
    .pipe(replace("&gt;", ">")) // заменить '&gt;' на >
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
          },
        },
      })
    ) // собрать спрайт
    .pipe(gulp.dest(path.build.image));
});

/*Сборка шрифтов */
gulp.task("otf2ttf", function () {
  return gulp
    .src(path.src.fontOtf) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(fonter({ formats: ["ttf"] })) // перевод с otf в ttf
    .pipe(gulp.dest(path.src.fonts)); //перенос файла в папку
});

gulp.task("fonts", function () {
  gulp
    .src(path.watch.fonts) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.build.fonts)) //перенос файла в папку
    .pipe(reload({ stream: true }));
  return gulp
    .src(path.watch.fonts) //поик файлов
    .pipe(plumber()) //обработка ошибок
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.build.fonts)) //перенос файла в папку
    .pipe(reload({ stream: true }));
});

function getCurentFont(obj, fontName) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].regExp.test(fontName)) {
      return {
        name: fontName.replace(obj[i].regExp, ""),
        path: fontName,
        weight: obj[i].weight,
        style: obj[i].style,
      };
    }
  }
}

gulp.task("fontsStyle", function (cb) {
  const file_content = fs.readFileSync("./src/styles/scss/_fonts.scss");
  if (file_content == "") {
    fs.writeFile("./src/styles/scss/_fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontName;
        for (var i = 0; i < items.length; i++) {
          let fontName = items[i].split(".");
          fontName = fontName[0];
          let curentFont = getCurentFont(validateFonts, fontName);
          console.log(curentFont);
          if (c_fontName != fontName) {
            fs.appendFile(
              "./src/styles/scss/_fonts.scss",
              `@include fontConnect("${curentFont.name}", "${curentFont.path}", ${curentFont.weight}, ${curentFont.style});\r\n`,
              cb
            );
          }
          c_fontName = fontName;
        }
      }
    });
  }
  cb();
});

/*Сборка файлов*/
gulp.task(
  "build",
  gulp.series(
    "html",
    "cssLibs",
    "scss",
    "jsLibs",
    "js",
    "image",
    "buildSvgSprite"
  )
);

/*Watch*/
gulp.task("watch", function () {
  isDevelopment = false;
  gulp.watch([path.watch.html], gulp.parallel("html"));
  gulp.watch([path.watch.scss], gulp.parallel("scss"));
  gulp.watch([path.watch.css], gulp.parallel("cssLibs"));
  gulp.watch([path.watch.js], gulp.parallel("js"));
  gulp.watch([path.watch.image], gulp.parallel("image"));
  gulp.watch([path.watch.svg], gulp.parallel("buildSvgSprite"));
});

/*Сборка шрифтов */
gulp.task("buildFonts", gulp.series(/*"otf2ttf, "*/ "fonts", "fontsStyle"));
/*Слежение и dev-сервер */
gulp.task("development", gulp.parallel("watch", "browser-sync"));
/*Сборка билда */
gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("build" /*, "watch", "browser-sync"*/))
);
