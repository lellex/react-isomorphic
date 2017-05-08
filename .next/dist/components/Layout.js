'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'App', 'data-jsx': 3301923656
      }, _react2.default.createElement('div', { className: 'App-header', 'data-jsx': 3301923656
      }, _react2.default.createElement('img', { src: '/static/logo.svg', className: 'App-logo', alt: 'logo', 'data-jsx': 3301923656
      }), _react2.default.createElement('h2', {
        'data-jsx': 3301923656
      }, 'Voici une d\xE9mo d\'une application cr\xE9er \xE0 partir de create-react-app et utilisant Next.js')), _react2.default.createElement('p', { className: 'App-menu', 'data-jsx': 3301923656
      }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', { className: 'App-menuitem', 'data-jsx': 3301923656
      }, 'Index')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', { className: 'App-menuitem', 'data-jsx': 3301923656
      }, 'About'))), this.props.children, _react2.default.createElement(_style2.default, {
        styleId: 3301923656,
        css: '.App[data-jsx="3301923656"] {text-align: center;}.App-logo[data-jsx="3301923656"] {-webkit-animation:a3301923656App-logo-spin infinite 20s linear;-moz-animation:a3301923656App-logo-spin infinite 20s linear;animation:a3301923656App-logo-spin infinite 20s linear;height: 80px;}.App-header[data-jsx="3301923656"] {background-color: #222;height: 150px;padding: 20px;color: white;}.App-menu[data-jsx="3301923656"] {font-size: large;}.App-menuitem[data-jsx="3301923656"] {margin: 12px;}@-webkit-keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}@-moz-keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}@keyframes a3301923656App-logo-spin {from { -webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); }to { -webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;