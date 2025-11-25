"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [980], {
        1291: (e, t, n) => {
            n.d(t, {
                default: () => i
            }), n(8872), n(9087);
            var a = null;
            const i = function() {
                var e, t = function() {
                    document.querySelectorAll(".lp-hero-heavy--left .play--left").forEach(function(e) {
                        if (e.style.width = e.style.height = "100%", !(window.innerWidth < 961)) {
                            var t = null == e ? void 0 : e.querySelector(".lp-hero-heavy--left .play--left img.lp-hero-heavy__overflow");
                            if (t) {
                                var n = function(t) {
                                    var n = t.getBoundingClientRect(),
                                        a = Math.min(n.width, window.innerWidth - Math.max(n.left, 0));
                                    e.style.width = "".concat(a, "px"), e.style.height = "auto"
                                };
                                !t.dataset.src || t.src.includes(t.dataset.src) && t.complete ? n(t) : new MutationObserver(function(e, a) {
                                    e.forEach(function(e) {
                                        "src" === e.attributeName && "" !== t.src && (t.addEventListener("load", function() {
                                            return n(t)
                                        }, {
                                            once: !0
                                        }), a.disconnect())
                                    })
                                }).observe(t, {
                                    attributes: !0
                                })
                            }
                        }
                    })
                };
                t();
                var n = !1;
                window.addEventListener("resize", function() {
                    clearTimeout(e), n || (t(), n = !0), e = setTimeout(function() {
                        t(), n = !1
                    }, 100)
                });
                var i = document.querySelectorAll(".changing-word");
                if (!(i.length <= 1)) {
                    var r = 0,
                        o = function() {
                            i.forEach(function(e) {
                                e.classList.remove("animate"), i[0].classList.remove("initial-rotating-word")
                            }), i[r].classList.add("animate"), r = (r + 1) % i.length
                        };
                    a && clearInterval(a), o(), a = setInterval(o, 2e3), window.addEventListener("beforeunload", function() {
                        return clearInterval(a)
                    })
                }
            }
        }
    }
]);