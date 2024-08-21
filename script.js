function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,


        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

function loadAnimation() {
    var tl = gsap.timeline()

    gsap.to('#loader1', {
        top: `-100%`,
        duration: 2.2,
        ease: "expo.out",
    })
    gsap.to('#loader2', {
        top: `100%`,
        duration: 2.2,
        ease: "expo.out",
    })
    gsap.to('#loader3', {
        left: `-100%`,
        duration: 2.2,
        ease: "expo.out",
    })
    gsap.to('#loader4', {
        left: `100%`,
        duration: 2.2,
        ease: "expo.out",
    })

    tl.from('#page1 h1, #page1 p, #page1 div', {
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
    tl.to('nav', {
        delay: 0.21,
        opacity: 1
    }, "-=2")

    setTimeout(() => {
        document.querySelector('body').style.overflow = `visible`
    }, 3000)

}

window.addEventListener('wheel', function (e) {
    if (e.deltaY >= 0) {
        gsap.to('nav', {
            padding: `1vh 10.4vw`,
            duration: 0.1
        })
    }
    if (e.deltaY < 0) {
        gsap.to('nav', {
            padding: `3vh 10.4vw`,
            duration: 0.1
        })
    }
})

function navAnimation() {
    let h4 = document.querySelectorAll('.nav-part2 h4')
    let navBottom = document.querySelector('#nav-bottom')
    h4.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.color = `gray`

            gsap.to('#nav-bottom', {
                height: `22vh`,
                duration: 0.05
            }, "-=5")

            gsap.to('.bottom-div h5', {
                delay: 0.2,
                duration: 0.4,
                display: `block`,
            })

            gsap.to('.bottom-div h5', {
                y: -30,
                duration: 0.1,
                opacity: 1,
                stagger: {
                    amount: 0.4
                }
            })
        })
    });

    h4.forEach(el => {
        el.addEventListener('mouseleave', () => {
            el.style.color = `#fff`

            navBottom.style.height = `0%`

            gsap.to('.bottom-div h5', {
                y: 30,
                opacity: 0,
            }, "-=3")

            gsap.to('.bottom-div h5', {
                display: `none`,
            }, "-=0.5")


            gsap.to('#nav-bottom', {
                height: `0%`,
            }, "-=0.5")
        })
    });
}

function page1Animation() {
    let page1 = document.getElementById('page1')
    let elm = document.querySelectorAll('#page1 h1')

    elm.forEach(el => {

        el.addEventListener('mouseover', (e) => {
            gsap.to('.page1-cursor', {
                transform: `scale(1)`,
                display: `block`
            })
        })

        el.addEventListener('mousemove', function (e) {
            gsap.to('.page1-cursor', {
                left: e.x,
                top: e.y,
            })
        })

        el.addEventListener('mouseleave', function (e) {
            gsap.to('.page1-cursor', {
                transform: `scale(0)`,
                display: `none`
            })
        })
    });
}

function page2Animation() {
    let rightElem = document.querySelectorAll('.right-elem')
    // let rightElemImg = document.querySelectorAll('.right-elem img')

    rightElem.forEach(el => {
        el.addEventListener('mouseenter', function (e) {
            gsap.to(el.childNodes[3], {
                scale: 1,
                opacity: 1,
            })
        })
        el.addEventListener('mouseleave', function (e) {
            gsap.to(el.childNodes[3], {
                scale: 0,
                opacity: 0,
            })
        })

        el.addEventListener("mousemove", function (e) {
            gsap.to(el.childNodes[3], {
                x: e.x - el.getBoundingClientRect().x - 80,
                y: e.y - el.getBoundingClientRect().y - 150
            })
        })
    })
}

function page3VideoAnimat() {
    let icon = document.querySelector('.icon')
    let one = document.querySelector('.one')
    let two = document.querySelector('.two')

    icon.addEventListener('click', function () {
        one.style.opacity = `0`
        document.body.style.overflow = `hidden`
        two.muted = false
        gsap.to(two, {
            duration: 1,
            opacity: 1,
            width: `100%`,
            height: `100%`
        })

    })

    two.addEventListener('click', function () {
        one.style.opacity = `1`
        document.body.style.overflow = `visible`
        two.muted = true
        gsap.to(two, {
            duration: 0.3,
            opacity: 0,
            width: `0%`,
            height: `0%`
        })

    })
}

function page4Animation() {
    let SectionRV = document.querySelectorAll('#sec-r-video')

    SectionRV.forEach(el => {
        el.addEventListener('mouseover', function () {
            el.play()
        })

        el.addEventListener('mouseleave', function () {
            el.load()
        })
    })



}


let firstSum = document.querySelector('.firstSum')
let secoundSum = document.querySelector('.secoundSum')
let ui = document.querySelector('.ui')
let ux = document.querySelector('.ux')

let truthyFalse = true
let truthyFalse2 = true


firstSum.addEventListener('click', function () {
    truthyFalse = !truthyFalse
    if (truthyFalse == true) {
        ui.innerHTML = `UI/UX Design <i class="ri-arrow-up-s-line"></i>`
    } else {
        {
            ui.innerHTML = `UI/UX Design <i class="ri-arrow-down-s-line"></i>`
        }
    }
})

secoundSum.addEventListener('click', function () {
    truthyFalse2 = !truthyFalse2
    if (truthyFalse2 == true) {
        ux.innerHTML = `Product Design <i class="ri-arrow-up-s-line"></i>`
    } else {
        {
            ux.innerHTML = `Product Design <i class="ri-arrow-down-s-line"></i>`
        }
    }
})


function page6Animation() {
    gsap.from('.title h1', {
        y: 180,
        rotate: 10,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#page6',
            scroller: "body",
            start: "top 45%",
        },
        stagger: 0.2
    })

    function nthChild(partNum, childNum, transfromNum) {
        gsap.to(`#btm6-part${partNum} h4:nth-child(${childNum})`, {
            x: `${transfromNum}`,
            duration: 0.8,
            scrollTrigger: {
                trigger: '#btm6-part2',
                scroller: 'body',
                start: 'top 95%',
                end: 'top -65%',
                scrub: true
            }
        })
    }

    // #btm6-part2 div
    nthChild(2, 2, `2%`)
    nthChild(2, 3, `20%`)
    nthChild(2, 4, `40%`)
    nthChild(2, 5, `60%`)
    nthChild(2, 6, `80%`)
    nthChild(2, 7, `100%`)

    // #btm6-part3 div
    nthChild(3, 2, `5%`)
    nthChild(3, 3, `50%`)

    // #btm6-part4 div
    nthChild(4, 2, `5%`)
    nthChild(4, 3, `30%`)
    nthChild(4, 4, `60%`)
}

function page7Animation() {
    let AiVtop = document.querySelectorAll('.AiV-top')
    AiVtop.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.childNodes[3].play()

            gsap.to(el.childNodes[1], {
                scale: 1,
                opacity: 1,
                display: 'block'
            })
        })
        el.addEventListener('mouseleave', () => {
            el.childNodes[3].load()
            gsap.to(el.childNodes[1], {
                scale: 0,
                opacity: 0,
                display: 'none'
            })
        })
        el.addEventListener('mousemove', (e) => {
            gsap.to(el.childNodes[1], {
                x: e.x - el.getBoundingClientRect().x - 80,
                y: e.y - el.getBoundingClientRect().y - 100
            })
        })
    });


    gsap.to('#page7 .page7-right', {
        transform: `translateY(-80%)`,
        scrollTrigger: {
            trigger: '#page7',
            scroller: "body",
            start: "top 10%",
            scrub: 2,
            pin: true
        }
    })

}
loadAnimation()

// locomotiveAnimation()

navAnimation()
page1Animation()
page2Animation()
page3VideoAnimat()
page4Animation()
// page5Animation()
page6Animation()
page7Animation()