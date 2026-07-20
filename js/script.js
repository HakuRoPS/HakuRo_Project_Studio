document.querySelectorAll(".carousel").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-track img");

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    const dots = carousel.querySelectorAll(".dot");

    let current = 0;

    function update() {

        const slideWidth = slides[0].clientWidth;

        track.style.transform =
            `translateX(-${current * slideWidth}px)`;

        dots.forEach((dot, index) => {

            if (index === current) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });

    }

    nextBtn.addEventListener("click", () => {

        current++;

        if (current >= slides.length) {

            current = 0;

        }

        update();

    });

    prevBtn.addEventListener("click", () => {

        current--;

        if (current < 0) {

            current = slides.length - 1;

        }

        update();

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            update();

        });

    });

    window.addEventListener("resize", update);

    update();

});

    // ----- スワイプ対応 -----

    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {

        startX = e.touches[0].clientX;

    });

    track.addEventListener("touchend", (e) => {

        endX = e.changedTouches[0].clientX;

        const diff = endX - startX;

        // 50px以上動いたら判定
        if (Math.abs(diff) < 50) return;

        if (diff < 0) {

            // 左へスワイプ → 次へ
            current++;

            if (current >= slides.length) {
                current = 0;
            }

        } else {

            // 右へスワイプ → 前へ
            current--;

            if (current < 0) {
                current = slides.length - 1;
            }

        }

        update();

    });

@media (max-width:700px){

    .carousel{

        max-width:280px;

    }

}
