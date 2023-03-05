function animateSlides() {
    const carousel = document.querySelector('.carousel');

    let slideIndex = 0;
    let nbSlides = 5

    function moveSlide() {
        slideIndex++;

        if(slideIndex >= nbSlides) {
            slideIndex = 0;
        }

        carousel.firstElementChild.style.marginLeft = `calc(-${100 * (slideIndex)}% - ${30 * (slideIndex)}px)`;
    }

    setInterval(() => {
        moveSlide();
    }, 3000);
}

function createVideos() {
    videoItems = ['disney', 'pixar', 'marvel', 'star-wars', 'geographic']

    /* A COMPLETER */
    const vc = document.querySelector("#vc");

    let univers = [
        {image: src="images/marvel.png", video: src="videos/marvel.mp4"},
        {image: "images/pixar.png", video:"videos/pixar.mp4"},
        {image: "images/star-wars.png", video:"videos/star-wars.mp4"},
        {image: "images/geographic.png", video:"videos/geographic.mp4"},
        {image: "images/disney.png", video:"videos/disney.mp4"},
    ]

    let template = document.querySelector("#template-video-cart");

    for (uv of univers) {
        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{image}}/g, uv.image)
            .replace(/{{video}}/g, uv.video);

        clone.firstElementChild.innerHTML = newContent;

    vc.appendChild(clone);
    }
}