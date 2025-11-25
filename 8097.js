"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [8097], {
        8097: (e, t, n) => {
            n.d(t, {
                c9: () => gs
            });
            class s extends Error {}
            class r extends s {
                constructor(e) {
                    super(`Invalid DateTime: ${e.toMessage()}`)
                }
            }
            class i extends s {
                constructor(e) {
                    super(`Invalid Interval: ${e.toMessage()}`)
                }
            }
            class a extends s {
                constructor(e) {
                    super(`Invalid Duration: ${e.toMessage()}`)
                }
            }
            class o extends s {}
            class u extends s {
                constructor(e) {
                    super(`Invalid unit ${e}`)
                }
            }
            class l extends s {}
            class c extends s {
                constructor() {
                    super("Zone is an abstract class")
                }
            }
            const h = "numeric",
                d = "short",
                m = "long",
                f = {
                    year: h,
                    month: h,
                    day: h
                },
                y = {
                    year: h,
                    month: d,
                    day: h
                },
                g = {
                    year: h,
                    month: d,
                    day: h,
                    weekday: d
                },
                w = {
                    year: h,
                    month: m,
                    day: h
                },
                p = {
                    year: h,
                    month: m,
                    day: h,
                    weekday: m
                },
                k = {
                    hour: h,
                    minute: h
                },
                v = {
                    hour: h,
                    minute: h,
                    second: h
                },
                S = {
                    hour: h,
                    minute: h,
                    second: h,
                    timeZoneName: d
                },
                T = {
                    hour: h,
                    minute: h,
                    second: h,
                    timeZoneName: m
                },
                b = {
                    hour: h,
                    minute: h,
                    hourCycle: "h23"
                },
                O = {
                    hour: h,
                    minute: h,
                    second: h,
                    hourCycle: "h23"
                },
                N = {
                    hour: h,
                    minute: h,
                    second: h,
                    hourCycle: "h23",
                    timeZoneName: d
                },
                M = {
                    hour: h,
                    minute: h,
                    second: h,
                    hourCycle: "h23",
                    timeZoneName: m
                },
                D = {
                    year: h,
                    month: h,
                    day: h,
                    hour: h,
                    minute: h
                },
                I = {
                    year: h,
                    month: h,
                    day: h,
                    hour: h,
                    minute: h,
                    second: h
                },
                V = {
                    year: h,
                    month: d,
                    day: h,
                    hour: h,
                    minute: h
                },
                x = {
                    year: h,
                    month: d,
                    day: h,
                    hour: h,
                    minute: h,
                    second: h
                },
                E = {
                    year: h,
                    month: d,
                    day: h,
                    weekday: d,
                    hour: h,
                    minute: h
                },
                C = {
                    year: h,
                    month: m,
                    day: h,
                    hour: h,
                    minute: h,
                    timeZoneName: d
                },
                F = {
                    year: h,
                    month: m,
                    day: h,
                    hour: h,
                    minute: h,
                    second: h,
                    timeZoneName: d
                },
                $ = {
                    year: h,
                    month: m,
                    day: h,
                    weekday: m,
                    hour: h,
                    minute: h,
                    timeZoneName: m
                },
                W = {
                    year: h,
                    month: m,
                    day: h,
                    weekday: m,
                    hour: h,
                    minute: h,
                    second: h,
                    timeZoneName: m
                };
            class Z {
                get type() {
                    throw new c
                }
                get name() {
                    throw new c
                }
                get ianaName() {
                    return this.name
                }
                get isUniversal() {
                    throw new c
                }
                offsetName(e, t) {
                    throw new c
                }
                formatOffset(e, t) {
                    throw new c
                }
                offset(e) {
                    throw new c
                }
                equals(e) {
                    throw new c
                }
                get isValid() {
                    throw new c
                }
            }
            let L = null;
            class z extends Z {
                static get instance() {
                    return null === L && (L = new z), L
                }
                get type() {
                    return "system"
                }
                get name() {
                    return (new Intl.DateTimeFormat).resolvedOptions().timeZone
                }
                get isUniversal() {
                    return !1
                }
                offsetName(e, {
                    format: t,
                    locale: n
                }) {
                    return rt(e, t, n)
                }
                formatOffset(e, t) {
                    return ut(this.offset(e), t)
                }
                offset(e) {
                    return -new Date(e).getTimezoneOffset()
                }
                equals(e) {
                    return "system" === e.type
                }
                get isValid() {
                    return !0
                }
            }
            const j = new Map,
                q = {
                    year: 0,
                    month: 1,
                    day: 2,
                    era: 3,
                    hour: 4,
                    minute: 5,
                    second: 6
                },
                A = new Map;
            class U extends Z {
                static create(e) {
                    let t = A.get(e);
                    return void 0 === t && A.set(e, t = new U(e)), t
                }
                static resetCache() {
                    A.clear(), j.clear()
                }
                static isValidSpecifier(e) {
                    return this.isValidZone(e)
                }
                static isValidZone(e) {
                    if (!e) return !1;
                    try {
                        return new Intl.DateTimeFormat("en-US", {
                            timeZone: e
                        }).format(), !0
                    } catch (e) {
                        return !1
                    }
                }
                constructor(e) {
                    super(), this.zoneName = e, this.valid = U.isValidZone(e)
                }
                get type() {
                    return "iana"
                }
                get name() {
                    return this.zoneName
                }
                get isUniversal() {
                    return !1
                }
                offsetName(e, {
                    format: t,
                    locale: n
                }) {
                    return rt(e, t, n, this.name)
                }
                formatOffset(e, t) {
                    return ut(this.offset(e), t)
                }
                offset(e) {
                    if (!this.valid) return NaN;
                    const t = new Date(e);
                    if (isNaN(t)) return NaN;
                    const n = function(e) {
                        let t = j.get(e);
                        return void 0 === t && (t = new Intl.DateTimeFormat("en-US", {
                            hour12: !1,
                            timeZone: e,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            era: "short"
                        }), j.set(e, t)), t
                    }(this.name);
                    let [s, r, i, a, o, u, l] = n.formatToParts ? function(e, t) {
                        const n = e.formatToParts(t),
                            s = [];
                        for (let e = 0; e < n.length; e++) {
                            const {
                                type: t,
                                value: r
                            } = n[e], i = q[t];
                            "era" === t ? s[i] = r : Le(i) || (s[i] = parseInt(r, 10))
                        }
                        return s
                    }(n, t) : function(e, t) {
                        const n = e.format(t).replace(/\u200E/g, ""),
                            s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
                            [, r, i, a, o, u, l, c] = s;
                        return [a, r, i, o, u, l, c]
                    }(n, t);
                    "BC" === a && (s = 1 - Math.abs(s));
                    let c = +t;
                    const h = c % 1e3;
                    return c -= h >= 0 ? h : 1e3 + h, (et({
                        year: s,
                        month: r,
                        day: i,
                        hour: 24 === o ? 0 : o,
                        minute: u,
                        second: l,
                        millisecond: 0
                    }) - c) / 6e4
                }
                equals(e) {
                    return "iana" === e.type && e.name === this.name
                }
                get isValid() {
                    return this.valid
                }
            }
            let _ = {};
            const Y = new Map;

            function R(e, t = {}) {
                const n = JSON.stringify([e, t]);
                let s = Y.get(n);
                return void 0 === s && (s = new Intl.DateTimeFormat(e, t), Y.set(n, s)), s
            }
            const H = new Map,
                P = new Map;
            let J = null;
            const G = new Map;

            function B(e) {
                let t = G.get(e);
                return void 0 === t && (t = new Intl.DateTimeFormat(e).resolvedOptions(), G.set(e, t)), t
            }
            const Q = new Map;

            function K(e, t, n, s) {
                const r = e.listingMode();
                return "error" === r ? null : "en" === r ? n(t) : s(t)
            }
            class X {
                constructor(e, t, n) {
                    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
                    const {
                        padTo: s,
                        floor: r,
                        ...i
                    } = n;
                    if (!t || Object.keys(i).length > 0) {
                        const t = {
                            useGrouping: !1,
                            ...n
                        };
                        n.padTo > 0 && (t.minimumIntegerDigits = n.padTo), this.inf = function(e, t = {}) {
                            const n = JSON.stringify([e, t]);
                            let s = H.get(n);
                            return void 0 === s && (s = new Intl.NumberFormat(e, t), H.set(n, s)), s
                        }(e, t)
                    }
                }
                format(e) {
                    if (this.inf) {
                        const t = this.floor ? Math.floor(e) : e;
                        return this.inf.format(t)
                    }
                    return He(this.floor ? Math.floor(e) : Be(e, 3), this.padTo)
                }
            }
            class ee {
                constructor(e, t, n) {
                    let s;
                    if (this.opts = n, this.originalZone = void 0, this.opts.timeZone) this.dt = e;
                    else if ("fixed" === e.zone.type) {
                        const t = e.offset / 60 * -1,
                            n = t >= 0 ? `Etc/GMT+${t}` : `Etc/GMT${t}`;
                        0 !== e.offset && U.create(n).valid ? (s = n, this.dt = e) : (s = "UTC", this.dt = 0 === e.offset ? e : e.setZone("UTC").plus({
                            minutes: e.offset
                        }), this.originalZone = e.zone)
                    } else "system" === e.zone.type ? this.dt = e : "iana" === e.zone.type ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({
                        minutes: e.offset
                    }), this.originalZone = e.zone);
                    const r = { ...this.opts
                    };
                    r.timeZone = r.timeZone || s, this.dtf = R(t, r)
                }
                format() {
                    return this.originalZone ? this.formatToParts().map(({
                        value: e
                    }) => e).join("") : this.dtf.format(this.dt.toJSDate())
                }
                formatToParts() {
                    const e = this.dtf.formatToParts(this.dt.toJSDate());
                    return this.originalZone ? e.map(e => {
                        if ("timeZoneName" === e.type) {
                            const t = this.originalZone.offsetName(this.dt.ts, {
                                locale: this.dt.locale,
                                format: this.opts.timeZoneName
                            });
                            return { ...e,
                                value: t
                            }
                        }
                        return e
                    }) : e
                }
                resolvedOptions() {
                    return this.dtf.resolvedOptions()
                }
            }
            class te {
                constructor(e, t, n) {
                    this.opts = {
                        style: "long",
                        ...n
                    }, !t && qe() && (this.rtf = function(e, t = {}) {
                        const {
                            base: n,
                            ...s
                        } = t, r = JSON.stringify([e, s]);
                        let i = P.get(r);
                        return void 0 === i && (i = new Intl.RelativeTimeFormat(e, t), P.set(r, i)), i
                    }(e, n))
                }
                format(e, t) {
                    return this.rtf ? this.rtf.format(e, t) : function(e, t, n = "always", s = !1) {
                        const r = {
                                years: ["year", "yr."],
                                quarters: ["quarter", "qtr."],
                                months: ["month", "mo."],
                                weeks: ["week", "wk."],
                                days: ["day", "day", "days"],
                                hours: ["hour", "hr."],
                                minutes: ["minute", "min."],
                                seconds: ["second", "sec."]
                            },
                            i = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                        if ("auto" === n && i) {
                            const n = "days" === e;
                            switch (t) {
                                case 1:
                                    return n ? "tomorrow" : `next ${r[e][0]}`;
                                case -1:
                                    return n ? "yesterday" : `last ${r[e][0]}`;
                                case 0:
                                    return n ? "today" : `this ${r[e][0]}`
                            }
                        }
                        const a = Object.is(t, -0) || t < 0,
                            o = Math.abs(t),
                            u = 1 === o,
                            l = r[e],
                            c = s ? u ? l[1] : l[2] || l[1] : u ? r[e][0] : e;
                        return a ? `${o} ${c} ago` : `in ${o} ${c}`
                    }(t, e, this.opts.numeric, "long" !== this.opts.style)
                }
                formatToParts(e, t) {
                    return this.rtf ? this.rtf.formatToParts(e, t) : []
                }
            }
            const ne = {
                firstDay: 1,
                minimalDays: 4,
                weekend: [6, 7]
            };
            class se {
                static fromOpts(e) {
                    return se.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN)
                }
                static create(e, t, n, s, r = !1) {
                    const i = e || Se.defaultLocale,
                        a = i || (r ? "en-US" : J || (J = (new Intl.DateTimeFormat).resolvedOptions().locale, J)),
                        o = t || Se.defaultNumberingSystem,
                        u = n || Se.defaultOutputCalendar,
                        l = Ye(s) || Se.defaultWeekSettings;
                    return new se(a, o, u, l, i)
                }
                static resetCache() {
                    J = null, Y.clear(), H.clear(), P.clear(), G.clear(), Q.clear()
                }
                static fromObject({
                    locale: e,
                    numberingSystem: t,
                    outputCalendar: n,
                    weekSettings: s
                } = {}) {
                    return se.create(e, t, n, s)
                }
                constructor(e, t, n, s, r) {
                    const [i, a, o] = function(e) {
                        const t = e.indexOf("-x-"); - 1 !== t && (e = e.substring(0, t));
                        const n = e.indexOf("-u-");
                        if (-1 === n) return [e]; {
                            let t, s;
                            try {
                                t = R(e).resolvedOptions(), s = e
                            } catch (r) {
                                const i = e.substring(0, n);
                                t = R(i).resolvedOptions(), s = i
                            }
                            const {
                                numberingSystem: r,
                                calendar: i
                            } = t;
                            return [s, r, i]
                        }
                    }(e);
                    this.locale = i, this.numberingSystem = t || a || null, this.outputCalendar = n || o || null, this.weekSettings = s, this.intl = function(e, t, n) {
                        return n || t ? (e.includes("-u-") || (e += "-u"), n && (e += `-ca-${n}`), t && (e += `-nu-${t}`), e) : e
                    }(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
                        format: {},
                        standalone: {}
                    }, this.monthsCache = {
                        format: {},
                        standalone: {}
                    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null
                }
                get fastNumbers() {
                    var e;
                    return null == this.fastNumbersCached && (this.fastNumbersCached = (!(e = this).numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || "latn" === B(e.locale).numberingSystem)), this.fastNumbersCached
                }
                listingMode() {
                    const e = this.isEnglish(),
                        t = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
                    return e && t ? "en" : "intl"
                }
                clone(e) {
                    return e && 0 !== Object.getOwnPropertyNames(e).length ? se.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, Ye(e.weekSettings) || this.weekSettings, e.defaultToEN || !1) : this
                }
                redefaultToEN(e = {}) {
                    return this.clone({ ...e,
                        defaultToEN: !0
                    })
                }
                redefaultToSystem(e = {}) {
                    return this.clone({ ...e,
                        defaultToEN: !1
                    })
                }
                months(e, t = !1) {
                    return K(this, e, mt, () => {
                        const n = "ja" === this.intl || this.intl.startsWith("ja-"),
                            s = (t &= !n) ? {
                                month: e,
                                day: "numeric"
                            } : {
                                month: e
                            },
                            r = t ? "format" : "standalone";
                        if (!this.monthsCache[r][e]) {
                            const t = n ? e => this.dtFormatter(e, s).format() : e => this.extract(e, s, "month");
                            this.monthsCache[r][e] = function(e) {
                                const t = [];
                                for (let n = 1; n <= 12; n++) {
                                    const s = gs.utc(2009, n, 1);
                                    t.push(e(s))
                                }
                                return t
                            }(t)
                        }
                        return this.monthsCache[r][e]
                    })
                }
                weekdays(e, t = !1) {
                    return K(this, e, wt, () => {
                        const n = t ? {
                                weekday: e,
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            } : {
                                weekday: e
                            },
                            s = t ? "format" : "standalone";
                        return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = function(e) {
                            const t = [];
                            for (let n = 1; n <= 7; n++) {
                                const s = gs.utc(2016, 11, 13 + n);
                                t.push(e(s))
                            }
                            return t
                        }(e => this.extract(e, n, "weekday"))), this.weekdaysCache[s][e]
                    })
                }
                meridiems() {
                    return K(this, void 0, () => pt, () => {
                        if (!this.meridiemCache) {
                            const e = {
                                hour: "numeric",
                                hourCycle: "h12"
                            };
                            this.meridiemCache = [gs.utc(2016, 11, 13, 9), gs.utc(2016, 11, 13, 19)].map(t => this.extract(t, e, "dayperiod"))
                        }
                        return this.meridiemCache
                    })
                }
                eras(e) {
                    return K(this, e, Tt, () => {
                        const t = {
                            era: e
                        };
                        return this.eraCache[e] || (this.eraCache[e] = [gs.utc(-40, 1, 1), gs.utc(2017, 1, 1)].map(e => this.extract(e, t, "era"))), this.eraCache[e]
                    })
                }
                extract(e, t, n) {
                    const s = this.dtFormatter(e, t).formatToParts().find(e => e.type.toLowerCase() === n);
                    return s ? s.value : null
                }
                numberFormatter(e = {}) {
                    return new X(this.intl, e.forceSimple || this.fastNumbers, e)
                }
                dtFormatter(e, t = {}) {
                    return new ee(e, this.intl, t)
                }
                relFormatter(e = {}) {
                    return new te(this.intl, this.isEnglish(), e)
                }
                listFormatter(e = {}) {
                    return function(e, t = {}) {
                        const n = JSON.stringify([e, t]);
                        let s = _[n];
                        return s || (s = new Intl.ListFormat(e, t), _[n] = s), s
                    }(this.intl, e)
                }
                isEnglish() {
                    return "en" === this.locale || "en-us" === this.locale.toLowerCase() || B(this.intl).locale.startsWith("en-us")
                }
                getWeekSettings() {
                    return this.weekSettings ? this.weekSettings : Ae() ? function(e) {
                        let t = Q.get(e);
                        if (!t) {
                            const n = new Intl.Locale(e);
                            t = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in t || (t = { ...ne,
                                ...t
                            }), Q.set(e, t)
                        }
                        return t
                    }(this.locale) : ne
                }
                getStartOfWeek() {
                    return this.getWeekSettings().firstDay
                }
                getMinDaysInFirstWeek() {
                    return this.getWeekSettings().minimalDays
                }
                getWeekendDays() {
                    return this.getWeekSettings().weekend
                }
                equals(e) {
                    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
                }
                toString() {
                    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`
                }
            }
            let re = null;
            class ie extends Z {
                static get utcInstance() {
                    return null === re && (re = new ie(0)), re
                }
                static instance(e) {
                    return 0 === e ? ie.utcInstance : new ie(e)
                }
                static parseSpecifier(e) {
                    if (e) {
                        const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                        if (t) return new ie(it(t[1], t[2]))
                    }
                    return null
                }
                constructor(e) {
                    super(), this.fixed = e
                }
                get type() {
                    return "fixed"
                }
                get name() {
                    return 0 === this.fixed ? "UTC" : `UTC${ut(this.fixed,"narrow")}`
                }
                get ianaName() {
                    return 0 === this.fixed ? "Etc/UTC" : `Etc/GMT${ut(-this.fixed,"narrow")}`
                }
                offsetName() {
                    return this.name
                }
                formatOffset(e, t) {
                    return ut(this.fixed, t)
                }
                get isUniversal() {
                    return !0
                }
                offset() {
                    return this.fixed
                }
                equals(e) {
                    return "fixed" === e.type && e.fixed === this.fixed
                }
                get isValid() {
                    return !0
                }
            }
            class ae extends Z {
                constructor(e) {
                    super(), this.zoneName = e
                }
                get type() {
                    return "invalid"
                }
                get name() {
                    return this.zoneName
                }
                get isUniversal() {
                    return !1
                }
                offsetName() {
                    return null
                }
                formatOffset() {
                    return ""
                }
                offset() {
                    return NaN
                }
                equals() {
                    return !1
                }
                get isValid() {
                    return !1
                }
            }

            function oe(e, t) {
                if (Le(e) || null === e) return t;
                if (e instanceof Z) return e;
                if ("string" == typeof e) {
                    const n = e.toLowerCase();
                    return "default" === n ? t : "local" === n || "system" === n ? z.instance : "utc" === n || "gmt" === n ? ie.utcInstance : ie.parseSpecifier(n) || U.create(e)
                }
                return ze(e) ? ie.instance(e) : "object" == typeof e && "offset" in e && "function" == typeof e.offset ? e : new ae(e)
            }
            const ue = {
                    arab: "[٠-٩]",
                    arabext: "[۰-۹]",
                    bali: "[᭐-᭙]",
                    beng: "[০-৯]",
                    deva: "[०-९]",
                    fullwide: "[０-９]",
                    gujr: "[૦-૯]",
                    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
                    khmr: "[០-៩]",
                    knda: "[೦-೯]",
                    laoo: "[໐-໙]",
                    limb: "[᥆-᥏]",
                    mlym: "[൦-൯]",
                    mong: "[᠐-᠙]",
                    mymr: "[၀-၉]",
                    orya: "[୦-୯]",
                    tamldec: "[௦-௯]",
                    telu: "[౦-౯]",
                    thai: "[๐-๙]",
                    tibt: "[༠-༩]",
                    latn: "\\d"
                },
                le = {
                    arab: [1632, 1641],
                    arabext: [1776, 1785],
                    bali: [6992, 7001],
                    beng: [2534, 2543],
                    deva: [2406, 2415],
                    fullwide: [65296, 65303],
                    gujr: [2790, 2799],
                    khmr: [6112, 6121],
                    knda: [3302, 3311],
                    laoo: [3792, 3801],
                    limb: [6470, 6479],
                    mlym: [3430, 3439],
                    mong: [6160, 6169],
                    mymr: [4160, 4169],
                    orya: [2918, 2927],
                    tamldec: [3046, 3055],
                    telu: [3174, 3183],
                    thai: [3664, 3673],
                    tibt: [3872, 3881]
                },
                ce = ue.hanidec.replace(/[\[|\]]/g, "").split(""),
                he = new Map;

            function de({
                numberingSystem: e
            }, t = "") {
                const n = e || "latn";
                let s = he.get(n);
                void 0 === s && (s = new Map, he.set(n, s));
                let r = s.get(t);
                return void 0 === r && (r = new RegExp(`${ue[n]}${t}`), s.set(t, r)), r
            }
            let me, fe = () => Date.now(),
                ye = "system",
                ge = null,
                we = null,
                pe = null,
                ke = 60,
                ve = null;
            class Se {
                static get now() {
                    return fe
                }
                static set now(e) {
                    fe = e
                }
                static set defaultZone(e) {
                    ye = e
                }
                static get defaultZone() {
                    return oe(ye, z.instance)
                }
                static get defaultLocale() {
                    return ge
                }
                static set defaultLocale(e) {
                    ge = e
                }
                static get defaultNumberingSystem() {
                    return we
                }
                static set defaultNumberingSystem(e) {
                    we = e
                }
                static get defaultOutputCalendar() {
                    return pe
                }
                static set defaultOutputCalendar(e) {
                    pe = e
                }
                static get defaultWeekSettings() {
                    return ve
                }
                static set defaultWeekSettings(e) {
                    ve = Ye(e)
                }
                static get twoDigitCutoffYear() {
                    return ke
                }
                static set twoDigitCutoffYear(e) {
                    ke = e % 100
                }
                static get throwOnInvalid() {
                    return me
                }
                static set throwOnInvalid(e) {
                    me = e
                }
                static resetCaches() {
                    se.resetCache(), U.resetCache(), gs.resetCache(), he.clear()
                }
            }
            class Te {
                constructor(e, t) {
                    this.reason = e, this.explanation = t
                }
                toMessage() {
                    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
                }
            }
            const be = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                Oe = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

            function Ne(e, t) {
                return new Te("unit out of range", `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)
            }

            function Me(e, t, n) {
                const s = new Date(Date.UTC(e, t - 1, n));
                e < 100 && e >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
                const r = s.getUTCDay();
                return 0 === r ? 7 : r
            }

            function De(e, t, n) {
                return n + (Qe(e) ? Oe : be)[t - 1]
            }

            function Ie(e, t) {
                const n = Qe(e) ? Oe : be,
                    s = n.findIndex(e => e < t);
                return {
                    month: s + 1,
                    day: t - n[s]
                }
            }

            function Ve(e, t) {
                return (e - t + 7) % 7 + 1
            }

            function xe(e, t = 4, n = 1) {
                const {
                    year: s,
                    month: r,
                    day: i
                } = e, a = De(s, r, i), o = Ve(Me(s, r, i), n);
                let u, l = Math.floor((a - o + 14 - t) / 7);
                return l < 1 ? (u = s - 1, l = nt(u, t, n)) : l > nt(s, t, n) ? (u = s + 1, l = 1) : u = s, {
                    weekYear: u,
                    weekNumber: l,
                    weekday: o,
                    ...lt(e)
                }
            }

            function Ee(e, t = 4, n = 1) {
                const {
                    weekYear: s,
                    weekNumber: r,
                    weekday: i
                } = e, a = Ve(Me(s, 1, t), n), o = Ke(s);
                let u, l = 7 * r + i - a - 7 + t;
                l < 1 ? (u = s - 1, l += Ke(u)) : l > o ? (u = s + 1, l -= Ke(s)) : u = s;
                const {
                    month: c,
                    day: h
                } = Ie(u, l);
                return {
                    year: u,
                    month: c,
                    day: h,
                    ...lt(e)
                }
            }

            function Ce(e) {
                const {
                    year: t,
                    month: n,
                    day: s
                } = e;
                return {
                    year: t,
                    ordinal: De(t, n, s),
                    ...lt(e)
                }
            }

            function Fe(e) {
                const {
                    year: t,
                    ordinal: n
                } = e, {
                    month: s,
                    day: r
                } = Ie(t, n);
                return {
                    year: t,
                    month: s,
                    day: r,
                    ...lt(e)
                }
            }

            function $e(e, t) {
                if (!Le(e.localWeekday) || !Le(e.localWeekNumber) || !Le(e.localWeekYear)) {
                    if (!Le(e.weekday) || !Le(e.weekNumber) || !Le(e.weekYear)) throw new o("Cannot mix locale-based week fields with ISO-based week fields");
                    return Le(e.localWeekday) || (e.weekday = e.localWeekday), Le(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber), Le(e.localWeekYear) || (e.weekYear = e.localWeekYear), delete e.localWeekday, delete e.localWeekNumber, delete e.localWeekYear, {
                        minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
                        startOfWeek: t.getStartOfWeek()
                    }
                }
                return {
                    minDaysInFirstWeek: 4,
                    startOfWeek: 1
                }
            }

            function We(e) {
                const t = je(e.year),
                    n = Re(e.month, 1, 12),
                    s = Re(e.day, 1, Xe(e.year, e.month));
                return t ? n ? !s && Ne("day", e.day) : Ne("month", e.month) : Ne("year", e.year)
            }

            function Ze(e) {
                const {
                    hour: t,
                    minute: n,
                    second: s,
                    millisecond: r
                } = e, i = Re(t, 0, 23) || 24 === t && 0 === n && 0 === s && 0 === r, a = Re(n, 0, 59), o = Re(s, 0, 59), u = Re(r, 0, 999);
                return i ? a ? o ? !u && Ne("millisecond", r) : Ne("second", s) : Ne("minute", n) : Ne("hour", t)
            }

            function Le(e) {
                return void 0 === e
            }

            function ze(e) {
                return "number" == typeof e
            }

            function je(e) {
                return "number" == typeof e && e % 1 == 0
            }

            function qe() {
                try {
                    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
                } catch (e) {
                    return !1
                }
            }

            function Ae() {
                try {
                    return "undefined" != typeof Intl && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype)
                } catch (e) {
                    return !1
                }
            }

            function Ue(e, t, n) {
                if (0 !== e.length) return e.reduce((e, s) => {
                    const r = [t(s), s];
                    return e && n(e[0], r[0]) === e[0] ? e : r
                }, null)[1]
            }

            function _e(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function Ye(e) {
                if (null == e) return null;
                if ("object" != typeof e) throw new l("Week settings must be an object");
                if (!Re(e.firstDay, 1, 7) || !Re(e.minimalDays, 1, 7) || !Array.isArray(e.weekend) || e.weekend.some(e => !Re(e, 1, 7))) throw new l("Invalid week settings");
                return {
                    firstDay: e.firstDay,
                    minimalDays: e.minimalDays,
                    weekend: Array.from(e.weekend)
                }
            }

            function Re(e, t, n) {
                return je(e) && e >= t && e <= n
            }

            function He(e, t = 2) {
                let n;
                return n = e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0"), n
            }

            function Pe(e) {
                return Le(e) || null === e || "" === e ? void 0 : parseInt(e, 10)
            }

            function Je(e) {
                return Le(e) || null === e || "" === e ? void 0 : parseFloat(e)
            }

            function Ge(e) {
                if (!Le(e) && null !== e && "" !== e) {
                    const t = 1e3 * parseFloat("0." + e);
                    return Math.floor(t)
                }
            }

            function Be(e, t, n = "round") {
                const s = 10 ** t;
                switch (n) {
                    case "expand":
                        return e > 0 ? Math.ceil(e * s) / s : Math.floor(e * s) / s;
                    case "trunc":
                        return Math.trunc(e * s) / s;
                    case "round":
                        return Math.round(e * s) / s;
                    case "floor":
                        return Math.floor(e * s) / s;
                    case "ceil":
                        return Math.ceil(e * s) / s;
                    default:
                        throw new RangeError(`Value rounding ${n} is out of range`)
                }
            }

            function Qe(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            }

            function Ke(e) {
                return Qe(e) ? 366 : 365
            }

            function Xe(e, t) {
                const n = (s = t - 1) - 12 * Math.floor(s / 12) + 1;
                var s;
                return 2 === n ? Qe(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]
            }

            function et(e) {
                let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
                return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(e.year, e.month - 1, e.day)), +t
            }

            function tt(e, t, n) {
                return -Ve(Me(e, 1, t), n) + t - 1
            }

            function nt(e, t = 4, n = 1) {
                const s = tt(e, t, n),
                    r = tt(e + 1, t, n);
                return (Ke(e) - s + r) / 7
            }

            function st(e) {
                return e > 99 ? e : e > Se.twoDigitCutoffYear ? 1900 + e : 2e3 + e
            }

            function rt(e, t, n, s = null) {
                const r = new Date(e),
                    i = {
                        hourCycle: "h23",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    };
                s && (i.timeZone = s);
                const a = {
                        timeZoneName: t,
                        ...i
                    },
                    o = new Intl.DateTimeFormat(n, a).formatToParts(r).find(e => "timezonename" === e.type.toLowerCase());
                return o ? o.value : null
            }

            function it(e, t) {
                let n = parseInt(e, 10);
                Number.isNaN(n) && (n = 0);
                const s = parseInt(t, 10) || 0;
                return 60 * n + (n < 0 || Object.is(n, -0) ? -s : s)
            }

            function at(e) {
                const t = Number(e);
                if ("boolean" == typeof e || "" === e || !Number.isFinite(t)) throw new l(`Invalid unit value ${e}`);
                return t
            }

            function ot(e, t) {
                const n = {};
                for (const s in e)
                    if (_e(e, s)) {
                        const r = e[s];
                        if (null == r) continue;
                        n[t(s)] = at(r)
                    }
                return n
            }

            function ut(e, t) {
                const n = Math.trunc(Math.abs(e / 60)),
                    s = Math.trunc(Math.abs(e % 60)),
                    r = e >= 0 ? "+" : "-";
                switch (t) {
                    case "short":
                        return `${r}${He(n,2)}:${He(s,2)}`;
                    case "narrow":
                        return `${r}${n}${s>0?`:${s}`:""}`;
                    case "techie":
                        return `${r}${He(n,2)}${He(s,2)}`;
                    default:
                        throw new RangeError(`Value format ${t} is out of range for property format`)
                }
            }

            function lt(e) {
                return function(e) {
                    return ["hour", "minute", "second", "millisecond"].reduce((t, n) => (t[n] = e[n], t), {})
                }(e)
            }
            const ct = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                ht = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dt = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

            function mt(e) {
                switch (e) {
                    case "narrow":
                        return [...dt];
                    case "short":
                        return [...ht];
                    case "long":
                        return [...ct];
                    case "numeric":
                        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
                    case "2-digit":
                        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                    default:
                        return null
                }
            }
            const ft = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                yt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                gt = ["M", "T", "W", "T", "F", "S", "S"];

            function wt(e) {
                switch (e) {
                    case "narrow":
                        return [...gt];
                    case "short":
                        return [...yt];
                    case "long":
                        return [...ft];
                    case "numeric":
                        return ["1", "2", "3", "4", "5", "6", "7"];
                    default:
                        return null
                }
            }
            const pt = ["AM", "PM"],
                kt = ["Before Christ", "Anno Domini"],
                vt = ["BC", "AD"],
                St = ["B", "A"];

            function Tt(e) {
                switch (e) {
                    case "narrow":
                        return [...St];
                    case "short":
                        return [...vt];
                    case "long":
                        return [...kt];
                    default:
                        return null
                }
            }

            function bt(e, t) {
                let n = "";
                for (const s of e) s.literal ? n += s.val : n += t(s.val);
                return n
            }
            const Ot = {
                D: f,
                DD: y,
                DDD: w,
                DDDD: p,
                t: k,
                tt: v,
                ttt: S,
                tttt: T,
                T: b,
                TT: O,
                TTT: N,
                TTTT: M,
                f: D,
                ff: V,
                fff: C,
                ffff: $,
                F: I,
                FF: x,
                FFF: F,
                FFFF: W
            };
            class Nt {
                static create(e, t = {}) {
                    return new Nt(e, t)
                }
                static parseFormat(e) {
                    let t = null,
                        n = "",
                        s = !1;
                    const r = [];
                    for (let i = 0; i < e.length; i++) {
                        const a = e.charAt(i);
                        "'" === a ? ((n.length > 0 || s) && r.push({
                            literal: s || /^\s+$/.test(n),
                            val: "" === n ? "'" : n
                        }), t = null, n = "", s = !s) : s || a === t ? n += a : (n.length > 0 && r.push({
                            literal: /^\s+$/.test(n),
                            val: n
                        }), n = a, t = a)
                    }
                    return n.length > 0 && r.push({
                        literal: s || /^\s+$/.test(n),
                        val: n
                    }), r
                }
                static macroTokenToFormatOpts(e) {
                    return Ot[e]
                }
                constructor(e, t) {
                    this.opts = t, this.loc = e, this.systemLoc = null
                }
                formatWithSystemDefault(e, t) {
                    return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts,
                        ...t
                    }).format()
                }
                dtFormatter(e, t = {}) {
                    return this.loc.dtFormatter(e, { ...this.opts,
                        ...t
                    })
                }
                formatDateTime(e, t) {
                    return this.dtFormatter(e, t).format()
                }
                formatDateTimeParts(e, t) {
                    return this.dtFormatter(e, t).formatToParts()
                }
                formatInterval(e, t) {
                    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate())
                }
                resolvedOptions(e, t) {
                    return this.dtFormatter(e, t).resolvedOptions()
                }
                num(e, t = 0, n = void 0) {
                    if (this.opts.forceSimple) return He(e, t);
                    const s = { ...this.opts
                    };
                    return t > 0 && (s.padTo = t), n && (s.signDisplay = n), this.loc.numberFormatter(s).format(e)
                }
                formatDateTimeFromString(e, t) {
                    const n = "en" === this.loc.listingMode(),
                        s = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
                        r = (t, n) => this.loc.extract(e, t, n),
                        i = t => e.isOffsetFixed && 0 === e.offset && t.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, t.format) : "",
                        a = (t, s) => n ? function(e, t) {
                            return mt(t)[e.month - 1]
                        }(e, t) : r(s ? {
                            month: t
                        } : {
                            month: t,
                            day: "numeric"
                        }, "month"),
                        o = (t, s) => n ? function(e, t) {
                            return wt(t)[e.weekday - 1]
                        }(e, t) : r(s ? {
                            weekday: t
                        } : {
                            weekday: t,
                            month: "long",
                            day: "numeric"
                        }, "weekday"),
                        u = t => {
                            const n = Nt.macroTokenToFormatOpts(t);
                            return n ? this.formatWithSystemDefault(e, n) : t
                        },
                        l = t => n ? function(e, t) {
                            return Tt(t)[e.year < 0 ? 0 : 1]
                        }(e, t) : r({
                            era: t
                        }, "era");
                    return bt(Nt.parseFormat(t), t => {
                        switch (t) {
                            case "S":
                                return this.num(e.millisecond);
                            case "u":
                            case "SSS":
                                return this.num(e.millisecond, 3);
                            case "s":
                                return this.num(e.second);
                            case "ss":
                                return this.num(e.second, 2);
                            case "uu":
                                return this.num(Math.floor(e.millisecond / 10), 2);
                            case "uuu":
                                return this.num(Math.floor(e.millisecond / 100));
                            case "m":
                                return this.num(e.minute);
                            case "mm":
                                return this.num(e.minute, 2);
                            case "h":
                                return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12);
                            case "hh":
                                return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12, 2);
                            case "H":
                                return this.num(e.hour);
                            case "HH":
                                return this.num(e.hour, 2);
                            case "Z":
                                return i({
                                    format: "narrow",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZ":
                                return i({
                                    format: "short",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZZ":
                                return i({
                                    format: "techie",
                                    allowZ: this.opts.allowZ
                                });
                            case "ZZZZ":
                                return e.zone.offsetName(e.ts, {
                                    format: "short",
                                    locale: this.loc.locale
                                });
                            case "ZZZZZ":
                                return e.zone.offsetName(e.ts, {
                                    format: "long",
                                    locale: this.loc.locale
                                });
                            case "z":
                                return e.zoneName;
                            case "a":
                                return n ? function(e) {
                                    return pt[e.hour < 12 ? 0 : 1]
                                }(e) : r({
                                    hour: "numeric",
                                    hourCycle: "h12"
                                }, "dayperiod");
                            case "d":
                                return s ? r({
                                    day: "numeric"
                                }, "day") : this.num(e.day);
                            case "dd":
                                return s ? r({
                                    day: "2-digit"
                                }, "day") : this.num(e.day, 2);
                            case "c":
                            case "E":
                                return this.num(e.weekday);
                            case "ccc":
                                return o("short", !0);
                            case "cccc":
                                return o("long", !0);
                            case "ccccc":
                                return o("narrow", !0);
                            case "EEE":
                                return o("short", !1);
                            case "EEEE":
                                return o("long", !1);
                            case "EEEEE":
                                return o("narrow", !1);
                            case "L":
                                return s ? r({
                                    month: "numeric",
                                    day: "numeric"
                                }, "month") : this.num(e.month);
                            case "LL":
                                return s ? r({
                                    month: "2-digit",
                                    day: "numeric"
                                }, "month") : this.num(e.month, 2);
                            case "LLL":
                                return a("short", !0);
                            case "LLLL":
                                return a("long", !0);
                            case "LLLLL":
                                return a("narrow", !0);
                            case "M":
                                return s ? r({
                                    month: "numeric"
                                }, "month") : this.num(e.month);
                            case "MM":
                                return s ? r({
                                    month: "2-digit"
                                }, "month") : this.num(e.month, 2);
                            case "MMM":
                                return a("short", !1);
                            case "MMMM":
                                return a("long", !1);
                            case "MMMMM":
                                return a("narrow", !1);
                            case "y":
                                return s ? r({
                                    year: "numeric"
                                }, "year") : this.num(e.year);
                            case "yy":
                                return s ? r({
                                    year: "2-digit"
                                }, "year") : this.num(e.year.toString().slice(-2), 2);
                            case "yyyy":
                                return s ? r({
                                    year: "numeric"
                                }, "year") : this.num(e.year, 4);
                            case "yyyyyy":
                                return s ? r({
                                    year: "numeric"
                                }, "year") : this.num(e.year, 6);
                            case "G":
                                return l("short");
                            case "GG":
                                return l("long");
                            case "GGGGG":
                                return l("narrow");
                            case "kk":
                                return this.num(e.weekYear.toString().slice(-2), 2);
                            case "kkkk":
                                return this.num(e.weekYear, 4);
                            case "W":
                                return this.num(e.weekNumber);
                            case "WW":
                                return this.num(e.weekNumber, 2);
                            case "n":
                                return this.num(e.localWeekNumber);
                            case "nn":
                                return this.num(e.localWeekNumber, 2);
                            case "ii":
                                return this.num(e.localWeekYear.toString().slice(-2), 2);
                            case "iiii":
                                return this.num(e.localWeekYear, 4);
                            case "o":
                                return this.num(e.ordinal);
                            case "ooo":
                                return this.num(e.ordinal, 3);
                            case "q":
                                return this.num(e.quarter);
                            case "qq":
                                return this.num(e.quarter, 2);
                            case "X":
                                return this.num(Math.floor(e.ts / 1e3));
                            case "x":
                                return this.num(e.ts);
                            default:
                                return u(t)
                        }
                    })
                }
                formatDurationFromString(e, t) {
                    const n = "negativeLargestOnly" === this.opts.signMode ? -1 : 1,
                        s = e => {
                            switch (e[0]) {
                                case "S":
                                    return "milliseconds";
                                case "s":
                                    return "seconds";
                                case "m":
                                    return "minutes";
                                case "h":
                                    return "hours";
                                case "d":
                                    return "days";
                                case "w":
                                    return "weeks";
                                case "M":
                                    return "months";
                                case "y":
                                    return "years";
                                default:
                                    return null
                            }
                        },
                        r = Nt.parseFormat(t),
                        i = r.reduce((e, {
                            literal: t,
                            val: n
                        }) => t ? e : e.concat(n), []),
                        a = e.shiftTo(...i.map(s).filter(e => e));
                    return bt(r, ((e, t) => r => {
                        const i = s(r);
                        if (i) {
                            const s = t.isNegativeDuration && i !== t.largestUnit ? n : 1;
                            let a;
                            return a = "negativeLargestOnly" === this.opts.signMode && i !== t.largestUnit ? "never" : "all" === this.opts.signMode ? "always" : "auto", this.num(e.get(i) * s, r.length, a)
                        }
                        return r
                    })(a, {
                        isNegativeDuration: a < 0,
                        largestUnit: Object.keys(a.values)[0]
                    }))
                }
            }
            const Mt = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

            function Dt(...e) {
                const t = e.reduce((e, t) => e + t.source, "");
                return RegExp(`^${t}$`)
            }

            function It(...e) {
                return t => e.reduce(([e, n, s], r) => {
                    const [i, a, o] = r(t, s);
                    return [{ ...e,
                        ...i
                    }, a || n, o]
                }, [{}, null, 1]).slice(0, 2)
            }

            function Vt(e, ...t) {
                if (null == e) return [null, null];
                for (const [n, s] of t) {
                    const t = n.exec(e);
                    if (t) return s(t)
                }
                return [null, null]
            }

            function xt(...e) {
                return (t, n) => {
                    const s = {};
                    let r;
                    for (r = 0; r < e.length; r++) s[e[r]] = Pe(t[n + r]);
                    return [s, null, n + r]
                }
            }
            const Et = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,
                Ct = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
                Ft = RegExp(`${Ct.source}(?:${Et.source}?(?:\\[(${Mt.source})\\])?)?`),
                $t = RegExp(`(?:[Tt]${Ft.source})?`),
                Wt = xt("weekYear", "weekNumber", "weekDay"),
                Zt = xt("year", "ordinal"),
                Lt = RegExp(`${Ct.source} ?(?:${Et.source}|(${Mt.source}))?`),
                zt = RegExp(`(?: ${Lt.source})?`);

            function jt(e, t, n) {
                const s = e[t];
                return Le(s) ? n : Pe(s)
            }

            function qt(e, t) {
                return [{
                    hours: jt(e, t, 0),
                    minutes: jt(e, t + 1, 0),
                    seconds: jt(e, t + 2, 0),
                    milliseconds: Ge(e[t + 3])
                }, null, t + 4]
            }

            function At(e, t) {
                const n = !e[t] && !e[t + 1],
                    s = it(e[t + 1], e[t + 2]);
                return [{}, n ? null : ie.instance(s), t + 3]
            }

            function Ut(e, t) {
                return [{}, e[t] ? U.create(e[t]) : null, t + 1]
            }
            const _t = RegExp(`^T?${Ct.source}$`),
                Yt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

            function Rt(e) {
                const [t, n, s, r, i, a, o, u, l] = e, c = "-" === t[0], h = u && "-" === u[0], d = (e, t = !1) => void 0 !== e && (t || e && c) ? -e : e;
                return [{
                    years: d(Je(n)),
                    months: d(Je(s)),
                    weeks: d(Je(r)),
                    days: d(Je(i)),
                    hours: d(Je(a)),
                    minutes: d(Je(o)),
                    seconds: d(Je(u), "-0" === u),
                    milliseconds: d(Ge(l), h)
                }]
            }
            const Ht = {
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Pt(e, t, n, s, r, i, a) {
                const o = {
                    year: 2 === t.length ? st(Pe(t)) : Pe(t),
                    month: ht.indexOf(n) + 1,
                    day: Pe(s),
                    hour: Pe(r),
                    minute: Pe(i)
                };
                return a && (o.second = Pe(a)), e && (o.weekday = e.length > 3 ? ft.indexOf(e) + 1 : yt.indexOf(e) + 1), o
            }
            const Jt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

            function Gt(e) {
                const [, t, n, s, r, i, a, o, u, l, c, h] = e, d = Pt(t, r, s, n, i, a, o);
                let m;
                return m = u ? Ht[u] : l ? 0 : it(c, h), [d, new ie(m)]
            }
            const Bt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
                Qt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
                Kt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

            function Xt(e) {
                const [, t, n, s, r, i, a, o] = e;
                return [Pt(t, r, s, n, i, a, o), ie.utcInstance]
            }

            function en(e) {
                const [, t, n, s, r, i, a, o] = e;
                return [Pt(t, o, n, s, r, i, a), ie.utcInstance]
            }
            const tn = Dt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, $t),
                nn = Dt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, $t),
                sn = Dt(/(\d{4})-?(\d{3})/, $t),
                rn = Dt(Ft),
                an = It(function(e, t) {
                    return [{
                        year: jt(e, t),
                        month: jt(e, t + 1, 1),
                        day: jt(e, t + 2, 1)
                    }, null, t + 3]
                }, qt, At, Ut),
                on = It(Wt, qt, At, Ut),
                un = It(Zt, qt, At, Ut),
                ln = It(qt, At, Ut),
                cn = It(qt),
                hn = Dt(/(\d{4})-(\d\d)-(\d\d)/, zt),
                dn = Dt(Lt),
                mn = It(qt, At, Ut),
                fn = "Invalid Duration",
                yn = {
                    weeks: {
                        days: 7,
                        hours: 168,
                        minutes: 10080,
                        seconds: 604800,
                        milliseconds: 6048e5
                    },
                    days: {
                        hours: 24,
                        minutes: 1440,
                        seconds: 86400,
                        milliseconds: 864e5
                    },
                    hours: {
                        minutes: 60,
                        seconds: 3600,
                        milliseconds: 36e5
                    },
                    minutes: {
                        seconds: 60,
                        milliseconds: 6e4
                    },
                    seconds: {
                        milliseconds: 1e3
                    }
                },
                gn = {
                    years: {
                        quarters: 4,
                        months: 12,
                        weeks: 52,
                        days: 365,
                        hours: 8760,
                        minutes: 525600,
                        seconds: 31536e3,
                        milliseconds: 31536e6
                    },
                    quarters: {
                        months: 3,
                        weeks: 13,
                        days: 91,
                        hours: 2184,
                        minutes: 131040,
                        seconds: 7862400,
                        milliseconds: 78624e5
                    },
                    months: {
                        weeks: 4,
                        days: 30,
                        hours: 720,
                        minutes: 43200,
                        seconds: 2592e3,
                        milliseconds: 2592e6
                    },
                    ...yn
                },
                wn = {
                    years: {
                        quarters: 4,
                        months: 12,
                        weeks: 52.1775,
                        days: 365.2425,
                        hours: 8765.82,
                        minutes: 525949.2,
                        seconds: 525949.2 * 60,
                        milliseconds: 525949.2 * 60 * 1e3
                    },
                    quarters: {
                        months: 3,
                        weeks: 13.044375,
                        days: 91.310625,
                        hours: 2191.455,
                        minutes: 131487.3,
                        seconds: 525949.2 * 60 / 4,
                        milliseconds: 7889237999.999999
                    },
                    months: {
                        weeks: 4.3481250000000005,
                        days: 30.436875,
                        hours: 730.485,
                        minutes: 43829.1,
                        seconds: 2629746,
                        milliseconds: 2629746e3
                    },
                    ...yn
                },
                pn = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
                kn = pn.slice(0).reverse();

            function vn(e, t, n = !1) {
                const s = {
                    values: n ? t.values : { ...e.values,
                        ...t.values || {}
                    },
                    loc: e.loc.clone(t.loc),
                    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
                    matrix: t.matrix || e.matrix
                };
                return new On(s)
            }

            function Sn(e, t) {
                let n = t.milliseconds ? ? 0;
                for (const s of kn.slice(1)) t[s] && (n += t[s] * e[s].milliseconds);
                return n
            }

            function Tn(e, t) {
                const n = Sn(e, t) < 0 ? -1 : 1;
                pn.reduceRight((s, r) => {
                    if (Le(t[r])) return s;
                    if (s) {
                        const i = t[s] * n,
                            a = e[r][s],
                            o = Math.floor(i / a);
                        t[r] += o * n, t[s] -= o * a * n
                    }
                    return r
                }, null), pn.reduce((n, s) => {
                    if (Le(t[s])) return n;
                    if (n) {
                        const r = t[n] % 1;
                        t[n] -= r, t[s] += r * e[n][s]
                    }
                    return s
                }, null)
            }

            function bn(e) {
                const t = {};
                for (const [n, s] of Object.entries(e)) 0 !== s && (t[n] = s);
                return t
            }
            class On {
                constructor(e) {
                    const t = "longterm" === e.conversionAccuracy || !1;
                    let n = t ? wn : gn;
                    e.matrix && (n = e.matrix), this.values = e.values, this.loc = e.loc || se.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = n, this.isLuxonDuration = !0
                }
                static fromMillis(e, t) {
                    return On.fromObject({
                        milliseconds: e
                    }, t)
                }
                static fromObject(e, t = {}) {
                    if (null == e || "object" != typeof e) throw new l("Duration.fromObject: argument expected to be an object, got " + (null === e ? "null" : typeof e));
                    return new On({
                        values: ot(e, On.normalizeUnit),
                        loc: se.fromObject(t),
                        conversionAccuracy: t.conversionAccuracy,
                        matrix: t.matrix
                    })
                }
                static fromDurationLike(e) {
                    if (ze(e)) return On.fromMillis(e);
                    if (On.isDuration(e)) return e;
                    if ("object" == typeof e) return On.fromObject(e);
                    throw new l(`Unknown duration argument ${e} of type ${typeof e}`)
                }
                static fromISO(e, t) {
                    const [n] = function(e) {
                        return Vt(e, [Yt, Rt])
                    }(e);
                    return n ? On.fromObject(n, t) : On.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
                }
                static fromISOTime(e, t) {
                    const [n] = function(e) {
                        return Vt(e, [_t, cn])
                    }(e);
                    return n ? On.fromObject(n, t) : On.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
                }
                static invalid(e, t = null) {
                    if (!e) throw new l("need to specify a reason the Duration is invalid");
                    const n = e instanceof Te ? e : new Te(e, t);
                    if (Se.throwOnInvalid) throw new a(n);
                    return new On({
                        invalid: n
                    })
                }
                static normalizeUnit(e) {
                    const t = {
                        year: "years",
                        years: "years",
                        quarter: "quarters",
                        quarters: "quarters",
                        month: "months",
                        months: "months",
                        week: "weeks",
                        weeks: "weeks",
                        day: "days",
                        days: "days",
                        hour: "hours",
                        hours: "hours",
                        minute: "minutes",
                        minutes: "minutes",
                        second: "seconds",
                        seconds: "seconds",
                        millisecond: "milliseconds",
                        milliseconds: "milliseconds"
                    }[e ? e.toLowerCase() : e];
                    if (!t) throw new u(e);
                    return t
                }
                static isDuration(e) {
                    return e && e.isLuxonDuration || !1
                }
                get locale() {
                    return this.isValid ? this.loc.locale : null
                }
                get numberingSystem() {
                    return this.isValid ? this.loc.numberingSystem : null
                }
                toFormat(e, t = {}) {
                    const n = { ...t,
                        floor: !1 !== t.round && !1 !== t.floor
                    };
                    return this.isValid ? Nt.create(this.loc, n).formatDurationFromString(this, e) : fn
                }
                toHuman(e = {}) {
                    if (!this.isValid) return fn;
                    const t = !1 !== e.showZeros,
                        n = pn.map(n => {
                            const s = this.values[n];
                            return Le(s) || 0 === s && !t ? null : this.loc.numberFormatter({
                                style: "unit",
                                unitDisplay: "long",
                                ...e,
                                unit: n.slice(0, -1)
                            }).format(s)
                        }).filter(e => e);
                    return this.loc.listFormatter({
                        type: "conjunction",
                        style: e.listStyle || "narrow",
                        ...e
                    }).format(n)
                }
                toObject() {
                    return this.isValid ? { ...this.values
                    } : {}
                }
                toISO() {
                    if (!this.isValid) return null;
                    let e = "P";
                    return 0 !== this.years && (e += this.years + "Y"), 0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"), 0 !== this.weeks && (e += this.weeks + "W"), 0 !== this.days && (e += this.days + "D"), 0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"), 0 !== this.hours && (e += this.hours + "H"), 0 !== this.minutes && (e += this.minutes + "M"), 0 === this.seconds && 0 === this.milliseconds || (e += Be(this.seconds + this.milliseconds / 1e3, 3) + "S"), "P" === e && (e += "T0S"), e
                }
                toISOTime(e = {}) {
                    if (!this.isValid) return null;
                    const t = this.toMillis();
                    return t < 0 || t >= 864e5 ? null : (e = {
                        suppressMilliseconds: !1,
                        suppressSeconds: !1,
                        includePrefix: !1,
                        format: "extended",
                        ...e,
                        includeOffset: !1
                    }, gs.fromMillis(t, {
                        zone: "UTC"
                    }).toISOTime(e))
                }
                toJSON() {
                    return this.toISO()
                }
                toString() {
                    return this.toISO()
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`
                }
                toMillis() {
                    return this.isValid ? Sn(this.matrix, this.values) : NaN
                }
                valueOf() {
                    return this.toMillis()
                }
                plus(e) {
                    if (!this.isValid) return this;
                    const t = On.fromDurationLike(e),
                        n = {};
                    for (const e of pn)(_e(t.values, e) || _e(this.values, e)) && (n[e] = t.get(e) + this.get(e));
                    return vn(this, {
                        values: n
                    }, !0)
                }
                minus(e) {
                    if (!this.isValid) return this;
                    const t = On.fromDurationLike(e);
                    return this.plus(t.negate())
                }
                mapUnits(e) {
                    if (!this.isValid) return this;
                    const t = {};
                    for (const n of Object.keys(this.values)) t[n] = at(e(this.values[n], n));
                    return vn(this, {
                        values: t
                    }, !0)
                }
                get(e) {
                    return this[On.normalizeUnit(e)]
                }
                set(e) {
                    return this.isValid ? vn(this, {
                        values: { ...this.values,
                            ...ot(e, On.normalizeUnit)
                        }
                    }) : this
                }
                reconfigure({
                    locale: e,
                    numberingSystem: t,
                    conversionAccuracy: n,
                    matrix: s
                } = {}) {
                    return vn(this, {
                        loc: this.loc.clone({
                            locale: e,
                            numberingSystem: t
                        }),
                        matrix: s,
                        conversionAccuracy: n
                    })
                }
                as(e) {
                    return this.isValid ? this.shiftTo(e).get(e) : NaN
                }
                normalize() {
                    if (!this.isValid) return this;
                    const e = this.toObject();
                    return Tn(this.matrix, e), vn(this, {
                        values: e
                    }, !0)
                }
                rescale() {
                    return this.isValid ? vn(this, {
                        values: bn(this.normalize().shiftToAll().toObject())
                    }, !0) : this
                }
                shiftTo(...e) {
                    if (!this.isValid) return this;
                    if (0 === e.length) return this;
                    e = e.map(e => On.normalizeUnit(e));
                    const t = {},
                        n = {},
                        s = this.toObject();
                    let r;
                    for (const i of pn)
                        if (e.indexOf(i) >= 0) {
                            r = i;
                            let e = 0;
                            for (const t in n) e += this.matrix[t][i] * n[t], n[t] = 0;
                            ze(s[i]) && (e += s[i]);
                            const a = Math.trunc(e);
                            t[i] = a, n[i] = (1e3 * e - 1e3 * a) / 1e3
                        } else ze(s[i]) && (n[i] = s[i]);
                    for (const e in n) 0 !== n[e] && (t[r] += e === r ? n[e] : n[e] / this.matrix[r][e]);
                    return Tn(this.matrix, t), vn(this, {
                        values: t
                    }, !0)
                }
                shiftToAll() {
                    return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
                }
                negate() {
                    if (!this.isValid) return this;
                    const e = {};
                    for (const t of Object.keys(this.values)) e[t] = 0 === this.values[t] ? 0 : -this.values[t];
                    return vn(this, {
                        values: e
                    }, !0)
                }
                removeZeros() {
                    return this.isValid ? vn(this, {
                        values: bn(this.values)
                    }, !0) : this
                }
                get years() {
                    return this.isValid ? this.values.years || 0 : NaN
                }
                get quarters() {
                    return this.isValid ? this.values.quarters || 0 : NaN
                }
                get months() {
                    return this.isValid ? this.values.months || 0 : NaN
                }
                get weeks() {
                    return this.isValid ? this.values.weeks || 0 : NaN
                }
                get days() {
                    return this.isValid ? this.values.days || 0 : NaN
                }
                get hours() {
                    return this.isValid ? this.values.hours || 0 : NaN
                }
                get minutes() {
                    return this.isValid ? this.values.minutes || 0 : NaN
                }
                get seconds() {
                    return this.isValid ? this.values.seconds || 0 : NaN
                }
                get milliseconds() {
                    return this.isValid ? this.values.milliseconds || 0 : NaN
                }
                get isValid() {
                    return null === this.invalid
                }
                get invalidReason() {
                    return this.invalid ? this.invalid.reason : null
                }
                get invalidExplanation() {
                    return this.invalid ? this.invalid.explanation : null
                }
                equals(e) {
                    if (!this.isValid || !e.isValid) return !1;
                    if (!this.loc.equals(e.loc)) return !1;

                    function t(e, t) {
                        return void 0 === e || 0 === e ? void 0 === t || 0 === t : e === t
                    }
                    for (const n of pn)
                        if (!t(this.values[n], e.values[n])) return !1;
                    return !0
                }
            }
            const Nn = "Invalid Interval";
            class Mn {
                constructor(e) {
                    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0
                }
                static invalid(e, t = null) {
                    if (!e) throw new l("need to specify a reason the Interval is invalid");
                    const n = e instanceof Te ? e : new Te(e, t);
                    if (Se.throwOnInvalid) throw new i(n);
                    return new Mn({
                        invalid: n
                    })
                }
                static fromDateTimes(e, t) {
                    const n = ws(e),
                        s = ws(t),
                        r = function(e, t) {
                            return e && e.isValid ? t && t.isValid ? t < e ? Mn.invalid("end before start", `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`) : null : Mn.invalid("missing or invalid end") : Mn.invalid("missing or invalid start")
                        }(n, s);
                    return null == r ? new Mn({
                        start: n,
                        end: s
                    }) : r
                }
                static after(e, t) {
                    const n = On.fromDurationLike(t),
                        s = ws(e);
                    return Mn.fromDateTimes(s, s.plus(n))
                }
                static before(e, t) {
                    const n = On.fromDurationLike(t),
                        s = ws(e);
                    return Mn.fromDateTimes(s.minus(n), s)
                }
                static fromISO(e, t) {
                    const [n, s] = (e || "").split("/", 2);
                    if (n && s) {
                        let e, r, i, a;
                        try {
                            e = gs.fromISO(n, t), r = e.isValid
                        } catch (s) {
                            r = !1
                        }
                        try {
                            i = gs.fromISO(s, t), a = i.isValid
                        } catch (s) {
                            a = !1
                        }
                        if (r && a) return Mn.fromDateTimes(e, i);
                        if (r) {
                            const n = On.fromISO(s, t);
                            if (n.isValid) return Mn.after(e, n)
                        } else if (a) {
                            const e = On.fromISO(n, t);
                            if (e.isValid) return Mn.before(i, e)
                        }
                    }
                    return Mn.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
                }
                static isInterval(e) {
                    return e && e.isLuxonInterval || !1
                }
                get start() {
                    return this.isValid ? this.s : null
                }
                get end() {
                    return this.isValid ? this.e : null
                }
                get lastDateTime() {
                    return this.isValid && this.e ? this.e.minus(1) : null
                }
                get isValid() {
                    return null === this.invalidReason
                }
                get invalidReason() {
                    return this.invalid ? this.invalid.reason : null
                }
                get invalidExplanation() {
                    return this.invalid ? this.invalid.explanation : null
                }
                length(e = "milliseconds") {
                    return this.isValid ? this.toDuration(e).get(e) : NaN
                }
                count(e = "milliseconds", t) {
                    if (!this.isValid) return NaN;
                    const n = this.start.startOf(e, t);
                    let s;
                    return s = t ? .useLocaleWeeks ? this.end.reconfigure({
                        locale: n.locale
                    }) : this.end, s = s.startOf(e, t), Math.floor(s.diff(n, e).get(e)) + (s.valueOf() !== this.end.valueOf())
                }
                hasSame(e) {
                    return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
                }
                isEmpty() {
                    return this.s.valueOf() === this.e.valueOf()
                }
                isAfter(e) {
                    return !!this.isValid && this.s > e
                }
                isBefore(e) {
                    return !!this.isValid && this.e <= e
                }
                contains(e) {
                    return !!this.isValid && this.s <= e && this.e > e
                }
                set({
                    start: e,
                    end: t
                } = {}) {
                    return this.isValid ? Mn.fromDateTimes(e || this.s, t || this.e) : this
                }
                splitAt(...e) {
                    if (!this.isValid) return [];
                    const t = e.map(ws).filter(e => this.contains(e)).sort((e, t) => e.toMillis() - t.toMillis()),
                        n = [];
                    let {
                        s
                    } = this, r = 0;
                    for (; s < this.e;) {
                        const e = t[r] || this.e,
                            i = +e > +this.e ? this.e : e;
                        n.push(Mn.fromDateTimes(s, i)), s = i, r += 1
                    }
                    return n
                }
                splitBy(e) {
                    const t = On.fromDurationLike(e);
                    if (!this.isValid || !t.isValid || 0 === t.as("milliseconds")) return [];
                    let n, {
                            s
                        } = this,
                        r = 1;
                    const i = [];
                    for (; s < this.e;) {
                        const e = this.start.plus(t.mapUnits(e => e * r));
                        n = +e > +this.e ? this.e : e, i.push(Mn.fromDateTimes(s, n)), s = n, r += 1
                    }
                    return i
                }
                divideEqually(e) {
                    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
                }
                overlaps(e) {
                    return this.e > e.s && this.s < e.e
                }
                abutsStart(e) {
                    return !!this.isValid && +this.e === +e.s
                }
                abutsEnd(e) {
                    return !!this.isValid && +e.e === +this.s
                }
                engulfs(e) {
                    return !!this.isValid && this.s <= e.s && this.e >= e.e
                }
                equals(e) {
                    return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
                }
                intersection(e) {
                    if (!this.isValid) return this;
                    const t = this.s > e.s ? this.s : e.s,
                        n = this.e < e.e ? this.e : e.e;
                    return t >= n ? null : Mn.fromDateTimes(t, n)
                }
                union(e) {
                    if (!this.isValid) return this;
                    const t = this.s < e.s ? this.s : e.s,
                        n = this.e > e.e ? this.e : e.e;
                    return Mn.fromDateTimes(t, n)
                }
                static merge(e) {
                    const [t, n] = e.sort((e, t) => e.s - t.s).reduce(([e, t], n) => t ? t.overlaps(n) || t.abutsStart(n) ? [e, t.union(n)] : [e.concat([t]), n] : [e, n], [
                        [], null
                    ]);
                    return n && t.push(n), t
                }
                static xor(e) {
                    let t = null,
                        n = 0;
                    const s = [],
                        r = e.map(e => [{
                            time: e.s,
                            type: "s"
                        }, {
                            time: e.e,
                            type: "e"
                        }]),
                        i = Array.prototype.concat(...r).sort((e, t) => e.time - t.time);
                    for (const e of i) n += "s" === e.type ? 1 : -1, 1 === n ? t = e.time : (t && +t !== +e.time && s.push(Mn.fromDateTimes(t, e.time)), t = null);
                    return Mn.merge(s)
                }
                difference(...e) {
                    return Mn.xor([this].concat(e)).map(e => this.intersection(e)).filter(e => e && !e.isEmpty())
                }
                toString() {
                    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Nn
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`
                }
                toLocaleString(e = f, t = {}) {
                    return this.isValid ? Nt.create(this.s.loc.clone(t), e).formatInterval(this) : Nn
                }
                toISO(e) {
                    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Nn
                }
                toISODate() {
                    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Nn
                }
                toISOTime(e) {
                    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Nn
                }
                toFormat(e, {
                    separator: t = " – "
                } = {}) {
                    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Nn
                }
                toDuration(e, t) {
                    return this.isValid ? this.e.diff(this.s, e, t) : On.invalid(this.invalidReason)
                }
                mapEndpoints(e) {
                    return Mn.fromDateTimes(e(this.s), e(this.e))
                }
            }
            class Dn {
                static hasDST(e = Se.defaultZone) {
                    const t = gs.now().setZone(e).set({
                        month: 12
                    });
                    return !e.isUniversal && t.offset !== t.set({
                        month: 6
                    }).offset
                }
                static isValidIANAZone(e) {
                    return U.isValidZone(e)
                }
                static normalizeZone(e) {
                    return oe(e, Se.defaultZone)
                }
                static getStartOfWeek({
                    locale: e = null,
                    locObj: t = null
                } = {}) {
                    return (t || se.create(e)).getStartOfWeek()
                }
                static getMinimumDaysInFirstWeek({
                    locale: e = null,
                    locObj: t = null
                } = {}) {
                    return (t || se.create(e)).getMinDaysInFirstWeek()
                }
                static getWeekendWeekdays({
                    locale: e = null,
                    locObj: t = null
                } = {}) {
                    return (t || se.create(e)).getWeekendDays().slice()
                }
                static months(e = "long", {
                    locale: t = null,
                    numberingSystem: n = null,
                    locObj: s = null,
                    outputCalendar: r = "gregory"
                } = {}) {
                    return (s || se.create(t, n, r)).months(e)
                }
                static monthsFormat(e = "long", {
                    locale: t = null,
                    numberingSystem: n = null,
                    locObj: s = null,
                    outputCalendar: r = "gregory"
                } = {}) {
                    return (s || se.create(t, n, r)).months(e, !0)
                }
                static weekdays(e = "long", {
                    locale: t = null,
                    numberingSystem: n = null,
                    locObj: s = null
                } = {}) {
                    return (s || se.create(t, n, null)).weekdays(e)
                }
                static weekdaysFormat(e = "long", {
                    locale: t = null,
                    numberingSystem: n = null,
                    locObj: s = null
                } = {}) {
                    return (s || se.create(t, n, null)).weekdays(e, !0)
                }
                static meridiems({
                    locale: e = null
                } = {}) {
                    return se.create(e).meridiems()
                }
                static eras(e = "short", {
                    locale: t = null
                } = {}) {
                    return se.create(t, null, "gregory").eras(e)
                }
                static features() {
                    return {
                        relative: qe(),
                        localeWeek: Ae()
                    }
                }
            }

            function In(e, t) {
                const n = e => e.toUTC(0, {
                        keepLocalTime: !0
                    }).startOf("day").valueOf(),
                    s = n(t) - n(e);
                return Math.floor(On.fromMillis(s).as("days"))
            }

            function Vn(e, t = e => e) {
                return {
                    regex: e,
                    deser: ([e]) => t(function(e) {
                        let t = parseInt(e, 10);
                        if (isNaN(t)) {
                            t = "";
                            for (let n = 0; n < e.length; n++) {
                                const s = e.charCodeAt(n);
                                if (-1 !== e[n].search(ue.hanidec)) t += ce.indexOf(e[n]);
                                else
                                    for (const e in le) {
                                        const [n, r] = le[e];
                                        s >= n && s <= r && (t += s - n)
                                    }
                            }
                            return parseInt(t, 10)
                        }
                        return t
                    }(e))
                }
            }
            const xn = `[ ${String.fromCharCode(160)}]`,
                En = new RegExp(xn, "g");

            function Cn(e) {
                return e.replace(/\./g, "\\.?").replace(En, xn)
            }

            function Fn(e) {
                return e.replace(/\./g, "").replace(En, " ").toLowerCase()
            }

            function $n(e, t) {
                return null === e ? null : {
                    regex: RegExp(e.map(Cn).join("|")),
                    deser: ([n]) => e.findIndex(e => Fn(n) === Fn(e)) + t
                }
            }

            function Wn(e, t) {
                return {
                    regex: e,
                    deser: ([, e, t]) => it(e, t),
                    groups: t
                }
            }

            function Zn(e) {
                return {
                    regex: e,
                    deser: ([e]) => e
                }
            }
            const Ln = {
                year: {
                    "2-digit": "yy",
                    numeric: "yyyyy"
                },
                month: {
                    numeric: "M",
                    "2-digit": "MM",
                    short: "MMM",
                    long: "MMMM"
                },
                day: {
                    numeric: "d",
                    "2-digit": "dd"
                },
                weekday: {
                    short: "EEE",
                    long: "EEEE"
                },
                dayperiod: "a",
                dayPeriod: "a",
                hour12: {
                    numeric: "h",
                    "2-digit": "hh"
                },
                hour24: {
                    numeric: "H",
                    "2-digit": "HH"
                },
                minute: {
                    numeric: "m",
                    "2-digit": "mm"
                },
                second: {
                    numeric: "s",
                    "2-digit": "ss"
                },
                timeZoneName: {
                    long: "ZZZZZ",
                    short: "ZZZ"
                }
            };
            let zn = null;

            function jn(e, t) {
                return Array.prototype.concat(...e.map(e => function(e, t) {
                    if (e.literal) return e;
                    const n = Un(Nt.macroTokenToFormatOpts(e.val), t);
                    return null == n || n.includes(void 0) ? e : n
                }(e, t)))
            }
            class qn {
                constructor(e, t) {
                    if (this.locale = e, this.format = t, this.tokens = jn(Nt.parseFormat(t), e), this.units = this.tokens.map(t => function(e, t) {
                            const n = de(t),
                                s = de(t, "{2}"),
                                r = de(t, "{3}"),
                                i = de(t, "{4}"),
                                a = de(t, "{6}"),
                                o = de(t, "{1,2}"),
                                u = de(t, "{1,3}"),
                                l = de(t, "{1,6}"),
                                c = de(t, "{1,9}"),
                                h = de(t, "{2,4}"),
                                d = de(t, "{4,6}"),
                                m = e => {
                                    return {
                                        regex: RegExp((t = e.val, t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))),
                                        deser: ([e]) => e,
                                        literal: !0
                                    };
                                    var t
                                },
                                f = (f => {
                                    if (e.literal) return m(f);
                                    switch (f.val) {
                                        case "G":
                                            return $n(t.eras("short"), 0);
                                        case "GG":
                                            return $n(t.eras("long"), 0);
                                        case "y":
                                            return Vn(l);
                                        case "yy":
                                        case "kk":
                                            return Vn(h, st);
                                        case "yyyy":
                                        case "kkkk":
                                            return Vn(i);
                                        case "yyyyy":
                                            return Vn(d);
                                        case "yyyyyy":
                                            return Vn(a);
                                        case "M":
                                        case "L":
                                        case "d":
                                        case "H":
                                        case "h":
                                        case "m":
                                        case "q":
                                        case "s":
                                        case "W":
                                            return Vn(o);
                                        case "MM":
                                        case "LL":
                                        case "dd":
                                        case "HH":
                                        case "hh":
                                        case "mm":
                                        case "qq":
                                        case "ss":
                                        case "WW":
                                            return Vn(s);
                                        case "MMM":
                                            return $n(t.months("short", !0), 1);
                                        case "MMMM":
                                            return $n(t.months("long", !0), 1);
                                        case "LLL":
                                            return $n(t.months("short", !1), 1);
                                        case "LLLL":
                                            return $n(t.months("long", !1), 1);
                                        case "o":
                                        case "S":
                                            return Vn(u);
                                        case "ooo":
                                        case "SSS":
                                            return Vn(r);
                                        case "u":
                                            return Zn(c);
                                        case "uu":
                                            return Zn(o);
                                        case "uuu":
                                        case "E":
                                        case "c":
                                            return Vn(n);
                                        case "a":
                                            return $n(t.meridiems(), 0);
                                        case "EEE":
                                            return $n(t.weekdays("short", !1), 1);
                                        case "EEEE":
                                            return $n(t.weekdays("long", !1), 1);
                                        case "ccc":
                                            return $n(t.weekdays("short", !0), 1);
                                        case "cccc":
                                            return $n(t.weekdays("long", !0), 1);
                                        case "Z":
                                        case "ZZ":
                                            return Wn(new RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
                                        case "ZZZ":
                                            return Wn(new RegExp(`([+-]${o.source})(${s.source})?`), 2);
                                        case "z":
                                            return Zn(/[a-z_+-/]{1,256}?/i);
                                        case " ":
                                            return Zn(/[^\S\n\r]/);
                                        default:
                                            return m(f)
                                    }
                                })(e) || {
                                    invalidReason: "missing Intl.DateTimeFormat.formatToParts support"
                                };
                            return f.token = e, f
                        }(t, e)), this.disqualifyingUnit = this.units.find(e => e.invalidReason), !this.disqualifyingUnit) {
                        const [e, t] = [`^${(n=this.units).map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"")}$`, n];
                        this.regex = RegExp(e, "i"), this.handlers = t
                    }
                    var n
                }
                explainFromTokens(e) {
                    if (this.isValid) {
                        const [t, n] = function(e, t, n) {
                            const s = e.match(t);
                            if (s) {
                                const e = {};
                                let t = 1;
                                for (const r in n)
                                    if (_e(n, r)) {
                                        const i = n[r],
                                            a = i.groups ? i.groups + 1 : 1;
                                        !i.literal && i.token && (e[i.token.val[0]] = i.deser(s.slice(t, t + a))), t += a
                                    }
                                return [s, e]
                            }
                            return [s, {}]
                        }(e, this.regex, this.handlers), [s, r, i] = n ? function(e) {
                            let t, n = null;
                            return Le(e.z) || (n = U.create(e.z)), Le(e.Z) || (n || (n = new ie(e.Z)), t = e.Z), Le(e.q) || (e.M = 3 * (e.q - 1) + 1), Le(e.h) || (e.h < 12 && 1 === e.a ? e.h += 12 : 12 === e.h && 0 === e.a && (e.h = 0)), 0 === e.G && e.y && (e.y = -e.y), Le(e.u) || (e.S = Ge(e.u)), [Object.keys(e).reduce((t, n) => {
                                const s = (e => {
                                    switch (e) {
                                        case "S":
                                            return "millisecond";
                                        case "s":
                                            return "second";
                                        case "m":
                                            return "minute";
                                        case "h":
                                        case "H":
                                            return "hour";
                                        case "d":
                                            return "day";
                                        case "o":
                                            return "ordinal";
                                        case "L":
                                        case "M":
                                            return "month";
                                        case "y":
                                            return "year";
                                        case "E":
                                        case "c":
                                            return "weekday";
                                        case "W":
                                            return "weekNumber";
                                        case "k":
                                            return "weekYear";
                                        case "q":
                                            return "quarter";
                                        default:
                                            return null
                                    }
                                })(n);
                                return s && (t[s] = e[n]), t
                            }, {}), n, t]
                        }(n) : [null, null, void 0];
                        if (_e(n, "a") && _e(n, "H")) throw new o("Can't include meridiem when specifying 24-hour format");
                        return {
                            input: e,
                            tokens: this.tokens,
                            regex: this.regex,
                            rawMatches: t,
                            matches: n,
                            result: s,
                            zone: r,
                            specificOffset: i
                        }
                    }
                    return {
                        input: e,
                        tokens: this.tokens,
                        invalidReason: this.invalidReason
                    }
                }
                get isValid() {
                    return !this.disqualifyingUnit
                }
                get invalidReason() {
                    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null
                }
            }

            function An(e, t, n) {
                return new qn(e, n).explainFromTokens(t)
            }

            function Un(e, t) {
                if (!e) return null;
                const n = Nt.create(t, e).dtFormatter((zn || (zn = gs.fromMillis(1555555555555)), zn)),
                    s = n.formatToParts(),
                    r = n.resolvedOptions();
                return s.map(t => function(e, t, n) {
                    const {
                        type: s,
                        value: r
                    } = e;
                    if ("literal" === s) {
                        const e = /^\s+$/.test(r);
                        return {
                            literal: !e,
                            val: e ? " " : r
                        }
                    }
                    const i = t[s];
                    let a = s;
                    "hour" === s && (a = null != t.hour12 ? t.hour12 ? "hour12" : "hour24" : null != t.hourCycle ? "h11" === t.hourCycle || "h12" === t.hourCycle ? "hour12" : "hour24" : n.hour12 ? "hour12" : "hour24");
                    let o = Ln[a];
                    if ("object" == typeof o && (o = o[i]), o) return {
                        literal: !1,
                        val: o
                    }
                }(t, e, r))
            }
            const _n = "Invalid DateTime",
                Yn = 864e13;

            function Rn(e) {
                return new Te("unsupported zone", `the zone "${e.name}" is not supported`)
            }

            function Hn(e) {
                return null === e.weekData && (e.weekData = xe(e.c)), e.weekData
            }

            function Pn(e) {
                return null === e.localWeekData && (e.localWeekData = xe(e.c, e.loc.getMinDaysInFirstWeek(), e.loc.getStartOfWeek())), e.localWeekData
            }

            function Jn(e, t) {
                const n = {
                    ts: e.ts,
                    zone: e.zone,
                    c: e.c,
                    o: e.o,
                    loc: e.loc,
                    invalid: e.invalid
                };
                return new gs({ ...n,
                    ...t,
                    old: n
                })
            }

            function Gn(e, t, n) {
                let s = e - 60 * t * 1e3;
                const r = n.offset(s);
                if (t === r) return [s, t];
                s -= 60 * (r - t) * 1e3;
                const i = n.offset(s);
                return r === i ? [s, r] : [e - 60 * Math.min(r, i) * 1e3, Math.max(r, i)]
            }

            function Bn(e, t) {
                const n = new Date(e += 60 * t * 1e3);
                return {
                    year: n.getUTCFullYear(),
                    month: n.getUTCMonth() + 1,
                    day: n.getUTCDate(),
                    hour: n.getUTCHours(),
                    minute: n.getUTCMinutes(),
                    second: n.getUTCSeconds(),
                    millisecond: n.getUTCMilliseconds()
                }
            }

            function Qn(e, t, n) {
                return Gn(et(e), t, n)
            }

            function Kn(e, t) {
                const n = e.o,
                    s = e.c.year + Math.trunc(t.years),
                    r = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
                    i = { ...e.c,
                        year: s,
                        month: r,
                        day: Math.min(e.c.day, Xe(s, r)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
                    },
                    a = On.fromObject({
                        years: t.years - Math.trunc(t.years),
                        quarters: t.quarters - Math.trunc(t.quarters),
                        months: t.months - Math.trunc(t.months),
                        weeks: t.weeks - Math.trunc(t.weeks),
                        days: t.days - Math.trunc(t.days),
                        hours: t.hours,
                        minutes: t.minutes,
                        seconds: t.seconds,
                        milliseconds: t.milliseconds
                    }).as("milliseconds"),
                    o = et(i);
                let [u, l] = Gn(o, n, e.zone);
                return 0 !== a && (u += a, l = e.zone.offset(u)), {
                    ts: u,
                    o: l
                }
            }

            function Xn(e, t, n, s, r, i) {
                const {
                    setZone: a,
                    zone: o
                } = n;
                if (e && 0 !== Object.keys(e).length || t) {
                    const s = t || o,
                        r = gs.fromObject(e, { ...n,
                            zone: s,
                            specificOffset: i
                        });
                    return a ? r : r.setZone(o)
                }
                return gs.invalid(new Te("unparsable", `the input "${r}" can't be parsed as ${s}`))
            }

            function es(e, t, n = !0) {
                return e.isValid ? Nt.create(se.create("en-US"), {
                    allowZ: n,
                    forceSimple: !0
                }).formatDateTimeFromString(e, t) : null
            }

            function ts(e, t, n) {
                const s = e.c.year > 9999 || e.c.year < 0;
                let r = "";
                if (s && e.c.year >= 0 && (r += "+"), r += He(e.c.year, s ? 6 : 4), "year" === n) return r;
                if (t) {
                    if (r += "-", r += He(e.c.month), "month" === n) return r;
                    r += "-"
                } else if (r += He(e.c.month), "month" === n) return r;
                return r += He(e.c.day), r
            }

            function ns(e, t, n, s, r, i, a) {
                let o = !n || 0 !== e.c.millisecond || 0 !== e.c.second,
                    u = "";
                switch (a) {
                    case "day":
                    case "month":
                    case "year":
                        break;
                    default:
                        if (u += He(e.c.hour), "hour" === a) break;
                        if (t) {
                            if (u += ":", u += He(e.c.minute), "minute" === a) break;
                            o && (u += ":", u += He(e.c.second))
                        } else {
                            if (u += He(e.c.minute), "minute" === a) break;
                            o && (u += He(e.c.second))
                        }
                        if ("second" === a) break;
                        !o || s && 0 === e.c.millisecond || (u += ".", u += He(e.c.millisecond, 3))
                }
                return r && (e.isOffsetFixed && 0 === e.offset && !i ? u += "Z" : e.o < 0 ? (u += "-", u += He(Math.trunc(-e.o / 60)), u += ":", u += He(Math.trunc(-e.o % 60))) : (u += "+", u += He(Math.trunc(e.o / 60)), u += ":", u += He(Math.trunc(e.o % 60)))), i && (u += "[" + e.zone.ianaName + "]"), u
            }
            const ss = {
                    month: 1,
                    day: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                },
                rs = {
                    weekNumber: 1,
                    weekday: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                },
                is = {
                    ordinal: 1,
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0
                },
                as = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
                os = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
                us = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

            function ls(e) {
                const t = {
                    year: "year",
                    years: "year",
                    month: "month",
                    months: "month",
                    day: "day",
                    days: "day",
                    hour: "hour",
                    hours: "hour",
                    minute: "minute",
                    minutes: "minute",
                    quarter: "quarter",
                    quarters: "quarter",
                    second: "second",
                    seconds: "second",
                    millisecond: "millisecond",
                    milliseconds: "millisecond",
                    weekday: "weekday",
                    weekdays: "weekday",
                    weeknumber: "weekNumber",
                    weeksnumber: "weekNumber",
                    weeknumbers: "weekNumber",
                    weekyear: "weekYear",
                    weekyears: "weekYear",
                    ordinal: "ordinal"
                }[e.toLowerCase()];
                if (!t) throw new u(e);
                return t
            }

            function cs(e) {
                switch (e.toLowerCase()) {
                    case "localweekday":
                    case "localweekdays":
                        return "localWeekday";
                    case "localweeknumber":
                    case "localweeknumbers":
                        return "localWeekNumber";
                    case "localweekyear":
                    case "localweekyears":
                        return "localWeekYear";
                    default:
                        return ls(e)
                }
            }

            function hs(e, t) {
                const n = oe(t.zone, Se.defaultZone);
                if (!n.isValid) return gs.invalid(Rn(n));
                const s = se.fromObject(t);
                let r, i;
                if (Le(e.year)) r = Se.now();
                else {
                    for (const t of as) Le(e[t]) && (e[t] = ss[t]);
                    const t = We(e) || Ze(e);
                    if (t) return gs.invalid(t);
                    const s = function(e) {
                        if (void 0 === fs && (fs = Se.now()), "iana" !== e.type) return e.offset(fs);
                        const t = e.name;
                        let n = ys.get(t);
                        return void 0 === n && (n = e.offset(fs), ys.set(t, n)), n
                    }(n);
                    [r, i] = Qn(e, s, n)
                }
                return new gs({
                    ts: r,
                    zone: n,
                    loc: s,
                    o: i
                })
            }

            function ds(e, t, n) {
                const s = !!Le(n.round) || n.round,
                    r = Le(n.rounding) ? "trunc" : n.rounding,
                    i = (e, i) => (e = Be(e, s || n.calendary ? 0 : 2, n.calendary ? "round" : r), t.loc.clone(n).relFormatter(n).format(e, i)),
                    a = s => n.calendary ? t.hasSame(e, s) ? 0 : t.startOf(s).diff(e.startOf(s), s).get(s) : t.diff(e, s).get(s);
                if (n.unit) return i(a(n.unit), n.unit);
                for (const e of n.units) {
                    const t = a(e);
                    if (Math.abs(t) >= 1) return i(t, e)
                }
                return i(e > t ? -0 : 0, n.units[n.units.length - 1])
            }

            function ms(e) {
                let t, n = {};
                return e.length > 0 && "object" == typeof e[e.length - 1] ? (n = e[e.length - 1], t = Array.from(e).slice(0, e.length - 1)) : t = Array.from(e), [n, t]
            }
            let fs;
            const ys = new Map;
            class gs {
                constructor(e) {
                    const t = e.zone || Se.defaultZone;
                    let n = e.invalid || (Number.isNaN(e.ts) ? new Te("invalid input") : null) || (t.isValid ? null : Rn(t));
                    this.ts = Le(e.ts) ? Se.now() : e.ts;
                    let s = null,
                        r = null;
                    if (!n)
                        if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))[s, r] = [e.old.c, e.old.o];
                        else {
                            const i = ze(e.o) && !e.old ? e.o : t.offset(this.ts);
                            s = Bn(this.ts, i), n = Number.isNaN(s.year) ? new Te("invalid input") : null, s = n ? null : s, r = n ? null : i
                        }
                    this._zone = t, this.loc = e.loc || se.create(), this.invalid = n, this.weekData = null, this.localWeekData = null, this.c = s, this.o = r, this.isLuxonDateTime = !0
                }
                static now() {
                    return new gs({})
                }
                static local() {
                    const [e, t] = ms(arguments), [n, s, r, i, a, o, u] = t;
                    return hs({
                        year: n,
                        month: s,
                        day: r,
                        hour: i,
                        minute: a,
                        second: o,
                        millisecond: u
                    }, e)
                }
                static utc() {
                    const [e, t] = ms(arguments), [n, s, r, i, a, o, u] = t;
                    return e.zone = ie.utcInstance, hs({
                        year: n,
                        month: s,
                        day: r,
                        hour: i,
                        minute: a,
                        second: o,
                        millisecond: u
                    }, e)
                }
                static fromJSDate(e, t = {}) {
                    const n = (s = e, "[object Date]" === Object.prototype.toString.call(s) ? e.valueOf() : NaN);
                    var s;
                    if (Number.isNaN(n)) return gs.invalid("invalid input");
                    const r = oe(t.zone, Se.defaultZone);
                    return r.isValid ? new gs({
                        ts: n,
                        zone: r,
                        loc: se.fromObject(t)
                    }) : gs.invalid(Rn(r))
                }
                static fromMillis(e, t = {}) {
                    if (ze(e)) return e < -Yn || e > Yn ? gs.invalid("Timestamp out of range") : new gs({
                        ts: e,
                        zone: oe(t.zone, Se.defaultZone),
                        loc: se.fromObject(t)
                    });
                    throw new l(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)
                }
                static fromSeconds(e, t = {}) {
                    if (ze(e)) return new gs({
                        ts: 1e3 * e,
                        zone: oe(t.zone, Se.defaultZone),
                        loc: se.fromObject(t)
                    });
                    throw new l("fromSeconds requires a numerical input")
                }
                static fromObject(e, t = {}) {
                    e = e || {};
                    const n = oe(t.zone, Se.defaultZone);
                    if (!n.isValid) return gs.invalid(Rn(n));
                    const s = se.fromObject(t),
                        r = ot(e, cs),
                        {
                            minDaysInFirstWeek: i,
                            startOfWeek: a
                        } = $e(r, s),
                        u = Se.now(),
                        l = Le(t.specificOffset) ? n.offset(u) : t.specificOffset,
                        c = !Le(r.ordinal),
                        h = !Le(r.year),
                        d = !Le(r.month) || !Le(r.day),
                        m = h || d,
                        f = r.weekYear || r.weekNumber;
                    if ((m || c) && f) throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                    if (d && c) throw new o("Can't mix ordinal dates with month/day");
                    const y = f || r.weekday && !m;
                    let g, w, p = Bn(u, l);
                    y ? (g = os, w = rs, p = xe(p, i, a)) : c ? (g = us, w = is, p = Ce(p)) : (g = as, w = ss);
                    let k = !1;
                    for (const e of g) Le(r[e]) ? r[e] = k ? w[e] : p[e] : k = !0;
                    const v = y ? function(e, t = 4, n = 1) {
                            const s = je(e.weekYear),
                                r = Re(e.weekNumber, 1, nt(e.weekYear, t, n)),
                                i = Re(e.weekday, 1, 7);
                            return s ? r ? !i && Ne("weekday", e.weekday) : Ne("week", e.weekNumber) : Ne("weekYear", e.weekYear)
                        }(r, i, a) : c ? function(e) {
                            const t = je(e.year),
                                n = Re(e.ordinal, 1, Ke(e.year));
                            return t ? !n && Ne("ordinal", e.ordinal) : Ne("year", e.year)
                        }(r) : We(r),
                        S = v || Ze(r);
                    if (S) return gs.invalid(S);
                    const T = y ? Ee(r, i, a) : c ? Fe(r) : r,
                        [b, O] = Qn(T, l, n),
                        N = new gs({
                            ts: b,
                            zone: n,
                            o: O,
                            loc: s
                        });
                    return r.weekday && m && e.weekday !== N.weekday ? gs.invalid("mismatched weekday", `you can't specify both a weekday of ${r.weekday} and a date of ${N.toISO()}`) : N.isValid ? N : gs.invalid(N.invalid)
                }
                static fromISO(e, t = {}) {
                    const [n, s] = function(e) {
                        return Vt(e, [tn, an], [nn, on], [sn, un], [rn, ln])
                    }(e);
                    return Xn(n, s, t, "ISO 8601", e)
                }
                static fromRFC2822(e, t = {}) {
                    const [n, s] = function(e) {
                        return Vt(function(e) {
                            return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
                        }(e), [Jt, Gt])
                    }(e);
                    return Xn(n, s, t, "RFC 2822", e)
                }
                static fromHTTP(e, t = {}) {
                    const [n, s] = function(e) {
                        return Vt(e, [Bt, Xt], [Qt, Xt], [Kt, en])
                    }(e);
                    return Xn(n, s, t, "HTTP", t)
                }
                static fromFormat(e, t, n = {}) {
                    if (Le(e) || Le(t)) throw new l("fromFormat requires an input string and a format");
                    const {
                        locale: s = null,
                        numberingSystem: r = null
                    } = n, i = se.fromOpts({
                        locale: s,
                        numberingSystem: r,
                        defaultToEN: !0
                    }), [a, o, u, c] = function(e, t, n) {
                        const {
                            result: s,
                            zone: r,
                            specificOffset: i,
                            invalidReason: a
                        } = An(e, t, n);
                        return [s, r, i, a]
                    }(i, e, t);
                    return c ? gs.invalid(c) : Xn(a, o, n, `format ${t}`, e, u)
                }
                static fromString(e, t, n = {}) {
                    return gs.fromFormat(e, t, n)
                }
                static fromSQL(e, t = {}) {
                    const [n, s] = function(e) {
                        return Vt(e, [hn, an], [dn, mn])
                    }(e);
                    return Xn(n, s, t, "SQL", e)
                }
                static invalid(e, t = null) {
                    if (!e) throw new l("need to specify a reason the DateTime is invalid");
                    const n = e instanceof Te ? e : new Te(e, t);
                    if (Se.throwOnInvalid) throw new r(n);
                    return new gs({
                        invalid: n
                    })
                }
                static isDateTime(e) {
                    return e && e.isLuxonDateTime || !1
                }
                static parseFormatForOpts(e, t = {}) {
                    const n = Un(e, se.fromObject(t));
                    return n ? n.map(e => e ? e.val : null).join("") : null
                }
                static expandFormat(e, t = {}) {
                    return jn(Nt.parseFormat(e), se.fromObject(t)).map(e => e.val).join("")
                }
                static resetCache() {
                    fs = void 0, ys.clear()
                }
                get(e) {
                    return this[e]
                }
                get isValid() {
                    return null === this.invalid
                }
                get invalidReason() {
                    return this.invalid ? this.invalid.reason : null
                }
                get invalidExplanation() {
                    return this.invalid ? this.invalid.explanation : null
                }
                get locale() {
                    return this.isValid ? this.loc.locale : null
                }
                get numberingSystem() {
                    return this.isValid ? this.loc.numberingSystem : null
                }
                get outputCalendar() {
                    return this.isValid ? this.loc.outputCalendar : null
                }
                get zone() {
                    return this._zone
                }
                get zoneName() {
                    return this.isValid ? this.zone.name : null
                }
                get year() {
                    return this.isValid ? this.c.year : NaN
                }
                get quarter() {
                    return this.isValid ? Math.ceil(this.c.month / 3) : NaN
                }
                get month() {
                    return this.isValid ? this.c.month : NaN
                }
                get day() {
                    return this.isValid ? this.c.day : NaN
                }
                get hour() {
                    return this.isValid ? this.c.hour : NaN
                }
                get minute() {
                    return this.isValid ? this.c.minute : NaN
                }
                get second() {
                    return this.isValid ? this.c.second : NaN
                }
                get millisecond() {
                    return this.isValid ? this.c.millisecond : NaN
                }
                get weekYear() {
                    return this.isValid ? Hn(this).weekYear : NaN
                }
                get weekNumber() {
                    return this.isValid ? Hn(this).weekNumber : NaN
                }
                get weekday() {
                    return this.isValid ? Hn(this).weekday : NaN
                }
                get isWeekend() {
                    return this.isValid && this.loc.getWeekendDays().includes(this.weekday)
                }
                get localWeekday() {
                    return this.isValid ? Pn(this).weekday : NaN
                }
                get localWeekNumber() {
                    return this.isValid ? Pn(this).weekNumber : NaN
                }
                get localWeekYear() {
                    return this.isValid ? Pn(this).weekYear : NaN
                }
                get ordinal() {
                    return this.isValid ? Ce(this.c).ordinal : NaN
                }
                get monthShort() {
                    return this.isValid ? Dn.months("short", {
                        locObj: this.loc
                    })[this.month - 1] : null
                }
                get monthLong() {
                    return this.isValid ? Dn.months("long", {
                        locObj: this.loc
                    })[this.month - 1] : null
                }
                get weekdayShort() {
                    return this.isValid ? Dn.weekdays("short", {
                        locObj: this.loc
                    })[this.weekday - 1] : null
                }
                get weekdayLong() {
                    return this.isValid ? Dn.weekdays("long", {
                        locObj: this.loc
                    })[this.weekday - 1] : null
                }
                get offset() {
                    return this.isValid ? +this.o : NaN
                }
                get offsetNameShort() {
                    return this.isValid ? this.zone.offsetName(this.ts, {
                        format: "short",
                        locale: this.locale
                    }) : null
                }
                get offsetNameLong() {
                    return this.isValid ? this.zone.offsetName(this.ts, {
                        format: "long",
                        locale: this.locale
                    }) : null
                }
                get isOffsetFixed() {
                    return this.isValid ? this.zone.isUniversal : null
                }
                get isInDST() {
                    return !this.isOffsetFixed && (this.offset > this.set({
                        month: 1,
                        day: 1
                    }).offset || this.offset > this.set({
                        month: 5
                    }).offset)
                }
                getPossibleOffsets() {
                    if (!this.isValid || this.isOffsetFixed) return [this];
                    const e = 864e5,
                        t = 6e4,
                        n = et(this.c),
                        s = this.zone.offset(n - e),
                        r = this.zone.offset(n + e),
                        i = this.zone.offset(n - s * t),
                        a = this.zone.offset(n - r * t);
                    if (i === a) return [this];
                    const o = n - i * t,
                        u = n - a * t,
                        l = Bn(o, i),
                        c = Bn(u, a);
                    return l.hour === c.hour && l.minute === c.minute && l.second === c.second && l.millisecond === c.millisecond ? [Jn(this, {
                        ts: o
                    }), Jn(this, {
                        ts: u
                    })] : [this]
                }
                get isInLeapYear() {
                    return Qe(this.year)
                }
                get daysInMonth() {
                    return Xe(this.year, this.month)
                }
                get daysInYear() {
                    return this.isValid ? Ke(this.year) : NaN
                }
                get weeksInWeekYear() {
                    return this.isValid ? nt(this.weekYear) : NaN
                }
                get weeksInLocalWeekYear() {
                    return this.isValid ? nt(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN
                }
                resolvedLocaleOptions(e = {}) {
                    const {
                        locale: t,
                        numberingSystem: n,
                        calendar: s
                    } = Nt.create(this.loc.clone(e), e).resolvedOptions(this);
                    return {
                        locale: t,
                        numberingSystem: n,
                        outputCalendar: s
                    }
                }
                toUTC(e = 0, t = {}) {
                    return this.setZone(ie.instance(e), t)
                }
                toLocal() {
                    return this.setZone(Se.defaultZone)
                }
                setZone(e, {
                    keepLocalTime: t = !1,
                    keepCalendarTime: n = !1
                } = {}) {
                    if ((e = oe(e, Se.defaultZone)).equals(this.zone)) return this;
                    if (e.isValid) {
                        let s = this.ts;
                        if (t || n) {
                            const t = e.offset(this.ts),
                                n = this.toObject();
                            [s] = Qn(n, t, e)
                        }
                        return Jn(this, {
                            ts: s,
                            zone: e
                        })
                    }
                    return gs.invalid(Rn(e))
                }
                reconfigure({
                    locale: e,
                    numberingSystem: t,
                    outputCalendar: n
                } = {}) {
                    return Jn(this, {
                        loc: this.loc.clone({
                            locale: e,
                            numberingSystem: t,
                            outputCalendar: n
                        })
                    })
                }
                setLocale(e) {
                    return this.reconfigure({
                        locale: e
                    })
                }
                set(e) {
                    if (!this.isValid) return this;
                    const t = ot(e, cs),
                        {
                            minDaysInFirstWeek: n,
                            startOfWeek: s
                        } = $e(t, this.loc),
                        r = !Le(t.weekYear) || !Le(t.weekNumber) || !Le(t.weekday),
                        i = !Le(t.ordinal),
                        a = !Le(t.year),
                        u = !Le(t.month) || !Le(t.day),
                        l = a || u,
                        c = t.weekYear || t.weekNumber;
                    if ((l || i) && c) throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                    if (u && i) throw new o("Can't mix ordinal dates with month/day");
                    let h;
                    r ? h = Ee({ ...xe(this.c, n, s),
                        ...t
                    }, n, s) : Le(t.ordinal) ? (h = { ...this.toObject(),
                        ...t
                    }, Le(t.day) && (h.day = Math.min(Xe(h.year, h.month), h.day))) : h = Fe({ ...Ce(this.c),
                        ...t
                    });
                    const [d, m] = Qn(h, this.o, this.zone);
                    return Jn(this, {
                        ts: d,
                        o: m
                    })
                }
                plus(e) {
                    return this.isValid ? Jn(this, Kn(this, On.fromDurationLike(e))) : this
                }
                minus(e) {
                    return this.isValid ? Jn(this, Kn(this, On.fromDurationLike(e).negate())) : this
                }
                startOf(e, {
                    useLocaleWeeks: t = !1
                } = {}) {
                    if (!this.isValid) return this;
                    const n = {},
                        s = On.normalizeUnit(e);
                    switch (s) {
                        case "years":
                            n.month = 1;
                        case "quarters":
                        case "months":
                            n.day = 1;
                        case "weeks":
                        case "days":
                            n.hour = 0;
                        case "hours":
                            n.minute = 0;
                        case "minutes":
                            n.second = 0;
                        case "seconds":
                            n.millisecond = 0
                    }
                    if ("weeks" === s)
                        if (t) {
                            const e = this.loc.getStartOfWeek(),
                                {
                                    weekday: t
                                } = this;
                            t < e && (n.weekNumber = this.weekNumber - 1), n.weekday = e
                        } else n.weekday = 1;
                    if ("quarters" === s) {
                        const e = Math.ceil(this.month / 3);
                        n.month = 3 * (e - 1) + 1
                    }
                    return this.set(n)
                }
                endOf(e, t) {
                    return this.isValid ? this.plus({
                        [e]: 1
                    }).startOf(e, t).minus(1) : this
                }
                toFormat(e, t = {}) {
                    return this.isValid ? Nt.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : _n
                }
                toLocaleString(e = f, t = {}) {
                    return this.isValid ? Nt.create(this.loc.clone(t), e).formatDateTime(this) : _n
                }
                toLocaleParts(e = {}) {
                    return this.isValid ? Nt.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
                }
                toISO({
                    format: e = "extended",
                    suppressSeconds: t = !1,
                    suppressMilliseconds: n = !1,
                    includeOffset: s = !0,
                    extendedZone: r = !1,
                    precision: i = "milliseconds"
                } = {}) {
                    if (!this.isValid) return null;
                    const a = "extended" === e;
                    let o = ts(this, a, i = ls(i));
                    return as.indexOf(i) >= 3 && (o += "T"), o += ns(this, a, t, n, s, r, i), o
                }
                toISODate({
                    format: e = "extended",
                    precision: t = "day"
                } = {}) {
                    return this.isValid ? ts(this, "extended" === e, ls(t)) : null
                }
                toISOWeekDate() {
                    return es(this, "kkkk-'W'WW-c")
                }
                toISOTime({
                    suppressMilliseconds: e = !1,
                    suppressSeconds: t = !1,
                    includeOffset: n = !0,
                    includePrefix: s = !1,
                    extendedZone: r = !1,
                    format: i = "extended",
                    precision: a = "milliseconds"
                } = {}) {
                    return this.isValid ? (a = ls(a), (s && as.indexOf(a) >= 3 ? "T" : "") + ns(this, "extended" === i, t, e, n, r, a)) : null
                }
                toRFC2822() {
                    return es(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
                }
                toHTTP() {
                    return es(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
                }
                toSQLDate() {
                    return this.isValid ? ts(this, !0) : null
                }
                toSQLTime({
                    includeOffset: e = !0,
                    includeZone: t = !1,
                    includeOffsetSpace: n = !0
                } = {}) {
                    let s = "HH:mm:ss.SSS";
                    return (t || e) && (n && (s += " "), t ? s += "z" : e && (s += "ZZ")), es(this, s, !0)
                }
                toSQL(e = {}) {
                    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null
                }
                toString() {
                    return this.isValid ? this.toISO() : _n
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`
                }
                valueOf() {
                    return this.toMillis()
                }
                toMillis() {
                    return this.isValid ? this.ts : NaN
                }
                toSeconds() {
                    return this.isValid ? this.ts / 1e3 : NaN
                }
                toUnixInteger() {
                    return this.isValid ? Math.floor(this.ts / 1e3) : NaN
                }
                toJSON() {
                    return this.toISO()
                }
                toBSON() {
                    return this.toJSDate()
                }
                toObject(e = {}) {
                    if (!this.isValid) return {};
                    const t = { ...this.c
                    };
                    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t
                }
                toJSDate() {
                    return new Date(this.isValid ? this.ts : NaN)
                }
                diff(e, t = "milliseconds", n = {}) {
                    if (!this.isValid || !e.isValid) return On.invalid("created by diffing an invalid DateTime");
                    const s = {
                            locale: this.locale,
                            numberingSystem: this.numberingSystem,
                            ...n
                        },
                        r = (o = t, Array.isArray(o) ? o : [o]).map(On.normalizeUnit),
                        i = e.valueOf() > this.valueOf(),
                        a = function(e, t, n, s) {
                            let [r, i, a, o] = function(e, t, n) {
                                const s = [
                                        ["years", (e, t) => t.year - e.year],
                                        ["quarters", (e, t) => t.quarter - e.quarter + 4 * (t.year - e.year)],
                                        ["months", (e, t) => t.month - e.month + 12 * (t.year - e.year)],
                                        ["weeks", (e, t) => {
                                            const n = In(e, t);
                                            return (n - n % 7) / 7
                                        }],
                                        ["days", In]
                                    ],
                                    r = {},
                                    i = e;
                                let a, o;
                                for (const [u, l] of s) n.indexOf(u) >= 0 && (a = u, r[u] = l(e, t), o = i.plus(r), o > t ? (r[u]--, (e = i.plus(r)) > t && (o = e, r[u]--, e = i.plus(r))) : e = o);
                                return [e, r, o, a]
                            }(e, t, n);
                            const u = t - r,
                                l = n.filter(e => ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0);
                            0 === l.length && (a < t && (a = r.plus({
                                [o]: 1
                            })), a !== r && (i[o] = (i[o] || 0) + u / (a - r)));
                            const c = On.fromObject(i, s);
                            return l.length > 0 ? On.fromMillis(u, s).shiftTo(...l).plus(c) : c
                        }(i ? this : e, i ? e : this, r, s);
                    var o;
                    return i ? a.negate() : a
                }
                diffNow(e = "milliseconds", t = {}) {
                    return this.diff(gs.now(), e, t)
                }
                until(e) {
                    return this.isValid ? Mn.fromDateTimes(this, e) : this
                }
                hasSame(e, t, n) {
                    if (!this.isValid) return !1;
                    const s = e.valueOf(),
                        r = this.setZone(e.zone, {
                            keepLocalTime: !0
                        });
                    return r.startOf(t, n) <= s && s <= r.endOf(t, n)
                }
                equals(e) {
                    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
                }
                toRelative(e = {}) {
                    if (!this.isValid) return null;
                    const t = e.base || gs.fromObject({}, {
                            zone: this.zone
                        }),
                        n = e.padding ? this < t ? -e.padding : e.padding : 0;
                    let s = ["years", "months", "days", "hours", "minutes", "seconds"],
                        r = e.unit;
                    return Array.isArray(e.unit) && (s = e.unit, r = void 0), ds(t, this.plus(n), { ...e,
                        numeric: "always",
                        units: s,
                        unit: r
                    })
                }
                toRelativeCalendar(e = {}) {
                    return this.isValid ? ds(e.base || gs.fromObject({}, {
                        zone: this.zone
                    }), this, { ...e,
                        numeric: "auto",
                        units: ["years", "months", "days"],
                        calendary: !0
                    }) : null
                }
                static min(...e) {
                    if (!e.every(gs.isDateTime)) throw new l("min requires all arguments be DateTimes");
                    return Ue(e, e => e.valueOf(), Math.min)
                }
                static max(...e) {
                    if (!e.every(gs.isDateTime)) throw new l("max requires all arguments be DateTimes");
                    return Ue(e, e => e.valueOf(), Math.max)
                }
                static fromFormatExplain(e, t, n = {}) {
                    const {
                        locale: s = null,
                        numberingSystem: r = null
                    } = n;
                    return An(se.fromOpts({
                        locale: s,
                        numberingSystem: r,
                        defaultToEN: !0
                    }), e, t)
                }
                static fromStringExplain(e, t, n = {}) {
                    return gs.fromFormatExplain(e, t, n)
                }
                static buildFormatParser(e, t = {}) {
                    const {
                        locale: n = null,
                        numberingSystem: s = null
                    } = t, r = se.fromOpts({
                        locale: n,
                        numberingSystem: s,
                        defaultToEN: !0
                    });
                    return new qn(r, e)
                }
                static fromFormatParser(e, t, n = {}) {
                    if (Le(e) || Le(t)) throw new l("fromFormatParser requires an input string and a format parser");
                    const {
                        locale: s = null,
                        numberingSystem: r = null
                    } = n, i = se.fromOpts({
                        locale: s,
                        numberingSystem: r,
                        defaultToEN: !0
                    });
                    if (!i.equals(t.locale)) throw new l(`fromFormatParser called with a locale of ${i}, but the format parser was created for ${t.locale}`);
                    const {
                        result: a,
                        zone: o,
                        specificOffset: u,
                        invalidReason: c
                    } = t.explainFromTokens(e);
                    return c ? gs.invalid(c) : Xn(a, o, n, `format ${t.format}`, e, u)
                }
                static get DATE_SHORT() {
                    return f
                }
                static get DATE_MED() {
                    return y
                }
                static get DATE_MED_WITH_WEEKDAY() {
                    return g
                }
                static get DATE_FULL() {
                    return w
                }
                static get DATE_HUGE() {
                    return p
                }
                static get TIME_SIMPLE() {
                    return k
                }
                static get TIME_WITH_SECONDS() {
                    return v
                }
                static get TIME_WITH_SHORT_OFFSET() {
                    return S
                }
                static get TIME_WITH_LONG_OFFSET() {
                    return T
                }
                static get TIME_24_SIMPLE() {
                    return b
                }
                static get TIME_24_WITH_SECONDS() {
                    return O
                }
                static get TIME_24_WITH_SHORT_OFFSET() {
                    return N
                }
                static get TIME_24_WITH_LONG_OFFSET() {
                    return M
                }
                static get DATETIME_SHORT() {
                    return D
                }
                static get DATETIME_SHORT_WITH_SECONDS() {
                    return I
                }
                static get DATETIME_MED() {
                    return V
                }
                static get DATETIME_MED_WITH_SECONDS() {
                    return x
                }
                static get DATETIME_MED_WITH_WEEKDAY() {
                    return E
                }
                static get DATETIME_FULL() {
                    return C
                }
                static get DATETIME_FULL_WITH_SECONDS() {
                    return F
                }
                static get DATETIME_HUGE() {
                    return $
                }
                static get DATETIME_HUGE_WITH_SECONDS() {
                    return W
                }
            }

            function ws(e) {
                if (gs.isDateTime(e)) return e;
                if (e && e.valueOf && ze(e.valueOf())) return gs.fromJSDate(e);
                if (e && "object" == typeof e) return gs.fromObject(e);
                throw new l(`Unknown datetime argument: ${e}, of type ${typeof e}`)
            }
        }
    }
]);