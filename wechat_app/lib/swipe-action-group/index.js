"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames = _interopRequireDefault(require("../helpers/classNames"));

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}(0, _baseComponent.default)({
  relations: {
    "../swipe-action/index": {
      type: "descendant",
      observer: function () {
        this.debounce(this.updated)
      }
    }
  },
  methods: {
    updated: function () {
      var e = this.getRelationNodes("../swipe-action/index");
      0 < e.length && e.forEach(function (e, t) {
        e.updated(t)
      })
    },
    onCloseSwipe: function (n) {
      var e = this.getRelationNodes("../swipe-action/index");
      0 < e.length && e.forEach(function (e, t) {
        n !== t && e.onClose()
      })
    }
  }
});