"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8486], {
        2364: (t, e, r) => {
            r.d(e, {
                E: () => o
            });
            var n = r(8097),
                o = function(t) {
                    if ("True" === t.getAttribute("data-always-show")) return !0;
                    var e = t.getAttribute("data-startdate"),
                        r = t.getAttribute("data-enddate"),
                        o = t.getAttribute("data-timezone"),
                        a = n.c9.now().setZone(o),
                        i = n.c9.fromFormat(e, "M/d/yyyy h:mm:ss a", {
                            zone: o
                        }),
                        c = n.c9.fromFormat(r, "M/d/yyyy h:mm:ss a", {
                            zone: o
                        });
                    return a >= i && a <= c
                }
        },
        3765: (t, e, r) => {
            r.d(e, {
                default: () => c
            }), r(4913), r(1632), r(2975), r(7482), r(5165), r(5890), r(9650), r(3863), r(5853), r(489);
            var n = r(2364);

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return i(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || a(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                if (t) {
                    if ("string" == typeof t) return i(t, e);
                    var r = {}.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            const c = function() {
                var t = function() {
                    return t = function(t, e) {
                        ! function(t, e) {
                            var r = o(t.querySelectorAll(".lp-price-tile .price-tile-badge")).reduce(function(t, e) {
                                return Math.max(t, e.offsetHeight)
                            }, 0);
                            t.querySelectorAll(".lp-price-tile").forEach(function(t) {
                                var n, o = t.querySelector(".lp-price-tile-product__name"),
                                    a = (null === (n = t.querySelector(".price-tile-badge")) || void 0 === n ? void 0 : n.offsetHeight) || -12;
                                o && (o.style.marginTop = "", e || (o.style.marginTop = "".concat(r - a, "px")))
                            })
                        }(t, e),
                        function(t, e) {
                            var r = o(t.querySelectorAll(".lp-price-tile-cta .lp-price-tile-cta__primary a")),
                                n = o(t.querySelectorAll(".lp-price-tile-cta .lp-price-tile-lp-price-tile-cta__secondary a"));
                            if (r.forEach(function(t) {
                                    return t.style.height = "auto"
                                }), n.forEach(function(t) {
                                    return t.style.height = "auto"
                                }), !e) {
                                var a = function(t) {
                                    var e = t.map(function(t) {
                                            return t.offsetHeight
                                        }),
                                        r = Math.max.apply(Math, o(e));
                                    e.every(function(t) {
                                        return t === r
                                    }) || t.forEach(function(t) {
                                        return t.style.height = "".concat(r, "px")
                                    })
                                };
                                a(r), a(n)
                            }
                        }(t, e),
                        function(t, e) {
                            [{
                                className: "lp-price-tile-cost",
                                align: "bottom"
                            }, {
                                className: "lp-price-tile-cta",
                                align: "top"
                            }, {
                                className: "lp-price-tile-features",
                                align: "top"
                            }].forEach(function(r) {
                                var n = r.className,
                                    a = r.align,
                                    i = o(t.querySelectorAll(".lp-price-tile .".concat(n)));
                                if (i.length && (i.forEach(function(t) {
                                        return t.style.marginTop = ""
                                    }), !e)) {
                                    var c = i.map(function(t) {
                                            return {
                                                section: t,
                                                top: t.offsetTop,
                                                bottom: t.offsetTop + t.offsetHeight
                                            }
                                        }),
                                        l = "bottom" === a ? Math.max.apply(Math, o(c.map(function(t) {
                                            return t.bottom
                                        }))) : Math.max.apply(Math, o(c.map(function(t) {
                                            return t.top
                                        })));
                                    c.forEach(function(t) {
                                        var e = t.section,
                                            r = t.top,
                                            n = t.bottom,
                                            o = "bottom" === a ? l - n : l - r;
                                        o > 0 && (e.style.marginTop = "".concat(o, "px"))
                                    })
                                }
                            })
                        }(t, e)
                    }, e = window.innerWidth < 720, r = window.innerWidth >= 720 && window.innerWidth <= 1329, n = ".pricingCards__row ".concat(r ? ".pricingCards__column" : ""), void document.querySelectorAll(n).forEach(function(r) {
                        return t(r, e)
                    });
                    var t, e, r, n
                };

                function e(t) {
                    if (0 !== t.length) {
                        for (var e = t[0], r = null, o = 0; o < t.length; o++) {
                            var a = t[o],
                                i = a.hasAttribute("data-always-show"),
                                c = a.hasAttribute("data-startdate") && a.hasAttribute("data-enddate") && a.hasAttribute("data-timezone");
                            if ((i || c) && (0, n.E)(a)) {
                                r = a;
                                break
                            }
                        }
                        var l = r || e;
                        t.forEach(function(t) {
                            t.style.display = t === l ? "flex" : "none"
                        })
                    }
                }
                var r, i, c, l, u = document.querySelectorAll(".pricingCards__section");
                u.length > 0 ? u.forEach(function(t) {
                    e(t.querySelectorAll(".pricingCards__outer-wrapper"))
                }) : e(document.querySelectorAll(".pricingCards__outer-wrapper")), t(), r = new Set, i = document.querySelectorAll(".lp-price-tile .lp-price-tile-cost__amount"), c = new ResizeObserver(function(e) {
                    var n, o = function(t) {
                        var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!e) {
                            if (Array.isArray(t) || (e = a(t))) {
                                e && (t = e);
                                var r = 0,
                                    n = function() {};
                                return {
                                    s: n,
                                    n: function() {
                                        return r >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[r++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: n
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, i = !0,
                            c = !1;
                        return {
                            s: function() {
                                e = e.call(t)
                            },
                            n: function() {
                                var t = e.next();
                                return i = t.done, t
                            },
                            e: function(t) {
                                c = !0, o = t
                            },
                            f: function() {
                                try {
                                    i || null == e.return || e.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var l = n.value.target;
                            l.classList.contains("price-loaded") && r.add(l)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    r.size === i.length && (t(), c.disconnect())
                }), i.forEach(function(t) {
                    return c.observe(t)
                });
                var f = !1;
                window.addEventListener("resize", function() {
                    clearTimeout(l), f || (t(), f = !0), l = setTimeout(function() {
                        t(), f = !1
                    }, 100)
                })
            }
        }
    }
]);