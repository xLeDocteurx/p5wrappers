/*!
 * p5wrappers v0.0.2
 * (c) xLeDocteurx <lenoirc.fr@gmail.com>
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var p5 = _interopDefault(require('p5'));
var __vue_normalize__ = _interopDefault(require('../node_modules/rollup-plugin-vue/runtime/normalize.js'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var P5Wrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(P5Wrapper, _Component);

  function P5Wrapper(props) {
    var _this;

    _classCallCheck(this, P5Wrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(P5Wrapper).call(this, props));
    _this.state = {
      canvas: null
    };
    _this.doesComponentReceivedDatas = _this.doesComponentReceivedDatas.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(P5Wrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        canvas: new p5(this.props.sketch, this.el)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.doesComponentReceivedDatas();
    }
  }, {
    key: "doesComponentReceivedDatas",
    value: function doesComponentReceivedDatas() {
      this.state.canvas.datas = this.props.datas ? this.props.datas : null; // this.setState((prevState) => ({
      //     canvas: {
      //         ...prevState.canvas,
      //         ...dataObject
      //     }
      // }))
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement("div", {
        ref: function ref(el) {
          _this2.el = el;
        }
      });
    }
  }]);

  return P5Wrapper;
}(React.Component);

//
var script = {
  name: 'P5Wrapper',
  components: {},
  computed: {},
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data: function data() {
    return {
      canvas: null
    };
  },
  mounted: function mounted() {
    this.canvas = new p5(this.props.sketch, this.$refs.sketch); // this.doesComponentReceivedDatas()
  },
  updated: function updated() {
    this.doesComponentReceivedDatas();
  },
  methods: {
    doesComponentReceivedDatas: function doesComponentReceivedDatas() {
      this.canvas.datas = this.props.datas ? this.props.datas : null;
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "sketch"
  });
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-20830f08";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var index = {
  ReactP5Wrapper: P5Wrapper,
  VueP5Wrapper: __vue_component__
};

module.exports = index;
