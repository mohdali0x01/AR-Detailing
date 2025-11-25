"use strict";
(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [330], {
        8590: (a, o, t) => {
            t.d(o, {
                default: () => e
            });
            const e = function() {
                try {
                    document.querySelectorAll('[data-module="trial-modal-react"]').forEach(function(a) {
                        a.addEventListener("click", function(o) {
                            var t, e, n, d, i;
                            o.preventDefault(), window.TrialForm && "function" == typeof window.TrialForm.open && (window.LPFormData = window.LPFormData || {}, window.LPFormData.contentId = null === (t = a.dataset) || void 0 === t ? void 0 : t.trialContent, window.LPFormData.trialType = null === (e = a.dataset) || void 0 === e ? void 0 : e.trialType, window.LPFormData.formType = null === (n = a.dataset) || void 0 === n ? void 0 : n.trialFormType, window.TrialForm.modalType = null === (d = a.dataset) || void 0 === d ? void 0 : d.modalType, window.TrialForm.open(null === (i = a.dataset) || void 0 === i ? void 0 : i.modalType))
                        })
                    })
                } catch (a) {
                    console.warn(a.message)
                }
            }
        }
    }
]);