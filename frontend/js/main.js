document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    const prevBtn = document.getElementById("heroPrev");
    const nextBtn = document.getElementById("heroNext");

    if (slides.length > 0) {

        let currentSlide = 0;
        let autoSlide = null;

        function showSlide(index) {

            if (index < 0) {
                index = slides.length - 1;
            }

            if (index >= slides.length) {
                index = 0;
            }

            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            currentSlide = index;
        }

        function startAutoSlide() {

            clearInterval(autoSlide);

            autoSlide = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 3000);
        }

        nextBtn?.addEventListener("click", () => {
            showSlide(currentSlide + 1);
            startAutoSlide();
        });

        prevBtn?.addEventListener("click", () => {
            showSlide(currentSlide - 1);
            startAutoSlide();
        });

        dots.forEach((dot, index) => {

            dot.addEventListener("click", () => {
                showSlide(index);
                startAutoSlide();
            });

        });

        showSlide(0);
        startAutoSlide();
    }


    /* =====================================================
       MOBILE NAVBAR
    ===================================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navMenu =
        document.querySelector(".nav-menu");

    if (mobileMenu && navMenu) {

        mobileMenu.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                navMenu.classList.toggle("active");

            mobileMenu.classList.toggle(
                "active",
                isOpen
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        navMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                mobileMenu.classList.remove("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });

        document.addEventListener("click", (event) => {

            if (
                navMenu.classList.contains("active") &&
                !navMenu.contains(event.target) &&
                !mobileMenu.contains(event.target)
            ) {

                navMenu.classList.remove("active");
                mobileMenu.classList.remove("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });
    }


    /* =====================================================
       RESERVATION ELEMENTS
    ===================================================== */

    const reservationForm =
        document.getElementById("reservationForm");

    const fullName =
        document.getElementById("fullName");

    const phone =
        document.getElementById("phone");

    const roomType =
        document.getElementById("roomType");

    const guestCount =
        document.getElementById("guestCount");

    const checkIn =
        document.getElementById("checkIn");

    const checkOut =
        document.getElementById("checkOut");


    /* =====================================================
       MODALS
    ===================================================== */

    const reservationModal =
        document.getElementById("reservationModal");

    const successModal =
        document.getElementById("successModal");

    const closeReservationModal =
        document.getElementById("closeReservationModal");

    const cancelReservation =
        document.getElementById("cancelReservation");

    const confirmReservation =
        document.getElementById("confirmReservation");

    const homeButton =
        document.getElementById("homeButton");


    /* =====================================================
       SUMMARY
    ===================================================== */

    const summaryName =
        document.getElementById("summaryName");

    const summaryPhone =
        document.getElementById("summaryPhone");

    const summaryRoom =
        document.getElementById("summaryRoom");

    const summaryGuests =
        document.getElementById("summaryGuests");

    const summaryCheckIn =
        document.getElementById("summaryCheckIn");

    const summaryCheckOut =
        document.getElementById("summaryCheckOut");


    /* =====================================================
       API
    ===================================================== */

    const API_URL =
        "https://park-hotel-quba.onrender.com/api/reservations";


    /* =====================================================
       RESERVATION STATE
    ===================================================== */

    let currentReservation = null;

    let checkInPicker = null;

    let checkOutPicker = null;


    /* =====================================================
       FLATPICKR
    ===================================================== */

    const flatpickrFunction =
        window["flatpickr"];

    if (
        checkIn &&
        checkOut &&
        typeof flatpickrFunction === "function"
    ) {

        checkInPicker =
            flatpickrFunction(checkIn, {

                dateFormat: "Y-m-d",

                altInput: true,

                altFormat: "d F Y",

                minDate: "today",

                disableMobile: true,

                allowInput: false,

                clickOpens: true,

                locale: {
                    firstDayOfWeek: 1
                }
            });


        checkOutPicker =
            flatpickrFunction(checkOut, {

                dateFormat: "Y-m-d",

                altInput: true,

                altFormat: "d F Y",

                minDate: "today",

                disableMobile: true,

                allowInput: false,

                clickOpens: true,

                locale: {
                    firstDayOfWeek: 1
                }
            });
    }


    /* =====================================================
       DATE RELATION
    ===================================================== */

    if (checkIn) {

        checkIn.addEventListener("change", () => {

            if (
                !checkInPicker ||
                !checkOutPicker ||
                checkInPicker.selectedDates.length === 0
            ) {
                return;
            }

            const selectedDate =
                checkInPicker.selectedDates[0];

            checkOutPicker.set(
                "minDate",
                selectedDate
            );

            if (
                checkOutPicker.selectedDates.length > 0
            ) {

                const checkoutDate =
                    checkOutPicker.selectedDates[0];

                if (checkoutDate <= selectedDate) {
                    checkOutPicker.clear();
                }
            }

        });
    }


    /* =====================================================
       DATE HELPERS
    ===================================================== */

    function getCheckInValue() {

        if (
            checkInPicker &&
            checkInPicker.selectedDates.length > 0
        ) {

            return checkInPicker.formatDate(
                checkInPicker.selectedDates[0],
                "Y-m-d"
            );
        }

        return "";
    }


    function getCheckOutValue() {

        if (
            checkOutPicker &&
            checkOutPicker.selectedDates.length > 0
        ) {

            return checkOutPicker.formatDate(
                checkOutPicker.selectedDates[0],
                "Y-m-d"
            );
        }

        return "";
    }


    /* =====================================================
       MODAL OPEN
    ===================================================== */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    /* =====================================================
       MODAL CLOSE
    ===================================================== */

    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    /* =====================================================
       RESERVATION FORM
    ===================================================== */

    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const guestNameValue =
                    fullName
                        ? fullName.value.trim()
                        : "";

                const phoneValue =
                    phone
                        ? phone.value.trim()
                        : "";

                const roomValue =
                    roomType
                        ? roomType.value.trim()
                        : "";

                const guestsValue =
                    guestCount
                        ? guestCount.value.trim()
                        : "";

                const checkInValue =
                    getCheckInValue();

                const checkOutValue =
                    getCheckOutValue();


                /* -----------------------------------------
                   REQUIRED FIELDS
                ----------------------------------------- */

                if (
                    !guestNameValue ||
                    !phoneValue ||
                    !roomValue ||
                    !guestsValue ||
                    !checkInValue ||
                    !checkOutValue
                ) {

                    alert(
                        "Zəhmət olmasa bütün məcburi məlumatları doldurun."
                    );

                    return;
                }


                /* -----------------------------------------
                   GUEST COUNT
                ----------------------------------------- */

                const guests =
                    Number(guestsValue);

                if (
                    !Number.isInteger(guests) ||
                    guests < 1
                ) {

                    alert(
                        "Qonaq sayı düzgün daxil edilməyib."
                    );

                    return;
                }


                /* -----------------------------------------
                   DATE VALIDATION
                ----------------------------------------- */

                if (
                    checkInPicker &&
                    checkOutPicker &&
                    checkInPicker.selectedDates.length > 0 &&
                    checkOutPicker.selectedDates.length > 0
                ) {

                    const startDate =
                        checkInPicker.selectedDates[0];

                    const endDate =
                        checkOutPicker.selectedDates[0];

                    if (endDate <= startDate) {

                        alert(
                            "Çıxış tarixi giriş tarixindən sonra olmalıdır."
                        );

                        return;
                    }
                }


                /* -----------------------------------------
                   CREATE RESERVATION
                ----------------------------------------- */

                currentReservation = {

                    guestName:
                    guestNameValue,

                    phone:
                    phoneValue,

                    roomType:
                    roomValue,

                    guestCount:
                    guests,

                    checkIn:
                    checkInValue,

                    checkOut:
                    checkOutValue,

                    specialRequest:
                        ""
                };


                /* -----------------------------------------
                   SUMMARY
                ----------------------------------------- */

                if (summaryName) {
                    summaryName.textContent =
                        guestNameValue;
                }

                if (summaryPhone) {
                    summaryPhone.textContent =
                        phoneValue;
                }

                if (summaryRoom) {
                    summaryRoom.textContent =
                        roomValue;
                }

                if (summaryGuests) {
                    summaryGuests.textContent =
                        `${guests} qonaq`;
                }

                if (summaryCheckIn) {
                    summaryCheckIn.textContent =
                        checkInValue;
                }

                if (summaryCheckOut) {
                    summaryCheckOut.textContent =
                        checkOutValue;
                }


                /* -----------------------------------------
                   OPEN CONFIRMATION MODAL
                ----------------------------------------- */

                openModal(
                    reservationModal
                );
            }
        );
    }


    /* =====================================================
       CLOSE RESERVATION MODAL
    ===================================================== */

    closeReservationModal?.addEventListener(
        "click",
        () => {
            closeModal(reservationModal);
        }
    );


    cancelReservation?.addEventListener(
        "click",
        () => {
            closeModal(reservationModal);
        }
    );


    /* =====================================================
       CONFIRM RESERVATION
    ===================================================== */

    confirmReservation?.addEventListener(
        "click",
        async (event) => {

            event.preventDefault();
            event.stopPropagation();


            if (!currentReservation) {

                alert(
                    "Rezervasiya məlumatları tapılmadı."
                );

                return;
            }


            /* -----------------------------------------
               BUTTON STATE
            ----------------------------------------- */

            const oldText =
                confirmReservation.textContent;

            confirmReservation.disabled = true;

            confirmReservation.textContent =
                "Göndərilir...";


            /* -----------------------------------------
               SEND TO RENDER
            ----------------------------------------- */

            let response;

            try {

                response =
                    await fetch(
                        API_URL,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    currentReservation
                                )
                        }
                    );

            } catch (error) {

                console.error(
                    "Reservation network error:",
                    error
                );

                alert(
                    "Serverə qoşulmaq mümkün olmadı."
                );

                confirmReservation.disabled =
                    false;

                confirmReservation.textContent =
                    oldText;

                return;
            }


            /* -----------------------------------------
               READ RESPONSE
            ----------------------------------------- */

            const responseText =
                await response.text();

            let data = null;

            try {

                data =
                    JSON.parse(responseText);

            } catch (error) {

                console.error(
                    "Invalid server response:",
                    responseText
                );

                data = {
                    message:
                        "Serverdən düzgün cavab alınmadı."
                };
            }


            /* -----------------------------------------
               SERVER ERROR
            ----------------------------------------- */

            if (!response.ok) {

                console.error(
                    "Reservation API error:",
                    data
                );

                alert(
                    data.message ||
                    `Server xətası: ${response.status}`
                );

                confirmReservation.disabled =
                    false;

                confirmReservation.textContent =
                    oldText;

                return;
            }


            /* -----------------------------------------
               SUCCESS
            ----------------------------------------- */

            console.log(
                "Reservation successful:",
                data
            );

            closeModal(
                reservationModal
            );

            openModal(
                successModal
            );


            /* -----------------------------------------
               RESET FORM
            ----------------------------------------- */

            if (reservationForm) {
                reservationForm.reset();
            }

            if (checkInPicker) {
                checkInPicker.clear();
            }

            if (checkOutPicker) {

                checkOutPicker.clear();

                checkOutPicker.set(
                    "minDate",
                    "today"
                );
            }

            currentReservation = null;


            /* -----------------------------------------
               RESTORE BUTTON
            ----------------------------------------- */

            confirmReservation.disabled =
                false;

            confirmReservation.textContent =
                oldText;
        }
    );


    /* =====================================================
       SUCCESS → HOME
    ===================================================== */

    homeButton?.addEventListener(
        "click",
        () => {

            closeModal(
                successModal
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeModal(
                    reservationModal
                );

                closeModal(
                    successModal
                );
            }
        }
    );


    /* =====================================================
       RESERVATION MODAL OVERLAY
    ===================================================== */

    if (reservationModal) {

        const overlay =
            reservationModal.querySelector(
                ".modal-overlay"
            );

        overlay?.addEventListener(
            "click",
            () => {
                closeModal(
                    reservationModal
                );
            }
        );
    }


    /* =====================================================
       SUCCESS MODAL OVERLAY
    ===================================================== */

    if (successModal) {

        const overlay =
            successModal.querySelector(
                ".modal-overlay"
            );

        overlay?.addEventListener(
            "click",
            () => {
                closeModal(
                    successModal
                );
            }
        );
    }

});