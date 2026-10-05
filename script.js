document.addEventListener("DOMContentLoaded", () => {

    const ship = document.getElementById("shipWrapper");
    const eggs = document.getElementById("eggs");


    /* ========================================
       SHIP FINISHES ENTRANCE
    ======================================== */

    ship.addEventListener("animationend", (event) => {

        if (event.animationName !== "shipEnter") {
            return;
        }


        /* ------------------------------------
           LOCK SHIP AT CENTER
        ------------------------------------ */

        ship.classList.add("hovering");


        /* ------------------------------------
           EGGS WOBBLE
        ------------------------------------ */

        setTimeout(() => {

            eggs.classList.add("reacting");

        }, 200);


        /* ------------------------------------
           EGGS MOVE INTO SHIP
        ------------------------------------ */

        setTimeout(() => {

            eggs.classList.remove("reacting");

            void eggs.offsetWidth;

            eggs.classList.add("stealing");

        }, 850);


        /* ------------------------------------
           SHIP LEAVES
        ------------------------------------ */

        setTimeout(() => {

            startSmoothShipExit();

        }, 3350);

    });


    /* ========================================
       ULTRA SMOOTH SHIP EXIT
    ======================================== */

    function startSmoothShipExit() {

        /*
            Stop wrapper CSS animation completely.

            IMPORTANT:
            We are NOT touching .pig-ship.

            Therefore shipBob continues running.
        */

        ship.classList.remove("hovering");

        ship.style.animation = "none";


        /*
            Lock wrapper at the center.
        */

        ship.style.transform =
            "translate3d(-50%, 0, 0)";


        /*
            Force browser to commit that state
            before beginning movement.
        */

        ship.getBoundingClientRect();


        /* ------------------------------------
           MOVE SHIP

           Only TWO positions.

           Browser interpolates every frame
           between them.
        ------------------------------------ */

        const exitAnimation = ship.animate(

            [
                {
                    transform:
                        "translate3d(-50%, 0, 0)"
                },

                {
                    transform:
                        "translate3d(calc(120vw - 50%), 0, 0)"
                }
            ],

            {
                duration: 4500,

                /*
                    Almost linear.

                    This prevents the ship from
                    visibly slowing/stopping
                    halfway through.
                */

                easing:
                    "cubic-bezier(0.25, 0.1, 0.25, 1)",

                fill: "forwards"
            }

        );


        /* ====================================
           EXIT FINISHED
        ==================================== */

        exitAnimation.onfinish = () => {

            console.log("CodeBounty intro finished.");

        };

    }

});