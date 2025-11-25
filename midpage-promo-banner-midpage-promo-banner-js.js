"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [5380], {
        5275: (e, n, a) => {
            a.d(n, {
                default: () => t
            }), a(9650), a(3863), a(2975), a(7482), a(5165), a(5890);
            const t = function() {
                var e = Array.from(document.querySelectorAll(".midpage-promo-banner"));
                0 !== e.length && e.forEach(function(e) {
                    var n = e.dataset.campaign;
                    e.querySelector("a").addEventListener("click", function(e) {
                        e.preventDefault()
                    }), e.addEventListener("click", function(a) {
                        var t = e.dataset,
                            o = t.href,
                            c = t.newWindow;
                        o && (c && "true" === c ? window.open(o) : window.location = o), window.gtag("event", "midpage_promo_banner", {
                            banner_event: "cta_click",
                            promo_location: "MIDPAGE PROMO BANNER",
                            campaign_name: n
                        })
                    })
                })
            }
        }
    }
]);