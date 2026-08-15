document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dots .dot");
    const prevBtn = document.querySelector(".hero-prev");
    const nextBtn = document.querySelector(".hero-next");

    if (slides.length) {

        let currentSlide = 0;
        let autoSlide;

        function showSlide(index) {

            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            currentSlide = index;
        }

        function nextSlide() {

            const next =
                (currentSlide + 1) % slides.length;

            showSlide(next);
        }

        function prevSlide() {

            const previous =
                (currentSlide - 1 + slides.length) % slides.length;

            showSlide(previous);
        }

        function startAutoSlide() {

            autoSlide = setInterval(() => {
                nextSlide();
            }, 4000);
        }

        function resetAutoSlide() {

            clearInterval(autoSlide);
            startAutoSlide();
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        dots.forEach((dot, index) => {

            dot.addEventListener("click", () => {
                showSlide(index);
                resetAutoSlide();
            });

        });

        showSlide(0);
        startAutoSlide();
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
       BACKEND API
    ===================================================== */

    const API_URL =
        "http://localhost:5000/api/reservations";


    /* =====================================================
       CURRENT RESERVATION

       PRICE / NIGHTS / TOTAL PRICE YOXDUR
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
                    selectedDates.length &&
                    checkOutPicker
                ) {

                    checkOutPicker.set(
                        "minDate",
                        selectedDates[0]
                    );

                    if (
                        checkOutPicker.selectedDates.length &&
                        checkOutPicker.selectedDates[0] <= selectedDates[0]
                    ) {

                        checkOutPicker.clear();

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
            function (event) {

                event.preventDefault();


                /* -----------------------------------------
                   VALIDATION
                ----------------------------------------- */

                if (
                    !fullName ||
                    !phone ||
                    !roomType ||
                    !guestCount ||
                    !checkIn ||
                    !checkOut
                ) {
                    return;
                }


                if (
                    !fullName.value.trim() ||
                    !phone.value.trim() ||
                    !roomType.value ||
                    !guestCount.value ||
                    !checkIn.value ||
                    !checkOut.value
                ) {

                    alert(
                        "Zəhmət olmasa bütün məlumatları doldurun."
                    );

                    return;
                }


                /* -----------------------------------------
                   RESERVATION DATA

                   ONLY FORM DATA
                ----------------------------------------- */

                currentReservation = {

                    guestName:
                        fullName.value.trim(),

                    phone:
                        phone.value.trim(),

                    roomType:
                    roomType.value,

                    guestCount:
                        Number(guestCount.value),

                    checkIn:
                    checkIn.value,

                    checkOut:
                    checkOut.value,

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
       CLOSE CONFIRMATION
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
            async () => {

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
                        await fetch(API_URL, {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    currentReservation
                                )
                        });


                    const data =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.message ||
                            "Rezervasiya göndərilə bilmədi."
                        );
                    }


                    /* -------------------------------------
                       CLOSE CONFIRMATION
                    ------------------------------------- */

                    closeModal(
                        reservationModal
                    );


                    /* -------------------------------------
                       OPEN SUCCESS
                    ------------------------------------- */

                    openModal(
                        successModal
                    );


                    /* -------------------------------------
                       RESET FORM
                    ------------------------------------- */

                    reservationForm.reset();

                    if (checkInPicker) {
                        checkInPicker.clear();
                    }

                    if (checkOutPicker) {
                        checkOutPicker.clear();
                    }

                    if (checkOutPicker) {
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
       ESC → CLOSE MODAL
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
       OVERLAY → CLOSE MODAL
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