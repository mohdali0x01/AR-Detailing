"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [7326], {
        7477: (e, t, n) => {
            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
                return i
            }
            n.d(t, {
                default: () => h
            }), n(9650), n(2975), n(7482), n(5165), n(5890), n(3863), n(5853), n(489);
            var o = 1250,
                a = 540,
                l = null,
                u = null,
                c = null,
                d = function(e, t) {
                    return e.closest(".".concat(t))
                },
                s = function() {
                    var e = document.querySelector(".mobile-menu-toggle"),
                        t = document.querySelector(".nav");
                    e.classList.remove("mobile-menu-toggle--open"), e.setAttribute("aria-expanded", !1), t.classList.remove("nav--mobile-menu-open")
                },
                m = function(e) {
                    var t = i(document.querySelectorAll(".nav-submenu")),
                        n = i(document.querySelectorAll("button.nav-item")),
                        r = document.querySelector(".nav-left"),
                        l = document.querySelector(".nav-right");
                    r.setAttribute("aria-hidden", window.innerWidth < o), l.setAttribute("aria-hidden", window.innerWidth < a), e || (c = setTimeout(function() {
                        t.forEach(function(e) {
                            e.removeAttribute("style")
                        })
                    }, 300)), t.forEach(function(t) {
                        e ? (clearInterval(c), t.removeAttribute("style")) : (t.style.height = "auto", t.style.opacity = 0)
                    }), n.forEach(function(e) {
                        e.classList.remove("nav-item--open"), e.setAttribute("aria-expanded", !1)
                    })
                },
                v = function(e) {
                    m(!0);
                    var t = null !== d(e, "nav-left"),
                        n = null !== d(e, "nav-right:not(.utility)");
                    e.style.display = "flex", e.style.opacity = "0";
                    var i = e.previousElementSibling;
                    i.classList.add("nav-item--open"), i.setAttribute("aria-expanded", !0);
                    var r = document.querySelector(".nav").getBoundingClientRect().height;
                    if (window.innerWidth > o || !t && !n && window.innerWidth > a) {
                        var l = e.offsetWidth,
                            u = e.parentElement.offsetWidth,
                            c = e.classList.contains("nav-submenu-left-align");
                        if (void 0 === u || void 0 === l) return;
                        var v = c ? 20 : l / 2 - u / 2;
                        e.style.left = "-".concat(v, "px");
                        var f = e.getBoundingClientRect();
                        f.left < 0 && (e.style.left = "-".concat(v - Math.abs(f.left) - 32, "px")), f.right + 32 > window.innerWidth && (e.style.left = "-".concat(v + (f.right - window.innerWidth) + 32, "px")), s()
                    } else {
                        var h = e.getBoundingClientRect().height;
                        e.style.height = 0;
                        var g = e.animate([{
                            height: 0
                        }, {
                            height: "".concat(Math.ceil(h), "px")
                        }], {
                            duration: 150,
                            fill: "forwards"
                        });
                        setTimeout(function() {
                            var e;
                            g.commitStyles(), g.cancel();
                            var t = (null === (e = document.querySelector(".top-banner--above-header")) || void 0 === e ? void 0 : e.getBoundingClientRect().height) || 0;
                            document.querySelector(".nav-main-items-wrap").scrollBy({
                                top: i.getBoundingClientRect().top - r - t,
                                left: 0,
                                behavior: "smooth"
                            })
                        }, 201)
                    }
                    e.style.opacity = "1"
                },
                f = function() {
                    var e = document.querySelector(".nav.utility-nav");
                    e && e.classList.toggle("utility-hidden", window.scrollY > 60 || window.innerWidth <= o)
                };
            const h = function() {
                f();
                var e, t = i(document.querySelectorAll("button.nav-item")),
                    n = document.querySelector(".mobile-menu-toggle"),
                    r = document.querySelector(".nav-left"),
                    c = document.querySelector(".nav-right");
                r.setAttribute("aria-hidden", window.innerWidth < o), c.setAttribute("aria-hidden", window.innerWidth < a), n.setAttribute("aria-expanded", !1), t.forEach(function(e) {
                    var t = e.nextElementSibling,
                        n = null !== d(e, "nav-left"),
                        i = null !== d(e, "nav-right:not(.utility)");
                    e.addEventListener("mouseover", function(e) {
                        if (e.stopPropagation(), !(window.innerWidth <= o && (n || i)) && (!(window.innerWidth < a) || n)) {
                            var t = d(e.target, "nav-item").nextElementSibling;
                            null !== t && -1 !== t.classList.value.indexOf("nav-submenu") && function(e, t) {
                                clearTimeout(l), l = setTimeout(function() {
                                    v(t)
                                }, 300)
                            }(0, t)
                        }
                    }), e.addEventListener("click", function(t) {
                        t.stopPropagation();
                        var r = d(t.target, "nav-item").nextElementSibling;
                        e.classList.contains("nav-item--open") ? m(window.innerWidth <= o && (n || i) || window.innerWidth < a && !n) : (e.classList.add("nav-item--open"), null !== r && -1 !== r.classList.value.indexOf("nav-submenu") && v(r))
                    }), e.addEventListener("mouseleave", function(e) {
                        if (e.stopPropagation(), !(window.innerWidth <= o && (n || i)) && (!(window.innerWidth < a) || n)) {
                            var t = d(e.target, "nav-item").nextElementSibling,
                                r = e.relatedTarget,
                                l = !1;
                            null !== t && (null !== r && "string" == typeof r.parentElement.className && (l = -1 === r.className.indexOf("menu")), l && (clearTimeout(u), u = setTimeout(function() {
                                m()
                            }, 300)))
                        }
                    }), t.addEventListener("mouseenter", function(e) {
                        window.innerWidth <= o && (n || i) || window.innerWidth < a && !n || (d(e.target, "nav-item-wrap").querySelector(".nav-item").classList.add("nav-item--open"), clearInterval(u), clearInterval(l), v(t))
                    }), t.addEventListener("mouseleave", function(e) {
                        window.innerWidth <= o && (n || i) || window.innerWidth < a && !n || (m(), d(e.target, "nav-item-wrap").querySelector(".nav-item").classList.remove("nav-item--open"))
                    })
                }), n.addEventListener("click", function() {
                    m();
                    var e = Boolean(n.ariaExpanded);
                    n.classList.toggle("mobile-menu-toggle--open"), n.setAttribute("aria-expanded", e);
                    var t = d(n, "nav"),
                        i = document.querySelector(".nav-left"),
                        r = document.querySelector(".nav-right");
                    t && t.classList.toggle("nav--mobile-menu-open"), i.setAttribute("aria-hidden", !e), window.innerWidth < a && r.setAttribute("aria-hidden", !e)
                });
                var h, g = !1;
                window.addEventListener("resize", function() {
                    clearTimeout(e), g || (s(), m(!0), f(), g = !0), e = setTimeout(function() {
                        s(), m(!0), f(), g = !1
                    }, 100)
                });
                var w = !1;
                window.addEventListener("scroll", function() {
                    clearTimeout(h), w || (f(), w = !0), h = setTimeout(function() {
                        f(), w = !1
                    }, 25)
                })
            }
        }
    }
]);