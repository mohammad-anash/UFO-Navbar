let icons = document.querySelectorAll(".icon");
let shadow = document.querySelector("#shadow");

icons.forEach(function (element, index) {
    element.addEventListener("click", function () {
        dullandbright()
        gsap.to("#shadow", {
            x: index*100,
            ease: Expo.easeInOut,
            duration: .23
        })
        gsap.to(this.children, {
            opacity: 1
        })
    })
})

function dullandbright(){
    gsap.to(".icon i", {
        opacity: .3
    })
}