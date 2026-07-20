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
