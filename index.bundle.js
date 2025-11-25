/*! For license information please see index.bundle.js.LICENSE.txt */ ! function() {
    var e, t = {
            9865: function(e, t, a) {
                "use strict";
                var r = a(6540);
                const n = r.createContext({}),
                    i = r.createContext({}),
                    o = r.createContext({});
                var l = a(1083);

                function s(e) {
                    const t = `${e}=`,
                        a = document.cookie.split(";");
                    for (var r = 0; r < a.length; r++) {
                        for (var n = a[r];
                            " " == n.charAt(0);) n = n.substring(1, n.length);
                        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
                    }
                    return null
                }
                const c = () => {
                        let e = Array.of(s("gclid_1"), s("gclid_2"), s("gclid_3")).filter((e => null !== e));
                        return e = e.length ? e.join(".") : "", e
                    },
                    d = () => {
                        const e = s("__lmi_ma");
                        if (!e) return {};
                        const t = e.split("|"),
                            a = {};
                        return t.forEach((e => {
                            const t = e.split("=");
                            a[t[0]] = t[1]
                        })), {
                            userreferrer: a.userreferrer || "",
                            campaignsource: a.campaignsource || "",
                            utmmedium: a.utmmedium || "",
                            utmcampaign: a.utmcampaign || "",
                            utmsource: a.utmsource || "",
                            utmterm: a.utmterm || "",
                            utmcontent: a.utmcontent || ""
                        }
                    };

                function u() {
                    const e = document.cookie.split(";").filter((e => e.trim().startsWith("__ab_")));
                    let t = "";
                    return e.forEach(((a, r) => {
                        const n = a.split("=")[1];
                        t += n, r < e.length - 1 && (t += " | ")
                    })), t
                }
                const m = (e, t, a) => {
                    const r = e,
                        n = u(),
                        i = d();
                    for (const [e, t] of Object.entries(r)) switch (e) {
                        case "country":
                            r[e] = t || s("cciso");
                            break;
                        case "salesBrief":
                            r[e] = (o = "string" == typeof t ? t : "", l = "string" == typeof r.textarea ? r.textarea : "", a ? l : o.length > 1 && l.length > 1 ? `${o} ${l}` : o);
                            break;
                        case "_mkto_trk":
                            r[e] = window._mkto_trk ? window._mkto_trk : "";
                            break;
                        case "chop_id":
                            r[e] = s("chop_id") || "";
                            break;
                        case "gclid":
                            r[e] = c();
                            break;
                        case "campaignID":
                            r[e] = t || ""
                    }
                    var o, l;
                    return r.textarea && delete r.textarea, Object.assign(Object.assign(Object.assign(Object.assign({}, r), i), {
                        optout: t
                    }), n ? {
                        experiment: u()
                    } : {})
                };
                var p, f, g;
                ! function(e) {
                    e.TRIAL = "Trial", e.DIRECTBUY = "DirectBuy", e.BUSINESSTRIAL = "LPBusinessTrial", e.PURCHASE = "purchase", e.PARTNER = "Partner"
                }(p || (p = {})),
                function(e) {
                    e.BUSINESS = "business", e.MSP = "msp", e.TEAMS = "teams", e.FAMILIES = "families", e.PREMIUM = "premium", e.ENTERPRISE = "enterprise"
                }(f || (f = {})),
                function(e) {
                    e.CHEVY = "Chevy", e.UNIFIED = "Unified"
                }(g || (g = {}));
                const v = e => e === p.DIRECTBUY ? p.PURCHASE : p.TRIAL.toLowerCase(),
                    E = e => new URLSearchParams(window.location.search).has("max") ? e === p.DIRECTBUY ? "business_max_purchase" : "business_max_trial" : e === p.DIRECTBUY ? p.PURCHASE : p.TRIAL.toLowerCase(),
                    C = e => {
                        var t;
                        const {
                            trialType: a
                        } = window.LPFormData;
                        return (null === (t = window.TrialForm) || void 0 === t ? void 0 : t.modalType) === g.UNIFIED ? g.UNIFIED : a === f.PREMIUM ? f.PREMIUM : a === f.FAMILIES ? f.FAMILIES : a === f.MSP ? f.MSP : a === f.TEAMS ? f.TEAMS : e ? f.ENTERPRISE : f.BUSINESS
                    },
                    h = () => {
                        let e = new URLSearchParams(window.location.search).has("max");
                        const {
                            formType: t,
                            trialType: a
                        } = window.LPFormData;
                        return v(t) === p.PURCHASE ? e ? "businessmax_direct_buy" : a === f.PREMIUM ? "premium_direct_buy" : `${C()}_buy_start` : e ? "businessmax" : `${C()}_trial_start`
                    };
                var y = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const w = e => y(void 0, void 0, void 0, (function*() {
                        var t, a;
                        try {
                            return (yield l.A.post("/lpapi/trial/SubmitFormData", e, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })).data
                        } catch (e) {
                            return {
                                success: !1,
                                code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0
                            }
                        }
                    })),
                    b = (e, t) => y(void 0, void 0, void 0, (function*() {
                        try {
                            const a = document.createElement("form");
                            a.method = "POST", a.action = t;
                            const r = document.createElement("input");
                            r.type = "hidden", r.name = "email", r.value = e.email, a.appendChild(r);
                            const n = document.createElement("input");
                            n.type = "hidden", n.name = "contactPermission", n.value = e.contactPermission.toString(), a.appendChild(n);
                            const i = document.createElement("input");
                            i.type = "hidden", i.name = "marketingOptOutShown", i.value = e.marketingOptOutShown.toString(), a.appendChild(i), document.body.appendChild(a), a.submit()
                        } catch (e) {
                            return {
                                success: !1,
                                code: 500
                            }
                        }
                    }));

                function k() {
                    const e = window.LPFormData,
                        t = "object" == typeof e ? e.contentId : "{B4F20BDD-552E-4827-878C-71E0977D3ACD}",
                        a = s("lastpass#lang") || "en";
                    return e.formType === p.TRIAL || e.formType === p.DIRECTBUY ? l.A.get(`/${a}/lpapi/trial/getfields/${t}`) : l.A.get(`/${a}/lpapi/form/fields/${t}`)
                }
                const _ = e => y(void 0, void 0, void 0, (function*() {
                        var t, a, r, n;
                        try {
                            return (yield l.A.post(`/lpapi/trial/${(()=>{const{trialType:e}=window.LPFormData;return e===f.MSP?"MspEmailCheck":e===f.TEAMS?"TeamsEmailCheck":e===f.PREMIUM?"PremiumEmailCheck":e===f.FAMILIES?"FamiliesEmailCheck":"EmailCheckBusinessUser"})()}`, e)).data
                        } catch (e) {
                            return {
                                success: !1,
                                code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0,
                                correctedEmail: null === (n = null === (r = null == e ? void 0 : e.response) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.correctedEmail
                            }
                        }
                    })),
                    S = e => y(void 0, void 0, void 0, (function*() {
                        try {
                            return (yield l.A.post("/lpapi/trial/retainformdata", e)).data
                        } catch (e) {
                            return {
                                success: !1
                            }
                        }
                    })),
                    x = ({
                        children: e
                    }) => {
                        const [t, a] = (0, r.useState)(null);
                        (0, r.useEffect)((() => {
                            const e = () => {
                                s("lastpassConsentDecision") ? setTimeout((() => {
                                    i()
                                }), 500) : setTimeout((() => {
                                    e()
                                }), 500)
                            };
                            return e(), () => {}
                        }), []);
                        const i = () => {
                            k().then((e => {
                                200 !== e.status && a(!1), a(e.data)
                            })).catch((e => {
                                e.request && a(!1)
                            }))
                        };
                        return r.createElement(n.Provider, {
                            value: t
                        }, e)
                    };
                var L = "hzLAi7kKV5_WWsHsLIzK",
                    T = "sL8ltnDx2OagGuL9eMuA",
                    N = "WGAgqiVtqEqc9_h5X2fG",
                    I = "JNIyEl2kivLWVXNGub3U",
                    P = "ejbE2yGesaes9Pti9Nkv",
                    M = "EUJq7LdhqeIgMOa7sD8q";
                const D = ({
                    mini: e = !1
                }) => r.createElement("div", {
                    className: L
                }, r.createElement("div", {
                    className: `${T} ${M}`
                }, r.createElement("div", {
                    className: N
                }, r.createElement("div", {
                    className: `${I} ${P}`
                }), r.createElement("div", {
                    className: I
                }), !e && r.createElement(r.Fragment, null, r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                }), r.createElement("div", {
                    className: I
                })))));

                function O(e, t, a) {
                    "function" != typeof window.gtag ? console.warn("GTM not available. dataLayer.push attemted:", e, t, a) : window.gtag(e, t, a)
                }
                var F = a(6942),
                    B = a.n(F),
                    A = {
                        button: "UkIiR3g_Na8jrq673ODI",
                        arrow: "zZXgUQl_Lndd9rqNKSjg",
                        white: "jJ7raYkXg4kredi_d9wS",
                        black: "kMbg4z5CwoDcLbh_I2kg",
                        large: "aBRdVeUlECCMxmDDPirM",
                        medium: "V4lDaZuDtKrVXxHQ8YOB",
                        small: "BrAwcTuqEB5XyloZOWGH",
                        link: "RbD8Md2Lgzm6k0XBCChZ",
                        disabled: "aeqGZ9Gw96abLtvwZnqG"
                    },
                    U = function(e, t) {
                        var a = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var n = 0;
                            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]])
                        }
                        return a
                    };
                const R = e => {
                    var {
                        modifier: t = "",
                        arrow: a,
                        white: n,
                        size: i,
                        children: o,
                        disabled: l,
                        qaTag: s = "common-button",
                        link: c = !1,
                        stylesModifier: d
                    } = e, u = U(e, ["modifier", "arrow", "white", "size", "children", "disabled", "qaTag", "link", "stylesModifier"]);
                    const m = B()({
                        [A.button]: !0,
                        "lp-button": !0,
                        [A.arrow]: a,
                        [A.white]: n,
                        [A.size]: i,
                        [t]: t,
                        [A[d]]: d,
                        [A.disabled]: l,
                        [A.link]: c
                    });
                    return r.createElement("button", Object.assign({}, u, {
                        className: m,
                        disabled: l,
                        "data-qat": s
                    }), o)
                };
                var V = {
                    modal: "idb_dWPMPcXyy8fCRSHm",
                    button: "i3qGNdnsZeRjD8gEtxKJ",
                    close: "sDTYChXOL1BpyftwCaLw",
                    small: "uSThECX_FBm2KleglQC8",
                    medium: "R_KOPFYsQSNOyXbV4rVL",
                    large: "ZQZUiKmj0g15IHSFqPMg",
                    xlarge: "tW3uGgFdkRFsSJJxjRYK",
                    blocker: "A961Ehh_cAOhLIJgwc80",
                    transparent: "VXmeDp9DKsCjXGXDCBrN",
                    wrapper: "y4LHOKsRR9foeACJud5i",
                    heading: "ZIOvQMpXWVEeMdNQWiPi",
                    prompt: "Aa4RvqROH9YIGSLyaSuw"
                };
                const $ = e => {
                    const {
                        headlineCopy: t,
                        bodyCopy: a,
                        isModalClosable: n,
                        transparent: i,
                        closeButtonCopy: o,
                        onCloseCallBack: l,
                        modalType: s,
                        setModalState: c,
                        modalState: d
                    } = e;

                    function u() {
                        n && c(!1), l && l()
                    }
                    return r.createElement(r.Fragment, null, d && r.createElement("div", {
                        className: `${V.blocker} ${i?V.transparent:""}`,
                        onClick: () => u()
                    }, r.createElement("div", {
                        className: `${V.modal} ${V[s]}`,
                        onClick: e => e.stopPropagation()
                    }, r.createElement("div", {
                        className: V.wrapper
                    }, r.createElement("h3", {
                        className: V.heading
                    }, t), r.createElement("p", {
                        className: V.prompt
                    }, a)), n && r.createElement(R, {
                        arrow: !1,
                        modifier: V.button,
                        onClick: () => u()
                    }, o))))
                };
                var H = a(5232),
                    j = a(4728),
                    Z = a.n(j);
                const z = ({
                        htmlString: e,
                        errorCode: t
                    }) => {
                        const a = (0, r.useRef)(null),
                            n = Z()(e, {
                                allowedSchemes: ["http", "https", "mailto", "tel"]
                            });
                        (0, r.useEffect)((() => {
                            const e = a.current;
                            if (!e || !t) return;
                            const r = e.querySelectorAll("a");
                            return r.forEach((e => {
                                e.addEventListener("click", i)
                            })), () => {
                                r.forEach((e => {
                                    e.removeEventListener("click", i)
                                }))
                            }
                        }), [n]);
                        const i = e => {
                            O("event", "trial_page_error_link", {
                                cta_url: e.target.href,
                                error_number: t
                            })
                        };
                        return r.createElement("div", {
                            ref: a
                        }, (0, H.Ay)(n))
                    },
                    G = () => r.createElement("svg", {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("title", null, "img_icon_functional_check_1"), r.createElement("g", {
                        id: "🍭-Icons",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.createElement("g", {
                        id: "img_icon_functional_check_1"
                    }, r.createElement("rect", {
                        id: "icon-bg",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24"
                    }), r.createElement("path", {
                        d: "M20.8042,4.33656 C20.6244,4.20205 20.4203,4.10482 20.2035,4.05042 C19.9867,3.99602 19.7615,3.98552 19.5407,4.01951 C19.3199,4.05351 19.1078,4.13134 18.9167,4.24856 C18.7255,4.36578 18.559,4.52008 18.4266,4.70265 L10.3645,15.8097 L5.23785,11.646 C4.88437,11.3711 4.43888,11.2477 3.99687,11.3023 C3.55485,11.3569 3.1515,11.5852 2.87328,11.9381 C2.59506,12.291 2.4641,12.7404 2.50848,13.1902 C2.55287,13.6399 2.76906,14.0541 3.11072,14.344 L9.62004,19.6295 C9.79992,19.7723 10.006,19.8773 10.2263,19.9384 C10.4466,19.9995 10.6767,20.0153 10.9031,19.9851 C11.1295,19.9549 11.3478,19.8792 11.545,19.7624 C11.7423,19.6456 11.9146,19.4901 12.052,19.3049 L21.1702,6.75139 C21.3025,6.56846 21.398,6.36088 21.4511,6.14049 C21.5043,5.9201 21.5142,5.69123 21.4802,5.46696 C21.4462,5.24269 21.369,5.02743 21.253,4.83347 C21.137,4.63951 20.9845,4.47065 20.8042,4.33656 Z",
                        id: "Path",
                        fill: "#368149",
                        fillRule: "nonzero"
                    })))),
                    W = () => r.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none"
                    }, r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C15.9952 3.5837 12.4163 0.00477657 8 0ZM8.16667 3.33333C8.71895 3.33333 9.16667 3.78105 9.16667 4.33333C9.16667 4.88562 8.71895 5.33333 8.16667 5.33333C7.61438 5.33333 7.16667 4.88562 7.16667 4.33333C7.16667 3.78105 7.61438 3.33333 8.16667 3.33333ZM7 12.3333H9.66667C10.0349 12.3333 10.3333 12.0349 10.3333 11.6667C10.3333 11.2985 10.0349 11 9.66667 11H9.16667C9.07462 11 9 10.9254 9 10.8333V7.66667C9 6.93029 8.40305 6.33333 7.66667 6.33333H7C6.63181 6.33333 6.33333 6.63181 6.33333 7C6.33333 7.36819 6.63181 7.66667 7 7.66667H7.5C7.59205 7.66667 7.66667 7.74129 7.66667 7.83333V10.8333C7.66667 10.9254 7.59205 11 7.5 11H7C6.63181 11 6.33333 11.2985 6.33333 11.6667C6.33333 12.0349 6.63181 12.3333 7 12.3333Z",
                        fill: "#D71340"
                    })),
                    K = () => r.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none"
                    }, r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C15.9952 3.5837 12.4163 0.00477657 8 0ZM8.16667 3.33333C8.71895 3.33333 9.16667 3.78105 9.16667 4.33333C9.16667 4.88562 8.71895 5.33333 8.16667 5.33333C7.61438 5.33333 7.16667 4.88562 7.16667 4.33333C7.16667 3.78105 7.61438 3.33333 8.16667 3.33333ZM7 12.3333H9.66667C10.0349 12.3333 10.3333 12.0349 10.3333 11.6667C10.3333 11.2985 10.0349 11 9.66667 11H9.16667C9.07462 11 9 10.9254 9 10.8333V7.66667C9 6.93029 8.40305 6.33333 7.66667 6.33333H7C6.63181 6.33333 6.33333 6.63181 6.33333 7C6.33333 7.36819 6.63181 7.66667 7 7.66667H7.5C7.59205 7.66667 7.66667 7.74129 7.66667 7.83333V10.8333C7.66667 10.9254 7.59205 11 7.5 11H7C6.63181 11 6.33333 11.2985 6.33333 11.6667C6.33333 12.0349 6.63181 12.3333 7 12.3333Z",
                        fill: "#5069A5"
                    })),
                    Y = () => r.createElement("svg", {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("title", null, "img_icon_functional__arrow, chevron-down_1"), r.createElement("g", {
                        id: "🍭-Icons",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, r.createElement("g", {
                        id: "img_icon_functional__arrow,-chevron-down_1"
                    }, r.createElement("rect", {
                        id: "icon-bg",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24"
                    }), r.createElement("path", {
                        d: "M12.0490137,7.99994244 C12.46687,7.99952636 12.8647061,8.16824604 13.1408545,8.46305506 L19.574175,14.3930995 C19.574175,14.3930995 19.9195108,14.7584835 19.9948842,15.2739041 C20.0514226,15.6605271 19.9203624,16.1525794 19.574175,16.5225448 C19.2629887,16.8551051 18.8781625,16.9763082 18.5368927,16.9565652 C17.9923772,16.9250641 17.5408159,16.5889143 17.5408159,16.5889143 L12.1677332,11.8574256 C12.1377571,11.8252769 12.0944898,11.7864242 12.0490137,11.7864242 C12.0035376,11.7864242 11.9602703,11.8252769 11.9302942,11.8574256 C8.31861015,15.0129707 6.51276815,16.5907433 6.51276815,16.5907433 C6.51276815,16.5907433 6.10274772,16.9519958 5.57392137,16.9963566 C5.21779774,17.0262302 4.78742219,16.8703075 4.46906104,16.5225448 C4.13530039,16.1579605 3.96213505,15.6561406 4.01339518,15.2739041 C4.08363681,14.7501263 4.46906104,14.3930995 4.46906104,14.3930995 L10.9552784,8.46542964 C11.2318997,8.16990698 11.630275,8.00038634 12.0490137,7.99994244 Z",
                        id: "Shape",
                        fill: "#25282D",
                        fillRule: "nonzero",
                        transform: "translate(12.006044, 12.499949) scale(1, -1) translate(-12.006044, -12.499949) "
                    })))),
                    q = () => r.createElement("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6Z",
                        fill: "#050606"
                    }), r.createElement("path", {
                        d: "M12 13C6.75581 13.0061 3.00606 16.2558 3 21.5C3 21.7761 3.22386 22 3.5 22H20.5C20.7761 22 21 21.7761 21 21.5C20.9939 16.2558 17.2442 13.0061 12 13Z",
                        fill: "#050606"
                    })),
                    J = () => r.createElement("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M19.9995 3.16669C22.6688 3.16669 24.8333 5.33047 24.8335 7.99969C24.8335 10.6691 22.6689 12.8337 19.9995 12.8337C17.3303 12.8335 15.1665 10.669 15.1665 7.99969C15.1667 5.33058 17.3304 3.16686 19.9995 3.16669Z",
                        fill: "#E5ECF4",
                        stroke: "#1C3823"
                    }), r.createElement("path", {
                        d: "M11.9993 15.6667H27.9993L28.9998 16C29.7998 16.2667 30.2221 17 30.3332 17.3334C30.8887 18.5556 32.1332 21.2667 32.6665 22.3334C33.3332 23.6667 34.6665 26.3334 34.6665 28C34.6665 29.3334 33.7776 30.5556 33.3332 31C32.3332 31.5556 30.0665 32.6667 28.9998 32.6667C27.6665 32.6667 26.9998 32 26.6665 30.3334C26.3998 29 27.8887 28.2222 28.6665 28L28.9998 26V21L19.9998 18.3334L10.9998 21V27.6667C11.1109 27.7778 11.5332 28.1334 12.3332 28.6667C13.3332 29.3334 13.3332 30.6667 12.9998 31.3334C12.6665 32 11.6665 32.3334 10.9998 32.6667C10.3332 33 9.33265 32.6667 6.99932 31C5.13265 29.6667 5.11043 27.5556 5.33265 26.6667C6.77709 23.5556 9.79932 17.2 10.3327 16.6667C10.866 16.1334 11.666 15.7778 11.9993 15.6667Z",
                        fill: "#E5ECF4"
                    }), r.createElement("path", {
                        d: "M20 18.3333L28.6667 21L29 21.3333V24.3333C29 25.9333 28.7778 27.4444 28.6667 28C28.3333 28.1111 27.5333 28.5333 27 29.3333C26.4667 30.1333 26.7778 31.2222 27 31.6666L24 35L20 37.6666L16.3333 35.3333L13 31.6666V29.3333C13 28.5333 11.8889 28.1111 11.3333 28L11 25V21L20 18.3333Z",
                        fill: "#93C297"
                    }), r.createElement("path", {
                        d: "M8.76596 26.6667L11.9326 28.217C13.1605 28.8182 13.6131 30.3399 12.9134 31.5144V31.5144C12.2983 32.5469 11.0008 32.9451 9.91239 32.4354L7.79453 31.4437C5.69468 30.4603 4.782 27.9666 5.75096 25.8601L9.10092 18.5772C9.91689 16.8033 11.6908 15.6667 13.6434 15.6667H26.3566C28.3092 15.6667 30.0831 16.8033 30.8991 18.5772L34.249 25.8601C35.218 27.9666 34.3053 30.4603 32.2055 31.4437L30.0876 32.4354C28.9992 32.9451 27.7017 32.5469 27.0866 31.5144V31.5144C26.3869 30.3399 26.8395 28.8182 28.0674 28.217L31.234 26.6667",
                        stroke: "#1C3823",
                        strokeLinecap: "round"
                    }), r.createElement("path", {
                        d: "M11.3332 28C10.8291 25.9836 10.8967 23.0142 10.9597 21.686C10.9793 21.2718 11.2625 20.9222 11.66 20.8044L19.7157 18.4175C19.9012 18.3626 20.0985 18.3626 20.2839 18.4175L28.3397 20.8044C28.7372 20.9222 29.0203 21.2718 29.04 21.686C29.1029 23.0142 29.1706 25.9836 28.6665 28",
                        stroke: "#1C3823"
                    }), r.createElement("ellipse", {
                        cx: "15.9998",
                        cy: "27.3333",
                        rx: "1.33333",
                        ry: "1.33333",
                        fill: "#1C3823"
                    }), r.createElement("ellipse", {
                        cx: "19.9998",
                        cy: "27.3333",
                        rx: "1.33333",
                        ry: "1.33333",
                        fill: "#1C3823"
                    }), r.createElement("ellipse", {
                        cx: "23.9998",
                        cy: "27.3333",
                        rx: "1.33333",
                        ry: "1.33333",
                        fill: "#1C3823"
                    }), r.createElement("path", {
                        d: "M13 31.6667C14.8989 34.6507 18.3432 36.7516 19.5599 37.4305C19.8347 37.5839 20.1653 37.5839 20.4401 37.4305C21.6568 36.7516 25.1011 34.6507 27 31.6667",
                        stroke: "#1C3823",
                        strokeLinecap: "round"
                    }), r.createElement("path", {
                        d: "M20.6665 20.3333L26.7187 22.149C27.0931 22.2613 27.3589 22.5829 27.3605 22.9738C27.3627 23.4948 27.3343 24.3721 27.2031 25.7418",
                        stroke: "white",
                        strokeLinecap: "round"
                    }), r.createElement("path", {
                        d: "M19.6521 35.6414C18.4351 34.9046 17.1271 34.045 16.1421 33.0081",
                        stroke: "white",
                        strokeLinecap: "round"
                    })),
                    Q = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M23 2.78564C22.9971 2.31153 22.807 1.85778 22.4711 1.5233C22.1353 1.18882 21.6809 1.00072 21.207 1H2.79575C2.32148 1.00291 1.86764 1.19351 1.53339 1.53016C1.19915 1.86681 1.01167 2.32213 1.01192 2.79665L1 9.52926C1.02438 12.6716 2.11292 15.7128 4.08784 18.1563C6.06276 20.5998 8.80738 22.3012 11.8735 22.9826C11.932 22.9943 11.9916 23.0002 12.0513 23C12.1129 22.9998 12.1744 22.9933 12.2347 22.9807C15.2948 22.2726 18.0244 20.5471 19.9778 18.0862C21.9311 15.6254 22.9926 12.5745 22.989 9.43205L23 2.78564ZM16.8464 9.72553L14.7931 11.3938C14.7543 11.4254 14.7269 11.4689 14.7152 11.5176C14.7034 11.5663 14.7079 11.6175 14.728 11.6634L15.8711 14.2928C15.9237 14.4204 15.9351 14.5612 15.9037 14.6956C15.8723 14.83 15.7997 14.9511 15.696 15.0421C15.5923 15.1331 15.4627 15.1894 15.3255 15.2031C15.1882 15.2167 15.0501 15.187 14.9306 15.1182L12.1128 13.5325C12.0785 13.5131 12.0398 13.503 12.0005 13.503C11.9611 13.503 11.9224 13.5131 11.8882 13.5325L9.06667 15.1182C8.94717 15.1873 8.80903 15.2172 8.67168 15.2036C8.53433 15.1901 8.40468 15.1338 8.30097 15.0427C8.19725 14.9516 8.1247 14.8302 8.09351 14.6957C8.06232 14.5612 8.07406 14.4203 8.12708 14.2928L9.26925 11.6671C9.28933 11.6212 9.29384 11.57 9.28209 11.5213C9.27033 11.4726 9.24296 11.4291 9.20417 11.3974L7.1545 9.72553C7.05931 9.64107 6.99255 9.52922 6.96336 9.40532C6.93417 9.28142 6.94399 9.15152 6.99147 9.03341C7.03895 8.91531 7.12176 8.81479 7.22857 8.74561C7.33538 8.67643 7.46095 8.64198 7.58808 8.64699H9.95492C10.0003 8.64707 10.0448 8.63358 10.0825 8.60826C10.1202 8.58293 10.1495 8.54692 10.1667 8.50484L11.406 5.47832C11.4623 5.36878 11.5477 5.27689 11.6529 5.21274C11.758 5.14858 11.8787 5.11464 12.0018 5.11464C12.125 5.11464 12.2457 5.14858 12.3508 5.21274C12.4559 5.27689 12.5413 5.36878 12.5977 5.47832L13.8333 8.50484C13.8507 8.54692 13.8802 8.5829 13.9181 8.6082C13.956 8.63351 14.0005 8.647 14.046 8.64699H16.4128C16.5397 8.64252 16.6649 8.67728 16.7714 8.74655C16.8779 8.81581 16.9604 8.91621 17.0078 9.03408C17.0552 9.15196 17.0651 9.28158 17.0362 9.4053C17.0074 9.52902 16.9411 9.64084 16.8464 9.72553Z",
                        fill: "white"
                    })),
                    X = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M0 12.777C0 14.4338 1.34315 15.777 3 15.777H11.5C12.0523 15.777 12.5 15.3293 12.5 14.777C12.5 14.2247 12.0523 13.777 11.5 13.777H3C2.44772 13.777 2 13.3293 2 12.777V5.77698C2 5.22469 2.44772 4.77698 3 4.77698H21C21.5523 4.77698 22 5.22469 22 5.77698V12.777C22 13.3293 22.4477 13.777 23 13.777C23.5523 13.777 24 13.3293 24 12.777V5.77698C24 4.12012 22.6569 2.77698 21 2.77698H3C1.34315 2.77698 0 4.12012 0 5.77698V12.777Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M6.999 9.27698C6.999 10.1054 6.32743 10.777 5.499 10.777C4.67057 10.777 3.999 10.1054 3.999 9.27698C3.999 8.44855 4.67057 7.77698 5.499 7.77698C6.32743 7.77698 6.999 8.44855 6.999 9.27698Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M12 10.777C12.8284 10.777 13.5 10.1054 13.5 9.27698C13.5 8.44855 12.8284 7.77698 12 7.77698C11.1716 7.77698 10.5 8.44855 10.5 9.27698C10.5 10.1054 11.1716 10.777 12 10.777Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M20.001 9.27698C20.001 10.1054 19.3294 10.777 18.501 10.777C17.6726 10.777 17.001 10.1054 17.001 9.27698C17.001 8.44855 17.6726 7.77698 18.501 7.77698C19.3294 7.77698 20.001 8.44855 20.001 9.27698Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M14.6465 12.9244C14.7984 12.7723 15.0305 12.7343 15.223 12.83L22.673 16.554C22.86 16.6473 22.9692 16.847 22.9469 17.0547C22.9247 17.2625 22.7755 17.4345 22.573 17.486L20.173 18.086C19.9937 18.1307 19.8538 18.2707 19.809 18.45L19.209 20.85C19.1575 21.0525 18.9855 21.2016 18.7778 21.2239C18.57 21.2462 18.3703 21.137 18.277 20.95L14.553 13.501C14.457 13.3087 14.4947 13.0765 14.6465 12.9244Z",
                        fill: "white"
                    })),
                    ee = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M6.65565 1.2002H17.3441L11.9999 6.16267L6.65565 1.2002Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M2.54 5.43002L4.21261 2.20679L9.59012 7.2002H3.55468C2.6815 7.2002 2.12512 6.22954 2.54 5.43002Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M20.4451 7.2002H14.4096L19.7872 2.20674L21.4598 5.43002C21.8747 6.22954 21.3183 7.2002 20.4451 7.2002Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M3.61868 9.6002C2.59243 9.6002 2.02732 10.7291 2.67718 11.4809L11.0584 21.1779C11.5451 21.741 12.4547 21.741 12.9414 21.1779L21.3226 11.4809C21.9725 10.7291 21.4074 9.6002 20.3811 9.6002H3.61868Z",
                        fill: "white"
                    })),
                    te = () => r.createElement("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M35.333 12.5C36.1614 12.5 36.833 13.1716 36.833 14V33.667C36.8328 35.4156 35.4156 36.8328 33.667 36.833C31.9182 36.833 30.5002 35.4157 30.5 33.667V12.5H35.333Z",
                        fill: "#E5ECF4",
                        stroke: "#3B4A6D"
                    }), r.createElement("rect", {
                        x: "5.8335",
                        y: "3.83325",
                        width: "27.6667",
                        height: "30.3333",
                        rx: "1.5",
                        fill: "#A5C1DC",
                        stroke: "#050606"
                    }), r.createElement("path", {
                        d: "M22.2241 15.8333H29.6665C29.9436 15.8333 30.1665 16.0571 30.1665 16.3323V33.3333C30.1665 34.8907 31.1401 36.0192 32.021 36.7239C32.0689 36.7622 32.1188 36.797 32.1665 36.8333H9.6665C6.07665 36.8332 3.1665 33.9231 3.1665 30.3333V19.3333C3.1665 18.5048 3.83808 17.8333 4.6665 17.8333H19.8618L20.0054 17.7004L21.8853 15.9661C21.9776 15.8808 22.0984 15.8333 22.2241 15.8333Z",
                        fill: "#E5ECF4",
                        stroke: "#3B4A6D"
                    }), r.createElement("circle", {
                        cx: "12.6667",
                        cy: "8.66667",
                        r: "2.16667",
                        fill: "white",
                        stroke: "#050606"
                    }), r.createElement("path", {
                        d: "M12.6665 11.1667C14.2999 11.1667 15.6726 12.2864 16.0581 13.8005C16.0804 13.8884 16.0588 13.9647 15.9956 14.033C15.9262 14.1078 15.8078 14.1667 15.6665 14.1667H9.6665C9.52522 14.1667 9.40685 14.1078 9.3374 14.033C9.27423 13.9647 9.25261 13.8884 9.2749 13.8005C9.66037 12.2864 11.0331 11.1667 12.6665 11.1667Z",
                        fill: "white",
                        stroke: "#050606"
                    }), r.createElement("path", {
                        d: "M30.3333 7H19",
                        stroke: "#050606",
                        strokeLinecap: "round"
                    }), r.createElement("path", {
                        d: "M30.3333 9.66675H19",
                        stroke: "#050606",
                        strokeLinecap: "round"
                    }), r.createElement("path", {
                        d: "M30.3332 12.3333H21.6665",
                        stroke: "#050606",
                        strokeLinecap: "round"
                    }), r.createElement("rect", {
                        x: "11.8335",
                        y: "25.8333",
                        width: "9.66667",
                        height: "7",
                        rx: "1.5",
                        fill: "#3B4A6D",
                        stroke: "#3B4A6D"
                    }), r.createElement("path", {
                        d: "M16.6665 21.1667C18.2312 21.1667 19.5003 22.4351 19.5005 23.9998V25.4998H13.8335V23.9998C13.8337 22.4352 15.102 21.1669 16.6665 21.1667Z",
                        fill: "#E5ECF4",
                        stroke: "#3B4A6D"
                    }), r.createElement("path", {
                        d: "M18.3295 28.3335L16.878 29.9782C16.5146 30.3901 15.887 30.4317 15.4724 30.0715L15.0093 29.6691",
                        stroke: "white",
                        strokeLinecap: "round"
                    })),
                    ae = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M14.3996 10.7999C14.3996 12.1254 13.3251 13.1999 11.9997 13.1999C10.6742 13.1999 9.59969 12.1254 9.59969 10.7999C9.59969 9.47444 10.6742 8.39994 11.9997 8.39994C13.3251 8.39994 14.3996 9.47444 14.3996 10.7999Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M10.3834 7.86682C10.2854 7.92189 10.1626 7.90471 10.0835 7.82482L8.53069 6.26692C8.47861 6.21473 8.45222 6.14221 8.45859 6.06876C8.46495 5.9953 8.50341 5.9284 8.56369 5.88594C10.6274 4.43801 13.377 4.43801 15.4407 5.88594C15.501 5.9284 15.5394 5.9953 15.5458 6.06876C15.5522 6.14221 15.5258 6.21473 15.4737 6.26692L13.9169 7.82482C13.8378 7.90471 13.715 7.92189 13.617 7.86682C12.6108 7.31093 11.3896 7.31093 10.3834 7.86682Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M9.06658 12.4146C9.12164 12.5127 9.10446 12.6355 9.02458 12.7146L7.46881 14.2725C7.41588 14.3246 7.34281 14.3509 7.26884 14.3445C7.19513 14.3381 7.12807 14.2993 7.08586 14.2385C5.63805 12.1746 5.63805 9.42486 7.08586 7.36096C7.12831 7.30068 7.19521 7.26221 7.26866 7.25585C7.34211 7.24949 7.41462 7.27588 7.46681 7.32796L9.02458 8.88087C9.10478 8.95987 9.122 9.08286 9.06658 9.18085C8.51073 10.1871 8.51073 11.4084 9.06658 12.4146Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M14.9743 8.8852C14.8938 8.96403 14.8765 9.08726 14.9323 9.18518C15.4921 10.1982 15.488 11.4288 14.9213 12.438C14.8733 12.5235 14.888 12.6306 14.9573 12.7L16.5311 14.2749C16.5836 14.3275 16.657 14.354 16.731 14.3469C16.8044 14.3403 16.8713 14.3019 16.914 14.2419C18.3617 12.1776 18.3617 9.4276 16.914 7.36329C16.8707 7.30469 16.8038 7.26812 16.731 7.2633C16.657 7.25649 16.5838 7.28286 16.5311 7.33529L14.9743 8.8852Z",
                        fill: "white"
                    }), r.createElement("path", {
                        d: "M13.613 13.7319C13.7111 13.6771 13.8336 13.6943 13.913 13.7739L15.4647 15.3318C15.5178 15.3841 15.5442 15.4576 15.5367 15.5318C15.5314 15.6043 15.4949 15.671 15.4367 15.7147C13.3733 17.1614 10.6251 17.1614 8.56172 15.7147C8.50107 15.6724 8.46226 15.6054 8.45574 15.5318C8.44907 15.4577 8.47542 15.3846 8.52773 15.3318L10.0815 13.7739C10.1607 13.694 10.2834 13.6768 10.3815 13.7319C11.3869 14.2878 12.6075 14.2878 13.613 13.7319Z",
                        fill: "white"
                    }), r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.49995 8.42285e-06H21.4996C22.8545 -0.0234113 23.9727 1.05414 23.9996 2.40896V19.1907C23.9921 20.1065 23.4641 20.9382 22.6386 21.3347C22.5534 21.3769 22.4996 21.4637 22.4996 21.5587V22.5997C22.4996 23.1519 22.0519 23.5996 21.4996 23.5996C20.9473 23.5996 20.4996 23.1519 20.4996 22.5997V21.8497C20.4996 21.7116 20.3877 21.5997 20.2496 21.5997H3.74993C3.61186 21.5997 3.49994 21.7116 3.49994 21.8497V22.5997C3.49994 23.1519 3.05223 23.5996 2.49995 23.5996C1.94768 23.5996 1.49997 23.1519 1.49997 22.5997V21.5587C1.49997 21.4637 1.44611 21.3769 1.36097 21.3347C0.53541 20.9382 0.00743319 20.1065 0 19.1907V2.40896C0.0268112 1.05414 1.14507 -0.0234113 2.49995 8.42285e-06ZM11.9995 19.1998C16.6386 19.1998 20.3994 15.439 20.3994 10.7999C20.3994 6.16081 16.6386 2.40007 11.9995 2.40007C7.36043 2.40007 3.59969 6.16081 3.59969 10.7999C3.59969 15.439 7.36043 19.1998 11.9995 19.1998Z",
                        fill: "white"
                    })),
                    re = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.061 24H2.939C1.31652 23.9983 0.00165362 22.6835 0 21.061V2.939C0.00165362 1.31652 1.31652 0.00165362 2.939 0H21.061C22.6835 0.00165362 23.9983 1.31652 24 2.939V21.061C23.9983 22.6835 22.6835 23.9983 21.061 24ZM6.68074 2.91085C6.70757 2.84148 6.76333 2.78727 6.83343 2.76242V2.76843C8.76482 2.09561 10.8988 2.35361 12.6142 3.46732C14.3296 4.58103 15.4336 6.42531 15.605 8.46335C15.6116 8.53783 15.5851 8.61144 15.5324 8.66455C15.4798 8.71765 15.4064 8.74485 15.3319 8.73889L9.62374 8.2973C9.53799 8.29121 9.4613 8.24174 9.42039 8.16615L6.69386 3.12339C6.65871 3.05784 6.65392 2.98022 6.68074 2.91085ZM15.2163 10.255C15.291 10.2603 15.3595 10.2987 15.4028 10.3597C15.4481 10.4208 15.4632 10.4992 15.4437 10.5727C14.9362 12.6545 13.4534 14.3624 11.4634 15.157C11.3943 15.1848 11.3164 15.1809 11.2505 15.1462C11.1846 15.1111 11.1372 15.0492 11.1205 14.9765L10.0569 10.1865C10.0385 10.1078 10.0589 10.025 10.1117 9.96385C10.1645 9.90269 10.2434 9.87049 10.324 9.87723L15.2163 10.255ZM5.18138 3.72369C5.10847 3.70783 5.03227 3.72501 4.97322 3.77062C2.73318 5.50056 1.84123 8.46352 2.754 11.1426C3.66678 13.8216 6.18221 15.6237 9.01248 15.6261C9.14123 15.6261 9.26877 15.6261 9.39631 15.6153C9.47082 15.6112 9.53964 15.5742 9.58402 15.5142C9.6286 15.4547 9.64528 15.3788 9.62974 15.306L8.29776 9.31272C8.29262 9.28972 8.28454 9.26747 8.27369 9.24654L5.35224 3.85123C5.31676 3.78571 5.25429 3.73907 5.18138 3.72369ZM20.4 4.80006C20.4 5.4628 19.8627 6.00006 19.2 6.00006C18.5373 6.00006 18 5.4628 18 4.80006C18 4.13731 18.5373 3.60006 19.2 3.60006C19.8627 3.60006 20.4 4.13731 20.4 4.80006ZM19.2 9.60006C19.8627 9.60006 20.4 9.0628 20.4 8.40006C20.4 7.73731 19.8627 7.20006 19.2 7.20006C18.5373 7.20006 18 7.73731 18 8.40006C18 9.0628 18.5373 9.60006 19.2 9.60006ZM20.4 12.0001C20.4 12.6628 19.8627 13.2001 19.2 13.2001C18.5373 13.2001 18 12.6628 18 12.0001C18 11.3373 18.5373 10.8001 19.2 10.8001C19.8627 10.8001 20.4 11.3373 20.4 12.0001ZM19.8899 17.0341L17.7708 18.7371C17.6797 18.8095 17.5453 18.8149 17.4474 18.7501L16.045 17.8094C15.7043 17.5932 15.2955 17.4827 14.8797 17.4942C14.4569 17.5026 14.0506 17.6443 13.7308 17.8949L11.1467 19.9716C10.7215 20.3125 10.6819 20.9011 11.0584 21.2861C11.4349 21.6712 12.0849 21.707 12.5101 21.3661L14.8027 19.5236C14.8933 19.451 15.0277 19.4455 15.1251 19.5105L16.5275 20.4513C16.868 20.668 17.2768 20.7788 17.6928 20.7674C18.1157 20.7587 18.522 20.6167 18.8416 20.3658L21.2533 18.4285C21.5284 18.2079 21.6526 17.8713 21.5793 17.5453C21.5059 17.2193 21.246 16.9535 20.8975 16.8481C20.5491 16.7426 20.1649 16.8135 19.8899 17.0341Z",
                        fill: "white"
                    })),
                    ne = () => r.createElement("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, r.createElement("path", {
                        d: "M0.438969 21.4373C-0.146681 22.0232 -0.146457 22.9729 0.439469 23.5586C1.0254 24.1442 1.97515 24.144 2.5608 23.5581L11.822 14.2982C11.8689 14.2512 11.9326 14.2248 11.999 14.2248C12.0654 14.2248 12.1291 14.2512 12.176 14.2982L21.4373 23.5601C21.8161 23.9391 22.3684 24.0872 22.8861 23.9486C23.4037 23.81 23.8081 23.4058 23.947 22.8882C24.0858 22.3707 23.9379 21.8183 23.5591 21.4393L14.2988 12.1755C14.2518 12.1286 14.2254 12.0649 14.2254 11.9985C14.2254 11.9321 14.2518 11.8684 14.2988 11.8215L23.5611 2.56068C24.1467 1.97423 24.1461 1.02407 23.5596 0.438444C22.9731 -0.147181 22.0229 -0.146509 21.4373 0.439944L12.176 9.69879C12.1291 9.7458 12.0654 9.77223 11.999 9.77223C11.9326 9.77223 11.8689 9.7458 11.822 9.69879L2.5608 0.439944C1.97515 -0.145957 1.0254 -0.146181 0.439469 0.439444C-0.146457 1.02507 -0.146681 1.97478 0.438969 2.56068L9.69921 11.8215C9.74623 11.8684 9.77265 11.9321 9.77265 11.9985C9.77265 12.0649 9.74623 12.1286 9.69921 12.1755L0.438969 21.4373Z",
                        fill: "#25282D"
                    }));
                var ie = {
                    wrapper: "MItTRjNMhmvcEK9SMZn5",
                    message: "ANSKFoEzjrjtdGiraQCR",
                    close: "eWUimGY4UCQFxcXfWaua"
                };
                const oe = e => {
                    const {
                        type: t,
                        children: a,
                        setClosedBanner: n,
                        closedBanner: i
                    } = e, o = B()({
                        [ie.wrapper]: !0,
                        [ie[t]]: "error" === t || "warning" === t
                    }), l = (0, r.useRef)(null);
                    return (0, r.useEffect)((() => {
                        const e = l.current;
                        e && e.scrollIntoView({
                            behavior: "smooth"
                        })
                    })), r.createElement(r.Fragment, null, i && r.createElement("div", {
                        ref: l,
                        className: o,
                        onClick: () => {
                            n(!1)
                        }
                    }, r.createElement("div", {
                        className: ie.message
                    }, r.createElement(W, null), a)))
                };
                var le = "dYlFabZMMb0f1jWPNAP0",
                    se = "qYgP1d1ZMdZXQGFWkfQ3",
                    ce = "FN9IJva0CCQcPYnvnJN1",
                    de = "HBhjbVVwy0lV6wWP0zaU";
                const ue = e => {
                    const {
                        checked: t,
                        onClick: a,
                        id: n,
                        label: i
                    } = e, o = B()({
                        [ce]: !0,
                        [de]: t
                    });
                    return r.createElement("div", {
                        className: le
                    }, r.createElement("button", {
                        type: "button",
                        id: n,
                        className: o,
                        onClick: a
                    }), r.createElement("label", {
                        className: se,
                        htmlFor: n
                    }, i))
                };
                var me = {
                    wrapper: "u2N9w4PeGh3eYtKyspvE",
                    top: "_bPTSAGtO1UaCz8he2ky",
                    size: "lkImVURpiNXcxHpo6Cna",
                    spin: "aFZ1ikwLT8gsmLtwHfIV"
                };
                const pe = e => {
                        const {
                            colorBottom: t,
                            colorTop: a
                        } = e;
                        return r.createElement("svg", {
                            className: me.wrapper
                        }, r.createElement("circle", {
                            className: me.bottom,
                            cx: "12",
                            cy: "12",
                            fill: "transparent",
                            r: "10",
                            stroke: t,
                            strokeWidth: "4"
                        }), r.createElement("circle", {
                            className: me.top,
                            cx: "12",
                            cy: "12",
                            fill: "transparent",
                            r: "10",
                            stroke: a,
                            strokeWidth: "4"
                        }))
                    },
                    fe = () => {
                        const e = (0, r.useRef)(!1);
                        return (0, r.useEffect)((() => (e.current = !0, () => {
                            e.current = !1
                        })), []), e
                    };
                var ge = a(8221),
                    ve = a.n(ge),
                    Ee = {
                        wrapper: "g5hHyCzV8sZiNdZBXY46",
                        textarea: "oPb0aWrAY6z0v7ersMcG",
                        label: "VykCoNgcado7zTm8PdEB",
                        valid: "MOevi_uR5bJXyobYNpO3",
                        focus: "Yp8hA_JkQn0Vt6Klvr2t"
                    },
                    Ce = function(e, t) {
                        var a = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var n = 0;
                            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]])
                        }
                        return a
                    };
                const he = e => {
                    const {
                        onChange: t,
                        value: a,
                        maxLength: n = 250,
                        focus: i,
                        label: o,
                        setTextareaExistsSetState: l
                    } = e, s = Ce(e, ["onChange", "value", "maxLength", "focus", "label", "setTextareaExistsSetState"]), [c, d] = (0, r.useState)(a || ""), [u, m] = (0, r.useState)(!!i), p = fe(), f = B()({
                        [Ee.textarea]: !0,
                        [Ee.focus]: u,
                        [Ee.active]: a && a,
                        [Ee.valid]: a && a
                    });
                    return (0, r.useEffect)((() => {
                        d(a || "")
                    }), [a]), (0, r.useEffect)((() => {
                        l()
                    }), []), r.createElement("div", {
                        className: Ee.wrapper
                    }, r.createElement("label", {
                        className: `${Ee.label}`
                    }, o), r.createElement("textarea", Object.assign({}, s, {
                        className: f,
                        onChange: e => {
                            d(e.target.value), t && t(e)
                        },
                        value: c,
                        maxLength: n,
                        onBlur: t => {
                            t.persist(), m(!1);
                            const a = (t => ve()((() => {
                                p.current && (m(!1), e.onBlur && e.onBlur(t))
                            }), 250))(t);
                            a()
                        },
                        onFocus: t => {
                            t.persist(), m(!0);
                            const a = (t => ve()((() => {
                                p.current && (m(!0), e.onFocus && e.onFocus(t))
                            }), 250))(t);
                            a()
                        }
                    })))
                };
                var ye = "qiywbePw8CvtKFkMxEmw",
                    we = "I6TUHcNiJh7bITKjHY4_",
                    be = "nKmXrKI3l5wzreUq5xxJ",
                    ke = "hgiAjIn4EAXb_GAOOHHC";
                const _e = e => {
                    const {
                        children: t,
                        label: a,
                        id: n,
                        error: i,
                        errormessage: o,
                        customWrapperClass: l,
                        showHint: s,
                        hintmessage: c
                    } = e, d = "string" == typeof l ? l : "", u = B()({
                        [ye]: !0,
                        [d]: !0
                    });
                    return r.createElement("div", {
                        className: u
                    }, r.createElement("label", {
                        className: we,
                        htmlFor: n
                    }, a && a), t, r.createElement(G, null), r.createElement(W, null), i && r.createElement("div", {
                        className: be
                    }, o), s && r.createElement("div", {
                        className: ke
                    }, c))
                };
                var Se = "Ih3XerYZhuGLG6so7QSz",
                    xe = "M67JA_hoZe_5wNQyMY2t",
                    Le = "M4UuhJ5h8Fd24FJVs3yH",
                    Te = "X56RdMlQaMJE_K7qXuN6",
                    Ne = "JJokbwhGk_A8r_5Fg3a7",
                    Ie = "hxtJftno8obAtiSXEesk";
                const Pe = e => {
                    const {
                        name: t,
                        error: a,
                        children: n,
                        disabled: i = !1,
                        selected: o,
                        valid: l,
                        onChange: s,
                        onBlur: c,
                        defaultValue: d
                    } = e, u = B()({
                        [Se]: !0,
                        [Ne]: o,
                        [Le]: a,
                        [Te]: l,
                        [Ie]: i
                    });
                    return r.createElement(_e, Object.assign({}, e), r.createElement("div", {
                        className: u
                    }, r.createElement("select", {
                        className: xe,
                        disabled: i,
                        id: t,
                        name: t,
                        onBlur: e => (e => {
                            e.preventDefault(), c && c(e)
                        })(e),
                        onChange: e => (e => {
                            e.preventDefault(), s && s(e)
                        })(e),
                        defaultValue: d
                    }, n), r.createElement(Y, null)))
                };
                var Me = {
                        input: "wb9iV8eCc8bzNn1XuVgw",
                        focus: "t57UlxFam1TwAraMNwNh",
                        error: "eZHKJJbP0iPlqxpeZyny",
                        valid: "gIzeA82nHCbQtNwkgm6G"
                    },
                    De = function(e, t) {
                        var a = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var n = 0;
                            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]])
                        }
                        return a
                    };
                const Oe = e => {
                        const t = e.autoComplete ? e.autoComplete : "on",
                            {
                                warning: a,
                                label: n,
                                id: i,
                                error: o,
                                onChange: l,
                                valid: s,
                                inputRef: c,
                                value: d,
                                maxLength: u = 100,
                                focus: m,
                                customWrapperClass: p,
                                showHint: f,
                                index: g
                            } = e,
                            v = De(e, ["warning", "label", "id", "error", "onChange", "valid", "inputRef", "value", "maxLength", "focus", "customWrapperClass", "showHint", "index"]),
                            [E, C] = (0, r.useState)(d || ("number" === e.type ? 0 : "")),
                            [h, y] = (0, r.useState)(!!m),
                            w = fe(),
                            b = B()({
                                [Me.input]: !0,
                                [Me.focus]: h,
                                [Me.active]: d && d,
                                [Me.valid]: !o && d,
                                [Me.error]: o && o
                            });
                        return (0, r.useEffect)((() => {
                            C(d || ("number" === e.type ? 0 : ""))
                        }), [d, e.type]), r.createElement(_e, Object.assign({}, e, {
                            customWrapperClass: p
                        }), r.createElement("input", Object.assign({
                            autoComplete: t
                        }, v, {
                            className: b,
                            onChange: t => {
                                const a = t.target.value;
                                "tel" === e.type && a && !a.match("^[0-9-()+ ]*$") || (C(a), l && l(t))
                            },
                            ref: c,
                            value: E,
                            maxLength: u,
                            onBlur: t => {
                                t.persist(), y(!1), (t => {
                                    w.current && (y(!1), e.onBlur && e.onBlur(t))
                                })(t)
                            },
                            onFocus: t => {
                                t.persist(), y(!0), (t => {
                                    w.current && (y(!0), e.onFocus && e.onFocus(t))
                                })(t)
                            }
                        })))
                    },
                    Fe = e => r.createElement("input", Object.assign({
                        type: "hidden"
                    }, e));
                var Be = a(8084);
                const Ae = {
                        AU: ["New South Wales", "Victoria", "Queensland", "Tasmania", "South Australia", "Western Australia", "Northern Territory", "Australian Capital Territory"],
                        CA: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
                        NZ: ["Northland", "Auckland", "Bay of Plenty", "Gisborne", "Hawke's Bay", "Taranaki", "Manawatu-Wanganui", "Wellington", "West Coast", "Canterbury", "Otago", "Southland", "Tasman", "Nelson", "Marlborough", "Waikato"],
                        US: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
                    },
                    Ue = e => {
                        try {
                            return "object" == typeof Ae[e] ? Ae[e].sort() : [""]
                        } catch (e) {
                            return console.warn(e.message), [""]
                        }
                    };
                const Re = e => null == e ? "Value is required." : e.length > 128 ? "Value is too long." : 0 === e.length && "Value cannot be empty.",
                    Ve = e => {
                        const t = e ? e.trim() : e;
                        let a = Re(t);
                        return a || !!t.includes("@") && "String should not contain '@'."
                    },
                    $e = e => {
                        const t = e ? e.trim() : e;
                        let a = Re(t);
                        if (a) return a;
                        if (t.includes("@")) return "Full name should not contain '@'.";
                        return !/^[^\s]+(\s[^\s]+)+$/.test(t) && "Full name must contain at least two words."
                    },
                    He = e => {
                        let t = Re(e);
                        if (t) return t;
                        return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e) && "Invalid email format."
                    },
                    je = e => {
                        let t = Re(e);
                        return t || !/^[0-9-()+ ]*$/.test(e) && "Phone number invalid character"
                    },
                    Ze = e => null == e ? "A selection is required." : 0 === e.toString().length && "Selection cannot be empty.",
                    ze = e => null == e ? "A selection is required." : 0 === e.toString().length && "Selection cannot be empty.",
                    Ge = e => {
                        const t = e ? e.trim() : e;
                        let a = Re(t);
                        return a || (t.length < 1 || t.length > 20 ? "Zip length is incorrect" : !/^[a-zA-Z0-9\-\ ]+$/.test(t) && "Invalid character")
                    },
                    We = e => {
                        const {
                            formikTouched: t,
                            formikErrors: a,
                            formikValues: n,
                            trackBlur: i,
                            trackErrorBlur: o
                        } = e, l = n.country, s = "state", c = Ue(l), d = (() => {
                            switch (l) {
                                case "US":
                                default:
                                    return "State";
                                case "CA":
                                case "AU":
                                    return "Province";
                                case "NZ":
                                    return "Region"
                            }
                        })();
                        return r.createElement(Be.D0, {
                            name: s,
                            as: Pe,
                            disabled: !1,
                            error: a[s] && t[s],
                            valid: "" !== n[s],
                            errormessage: "Field is required",
                            validate: Ze,
                            required: !0,
                            label: d,
                            defaultValue: n[s],
                            onBlur: e => {
                                i(s), o(s, Ze, e.target.value)
                            }
                        }, c.map(((e, t) => r.createElement("option", {
                            key: t.toString(),
                            value: e
                        }, e))))
                    };
                var Ke = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const Ye = e => Ke(void 0, void 0, void 0, (function*() {
                    try {
                        const t = yield fetch("/lpapi/form/EmailDomainCheck", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e
                            })
                        });
                        return "0" === (yield t.json()).isGeneric
                    } catch (e) {
                        return !1
                    }
                }));
                var qe = "ayaYjzfCMsgWi_8uDN6Q",
                    Je = "pUIwi4lxi1DItXYkut78",
                    Qe = function(e, t, a, r) {
                        return new(a || (a = Promise))((function(n, i) {
                            function o(e) {
                                try {
                                    s(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function l(e) {
                                try {
                                    s(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                    e(t)
                                }))).then(o, l)
                            }
                            s((r = r.apply(e, t || [])).next())
                        }))
                    };
                const Xe = (0, r.forwardRef)(((e, t) => {
                    const {
                        formikTouched: a,
                        formikErrors: i,
                        formikValues: o,
                        setTextareaExistsSetState: l,
                        formikRef: s
                    } = e, [c, d] = (0, r.useState)(!1), [u, m] = (0, r.useState)(!1);
                    (0, r.useImperativeHandle)(t, (() => ({
                        isCheckingEmailOrNotBusinessEmail: () => u || c
                    })), [u, c]);
                    const {
                        inputs: f
                    } = (0, r.useContext)(n), g = (e, t) => {
                        O("event", "form_field_focus", {
                            form_field: `form-field_${e||t}`,
                            form_field_url: `${window.location.pathname}`
                        })
                    }, {
                        formType: v
                    } = window.LPFormData, E = v === p.PARTNER, C = e => !(!E || !c) || He(e), h = e => E && "US" === e || "CA" === e || "AU" === e || "NZ" === e, [y, w] = (0, r.useState)(h(o.country));
                    (0, r.useEffect)((() => {
                        const e = o.country;
                        w(h(e)), o.state = y ? Ue(e)[0] : ""
                    }), [o.country, y]);
                    const b = (e, t, a) => {
                            var r, n, i;
                            return null === (r = s.current) || void 0 === r || r.setFieldError(e, !1), null === (n = s.current) || void 0 === n || n.setFieldTouched(e, !0), t(a) && (null === (i = s.current) || void 0 === i || i.setFieldError(e, !0)), !1
                        },
                        k = B()({
                            [qe]: !E,
                            [Je]: E
                        });
                    return r.createElement("div", {
                        className: k
                    }, f.map(((e, t) => {
                        const n = e.options,
                            u = e.type,
                            p = e.label,
                            f = e.placeHolder,
                            v = e.id,
                            h = e.placeHolder,
                            w = e.error,
                            k = e.required;
                        let _ = null;
                        switch (u) {
                            case "select":
                                _ = r.createElement(r.Fragment, null, r.createElement(Be.D0, {
                                    name: v,
                                    as: Pe,
                                    disabled: !1,
                                    error: i[v] && a[v],
                                    valid: "" !== o[v],
                                    errormessage: w,
                                    validate: Ze,
                                    required: !0,
                                    key: t,
                                    label: p,
                                    defaultValue: o[v],
                                    onBlur: e => {
                                        g(v), b(v, Ze, e.target.value)
                                    }
                                }, "country" !== v && r.createElement("option", {
                                    value: "",
                                    hidden: !0
                                }, h), n.map(((e, t) => {
                                    const a = Object.keys(e)[0];
                                    return r.createElement("option", {
                                        key: t.toString(),
                                        value: e[a]
                                    }, a)
                                }))), "country" === v && y && r.createElement(We, {
                                    formikValues: o,
                                    formikTouched: a,
                                    formikErrors: i,
                                    trackBlur: g,
                                    trackErrorBlur: b
                                }));
                                break;
                            case "textarea":
                                _ = r.createElement(Be.D0, {
                                    setTextareaExistsSetState: l,
                                    name: u,
                                    required: !1,
                                    as: he,
                                    label: p,
                                    key: t,
                                    onFocus: () => {
                                        g(v, u)
                                    }
                                });
                                break;
                            case "email":
                                _ = r.createElement(Be.D0, {
                                    name: v,
                                    type: u,
                                    error: i[v] && a[v],
                                    errormessage: c && E ? f || "Please use a business email." : w,
                                    maxLength: 128,
                                    validate: C,
                                    as: Oe,
                                    label: p,
                                    key: t,
                                    required: E,
                                    onFocus: () => {
                                        g(v)
                                    },
                                    onBlur: e => {
                                        var t;
                                        E ? (t = e.target.value, Qe(void 0, void 0, void 0, (function*() {
                                            var e, a, r, n;
                                            return null === (e = s.current) || void 0 === e || e.setFieldTouched("email", !0), He(t) ? (null === (a = s.current) || void 0 === a || a.setFieldError("email", !0), d(!1), m(!1), !0) : (m(!0), (yield Ye(t)) ? (null === (n = s.current) || void 0 === n || n.setFieldError("email", !1), d(!1), m(!1), He(t), !1) : (null === (r = s.current) || void 0 === r || r.setFieldError("email", !0), d(!0), m(!1), !0))
                                        })), b(v, C, e.target.value)) : (He(e.target.value), b(v, He, e.target.value))
                                    }
                                });
                                break;
                            case "tel":
                                _ = r.createElement(Be.D0, {
                                    name: v,
                                    type: u,
                                    error: i[v] && a[v],
                                    errormessage: w,
                                    validate: k ? je : "",
                                    as: Oe,
                                    label: p,
                                    key: t,
                                    maxLength: "30",
                                    onFocus: () => {
                                        g(v)
                                    }
                                });
                                break;
                            case "hidden":
                                _ = r.createElement(Be.D0, {
                                    name: v,
                                    as: Fe,
                                    key: t
                                });
                                break;
                            default:
                                _ = r.createElement(Be.D0, {
                                    name: v,
                                    type: u,
                                    error: i[v] && a[v],
                                    errormessage: w,
                                    validate: "fullName" === v ? $e : Ve,
                                    as: Oe,
                                    label: p,
                                    key: t,
                                    onFocus: () => {
                                        g(v)
                                    },
                                    onBlur: e => {
                                        b(v, Ve, e.target.value)
                                    },
                                    index: !0
                                })
                        }
                        return _
                    })))
                }));
                var et = "Pq2QtAbfB0iADtozuz4J";
                var tt = e => r.createElement("div", {
                        className: et
                    }, e.children),
                    at = "oHyAOJ7WjsPM7SlX0ah3",
                    rt = "lbhgVfHP7JgeatxnK_r7",
                    nt = "ETivBHCsCcNjnCdy6bEL",
                    it = {
                        trustBadge: "XPeUUxr2E6atMkvmbz5z"
                    };
                const ot = e => {
                    const {
                        mobile: t
                    } = e, a = B()({
                        [it.trustBadge]: !0,
                        [it.mobile]: t
                    });
                    return r.createElement("a", {
                        className: a,
                        target: "_blank",
                        href: "https://privacy.truste.com/privacy-seal/validation?rid=3770533b-b691-4636-afef-9dcd99e25c18"
                    })
                };
                var lt = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const st = e => {
                    const {
                        toggleModalState: t,
                        isModalOpen: a,
                        formikRef: i,
                        initialValues: o,
                        unsubscribeClick: l,
                        displayUnsubscribeCheckbox: s,
                        optOutOfEmails: c,
                        setOptOutOfEmails: d,
                        closedBanner: u,
                        setClosedBanner: m,
                        handleSub: f,
                        setTextareaExistsSetState: g,
                        formSubmitting: v
                    } = e, E = (0, r.useContext)(n), C = window.newForm, h = ({
                        children: e
                    }) => C ? r.createElement(r.Fragment, null, e) : r.createElement(tt, null, e), y = e => ((0, r.useEffect)((() => {
                        const t = Object.keys(e.errors);
                        e.isSubmitting && t.length > 0 && e.isValidating && (O("event", "form_error", {
                            form_url: window.location.pathname,
                            error_message: "empty-fields"
                        }), 1 === t.length && !1 === e.errors.email ? m(!1) : m(!0))
                    }), [e.submitCount]), null), w = (0, r.useRef)(null), b = () => {
                        var e, t;
                        if ((null === (e = window.LPFormData) || void 0 === e ? void 0 : e.formType) === p.PARTNER) {
                            const e = null === (t = w.current) || void 0 === t ? void 0 : t.isCheckingEmailOrNotBusinessEmail();
                            return e || v
                        }
                        return v
                    };
                    return r.createElement(r.Fragment, null, r.createElement($, {
                        setModalState: t,
                        modalState: a,
                        modalType: "large",
                        bodyCopy: "We could not process your request.",
                        closeButtonCopy: "Close",
                        headlineCopy: "Oops",
                        isModalClosable: !0,
                        transparent: !1
                    }), r.createElement("h2", {
                        className: nt
                    }, E.title), r.createElement(oe, {
                        closedBanner: u,
                        setClosedBanner: m,
                        type: "error"
                    }, r.createElement(z, {
                        htmlString: E.globalError
                    })), r.createElement(Be.l1, {
                        validateOnMount: !0,
                        validateOnChange: !0,
                        validateOnBlur: !0,
                        innerRef: i,
                        initialValues: o,
                        onSubmit: e => lt(void 0, void 0, void 0, (function*() {
                            yield f(e)
                        }))
                    }, (({
                        errors: e,
                        touched: t,
                        values: a,
                        isSubmitting: n,
                        isValidating: o,
                        isValid: u,
                        submitCount: p
                    }) => r.createElement(Be.lV, null, r.createElement(h, null, r.createElement(y, {
                        submitCount: p,
                        isValidating: o,
                        isValid: u,
                        errors: e,
                        isSubmitting: n
                    }), r.createElement(Xe, {
                        formikTouched: t,
                        formikErrors: e,
                        formikValues: a,
                        formikRef: i,
                        setTextareaExistsSetState: g,
                        setClosedBanner: m,
                        ref: w
                    }), r.createElement(R, {
                        id: "FORM_SUBMIT",
                        type: "submit",
                        onClick: e => {
                            var t;
                            O("event", "cta_submit_click", {
                                cta_name: (null === (t = e.target) || void 0 === t ? void 0 : t.innerHTML) || "Submit",
                                cta_url: `${window.location.origin}${window.location.pathname}/thank-you`,
                                cta_position: "Lead gen form"
                            })
                        },
                        disabled: b()
                    }, v ? r.createElement(pe, {
                        colorBottom: "#751a17",
                        colorTop: "#fff"
                    }) : E.sendButton), r.createElement("div", {
                        className: at,
                        onClick: l
                    }, r.createElement("p", {
                        className: rt
                    }, r.createElement(z, {
                        htmlString: E.terms
                    })), s && r.createElement(Be.D0, {
                        name: "optOutOfEmails",
                        as: ue,
                        checked: c,
                        value: c,
                        label: E.optOutOfEmails[0].label,
                        id: "optOutOfEmails",
                        onClick: () => {
                            d(!c)
                        }
                    }), r.createElement(ot, null)))))))
                };
                var ct = {};
                const dt = e => {
                        const {
                            children: t
                        } = e;
                        return r.createElement(tt, null, r.createElement("div", {
                            className: ct.wrapper
                        }, t))
                    },
                    ut = e => r.createElement(dt, Object.assign({}, e));
                var mt = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const pt = (e, t) => mt(void 0, void 0, void 0, (function*() {
                    if (!e) return null;
                    let a = e.toString().toLowerCase().trim();
                    switch (t) {
                        case "phone":
                            a = a.replace(/\D/g, "");
                            break;
                        case "email":
                            break;
                        case "name":
                        case "address":
                        case "city":
                        case "state":
                            a = a.replace(/[^a-z]/g, "");
                            break;
                        default:
                            a = a.replace(/\s/g, "")
                    }
                    const r = (new TextEncoder).encode(a),
                        n = yield crypto.subtle.digest("SHA-256", r);
                    return Array.from(new Uint8Array(n)).map((e => e.toString(16).padStart(2, "0"))).join("")
                }));
                var ft = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const gt = e => ft(void 0, void 0, void 0, (function*() {
                    try {
                        if (window.analytics) {
                            const t = yield pt(e, "email");
                            window.analytics.identify(t)
                        }
                    } catch (e) {
                        console.warn("analytics event issue"), console.warn(e.message)
                    }
                }));
                var vt = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };

                function Et() {
                    const e = (0, r.useRef)(null),
                        [t, a] = (0, r.useState)(!1),
                        [i, o] = (0, r.useState)(!1),
                        [c, d] = (0, r.useState)(!1),
                        [u, f] = (0, r.useState)(!1),
                        g = document.title.replace(/\s/g, ""),
                        v = g.length > 0 ? g : "",
                        E = {},
                        C = (0, r.useContext)(n),
                        h = s("cciso"),
                        [y, w] = (0, r.useState)(!1),
                        [b, k] = (0, r.useState)(!1),
                        _ = e => {
                            e !== u && f(e)
                        },
                        S = () => {
                            O("event", "form_error", {
                                form_url: window.location.pathname,
                                error_message: `processing-error_${v}`
                            })
                        };
                    return C && !1 !== C.error && C.inputs.forEach((e => {
                        "" !== e.id && ("country" === e.id ? E[e.id] = h || "US" : E[e.id] = e.defaultValue)
                    })), null === C ? r.createElement(D, null) : C && "object" == typeof C ? r.createElement(st, {
                        toggleModalState: e => {
                            o(e)
                        },
                        isModalOpen: i,
                        formikRef: e,
                        initialValues: E,
                        handleSub: e => vt(this, void 0, void 0, (function*() {
                            k(!0), _(!1);
                            const a = yield function(e, t, a) {
                                const r = m(e, t, a),
                                    n = "partner" === (null === (i = document.getElementById("form").dataset) || void 0 === i ? void 0 : i.type) ? "SendPartnersDataAsync" : window.LPFormData.formType === p.PARTNER ? "SendPartnersInterest" : "SendAsync";
                                var i;
                                return l.A.post(`/lpapi/form/${n}`, r).catch((() => !1)).then((e => !!e))
                            }(e, t, y);
                            return a ? (yield gt(e.email.toString()), "string" == typeof e.campaignType && "gated-content" === e.campaignType && function(e, t, a, r, n) {
                                const i = "localhost" !== window.location.hostname,
                                    o = new Date;
                                let l = null;
                                void 0 !== a && (o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3), a.constructor === Number && (l = a === 1 / 0 ? "expires=Fri, 31 Dec 9999 23:59:59 GMT" : `expires=${o.toUTCString()}`)), document.cookie = `${e}=${t};` + (l ? `${l};` : "") + (r ? `domain=${r};path=/;` : "") + (n ? `SameSite=${n};` : "") + (i ? "Secure;" : "")
                            }("lp_gatedcontent", "true"), window.location.href = C.successUrl, !0) : (o(!0), S(), k(!1), !1)
                        })),
                        unsubscribeClick: e => {
                            "SPAN" === e.target.tagName && d(!c)
                        },
                        displayUnsubscribeCheckbox: c,
                        optOutOfEmails: t,
                        setOptOutOfEmails: a,
                        setClosedBanner: _,
                        closedBanner: u,
                        setTextareaExistsSetState: () => {
                            w(!0)
                        },
                        formSubmitting: b
                    }) : r.createElement(ut, null, r.createElement("h2", null, "Oops!"), r.createElement("p", null, "Something went wrong. Please reload or try again later."))
                }
                var Ct = "imTGgqunvLnt0sp2zliE",
                    ht = "KI3KveDhvDxWAuk2TA2c",
                    yt = "St4INXG1zJXbGfXP1CPW",
                    wt = "lmeQbd9rzHVk8Wt9lEJJ",
                    bt = "OdMLkYnJkPFOZi_ga6RJ",
                    kt = "ixvmFk6llATYwkYdbsmp",
                    _t = "LCyo_UoU9mD9YshwatEW",
                    St = "vc9Tvc1OAvcxBvJEHN1y",
                    xt = "lclNYAxFw5gbmH_5Xg_C",
                    Lt = "vSB8qa171aL5mH7Elkps";
                const Tt = e => {
                    const {
                        text: t
                    } = e;
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        className: xt
                    }, r.createElement("div", {
                        className: Lt
                    }, r.createElement(K, null), t)))
                };
                var Nt = "xjP7MPS9aHin5owycSyx",
                    It = "E3rZMUymUpkhIq13OmSX",
                    Pt = "Xd1PkGYVO8OGQ2nIfZYu";
                const Mt = (e, t) => {
                    O("event", "form_field_focus", {
                        form_field: `form-field_${e||t}`,
                        form_field_url: `${window.location.pathname}`
                    })
                };
                var Dt = "b8szZsgzr2ndCSwpUify",
                    Ot = "J2d1xTNMiblrKNY1Sm5G",
                    Ft = "XWLnNMc2WP380cDLpPml",
                    Bt = "GQaDSdrzk6T9eS6htdXf",
                    At = "Vu6Ln7kaC0jr8HvdsLFI",
                    Ut = "B2wZHHDHFJrUKvDrKJjC";
                const Rt = ({
                        name: e,
                        options: t,
                        label: a,
                        error: n,
                        errorMessage: i,
                        onFocus: o,
                        onBlur: l
                    }) => r.createElement("div", null, r.createElement("fieldset", {
                        className: Dt
                    }, r.createElement("div", {
                        className: Ot
                    }, a), r.createElement("div", {
                        className: Ft
                    }, r.createElement(Be.D0, {
                        name: e,
                        validate: ze,
                        render: ({
                            field: a
                        }) => t.map((t => {
                            const n = Object.keys(t)[0];
                            return r.createElement("label", {
                                className: Bt
                            }, r.createElement("input", Object.assign({
                                type: "radio",
                                name: e,
                                id: n
                            }, a, {
                                value: n,
                                checked: a.value === n,
                                onFocus: o,
                                onBlur: e => l(e)
                            })), r.createElement("div", {
                                className: At
                            }, " "), n)
                        }))
                    })), n && r.createElement("div", {
                        className: Ut
                    }, i))),
                    Vt = e => {
                        const {
                            formikTouched: t,
                            formikErrors: a,
                            inputs: n,
                            showHint: i,
                            trackErrorBlur: o,
                            validateBusinessEmail: l,
                            existingAccount: s,
                            userEmail: c,
                            existingEmailError: d,
                            step: u
                        } = e, {
                            fullName: m,
                            email: p,
                            temp_phone__c: f,
                            title: g,
                            company: v,
                            employees: E
                        } = n, C = (0, r.useRef)(null);
                        return (0, r.useEffect)((() => {
                            2 === u && C.current && C.current.focus()
                        }), [u]), r.createElement("div", {
                            className: `${Nt} ${It}`
                        }, 1 !== u || c ? r.createElement(r.Fragment, null, r.createElement(Be.D0, {
                            name: m.id,
                            type: "text",
                            error: a[m.id] && t[m.id],
                            errormessage: m.error,
                            validate: $e,
                            as: Oe,
                            label: m.label,
                            onFocus: () => {
                                Mt(m.id)
                            },
                            onBlur: e => {
                                o(m.id, $e, e.target.value)
                            },
                            autoFocus: !0,
                            inputRef: C
                        }), f && r.createElement(Be.D0, {
                            name: f.id,
                            type: "tel",
                            error: a[f.id] && t[f.id],
                            errormessage: f.error,
                            as: Oe,
                            label: f.label,
                            validate: f.required ? je : "",
                            maxLength: 30,
                            onFocus: () => {
                                Mt(f.id)
                            }
                        }), g && r.createElement(Be.D0, {
                            name: g.id,
                            type: "text",
                            error: a[g.id] && t[g.id],
                            errormessage: g.error,
                            validate: Ve,
                            as: Oe,
                            label: g.label,
                            onFocus: () => {
                                Mt(g.id)
                            },
                            onBlur: e => {
                                o(g.id, Ve, e.target.value)
                            }
                        }), v && r.createElement(Be.D0, {
                            name: v.id,
                            type: "text",
                            error: a[v.id] && t[v.id],
                            errormessage: v.error,
                            validate: Ve,
                            as: Oe,
                            label: v.label,
                            onFocus: () => {
                                Mt(v.id)
                            },
                            onBlur: e => {
                                o(v.id, Ve, e.target.value)
                            }
                        }), E && r.createElement(Rt, {
                            name: E.id,
                            options: E.options,
                            label: E.label,
                            error: a[E.id] && t[E.id],
                            errorMessage: E.error,
                            onFocus: () => {
                                Mt(E.id)
                            },
                            onBlur: e => {
                                o(E.id, ze, e.target.checked ? e.target.value : "")
                            }
                        })) : r.createElement(Be.D0, {
                            name: p.id,
                            type: "email",
                            error: a[p.id] && t[p.id],
                            errormessage: s ? d : p.error,
                            showHint: i,
                            hintmessage: p.placeHolder,
                            validate: He,
                            as: Oe,
                            label: p.label,
                            maxLength: 128,
                            onFocus: () => {
                                Mt(p.id)
                            },
                            onBlur: e => {
                                l(e.target.value), o(p.id, He, e.target.value)
                            },
                            autoFocus: !0
                        }))
                    },
                    $t = e => {
                        const {
                            formikTouched: t,
                            formikErrors: a,
                            inputs: n,
                            showHint: i,
                            trackErrorBlur: o,
                            validateBusinessEmail: l,
                            existingAccount: s,
                            userEmail: c,
                            existingEmailError: d
                        } = e, {
                            fullName: u,
                            email: m,
                            company: p
                        } = n;
                        return r.createElement("div", {
                            className: `${Nt} ${It}`
                        }, u && r.createElement(Be.D0, {
                            name: u.id,
                            type: "text",
                            error: a[u.id] && t[u.id],
                            errormessage: u.error,
                            validate: $e,
                            as: Oe,
                            label: u.label,
                            onFocus: () => {
                                Mt(u.id)
                            },
                            onBlur: e => {
                                o(u.id, $e, e.target.value)
                            },
                            autoFocus: !0
                        }), c ? r.createElement("div", null) : r.createElement(Be.D0, {
                            name: m.id,
                            type: "email",
                            error: a[m.id] && t[m.id],
                            errormessage: s ? d : m.error,
                            showHint: i,
                            hintmessage: m.placeHolder,
                            validate: He,
                            as: Oe,
                            label: m.label,
                            maxLength: 128,
                            onFocus: () => {
                                Mt(m.id)
                            },
                            onBlur: e => {
                                l(e.target.value), o(m.id, He, e.target.value)
                            }
                        }), p && r.createElement(Be.D0, {
                            name: p.id,
                            type: "text",
                            error: a[p.id] && t[p.id],
                            errormessage: p.error,
                            validate: Ve,
                            as: Oe,
                            label: p.label,
                            onFocus: () => {
                                Mt(p.id)
                            },
                            onBlur: e => {
                                o(p.id, Ve, e.target.value)
                            }
                        }))
                    },
                    Ht = e => {
                        var t, a;
                        const {
                            formikRef: n,
                            formikTouched: i,
                            formikErrors: o,
                            formikValues: l,
                            inputs: s,
                            showHint: c,
                            trackErrorBlur: d,
                            validateBusinessEmail: u,
                            existingAccount: m,
                            existingEmailError: p
                        } = e, {
                            fullName: f,
                            email: g,
                            temp_phone__c: v,
                            title: E,
                            company: C,
                            employees: h,
                            country: y,
                            zipCode: w,
                            usersmanaged: b,
                            states: k
                        } = s;
                        return (0, r.useEffect)((() => {
                            var e, t, a, r;
                            "US" === l.country ? (null === (e = n.current) || void 0 === e || e.setFieldTouched("states", !0), null === (t = n.current) || void 0 === t || t.setFieldValue("states", "AL")) : (null === (a = n.current) || void 0 === a || a.setFieldTouched("states", !1), null === (r = n.current) || void 0 === r || r.setFieldValue("states", ""))
                        }), [l.country]), r.createElement("div", {
                            className: `${Nt} ${Pt}`
                        }, r.createElement(Be.D0, {
                            name: f.id,
                            type: "text",
                            error: o[f.id] && i[f.id],
                            errormessage: f.error,
                            validate: $e,
                            as: Oe,
                            label: f.label,
                            onFocus: () => {
                                Mt(f.id)
                            },
                            onBlur: e => {
                                d(f.id, $e, e.target.value)
                            },
                            autoFocus: !0
                        }), r.createElement(Be.D0, {
                            name: g.id,
                            type: "email",
                            error: o[g.id] && i[g.id],
                            errormessage: m ? p : g.error,
                            showHint: c,
                            hintmessage: g.placeHolder,
                            validate: He,
                            as: Oe,
                            label: g.label,
                            maxLength: 128,
                            onFocus: () => {
                                Mt(g.id)
                            },
                            onBlur: e => {
                                u(e.target.value), d(g.id, He, e.target.value)
                            }
                        }), r.createElement(Be.D0, {
                            name: v.id,
                            type: "tel",
                            error: o[v.id] && i[v.id],
                            errormessage: v.error,
                            as: Oe,
                            label: v.label,
                            validate: v.required ? je : "",
                            maxLength: 30,
                            onFocus: () => {
                                Mt(v.id)
                            }
                        }), r.createElement(Be.D0, {
                            name: E.id,
                            type: "text",
                            error: o[E.id] && i[E.id],
                            errormessage: E.error,
                            validate: Ve,
                            as: Oe,
                            label: E.label,
                            onFocus: () => {
                                Mt(E.id)
                            },
                            onBlur: e => {
                                d(E.id, Ve, e.target.value)
                            }
                        }), r.createElement(Be.D0, {
                            name: C.id,
                            type: "text",
                            error: o[C.id] && i[C.id],
                            errormessage: C.error,
                            validate: Ve,
                            as: Oe,
                            label: C.label,
                            onFocus: () => {
                                Mt(C.id)
                            },
                            onBlur: e => {
                                d(C.id, Ve, e.target.value)
                            }
                        }), r.createElement(Be.D0, {
                            name: y.id,
                            as: Pe,
                            error: o[y.id] && i[y.id],
                            valid: l[y.id] && "" !== l[y.id],
                            errormessage: y.error,
                            validate: Ze,
                            required: !0,
                            label: y.label,
                            defaultValue: l[y.id],
                            onBlur: e => {
                                Mt(y.id), d(y.id, Ze, e.target.value)
                            }
                        }, r.createElement("option", {
                            value: "",
                            hidden: !0
                        }, y.placeHolder), null === (t = null == y ? void 0 : y.options) || void 0 === t ? void 0 : t.map(((e, t) => {
                            const a = Object.keys(e)[0];
                            return r.createElement("option", {
                                key: t.toString(),
                                value: e[a]
                            }, a)
                        }))), r.createElement(Be.D0, {
                            name: w.id,
                            type: "text",
                            error: o[w.id] && i[w.id],
                            errormessage: w.error,
                            validate: Ge,
                            as: Oe,
                            label: w.label,
                            onFocus: () => {
                                Mt(w.id)
                            },
                            onBlur: e => {
                                d(w.id, Ge, e.target.value)
                            },
                            max: 12,
                            min: 3
                        }), "US" === l.country && r.createElement(Be.D0, {
                            name: k.id,
                            as: Pe,
                            error: o[k.id] && i[k.id],
                            valid: l[k.id] && "" !== l[k.id],
                            errormessage: k.error,
                            validate: Ze,
                            required: !0,
                            label: k.label,
                            onBlur: e => {
                                Mt(k.id), d(k.id, Ze, e.target.value)
                            }
                        }, null === (a = null == k ? void 0 : k.options) || void 0 === a ? void 0 : a.map(((e, t) => {
                            const a = Object.keys(e)[0];
                            return r.createElement("option", {
                                key: t.toString(),
                                value: e[a],
                                selected: 0 === t
                            }, a)
                        }))), r.createElement(Rt, {
                            name: h.id,
                            options: h.options,
                            label: h.label,
                            error: o[h.id] && i[h.id],
                            errorMessage: h.error,
                            onFocus: () => {
                                Mt(h.id)
                            },
                            onBlur: e => {
                                d(h.id, ze, e.target.checked ? e.target.value : "")
                            }
                        }), r.createElement(Rt, {
                            name: b.id,
                            options: b.options,
                            label: b.label,
                            error: o[b.id] && i[b.id],
                            errorMessage: b.error,
                            onFocus: () => {
                                Mt(b.id)
                            },
                            onBlur: e => {
                                d(b.id, ze, e.target.checked ? e.target.value : "")
                            }
                        }))
                    },
                    jt = ({
                        isSubmitting: e,
                        errors: t,
                        isValidating: a,
                        successUrl: n,
                        formikRef: i,
                        submitCount: o,
                        trialLength: l,
                        setClosedBanner: s,
                        emailStep: c
                    }) => {
                        const d = () => {
                            Object.keys(t).map((e => {
                                var a;
                                const r = t[e];
                                null === (a = i.current) || void 0 === a || a.setFieldTouched(e, !0), O("event", "trial_page_error", {
                                    error_type: "form_field_submit_error",
                                    error_field: e,
                                    validation_failure_reason: r
                                })
                            }))
                        };
                        return (0, r.useEffect)((() => {
                            e && Object.keys(t).length > 0 && a && (c ? (O("event", "cta_click", {
                                cta_name: "Next step",
                                cta_position: "Trial Form"
                            }), s(!0), d()) : (O("event", "cta_submit_click", {
                                cta_name: `Start My Free ${l}-Day Trial`,
                                cta_url: `${window.location.origin}${window.location.pathname}${n}`,
                                cta_position: "Trial Form"
                            }), d(), s(!0)))
                        }), [o]), r.createElement(r.Fragment, null)
                    };
                var Zt = a(2838),
                    zt = a.n(Zt);
                const Gt = e => {
                    const t = new Date,
                        a = new Date(t);
                    a.setDate(a.getDate() + e);
                    const r = e => e.toISOString().slice(0, 19).replace("T", " ");
                    return {
                        trialStart: r(t),
                        trialEnd: r(a)
                    }
                };
                var Wt = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const Kt = e => Wt(void 0, [e], void 0, (function*({
                        event: e,
                        properties: t
                    }) {
                        try {
                            const a = yield fetch(`${(()=>{const e=window.location.hostname;let t="https://lastpass.com";return e.includes("review.lastpass.com")&&(t="https://rc.lastpass.dev"),(e.includes("dev-cm.")||e.includes("localhost")||e.includes("dev-cd."))&&(t="https://karol.dev.lastpass.com"),t})()}/lmiapi/segment/send-event?experiment_version=${(()=>{var e;const{isLoggedIn:t,trialType:a}=window.LPFormData,r=null===(e=window.TrialForm)||void 0===e?void 0:e.modalType;return r===g.UNIFIED?"Unified_Trial":r===g.CHEVY&&window.trialModifier?"2Step_Modal_Premium":r===g.CHEVY?"2Step_Modal":a===f.PREMIUM?"TPR_Phase5":a===f.FAMILIES?"TPR_Phase6":a===f.MSP?"TPR_MSP_phase1":a===f.TEAMS?"TPR_Phase4_teams":t?"TPR_Phase2":"TPR_Phase1"})()}`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                credentials: "include",
                                body: JSON.stringify({
                                    event: e,
                                    properties: t,
                                    platform: "web"
                                })
                            });
                            yield a.json();
                            return {
                                success: !0
                            }
                        } catch (e) {
                            return {
                                success: !1
                            }
                        }
                    })),
                    Yt = e => Wt(void 0, [e], void 0, (function*({
                        data: e,
                        userKey: t
                    }) {
                        try {
                            const a = d(),
                                r = u(),
                                n = Gt(e.trialLength);
                            let i = new URLSearchParams(window.location.search).has("max");
                            const o = Object.assign(Object.assign({
                                    quantity: 1,
                                    firstName: e.firstName,
                                    lastName: e.lastName,
                                    email: e.email,
                                    country: s("cciso") || "",
                                    optin: e.contactPermission,
                                    phone: e.phoneNumber,
                                    company: e.companyName,
                                    employees: e.companySize,
                                    language: e.language,
                                    title: e.jobTitle,
                                    ipAddress: e.clientIp,
                                    planType: e.flowType,
                                    trialStart: n.trialStart,
                                    trialEnd: n.trialEnd,
                                    mkto_trk: window._mkto_trk ? window._mkto_trk : "",
                                    chop_id: s("chop_id") || "",
                                    gclid: c(),
                                    promoCode: "",
                                    accountKey: "",
                                    universalID: "",
                                    userKey: t,
                                    planKey: i ? "LPBusinessSSOMFA" : e.trialSku,
                                    referringURL: window.location.href,
                                    programName: e.programName,
                                    programID: e.programID
                                }, a), r ? {
                                    experiment: u()
                                } : {}),
                                l = yield fetch("/lpapi/form/SendTrialBoomi", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(o)
                                });
                            return yield l.json(), {
                                success: !0
                            }
                        } catch (e) {
                            return {
                                success: !1
                            }
                        }
                    })),
                    qt = e => Wt(void 0, [e], void 0, (function*({
                        email: e,
                        contactPermission: t,
                        trialSku: a,
                        programName: r,
                        programID: n
                    }) {
                        try {
                            const i = d(),
                                o = u(),
                                l = Object.assign(Object.assign({
                                    Email: e,
                                    country: s("cciso") || "",
                                    optin: t,
                                    mkto_trk: window._mkto_trk ? window._mkto_trk : "",
                                    chop_id: s("chop_id") || "",
                                    gclid: c(),
                                    promoCode: "",
                                    accountKey: "",
                                    universalID: "",
                                    productInterest: a,
                                    referringURL: window.location.href,
                                    programName: r,
                                    programID: n
                                }, i), o ? {
                                    experiment: u()
                                } : {}),
                                m = yield fetch("/lpapi/form/SendTrialInterest", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(l)
                                });
                            return yield m.json(), {
                                success: !0
                            }
                        } catch (e) {
                            return console.warn("postTrialInterestBoomiService error:", e), {
                                success: !1
                            }
                        }
                    })),
                    Jt = () => {
                        const e = ["AU", "CA", "IN", "SG", "UK", "US", "EU"],
                            t = window.location.href,
                            a = new URL(t),
                            r = new URLSearchParams(a.search).get("data_residency") || null;
                        if (null === r) return null;
                        if (!r) return null;
                        const n = "string" == typeof r ? r.toUpperCase() : "",
                            i = e.findIndex((e => e === n));
                        return e[i] || null
                    };
                var Qt = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const Xt = e => Qt(void 0, void 0, void 0, (function*() {
                    var t, a;
                    try {
                        const {
                            formType: t
                        } = window.LPFormData, a = yield fetch("/lpapi/trial/EmailCheck", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: e,
                                sku: p.BUSINESSTRIAL,
                                flowType: E(t)
                            })
                        });
                        return yield a.json()
                    } catch (e) {
                        return {
                            success: !1,
                            code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0
                        }
                    }
                }));

                function ea() {
                    return Date.now()
                }

                function ta(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }

                function aa() {
                    return `${function(){let e=window.gtmBrowserId;return e||(e=`${ea()}${ta(1e5,999999)}`,window.gtmBrowserId=e),e}()}_${function(){let e=window.gtmPageLoadId;return e||(e=`${ea()}${ta(1e5,999999)}`,window.gtmPageLoadId=e),e}()}_${function(){var e,t,a;const r=null!==(a=null===(t=null===(e=window.dataLayer)||void 0===e?void 0:e.find((e=>e["gtm.uniqueEventId"])))||void 0===t?void 0:t["gtm.uniqueEventId"])&&void 0!==a?a:0;return r>=0?String(r):"00"}()}`
                }
                var ra = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const na = e => ra(void 0, void 0, void 0, (function*() {
                    const {
                        contentId: t,
                        firstName: a,
                        lastName: r,
                        email: n,
                        phone: i
                    } = e;
                    try {
                        const [e, o, l, s] = yield Promise.all([pt(a, "name"), pt(r, "name"), pt(n, "email"), pt(i, "phone")]), c = aa(), d = Object.assign(Object.assign(Object.assign(Object.assign({
                            content_ids: [t],
                            event_id: c,
                            value: "0"
                        }, "string" == typeof e ? {
                            first_name: e
                        } : {}), "string" == typeof o ? {
                            last_name: o
                        } : {}), "string" == typeof l ? {
                            email_address: l
                        } : {}), "string" == typeof s ? {
                            phone_number: s
                        } : {});
                        if (O("event", "start_trial", d), window.dataLayer_standard) {
                            const e = Object.assign({
                                event: "start_trial",
                                event_id: c
                            }, d);
                            window.dataLayer_standard.push(e)
                        }
                    } catch (e) {
                        console.warn("fb_CAPI event issue"), console.warn(e.message)
                    }
                }));
                var ia = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const oa = e => ia(void 0, [e], void 0, (function*({
                    data: e,
                    existingUserEmail: t,
                    values: a,
                    marketingOptOutSeen: r,
                    contactPermission: n
                }) {
                    var i, o, l, c;
                    const {
                        formType: d,
                        trialLength: u,
                        segExpQuery: m,
                        segExpValue: g,
                        isLoggedIn: y,
                        trialType: b
                    } = window.LPFormData, k = v(d), _ = b === f.BUSINESS && k !== p.PURCHASE && !t;
                    try {
                        O("event", "cta_submit_click", {
                            cta_name: `Start My Free ${u}-Day Trial`,
                            cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                            cta_position: "Trial Form"
                        }), yield Kt({
                            event: `${C(!0)}_trial_form_click`,
                            properties: Object.assign({
                                reason: h()
                            }, _ && {
                                journey_step: "Step 2"
                            })
                        });
                        const f = t || zt().sanitize(a.email.toString().toLowerCase());
                        let v = a.fullName.toString(),
                            [b, ...x] = v.split(" "),
                            L = x.join(" ");
                        const T = {
                            email: f,
                            firstName: zt().sanitize(b),
                            lastName: zt().sanitize(L),
                            jobTitle: a.title && zt().sanitize(a.title.toString()),
                            companyName: zt().sanitize(a.company.toString()),
                            companySize: a.employees && a.employees.toString(),
                            phoneNumber: a.temp_phone__c && zt().sanitize(a.temp_phone__c.toString()),
                            trialSku: e.sku,
                            marketingOptOutShown: r,
                            contactPermission: n,
                            clientIp: zt().sanitize(window.akCIp),
                            language: zt().sanitize(s("lang")) || "en_US",
                            trialLength: u || 14,
                            dataResidency: Jt(),
                            flowType: E(d),
                            formType: d,
                            affiliateClickId: zt().sanitize(s("clickid")),
                            segExpQuery: m,
                            segExpValue: g
                        };
                        if (!t) {
                            const e = yield Xt(f);
                            if (!e.success) return 2006 === e.code && S(T), {
                                success: !1,
                                code: e.code
                            }
                        }
                        const N = yield w(T);
                        return N.success ? (O("event", "trial_success_business", {}), na({
                            contentId: "lastpass_business",
                            firstName: T.firstName,
                            lastName: T.lastName,
                            email: T.email,
                            phone: T.phoneNumber
                        }), yield gt(T.email), k !== p.PURCHASE ? (T.programName = null === (o = null === (i = e.inputs) || void 0 === i ? void 0 : i.programName) || void 0 === o ? void 0 : o.defaultValue, T.programID = null === (c = null === (l = e.inputs) || void 0 === l ? void 0 : l.programID) || void 0 === c ? void 0 : c.defaultValue, yield Yt({
                            data: T,
                            userKey: N.successToken
                        }), window.location.href = y ? e.successLoggedInUrl : `${e.successUrl}?email=${T.email}`) : window.location.href = e.successUrl, {
                            success: !0
                        }) : (2006 === N.code && S(T), {
                            success: !1,
                            code: N.code
                        })
                    } catch (e) {
                        return {
                            success: !1,
                            code: "500",
                            errorMessage: `Trial submit error: ${e.message}`
                        }
                    }
                }));
                var la = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const sa = e => la(void 0, [e], void 0, (function*({
                        data: e
                    }) {
                        var t, a, r, n;
                        const {
                            formType: i,
                            trialLength: o,
                            segExpQuery: l,
                            segExpValue: m
                        } = window.LPFormData, f = v(i);
                        try {
                            O("event", "cta_submit_click", {
                                cta_name: `Start My Free ${o}-Day Trial`,
                                cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                                cta_position: "Trial Form"
                            }), yield Kt({
                                event: `${C(!0)}_trial_form_click`,
                                properties: {
                                    reason: h()
                                }
                            });
                            const g = {
                                    trialSku: e.sku,
                                    clientIp: zt().sanitize(window.akCIp),
                                    flowType: f,
                                    formType: i,
                                    segExpQuery: l,
                                    segExpValue: m
                                },
                                v = yield w(g);
                            if (!v.success) return {
                                success: !1,
                                code: v.code
                            };
                            O("event", `trial_success_${C()}`, {}), f !== p.PURCHASE ? (g.programName = null === (a = null === (t = e.inputs) || void 0 === t ? void 0 : t.programName) || void 0 === a ? void 0 : a.defaultValue, g.programID = null === (n = null === (r = e.inputs) || void 0 === r ? void 0 : r.programID) || void 0 === n ? void 0 : n.defaultValue, yield(e => Wt(void 0, [e], void 0, (function*({
                                data: e,
                                userKey: t
                            }) {
                                try {
                                    const a = d(),
                                        r = u(),
                                        n = Object.assign(Object.assign({
                                            quantity: 1,
                                            country: s("cciso") || "",
                                            ipAddress: e.clientIp,
                                            planType: e.flowType,
                                            mkto_trk: window._mkto_trk ? window._mkto_trk : "",
                                            chop_id: s("chop_id") || "",
                                            gclid: c(),
                                            promoCode: "",
                                            accountKey: "",
                                            universalID: "",
                                            userKey: t,
                                            planKey: e.trialSku,
                                            referringURL: window.location.href,
                                            programName: e.programName,
                                            programID: e.programID
                                        }, a), r ? {
                                            experiment: u()
                                        } : {}),
                                        i = yield fetch("/lpapi/form/SendTrialBoomi", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(n)
                                        });
                                    return yield i.json(), {
                                        success: !0
                                    }
                                } catch (e) {
                                    return {
                                        success: !1
                                    }
                                }
                            })))({
                                data: g,
                                userKey: v.successToken
                            }), window.location.href = e.successLoggedInUrl) : window.location.href = e.successUrl
                        } catch (e) {
                            return {
                                success: !1,
                                code: "500",
                                errorMessage: `Company submit error: ${e.message}`
                            }
                        }
                    })),
                    ca = (e, t, a) => {
                        const r = e.errors.find((e => e.code === t.toString()));
                        return r ? a ? r.message.replace("[email]", a) : r.message : null
                    };
                var da = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const ua = e => da(void 0, [e], void 0, (function*({
                        data: e,
                        values: t,
                        marketingOptOutSeen: a,
                        contactPermission: r
                    }) {
                        var n, i, o, m;
                        const {
                            formType: p,
                            trialLength: f,
                            segExpQuery: g,
                            segExpValue: E
                        } = window.LPFormData, C = v(p);
                        try {
                            O("event", "cta_submit_click", {
                                cta_name: `Start My Free ${f}-Day Trial`,
                                cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                                cta_position: "Trial Form"
                            }), yield Kt({
                                event: "msp_trial_form_clicked",
                                properties: {
                                    reason: h()
                                }
                            });
                            const v = t.email.toString().toLowerCase();
                            let w = t.fullName.toString(),
                                [b, ...k] = w.split(" "),
                                S = k.join(" ");
                            const x = {
                                    email: zt().sanitize(v),
                                    firstName: zt().sanitize(b),
                                    lastName: zt().sanitize(S),
                                    jobTitle: t.title && zt().sanitize(t.title.toString()),
                                    companyName: zt().sanitize(t.company.toString()),
                                    companySize: t.employees && t.employees.toString(),
                                    phoneNumber: t.temp_phone__c && zt().sanitize(t.temp_phone__c.toString()),
                                    trialSku: e.sku,
                                    marketingOptOutShown: a,
                                    contactPermission: r,
                                    clientIp: zt().sanitize(window.akCIp),
                                    language: zt().sanitize(s("lang")) || "en_US",
                                    trialLength: f || 30,
                                    dataResidency: Jt(),
                                    flowType: C,
                                    formType: p,
                                    affiliateClickId: zt().sanitize(s("clickid")),
                                    numberOfManagedUsers: t.usersmanaged.toString(),
                                    country: t.country.toString(),
                                    zipCode: t.zipCode.toString(),
                                    state: t.states.toString(),
                                    segExpQuery: g,
                                    segExpValue: E
                                },
                                L = yield _({
                                    email: v,
                                    trialLength: f,
                                    trialSku: e.sku
                                });
                            if (!L.success) return {
                                success: !1,
                                code: L.code
                            };
                            const T = yield(e => y(void 0, void 0, void 0, (function*() {
                                var t, a;
                                try {
                                    return (yield l.A.post("/lpapi/trial/SubmitMspData", e, {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })).data
                                } catch (e) {
                                    return {
                                        success: !1,
                                        code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0
                                    }
                                }
                            })))(x);
                            return T.success ? (O("event", "msp_success_business", {}), na({
                                contentId: "lastpass_msp",
                                firstName: x.firstName,
                                lastName: x.lastName,
                                email: x.email,
                                phone: x.phoneNumber
                            }), yield gt(x.email), x.programName = null === (i = null === (n = e.inputs) || void 0 === n ? void 0 : n.programName) || void 0 === i ? void 0 : i.defaultValue, x.programID = null === (m = null === (o = e.inputs) || void 0 === o ? void 0 : o.programID) || void 0 === m ? void 0 : m.defaultValue, yield(e => Wt(void 0, [e], void 0, (function*({
                                data: e,
                                userKey: t
                            }) {
                                try {
                                    const a = d(),
                                        r = u(),
                                        n = Gt(e.trialLength),
                                        i = Object.assign(Object.assign({
                                            quantity: 1,
                                            firstName: e.firstName,
                                            lastName: e.lastName,
                                            email: e.email,
                                            optin: e.contactPermission,
                                            phone: e.phoneNumber,
                                            company: e.companyName,
                                            employees: e.companySize,
                                            language: e.language,
                                            title: e.jobTitle,
                                            ipAddress: e.clientIp,
                                            planType: e.flowType,
                                            trialStart: n.trialStart,
                                            trialEnd: n.trialEnd,
                                            mkto_trk: window._mkto_trk ? window._mkto_trk : "",
                                            chop_id: s("chop_id") || "",
                                            gclid: c(),
                                            promoCode: "",
                                            accountKey: "",
                                            universalID: "",
                                            userKey: t,
                                            planKey: e.trialSku,
                                            referringURL: window.location.href,
                                            zipCode: e.zipCode,
                                            country: e.country,
                                            state: e.state,
                                            managedUsers: e.numberOfManagedUsers,
                                            programName: e.programName,
                                            programID: e.programID
                                        }, a), r ? {
                                            experiment: u()
                                        } : {}),
                                        o = yield fetch("/lpapi/form/SendMSPTrialBoomi", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(i)
                                        });
                                    return yield o.json(), {
                                        success: !0
                                    }
                                } catch (e) {
                                    return {
                                        success: !1
                                    }
                                }
                            })))({
                                data: x,
                                userKey: T.successToken
                            }), window.location.href = `${e.successUrl}?email=${x.email}`, {
                                success: !0
                            }) : {
                                success: !1,
                                code: T.code
                            }
                        } catch (e) {
                            return {
                                success: !1,
                                code: "500",
                                errorMessage: `MSP submit error: ${e.message}`
                            }
                        }
                    })),
                    ma = e => {
                        const {
                            formikTouched: t,
                            formikErrors: a,
                            inputs: n,
                            showHint: i,
                            trackErrorBlur: o,
                            validateBusinessEmail: l,
                            existingAccount: s,
                            userEmail: c,
                            existingEmailError: d,
                            mistypedEmailError: u
                        } = e, {
                            email: m
                        } = n, {
                            trialType: p
                        } = window.LPFormData;
                        return r.createElement("div", {
                            className: `${Nt} ${It}`
                        }, c ? r.createElement("div", null) : r.createElement(Be.D0, {
                            name: m.id,
                            type: "email",
                            error: a[m.id] && t[m.id],
                            errormessage: u ? `${m.placeHolder} ${u}` : s ? d : m.error,
                            showHint: i,
                            hintmessage: m.placeHolder,
                            validate: He,
                            as: Oe,
                            label: m.label,
                            maxLength: 128,
                            onFocus: () => {
                                Mt(m.id)
                            },
                            onBlur: e => {
                                p !== f.PREMIUM && p !== f.FAMILIES ? l(e.target.value) : He(e.target.value), o(m.id, He, e.target.value)
                            },
                            autoFocus: !0
                        }))
                    };
                var pa = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const fa = e => pa(void 0, [e], void 0, (function*({
                    data: e,
                    existingUserEmail: t,
                    values: a,
                    marketingOptOutSeen: r,
                    contactPermission: n
                }) {
                    var i, o, c, d;
                    const {
                        formType: u,
                        trialLength: m,
                        segExpQuery: f,
                        segExpValue: g,
                        isLoggedIn: E
                    } = window.LPFormData, C = v(u);
                    try {
                        O("event", "cta_submit_click", {
                            cta_name: `Start My Free ${m}-Day Trial`,
                            cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                            cta_position: "Trial Form"
                        }), yield Kt({
                            event: "teams_trial_form_click",
                            properties: {
                                reason: h()
                            }
                        });
                        const v = t || zt().sanitize(a.email.toString().toLowerCase()),
                            w = {
                                email: v,
                                firstName: "",
                                lastName: "",
                                jobTitle: "",
                                companyName: "",
                                companySize: "",
                                phoneNumber: "",
                                trialSku: e.sku,
                                marketingOptOutShown: r,
                                contactPermission: n,
                                clientIp: zt().sanitize(window.akCIp),
                                language: zt().sanitize(s("lang")) || "en_US",
                                trialLength: m || 14,
                                dataResidency: Jt(),
                                flowType: C,
                                formType: u,
                                affiliateClickId: zt().sanitize(s("clickid")),
                                segExpQuery: f,
                                segExpValue: g
                            };
                        if (!t) {
                            const t = yield _({
                                email: v,
                                trialSku: e.sku,
                                trialLength: m
                            });
                            if (!t.success) return {
                                success: !1,
                                code: t.code
                            }
                        }
                        const b = yield(e => y(void 0, void 0, void 0, (function*() {
                            var t, a;
                            try {
                                return (yield l.A.post("/lpapi/trial/SubmitTeamsFormData", e, {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })).data
                            } catch (e) {
                                return {
                                    success: !1,
                                    code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0
                                }
                            }
                        })))(w);
                        return b.success ? (O("event", "trial_success_teams", {}), na({
                            contentId: "lastpass_teams",
                            email: w.email
                        }), yield gt(w.email), C !== p.PURCHASE ? (w.programName = null === (o = null === (i = e.inputs) || void 0 === i ? void 0 : i.programName) || void 0 === o ? void 0 : o.defaultValue, w.programID = null === (d = null === (c = e.inputs) || void 0 === c ? void 0 : c.programID) || void 0 === d ? void 0 : d.defaultValue, yield Yt({
                            data: w,
                            userKey: b.successToken
                        }), window.location.href = E ? e.successLoggedInUrl : `${e.successUrl}?email=${w.email}`) : window.location.href = e.successUrl, {
                            success: !0
                        }) : {
                            success: !1,
                            code: b.code
                        }
                    } catch (e) {
                        return {
                            success: !1,
                            code: "500",
                            errorMessage: `Trial submit error: ${e.message}`
                        }
                    }
                }));
                var ga = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const va = e => ga(void 0, [e], void 0, (function*({
                    data: e,
                    values: t,
                    marketingOptOutSeen: a,
                    contactPermission: r
                }) {
                    var n, i, o, l;
                    const {
                        formType: c,
                        trialLength: d,
                        segExpQuery: u,
                        segExpValue: m
                    } = window.LPFormData, p = v(c);
                    try {
                        O("event", "cta_submit_click", {
                            cta_name: `Start My Free ${d}-Day Trial`,
                            cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                            cta_position: "Trial Form"
                        }), yield Kt({
                            event: "premium_trial_form_clicked",
                            properties: {
                                reason: h()
                            }
                        });
                        const f = zt().sanitize(t.email.toString().toLowerCase()),
                            g = {
                                email: f,
                                firstName: "",
                                lastName: "",
                                jobTitle: "",
                                companyName: "",
                                companySize: "",
                                phoneNumber: "",
                                trialSku: e.sku,
                                marketingOptOutShown: a,
                                contactPermission: r,
                                clientIp: zt().sanitize(window.akCIp),
                                language: zt().sanitize(s("lang")) || "en_US",
                                trialLength: d || 30,
                                dataResidency: Jt(),
                                flowType: p,
                                formType: c,
                                affiliateClickId: zt().sanitize(s("clickid")),
                                segExpQuery: u,
                                segExpValue: m
                            },
                            v = yield _({
                                email: f,
                                trialLength: d,
                                trialSku: e.sku
                            });
                        if (!v.success) return {
                            success: !1,
                            code: v.code,
                            correctedEmail: v.correctedEmail
                        };
                        O("event", "trial_success_premium", {}), na({
                            contentId: "lastpass_premium",
                            email: g.email
                        }), yield gt(g.email), yield qt({
                            email: f,
                            contactPermission: r,
                            trialSku: e.sku,
                            programName: null === (i = null === (n = e.inputs) || void 0 === n ? void 0 : n.programName) || void 0 === i ? void 0 : i.defaultValue,
                            programID: null === (l = null === (o = e.inputs) || void 0 === o ? void 0 : o.programID) || void 0 === l ? void 0 : l.defaultValue
                        }), yield b(g, e.successUrl)
                    } catch (e) {
                        return {
                            success: !1,
                            code: "500",
                            errorMessage: `Premium submit error: ${e.message}`
                        }
                    }
                }));
                var Ea = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const Ca = ({
                    formSubmitting: e,
                    data: t,
                    modalContent: a,
                    handleCallback: n,
                    goToNextStep: i,
                    handleBackClick: o,
                    step: l,
                    is2Step: s
                }) => {
                    var c;
                    const d = null === (c = window.TrialForm) || void 0 === c ? void 0 : c.modalType,
                        {
                            trialType: u
                        } = window.LPFormData,
                        m = d && a ? u === f.BUSINESS ? 1 === l ? "MODAL_STEP_1" : "MODAL_STEP_2" : "MODAL_SINGLE" : s ? 1 === l ? "TWO_STEP_1" : "TWO_STEP_2" : "SINGLE",
                        p = t => e ? r.createElement(pe, {
                            colorBottom: "#751a17",
                            colorTop: "#fff"
                        }) : t;
                    return r.createElement(r.Fragment, null, (() => {
                        switch (m) {
                            case "MODAL_STEP_1":
                                return r.createElement("div", {
                                    className: St
                                }, r.createElement(R, {
                                    type: "button",
                                    link: !0,
                                    onClick: () => n(0)
                                }, a.backButton), r.createElement(R, {
                                    type: "button",
                                    id: "EMAIL_SUBMIT",
                                    disabled: e,
                                    onClick: i
                                }, p(a.sendButton)));
                            case "MODAL_STEP_2":
                                return r.createElement("div", {
                                    className: St
                                }, r.createElement(R, {
                                    type: "button",
                                    link: !0,
                                    onClick: o
                                }, a.backButton), r.createElement(R, {
                                    id: "FORM_SUBMIT",
                                    type: "submit",
                                    disabled: e
                                }, p(t.sendButton2)));
                            case "MODAL_SINGLE":
                                return r.createElement("div", {
                                    className: St
                                }, r.createElement(R, {
                                    type: "button",
                                    link: !0,
                                    onClick: () => n(0)
                                }, a.backButton), r.createElement(R, {
                                    id: "FORM_SUBMIT",
                                    type: "submit",
                                    disabled: e
                                }, p(t.sendButton)));
                            case "TWO_STEP_1":
                                return r.createElement(R, {
                                    type: "button",
                                    id: "EMAIL_SUBMIT",
                                    disabled: e,
                                    onClick: i
                                }, p(t.sendButton));
                            case "TWO_STEP_2":
                                return r.createElement("div", {
                                    className: St
                                }, r.createElement(R, {
                                    type: "button",
                                    link: !0,
                                    onClick: o
                                }, t.backButton), r.createElement(R, {
                                    id: "FORM_SUBMIT",
                                    type: "submit",
                                    disabled: e
                                }, p(t.sendButton2)));
                            default:
                                return r.createElement(R, {
                                    id: "FORM_SUBMIT",
                                    type: "submit",
                                    disabled: e
                                }, p(t.sendButton))
                        }
                    })())
                };
                var ha = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const ya = e => {
                        var t;
                        const {
                            initialValues: a,
                            directbuy: n,
                            formError: i,
                            formErrorCode: o,
                            data: l,
                            trialAllowed: c,
                            trackError: d,
                            setErrorMessage: u,
                            setErrorCode: m,
                            existingUserEmail: p,
                            is2Step: g,
                            handleCallback: E,
                            modalContent: y
                        } = e, {
                            trialLength: w,
                            isCompany: k,
                            trialType: S
                        } = window.LPFormData, x = null === (t = window.TrialForm) || void 0 === t ? void 0 : t.modalType, [L, T] = (0, r.useState)(!1), [N, I] = (0, r.useState)(!1), [P, M] = (0, r.useState)(!0), [D, F] = (0, r.useState)(!1), [B, A] = (0, r.useState)(!1), [U, R] = (0, r.useState)(!1), [V, $] = (0, r.useState)(!1), [H, j] = (0, r.useState)(""), [Z, G] = (0, r.useState)(1), W = (0, r.useRef)(null);
                        (0, r.useEffect)((() => {
                            var e;
                            (V || H) && (null === (e = W.current) || void 0 === e || e.setFieldError("email", "error"))
                        }), [V, H]);
                        const K = e => {
                                e !== D && F(e)
                            },
                            Y = (e, t, a) => {
                                var r, n;
                                const i = a ? a.trim() : a;
                                null === (r = W.current) || void 0 === r || r.setFieldValue(e, i), null === (n = W.current) || void 0 === n || n.setFieldError(e, void 0);
                                const o = t(i);
                                if (setTimeout((() => {
                                        var t, a;
                                        null === (t = W.current) || void 0 === t || t.setFieldTouched(e, !0), o ? (null === (a = W.current) || void 0 === a || a.setFieldError(e, "error"), O("event", "trial_page_error", {
                                            error_type: "form_field_error",
                                            error_field: e,
                                            validation_failure_reason: o
                                        })) : O("event", "trial_field_completion", {
                                            form_field: e
                                        })
                                    }), 300), o) return !1
                            },
                            J = e => ha(void 0, void 0, void 0, (function*() {
                                var t, a;
                                $(!1), null === (t = W.current) || void 0 === t || t.setFieldTouched("email", !0), T(!1);
                                if (He(e)) return null === (a = W.current) || void 0 === a || a.setFieldError("email", "error"), !1;
                                return (yield Ye(e.toLowerCase())) || T(!0), !1
                            })),
                            Q = e => {
                                "SPAN" === e.target.tagName && (A(!0), O("event", "cta_click", {
                                    cta_name: "Unsubscribe",
                                    cta_position: "Trial Form"
                                }), R(!U))
                            },
                            X = e => ha(void 0, void 0, void 0, (function*() {
                                try {
                                    let t;
                                    I(!0), F(!1), u(null), m(null), k ? t = yield sa({
                                        data: l
                                    }): S === f.MSP ? t = yield ua({
                                        data: l,
                                        values: e,
                                        marketingOptOutSeen: B,
                                        contactPermission: P
                                    }): S === f.TEAMS ? t = yield fa({
                                        data: l,
                                        existingUserEmail: p,
                                        values: e,
                                        marketingOptOutSeen: B,
                                        contactPermission: P
                                    }): S === f.PREMIUM ? (t = yield va({
                                        data: l,
                                        values: e,
                                        marketingOptOutSeen: B,
                                        contactPermission: P
                                    }), t && 1002 === t.code && t.correctedEmail && j(t.correctedEmail)) : S === f.FAMILIES ? (t = yield(e => Ea(void 0, [e], void 0, (function*({
                                        data: e,
                                        existingUserEmail: t,
                                        values: a,
                                        marketingOptOutSeen: r,
                                        contactPermission: n
                                    }) {
                                        var i, o, l, c;
                                        const {
                                            formType: d,
                                            trialLength: u,
                                            segExpQuery: m,
                                            segExpValue: p
                                        } = window.LPFormData, f = v(d);
                                        try {
                                            O("event", "cta_submit_click", {
                                                cta_name: `Start My Free ${u}-Day Trial`,
                                                cta_url: `${window.location.origin}${window.location.pathname}${e.successUrl}`,
                                                cta_position: "Trial Form"
                                            }), yield Kt({
                                                event: "families_trial_form_clicked",
                                                properties: {
                                                    reason: h(),
                                                    source: "Sitecore"
                                                }
                                            });
                                            const g = t || zt().sanitize(a.email.toString().toLowerCase()),
                                                v = {
                                                    email: g,
                                                    firstName: "",
                                                    lastName: "",
                                                    jobTitle: "",
                                                    companyName: "",
                                                    companySize: "",
                                                    phoneNumber: "",
                                                    trialSku: e.sku,
                                                    marketingOptOutShown: r,
                                                    contactPermission: n,
                                                    clientIp: zt().sanitize(window.akCIp),
                                                    language: zt().sanitize(s("lang")) || "en_US",
                                                    trialLength: u || 30,
                                                    dataResidency: Jt(),
                                                    flowType: f,
                                                    formType: d,
                                                    affiliateClickId: zt().sanitize(s("clickid")),
                                                    segExpQuery: m,
                                                    segExpValue: p
                                                },
                                                E = yield _({
                                                    email: g,
                                                    trialLength: u,
                                                    trialSku: e.sku,
                                                    flowType: f
                                                });
                                            if (!E.success) return {
                                                success: !1,
                                                code: E.code,
                                                correctedEmail: E.correctedEmail
                                            };
                                            O("event", "trial_success_families", {}), na({
                                                contentId: "lastpass_families",
                                                email: v.email
                                            }), yield gt(v.email), yield qt({
                                                email: g,
                                                contactPermission: n,
                                                trialSku: e.sku,
                                                programName: null === (o = null === (i = e.inputs) || void 0 === i ? void 0 : i.programName) || void 0 === o ? void 0 : o.defaultValue,
                                                programID: null === (c = null === (l = e.inputs) || void 0 === l ? void 0 : l.programID) || void 0 === c ? void 0 : c.defaultValue
                                            }), yield b(v, e.successUrl)
                                        } catch (e) {
                                            return {
                                                success: !1,
                                                code: "500",
                                                errorMessage: `Families submit error: ${e.message}`
                                            }
                                        }
                                    })))({
                                        data: l,
                                        existingUserEmail: p,
                                        values: e,
                                        marketingOptOutSeen: B,
                                        contactPermission: P
                                    }), t && 1002 === t.code && t.correctedEmail && j(t.correctedEmail)) : t = yield oa({
                                        data: l,
                                        existingUserEmail: p,
                                        values: e,
                                        marketingOptOutSeen: B,
                                        contactPermission: P
                                    }), t && !t.success && (2006 === t.code && $(!0), u(ca(l, t.code, p) || l.globalError), d({
                                        code: t.code,
                                        message: t.errorMessage || ca(l, t.code) || l.globalError,
                                        step: Z
                                    }), I(!1))
                                } catch (e) {
                                    u(l.globalError), d({
                                        code: "500",
                                        message: `Trial submission: ${e.message}`,
                                        runtime: !0
                                    }), I(!1)
                                }
                            })),
                            ee = () => ha(void 0, void 0, void 0, (function*() {
                                var e, t, a, r, n, i;
                                O("event", "cta_click", {
                                    cta_name: "Next step",
                                    cta_position: "Trial Form"
                                }), I(!0), u(null), F(!1);
                                try {
                                    if (!(null === (t = null === (e = W.current) || void 0 === e ? void 0 : e.values) || void 0 === t ? void 0 : t.email)) return;
                                    yield Kt({
                                        event: `${C(!0)}_trial_form_click`,
                                        properties: {
                                            reason: h(),
                                            journey_step: "Step 1"
                                        }
                                    });
                                    const o = zt().sanitize(W.current.values.email.toString()),
                                        s = yield Xt(o);
                                    s.success ? ($(!1), G(2), qt({
                                        email: o,
                                        contactPermission: P,
                                        trialSku: l.sku,
                                        programName: null === (r = null === (a = l.inputs) || void 0 === a ? void 0 : a.programName) || void 0 === r ? void 0 : r.defaultValue,
                                        programID: null === (i = null === (n = l.inputs) || void 0 === n ? void 0 : n.programID) || void 0 === i ? void 0 : i.defaultValue
                                    }), yield Kt({
                                        event: `${C(!0)}_trial_form_shown`,
                                        properties: {
                                            reason: h(),
                                            journey_step: "Step 2"
                                        }
                                    })) : (2006 === s.code && $(!0), u(ca(l, s.code) || l.globalError), d({
                                        code: s.code,
                                        message: s.errorMessage || ca(l, s.code) || l.globalError
                                    }))
                                } catch (e) {
                                    u(l.globalError), d({
                                        code: "500",
                                        message: `Trial submission: ${e.message}`,
                                        runtime: !0
                                    })
                                } finally {
                                    I(!1)
                                }
                            })),
                            te = () => ha(void 0, void 0, void 0, (function*() {
                                yield Kt({
                                    event: `${C(!0)}_trial_form_shown`,
                                    properties: {
                                        reason: h(),
                                        journey_step: "Step 1"
                                    }
                                }), G(1)
                            }));
                        return (0, r.useEffect)((() => {
                            E && E(Z)
                        }), [Z]), r.createElement(r.Fragment, null, r.createElement("h2", {
                            className: yt
                        }, 1 === Z ? l.title : l.title2), r.createElement(oe, {
                            closedBanner: null !== i || D,
                            setClosedBanner: K,
                            type: "error"
                        }, r.createElement(z, {
                            htmlString: i || l.globalError,
                            errorCode: o
                        })), k && c && r.createElement("p", {
                            className: _t
                        }, r.createElement(z, {
                            htmlString: l.useDifferentEmail.replace("{email}", `<b>${p}</b>`)
                        })), 1 !== Z || x ? r.createElement(r.Fragment, null) : p ? r.createElement("div", {
                            className: wt
                        }, r.createElement("div", {
                            className: kt
                        }, r.createElement("div", {
                            className: bt
                        }, r.createElement(q, null)), " ", p), r.createElement("a", {
                            href: l.logoutLink
                        }, l.logoutText)) : r.createElement("div", {
                            className: ht
                        }, r.createElement(z, {
                            htmlString: l.footerText
                        })), c && r.createElement(Be.l1, {
                            validateOnMount: !0,
                            validateOnChange: !0,
                            validateOnBlur: !0,
                            innerRef: W,
                            initialValues: a,
                            onSubmit: e => ha(void 0, void 0, void 0, (function*() {
                                yield X(e)
                            }))
                        }, (({
                            errors: e,
                            touched: t,
                            values: a,
                            isSubmitting: i,
                            isValidating: o,
                            isValid: s,
                            submitCount: d
                        }) => r.createElement(Be.lV, null, r.createElement(jt, {
                            submitCount: d,
                            isValidating: o,
                            isValid: s,
                            errors: e,
                            isSubmitting: i,
                            setClosedBanner: K,
                            formikRef: W,
                            successUrl: l.successUrl,
                            trialLength: w,
                            emailStep: 1 === Z && g
                        }), !c || k ? r.createElement(r.Fragment, null) : n ? r.createElement(r.Fragment, null, r.createElement($t, {
                            formikTouched: t,
                            formikErrors: e,
                            formikValues: a,
                            inputs: l.inputs,
                            showHint: L,
                            trackErrorBlur: Y,
                            validateBusinessEmail: J,
                            existingAccount: V,
                            userEmail: p,
                            existingEmailError: l.existingEmailError
                        }), !p && r.createElement(Tt, {
                            text: l.passwordInfo
                        })) : S === f.MSP ? r.createElement(Ht, {
                            formikRef: W,
                            formikTouched: t,
                            formikErrors: e,
                            formikValues: a,
                            inputs: l.inputs,
                            showHint: L,
                            trackErrorBlur: Y,
                            validateBusinessEmail: J,
                            existingAccount: V,
                            userEmail: p,
                            existingEmailError: l.existingEmailError
                        }) : S === f.TEAMS || S === f.PREMIUM || S === f.FAMILIES ? r.createElement(ma, {
                            formikRef: W,
                            formikTouched: t,
                            formikErrors: e,
                            formikValues: a,
                            inputs: l.inputs,
                            showHint: L,
                            trackErrorBlur: Y,
                            validateBusinessEmail: J,
                            existingAccount: V,
                            userEmail: p,
                            existingEmailError: l.existingEmailError,
                            mistypedEmailError: H
                        }) : r.createElement(Vt, {
                            formikTouched: t,
                            formikErrors: e,
                            formikValues: a,
                            inputs: l.inputs,
                            showHint: L,
                            trackErrorBlur: Y,
                            validateBusinessEmail: J,
                            existingAccount: V,
                            userEmail: p,
                            existingEmailError: l.existingEmailError,
                            step: Z
                        }), r.createElement(Ca, {
                            formSubmitting: N,
                            data: l,
                            modalContent: y,
                            handleCallback: E,
                            handleBackClick: te,
                            step: Z,
                            is2Step: g,
                            goToNextStep: ee
                        }), 1 === Z && r.createElement("div", {
                            onClick: Q,
                            className: Ct
                        }, r.createElement("p", {
                            style: {
                                textAlign: x ? "left" : "center"
                            }
                        }, r.createElement(z, {
                            htmlString: l.terms
                        })), U && r.createElement(Be.D0, {
                            name: "optOutOfEmails",
                            as: ue,
                            checked: !P,
                            value: P,
                            label: l.optOutOfEmails[0].label,
                            id: "optOutOfEmails",
                            onClick: () => {
                                O("event", "cta_click", {
                                    cta_name: "Email opt-out",
                                    cta_position: "Trial Form"
                                }), M(!P)
                            }
                        }), !x && r.createElement(ot, null))))))
                    },
                    wa = e => {
                        const {
                            formikTouched: t,
                            formikErrors: a,
                            inputs: n,
                            showHint: i,
                            trackErrorBlur: o,
                            validateBusinessEmail: l,
                            existingAccount: s,
                            userEmail: c,
                            existingEmailError: d,
                            step: u,
                            mistypedEmailError: m
                        } = e, {
                            fullName: p,
                            email: f,
                            temp_phone__c: g,
                            title: v,
                            company: E,
                            employees: C
                        } = n, h = (0, r.useRef)(null);
                        return (0, r.useEffect)((() => {
                            2 === u && h.current && h.current.focus()
                        }), [u]), r.createElement("div", {
                            className: `${Nt} ${It}`
                        }, 1 !== u || c ? 2 === u ? r.createElement(r.Fragment, null) : r.createElement(r.Fragment, null, r.createElement(Be.D0, {
                            name: p.id,
                            type: "text",
                            error: a[p.id] && t[p.id],
                            errormessage: p.error,
                            validate: $e,
                            as: Oe,
                            label: p.label,
                            onFocus: () => {
                                Mt(p.id)
                            },
                            onBlur: e => {
                                o(p.id, $e, e.target.value)
                            },
                            autoFocus: !0,
                            inputRef: h
                        }), g && r.createElement(Be.D0, {
                            name: g.id,
                            type: "tel",
                            error: a[g.id] && t[g.id],
                            errormessage: g.error,
                            as: Oe,
                            label: g.label,
                            validate: g.required ? je : "",
                            maxLength: 30,
                            onFocus: () => {
                                Mt(g.id)
                            }
                        }), v && r.createElement(Be.D0, {
                            name: v.id,
                            type: "text",
                            error: a[v.id] && t[v.id],
                            errormessage: v.error,
                            validate: Ve,
                            as: Oe,
                            label: v.label,
                            onFocus: () => {
                                Mt(v.id)
                            },
                            onBlur: e => {
                                o(v.id, Ve, e.target.value)
                            }
                        }), E && r.createElement(Be.D0, {
                            name: E.id,
                            type: "text",
                            error: a[E.id] && t[E.id],
                            errormessage: E.error,
                            validate: Ve,
                            as: Oe,
                            label: E.label,
                            onFocus: () => {
                                Mt(E.id)
                            },
                            onBlur: e => {
                                o(E.id, Ve, e.target.value)
                            }
                        }), C && r.createElement(Rt, {
                            name: C.id,
                            options: C.options,
                            label: C.label,
                            error: a[C.id] && t[C.id],
                            errorMessage: C.error,
                            onFocus: () => {
                                Mt(C.id)
                            },
                            onBlur: e => {
                                o(C.id, ze, e.target.checked ? e.target.value : "")
                            }
                        })) : r.createElement(Be.D0, {
                            name: f.id,
                            type: "email",
                            error: a[f.id] && t[f.id],
                            errormessage: m || (s ? d : f.error),
                            showHint: i,
                            hintmessage: f.placeHolder,
                            validate: He,
                            as: Oe,
                            label: f.label,
                            maxLength: 128,
                            onFocus: () => {
                                Mt(f.id)
                            },
                            onBlur: e => {
                                l(e.target.value), o(f.id, He, e.target.value)
                            },
                            autoFocus: !0
                        }))
                    },
                    ba = {
                        title: "Create an account",
                        sku: "LPPremiumTrial",
                        formLogo: null,
                        existingEmailError: "",
                        logoutText: "",
                        logoutLink: "",
                        successLoggedInUrl: null,
                        useDifferentEmail: "",
                        notAllowedMessage: "",
                        tryAgainError: "",
                        inputs: {
                            email: {
                                options: null,
                                label: "Email *",
                                type: "email",
                                id: "email",
                                defaultValue: "",
                                required: !0,
                                error: "Please enter a valid email address",
                                placeHolder: "Is this what you meant? "
                            },
                            programName: {
                                options: null,
                                label: null,
                                type: "hidden",
                                id: "programName",
                                defaultValue: "GLB-WRQ-2025-04-Premium Trial Signup",
                                required: !1,
                                error: null,
                                placeHolder: null
                            },
                            programID: {
                                options: null,
                                label: null,
                                type: "hidden",
                                id: "programID",
                                defaultValue: "3444",
                                required: !1,
                                error: null,
                                placeHolder: null
                            }
                        },
                        sendButton: "Start 30-day free trial",
                        terms: 'I accept the LastPass <a href="/legal-center/privacy-notice">Privacy Policy</a>&nbsp;&amp; <a href="/legal-center/terms-of-service/personal">Terms of Service</a>. Please provide resources and promotional emails, including industry research, educational resources and solutions that are relevant to this topic. I understand I can <span>unsubscribe</span> at any time.',
                        successUrl: "https://lastpass.com/create_account.php?premium=1&from=1&unifiedTrial=true&experiment_version=Unified_Trial",
                        globalError: "Something doesn't look right. Please check that you've entered everything correctly.",
                        footerText: '<a href="https://lastpass.com/?ac=1">Log in with existing account</a>',
                        successMessage: "",
                        gaEventCategory: "premium_trial-submit",
                        gaEventAction: "premium_trial",
                        passwordInfo: "",
                        optOutOfEmails: [{
                            label: "I prefer not to receive promotional emails.",
                            type: "checkbox",
                            id: "optout",
                            defaultValue: "1",
                            required: !1,
                            error: "",
                            placeHolder: null
                        }],
                        errors: [{
                            code: "1000",
                            codeText: "INVALID_SKU",
                            message: "Sku is not valid"
                        }, {
                            code: "1001",
                            codeText: "INVALID_FORM_FIELD_VALUE",
                            message: "Please complete all required fields marked with an asterisk (*)."
                        }, {
                            code: "2000",
                            codeText: "INCOMPATIBLE_ACCOUNT",
                            message: 'You can’t use that address to start a LastPass Premium trial. Go back and try again with a different email. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\r\n<br />\r\nError code: 2000'
                        }, {
                            code: "2001",
                            codeText: "COMPANY_IS_MANAGED",
                            message: 'You can\'t use that address to start a LastPass Premium trial. Go back and try again with a different email. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\r\n<br />\r\nError code: 2001'
                        }, {
                            code: "2002",
                            codeText: "BOSS_MIGRATION_RQUIRED",
                            message: 'We couldn\'t start your trial. Go back and try again. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\r\n<br />\r\nError code: 2002'
                        }, {
                            code: "2003",
                            codeText: "TRIAL_NOT_AVAILABLE",
                            message: 'You can\'t use this email to create a new LastPass Premium trial. Go back and try again with an email that is not connected to LastPass. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\n\nError code: 2003'
                        }, {
                            code: "2004",
                            codeText: "NOT_AN_ADMIN_IN_GROUP_ACCOUNT",
                            message: 'You can\'t use that address to start a LastPass Premium trial. Go back and try again with a different email. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\r\n<br />\r\nError code: 2004'
                        }, {
                            code: "2005",
                            codeText: "USER_DEACTIVATED",
                            message: 'You can\'t use this email to create a new LastPass Premium trial. Go back and try again with an email that is not connected to LastPass. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\nError code: 2005'
                        }, {
                            code: "2006",
                            codeText: "USER_AUTHENTICATION_REQUIRED",
                            message: '<a href="https://lastpass.com/?ac=1">Log in to your account </a>to start a LastPass Premium trial. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\r\n<br />\r\nError code: 2006'
                        }, {
                            code: "2007",
                            codeText: "Incomplete_registration",
                            message: 'It looks like you\'re already signed up. Look for an email from LastPass and verify your account. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\nError code: 2007'
                        }, {
                            code: "3001",
                            codeText: "FORBIDDEN_DOMAIN",
                            message: 'You can\'t use this email to create a new LastPass Premium trial. Go back and try again with an email that is not connected to LastPass. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\nError code: 3001'
                        }, {
                            code: "3002",
                            codeText: "INVALID_DOMAIN",
                            message: 'It looks like you entered an invalid or incomplete email address. Please go back and try again. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\nError code: 3002'
                        }, {
                            code: "3003",
                            codeText: "EMAIL_INVALID_FOR_REGISTRATION",
                            message: 'It looks like you entered an invalid or incomplete email address. Please go back and try again. <a href="https://link.lastpass.com/premium-trial-error">Learn more</a>\n<br />\nError code: 3003'
                        }, {
                            code: "3004",
                            codeText: "Compliance_Checks_Registration",
                            message: "Access or use of LastPass services in your region violates applicable export control and sanction laws and is prohibited.\n<br />\nError code: 3004"
                        }, {
                            code: "1002",
                            codeText: "INVALID_FLOW_TYPE",
                            message: ""
                        }],
                        title2: "",
                        backButton: "",
                        sendButton2: ""
                    };
                var ka = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const _a = e => {
                    const {
                        initialValues: t,
                        formError: a,
                        formErrorCode: n,
                        data: i,
                        trialAllowed: o,
                        trackError: l,
                        setErrorMessage: s,
                        setErrorCode: c,
                        existingUserEmail: d
                    } = e, u = window.innerWidth < 900, {
                        trialLength: m
                    } = window.LPFormData, [p, g] = (0, r.useState)(!1), [v, E] = (0, r.useState)(!1), [y, w] = (0, r.useState)(!0), [b, k] = (0, r.useState)(!1), [S, x] = (0, r.useState)(!1), [L, T] = (0, r.useState)(!1), [N, I] = (0, r.useState)(!1), [P, M] = (0, r.useState)(1), [D, F] = (0, r.useState)(!0), [B, A] = (0, r.useState)(), [U, V] = (0, r.useState)(), [$, H] = (0, r.useState)(""), j = (0, r.useRef)(null);
                    (0, r.useEffect)((() => {
                        i.inputs.email.label = "Email address *", i.inputs.email.error = "Please enter a valid email address", i.errors = [{
                            code: "1000",
                            codeText: "INVALID_SKU",
                            message: "Sku is not valid"
                        }, {
                            code: "1001",
                            codeText: "INVALID_FORM_FIELD_VALUE",
                            message: "Please complete all required fields marked with an asterisk (*)."
                        }, {
                            code: "2000",
                            codeText: "INCOMPATIBLE_ACCOUNT",
                            message: 'You can’t use that address to start a LastPass Business trial. Go back and try again with a different email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2000'
                        }, {
                            code: "2001",
                            codeText: "COMPANY_IS_MANAGED",
                            message: 'You can’t use that address to start a LastPass Business trial. Go back and try again with a different email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2001'
                        }, {
                            code: "2002",
                            codeText: "BOSS_MIGRATION_RQUIRED",
                            message: 'We couldn’t start your trial. Go back and try again. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2002'
                        }, {
                            code: "2003",
                            codeText: "TRIAL_NOT_AVAILABLE",
                            message: 'You can’t use that address to start a LastPass Business trial. Go back and try again with a different email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2003'
                        }, {
                            code: "2004",
                            codeText: "NOT_AN_ADMIN_IN_GROUP_ACCOUNT",
                            message: 'You can’t use that address to start a LastPass Business trial. Go back and try again with a different email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2004'
                        }, {
                            code: "2005",
                            codeText: "USER_DEACTIVATED",
                            message: 'We couldn’t start your trial. Go back and try again. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2005'
                        }, {
                            code: "3001",
                            codeText: "FORBIDDEN_DOMAIN",
                            message: 'You can’t use that address to start a LastPass Business trial. Go back and try again with a different email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 3001'
                        }, {
                            code: "3002",
                            codeText: "INVALID_DOMAIN",
                            message: 'We couldn’t validate that address. Go back and try again with a valid email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 3002'
                        }, {
                            code: "3003",
                            codeText: "EMAIL_INVALID_FOR_REGISTRATION",
                            message: 'We couldn’t validate that address. Go back and try again with a valid email. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 3003'
                        }, {
                            code: "2006",
                            codeText: "USER_AUTHENTICATION_REQUIRED",
                            message: '<a href="https://lastpass.com/saml/launch/sitecore?RelayState=/trial/business">Log in to your account </a>to start a LastPass Business trial. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\r\n<br />\r\nError code: 2006'
                        }, {
                            code: "2007",
                            codeText: "Incomplete_registration",
                            message: 'We couldn’t start your trial. Go back and try again. <a href="https://link.lastpass.com/cannot-start-business-trial">Learn more</a>\n<br />\nError code: 2007'
                        }, {
                            code: "3004",
                            codeText: "Compliance_Checks_Registration",
                            message: "Access or use of LastPass services in your region violates applicable export control and sanction laws and is prohibited.\n<br />\nError code: 3004"
                        }]
                    }), []), (0, r.useEffect)((() => {
                        var e;
                        N && (null === (e = j.current) || void 0 === e || e.setFieldError("email", "error"))
                    }), [N]);
                    const Z = e => {
                            e !== b && k(e)
                        },
                        G = (e, t, a) => {
                            var r, n;
                            const i = a ? a.trim() : a;
                            null === (r = j.current) || void 0 === r || r.setFieldValue(e, i), null === (n = j.current) || void 0 === n || n.setFieldError(e, void 0);
                            const o = t(i);
                            if (setTimeout((() => {
                                    var t, a;
                                    null === (t = j.current) || void 0 === t || t.setFieldTouched(e, !0), o && (null === (a = j.current) || void 0 === a || a.setFieldError(e, "error"), O("event", "trial_page_error", {
                                        error_type: "form_field_error",
                                        error_field: e,
                                        validation_failure_reason: o
                                    }))
                                }), 300), o) return !1
                        },
                        W = e => ka(void 0, void 0, void 0, (function*() {
                            var t, a;
                            I(!1), null === (t = j.current) || void 0 === t || t.setFieldTouched("email", !0), g(!1);
                            if (He(e)) return null === (a = j.current) || void 0 === a || a.setFieldError("email", "error"), !1;
                            return (yield Ye(e.toLowerCase())) || g(!0), !1
                        })),
                        K = e => {
                            "SPAN" === e.target.tagName && (x(!0), O("event", "cta_click", {
                                cta_name: "Unsubscribe",
                                cta_position: "Trial Form"
                            }), T(!L))
                        };
                    (0, r.useEffect)((() => {
                        F(p), Y(p)
                    }), [p]);
                    const Y = e => {
                        e ? (window.LPFormData.trialLength = 30, window.LPFormData.trialType = f.PREMIUM) : (window.LPFormData.trialLength = 14, window.LPFormData.trialType = f.BUSINESS)
                    };
                    (0, r.useEffect)((() => {
                        Z(!1), s(null)
                    }), [D]);
                    return (0, r.useEffect)((() => {
                        var e;
                        (N || $) && (null === (e = j.current) || void 0 === e || e.setFieldError("email", "error"))
                    }), [N, $]), r.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: u ? "column" : "row"
                        }
                    }, r.createElement("div", {
                        style: {
                            flex: 1,
                            padding: u ? "24px" : "48px",
                            maxWidth: "512px"
                        }
                    }, r.createElement("svg", {
                        width: "104",
                        height: "16",
                        viewBox: "0 0 104 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            marginBottom: "24px",
                            marginLeft: "-10px"
                        }
                    }, r.createElement("path", {
                        d: "M27.7891 3.77832C29.3364 3.77838 30.4713 4.12085 31.1934 4.80469C31.9148 5.48804 32.2763 6.48484 32.2764 7.79297V14.4844C32.2763 14.8406 32.135 15.086 31.8525 15.2197C31.5247 15.3681 31.1706 15.4948 30.791 15.5986C30.4116 15.7031 30.0207 15.7839 29.6191 15.8438C29.2168 15.903 28.8181 15.9442 28.4238 15.9668C28.029 15.9887 27.6532 16 27.2959 16C26.3133 16 25.4981 15.8992 24.8506 15.6982C24.2035 15.4974 23.69 15.23 23.3105 14.8955C22.9311 14.5616 22.6661 14.1675 22.5176 13.7139C22.3684 13.2607 22.2939 12.7948 22.2939 12.2744C22.294 11.7542 22.3795 11.2525 22.5508 10.7695C22.7214 10.2865 23.0002 9.86266 23.3877 9.49805C23.7746 9.13406 24.2775 8.8401 24.8955 8.61719C25.5128 8.39427 26.2687 8.28223 27.1621 8.28223H29.6631V7.90332C29.6631 7.62118 29.6324 7.35963 29.5732 7.12207C29.5135 6.88411 29.398 6.67623 29.2275 6.49805C29.0563 6.31974 28.8219 6.18211 28.5244 6.08496C28.2268 5.98847 27.8396 5.94043 27.3633 5.94043C26.8568 5.94044 26.306 5.98409 25.7109 6.07324C25.1151 6.16241 24.6309 6.26663 24.2588 6.38574C24.0953 6.43016 23.9762 6.43797 23.9023 6.4082C23.8278 6.37827 23.7747 6.29675 23.7451 6.16309L23.4326 4.8916C23.3728 4.65408 23.4404 4.49739 23.6338 4.42285C24.2592 4.1853 24.9442 4.01805 25.6885 3.9209C26.4326 3.82446 27.1323 3.77638 27.7871 3.77637L27.7891 3.77832ZM67.5332 3.77832C69.0815 3.77832 70.2163 4.11946 70.9385 4.80273C71.6605 5.48605 72.0214 6.48073 72.0215 7.78809V14.4736C72.0214 14.8301 71.8794 15.0753 71.5967 15.209C71.269 15.3573 70.9155 15.4832 70.5361 15.5869C70.1567 15.6907 69.7659 15.7728 69.3643 15.832C68.9626 15.8912 68.5642 15.9321 68.1699 15.9541C67.7749 15.9761 67.3994 15.9883 67.042 15.9883C66.0592 15.9883 65.2442 15.8878 64.5967 15.6875C63.9499 15.4866 63.4362 15.2187 63.0566 14.8848C62.6771 14.5507 62.4128 14.1563 62.2637 13.7031C62.1153 13.2502 62.0411 12.786 62.041 12.2666C62.041 11.7471 62.1257 11.2456 62.2969 10.7627C62.4675 10.2796 62.7478 9.85617 63.1348 9.49219C63.5217 9.12826 64.0237 8.83422 64.6416 8.61133C65.2596 8.38842 66.0148 8.27735 66.9082 8.27734H69.4092V7.89941C69.4092 7.61734 69.3801 7.35665 69.3203 7.11914C69.2612 6.88092 69.1449 6.67345 68.9736 6.49512C68.8023 6.31681 68.5681 6.17851 68.2705 6.08203C67.9729 5.98558 67.5856 5.9375 67.1094 5.9375C66.6037 5.93758 65.9317 6.07039 65.5596 6.18945C65.3959 6.23332 65.2767 6.24173 65.2021 6.21191C65.1276 6.18266 65.0755 6.10037 65.0459 5.9668L64.7334 4.69629C64.6736 4.45888 64.7404 4.3031 64.9336 4.22852C65.5582 3.99102 66.8781 3.77647 67.5332 3.77637V3.77832ZM58.2578 0.165039C59.0429 0.165074 59.7609 0.286476 60.4131 0.529297C61.0646 0.772816 61.6225 1.11735 62.0859 1.56445C62.5494 2.01158 62.9106 2.5456 63.1699 3.16504L63.1689 3.16699C63.4282 3.78643 63.5586 4.46496 63.5586 5.20215C63.5586 5.62529 63.4914 6.13162 63.3584 6.71973C63.2247 7.30792 62.957 7.87685 62.5566 8.42578C62.1556 8.97474 61.5942 9.44223 60.8721 9.82617C60.1494 10.2107 59.1995 10.4033 58.0215 10.4033H55.3027V15.5781C55.3027 15.7969 55.1232 15.9745 54.9023 15.9746H52.9961C52.7751 15.9746 52.5958 15.797 52.5957 15.5781V13.5781H52.5967V1.50586C52.5967 1.48935 52.5977 1.47192 52.5977 1.4541V1.03906C52.5977 0.556061 52.9935 0.165118 53.4805 0.165039H58.2578ZM46.9326 1.32715C47.0514 1.29731 47.1482 1.3085 47.2227 1.36035C47.2964 1.41293 47.334 1.52009 47.334 1.68359V4.5166H49.5781C49.7414 4.5166 49.842 4.54998 49.8789 4.61719C49.9158 4.6837 49.9346 4.7693 49.9346 4.87305V6.08789C49.9346 6.22153 49.9158 6.31869 49.8789 6.37793C49.842 6.43715 49.7414 6.46777 49.5781 6.46777H47.334V12.4639C47.334 12.9401 47.446 13.267 47.6689 13.4453C47.892 13.6236 48.2348 13.7129 48.6963 13.7129C48.7856 13.7129 48.9046 13.7085 49.0537 13.7012C49.202 13.6939 49.3544 13.6826 49.5107 13.668C49.6673 13.6533 49.8239 13.6349 49.9805 13.6123C50.1368 13.5897 50.2671 13.5719 50.3711 13.5566C50.5194 13.5274 50.6161 13.5302 50.6611 13.5674C50.7061 13.6053 50.7362 13.6765 50.751 13.7803L50.9961 15.207V15.2061C51.0109 15.2951 51.0152 15.3733 51.0078 15.4404C50.9998 15.5076 50.9295 15.5717 50.7959 15.6309C50.2901 15.7946 49.7832 15.891 49.2773 15.9209C48.7709 15.9502 48.3765 15.9648 48.0938 15.9648C46.8727 15.9648 46.0098 15.7048 45.5039 15.1846C44.9974 14.6642 44.7441 13.8685 44.7441 12.7979L44.8027 6.46777H43.1592C43.008 6.46777 42.9297 6.42885 42.8672 6.3623C42.8048 6.29582 42.7729 6.23044 42.8018 6.12207C42.8309 6.01309 43.3689 4.66021 43.3984 4.61719C43.4427 4.55801 43.5082 4.51667 43.6846 4.5166H44.7842V2.35742C44.7843 2.06303 44.9202 2.00939 44.9873 1.9502C45.0538 1.89106 45.1694 1.83226 45.333 1.77246L46.9326 1.32715ZM14.502 0C14.5476 2.66294e-06 14.5921 0.00817835 14.6338 0.0214844C14.7827 0.0687986 14.8968 0.193424 14.9277 0.347656C14.9331 0.374939 14.9365 0.403027 14.9365 0.431641V11.6416C14.9366 12.2662 15.0933 12.7077 15.4062 12.9639C15.7192 13.22 16.1483 13.3486 16.6943 13.3486H19.5635C19.8462 13.348 20.1284 13.3477 20.4111 13.3477C20.5763 13.347 20.7484 13.3467 20.9082 13.3467C21.0681 13.3467 21.2291 13.3412 21.3701 13.4316C21.3915 13.4449 21.4106 13.4613 21.4287 13.4785C21.5516 13.597 21.5561 13.8243 21.585 13.9854C21.6205 14.1828 21.6565 14.3806 21.6914 14.5781C21.7384 14.8435 21.7847 15.1087 21.8311 15.374H21.832C21.9169 15.9751 20.9314 15.9473 20.5586 15.9473H16.2383C15.4033 15.9473 14.7124 15.8271 14.167 15.5869C13.621 15.3467 13.1882 15.0252 12.8672 14.624C12.5462 14.2235 12.3207 13.7675 12.1924 13.2539C12.0634 12.7409 12 12.2032 12 11.6416V0.431641C12 0.391715 12.0055 0.352028 12.0156 0.31543C12.0506 0.190462 12.1416 0.0883072 12.2598 0.0371094C12.3135 0.0138424 12.3728 0 12.4346 0H14.502ZM37.8887 3.92383C38.5134 3.91318 39.1402 3.95718 39.7676 4.05566C40.3948 4.15481 41.0007 4.31555 41.585 4.53906C41.7045 4.59562 41.7773 4.66771 41.8008 4.75488C41.8249 4.84203 41.8225 4.94445 41.7949 5.06152L41.3037 6.31934C41.2614 6.43705 41.2061 6.50423 41.1396 6.51953C41.0725 6.53481 40.9789 6.52237 40.8594 6.48047C40.2757 6.28619 39.7632 6.15572 39.3232 6.08984C38.8834 6.024 38.4099 5.99626 37.9043 6.00488C37.3535 6.01486 36.9533 6.13531 36.7041 6.36621C36.4552 6.59694 36.3333 6.8507 36.3379 7.12793C36.3419 7.33288 36.3861 7.50795 36.4707 7.65234C36.5547 7.79659 36.6876 7.92978 36.8682 8.05078C37.0488 8.17185 37.286 8.29548 37.5781 8.42188C37.871 8.5483 38.2273 8.68191 38.6465 8.82031C39.1253 8.98729 39.5938 9.16557 40.0518 9.35449C40.5091 9.54411 40.9149 9.77447 41.2695 10.0459L41.2676 10.0479C41.6223 10.32 41.9108 10.6436 42.1338 11.0195C42.356 11.3954 42.472 11.8535 42.4814 12.3936C42.4915 12.9778 42.3892 13.4918 42.1729 13.9336C41.9566 14.3754 41.6536 14.7427 41.2627 15.0342C40.8725 15.3256 40.4096 15.5456 39.875 15.6934C39.3396 15.8411 38.7586 15.921 38.1318 15.9316C37.7739 15.9376 37.3928 15.9258 36.9893 15.8965C36.5857 15.8672 36.1816 15.8198 35.7773 15.7539C35.3739 15.6881 34.984 15.5952 34.6094 15.4775C34.2339 15.3604 33.888 15.2156 33.5723 15.0459C33.3474 14.9328 33.2924 14.7586 33.4072 14.5225L33.9219 13.2861C33.9937 13.1538 34.0668 13.0682 34.1406 13.0303C34.2145 12.9931 34.3338 13.0093 34.499 13.0791C35.039 13.3179 35.6374 13.5012 36.2949 13.6289C36.9518 13.756 37.5336 13.8153 38.04 13.8066C38.6648 13.796 39.1321 13.6671 39.4404 13.4209C39.7486 13.1741 39.8992 12.8612 39.8926 12.4814C39.8852 12.0583 39.6788 11.7249 39.2725 11.4834C38.8668 11.2425 38.2588 10.9822 37.4502 10.7041C36.8357 10.4959 36.2992 10.2861 35.8418 10.0752C35.3843 9.86426 35.0035 9.62586 34.7012 9.36035C34.3983 9.09558 34.1664 8.79615 34.0039 8.46289C33.8421 8.13026 33.7574 7.74405 33.75 7.30566C33.7413 6.82406 33.8236 6.38005 33.9961 5.97559C34.1694 5.57113 34.4295 5.21962 34.7773 4.9209C35.1253 4.62212 35.5598 4.38403 36.0811 4.20703C36.6015 4.03014 37.2038 3.93584 37.8887 3.92383ZM77.6328 3.92383C78.2575 3.91319 78.8841 3.95721 79.5107 4.05566C80.1382 4.15481 80.7447 4.31548 81.3291 4.53906C81.4485 4.5956 81.5204 4.66778 81.5439 4.75488C81.5681 4.84204 81.5666 4.94442 81.5391 5.06152L81.0469 6.31934C81.0046 6.43674 80.9501 6.50407 80.8838 6.51953C80.8167 6.53482 80.7229 6.52231 80.6035 6.48047C80.0199 6.28622 79.5073 6.15574 79.0674 6.08984C78.6274 6.02397 78.1533 5.99623 77.6475 6.00488C77.0967 6.01487 76.6975 6.13534 76.4482 6.36621C76.1991 6.597 76.0775 6.85061 76.082 7.12793C76.0861 7.33288 76.1292 7.50795 76.2139 7.65234C76.2978 7.79663 76.4308 7.92975 76.6113 8.05078C76.7919 8.17183 77.0293 8.2955 77.3213 8.42188C77.6142 8.5483 77.9705 8.68191 78.3896 8.82031C78.8686 8.98732 79.3368 9.16552 79.7949 9.35449C80.2524 9.54413 80.658 9.77442 81.0127 10.0459L81.0117 10.0479C81.3663 10.3193 81.6556 10.6436 81.8779 11.0195C82.1001 11.3953 82.2171 11.8536 82.2266 12.3936C82.2366 12.9778 82.1326 13.4918 81.917 13.9336C81.7007 14.3754 81.3978 14.7427 81.0068 15.0342C80.6159 15.3256 80.1538 15.5456 79.6191 15.6934C79.0845 15.8411 78.5036 15.921 77.877 15.9316C77.519 15.9376 77.1379 15.9257 76.7344 15.8965C76.3308 15.8672 75.9267 15.8197 75.5225 15.7539C75.1188 15.688 74.7283 15.5953 74.3535 15.4775C73.978 15.3604 73.6321 15.2156 73.3164 15.0459C73.0917 14.9328 73.0366 14.7586 73.1514 14.5225L73.665 13.2861C73.7376 13.1537 73.8109 13.0682 73.8848 13.0303C73.9587 12.9933 74.0774 13.0095 74.2422 13.0791C74.7823 13.318 75.3814 13.5011 76.0391 13.6289C76.6959 13.756 77.2778 13.8153 77.7842 13.8066C78.4086 13.796 78.8753 13.6669 79.1836 13.4209C79.4918 13.1741 79.6433 12.8612 79.6367 12.4814C79.6293 12.0582 79.422 11.7249 79.0156 11.4834C78.6099 11.2426 78.002 10.9829 77.1934 10.7041C76.5788 10.4958 76.0431 10.2868 75.585 10.0752C75.1276 9.86429 74.7476 9.6258 74.4453 9.36035C74.1432 9.09563 73.9109 8.79609 73.749 8.46289C73.5865 8.13026 73.5006 7.74405 73.4932 7.30566C73.4844 6.82399 73.567 6.3801 73.7402 5.97559C73.9135 5.57102 74.1735 5.21967 74.5215 4.9209C74.8694 4.62215 75.303 4.38403 75.8242 4.20703C76.3448 4.03003 76.9476 3.93581 77.6328 3.92383ZM87.4062 3.92383C88.0309 3.91319 88.6568 3.95721 89.2842 4.05566C89.9109 4.15481 90.5171 4.31548 91.1016 4.53906C91.2211 4.59562 91.2939 4.66771 91.3174 4.75488C91.3415 4.84202 91.3391 4.94447 91.3115 5.06152L90.8203 6.31934C90.778 6.43704 90.7227 6.5042 90.6562 6.51953C90.5891 6.53484 90.4955 6.52238 90.376 6.48047C89.7922 6.28617 89.2798 6.15572 88.8398 6.08984C88.3998 6.02397 87.9258 5.99623 87.4199 6.00488C86.8693 6.01491 86.4692 6.13536 86.2207 6.36621C85.9717 6.59696 85.8499 6.85066 85.8545 7.12793C85.8585 7.33288 85.9017 7.50795 85.9863 7.65234C86.0703 7.79673 86.2041 7.92968 86.3848 8.05078C86.5661 8.17183 86.8027 8.29551 87.0947 8.42188C87.3876 8.54828 87.7433 8.68193 88.1631 8.82031C88.6418 8.98728 89.1104 9.16559 89.5684 9.35449C90.025 9.5441 90.4316 9.7745 90.7861 10.0459C91.1405 10.3172 91.4291 10.641 91.6514 11.0166V11.0195C91.8736 11.3954 91.9906 11.8534 92 12.3936C92.0101 12.9778 91.9067 13.4918 91.6904 13.9336C91.4735 14.3754 91.1705 14.7427 90.7803 15.0342C90.39 15.3256 89.9272 15.5456 89.3926 15.6934C88.858 15.8411 88.277 15.921 87.6504 15.9316C87.2925 15.9376 86.9114 15.9257 86.5078 15.8965C86.1048 15.8672 85.6996 15.8198 85.2959 15.7539C84.891 15.688 84.5016 15.5953 84.127 15.4775C83.7514 15.3604 83.4056 15.2156 83.0898 15.0459C82.8651 14.9328 82.81 14.7586 82.9248 14.5225L83.4385 13.2861C83.511 13.1537 83.5843 13.0682 83.6582 13.0303C83.7321 12.9933 83.8508 13.0095 84.0156 13.0791C84.5557 13.318 85.1549 13.5011 85.8125 13.6289C86.4693 13.756 87.0519 13.8153 87.5576 13.8066C88.182 13.796 88.6487 13.6669 88.957 13.4209C89.2652 13.1741 89.4167 12.8612 89.4102 12.4814C89.4028 12.0582 89.1955 11.7249 88.7891 11.4834C88.3833 11.2426 87.7754 10.9829 86.9668 10.7041C86.3522 10.4958 85.8158 10.2868 85.3584 10.0752C84.901 9.86429 84.521 9.6258 84.2188 9.36035C83.9159 9.0956 83.684 8.79614 83.5215 8.46289C83.3596 8.13026 83.274 7.74405 83.2666 7.30566C83.2579 6.82399 83.3411 6.3801 83.5137 5.97559C83.6863 5.57103 83.947 5.21967 84.2949 4.9209C84.6429 4.62215 85.0764 4.38403 85.5977 4.20703C86.1183 4.03003 86.7211 3.93581 87.4062 3.92383ZM27.4961 10.2676C27.243 10.2676 26.9717 10.2823 26.6816 10.3115C26.3914 10.3415 26.1154 10.4239 25.8555 10.5576C25.5949 10.6913 25.3786 10.884 25.208 11.1367C25.0368 11.3895 24.9512 11.7389 24.9512 12.1846C24.9512 12.824 25.1667 13.2706 25.5986 13.5234C26.0305 13.7763 26.6037 13.9023 27.3184 13.9023C27.4218 13.9023 27.5678 13.8979 27.7539 13.8906C27.9399 13.8833 28.1369 13.8649 28.3457 13.835C28.5546 13.805 28.7739 13.7682 29.0049 13.7236C29.2348 13.6791 29.4465 13.6193 29.6396 13.5449V10.2676H27.4961ZM67.2432 10.2607C66.9907 10.2608 66.7188 10.2757 66.4287 10.3057C66.1385 10.3349 65.8632 10.4171 65.6025 10.5508C65.342 10.6845 65.1263 10.8772 64.9551 11.1299C64.7838 11.3827 64.6982 11.7319 64.6982 12.1777C64.6983 12.8165 64.9145 13.2625 65.3457 13.5146C65.7769 13.7668 66.3499 13.8935 67.0645 13.8936C67.1686 13.8936 67.314 13.8892 67.5 13.8818C67.686 13.8745 67.8836 13.8561 68.0918 13.8262C68.3007 13.7969 68.5206 13.7594 68.751 13.7148C68.9813 13.6703 69.1933 13.6106 69.3867 13.5361V10.2607H67.2432ZM55.1533 7.97754H58.0146C58.9421 7.97749 59.6355 7.76431 60.0938 7.33691L60.1816 7.24805C60.637 6.76166 60.8643 6.14182 60.8643 5.38867C60.8642 5.12193 60.8213 4.83152 60.7354 4.51758C60.6487 4.2036 60.4987 3.91796 60.2871 3.65918C60.0755 3.40035 59.7818 3.18472 59.4043 3.01172C59.0274 2.83939 58.5478 2.75293 57.9668 2.75293H55.1533V7.97754Z",
                        fill: "#D71340"
                    })), r.createElement("h2", {
                        className: yt,
                        style: {
                            marginBottom: "12px"
                        }
                    }, 1 === P ? "Create an account" : 2 === P ? "Let’s get you started..." : "Set up your profile"), (1 === P || 2 === P) && r.createElement("p", {
                        style: {
                            marginBottom: "28px"
                        }
                    }, 1 === P ? "Set yourself up for success in 2 minutes or less." : "What brings you here today? This gets you the right LastPass service. "), 2 === P && r.createElement(oe, {
                        closedBanner: null !== a || b,
                        setClosedBanner: Z,
                        type: "error"
                    }, r.createElement(z, {
                        htmlString: a || i.globalError,
                        errorCode: n
                    })), d && r.createElement("div", {
                        className: wt
                    }, r.createElement("div", {
                        className: kt
                    }, r.createElement("div", {
                        className: bt
                    }, r.createElement(q, null)), " ", d), r.createElement("a", {
                        href: i.logoutLink
                    }, i.logoutText)), 2 === P && r.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px",
                            marginBottom: "24px"
                        }
                    }, r.createElement("button", {
                        style: {
                            borderRadius: "8px",
                            border: "1px solid #D5DBE2",
                            padding: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            background: D ? "#EBF2FA" : "#fff"
                        },
                        onClick: () => {
                            F(!0), O("event", "modal_radio_click", {
                                cta_name: "Just Me",
                                cta_position: "Unified Trial Modal - Premium"
                            }), Kt({
                                event: `${C(!0)}_trial_form_radio_click`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 2 select trial",
                                    sku: "LPPremium"
                                }
                            })
                        }
                    }, r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("div", {
                        style: {
                            width: "20px",
                            height: "20px",
                            borderRadius: "100%",
                            border: "1px solid #B1BCC8"
                        }
                    }), D && r.createElement("div", {
                        style: {
                            width: "10px",
                            height: "10px",
                            borderRadius: "100%",
                            position: "absolute",
                            background: "#056DFF",
                            top: "5px",
                            left: "5px"
                        }
                    })), r.createElement("div", {
                        style: {
                            textAlign: "left"
                        }
                    }, r.createElement("p", {
                        style: {
                            fontWeight: "bold",
                            marginBottom: "4px"
                        }
                    }, "Just me"), r.createElement("p", {
                        style: {
                            marginBottom: "0"
                        }
                    }, "You need a private vault that keeps your logins safe and ready when you are."))), r.createElement("button", {
                        style: {
                            borderRadius: "8px",
                            border: "1px solid #D5DBE2",
                            padding: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            background: D ? "#fff" : "#EBF2FA"
                        },
                        onClick: () => {
                            F(!1), O("event", "modal_radio_click", {
                                cta_name: "My Team",
                                cta_position: "Unified Trial Modal - Business"
                            }), Kt({
                                event: `${C(!0)}_trial_form_radio_click`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 2 select trial",
                                    sku: "LPBusiness"
                                }
                            })
                        }
                    }, r.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, r.createElement("div", {
                        style: {
                            width: "20px",
                            height: "20px",
                            borderRadius: "100%",
                            border: "1px solid #B1BCC8"
                        }
                    }), !D && r.createElement("div", {
                        style: {
                            width: "10px",
                            height: "10px",
                            borderRadius: "100%",
                            position: "absolute",
                            background: "#056DFF",
                            top: "5px",
                            left: "5px"
                        }
                    })), r.createElement("div", {
                        style: {
                            textAlign: "left"
                        }
                    }, r.createElement("p", {
                        style: {
                            fontWeight: "bold",
                            marginBottom: "4px"
                        }
                    }, "My team"), r.createElement("p", {
                        style: {
                            marginBottom: "0"
                        }
                    }, "You need a secure way for each teammate to manage their own vault—and share when it matters.")))), o && r.createElement(Be.l1, {
                        validateOnMount: !0,
                        validateOnChange: !0,
                        validateOnBlur: !0,
                        innerRef: j,
                        initialValues: t,
                        onSubmit: e => ka(void 0, void 0, void 0, (function*() {
                            yield(e => ka(void 0, void 0, void 0, (function*() {
                                if (Y(D), D && (yield Kt({
                                        event: `${C(!0)}_trial_form_click`,
                                        properties: {
                                            reason: h(),
                                            journey_step: "Step 2 select trial",
                                            sku: "LPPremium"
                                        }
                                    }), !U.success)) return 2006 === B.code && I(!0), s(ca(ba, U.code.toString()) || i.globalError), void l({
                                    code: U.code.toString(),
                                    message: U.errorMessage || ca(ba, B.code.toString()) || i.globalError,
                                    step: P
                                });
                                try {
                                    let t;
                                    E(!0), k(!1), s(null), c(null), t = D ? yield va({
                                        data: ba,
                                        values: e,
                                        marketingOptOutSeen: S,
                                        contactPermission: y
                                    }): yield oa({
                                        data: i,
                                        existingUserEmail: d,
                                        values: e,
                                        marketingOptOutSeen: S,
                                        contactPermission: y
                                    }), t && !t.success && (2006 === t.code && I(!0), s(ca(i, t.code, d) || i.globalError), l({
                                        code: t.code,
                                        message: t.errorMessage || ca(i, t.code) || i.globalError,
                                        step: P
                                    }), E(!1))
                                } catch (e) {
                                    s(i.globalError), l({
                                        code: "500",
                                        message: `Trial submission: ${e.message}`,
                                        runtime: !0,
                                        step: P
                                    }), E(!1)
                                }
                            })))(e)
                        }))
                    }, (({
                        errors: e,
                        touched: t,
                        values: a,
                        isSubmitting: n,
                        isValidating: c,
                        isValid: u,
                        submitCount: g
                    }) => r.createElement(Be.lV, null, r.createElement(jt, {
                        submitCount: g,
                        isValidating: c,
                        isValid: u,
                        errors: e,
                        isSubmitting: n,
                        setClosedBanner: Z,
                        formikRef: j,
                        successUrl: i.successUrl,
                        trialLength: m,
                        emailStep: 1 === P
                    }), o ? r.createElement(wa, {
                        formikTouched: t,
                        formikErrors: e,
                        formikValues: a,
                        inputs: i.inputs,
                        showHint: !1,
                        trackErrorBlur: G,
                        validateBusinessEmail: W,
                        existingAccount: N,
                        userEmail: d,
                        existingEmailError: i.existingEmailError,
                        step: P,
                        mistypedEmailError: $
                    }) : r.createElement(r.Fragment, null), 1 === P ? r.createElement("div", {
                        className: St,
                        style: {
                            alignItems: "center"
                        }
                    }, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "12px"
                        }
                    }, r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D71340",
                            width: "24px",
                            borderRadius: "10px"
                        }
                    }), r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    }), r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    })), r.createElement(R, {
                        type: "button",
                        id: "EMAIL_SUBMIT",
                        disabled: v,
                        onClick: () => {
                            ka(void 0, void 0, void 0, (function*() {
                                var e, t, a, r;
                                O("event", "cta_click", {
                                    cta_name: "Next step",
                                    cta_position: "Trial Form"
                                }), E(!0), s(null), k(!1);
                                try {
                                    if (!(null === (t = null === (e = j.current) || void 0 === e ? void 0 : e.values) || void 0 === t ? void 0 : t.email)) return;
                                    yield Kt({
                                        event: `${C(!0)}_trial_form_click`,
                                        properties: {
                                            reason: h(),
                                            journey_step: "Step 1 email",
                                            sku: "UNIFIED"
                                        }
                                    });
                                    const n = j.current.values.email.toString(),
                                        i = yield Xt(n);
                                    A(i), window.LPFormData.trialType = f.PREMIUM;
                                    const o = yield _({
                                        email: n,
                                        trialLength: 30,
                                        trialSku: "LPPremiumTrial"
                                    });
                                    if (o && 1002 === o.code && o.correctedEmail) return void H(`${null===(r=null===(a=ba.inputs)||void 0===a?void 0:a.email)||void 0===r?void 0:r.placeHolder} ${o.correctedEmail}`);
                                    V(o), I(!1), M(2), Y(p), qt({
                                        email: n,
                                        contactPermission: y,
                                        trialSku: "Modal"
                                    }), yield Kt({
                                        event: `${C(!0)}_trial_form_shown`,
                                        properties: {
                                            reason: h(),
                                            journey_step: "Step 2 select trial",
                                            sku: "UNIFIED"
                                        }
                                    })
                                } catch (e) {
                                    s(i.globalError), l({
                                        code: "500",
                                        message: `Trial submission: ${e.message}`,
                                        runtime: !0
                                    })
                                } finally {
                                    E(!1)
                                }
                            }))
                        }
                    }, v ? r.createElement(pe, {
                        colorBottom: "#751a17",
                        colorTop: "#fff"
                    }) : "Next")) : 2 === P ? r.createElement("div", {
                        className: St,
                        style: {
                            alignItems: "center"
                        }
                    }, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "12px"
                        }
                    }, r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D71340",
                            width: "24px",
                            borderRadius: "10px"
                        }
                    }), r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    }), !D && r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    })), r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "24px"
                        }
                    }, r.createElement(R, {
                        type: "button",
                        link: !0,
                        onClick: () => {
                            M(1), Kt({
                                event: `${C(!0)}_trial_form_shown`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 1 email",
                                    sku: "UNIFIED"
                                }
                            })
                        }
                    }, "Back"), D ? r.createElement(R, {
                        id: "FORM_SUBMIT",
                        type: "submit",
                        disabled: v
                    }, v ? r.createElement(pe, {
                        colorBottom: "#751a17",
                        colorTop: "#fff"
                    }) : "Next") : r.createElement(R, {
                        type: "button",
                        disabled: v,
                        onClick: e => {
                            O("event", "cta_click", {
                                cta_name: "Next Step - Business Trial form",
                                cta_position: "Trial Modal - Business"
                            }), Kt({
                                event: `${C(!0)}_trial_form_click`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 2 select trial",
                                    sku: "LPBusiness"
                                }
                            }), Y(D), B.success ? (M(3), Kt({
                                event: `${C(!0)}_trial_form_shown`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 2"
                                }
                            })) : (2006 === B.code && I(!0), s(ca(i, B.code.toString()) || i.globalError), l({
                                code: B.code.toString(),
                                message: B.errorMessage || ca(i, B.code.toString()) || i.globalError,
                                step: P
                            }))
                        }
                    }, v ? r.createElement(pe, {
                        colorBottom: "#751a17",
                        colorTop: "#fff"
                    }) : "Next"))) : r.createElement("div", {
                        className: St,
                        style: {
                            alignItems: "center"
                        }
                    }, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "12px"
                        }
                    }, r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    }), r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D71340",
                            width: "24px",
                            borderRadius: "10px"
                        }
                    }), r.createElement("div", {
                        style: {
                            height: "4px",
                            background: "#D0D1D1",
                            width: "4px",
                            borderRadius: "100px"
                        }
                    })), r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "24px"
                        }
                    }, r.createElement(R, {
                        type: "button",
                        link: !0,
                        onClick: () => {
                            M(2), Kt({
                                event: `${C(!0)}_trial_form_shown`,
                                properties: {
                                    reason: h(),
                                    journey_step: "Step 2 select trial",
                                    sku: "UNIFIED"
                                }
                            })
                        }
                    }, "Back"), r.createElement(R, {
                        id: "FORM_SUBMIT",
                        type: "submit",
                        disabled: v
                    }, v ? r.createElement(pe, {
                        colorBottom: "#751a17",
                        colorTop: "#fff"
                    }) : "Next"))), 1 === P && r.createElement("div", {
                        onClick: K,
                        className: Ct
                    }, r.createElement("p", {
                        style: {
                            textAlign: "left"
                        }
                    }, r.createElement(z, {
                        htmlString: i.terms
                    })), L && r.createElement(Be.D0, {
                        name: "optOutOfEmails",
                        as: ue,
                        checked: !y,
                        value: y,
                        label: i.optOutOfEmails[0].label,
                        id: "optOutOfEmails",
                        onClick: () => {
                            O("event", "cta_click", {
                                cta_name: "Email opt-out",
                                cta_position: "Trial Form"
                            }), w(!y)
                        }
                    })))))), 2 === P && r.createElement("div", {
                        style: {
                            flex: 1,
                            padding: u ? "24px" : "80px 60px",
                            background: D ? "#F1F8F1" : "#E5ECF4",
                            color: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex"
                        },
                        "data-theme": "2"
                    }, D ? r.createElement("div", {
                        style: {
                            background: "#0E534F",
                            padding: "40px",
                            borderRadius: "8px",
                            display: "flex",
                            gap: "10px",
                            flexDirection: "column"
                        }
                    }, r.createElement(J, null), r.createElement("div", {
                        style: {
                            fontSize: "22px",
                            lineHeight: "28px",
                            fontWeight: "500"
                        }
                    }, "LastPass Premium—free for 30 days"), r.createElement("div", null, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            flexDirection: "row",
                            marginTop: "8px"
                        }
                    }, r.createElement("div", null, r.createElement(Q, null)), r.createElement("p", null, "LastPass Premium protects your digital life, on your terms.")), r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            flexDirection: "row"
                        }
                    }, r.createElement("div", null, r.createElement(X, null)), r.createElement("p", null, "Securely store unlimited passwords and access them anytime, on any device.")), r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            flexDirection: "row"
                        }
                    }, r.createElement("div", null, r.createElement(ee, null)), r.createElement("div", null, r.createElement("p", null, "After 30 days, ", r.createElement("b", null, "the choice is yours"), ":"), r.createElement("ul", null, r.createElement("li", null, "Go Premium for access on all devices"), r.createElement("li", null, "Or use Free on either all computers or all mobile devices")))))) : r.createElement("div", {
                        style: {
                            background: "#3B4A6D",
                            padding: "40px",
                            borderRadius: "8px",
                            display: "flex",
                            gap: "10px",
                            flexDirection: "column"
                        }
                    }, r.createElement(te, null), r.createElement("div", {
                        style: {
                            fontSize: "22px",
                            lineHeight: "28px",
                            fontWeight: "500"
                        }
                    }, "LastPass Business—free for 14 days"), r.createElement("div", null, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            flexDirection: "row",
                            marginTop: "8px"
                        }
                    }, r.createElement("div", null, r.createElement(ae, null)), r.createElement("p", null, "LastPass Business protects your organization’s data with flexible controls and powerful tools that scale with you.")), r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            flexDirection: "row"
                        }
                    }, r.createElement("div", null, r.createElement(re, null)), r.createElement("p", null, "Each person gets their own secure vault—to store, share, and protect what matters most."))))))
                };
                var Sa = function(e, t, a, r) {
                    return new(a || (a = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        s((r = r.apply(e, t || [])).next())
                    }))
                };
                const xa = ({
                        modalType: e,
                        handleCallback: t,
                        modalContent: a
                    }) => {
                        const n = (0, r.useContext)(i),
                            {
                                formType: o,
                                trialLength: c,
                                isLoggedIn: d,
                                trialType: u
                            } = window.LPFormData,
                            m = v(o),
                            E = s("cciso"),
                            [w, b] = (0, r.useState)({}),
                            [k, S] = (0, r.useState)(null),
                            [x, L] = (0, r.useState)(null),
                            [T, N] = (0, r.useState)(!0),
                            [I, P] = (0, r.useState)(),
                            [M, F] = (0, r.useState)(!1);
                        (0, r.useEffect)((() => {
                            d && n && B(n.sku)
                        }), [n]), (0, r.useEffect)((() => {
                            d && F(!0), Kt({
                                event: `${C(!0)}_trial_form_shown`,
                                properties: Object.assign(Object.assign(Object.assign({
                                    reason: h()
                                }, U && e !== g.UNIFIED && {
                                    journey_step: "Step 1"
                                }), e === g.UNIFIED && {
                                    journey_step: "Step 1 email",
                                    sku: "UNIFIED"
                                }), u === f.FAMILIES && {
                                    source: "Sitecore"
                                })
                            })
                        }), []);
                        const B = e => Sa(void 0, void 0, void 0, (function*() {
                                try {
                                    const t = (yield y(void 0, void 0, void 0, (function*() {
                                        try {
                                            return (yield l.A.get("/lpapi/trial/gettrialemail")).data
                                        } catch (e) {
                                            return {
                                                success: !1
                                            }
                                        }
                                    }))).email;
                                    if (t && "" !== t.trim() && "string" == typeof t) {
                                        let a;
                                        if (P(t), yield gt(t), a = u === f.MSP || u === f.FAMILIES ? yield _(Object.assign({
                                                email: t,
                                                trialLength: c || 30,
                                                trialSku: e
                                            }, u === f.FAMILIES && {
                                                flowType: m
                                            })): yield(e => y(void 0, void 0, void 0, (function*() {
                                                var t, a;
                                                try {
                                                    return (yield l.A.post("/lpapi/trial/EmailCheckBusinessUser", e)).data
                                                } catch (e) {
                                                    return {
                                                        success: !1,
                                                        code: (null === (a = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.data) || void 0 === a ? void 0 : a.code) || 0
                                                    }
                                                }
                                            })))({
                                                flowType: m,
                                                trialLength: c || 14,
                                                trialSku: e
                                            }), null == a ? void 0 : a.success) {
                                            N(!0);
                                            const e = yield y(void 0, void 0, void 0, (function*() {
                                                try {
                                                    return (yield l.A.get("/lpapi/trial/gettrialdatainfo")).data
                                                } catch (e) {
                                                    return {
                                                        success: !1
                                                    }
                                                }
                                            }));
                                            e && b({
                                                fullName: `${e.firstName} ${e.lastName}`,
                                                temp_phone__c: e.phoneNumber,
                                                title: e.jobTitle,
                                                company: e.companyName,
                                                employees: e.companySize
                                            })
                                        } else N(!1), S(ca(n, a.code, I) || n.globalError), A({
                                            code: a.code,
                                            message: ca(n, a.code) || n.globalError
                                        })
                                    } else S(n.globalError), A({
                                        code: "500",
                                        message: "Start logged in trial email error"
                                    });
                                    F(!1)
                                } catch (e) {
                                    F(!1), S(n.globalError), A({
                                        code: "500",
                                        message: `Start logged in trial flow: ${e.message}`,
                                        runtime: !0
                                    })
                                }
                            })),
                            A = ({
                                code: e,
                                message: t,
                                runtime: a,
                                step: r = 1
                            }) => {
                                O("event", "trial_page_error", {
                                    error_type: a ? "runtime_error" : "processing_error",
                                    error_code: e,
                                    error_message: t
                                }), Kt({
                                    event: "trial_submit_processing_error",
                                    properties: Object.assign({
                                        reason: h(),
                                        apiErrorDescription: t,
                                        apiErrorCode: e,
                                        sku: n.sku
                                    }, U && r && {
                                        journey_step: `Step ${r}`
                                    })
                                }), L(e)
                            };
                        (0, r.useEffect)((() => {
                            let e = new URLSearchParams(window.location.search).get("email");
                            var t;
                            "string" == typeof e && e.indexOf(" ") > -1 && (e = "string" == typeof(t = e) ? t.replace(/\s/g, "+") : ""), b(e ? {
                                email: e,
                                country: E || "US"
                            } : {
                                country: E || "US"
                            })
                        }), []);
                        const U = !!e || u === f.BUSINESS && m !== p.PURCHASE && !I;
                        return null === n || M ? r.createElement(D, {
                            mini: U || !!e || u === f.TEAMS || u === f.PREMIUM || u === f.FAMILIES
                        }) : n && "object" == typeof n ? e === g.UNIFIED ? r.createElement(_a, {
                            initialValues: w,
                            formError: k,
                            formErrorCode: x,
                            setErrorMessage: S,
                            directbuy: m === p.PURCHASE,
                            data: n,
                            trialAllowed: T,
                            existingUserEmail: I,
                            trackError: A,
                            setErrorCode: L,
                            is2Step: U
                        }) : r.createElement(ya, {
                            initialValues: w,
                            formError: k,
                            formErrorCode: x,
                            setErrorMessage: S,
                            directbuy: m === p.PURCHASE,
                            data: n,
                            trialAllowed: T,
                            existingUserEmail: I,
                            trackError: A,
                            setErrorCode: L,
                            is2Step: U,
                            handleCallback: t,
                            modalContent: a
                        }) : r.createElement(ut, null, r.createElement("h2", null, "Oops!"), r.createElement("p", null, "Something went wrong. Please reload or try again later."))
                    },
                    La = ({
                        children: e
                    }) => {
                        const [t, a] = (0, r.useState)(null);
                        (0, r.useEffect)((() => {
                            const e = () => {
                                s("lastpassConsentDecision") ? setTimeout((() => {
                                    n()
                                }), 500) : setTimeout((() => {
                                    e()
                                }), 500)
                            };
                            return e(), () => {}
                        }), []);
                        const n = () => {
                            k().then((e => {
                                200 !== e.status && a(!1), a(e.data)
                            })).catch((e => {
                                O("event", "trial_page_error", {
                                    error_type: "runtime_error",
                                    error_code: 500,
                                    error_message: `Trial content loading ${e.message}`
                                }), a(!1)
                            }))
                        };
                        return r.createElement(i.Provider, {
                            value: t
                        }, e)
                    };
                var Ta = {
                    blocker: "Af3Kr3ZvxM6zc9c5VOwQ",
                    modal: "IuOfDsrtsIOu7WjqiWYQ",
                    unified: "zPRRTQuilz1kugAImVGQ",
                    close: "NugtBur2JwU82CJYXJnR",
                    transparent: "pTWQCZVF5475EHBNBTTh"
                };
                const Na = e => {
                    var t;
                    const {
                        onCloseCallBack: a,
                        children: n
                    } = e, i = null === (t = window.TrialForm) || void 0 === t ? void 0 : t.modalType;

                    function o() {
                        i !== g.UNIFIED && a && a()
                    }
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        className: Ta.blocker,
                        onClick: () => o(),
                        style: {
                            backgroundImage: i === g.UNIFIED ? "url('https://www.lastpass.com/-/media/abe7220932c4494a9bd7d73722e73109.ashx')" : ""
                        }
                    }, r.createElement("div", {
                        className: `${Ta.modal} ${Ta[i===g.UNIFIED?"unified":""]}`,
                        onClick: e => e.stopPropagation()
                    }, r.createElement("div", {
                        className: Ta["modal-wrap"]
                    }, n), i !== g.UNIFIED && r.createElement("button", {
                        onClick: () => o(),
                        className: Ta.close
                    }, r.createElement(ne, null)))))
                };
                var Ia = {
                    "modal-cards": "_7NpuQ60sxZ1HgjsT7eN",
                    "modal-card": "K8_b2CQHNI9a9NwkLayg",
                    "modal-card-copy": "WE9tbXXuV8eRwZr4oWeQ",
                    "modal-card-illustration": "aKBXH0OjsUFvMI_KsrBt",
                    "modal-cols": "zdi62Ryr89p0BqBghp7D",
                    "modal-col1": "qcq8Q1XzHHOyfujDGRKf",
                    "modal-col2": "DEgADPYYsKKkJYsWJCGb",
                    "step-indicators": "YwhlQKLXfRZvwKljKqyF",
                    active: "JBzIu8TnToWB8KxKFP9A",
                    "step-indicators-line": "zf8wmUDLKMGVAhBsNsZK",
                    contentLine: "jtZPCSs74RimHoyz_e3T",
                    contentLine28: "DaIwKvqwlRkh29xfhNN2",
                    contentLine50: "G1XVCzlbAvyKvwFV6EFA",
                    contentLineButton: "Gob1e3aht405MnJXdR9Y",
                    contentLineImage: "Xij8_ogsGOzaqlKmZIxQ"
                };
                var Pa = () => {
                    var e, t, a, n, i, l, s, c, d;
                    const [u, m] = (0, r.useState)(0), p = (0, r.useContext)(o), [v, E] = (0, r.useState)();
                    (0, r.useEffect)((() => {
                        window.LPFormData.formType = "Trial"
                    }), []);
                    return p ? 0 === u ? r.createElement("div", {
                        className: Ia["modal-cards"]
                    }, r.createElement("div", {
                        className: Ia["modal-card"]
                    }, r.createElement("div", {
                        className: Ia["modal-card-illustration"]
                    }, r.createElement("img", {
                        src: null === (e = p.card1) || void 0 === e ? void 0 : e.image,
                        alt: "Business illustration"
                    }), r.createElement("div", {
                        className: Ia["modal-card-copy"]
                    }, r.createElement("h4", null, null === (t = p.card1) || void 0 === t ? void 0 : t.title), r.createElement("p", null, null === (a = p.card1) || void 0 === a ? void 0 : a.text), r.createElement("a", {
                        id: "MULTISTEP-LINK-MOVE-TO-STEP2",
                        className: `${Ia["lp-button"]} ${Ia.primary} ${Ia.positive} ${Ia.jumbo}`
                    }), r.createElement(R, {
                        stylesModifier: "black",
                        onClick: () => {
                            O("event", "cta_click", {
                                cta_name: "Next",
                                cta_position: "Chevy Trial Modal - Business"
                            }), window.LPFormData.contentId = "9AE89FD4-728F-4452-AFD4-15B1F8387CB4", window.LPFormData.trialType = f.BUSINESS, E(f.BUSINESS), m(1)
                        }
                    }, null === (n = p.card1) || void 0 === n ? void 0 : n.button)))), r.createElement("div", {
                        className: Ia["modal-card"]
                    }, r.createElement("div", {
                        className: Ia["modal-card-illustration"]
                    }, r.createElement("img", {
                        src: null === (i = p.card2) || void 0 === i ? void 0 : i.image,
                        alt: "Personal illustration"
                    })), r.createElement("div", {
                        className: Ia["modal-card-copy"]
                    }, r.createElement("h4", null, null === (l = p.card2) || void 0 === l ? void 0 : l.title), r.createElement("p", null, null === (s = p.card2) || void 0 === s ? void 0 : s.text), r.createElement(R, {
                        onClick: () => {
                            "chevyPremium" === window.trialModifier ? (O("event", "cta_click", {
                                cta_name: "Next",
                                cta_position: "Chevy Trial Modal - Premium"
                            }), window.LPFormData.contentId = "7ABCBD5D-2460-4E22-B2DA-73C62C0D5A3F", window.LPFormData.trialType = f.PREMIUM, E(f.PREMIUM), m(1)) : (O("event", "cta_click", {
                                cta_name: "Try Personal free",
                                cta_position: "Chevy Trial Modal"
                            }), setTimeout((() => {
                                window.location.href = "https://www.lastpass.com/trial/premium"
                            }), 100))
                        }
                    }, null === (c = p.card2) || void 0 === c ? void 0 : c.button)))) : r.createElement("div", {
                        className: Ia["modal-cols"]
                    }, r.createElement("div", {
                        className: Ia["modal-col1"]
                    }, v === f.BUSINESS && r.createElement("div", {
                        className: Ia["step-indicators"]
                    }, r.createElement("button", {
                        className: Ia.active
                    }, "1"), r.createElement("div", {
                        className: `${Ia["step-indicators-line"]} ${2===u?Ia.active:""}`
                    }), r.createElement("button", {
                        className: 2 === u ? Ia.active : ""
                    }, "2")), r.createElement(La, null, r.createElement(xa, {
                        modalType: g.CHEVY,
                        handleCallback: e => {
                            O("event", "cta_click", {
                                cta_name: "Step change",
                                cta_position: `Chevy Trial Modal - Business - Step ${e}`
                            }), m(e)
                        },
                        modalContent: p
                    }))), r.createElement("div", {
                        className: Ia["modal-col2"]
                    }, r.createElement("img", {
                        src: null === (d = p.secondStep) || void 0 === d ? void 0 : d.image,
                        alt: "Trial"
                    }))) : r.createElement("div", {
                        className: Ia["modal-cards"]
                    }, r.createElement("div", {
                        className: Ia["modal-card"]
                    }, r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLineImage}`
                    }), r.createElement("div", {
                        className: Ia["modal-card-copy"]
                    }, r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine28}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine50}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine50}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLineButton}`
                    }))), r.createElement("div", {
                        className: Ia["modal-card"]
                    }, r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLineImage}`
                    }), r.createElement("div", {
                        className: Ia["modal-card-copy"]
                    }, r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine28}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine50}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLine50}`
                    }), r.createElement("div", {
                        className: `${Ia.contentLine} ${Ia.contentLineButton}`
                    }))))
                };
                const Ma = ({
                    contentId: e,
                    children: t
                }) => {
                    const [a, n] = (0, r.useState)(null);
                    (0, r.useEffect)((() => {
                        i()
                    }), []);
                    const i = () => {
                        (function(e) {
                            const t = s("lastpass#lang") || "en";
                            return l.A.get(`/${t}/lpapi/trial/getfields/${e}`)
                        })(e).then((e => {
                            200 !== e.status && n(!1), n(e.data)
                        })).catch((e => {
                            O("event", "trial_page_error", {
                                error_type: "runtime_error",
                                error_code: 500,
                                error_message: `Trial content loading ${e.message}`
                            }), n(!1)
                        }))
                    };
                    return r.createElement(o.Provider, {
                        value: a
                    }, t)
                };
                var Da = () => ((0, r.useEffect)((() => {
                    window.LPFormData.formType = "Trial", window.LPFormData.contentId = "9AE89FD4-728F-4452-AFD4-15B1F8387CB4"
                }), []), r.createElement(La, null, r.createElement(xa, {
                    modalType: g.UNIFIED
                })));
                var Oa = () => {
                    const [e, t] = (0, r.useState)(), a = (0, r.useRef)();
                    return (0, r.useEffect)((() => {
                        window.TrialForm = {
                            open: e => t(e)
                        }
                    }), []), (0, r.useEffect)((() => {
                        e ? O("event", `${e} Trial Modal`, {
                            modal_event: "Load"
                        }) : a.current && O("event", `${a.current} Trial Modal`, {
                            modal_event: "Close"
                        }), a.current = e
                    }), [e]), e ? r.createElement(Na, {
                        onCloseCallBack: () => t(null),
                        customStyles: g.UNIFIED
                    }, e === g.CHEVY ? r.createElement(Ma, {
                        contentId: "6bdc41f3-910e-4115-803e-c22686bb29dc"
                    }, r.createElement(Pa, null)) : e === g.UNIFIED ? r.createElement(Da, null) : r.createElement(La, null, r.createElement(xa, {
                        modalType: e
                    }))) : null
                };
                var Fa = function({
                    modal: e
                }) {
                    var t, a;
                    const n = (null === (t = window.LPFormData) || void 0 === t ? void 0 : t.formType) === p.TRIAL || (null === (a = window.LPFormData) || void 0 === a ? void 0 : a.formType) === p.DIRECTBUY;
                    return r.createElement("div", {
                        className: "App"
                    }, e ? r.createElement(Oa, null) : n ? r.createElement(La, null, r.createElement(xa, null)) : r.createElement(x, null, r.createElement(Et, null)))
                };
                var Ba = e => {
                        e && e instanceof Function && a.e(182).then(a.bind(a, 3237)).then((({
                            getCLS: t,
                            getFID: a,
                            getFCP: r,
                            getLCP: n,
                            getTTFB: i
                        }) => {
                            t(e), a(e), r(e), n(e), i(e)
                        }))
                    },
                    Aa = a(5338);
                const Ua = document.getElementById("form");
                if (Ua) {
                    (0, Aa.H)(Ua).render(r.createElement(Fa, null))
                }
                const Ra = document.getElementById("form-modal");
                if (Ra) {
                    (0, Aa.H)(Ra).render(r.createElement(Fa, {
                        modal: !0
                    }))
                }
                Ba()
            },
            9746: function() {},
            9977: function() {},
            197: function() {},
            1866: function() {},
            2739: function() {}
        },
        a = {};

    function r(e) {
        var n = a[e];
        if (void 0 !== n) return n.exports;
        var i = a[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.exports
    }
    r.m = t, e = [], r.O = function(t, a, n, i) {
            if (!a) {
                var o = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    a = e[d][0], n = e[d][1], i = e[d][2];
                    for (var l = !0, s = 0; s < a.length; s++)(!1 & i || o >= i) && Object.keys(r.O).every((function(e) {
                        return r.O[e](a[s])
                    })) ? a.splice(s--, 1) : (l = !1, i < o && (o = i));
                    if (l) {
                        e.splice(d--, 1);
                        var c = n();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [a, n, i]
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, {
                a: t
            }), t
        }, r.d = function(e, t) {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, r.e = function() {
            return Promise.resolve()
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            var e = {
                57: 0
            };
            r.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, a) {
                    var n, i, o = a[0],
                        l = a[1],
                        s = a[2],
                        c = 0;
                    if (o.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (n in l) r.o(l, n) && (r.m[n] = l[n]);
                        if (s) var d = s(r)
                    }
                    for (t && t(a); c < o.length; c++) i = o[c], r.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                    return r.O(d)
                },
                a = self.webpackChunklastpass_forms_app = self.webpackChunklastpass_forms_app || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        }();
    var n = r.O(void 0, [182], (function() {
        return r(9865)
    }));
    n = r.O(n)
}();
//# sourceMappingURL=index.bundle.js.map