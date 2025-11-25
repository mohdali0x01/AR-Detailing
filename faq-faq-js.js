"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [1318], {
        8234: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, l(r.key), r)
                }
            }

            function l(e) {
                var t = function(e) {
                    if ("object" != r(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != r(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == r(t) ? t : t + ""
            }
            n.d(t, {
                default: () => s
            }), n(9650), n(4509), n(2975), n(7482), n(5165), n(5890), n(3863), n(5853), n(489);
            var s = function() {
                return e = function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.elements = {
                        header: o(document.querySelectorAll(".lp-faq__header")),
                        sections: o(document.querySelectorAll(".lp-faq__content")),
                        links: o(document.querySelectorAll(".lp-faq__content a"))
                    }, this.handleLinks(this.elements.links, "-1"), this.handleCollapse(), this.addResizeListener()
                }, (t = [{
                    key: "handleCollapse",
                    value: function() {
                        var e = this;
                        this.elements.header.forEach(function(t) {
                            t.addEventListener("click", function() {
                                var n = t,
                                    r = n.nextElementSibling,
                                    o = r.querySelectorAll("a");
                                n.classList.contains("expand") ? (e.handleLinks(o, "-1"), e.collapse(r)) : (e.handleLinks(o), e.expand(r))
                            })
                        })
                    }
                }, {
                    key: "addResizeListener",
                    value: function() {
                        var e, t = this,
                            n = !1;
                        window.addEventListener("resize", function() {
                            clearTimeout(e), n || (t.elements.sections.forEach(function(e) {
                                t.collapse(e)
                            }), n = !0), e = setTimeout(function() {
                                t.elements.sections.forEach(function(e) {
                                    t.collapse(e)
                                }), n = !1
                            }, 100)
                        })
                    }
                }, {
                    key: "expand",
                    value: function(e) {
                        e.style.maxHeight = "".concat(e.scrollHeight, "px"), e.previousElementSibling.classList.add("expand")
                    }
                }, {
                    key: "collapse",
                    value: function(e) {
                        e.previousElementSibling.classList.remove("expand")
                    }
                }, {
                    key: "handleLinks",
                    value: function(e, t) {
                        e && e.length && (t ? e.forEach(function(e) {
                            return e.setAttribute("tabIndex", t)
                        }) : e.forEach(function(e) {
                            return e.removeAttribute("tabIndex")
                        }))
                    }
                }]) && a(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t
            }()
        }
    }
]);