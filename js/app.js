/*
----------------------------------
STICKY HEADER EFFECT
----------------------------------
*/

const header =
    document.querySelector(".header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 20) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );
        }
    }
);

/*
----------------------------------
MOBILE MENU
----------------------------------
*/

const hamburger =
    document.getElementById(
        "hamburger"
    );

const menu =
    document.getElementById(
        "menu"
    );

if (hamburger) {

    hamburger.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "open"
            );
        }
    );
}

/*
----------------------------------
CLOSE MOBILE MENU
----------------------------------
*/

document
    .querySelectorAll(
        "#menu a"
    )
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "open"
                );
            }
        );
    });

/*
----------------------------------
FADE IN ANIMATION
----------------------------------
*/

function setupFadeAnimation() {

    const elements =
        document.querySelectorAll(
            ".fade-in"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );

            },

            {
                threshold: 0.15
            }
        );

    elements.forEach(
        element => {

            observer.observe(
                element
            );
        }
    );
}

/*
----------------------------------
SCROLL TO TOP ON LOGO CLICK
----------------------------------
*/

const logo =
    document.querySelector(
        ".logo"
    );

if (logo) {

    logo.addEventListener(
        "click",
        e => {

            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}

/*
----------------------------------
SECTION ANIMATIONS
----------------------------------
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupFadeAnimation();
    }
);