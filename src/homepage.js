// Auto-slide every 3 seconds
let techCarousel = document.querySelector("#techCarousel");

let carousel = new bootstrap.Carousel(techCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: false
});