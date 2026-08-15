
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

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoSlide() {

            clearInterval(autoSlide);

            autoSlide = setInterval(() => {
                nextSlide();
            }, 3000);
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                nextSlide();
                startAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                prevSlide();
                startAutoSlide();
            });
        }

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
   MOBILE NAVBAR — FINAL
===================================================== */

    const mobileMenu = document.getElementById("mobileMenu");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileMenu && navMenu) {

        mobileMenu.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                navMenu.classList.contains("active");

            if (isOpen) {

                navMenu.classList.remove("active");
                mobileMenu.classList.remove("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                navMenu.classList.add("active");
                mobileMenu.classList.add("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }

        });


        /* NAV LINK CLICK */

        navMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");
                mobileMenu.classList.remove("active");

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* OUTSIDE CLICK */

        document.addEventListener("click", function (event) {

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
       BACKEND
    ===================================================== */

    const API_URL =
        "https://park-hotel-quba.onrender.com/api/reservations";


    /* =====================================================
       CURRENT RESERVATION
    ===================================================== */

    let currentReservation = null;


    /* =====================================================
       DATE PICKERS
    ===================================================== */

    let checkInPicker = null;
    let checkOutPicker = null;

    if (
        checkIn &&
        checkOut &&
        typeof flatpickr !== "undefined"
    ) {

        checkInPicker = flatpickr(checkIn, {

            dateFormat: "Y-m-d",

            altInput: true,

            altFormat: "d F Y",

            minDate: "today",

            disableMobile: true,

            allowInput: false,

            clickOpens: true,

            locale: {
                firstDayOfWeek: 1
            },

            onChange: function (selectedDates) {

                if (
                    selectedDates.length > 0 &&
                    checkOutPicker
                ) {

                    const selectedDate =
                        selectedDates[0];

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
                }
            }
        });


        checkOutPicker = flatpickr(checkOut, {

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
       DATE VALUE HELPERS
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

        if (!modal) return;

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("modal-open");
    }


    /* =====================================================
       MODAL CLOSE
    ===================================================== */

    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("modal-open");
    }


    /* =====================================================
       RESERVATION FORM
    ===================================================== */

    if (reservationForm) {

        reservationForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                /* -----------------------------------------
                   READ VALUES
                ----------------------------------------- */

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
                        ? roomType.value
                        : "";

                const guestsValue =
                    guestCount
                        ? guestCount.value
                        : "";

                const checkInValue =
                    getCheckInValue();

                const checkOutValue =
                    getCheckOutValue();


                /* -----------------------------------------
                   VALIDATION
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
                        "Zəhmət olmasa bütün məlumatları doldurun."
                    );

                    return;
                }


                /* -----------------------------------------
                   DATE VALIDATION
                ----------------------------------------- */

                if (
                    checkInPicker &&
                    checkOutPicker &&
                    checkInPicker.selectedDates.length &&
                    checkOutPicker.selectedDates.length
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
                        Number(guestsValue),

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
                        currentReservation.guestName;
                }

                if (summaryPhone) {
                    summaryPhone.textContent =
                        currentReservation.phone;
                }

                if (summaryRoom) {
                    summaryRoom.textContent =
                        currentReservation.roomType;
                }

                if (summaryGuests) {
                    summaryGuests.textContent =
                        `${currentReservation.guestCount} qonaq`;
                }

                if (summaryCheckIn) {
                    summaryCheckIn.textContent =
                        currentReservation.checkIn;
                }

                if (summaryCheckOut) {
                    summaryCheckOut.textContent =
                        currentReservation.checkOut;
                }


                /* -----------------------------------------
                   OPEN CONFIRMATION
                ----------------------------------------- */

                openModal(reservationModal);

            }
        );
    }


    /* =====================================================
       CLOSE RESERVATION MODAL
    ===================================================== */

    if (closeReservationModal) {

        closeReservationModal.addEventListener(
            "click",
            () => {
                closeModal(reservationModal);
            }
        );
    }


    if (cancelReservation) {

        cancelReservation.addEventListener(
            "click",
            () => {
                closeModal(reservationModal);
            }
        );
    }


    /* =====================================================
       CONFIRM RESERVATION
    ===================================================== */

    if (confirmReservation) {

        confirmReservation.addEventListener(
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

                confirmReservation.disabled = true;

                const oldText =
                    confirmReservation.textContent;

                confirmReservation.textContent =
                    "Göndərilir...";


                try {

                    const response =
                        await fetch(
                            API_URL,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify(
                                        currentReservation
                                    )
                            }
                        );


                    let data = {};

                    try {
                        data = await response.json();
                    } catch {
                        data = {};
                    }


                    if (!response.ok) {

                        throw new Error(
                            data.message ||
                            "Rezervasiya göndərilə bilmədi."
                        );
                    }


                    /* -------------------------------------
                       SUCCESS
                    ------------------------------------- */

                    closeModal(
                        reservationModal
                    );

                    openModal(
                        successModal
                    );


                    /* -------------------------------------
                       RESET
                    ------------------------------------- */

                    reservationForm.reset();

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


                } catch (error) {

                    console.error(
                        "Reservation error:",
                        error
                    );

                    alert(
                        error.message ||
                        "Rezervasiya göndərilərkən xəta baş verdi."
                    );

                } finally {

                    confirmReservation.disabled =
                        false;

                    confirmReservation.textContent =
                        oldText;
                }

            }
        );
    }


    /* =====================================================
       SUCCESS → HOME
    ===================================================== */

    if (homeButton) {

        homeButton.addEventListener(
            "click",
            () => {

                closeModal(successModal);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    /* =====================================================
       ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeModal(reservationModal);
                closeModal(successModal);

            }
        }
    );


    /* =====================================================
       RESERVATION OVERLAY
    ===================================================== */

    if (reservationModal) {

        const overlay =
            reservationModal.querySelector(
                ".modal-overlay"
            );

        if (overlay) {

            overlay.addEventListener(
                "click",
                () => {
                    closeModal(reservationModal);
                }
            );
        }
    }


    /* =====================================================
       SUCCESS OVERLAY
    ===================================================== */

    if (successModal) {

        const overlay =
            successModal.querySelector(
                ".modal-overlay"
            );

        if (overlay) {

            overlay.addEventListener(
                "click",
                () => {
                    closeModal(successModal);
                }
            );
        }
    }

});

