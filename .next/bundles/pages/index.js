
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(566);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/lellex/Projets/react-isomorphic/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'This is the home page'));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/lellex/Projets/react-isomorphic/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/lellex/Projets/react-isomorphic/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(565);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/lellex/Projets/react-isomorphic/components/Layout.js';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'App', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('div', { className: 'App-header', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('img', { src: '/static/logo.svg', className: 'App-logo', alt: 'logo', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement('h2', {
        'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Voici une d\xE9mo d\'une application cr\xE9er \xE0 partir de create-react-app et utilisant Next.js')), _react2.default.createElement('p', { className: 'App-menu', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_link2.default, { href: '/index', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', { className: 'App-menuitem', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Index')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', { className: 'App-menuitem', 'data-jsx': 3301923656,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'About'))), this.props.children, _react2.default.createElement(_style2.default, {
        styleId: 3301923656,
        css: '.App[data-jsx="3301923656"] {text-align: center;}.App-logo[data-jsx="3301923656"] {-webkit-animation:a3301923656App-logo-spin infinite 20s linear;-moz-animation:a3301923656App-logo-spin infinite 20s linear;animation:a3301923656App-logo-spin infinite 20s linear;height: 80px;}.App-header[data-jsx="3301923656"] {background-color: #222;height: 150px;padding: 20px;color: white;}.App-menu[data-jsx="3301923656"] {font-size: large;}.App-menuitem[data-jsx="3301923656"] {margin: 12px;}@-webkit-keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}@-moz-keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}@keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFDSiw2QkFDZSxtQkFDcEIsQ0FFVSxrQ0FDb0Msa0xBQ2hDLGFBQ2QsQ0FFWSxvQ0FDWSx1QkFDVCxjQUNBLGNBQ0QsYUFDZCxDQUVVLGtDQUNRLGlCQUNsQixDQUVjLHNDQUNBLGFBQ2QsQ0FLQSIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9sZWxsZXgvUHJvamV0cy9yZWFjdC1pc29tb3JwaGljIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgIDxoMj5Wb2ljaSB1bmUgZMOpbW8gZCd1bmUgYXBwbGljYXRpb24gY3LDqWVyIMOgIHBhcnRpciBkZSBjcmVhdGUtcmVhY3QtYXBwIGV0IHV0aWxpc2FudCBOZXh0LmpzPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIkFwcC1tZW51XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiQXBwLW1lbnVpdGVtXCI+SW5kZXg8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkFwcC1tZW51aXRlbVwiPkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9wPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5BcHAtbG9nbyB7XG4gICAgICAgICAgICBhbmltYXRpb246IEFwcC1sb2dvLXNwaW4gaW5maW5pdGUgMjBzIGxpbmVhcjtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuQXBwLWhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkFwcC1tZW51IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkFwcC1tZW51aXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBBcHAtbG9nby1zcGluIHtcbiAgICAgICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=components/Layout.js */'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/lellex/Projets/react-isomorphic/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/lellex/Projets/react-isomorphic/components/Layout.js"); } } })();

/***/ })

},[562]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8zNDk5ODdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzM0OTk4N2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7Ozs7OztBQUVQLElBQU0sUUFBUTt5QkFDWDs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHFCQUNFOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7QUFJSjs7a0JBQWUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEM7Ozs7QUFDVDs7Ozs7Ozs7O0lBRUQ7Ozs7Ozs7Ozs7OzZCQUVGOzZCQUNFLHVCQUFLLFdBQVUsbUJBQWY7O29CQUFBO3NCQUNFO0FBREY7T0FBQSxrQkFDRSx1QkFBSyxXQUFVLDBCQUFmOztvQkFBQTtzQkFDRTtBQURGO2dEQUNPLEtBQUksb0JBQW1CLFdBQVUsWUFBVyxLQUFJLG9CQUFyRDs7b0JBQUE7c0JBQ0E7QUFEQTswQkFDQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRUYsNklBQUcsV0FBVSx3QkFBYjs7b0JBQUE7c0JBQ0U7QUFERjt5QkFDRyxnQ0FBSyxNQUFLO29CQUFYO3NCQUNFO0FBREY7eUJBQ0UscUJBQUcsV0FBVSw0QkFBYjs7b0JBQUE7c0JBQUE7QUFBQTtTQUVGLDJCQUFDLGdDQUFLLE1BQUs7b0JBQVg7c0JBQ0U7QUFERjt5QkFDRSxxQkFBRyxXQUFVLDRCQUFiOztvQkFBQTtzQkFBQTtBQUFBO1NBR0gsaUJBQUssTUFBTTtpQkFiZDthQStDSDtBQS9DRzs7Ozs7QUFrRE47O2tCQUFlLEkiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPHA+VGhpcyBpcyB0aGUgaG9tZSBwYWdlPC9wPlxuICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICA8aDI+Vm9pY2kgdW5lIGTDqW1vIGQndW5lIGFwcGxpY2F0aW9uIGNyw6llciDDoCBwYXJ0aXIgZGUgY3JlYXRlLXJlYWN0LWFwcCBldCB1dGlsaXNhbnQgTmV4dC5qczwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJBcHAtbWVudVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkFwcC1tZW51aXRlbVwiPkluZGV4PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJBcHAtbWVudWl0ZW1cIj5BYm91dDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuQXBwLWxvZ28ge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBBcHAtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkFwcC1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5BcHAtbWVudSB7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5BcHAtbWVudWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XG4gICAgICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        