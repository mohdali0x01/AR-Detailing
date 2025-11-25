"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [1454], {
        7717: (e, t, n) => {
            n.d(t, {
                default: () => c
            }), n(9650), n(3863), n(2975), n(7482), n(5165), n(5890), n(4913);
            var a = n(9996);
            const c = function() {
                var e, t = "[data-module=footer]";
                (e = Array.from(document.querySelectorAll("".concat(t, " .footer-menu-heading")))) && e.map(function(e) {
                        var t = function(e) {
                            return e.target.classList.toggle("active")
                        };
                        e.addEventListener("click", function(e) {
                            t(e)
                        }), e.addEventListener("keydown", function(e) {
                            "Enter" === e.key && t(e)
                        })
                    }),
                    function() {
                        var e = document.querySelector("".concat(t, "  a#salesPhoneNumber"));
                        if (e) {
                            var n = (0, a.WQ)();
                            n && (e.innerText = n, e.href = "tel:".concat(n))
                        }
                    }()
            }
        }
    }
]);