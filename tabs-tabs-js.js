"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [4896], {
        6711: (t, e, n) => {
            n.d(e, {
                default: () => a
            }), n(9650), n(3863), n(2975), n(7482), n(5165), n(5890);
            const a = function() {
                var t = Array.from(document.querySelectorAll(".tab")),
                    e = Array.from(document.querySelectorAll(".tabs__content"));

                function n(t, n, a) {
                    n.forEach(function(t) {
                        return t.className = "tab"
                    }), t.className = "tab tab--active";
                    var c = e[a];
                    c.style.opacity = 1, e.forEach(function(t) {
                        t.style.opacity = 0, setTimeout(function() {
                            t.className = "tabs__content tabs__content--hide", t.removeAttribute("style")
                        }, 200)
                    }), setTimeout(function() {
                        c.className = "tabs__content tabs__content--active", c.removeAttribute("style")
                    }, 200)
                }
                t.forEach(function(e, a) {
                    e.addEventListener("click", function(c) {
                        c.preventDefault(), n(e, t, a)
                    }), e.addEventListener("keyup", function(c) {
                        13 === c.keyCode && n(e, t, a)
                    })
                })
            }
        }
    }
]);