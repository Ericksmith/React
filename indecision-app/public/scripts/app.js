"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisiblityToggle = function (_React$Component) {
    _inherits(VisiblityToggle, _React$Component);

    function VisiblityToggle(props) {
        _classCallCheck(this, VisiblityToggle);

        var _this = _possibleConstructorReturn(this, (VisiblityToggle.__proto__ || Object.getPrototypeOf(VisiblityToggle)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            hidden: true
        };
        return _this;
    }

    _createClass(VisiblityToggle, [{
        key: "handleToggleVisibility",
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    hidden: !prevState.hidden
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Visibily Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleToggleVisibility },
                    this.state.hidden ? "Show details" : "Hide details"
                ),
                this.state.hidden ? '' : React.createElement(
                    "p",
                    null,
                    "Hidden Message"
                )
            );
        }
    }]);

    return VisiblityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisiblityToggle, null), document.getElementById('app'));

// const app = {
//     message: 'This is a hidden message',
//     hidden: true
// }

// const toggleText = () => {
//     if(app.hidden){
//         app.hidden = false;
//         renderVis();
//     } else {
//         app.hidden = true;
//         renderVis();
//     }
// }

// const renderVis = () => {
//     const template = (
//         <div>
//             <h2>Visibily Toggle</h2>
//             <button onClick={toggleText}>{app.hidden ? "Show details" : "Hide details" }</button>
//             {app.hidden ? '' : <p>{app.message}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// renderVis();
