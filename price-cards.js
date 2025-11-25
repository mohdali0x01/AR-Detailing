"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [844, 1110, 4736], {
        7851: (e, t, i) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function n(e, t) {
                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!i) {
                    if (Array.isArray(e) || (i = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return o(e, t);
                                var i = {}.toString.call(e).slice(8, -1);
                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        i && (e = i);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, a = !0,
                    c = !1;
                return {
                    s: function() {
                        i = i.call(e)
                    },
                    n: function() {
                        var e = i.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, s = e
                    },
                    f: function() {
                        try {
                            a || null == i.return || i.return()
                        } finally {
                            if (c) throw s
                        }
                    }
                }
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                return r
            }

            function s(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r)
                }
            }

            function a(e) {
                var t = function(e) {
                    if ("object" != r(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var i = t.call(e, "string");
                        if ("object" != r(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == r(t) ? t : t + ""
            }
            i.d(t, {
                default: () => c
            }), i(9813), i(8872), i(9087), i(9650), i(4509), i(5853), i(7482), i(489), i(3863), i(2975), i(5165), i(5890);
            var c = function() {
                return e = function e(t) {
                    var i = t.buttons,
                        r = t.activeClassName;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.buttons = i, this.active = [], this.activeClassName = r
                }, (t = [{
                    key: "setActive",
                    value: function(e) {
                        var t, i = this,
                            r = n(this.buttons);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var o = t.value;
                                o.classList.remove(this.activeClassName), o.dataset.useType.includes(e) && (o.classList.add(this.activeClassName), this.active.push(o))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        var s = document.querySelector(".lp-header__cta-get-lastpass");
                        s && ("business" === e ? s.querySelectorAll("a").forEach(function(e) {
                            e.getAttribute("href") && e.setAttribute("href", "https://lastpass.com/enterprise_trial.php")
                        }) : s.querySelectorAll("a").forEach(function(e) {
                            e.getAttribute("href") && e.setAttribute("href", "https://lastpass.com/create-account.php")
                        })), this.active = this.active.filter(function(e) {
                            return e.className.includes(i.activeClassName)
                        })
                    }
                }, {
                    key: "runListener",
                    value: function(e, t) {
                        var i, r = n(this.buttons);
                        try {
                            for (r.s(); !(i = r.n()).done;) i.value.addEventListener(e, function(e) {
                                t(e)
                            })
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }]) && s(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t
            }()
        },
        9425: (e, t, i) => {
            i.d(t, {
                default: () => d
            }), i(8872), i(9087), i(1895), i(5165), i(9650), i(4509), i(2975), i(7482), i(5890), i(3863), i(5853), i(489);
            var r = i(7851),
                n = i(9705),
                o = i(2609),
                s = i(4411);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var r, n, o, s, a = [],
                            c = !0,
                            l = !1;
                        try {
                            if (o = (i = i.call(e)).next, 0 === t) {
                                if (Object(i) !== i) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(i)).done) && (a.push(r.value), a.length !== t); c = !0);
                        } catch (e) {
                            l = !0, n = e
                        } finally {
                            try {
                                if (!c && null != i.return && (s = i.return(), Object(s) !== s)) return
                            } finally {
                                if (l) throw n
                            }
                        }
                        return a
                    }
                }(e, t) || u(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || u(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var i = {}.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? p(e, t) : void 0
                }
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                return r
            }

            function f(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, y(r.key), r)
                }
            }

            function y(e) {
                var t = function(e) {
                    if ("object" != a(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var i = t.call(e, "string");
                        if ("object" != a(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == a(t) ? t : t + ""
            }
            var d = function() {
                return e = function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.priceCardToggleAnimation = function(e, t) {
                        e && e.style && (e.style.cssText = "display: flex;", t && (t.style.cssText = "display: none;"))
                    }, this.$pricesContainer = document.querySelector(".pricingCards__container"), null !== this.$pricesContainer && (this.$togglePriceButtons = l(document.querySelectorAll(".lp-pricing .lp-toggle__pill")), this.$licenseNotes = this.$pricesContainer.querySelectorAll(".lp-prices__license-note"), this.$personalPrices = this.$pricesContainer.querySelector(".lp-prices__personal"), this.$businessPrices = this.$pricesContainer.querySelector(".lp-prices__business"), this.$pricingGrid = document.querySelector("[data-module=pricing-table"), this.pricingTable = null, this.priceTiles = document.querySelectorAll(".lp-price-tile"), this.addOnSection = document.querySelector(".lp-prices__business .lp-price-tile--featured"), this.accordionParents = document.querySelectorAll(".lp-price-tile-accordion"), this.type = "", this.toggle, this.$activePrices, this.$inactivePrices, this.personalGrid = document.querySelector("[data-grid-type=personal]"), this.businessGrid = document.querySelector("[data-grid-type=business]"), this.initializePricecards())
                }, t = [{
                    key: "initializePricecards",
                    value: function() {
                        var e = this;
                        this.accordionParents && this.accordionParents.forEach(function(t) {
                            t.querySelector(".lp-price-tile-accordion__title-open").addEventListener("click", function() {
                                e.accordionOpener(t), window.gtag("event", "cta_click", {
                                    cta_name: "See add-ons",
                                    cta_position: "Pricing Titles"
                                })
                            }), t.querySelector(".lp-price-tile-accordion__title-close").addEventListener("click", function() {
                                e.accordionCloser(t), window.gtag("event", "cta_click", {
                                    cta_name: "Close add-ons",
                                    cta_position: "Pricing Titles"
                                })
                            }), window.addEventListener("resize", s.A.debounce(function() {
                                e.accordionCloser(t)
                            }, 400))
                        }), this.$togglePriceButtons.length > 0 ? (null !== this.$pricingGrid && (this.pricingTable = new n.default), this.toggle = new r.default({
                            buttons: this.$togglePriceButtons,
                            activeClassName: "active"
                        }), this.$pricesContainer.classList.contains("business-init") ? (this.$inactivePrices = this.$personalPrices, this.$activePrices = this.$businessPrices, this.type = this.toggle.buttons[1].dataset.useType) : (this.$inactivePrices = this.$businessPrices, this.$activePrices = this.$personalPrices, this.type = this.toggle.buttons[0].dataset.useType), this.toggle.setActive(this.type), this.priceCardToggleAnimation(this.$activePrices, this.$inactivePrices), this.pricingTable && this.pricingTable.displayTable(this.$togglePriceButtons), this.togglePricingEvents(), this.toggleLicenseNotes(this.type)) : (this.$activePrices = this.$businessPrices, this.priceCardToggleAnimation(this.$activePrices, this.$inactivePrices)), (0, o.OU)()
                    }
                }, {
                    key: "accordionOpener",
                    value: function(e) {
                        void 0 !== e && (e.classList.add("lp-price-tile-accordion--open"), e.querySelector(".lp-price-tile-accordion__items").classList.add("lp-price-tile-accordion__items--open"))
                    }
                }, {
                    key: "accordionCloser",
                    value: function(e) {
                        void 0 !== e && (e.classList.remove("lp-price-tile-accordion--open"), e.querySelector(".lp-price-tile-accordion__items").classList.remove("lp-price-tile-accordion__items--open"))
                    }
                }, {
                    key: "togglePricingEvents",
                    value: function() {
                        var e = this;
                        this.toggle.runListener("click", function(t) {
                            e.type = t.target.dataset.useType, e.type.includes("personal") ? (e.$activePrices = e.$personalPrices, e.$inactivePrices = e.$businessPrices, e.accordionCloser(e.accordionParents[0])) : (e.$activePrices = e.$businessPrices, e.$inactivePrices = e.$personalPrices), window.gtag("event", "cta_click", {
                                cta_name: e.type.includes("personal") ? "Personal" : "Business",
                                cta_position: "Pricing Card Tab Selector"
                            }), e.toggle.setActive(e.type), e.priceCardToggleAnimation(e.$activePrices, e.$inactivePrices), e.toggleLicenseNotes(e.type), e.pricingTable && e.pricingTable.toggleTable(e.type), e.personalGrid && e.businessGrid && (e.type.includes("personal") ? (e.personalGrid.style.cssText = "display: block;", e.businessGrid.style.cssText = "display: none;") : (e.businessGrid.style.cssText = "display: block;", e.personalGrid.style.cssText = "display: none;"))
                        })
                    }
                }, {
                    key: "toggleLicenseNotes",
                    value: function(e) {
                        if (2 === this.$licenseNotes.length) {
                            var t, i = {},
                                r = function(e) {
                                    var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!t) {
                                        if (Array.isArray(e) || (t = u(e))) {
                                            t && (e = t);
                                            var i = 0,
                                                r = function() {};
                                            return {
                                                s: r,
                                                n: function() {
                                                    return i >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[i++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: r
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var n, o = !0,
                                        s = !1;
                                    return {
                                        s: function() {
                                            t = t.call(e)
                                        },
                                        n: function() {
                                            var e = t.next();
                                            return o = e.done, e
                                        },
                                        e: function(e) {
                                            s = !0, n = e
                                        },
                                        f: function() {
                                            try {
                                                o || null == t.return || t.return()
                                            } finally {
                                                if (s) throw n
                                            }
                                        }
                                    }
                                }(l(this.$licenseNotes).entries());
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = c(t.value, 2),
                                        o = n[0],
                                        s = n[1];
                                    i[this.toggle.buttons[o].dataset.useType] = s
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            i[e].classList.remove("hidden"), delete i[e], i[c(Object.getOwnPropertyNames(i), 1)[0]].classList.add("hidden")
                        }
                    }
                }], t && f(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t
            }()
        },
        9705: (e, t, i) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function n(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r)
                }
            }

            function o(e) {
                var t = function(e) {
                    if ("object" != r(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var i = t.call(e, "string");
                        if ("object" != r(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == r(t) ? t : t + ""
            }
            i.d(t, {
                default: () => s
            }), i(8872), i(9087), i(9813), i(4913), i(9650), i(4509), i(2975), i(7482), i(5165), i(5890);
            var s = function() {
                return e = function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.$personalGrid = document.querySelector('[data-grid-type="personal"]'), this.$businessGrid = document.querySelector('[data-grid-type="business"]'), this.$activePill = document.querySelector(".lp-toggle__pill.active"), this.$activeGrid = null, this.$inactiveGrid = null
                }, t = [{
                    key: "toggleTable",
                    value: function(e) {
                        e.includes("personal") ? (this.$activeGrid = this.$personalGrid) && (this.$inactiveGrid = this.$businessGrid) : (this.$activeGrid = this.$businessGrid) && (this.$inactiveGrid = this.$personalGrid), this.$activeGrid.style.cssText = "display: block;", this.$inactiveGrid.style.cssText = "display: none;", this.showList()
                    }
                }, {
                    key: "displayTable",
                    value: function(e) {
                        var t = e.map(function(e) {
                            return e.classList.contains("active") && e.dataset.useType
                        }).filter(function(e) {
                            return !1 !== e
                        })[0];
                        this.toggleTable(t)
                    }
                }, {
                    key: "showList",
                    value: function(e) {
                        0 !== arguments.length && this.plans.setActive(e)
                    }
                }], t && n(e.prototype, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, t
            }()
        }
    }
]);