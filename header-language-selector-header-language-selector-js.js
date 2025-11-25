"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8820], {
        7019: (e, t, n) => {
            n.d(t, {
                default: () => o
            });
            const o = function() {
                var e;
                e = function(e, t, n, o) {
                    ! function(e, t, n, o) {
                        var r = null,
                            c = function(e) {
                                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                o = null != o ? o : t.classList.contains("collapse"), t.classList.toggle("collapse", !o), n.classList.toggle("show", !o), null == e || e.stopPropagation()
                            },
                            l = function(e) {
                                c(e, !0)
                            },
                            i = function(t) {
                                e.contains(t.target) || c(t, !0)
                            };
                        n.querySelectorAll("a").forEach(function(e) {
                            e.addEventListener("click", function(t) {
                                var n = e.getAttribute("data-lang");
                                o.innerHTML = n
                            })
                        });
                        var a, s = function() {
                                e.removeEventListener("mouseenter", c), e.removeEventListener("mouseleave", l), t.removeEventListener("click", c), e.removeEventListener("click", c), document.removeEventListener("click", i)
                            },
                            u = function() {
                                l(null), window.innerWidth >= 961 ? "desktop" !== r && (s(), e.addEventListener("mouseenter", c), e.addEventListener("mouseleave", l), r = "desktop") : "mobile" !== r && (s(), t.addEventListener("click", c), e.addEventListener("click", c), document.addEventListener("click", i), r = "mobile")
                            };
                        u();
                        var d = !1;
                        window.addEventListener("resize", function() {
                            clearTimeout(a), d || (u(), d = !0), a = setTimeout(function() {
                                u(), d = !1
                            }, 100)
                        })
                    }(e, t, n, o)
                }, document.querySelectorAll(".header-language-selector").forEach(function(t) {
                    var n = t.querySelector(".header-language-selector__button"),
                        o = t.querySelector(".header-language-selector__drop"),
                        r = t.querySelector(".lang-text");
                    e(t, n, o, r)
                })
            }
        }
    }
]);