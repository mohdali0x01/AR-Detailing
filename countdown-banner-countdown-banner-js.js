"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8024], {
        5735: (e, t, n) => {
            n.d(t, {
                default: () => s
            });
            var a = n(8097),
                r = document.querySelectorAll('[data-module="countdown-banner"]');

            function o() {
                r.forEach(function(e) {
                    var t = e.dataset.enddate,
                        n = e.dataset.timezone,
                        r = a.c9.now().setZone(n),
                        o = a.c9.fromFormat(t, "M/d/yyyy h:mm:ss a", {
                            zone: n
                        }) - r,
                        s = 36e5,
                        c = 864e5,
                        d = e.querySelector('[data-item="days"]'),
                        i = e.querySelector('[data-item="hours"]'),
                        u = e.querySelector('[data-item="minutes"]'),
                        l = e.querySelector('[data-item="seconds"]');
                    d.innerText = Math.floor(o / c), i.innerText = Math.floor(o % c / s), u.innerText = Math.floor(o % s / 6e4), l.innerText = Math.floor(o % 6e4 / 1e3), o < 0 && (d && (d.innerText = "0"), i && (i.innerText = "0"), u && (u.innerText = "0"), l && (l.innerText = "0"))
                })
            }
            r && (o(), setInterval(o, 1e3));
            const s = o
        }
    }
]);