"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [6568], {
        826: (t, e, o) => {
            o.d(e, {
                default: () => u
            }), o(9813), o(9650), o(3863), o(2975), o(7482), o(5165), o(5890), o(8305), o(4509);
            var n = o(9899),
                i = o(4411);

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function a(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, s(n.key), n)
                }
            }

            function s(t) {
                var e = function(t) {
                    if ("object" != r(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var o = e.call(t, "string");
                        if ("object" != r(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == r(e) ? e : e + ""
            }
            var u = function() {
                return t = function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.buttons = document.querySelectorAll(".pricing-tooltip"), this.useragent = navigator.userAgent, this.bindingEvents(this.buttons)
                }, e = [{
                    key: "bindingEvents",
                    value: function(t) {
                        var e = this;
                        t.forEach(function(t, o) {
                            var n = t.querySelector(".pricing-tooltip__text"),
                                r = t.nextElementSibling,
                                a = "tooltip-accessible-".concat(o);
                            n.setAttribute("id", a), t.setAttribute("aria-describedby", a);
                            var s = "ontouchstart" in window || navigator.maxTouchPoints;
                            if (r) {
                                var u = r.querySelector(".mobile-tooltip__copy");
                                e.resetToolTip(r, u), t.addEventListener("mouseenter", function() {
                                    window.innerWidth >= 720 && e.showTooltip(t, n)
                                }), t.addEventListener("focus", function() {
                                    window.innerWidth >= 720 && e.showTooltip(t, n)
                                }), document.addEventListener("click", function(t) {
                                    var o = t.target === r,
                                        n = t.target.classList.contains("mobile-tooltip__close");
                                    (o || n) && (e.resetToolTip(r, u), restoreFocusToTrigger())
                                }), window.addEventListener("resize", i.A.debounce(function() {
                                    e.resetToolTip(r, u)
                                }, 400)), t.addEventListener("click", function(o) {
                                    window.innerWidth < 1200 && (e.showModal(r, u, n), t.setAttribute("data-active-trigger", "true"), t.setAttribute("aria-expanded", "true"), s && o.currentTarget.blur(), setTimeout(function() {
                                        e.setInitialFocusinModal(r)
                                    }, 0))
                                }), t.addEventListener("keydown", function(e) {
                                    "Escape" === e.key && (n.classList.remove(".pricing-tooltip__text"), t.blur())
                                })
                            }
                        })
                    }
                }, {
                    key: "showTooltip",
                    value: function(t, e) {
                        (0, n.n4)(t, e, {
                            placement: "right",
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    rootBoundary: "document",
                                    padding: 0
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: [0, 10]
                                }
                            }, {
                                name: "flip",
                                options: {
                                    fallbackPlacements: ["top", "bottom", "left"]
                                }
                            }]
                        })
                    }
                }, {
                    key: "showModal",
                    value: function(t, e, o) {
                        this.resetToolTip(t, e), t.classList.add("mobile-tooltip--open"), e.innerHTML = o.innerHTML, document.body.classList.add("mobile-tooltip-modal-open"),
                            function(t) {
                                var e = Array.from(t.querySelectorAll(["a[href]", "button:not([disabled])", "textarea:not([disabled])", "input:not([disabled])", "select:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(","))).filter(function(t) {
                                    return null !== t.offsetParent
                                });
                                if (e.length) {
                                    var o = e[0],
                                        n = e[e.length - 1];
                                    t.setAttribute("tabindex", "-1"), t.focus();
                                    var i = function(e) {
                                            if ("Tab" === e.key) {
                                                var i = document.activeElement;
                                                e.shiftKey ? i !== o && t.contains(i) || (e.preventDefault(), n.focus()) : i !== n && t.contains(i) || (e.preventDefault(), o.focus())
                                            }
                                        },
                                        r = function(e) {
                                            t.contains(e.target) || (e.stopPropagation(), o.focus())
                                        };
                                    document.addEventListener("keydown", i), document.addEventListener("focusin", r), t._focusTrapCleanup = function() {
                                        document.removeEventListener("keydown", i), document.removeEventListener("focusin", r), delete t._focusTrapCleanup
                                    }
                                }
                            }(t)
                    }
                }, {
                    key: "resetToolTip",
                    value: function(t, e) {
                        e.innerHTML = "", document.body.classList.remove("mobile-tooltip-modal-open"), t.classList.remove("mobile-tooltip--open"), t._focusTrapCleanup && t._focusTrapCleanup(), this.restoreFocusToTrigger()
                    }
                }, {
                    key: "restoreFocusToTrigger",
                    value: function() {
                        var t = document.querySelector('[data-active-trigger="true"]');
                        t && (t.setAttribute("aria-expanded", "false"), t.removeAttribute("data-active-trigger"), setTimeout(function() {
                            t.focus()
                        }, 0))
                    }
                }, {
                    key: "setInitialFocusinModal",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".mobile-tooltip__close",
                            o = t.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'),
                            n = Array.from(o).filter(function(t) {
                                var o = null !== t.offsetParent,
                                    n = !t.hasAttribute("disabled"),
                                    i = !t.classList.contains(e.replace(".", ""));
                                return o && n && i
                            }),
                            i = t.querySelector(e),
                            r = n[0] || i;
                        r && r.focus()
                    }
                }], e && a(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e
            }()
        }
    }
]);