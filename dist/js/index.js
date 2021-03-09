"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var originalArr = ["*", ".", "+", "°", //   "\u0359",
"\u2219", "\u02DF", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " " //   "\u030A",
//   "'",
//   "\u0308",
//   "\u0738",
//   "\u0739",
//   "\u07ED",
//   "\u003A",
];
var test_1 = ["#1_______________________________________________#", "#2_______________________________________________#", "#3_______________________________________________#", "#4_______________________________________________#", "#5_______________________________________________#", "#6_______________________________________________#", "#7_______________________________________________#", "#8_______________________________________________#", "#9_______________________________________________#", "#10______________________________________________#"];
var star_1 = ["              '                        ", "        +                              ", "                *       '              ", "          *                            ", "                                       ", "                  .           .        ", "                              ;        ", "          *               - --+- -     ", "                              !        ", "      +                     .          ", "           *           .               ", "                                       ", "                       *      .        ", "                                  +    ", "                     °                 ", "         °                             ", ".                .                     ", "                 .                     ", "                 :      .           *  ", "                 !           .         ", "     *           |        .            ", "                 |_         +          ", "              ,  | `.                  ", "-  -- --- --+-&lt;#&gt;-+- ---  --  -  ", "              `._|_,'                  ", "                 T                     ", "                 |                 +   ", "   +             !                     ", "                 :         .           ", "        .        .       *             "];
var star_2 = ["      .' .--.    +     .             ° ", "     *  * _                            ", "     *._:##:.-.     .            .     ", "   .    ':##   *          °            ", "            *  *                    .  ", "        '--* .'      .      +          "];
var star_3 = ["       *      .           .' .--.    .  ", "  +                  .    *  * _         ", "      .                  *._:##:.-.     ", "                *           ':##   *    ", " .        °                     *  *    ", "                            '--* .'     "];
var star_4 = [" °       :     °          .             ", "     .   :   .                    °     ", "       . : .       +                  . ", "   - - -*.* - - -              .        ", "       .*:*.      .             +       ", "     .   :   +             *            ", "         :          .                 * ", "  .      :                      *       "];
var star_5 = ["         .    :          :        .     ", "*                      . : .          * ", "   *       *        --- *.* ---         ", "                       .*:*.            ", "     .         .         :       *   .  "];
var planet_1 = ["       +                                ", "                                         ", "                 *       +               ", "           '                  |          ", '       ()    .-.,="``"=.    - o -        ', "             '=/_       &#92     |       ", "          *   |  '=._    |               ", "               &#92     `=./`,        '  ", "            .   '=.__.=' `='      *      ", "   +                         +           ", "        O      *        '       .        "];
var planet_2 = ["   °           .          .--.   .   .  ", "                     ____'#   '____     ", "     .              '=============='  + ", "             .         . '.__.'  .   .  "];
var planet_3 = ["   *            .======.                ", "    .         .=\\_   _/~=.   *         ", "              =~~~\\_/~~~~=      .      ", "        .    |:~~~~~~_/\\_:|       .    ", " +            =_/\\_ |_   =             ", "              '=   \\~~\\_='   .     °  ", "          .     '======'                "];
var planet_4 = ["     ______     °           .          ", "  .=~~~~~~~~=.                         ", " .===()=======.     .            °     ", " =~~~~~~~~~~~~=                    .   ", " ==============                        ", " '=~~~~~~~~~~='           *            ", "   '-.____.-'    .     +          .    "];
var planet_5 = ["  .#******#.    .      +             .   ", ".##~~~~~~~~##.                           ", "##~~~~~~~~~~##                           ", "#~~~~~~~~~~~~#                           ", "##~~~~~~~~~~##       °                 * ", "'##~~~~~~~~##'                  +        ", "  '########' *            *            * "];
var planet_6 = ["     *   .           .     .#****#.  * ", "                         .##~~~~~~##.  ", "       .    *      *     #~~~~~~~~~~#  ", " *            .         .#~~~~~~~~~~#  ", "                         '##~~~~~~##   ", "       .                   '######'  * "];
var planet_7 = ["  .     *           ___   .          *  ", "                  .=   =.               ", "        .    .    = o : =  .            ", "  .               '=___='         *     "];
var planet_8 = ["    ___   .          *   .            * ", "  .=   =.        *     . .              ", "  = o : =  .                            ", "  '=___='           :      .      *   . "];
var planet_9 = ["  .                             ___   . ", "               *        :     .=   =.   ", "        .    .                = o : =   ", "                              '=___='   "]; // --- Создание обертки для контента --- //

function createWrapper(id) {
  var wrapper = document.createElement("article");
  wrapper.setAttribute("class", "wrapper");
  wrapper.setAttribute("id", "wrapper_".concat(id));
  document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin", wrapper);
  return wrapper;
} // --- Создание контейнера для контента --- //


function createContainer(wrapper) {
  var container = document.createElement("pre");
  container.setAttribute("class", "container");
  container.setAttribute("id", "container");
  wrapper.insertAdjacentElement("afterbegin", container);
  return container;
}

function createTestContainer(wrapper) {
  var container = document.createElement("div");
  container.setAttribute("class", "test");
  wrapper.insertAdjacentElement("afterbegin", container);
  return container;
} // Записать текущую обертку


var currentWrapper = createWrapper(1); // Записать текущий контейнер

var currentContainer = createContainer(currentWrapper);
createTestContainer(currentWrapper);
console.log(currentWrapper);
console.log(currentContainer); //  Получить ширину и высоту необходимого контента

var width = window.innerWidth * 3;
var height = window.innerHeight * 3; // console.log("width", width);
// console.log("height", height);
// Количество символов в одной строке (5.5 ширина одного символа)

var line = Math.floor(width / 5.5); // Количество строк на екране (11 высота одного символа)

var numOfLines = Math.floor(height / 11); // console.log("line", line);
// console.log("numOfLines", numOfLines);
// --- Функция для получения рандомного символа с масива --- //

function getRandomStar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
} // --- Функция для определения должен ли быть отрисовать элемент --- //


function shoudDrawElem() {
  var shoudDraw = false;
  var chance = Math.floor(Math.random() * 10);

  if (chance == 1) {
    shoudDraw = true;
  }

  return shoudDraw;
} // --- Функция для заполнения контейнера контентом --- //


function drawStars() {
  var arrOfStars = [];
  var j = 0;

  while (j <= numOfLines) {
    // заполнить все строки
    for (var i = 0; i < line; i++) {
      // заполнить одну строку
      arrOfStars.push(getRandomStar(originalArr));
    }

    arrOfStars.push("\n");
    j++;
  }

  return arrOfStars;
} // --- Функция для полечений позиции элемента по Y --- //


function getYPos() {
  return Math.floor(Math.random() * height);
} // --- Функция для полечений позиции элемента по X --- //


function getXPos() {
  return Math.floor(Math.random() * width);
} // --- Функция для отрисрвки элемента в случийним месте --- //


function drawElem(data, container) {
  var elem = null;

  if (shoudDrawElem()) {
    elem = document.createElement("pre");
    elem.setAttribute("class", "element");
    elem.setAttribute("style", "top: ".concat(getYPos(), "px; left: ").concat(getXPos(), "px"));
    elem.innerHTML = data.join("\n");
    container.insertAdjacentElement("beforeend", elem);
  }
}

var stars = drawStars();
currentContainer.innerHTML += stars.join("");
drawElem(star_1, currentContainer);
drawElem(star_2, currentContainer);
drawElem(star_3, currentContainer);
drawElem(star_4, currentContainer);
drawElem(star_5, currentContainer);
drawElem(planet_1, currentContainer);
drawElem(planet_2, currentContainer);
drawElem(planet_3, currentContainer);
drawElem(planet_4, currentContainer);
drawElem(planet_5, currentContainer);
drawElem(planet_6, currentContainer);
drawElem(planet_7, currentContainer);
drawElem(planet_8, currentContainer);
drawElem(planet_9, currentContainer);

function drawCanvas(x, y) {
  var previousX = null;
  var previousY = null;
  return function () {
    if (x !== previousX || y !== previousY) {
      if (y === "top" && x === "right") {
        console.log("top", "right");
      } else if (y === "top" && x === "left") {
        console.log("top", "left");
      } else if (y === "bottom" && x === "right") {
        console.log("bottom", "right");
      } else if (y === "bottom" && x === "left") {
        console.log("bottom", "left");
      }
    }

    previousX = x;
    previousY = y;
  };
} // Класс для перемещения элемента (принимает элемент)


var DragElement = /*#__PURE__*/function () {
  function DragElement(elem) {
    _classCallCheck(this, DragElement);

    this.elem = elem;
    this.elemPosX = 0; // elem pos X

    this.elemPosY = 0; // elem pos Y

    this.cursorPosX = 0; // cursor X

    this.cursorPosY = 0; // cursor Y

    this.directionX = undefined;
    this.directionY = undefined;
  }

  _createClass(DragElement, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.elem.onmousedown = function (e) {
        return _this.dragMouseDown(e);
      };
    }
  }, {
    key: "dragMouseDown",
    value: function dragMouseDown(e) {
      var _this2 = this;

      e = e || window.event;
      e.preventDefault(); // получить старвовую позиция курсора

      this.cursorPosX = e.clientX;
      this.cursorPosY = e.clientY;
      document.onmouseup = this.closeDragElement; // вызвать функция когда курсор двигается

      document.onmousemove = function (e) {
        _this2.elementDrag(e);
      };
    } // метод для перемещения элемета

  }, {
    key: "elementDrag",
    value: function elementDrag(e) {
      e = e || window.event;
      e.preventDefault(); // определить новую позицию курсора

      this.elemPosX = this.cursorPosX - e.clientX;
      this.elemPosY = this.cursorPosY - e.clientY;
      this.cursorPosX = e.clientX;
      this.cursorPosY = e.clientY; // установить новую позиция для элемента

      this.elem.style.top = this.elem.offsetTop - this.elemPosY + "px";
      this.elem.style.left = this.elem.offsetLeft - this.elemPosX + "px";
    } // прекратить движение когда кнопка мыши отпущена

  }, {
    key: "closeDragElement",
    value: function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    } //  получить направление движения пользователя

  }, {
    key: "getDirection",
    value: function getDirection(e) {
      e.preventDefault();

      if (this.elemPosX < 0) {
        this.directionX = "left";
      }

      if (this.elemPosX > 0) {
        this.directionX = "rigth";
      }

      if (this.elemPosY < 0) {
        this.directionY = "top";
      }

      if (this.elemPosY > 0) {
        this.directionY = "bottom";
      }

      return [this.directionX, this.directionY];
    }
  }]);

  return DragElement;
}();

var draggableWrapper = new DragElement(currentWrapper); // console.log(draggableWrapper);

draggableWrapper.init();

draggableWrapper.elem.onmousemove = function (e) {
  e.preventDefault();

  var _draggableWrapper$get = draggableWrapper.getDirection(e),
      _draggableWrapper$get2 = _slicedToArray(_draggableWrapper$get, 2),
      directionX = _draggableWrapper$get2[0],
      directionY = _draggableWrapper$get2[1];

  if (directionX !== undefined && directionY !== undefined) {
    drawCanvas(directionX, directionY);
  }
}; // var Visible = function (target) {
//   // Все позиции элемента
//   var targetPosition = {
//       top: window.pageYOffset + target.getBoundingClientRect().top,
//       left: window.pageXOffset + target.getBoundingClientRect().left,
//       right: window.pageXOffset + target.getBoundingClientRect().right,
//       bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
//     },
//     // Получаем позиции окна
//     windowPosition = {
//       top: window.pageYOffset,
//       left: window.pageXOffset,
//       right: window.pageXOffset + document.documentElement.clientWidth,
//       bottom: window.pageYOffset + document.documentElement.clientHeight,
//     };
//   if (targetPosition.bottom > windowPosition.top) {
//     // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//     // Если элемент полностью видно, то запускаем следующий код
//     console.clear();
//     console.log(windowPosition.bottom);
//     console.log(targetPosition.top);
//     console.log("Вы видите элемент top :)");
//   } else if (targetPosition.top < windowPosition.bottom) {
//     // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//     console.clear();
//     console.log("Вы видите элемент bottom :)");
//   } else if (targetPosition.right > windowPosition.left) {
//     // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//     console.clear();
//     console.log("Вы видите элемент left :)");
//   } else if (targetPosition.left < windowPosition.right) {
//     // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//     console.clear();
//     console.log("Вы видите элемент right :)");
//   } else {
//     // Если элемент не видно, то запускаем этот код
//     console.clear();
//   }
// };
// document.getElementById("mydiv").addEventListener("mousedown", function () {
//   Visible(document.getElementById("mydiv"));
// });
// // Запускаем функцию при прокрутке страницы
// // А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible(document.getElementById("mydiv"));