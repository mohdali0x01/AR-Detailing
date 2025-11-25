(self.webpackChunkLastPass = self.webpackChunkLastPass || []).push([
    [4182], {
        7738: () => {
            var e = document.querySelector(".language-selector"),
                s = document.querySelector(".language-selector__button"),
                t = document.querySelector(".language-selector__drop");
            s.addEventListener("click", function() {
                this.classList.toggle("collapse"), t.classList.toggle("show")
            }), e.addEventListener("mouseleave", function() {
                s.classList.remove("collapse"), t.classList.remove("show")
            })
        }
    }
]);