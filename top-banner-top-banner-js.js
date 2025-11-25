"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [196], {
        2364: (t, e, n) => {
            n.d(e, {
                E: () => a
            });
            var o = n(8097),
                a = function(t) {
                    if ("True" === t.getAttribute("data-always-show")) return !0;
                    var e = t.getAttribute("data-startdate"),
                        n = t.getAttribute("data-enddate"),
                        a = t.getAttribute("data-timezone"),
                        i = o.c9.now().setZone(a),
                        r = o.c9.fromFormat(e, "M/d/yyyy h:mm:ss a", {
                            zone: a
                        }),
                        s = o.c9.fromFormat(n, "M/d/yyyy h:mm:ss a", {
                            zone: a
                        });
                    return i >= r && i <= s
                }
        },
        6245: (t, e, n) => {
            n.d(e, {
                H: () => a
            }), n(341), n(8872), n(9087);
            var o = n(4411),
                a = function(t) {
                    var e = t.getAttribute("data-countries");
                    if (!e) return !1;
                    if ("all" === e) return !0;
                    var n = e.split(","),
                        a = o.A.parseAkamaiWindowVar(window.akcc) || o.A.getCookieValue("cciso");
                    return !(!a || !n.some(function(t) {
                        return a.includes(t)
                    }))
                }
        },
        9479: (t, e, n) => {
            n.d(e, {
                default: () => u
            }), n(6549), n(8872), n(9087), n(7482), n(7849), n(8604), n(9650), n(4509), n(2975), n(5165), n(5890);
            var o = n(6245),
                a = n(2364),
                i = n(4411);

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, c(o.key), o)
                }
            }

            function c(t) {
                var e = function(t) {
                    if ("object" != r(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != r(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == r(e) ? e : e + ""
            }
            var l = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e && (this.topBanner = e, this.isAboveHeader = e.classList.contains("top-banner--above-header"), this.isPinnedToTop = e.classList.contains("top-banner--pin-to-top"), this.closeButton = this.topBanner.querySelector(".top-banner__close-button"), this.button = this.topBanner.querySelector(".top-banner__content > .lp-button"), this.nav = document.querySelector(".nav"), this.channelNav = document.querySelector(".category-nav"), this.anchor_bar = document.querySelector(".anchorBar__container"), this.campaignName = e.dataset.campaignName, (0, o.H)(this.topBanner) && (0, a.E)(this.topBanner) && (this.topBanner.style.display = "flex", this.init()))
                }, e = [{
                    key: "init",
                    value: function() {
                        this.handleClick(), this.handleAboveHeaderPositioning()
                    }
                }, {
                    key: "handleClick",
                    value: function() {
                        var t, e = this,
                            n = this.topBanner.dataset.link;
                        this.closeButton && this.closeButton.addEventListener("click", function(t) {
                            t.stopPropagation();
                            var n = window.location.hostname.includes("lastpass.com") ? "lastpass.com" : window.location.hostname;
                            i.A.setCookie("top-banner-closed-for-session", !0, !1, n), e.topBanner.remove(), e.removeDynamicTop()
                        }), n && (this.topBanner.addEventListener("click", function(t) {
                            var o = t.target,
                                a = o.className.includes("top-banner__close-button"),
                                i = window.getSelection().toString();
                            a || i || (o.className.includes("lp-button") || window.gtag("event", "cta_click", {
                                cta_name: "Top Banner Wrapper",
                                cta_url: n,
                                cta_position: "top-banner"
                            }), window.open(n, "true" === e.topBanner.dataset.newWindow ? "_blank" : "_self"))
                        }), null === (t = this.button) || void 0 === t || t.addEventListener("click", function(t) {
                            var o = t.target.innerHTML,
                                a = void 0 === o ? "Banner CTA" : o;
                            window.gtag("event", "cta_click", {
                                cta_name: a,
                                cta_url: n,
                                cta_position: "top-banner",
                                promo_location: "TOP BANNER",
                                campaign_name: e.campaignName
                            }), window.open(n, "true" === e.topBanner.dataset.newWindow ? "_blank" : "_self"), t.stopImmediatePropagation()
                        }))
                    }
                }, {
                    key: "handleAboveHeaderPositioning",
                    value: function() {
                        var t = this;
                        this.isAboveHeader && (this.updatePosition(), window.addEventListener("scroll", function() {
                            return t.updatePosition()
                        }), window.addEventListener("resize", function() {
                            return t.updatePosition()
                        }))
                    }
                }, {
                    key: "updatePosition",
                    value: function() {
                        var t, e = this.topBanner.getBoundingClientRect().height,
                            n = this.topBanner.getBoundingClientRect().top,
                            o = Math.max(0, n + e);
                        this.nav.style.top = "".concat(o, "px"), this.nav.style.setProperty("--top-position", "".concat(o, "px"));
                        var a = this.nav.getBoundingClientRect().height;
                        this.updateElementTop(this.channelNav, o, a);
                        var i = (null === (t = this.channelNav) || void 0 === t ? void 0 : t.getBoundingClientRect().height) || 0;
                        this.updateElementTop(this.anchor_bar, o, a, i)
                    }
                }, {
                    key: "updateElementTop",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        if (t) {
                            var a = e > 0 ? e + n + o : n + o;
                            t.style.top = "".concat(a, "px")
                        }
                    }
                }, {
                    key: "removeDynamicTop",
                    value: function() {
                        var t, e, n;
                        null === (t = this.nav) || void 0 === t || t.style.removeProperty("top"), this.nav.style.setProperty("--top-position", "0px"), null === (e = this.channelNav) || void 0 === e || e.style.removeProperty("top"), null === (n = this.anchor_bar) || void 0 === n || n.style.removeProperty("top")
                    }
                }], e && s(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e
            }();
            document.querySelectorAll(".top-banner").forEach(function(t) {
                return new l(t)
            });
            const u = l
        }
    }
]);