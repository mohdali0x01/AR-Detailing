"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8018], {
        8461: (e, n, t) => {
            t.d(n, {
                default: () => a
            });
            const a = function() {
                document.querySelectorAll("[data-card-href]").forEach(function(e) {
                    e.addEventListener("click", function() {
                        var n = e.dataset,
                            t = n.cardHref,
                            a = n.newWindow;
                        t && (a && "true" === a ? window.open(t) : window.location = t)
                    })
                })
            }
        }
    }
]);