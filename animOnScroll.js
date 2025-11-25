"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8360], {
        9278: (t, e, r) => {
            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return i(t, e);
                                var r = {}.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    l = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return u = t.done, t
                    },
                    e: function(t) {
                        l = !0, a = t
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n)
                }
            }

            function u(t) {
                var e = function(t) {
                    if ("object" != n(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var r = e.call(t, "string");
                        if ("object" != n(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == n(e) ? e : e + ""
            }
            r.d(e, {
                Animation: () => l
            }), r(9650), r(4509), r(5853), r(7482), r(489), r(3863), r(2975), r(5165), r(5890);
            var l = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), "IntersectionObserver" in window != 0 && "IntersectionObserverEntry" in window != 0 && "intersectionRatio" in window.IntersectionObserverEntry.prototype != 0 ? (this.elements = e, this.observer = new IntersectionObserver(this.callback, {
                        root: null,
                        rootMargin: "0px",
                        threshold: .25
                    }), this.runObserver()) : this.callbackUnsupportedIntersectionAPI(e)
                }, (e = [{
                    key: "runObserver",
                    value: function() {
                        var t, e = o(this.elements);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var r = t.value;
                                this.observer.observe(r)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }, {
                    key: "callback",
                    value: function(t) {
                        var e, r = o(t);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var n = e.value;
                                n.isIntersecting && n.target.setAttribute("data-anim", "animate")
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                    }
                }, {
                    key: "callbackUnsupportedIntersectionAPI",
                    value: function(t) {
                        var e, r = o(t);
                        try {
                            for (r.s(); !(e = r.n()).done;) e.value.setAttribute("data-anim", "animate")
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                    }
                }]) && a(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e
            }()
        }
    }
]);