document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       PARK HOTEL QUBA
       PROFESSIONAL 15-LANGUAGE SYSTEM

       AZ • EN • RU • TR • DE • FR • ES • IT
       AR • FA • KA • UK • ZH • JA • KO
    ========================================================= */

    const translations = {

        /* =====================================================
           AZERBAIJANI
        ===================================================== */

        az: {

            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — Qubada rahat və unudulmaz istirahət.",

            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Ana səhifə",
            nav_about: "Haqqımızda",
            nav_rooms: "Otaqlar",
            nav_gallery: "Qalereya",
            nav_reservation: "Rezervasiya",
            nav_contact: "Əlaqə",

            hero_location: "QUBA • AZƏRBAYCAN",
            hero_title: "Qubanın qəlbində",
            hero_title_highlight: "rahatlıq",
            hero_description: "Təbiətin gözəlliyi, dağ mənzərələri və rahatlıq bir məkanda — Park Hotel Quba.",
            hero_book: "Rezervasiya et",
            hero_rooms: "Otaqlara bax",

            about_label: "HAQQIMIZDA",
            about_title: "Təbiətlə",
            about_title_highlight: "harmoniyada",
            about_heading: "Təbiətin qoynunda unudulmaz istirahət",
            about_text_1: "Quba Azərbaycanın zəngin təbiəti ilə seçilən ən gözəl bölgələrindən biridir. Böyük Qafqazın ətəklərində yerləşən Quba möhtəşəm dağ mənzərələri, sıx meşələri, çayları və təmiz havası ilə məşhurdur.",
            about_text_2: "Bölgənin qədim və zəngin tarixi var. Quba xanlığı XVIII əsrdə Azərbaycanın siyasi və mədəni həyatında mühüm rol oynayıb.",
            about_text_3: "Qubaya gələn qonaqlar Qəçrəş meşələrini, Afurca şəlaləsini, Xınalıq kəndini və digər təbii və tarixi məkanları kəşf edə bilərlər.",

            about_feature_mountain: "Dağ mənzərəsi",
            about_feature_nature: "Təmiz təbiət",
            about_feature_quba: "Quba",

            rooms_label: "OTAQLARIMIZ",
            rooms_title: "Rahatlığınız üçün",
            rooms_title_highlight: "seçin",

            room_twin_name: "Twin otaq",
            room_twin_desc: "İki ayrı çarpayı ilə təchiz olunmuş işıqlı və rahat Twin otaq.",
            room_twin_beds: "2 ayrı çarpayı",

            room_triple_name: "Triple otaq",
            room_triple_desc: "Ailələr və dost qrupları üçün geniş və rahat Triple otaq.",
            room_triple_beds: "1 ayrı çarpayı və 1 çarpayı",

            room_double_name: "Double otaq",
            room_double_desc: "Rahat istirahət üçün hazırlanmış geniş və komfortlu Double otaq.",
            room_double_beds: "2 ayrı çarpayı və 1 çarpayı",

            room_wifi: "Wi-Fi",
            room_view: "Çay və dağ mənzərəsi",

            gallery_label: "QALEREYA",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "QONAQ RƏYLƏRİ",
            testimonials_title: "Qonaqlarımız nə deyir?",
            testimonials_description: "Qonaqlarımızın Park Hotel Qubadakı istirahətləri haqqında fikirləri ilə tanış olun.",

            testimonial_1_text: "Qubanın gözəl atmosferindən zövq almaq və dincəlmək üçün əla məkandır. Hər şey rahat idi və xidmət çox yaxşı idi.",
            testimonial_1_name: "Əli M.",

            testimonial_2_text: "Otelin atmosferi çox gözəldir və personal çox mehribandır. İstirahətimizdən çox razı qaldıq və mütləq yenidən gələcəyik.",
            testimonial_2_name: "Emma K.",

            testimonial_3_text: "Qubanın gözəllikləri ilə əhatə olunmuş sakit və rahat məkan. Başdan sona qədər çox xoş təcrübə oldu.",
            testimonial_3_name: "Rəşad A.",

            verified_guest: "Təsdiqlənmiş qonaq",

            reservation_label: "REZERVASİYA",
            reservation_title: "İstirahətinizi",
            reservation_title_highlight: "indi planlayın",
            reservation_description: "Aşağıdakı məlumatları daxil edin. Rezervasiyanı göndərdikdən sonra məlumatları təsdiqləmək üçün pəncərə açılacaq.",

            reservation_name_label: "Ad və soyad",
            reservation_name_placeholder: "Ad və soyad",

            reservation_phone_label: "Telefon",
            reservation_phone_placeholder: "+994 XX XXX XX XX",

            reservation_room_label: "Otaq tipi",
            reservation_room_placeholder: "Otaq seçin",

            reservation_guest_label: "Qonaq sayı",

            guest_1: "1 qonaq",
            guest_2: "2 qonaq",
            guest_3: "3 qonaq",
            guest_4: "4 qonaq",
            guest_5: "5 qonaq",
            guest_6: "6 qonaq",

            reservation_checkin_label: "Giriş tarixi",
            reservation_checkin_placeholder: "Giriş tarixini seçin",

            reservation_checkout_label: "Çıxış tarixi",
            reservation_checkout_placeholder: "Çıxış tarixini seçin",

            reservation_submit: "İndi rezervasiya et",

            reservation_modal_label: "REZERVASİYA MƏLUMATLARI",
            reservation_confirm_title: "Məlumatları təsdiqləyin",

            summary_name_label: "Ad və soyad",
            summary_phone_label: "Telefon",
            summary_room_label: "Otaq tipi",
            summary_guests_label: "Qonaq sayı",
            summary_checkin_label: "Giriş",
            summary_checkout_label: "Çıxış",

            reservation_confirm_question: "Rezervasiyanı təsdiqləmək istəyirsiniz?",
            reservation_cancel: "Ləğv et",
            reservation_confirm: "Təsdiqlə",

            reservation_success_title: "Rezervasiyanız uğurla təsdiqləndi.",
            reservation_success_text: "Əməkdaşlarımız ən qısa zamanda sizinlə əlaqə saxlayacaqlar. Bizi seçdiyiniz üçün təşəkkür edirik!",
            reservation_home: "Ana səhifəyə qayıt",

            contact_label: "ƏLAQƏ",
            contact_title: "Bizimlə",
            contact_title_highlight: "əlaqə saxlayın",

            contact_person_label: "Əlaqələndirici şəxs",
            contact_person: "Əlişanov Orxan",
            contact_address_label: "Ünvan",
            contact_address: "Quba, 28 May parkı",
            contact_email_label: "E-mail",

            footer_description: "Qubanın gözəl təbiəti arasında rahatlıq, sakitlik və unudulmaz istirahət.",
            footer_navigation: "Naviqasiya",
            footer_home: "Ana səhifə",
            footer_about: "Haqqımızda",
            footer_rooms: "Otaqlar",
            footer_gallery: "Qalereya",
            footer_reservation: "Rezervasiya",
            footer_contact: "Əlaqə",
            footer_address: "Quba, 28 May parkı",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Bütün hüquqlar qorunur.",
            footer_created_by: "Sayt",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: "tərəfindən hazırlanıb.",

            previous_image: "Əvvəlki şəkil",
            next_image: "Növbəti şəkil",
            menu: "Menyu",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Twin otaq",
            room_triple_alt: "Triple otaq",
            room_double_alt: "Double otaq",
            gallery_modal_alt: "Qalereya"
        },


        /* =====================================================
           ENGLISH
        ===================================================== */

        en: {

            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — a comfortable and unforgettable stay in Quba.",

            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Home",
            nav_about: "About Us",
            nav_rooms: "Rooms",
            nav_gallery: "Gallery",
            nav_reservation: "Reservation",
            nav_contact: "Contact",

            hero_location: "QUBA • AZERBAIJAN",
            hero_title: "In the heart of Quba",
            hero_title_highlight: "comfort",
            hero_description: "Nature, mountain views and comfort in one place — Park Hotel Quba.",
            hero_book: "Book Now",
            hero_rooms: "View Rooms",

            about_label: "ABOUT US",
            about_title: "In harmony with",
            about_title_highlight: "nature",
            about_heading: "An unforgettable escape surrounded by nature",
            about_text_1: "Quba is one of Azerbaijan's most beautiful regions, known for its rich nature. Located at the foothills of the Greater Caucasus, Quba is famous for magnificent mountain landscapes, dense forests, rivers and fresh air.",
            about_text_2: "The region has a rich and ancient history. The Quba Khanate played an important role in the political and cultural life of Azerbaijan during the 18th century.",
            about_text_3: "Guests visiting Quba can explore the Qechresh forests, Afurja Waterfall, Khinalig village and many other natural and historical attractions.",

            about_feature_mountain: "Mountain views",
            about_feature_nature: "Pure nature",
            about_feature_quba: "Quba",

            rooms_label: "OUR ROOMS",
            rooms_title: "Choose for your",
            rooms_title_highlight: "comfort",

            room_twin_name: "Twin Room",
            room_twin_desc: "A bright and comfortable Twin Room equipped with two single beds.",
            room_twin_beds: "2 single beds",

            room_triple_name: "Triple Room",
            room_triple_desc: "A spacious and comfortable Triple Room for families and groups of friends.",
            room_triple_beds: "1 single bed and 1 bed",

            room_double_name: "Double Room",
            room_double_desc: "A spacious and comfortable Double Room designed for a relaxing stay.",
            room_double_beds: "2 single beds and 1 bed",

            room_wifi: "Wi-Fi",
            room_view: "River and mountain view",

            gallery_label: "GALLERY",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "GUEST REVIEWS",
            testimonials_title: "What our guests say",
            testimonials_description: "Discover what our guests say about their stay at Park Hotel Quba.",

            testimonial_1_text: "A wonderful place to relax and enjoy the beautiful atmosphere of Quba. Everything was comfortable and the service was excellent.",
            testimonial_1_name: "Ali M.",

            testimonial_2_text: "The hotel has a wonderful atmosphere and very friendly staff. We really enjoyed our stay and will definitely come back.",
            testimonial_2_name: "Emma K.",

            testimonial_3_text: "A peaceful and comfortable place surrounded by the beauty of Quba. It was a wonderful experience from beginning to end.",
            testimonial_3_name: "Rashad A.",

            verified_guest: "Verified Guest",

            reservation_label: "RESERVATION",
            reservation_title: "Plan your",
            reservation_title_highlight: "stay now",
            reservation_description: "Enter the following information. After submitting your reservation, a confirmation window will appear.",

            reservation_name_label: "Full name",
            reservation_name_placeholder: "Full name",

            reservation_phone_label: "Phone",
            reservation_phone_placeholder: "+994 XX XXX XX XX",

            reservation_room_label: "Room type",
            reservation_room_placeholder: "Select a room",

            reservation_guest_label: "Number of guests",

            guest_1: "1 guest",
            guest_2: "2 guests",
            guest_3: "3 guests",
            guest_4: "4 guests",
            guest_5: "5 guests",
            guest_6: "6 guests",

            reservation_checkin_label: "Check-in date",
            reservation_checkin_placeholder: "Select check-in date",

            reservation_checkout_label: "Check-out date",
            reservation_checkout_placeholder: "Select check-out date",

            reservation_submit: "Book Now",

            reservation_modal_label: "RESERVATION DETAILS",
            reservation_confirm_title: "Confirm your details",

            summary_name_label: "Full name",
            summary_phone_label: "Phone",
            summary_room_label: "Room type",
            summary_guests_label: "Guests",
            summary_checkin_label: "Check-in",
            summary_checkout_label: "Check-out",

            reservation_confirm_question: "Would you like to confirm your reservation?",
            reservation_cancel: "Cancel",
            reservation_confirm: "Confirm",

            reservation_success_title: "Your reservation has been successfully confirmed.",
            reservation_success_text: "Our staff will contact you shortly. Thank you for choosing us!",
            reservation_home: "Return Home",

            contact_label: "CONTACT",
            contact_title: "Get in",
            contact_title_highlight: "touch with us",

            contact_person_label: "Contact person",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Address",
            contact_address: "Quba, 28 May Park",
            contact_email_label: "E-mail",

            footer_description: "Comfort, peace and an unforgettable stay surrounded by the beautiful nature of Quba.",
            footer_navigation: "Navigation",
            footer_home: "Home",
            footer_about: "About Us",
            footer_rooms: "Rooms",
            footer_gallery: "Gallery",
            footer_reservation: "Reservation",
            footer_contact: "Contact",
            footer_address: "Quba, 28 May Park",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "All rights reserved.",
            footer_created_by: "Website created by",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Previous image",
            next_image: "Next image",
            menu: "Menu",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Twin Room",
            room_triple_alt: "Triple Room",
            room_double_alt: "Double Room",
            gallery_modal_alt: "Gallery"
        },


        /* =====================================================
           RUSSIAN
        ===================================================== */

        ru: {

            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — комфортный и незабываемый отдых в Губе.",

            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Главная",
            nav_about: "О нас",
            nav_rooms: "Номера",
            nav_gallery: "Галерея",
            nav_reservation: "Бронирование",
            nav_contact: "Контакты",

            hero_location: "ГУБА • АЗЕРБАЙДЖАН",
            hero_title: "В самом сердце Губы",
            hero_title_highlight: "комфорт",
            hero_description: "Красота природы, горные пейзажи и комфорт в одном месте — Park Hotel Quba.",
            hero_book: "Забронировать",
            hero_rooms: "Посмотреть номера",

            about_label: "О НАС",
            about_title: "В гармонии с природой",
            about_title_highlight: "Губы",
            about_heading: "Незабываемый отдых среди природы",
            about_text_1: "Губа — один из самых красивых регионов Азербайджана с богатой природой. Расположенная у подножия Большого Кавказа, Губа славится великолепными горными пейзажами, густыми лесами, реками и чистым воздухом.",
            about_text_2: "Регион имеет древнюю историю. Губинское ханство в XVIII веке играло важную роль в политической и культурной жизни Азербайджана.",
            about_text_3: "Гости Губы могут посетить леса Гечреш, водопад Афурджа, село Хыналыг и другие природные и исторические достопримечательности.",

            about_feature_mountain: "Горный пейзаж",
            about_feature_nature: "Чистая природа",
            about_feature_quba: "Губа",

            rooms_label: "НАШИ НОМЕРА",
            rooms_title: "Выберите для вашего",
            rooms_title_highlight: "комфорта",

            room_twin_name: "Twin номер",
            room_twin_desc: "Светлый и уютный Twin номер оснащён двумя односпальными кроватями.",
            room_twin_beds: "2 односпальные кровати",

            room_triple_name: "Triple номер",
            room_triple_desc: "Просторный и комфортный Triple номер для семей и компаний друзей.",
            room_triple_beds: "1 односпальная кровать и 1 кровать",

            room_double_name: "Double номер",
            room_double_desc: "Просторный и комфортный Double номер создан для приятного отдыха.",
            room_double_beds: "2 односпальные кровати и 1 кровать",

            room_wifi: "Wi-Fi",
            room_view: "Вид на реку и горы",

            gallery_label: "ГАЛЕРЕЯ",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "ОТЗЫВЫ ГОСТЕЙ",
            testimonials_title: "Что говорят наши гости",
            testimonials_description: "Узнайте, что наши гости говорят о своём пребывании в Park Hotel Quba.",

            testimonial_1_text: "Прекрасное место для отдыха и наслаждения красивой атмосферой Губы. Всё было комфортно, а обслуживание — отличным.",
            testimonial_1_name: "Али М.",

            testimonial_2_text: "В отеле прекрасная атмосфера и очень дружелюбный персонал. Нам очень понравилось пребывание, и мы обязательно вернёмся.",
            testimonial_2_name: "Эмма К.",

            testimonial_3_text: "Тихое и комфортное место, окружённое красотой Губы. Впечатления были очень приятными от начала до конца.",
            testimonial_3_name: "Рашад А.",

            verified_guest: "Проверенный гость",

            reservation_label: "БРОНИРОВАНИЕ",
            reservation_title: "Планируйте свой",
            reservation_title_highlight: "отдых сейчас",
            reservation_description: "Введите следующие данные. После отправки бронирования откроется окно для подтверждения информации.",

            reservation_name_label: "Имя и фамилия",
            reservation_name_placeholder: "Имя и фамилия",

            reservation_phone_label: "Телефон",
            reservation_phone_placeholder: "+994 XX XXX XX XX",

            reservation_room_label: "Тип номера",
            reservation_room_placeholder: "Выберите номер",

            reservation_guest_label: "Количество гостей",

            guest_1: "1 гость",
            guest_2: "2 гостя",
            guest_3: "3 гостя",
            guest_4: "4 гостя",
            guest_5: "5 гостей",
            guest_6: "6 гостей",

            reservation_checkin_label: "Дата заезда",
            reservation_checkin_placeholder: "Выберите дату заезда",

            reservation_checkout_label: "Дата выезда",
            reservation_checkout_placeholder: "Выберите дату выезда",

            reservation_submit: "Забронировать сейчас",

            reservation_modal_label: "ДАННЫЕ БРОНИРОВАНИЯ",
            reservation_confirm_title: "Подтвердите данные",

            summary_name_label: "Имя и фамилия",
            summary_phone_label: "Телефон",
            summary_room_label: "Тип номера",
            summary_guests_label: "Количество гостей",
            summary_checkin_label: "Заезд",
            summary_checkout_label: "Выезд",

            reservation_confirm_question: "Вы хотите подтвердить бронирование?",
            reservation_cancel: "Отмена",
            reservation_confirm: "Подтвердить",

            reservation_success_title: "Ваше бронирование успешно подтверждено.",
            reservation_success_text: "Наши сотрудники свяжутся с вами в ближайшее время. Спасибо, что выбрали нас!",
            reservation_home: "Вернуться на главную",

            contact_label: "КОНТАКТЫ",
            contact_title: "Свяжитесь",
            contact_title_highlight: "с нами",

            contact_person_label: "Контактное лицо",
            contact_person: "Алишанов Орхан",
            contact_address_label: "Адрес",
            contact_address: "Губа, парк 28 Мая",
            contact_email_label: "E-mail",

            footer_description: "Комфорт, спокойствие и незабываемый отдых среди прекрасной природы Губы.",
            footer_navigation: "Навигация",
            footer_home: "Главная",
            footer_about: "О нас",
            footer_rooms: "Номера",
            footer_gallery: "Галерея",
            footer_reservation: "Бронирование",
            footer_contact: "Контакты",
            footer_address: "Губа, парк 28 Мая",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Все права защищены.",
            footer_created_by: "Сайт создан",
            footer_creator_name: "Гадиров Джейхун",
            footer_created_by_suffix: ".",

            previous_image: "Предыдущее изображение",
            next_image: "Следующее изображение",
            menu: "Меню",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Губа",
            room_twin_alt: "Twin номер",
            room_triple_alt: "Triple номер",
            room_double_alt: "Double номер",
            gallery_modal_alt: "Галерея"
        },


        /* =====================================================
           TURKISH
        ===================================================== */

        tr: {

            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — Quba'da konforlu ve unutulmaz bir tatil.",

            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Ana Sayfa",
            nav_about: "Hakkımızda",
            nav_rooms: "Odalar",
            nav_gallery: "Galeri",
            nav_reservation: "Rezervasyon",
            nav_contact: "İletişim",

            hero_location: "QUBA • AZERBAYCAN",
            hero_title: "Quba'nın kalbinde",
            hero_title_highlight: "konfor",
            hero_description: "Doğanın güzelliği, dağ manzarası ve konforun bir arada olduğu Park Hotel Quba.",
            hero_book: "Rezervasyon Yap",
            hero_rooms: "Odalarımıza Bakın",

            about_label: "HAKKIMIZDA",
            about_title: "Quba'nın doğasıyla",
            about_title_highlight: "uyum içinde",
            about_heading: "Doğanın içinde unutulmaz bir tatil",
            about_text_1: "Quba, Azerbaycan'ın en güzel ve zengin doğal güzelliklere sahip bölgelerinden biridir. Büyük Kafkas Dağları'nın eteklerinde bulunan Quba; muhteşem dağ manzaraları, yoğun ormanları, nehirleri ve temiz havasıyla dikkat çeker.",
            about_text_2: "Bölgenin köklü bir tarihi vardır. Quba Hanlığı, 18. yüzyılda Azerbaycan'ın siyasi ve kültürel yaşamında önemli bir rol oynamıştır.",
            about_text_3: "Quba'yı ziyaret eden misafirler Qechresh ormanlarını, Afurca Şelalesi'ni, Khinalig köyünü ve diğer doğal ve tarihi yerleri keşfedebilirler.",

            about_feature_mountain: "Dağ manzarası",
            about_feature_nature: "Temiz doğa",
            about_feature_quba: "Quba",

            rooms_label: "ODALARIMIZ",
            rooms_title: "Konforunuz için",
            rooms_title_highlight: "seçin",

            room_twin_name: "Twin Oda",
            room_twin_desc: "Konforlu ve aydınlık Twin oda iki tek kişilik yatakla donatılmıştır.",
            room_twin_beds: "2 tek kişilik yatak",

            room_triple_name: "Triple Oda",
            room_triple_desc: "Aileler ve arkadaş grupları için geniş ve konforlu Triple oda.",
            room_triple_beds: "1 tek kişilik yatak ve 1 yatak",

            room_double_name: "Double Oda",
            room_double_desc: "Geniş ve konforlu Double oda rahat bir tatil için tasarlanmıştır.",
            room_double_beds: "2 tek kişilik yatak ve 1 yatak",

            room_wifi: "Wi-Fi",
            room_view: "Nehir ve dağ manzarası",

            gallery_label: "GALERİ",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "MİSAFİR DENEYİMLERİ",
            testimonials_title: "Misafirlerimiz ne diyor?",
            testimonials_description: "Misafirlerimizin Park Hotel Quba'daki konaklamaları hakkında neler söylediğini keşfedin.",

            testimonial_1_text: "Quba'nın güzel atmosferinin tadını çıkarmak ve dinlenmek için harika bir yer. Her şey konforluydu ve hizmet mükemmeldi.",
            testimonial_1_name: "Ali M.",

            testimonial_2_text: "Otelin atmosferi çok güzel ve personel çok ilgili. Konaklamamızdan çok memnun kaldık ve kesinlikle tekrar geleceğiz.",
            testimonial_2_name: "Emma K.",

            testimonial_3_text: "Quba'nın güzellikleriyle çevrili huzurlu ve konforlu bir yer. Baştan sona çok güzel bir deneyimdi.",
            testimonial_3_name: "Rashad A.",

            verified_guest: "Doğrulanmış Misafir",

            reservation_label: "REZERVASYON",
            reservation_title: "Tatilinizi",
            reservation_title_highlight: "şimdi planlayın",
            reservation_description: "Aşağıdaki bilgileri girin. Rezervasyon gönderildikten sonra bilgilerinizi onaylamanız için bir pencere açılacaktır.",

            reservation_name_label: "Ad ve soyad",
            reservation_name_placeholder: "Ad ve soyad",

            reservation_phone_label: "Telefon",
            reservation_phone_placeholder: "+994 XX XXX XX XX",

            reservation_room_label: "Oda tipi",
            reservation_room_placeholder: "Oda seçin",

            reservation_guest_label: "Misafir sayısı",

            guest_1: "1 misafir",
            guest_2: "2 misafir",
            guest_3: "3 misafir",
            guest_4: "4 misafir",
            guest_5: "5 misafir",
            guest_6: "6 misafir",

            reservation_checkin_label: "Giriş tarihi",
            reservation_checkin_placeholder: "Giriş tarihini seçin",

            reservation_checkout_label: "Çıkış tarihi",
            reservation_checkout_placeholder: "Çıkış tarihini seçin",

            reservation_submit: "Şimdi rezervasyon yap",

            reservation_modal_label: "REZERVASYON BİLGİLERİ",
            reservation_confirm_title: "Bilgileri onaylayın",

            summary_name_label: "Ad ve soyad",
            summary_phone_label: "Telefon",
            summary_room_label: "Oda tipi",
            summary_guests_label: "Misafir sayısı",
            summary_checkin_label: "Giriş",
            summary_checkout_label: "Çıkış",

            reservation_confirm_question: "Rezervasyonu onaylamak istiyor musunuz?",
            reservation_cancel: "İptal",
            reservation_confirm: "Onayla",

            reservation_success_title: "Rezervasyonunuz başarıyla onaylandı.",
            reservation_success_text: "Çalışanlarımız en kısa sürede sizinle iletişime geçecektir. Bizi seçtiğiniz için teşekkür ederiz!",
            reservation_home: "Ana sayfaya dön",

            contact_label: "İLETİŞİM",
            contact_title: "Bizimle",
            contact_title_highlight: "iletişime geçin",

            contact_person_label: "İlgili kişi",
            contact_person: "Alişanov Orhan",
            contact_address_label: "Adres",
            contact_address: "Quba, 28 Mayıs Parkı",
            contact_email_label: "E-posta",

            footer_description: "Quba'nın güzel doğasında konfor, huzur ve unutulmaz bir tatil.",
            footer_navigation: "Navigasyon",
            footer_home: "Ana Sayfa",
            footer_about: "Hakkımızda",
            footer_rooms: "Odalar",
            footer_gallery: "Galeri",
            footer_reservation: "Rezervasyon",
            footer_contact: "İletişim",
            footer_address: "Quba, 28 Mayıs Parkı",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Tüm hakları saklıdır.",
            footer_created_by: "Bu site",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: "tarafından oluşturulmuştur.",

            previous_image: "Önceki görsel",
            next_image: "Sonraki görsel",
            menu: "Menü",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Twin Oda",
            room_triple_alt: "Triple Oda",
            room_double_alt: "Double Oda",
            gallery_modal_alt: "Galeri"
        },


        /* =====================================================
           OTHER 11 LANGUAGES
           Shared professional translations
        ===================================================== */

        de: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — komfortabler und unvergesslicher Aufenthalt in Quba.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Startseite",
            nav_about: "Über uns",
            nav_rooms: "Zimmer",
            nav_gallery: "Galerie",
            nav_reservation: "Reservierung",
            nav_contact: "Kontakt",

            hero_location: "QUBA • ASERBAIDSCHAN",
            hero_title: "Im Herzen von Quba",
            hero_title_highlight: "Komfort",
            hero_description: "Natur, Berglandschaften und Komfort an einem Ort — Park Hotel Quba.",
            hero_book: "Jetzt buchen",
            hero_rooms: "Zimmer ansehen",

            about_label: "ÜBER UNS",
            about_title: "Im Einklang mit der",
            about_title_highlight: "Natur",
            about_heading: "Unvergessliche Erholung inmitten der Natur",
            about_text_1: "Quba ist eine der schönsten Regionen Aserbaidschans und bekannt für ihre reiche Natur.",
            about_text_2: "Die Region verfügt über eine jahrhundertealte Geschichte und spielte eine wichtige Rolle in der Geschichte Aserbaidschans.",
            about_text_3: "Gäste können die Wälder von Qechresh, den Afurja-Wasserfall, Khinalig und weitere Sehenswürdigkeiten entdecken.",

            about_feature_mountain: "Bergblick",
            about_feature_nature: "Unberührte Natur",
            about_feature_quba: "Quba",

            rooms_label: "UNSERE ZIMMER",
            rooms_title: "Wählen Sie für Ihren",
            rooms_title_highlight: "Komfort",

            room_twin_name: "Twin-Zimmer",
            room_twin_desc: "Helles und komfortables Twin-Zimmer mit zwei Einzelbetten.",
            room_twin_beds: "2 Einzelbetten",

            room_triple_name: "Triple-Zimmer",
            room_triple_desc: "Geräumiges und komfortables Zimmer für Familien und Freundesgruppen.",
            room_triple_beds: "1 Einzelbett und 1 Bett",

            room_double_name: "Double-Zimmer",
            room_double_desc: "Geräumiges und komfortables Zimmer für einen angenehmen Aufenthalt.",
            room_double_beds: "2 Einzelbetten und 1 Bett",

            room_wifi: "Wi-Fi",
            room_view: "Fluss- und Bergblick",

            gallery_label: "GALERIE",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "GÄSTEBEWERTUNGEN",
            testimonials_title: "Was unsere Gäste sagen",
            testimonials_description: "Erfahren Sie, was unsere Gäste über ihren Aufenthalt im Park Hotel Quba sagen.",

            testimonial_1_text: "Ein wunderschöner Ort zum Entspannen und Genießen der Atmosphäre von Quba. Alles war komfortabel und der Service ausgezeichnet.",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "Das Hotel hat eine wunderbare Atmosphäre und sehr freundliches Personal. Wir haben unseren Aufenthalt sehr genossen.",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "Ein ruhiger und komfortabler Ort inmitten der Schönheit von Quba.",
            testimonial_3_name: "Rashad A.",

            verified_guest: "Verifizierter Gast",

            reservation_label: "RESERVIERUNG",
            reservation_title: "Planen Sie Ihren",
            reservation_title_highlight: "Aufenthalt",
            reservation_description: "Geben Sie die folgenden Informationen ein. Nach dem Absenden erscheint ein Fenster zur Bestätigung.",
            reservation_name_label: "Vor- und Nachname",
            reservation_name_placeholder: "Vor- und Nachname",
            reservation_phone_label: "Telefon",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "Zimmertyp",
            reservation_room_placeholder: "Zimmer auswählen",
            reservation_guest_label: "Anzahl der Gäste",
            guest_1: "1 Gast",
            guest_2: "2 Gäste",
            guest_3: "3 Gäste",
            guest_4: "4 Gäste",
            guest_5: "5 Gäste",
            guest_6: "6 Gäste",
            reservation_checkin_label: "Anreisedatum",
            reservation_checkin_placeholder: "Anreisedatum auswählen",
            reservation_checkout_label: "Abreisedatum",
            reservation_checkout_placeholder: "Abreisedatum auswählen",
            reservation_submit: "Jetzt buchen",

            reservation_modal_label: "RESERVIERUNGSDATEN",
            reservation_confirm_title: "Daten bestätigen",
            summary_name_label: "Vor- und Nachname",
            summary_phone_label: "Telefon",
            summary_room_label: "Zimmertyp",
            summary_guests_label: "Gäste",
            summary_checkin_label: "Anreise",
            summary_checkout_label: "Abreise",
            reservation_confirm_question: "Möchten Sie die Reservierung bestätigen?",
            reservation_cancel: "Abbrechen",
            reservation_confirm: "Bestätigen",

            reservation_success_title: "Ihre Reservierung wurde erfolgreich bestätigt.",
            reservation_success_text: "Unsere Mitarbeiter werden sich in Kürze mit Ihnen in Verbindung setzen. Vielen Dank!",
            reservation_home: "Zur Startseite",

            contact_label: "KONTAKT",
            contact_title: "Kontaktieren",
            contact_title_highlight: "Sie uns",
            contact_person_label: "Kontaktperson",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Adresse",
            contact_address: "Quba, 28 May Park",
            contact_email_label: "E-Mail",

            footer_description: "Komfort, Ruhe und ein unvergesslicher Aufenthalt in der wunderschönen Natur von Quba.",
            footer_navigation: "Navigation",
            footer_home: "Startseite",
            footer_about: "Über uns",
            footer_rooms: "Zimmer",
            footer_gallery: "Galerie",
            footer_reservation: "Reservierung",
            footer_contact: "Kontakt",
            footer_address: "Quba, 28 May Park",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",
            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Alle Rechte vorbehalten.",
            footer_created_by: "Website erstellt von",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Vorheriges Bild",
            next_image: "Nächstes Bild",
            menu: "Menü",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Twin-Zimmer",
            room_triple_alt: "Triple-Zimmer",
            room_double_alt: "Double-Zimmer",
            gallery_modal_alt: "Galerie"
        },


        fr: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — un séjour confortable et inoubliable à Quba.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Accueil",
            nav_about: "À propos",
            nav_rooms: "Chambres",
            nav_gallery: "Galerie",
            nav_reservation: "Réservation",
            nav_contact: "Contact",

            hero_location: "QUBA • AZERBAÏDJAN",
            hero_title: "Au cœur de Quba",
            hero_title_highlight: "confort",
            hero_description: "Nature, montagnes et confort réunis en un seul lieu — Park Hotel Quba.",
            hero_book: "Réserver",
            hero_rooms: "Voir les chambres",

            about_label: "À PROPOS",
            about_title: "En harmonie avec la",
            about_title_highlight: "nature",
            about_heading: "Une escapade inoubliable au cœur de la nature",
            about_text_1: "Quba est l'une des plus belles régions d'Azerbaïdjan, réputée pour sa nature exceptionnelle.",
            about_text_2: "La région possède une histoire ancienne et riche qui occupe une place importante dans l'histoire de l'Azerbaïdjan.",
            about_text_3: "Les visiteurs peuvent découvrir les forêts de Qechresh, la cascade d'Afurja, le village de Khinalig et bien d'autres sites.",

            about_feature_mountain: "Vue sur les montagnes",
            about_feature_nature: "Nature préservée",
            about_feature_quba: "Quba",

            rooms_label: "NOS CHAMBRES",
            rooms_title: "Choisissez votre",
            rooms_title_highlight: "confort",

            room_twin_name: "Chambre Twin",
            room_twin_desc: "Une chambre Twin lumineuse et confortable avec deux lits simples.",
            room_twin_beds: "2 lits simples",
            room_triple_name: "Chambre Triple",
            room_triple_desc: "Une chambre spacieuse et confortable pour les familles et groupes.",
            room_triple_beds: "1 lit simple et 1 lit",
            room_double_name: "Chambre Double",
            room_double_desc: "Une chambre spacieuse et confortable conçue pour un séjour agréable.",
            room_double_beds: "2 lits simples et 1 lit",

            room_wifi: "Wi-Fi",
            room_view: "Vue sur la rivière et les montagnes",

            gallery_label: "GALERIE",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "AVIS DES CLIENTS",
            testimonials_title: "Ce que disent nos clients",
            testimonials_description: "Découvrez ce que nos clients pensent de leur séjour au Park Hotel Quba.",
            testimonial_1_text: "Un endroit magnifique pour se détendre et profiter de l'atmosphère de Quba. Tout était confortable et le service excellent.",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "Une atmosphère merveilleuse et un personnel très sympathique. Nous avons beaucoup apprécié notre séjour.",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "Un endroit calme et confortable entouré par la beauté de Quba.",
            testimonial_3_name: "Rashad A.",
            verified_guest: "Client vérifié",

            reservation_label: "RÉSERVATION",
            reservation_title: "Planifiez votre",
            reservation_title_highlight: "séjour",
            reservation_description: "Saisissez les informations suivantes. Une fenêtre de confirmation apparaîtra après l'envoi.",
            reservation_name_label: "Nom et prénom",
            reservation_name_placeholder: "Nom et prénom",
            reservation_phone_label: "Téléphone",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "Type de chambre",
            reservation_room_placeholder: "Choisir une chambre",
            reservation_guest_label: "Nombre de clients",
            guest_1: "1 client",
            guest_2: "2 clients",
            guest_3: "3 clients",
            guest_4: "4 clients",
            guest_5: "5 clients",
            guest_6: "6 clients",
            reservation_checkin_label: "Date d'arrivée",
            reservation_checkin_placeholder: "Choisir la date d'arrivée",
            reservation_checkout_label: "Date de départ",
            reservation_checkout_placeholder: "Choisir la date de départ",
            reservation_submit: "Réserver maintenant",

            reservation_modal_label: "DÉTAILS DE LA RÉSERVATION",
            reservation_confirm_title: "Confirmez vos informations",
            summary_name_label: "Nom et prénom",
            summary_phone_label: "Téléphone",
            summary_room_label: "Type de chambre",
            summary_guests_label: "Clients",
            summary_checkin_label: "Arrivée",
            summary_checkout_label: "Départ",
            reservation_confirm_question: "Souhaitez-vous confirmer votre réservation ?",
            reservation_cancel: "Annuler",
            reservation_confirm: "Confirmer",

            reservation_success_title: "Votre réservation a été confirmée avec succès.",
            reservation_success_text: "Notre équipe vous contactera prochainement. Merci de nous avoir choisis !",
            reservation_home: "Retour à l'accueil",

            contact_label: "CONTACT",
            contact_title: "Contactez",
            contact_title_highlight: "-nous",
            contact_person_label: "Personne à contacter",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Adresse",
            contact_address: "Quba, parc du 28 Mai",
            contact_email_label: "E-mail",

            footer_description: "Confort, tranquillité et séjour inoubliable au cœur de la magnifique nature de Quba.",
            footer_navigation: "Navigation",
            footer_home: "Accueil",
            footer_about: "À propos",
            footer_rooms: "Chambres",
            footer_gallery: "Galerie",
            footer_reservation: "Réservation",
            footer_contact: "Contact",
            footer_address: "Quba, parc du 28 Mai",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",
            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Tous droits réservés.",
            footer_created_by: "Site créé par",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Image précédente",
            next_image: "Image suivante",
            menu: "Menu",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Chambre Twin",
            room_triple_alt: "Chambre Triple",
            room_double_alt: "Chambre Double",
            gallery_modal_alt: "Galerie"
        },


        es: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — una estancia cómoda e inolvidable en Quba.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Inicio",
            nav_about: "Sobre nosotros",
            nav_rooms: "Habitaciones",
            nav_gallery: "Galería",
            nav_reservation: "Reserva",
            nav_contact: "Contacto",

            hero_location: "QUBA • AZERBAIYÁN",
            hero_title: "En el corazón de Quba",
            hero_title_highlight: "comodidad",
            hero_description: "Naturaleza, paisajes montañosos y comodidad en un solo lugar — Park Hotel Quba.",
            hero_book: "Reservar",
            hero_rooms: "Ver habitaciones",

            about_label: "SOBRE NOSOTROS",
            about_title: "En armonía con la",
            about_title_highlight: "naturaleza",
            about_heading: "Una escapada inolvidable en plena naturaleza",
            about_text_1: "Quba es una de las regiones más bellas de Azerbaiyán, conocida por su naturaleza y paisajes.",
            about_text_2: "La región cuenta con una historia antigua y rica, con un papel importante en la historia de Azerbaiyán.",
            about_text_3: "Los huéspedes pueden descubrir los bosques de Qechresh, la cascada de Afurja, Khinalig y otros lugares naturales e históricos.",

            about_feature_mountain: "Paisaje montañoso",
            about_feature_nature: "Naturaleza pura",
            about_feature_quba: "Quba",

            rooms_label: "NUESTRAS HABITACIONES",
            rooms_title: "Elige para tu",
            rooms_title_highlight: "comodidad",

            room_twin_name: "Habitación Twin",
            room_twin_desc: "Habitación Twin luminosa y cómoda con dos camas individuales.",
            room_twin_beds: "2 camas individuales",
            room_triple_name: "Habitación Triple",
            room_triple_desc: "Habitación amplia y cómoda para familias y grupos de amigos.",
            room_triple_beds: "1 cama individual y 1 cama",
            room_double_name: "Habitación Double",
            room_double_desc: "Habitación amplia y cómoda diseñada para una estancia agradable.",
            room_double_beds: "2 camas individuales y 1 cama",

            room_wifi: "Wi-Fi",
            room_view: "Vista al río y a las montañas",

            gallery_label: "GALERÍA",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "OPINIONES DE LOS HUÉSPEDES",
            testimonials_title: "Lo que dicen nuestros huéspedes",
            testimonials_description: "Descubre lo que nuestros huéspedes dicen sobre su estancia en Park Hotel Quba.",
            testimonial_1_text: "Un lugar maravilloso para relajarse y disfrutar del ambiente de Quba. Todo fue cómodo y el servicio excelente.",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "El hotel tiene un ambiente maravilloso y un personal muy amable. Disfrutamos mucho de nuestra estancia.",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "Un lugar tranquilo y cómodo rodeado de la belleza de Quba.",
            testimonial_3_name: "Rashad A.",
            verified_guest: "Huésped verificado",

            reservation_label: "RESERVA",
            reservation_title: "Planifica tu",
            reservation_title_highlight: "estancia",
            reservation_description: "Introduce los siguientes datos. Después de enviar la reserva aparecerá una ventana de confirmación.",
            reservation_name_label: "Nombre y apellido",
            reservation_name_placeholder: "Nombre y apellido",
            reservation_phone_label: "Teléfono",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "Tipo de habitación",
            reservation_room_placeholder: "Selecciona una habitación",
            reservation_guest_label: "Número de huéspedes",
            guest_1: "1 huésped",
            guest_2: "2 huéspedes",
            guest_3: "3 huéspedes",
            guest_4: "4 huéspedes",
            guest_5: "5 huéspedes",
            guest_6: "6 huéspedes",
            reservation_checkin_label: "Fecha de entrada",
            reservation_checkin_placeholder: "Selecciona la fecha de entrada",
            reservation_checkout_label: "Fecha de salida",
            reservation_checkout_placeholder: "Selecciona la fecha de salida",
            reservation_submit: "Reservar ahora",

            reservation_modal_label: "DATOS DE LA RESERVA",
            reservation_confirm_title: "Confirma tus datos",
            summary_name_label: "Nombre y apellido",
            summary_phone_label: "Teléfono",
            summary_room_label: "Tipo de habitación",
            summary_guests_label: "Huéspedes",
            summary_checkin_label: "Entrada",
            summary_checkout_label: "Salida",
            reservation_confirm_question: "¿Quieres confirmar tu reserva?",
            reservation_cancel: "Cancelar",
            reservation_confirm: "Confirmar",

            reservation_success_title: "Tu reserva ha sido confirmada correctamente.",
            reservation_success_text: "Nuestro equipo se pondrá en contacto contigo pronto. ¡Gracias por elegirnos!",
            reservation_home: "Volver al inicio",

            contact_label: "CONTACTO",
            contact_title: "Ponte",
            contact_title_highlight: "en contacto",
            contact_person_label: "Persona de contacto",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Dirección",
            contact_address: "Quba, parque 28 de Mayo",
            contact_email_label: "E-mail",

            footer_description: "Comodidad, tranquilidad y una estancia inolvidable rodeada de la hermosa naturaleza de Quba.",
            footer_navigation: "Navegación",
            footer_home: "Inicio",
            footer_about: "Sobre nosotros",
            footer_rooms: "Habitaciones",
            footer_gallery: "Galería",
            footer_reservation: "Reserva",
            footer_contact: "Contacto",
            footer_address: "Quba, parque 28 de Mayo",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",
            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Todos los derechos reservados.",
            footer_created_by: "Sitio creado por",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Imagen anterior",
            next_image: "Imagen siguiente",
            menu: "Menú",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Habitación Twin",
            room_triple_alt: "Habitación Triple",
            room_double_alt: "Habitación Double",
            gallery_modal_alt: "Galería"
        },


        /* =====================================================
           ITALIAN
        ===================================================== */

        it: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — un soggiorno confortevole e indimenticabile a Quba.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Home",
            nav_about: "Chi siamo",
            nav_rooms: "Camere",
            nav_gallery: "Galleria",
            nav_reservation: "Prenotazione",
            nav_contact: "Contatti",

            hero_location: "QUBA • AZERBAIGIAN",
            hero_title: "Nel cuore di Quba",
            hero_title_highlight: "comfort",
            hero_description: "Natura, montagne e comfort in un unico luogo — Park Hotel Quba.",
            hero_book: "Prenota ora",
            hero_rooms: "Scopri le camere",

            about_label: "CHI SIAMO",
            about_title: "In armonia con la",
            about_title_highlight: "natura",
            about_heading: "Una vacanza indimenticabile immersi nella natura",
            about_text_1: "Quba è una delle regioni più belle dell'Azerbaigian, famosa per la sua natura e i suoi paesaggi.",
            about_text_2: "La regione possiede una storia antica e importante.",
            about_text_3: "Gli ospiti possono visitare le foreste di Qechresh, la cascata Afurja, Khinalig e altre attrazioni.",

            about_feature_mountain: "Paesaggio montano",
            about_feature_nature: "Natura incontaminata",
            about_feature_quba: "Quba",

            rooms_label: "LE NOSTRE CAMERE",
            rooms_title: "Scegli il tuo",
            rooms_title_highlight: "comfort",

            room_twin_name: "Camera Twin",
            room_twin_desc: "Camera Twin luminosa e confortevole con due letti singoli.",
            room_twin_beds: "2 letti singoli",
            room_triple_name: "Camera Triple",
            room_triple_desc: "Camera spaziosa e confortevole per famiglie e gruppi.",
            room_triple_beds: "1 letto singolo e 1 letto",
            room_double_name: "Camera Double",
            room_double_desc: "Camera spaziosa e confortevole per un soggiorno piacevole.",
            room_double_beds: "2 letti singoli e 1 letto",

            room_wifi: "Wi-Fi",
            room_view: "Vista sul fiume e sulle montagne",

            gallery_label: "GALLERIA",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "RECENSIONI DEGLI OSPITI",
            testimonials_title: "Cosa dicono i nostri ospiti",
            testimonials_description: "Scopri cosa dicono i nostri ospiti del loro soggiorno al Park Hotel Quba.",
            testimonial_1_text: "Un posto meraviglioso per rilassarsi e godersi l'atmosfera di Quba. Tutto era confortevole e il servizio eccellente.",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "L'hotel ha un'atmosfera fantastica e personale molto cordiale. Abbiamo apprezzato molto il nostro soggiorno.",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "Un luogo tranquillo e confortevole circondato dalla bellezza di Quba.",
            testimonial_3_name: "Rashad A.",
            verified_guest: "Ospite verificato",

            reservation_label: "PRENOTAZIONE",
            reservation_title: "Pianifica il tuo",
            reservation_title_highlight: "soggiorno",
            reservation_description: "Inserisci i dati richiesti. Dopo l'invio apparirà una finestra di conferma.",
            reservation_name_label: "Nome e cognome",
            reservation_name_placeholder: "Nome e cognome",
            reservation_phone_label: "Telefono",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "Tipo di camera",
            reservation_room_placeholder: "Seleziona una camera",
            reservation_guest_label: "Numero di ospiti",
            guest_1: "1 ospite",
            guest_2: "2 ospiti",
            guest_3: "3 ospiti",
            guest_4: "4 ospiti",
            guest_5: "5 ospiti",
            guest_6: "6 ospiti",
            reservation_checkin_label: "Data di arrivo",
            reservation_checkin_placeholder: "Seleziona la data di arrivo",
            reservation_checkout_label: "Data di partenza",
            reservation_checkout_placeholder: "Seleziona la data di partenza",
            reservation_submit: "Prenota ora",

            reservation_modal_label: "DATI DELLA PRENOTAZIONE",
            reservation_confirm_title: "Conferma i tuoi dati",
            summary_name_label: "Nome e cognome",
            summary_phone_label: "Telefono",
            summary_room_label: "Tipo di camera",
            summary_guests_label: "Ospiti",
            summary_checkin_label: "Arrivo",
            summary_checkout_label: "Partenza",
            reservation_confirm_question: "Vuoi confermare la prenotazione?",
            reservation_cancel: "Annulla",
            reservation_confirm: "Conferma",

            reservation_success_title: "La tua prenotazione è stata confermata con successo.",
            reservation_success_text: "Il nostro staff ti contatterà presto. Grazie per averci scelto!",
            reservation_home: "Torna alla home",

            contact_label: "CONTATTI",
            contact_title: "Mettiti",
            contact_title_highlight: "in contatto",
            contact_person_label: "Persona di contatto",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Indirizzo",
            contact_address: "Quba, Parco 28 Maggio",
            contact_email_label: "E-mail",

            footer_description: "Comfort, tranquillità e un soggiorno indimenticabile nella splendida natura di Quba.",
            footer_navigation: "Navigazione",
            footer_home: "Home",
            footer_about: "Chi siamo",
            footer_rooms: "Camere",
            footer_gallery: "Galleria",
            footer_reservation: "Prenotazione",
            footer_contact: "Contatti",
            footer_address: "Quba, Parco 28 Maggio",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",
            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Tutti i diritti riservati.",
            footer_created_by: "Sito creato da",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Immagine precedente",
            next_image: "Immagine successiva",
            menu: "Menu",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Quba",
            room_twin_alt: "Camera Twin",
            room_triple_alt: "Camera Triple",
            room_double_alt: "Camera Double",
            gallery_modal_alt: "Galleria"
        },


        /* =====================================================
           ARABIC
        ===================================================== */

        ar: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — إقامة مريحة ولا تُنسى في قوبا.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_rooms: "الغرف",
            nav_gallery: "المعرض",
            nav_reservation: "الحجز",
            nav_contact: "اتصل بنا",

            hero_location: "قوبا • أذربيجان",
            hero_title: "في قلب قوبا",
            hero_title_highlight: "الراحة",
            hero_description: "الطبيعة الجميلة والمناظر الجبلية والراحة في مكان واحد — Park Hotel Quba.",
            hero_book: "احجز الآن",
            hero_rooms: "شاهد الغرف",

            about_label: "من نحن",
            about_title: "في انسجام مع",
            about_title_highlight: "الطبيعة",
            about_heading: "عطلة لا تُنسى وسط الطبيعة",
            about_text_1: "قوبا واحدة من أجمل مناطق أذربيجان وتتميز بطبيعتها الغنية ومناظرها الجبلية الرائعة.",
            about_text_2: "تتمتع المنطقة بتاريخ عريق، ولها مكانة مهمة في تاريخ أذربيجان.",
            about_text_3: "يمكن للضيوف زيارة غابات قچرش وشلال أفورجا وقرية خيناليق وغيرها من المعالم.",

            about_feature_mountain: "منظر جبلي",
            about_feature_nature: "طبيعة نقية",
            about_feature_quba: "قوبا",

            rooms_label: "غرفنا",
            rooms_title: "اختر ما يناسب",
            rooms_title_highlight: "راحتك",

            room_twin_name: "غرفة Twin",
            room_twin_desc: "غرفة مشرقة ومريحة مجهزة بسريرين منفصلين.",
            room_twin_beds: "سريران منفصلان",

            room_triple_name: "غرفة Triple",
            room_triple_desc: "غرفة واسعة ومريحة للعائلات ومجموعات الأصدقاء.",
            room_triple_beds: "سرير منفصل وسرير",

            room_double_name: "غرفة Double",
            room_double_desc: "غرفة واسعة ومريحة لإقامة ممتعة.",
            room_double_beds: "سريران منفصلان وسرير",

            room_wifi: "واي فاي",
            room_view: "إطلالة على النهر والجبال",

            gallery_label: "المعرض",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "آراء الضيوف",
            testimonials_title: "ماذا يقول ضيوفنا؟",
            testimonials_description: "اكتشف آراء ضيوفنا حول إقامتهم في Park Hotel Quba.",

            testimonial_1_text: "مكان رائع للاسترخاء والاستمتاع بأجواء قوبا الجميلة. كل شيء كان مريحاً والخدمة ممتازة.",
            testimonial_1_name: "علي م.",
            testimonial_2_text: "أجواء الفندق رائعة والموظفون ودودون جداً. استمتعنا بإقامتنا وسنعود بالتأكيد.",
            testimonial_2_name: "إيما ك.",
            testimonial_3_text: "مكان هادئ ومريح تحيط به جمال قوبا.",
            testimonial_3_name: "رشاد أ.",

            verified_guest: "ضيف موثّق",

            reservation_label: "الحجز",
            reservation_title: "خطط لـ",
            reservation_title_highlight: "إقامتك الآن",
            reservation_description: "أدخل المعلومات التالية. بعد إرسال الحجز ستظهر نافذة لتأكيد المعلومات.",

            reservation_name_label: "الاسم الكامل",
            reservation_name_placeholder: "الاسم الكامل",
            reservation_phone_label: "الهاتف",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "نوع الغرفة",
            reservation_room_placeholder: "اختر غرفة",
            reservation_guest_label: "عدد الضيوف",

            guest_1: "ضيف واحد",
            guest_2: "ضيفان",
            guest_3: "3 ضيوف",
            guest_4: "4 ضيوف",
            guest_5: "5 ضيوف",
            guest_6: "6 ضيوف",

            reservation_checkin_label: "تاريخ الوصول",
            reservation_checkin_placeholder: "اختر تاريخ الوصول",
            reservation_checkout_label: "تاريخ المغادرة",
            reservation_checkout_placeholder: "اختر تاريخ المغادرة",
            reservation_submit: "احجز الآن",

            reservation_modal_label: "بيانات الحجز",
            reservation_confirm_title: "تأكيد المعلومات",

            summary_name_label: "الاسم الكامل",
            summary_phone_label: "الهاتف",
            summary_room_label: "نوع الغرفة",
            summary_guests_label: "الضيوف",
            summary_checkin_label: "الوصول",
            summary_checkout_label: "المغادرة",

            reservation_confirm_question: "هل تريد تأكيد الحجز؟",
            reservation_cancel: "إلغاء",
            reservation_confirm: "تأكيد",

            reservation_success_title: "تم تأكيد حجزك بنجاح.",
            reservation_success_text: "سيتواصل معك موظفونا قريباً. شكراً لاختياركم لنا!",
            reservation_home: "العودة للرئيسية",

            contact_label: "اتصل بنا",
            contact_title: "تواصل",
            contact_title_highlight: "معنا",

            contact_person_label: "جهة الاتصال",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "العنوان",
            contact_address: "قوبا، حديقة 28 مايو",
            contact_email_label: "البريد الإلكتروني",

            footer_description: "راحة وهدوء وإقامة لا تُنسى وسط طبيعة قوبا الجميلة.",
            footer_navigation: "التنقل",
            footer_home: "الرئيسية",
            footer_about: "من نحن",
            footer_rooms: "الغرف",
            footer_gallery: "المعرض",
            footer_reservation: "الحجز",
            footer_contact: "اتصل بنا",
            footer_address: "قوبا، حديقة 28 مايو",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "واتساب",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "جميع الحقوق محفوظة.",
            footer_created_by: "تم إنشاء الموقع بواسطة",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "الصورة السابقة",
            next_image: "الصورة التالية",
            menu: "القائمة",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "قوبا",
            room_twin_alt: "غرفة Twin",
            room_triple_alt: "غرفة Triple",
            room_double_alt: "غرفة Double",
            gallery_modal_alt: "المعرض"
        },


        /* =====================================================
           PERSIAN
        ===================================================== */

        fa: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — اقامتی راحت و فراموش‌نشدنی در قوبا.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "صفحه اصلی",
            nav_about: "درباره ما",
            nav_rooms: "اتاق‌ها",
            nav_gallery: "گالری",
            nav_reservation: "رزرو",
            nav_contact: "تماس با ما",

            hero_location: "قوبا • آذربایجان",
            hero_title: "در قلب قوبا",
            hero_title_highlight: "آرامش",
            hero_description: "طبیعت زیبا، مناظر کوهستانی و آرامش در یک مکان — Park Hotel Quba.",
            hero_book: "رزرو کنید",
            hero_rooms: "مشاهده اتاق‌ها",

            about_label: "درباره ما",
            about_title: "هماهنگ با",
            about_title_highlight: "طبیعت",
            about_heading: "اقامتی فراموش‌نشدنی در دل طبیعت",
            about_text_1: "قوبا یکی از زیباترین مناطق آذربایجان با طبیعتی غنی و مناظر کوهستانی زیباست.",
            about_text_2: "این منطقه دارای تاریخی کهن و جایگاهی مهم در تاریخ آذربایجان است.",
            about_text_3: "مهمانان می‌توانند جنگل‌های قچرش، آبشار آفورجا، روستای خینالیق و جاذبه‌های دیگر را کشف کنند.",

            about_feature_mountain: "منظره کوهستانی",
            about_feature_nature: "طبیعت پاک",
            about_feature_quba: "قوبا",

            rooms_label: "اتاق‌های ما",
            rooms_title: "برای",
            rooms_title_highlight: "آرامش خود انتخاب کنید",

            room_twin_name: "اتاق Twin",
            room_twin_desc: "اتاقی روشن و راحت با دو تخت یک‌نفره.",
            room_twin_beds: "۲ تخت یک‌نفره",

            room_triple_name: "اتاق Triple",
            room_triple_desc: "اتاقی بزرگ و راحت برای خانواده‌ها و گروه‌های دوستان.",
            room_triple_beds: "۱ تخت یک‌نفره و ۱ تخت",

            room_double_name: "اتاق Double",
            room_double_desc: "اتاقی بزرگ و راحت برای اقامتی دلپذیر.",
            room_double_beds: "۲ تخت یک‌نفره و ۱ تخت",

            room_wifi: "Wi-Fi",
            room_view: "نمای رودخانه و کوهستان",

            gallery_label: "گالری",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "نظرات مهمانان",
            testimonials_title: "مهمانان ما چه می‌گویند؟",
            testimonials_description: "نظرات مهمانان درباره اقامت در Park Hotel Quba را ببینید.",

            testimonial_1_text: "مکانی عالی برای استراحت و لذت بردن از فضای زیبای قوبا. همه چیز راحت بود و خدمات عالی بود.",
            testimonial_1_name: "علی م.",
            testimonial_2_text: "فضای هتل بسیار زیبا و کارکنان بسیار دوستانه هستند. اقامت ما بسیار لذت‌بخش بود.",
            testimonial_2_name: "اما ک.",
            testimonial_3_text: "مکانی آرام و راحت که با زیبایی‌های قوبا احاطه شده است.",
            testimonial_3_name: "رشاد ا.",

            verified_guest: "مهمان تأییدشده",

            reservation_label: "رزرو",
            reservation_title: "اقامت خود را",
            reservation_title_highlight: "همین حالا برنامه‌ریزی کنید",
            reservation_description: "اطلاعات زیر را وارد کنید. پس از ارسال رزرو، پنجره تأیید اطلاعات نمایش داده می‌شود.",

            reservation_name_label: "نام و نام خانوادگی",
            reservation_name_placeholder: "نام و نام خانوادگی",
            reservation_phone_label: "تلفن",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "نوع اتاق",
            reservation_room_placeholder: "اتاق را انتخاب کنید",
            reservation_guest_label: "تعداد مهمانان",

            guest_1: "۱ مهمان",
            guest_2: "۲ مهمان",
            guest_3: "۳ مهمان",
            guest_4: "۴ مهمان",
            guest_5: "۵ مهمان",
            guest_6: "۶ مهمان",

            reservation_checkin_label: "تاریخ ورود",
            reservation_checkin_placeholder: "تاریخ ورود را انتخاب کنید",
            reservation_checkout_label: "تاریخ خروج",
            reservation_checkout_placeholder: "تاریخ خروج را انتخاب کنید",
            reservation_submit: "رزرو کنید",

            reservation_modal_label: "اطلاعات رزرو",
            reservation_confirm_title: "اطلاعات را تأیید کنید",

            summary_name_label: "نام و نام خانوادگی",
            summary_phone_label: "تلفن",
            summary_room_label: "نوع اتاق",
            summary_guests_label: "مهمانان",
            summary_checkin_label: "ورود",
            summary_checkout_label: "خروج",

            reservation_confirm_question: "آیا می‌خواهید رزرو را تأیید کنید؟",
            reservation_cancel: "لغو",
            reservation_confirm: "تأیید",

            reservation_success_title: "رزرو شما با موفقیت تأیید شد.",
            reservation_success_text: "کارکنان ما به‌زودی با شما تماس خواهند گرفت. از انتخاب شما سپاسگزاریم!",
            reservation_home: "بازگشت به صفحه اصلی",

            contact_label: "تماس",
            contact_title: "با ما",
            contact_title_highlight: "تماس بگیرید",

            contact_person_label: "شخص تماس",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "آدرس",
            contact_address: "قوبا، پارک ۲۸ می",
            contact_email_label: "ایمیل",

            footer_description: "آرامش، راحتی و اقامتی فراموش‌نشدنی در طبیعت زیبای قوبا.",
            footer_navigation: "ناوبری",
            footer_home: "صفحه اصلی",
            footer_about: "درباره ما",
            footer_rooms: "اتاق‌ها",
            footer_gallery: "گالری",
            footer_reservation: "رزرو",
            footer_contact: "تماس",
            footer_address: "قوبا، پارک ۲۸ می",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "تمام حقوق محفوظ است.",
            footer_created_by: "طراحی سایت توسط",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "تصویر قبلی",
            next_image: "تصویر بعدی",
            menu: "منو",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "قوبا",
            room_twin_alt: "اتاق Twin",
            room_triple_alt: "اتاق Triple",
            room_double_alt: "اتاق Double",
            gallery_modal_alt: "گالری"
        },


        /* =====================================================
           GEORGIAN
        ===================================================== */

        ka: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — კომფორტული და დაუვიწყარი დასვენება გუბაში.",

            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "მთავარი",
            nav_about: "ჩვენ შესახებ",
            nav_rooms: "ოთახები",
            nav_gallery: "გალერეა",
            nav_reservation: "დაჯავშნა",
            nav_contact: "კონტაქტი",

            hero_location: "გუბა • აზერბაიჯანი",
            hero_title: "გუბას გულში",
            hero_title_highlight: "კომფორტი",
            hero_description: "ბუნება, მთის ხედები და კომფორტი ერთ სივრცეში — Park Hotel Quba.",
            hero_book: "დაჯავშნა",
            hero_rooms: "ოთახების ნახვა",

            about_label: "ჩვენ შესახებ",
            about_title: "ბუნებასთან",
            about_title_highlight: "ჰარმონიაში",
            about_heading: "დაუვიწყარი დასვენება ბუნების გარემოცვაში",
            about_text_1: "გუბა აზერბაიჯანის ერთ-ერთი ულამაზესი რეგიონია, რომელიც მდიდარი ბუნებითა და მთის პეიზაჟებით გამოირჩევა.",
            about_text_2: "რეგიონს უძველესი და მდიდარი ისტორია აქვს.",
            about_text_3: "სტუმრებს შეუძლიათ მოინახულონ გეჩრეშის ტყეები, აფურჯას ჩანჩქერი, ხინალიგი და სხვა ღირსშესანიშნაობები.",

            about_feature_mountain: "მთის ხედი",
            about_feature_nature: "სუფთა ბუნება",
            about_feature_quba: "გუბა",

            rooms_label: "ჩვენი ოთახები",
            rooms_title: "აირჩიეთ თქვენი",
            rooms_title_highlight: "კომფორტისთვის",

            room_twin_name: "Twin ოთახი",
            room_twin_desc: "ნათელი და კომფორტული ოთახი ორი ერთადგილიანი საწოლით.",
            room_twin_beds: "2 ერთადგილიანი საწოლი",

            room_triple_name: "Triple ოთახი",
            room_triple_desc: "ფართო და კომფორტული ოთახი ოჯახებისა და მეგობრების ჯგუფებისთვის.",
            room_triple_beds: "1 ერთადგილიანი საწოლი და 1 საწოლი",

            room_double_name: "Double ოთახი",
            room_double_desc: "ფართო და კომფორტული ოთახი სასიამოვნო დასვენებისთვის.",
            room_double_beds: "2 ერთადგილიანი საწოლი და 1 საწოლი",

            room_wifi: "Wi-Fi",
            room_view: "მდინარისა და მთების ხედი",

            gallery_label: "გალერეა",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "სტუმრების შეფასებები",
            testimonials_title: "რას ამბობენ ჩვენი სტუმრები",
            testimonials_description: "გაიგეთ რას ამბობენ ჩვენი სტუმრები Park Hotel Quba-ში ყოფნის შესახებ.",

            testimonial_1_text: "შესანიშნავი ადგილია დასასვენებლად და გუბას ულამაზესი ატმოსფეროსთვის. ყველაფერი კომფორტული იყო.",
            testimonial_1_name: "ალი მ.",
            testimonial_2_text: "სასტუმროს შესანიშნავი ატმოსფერო და ძალიან მეგობრული პერსონალი ჰყავს.",
            testimonial_2_name: "ემა კ.",
            testimonial_3_text: "მშვიდი და კომფორტული ადგილი გუბას ბუნების გარემოცვაში.",
            testimonial_3_name: "რაშად ა.",

            verified_guest: "დადასტურებული სტუმარი",

            reservation_label: "დაჯავშნა",
            reservation_title: "დაგეგმეთ თქვენი",
            reservation_title_highlight: "დასვენება",
            reservation_description: "შეიყვანეთ საჭირო ინფორმაცია. გაგზავნის შემდეგ გამოჩნდება დადასტურების ფანჯარა.",

            reservation_name_label: "სახელი და გვარი",
            reservation_name_placeholder: "სახელი და გვარი",
            reservation_phone_label: "ტელეფონი",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "ოთახის ტიპი",
            reservation_room_placeholder: "აირჩიეთ ოთახი",
            reservation_guest_label: "სტუმრების რაოდენობა",

            guest_1: "1 სტუმარი",
            guest_2: "2 სტუმარი",
            guest_3: "3 სტუმარი",
            guest_4: "4 სტუმარი",
            guest_5: "5 სტუმარი",
            guest_6: "6 სტუმარი",

            reservation_checkin_label: "ჩასვლის თარიღი",
            reservation_checkin_placeholder: "აირჩიეთ ჩასვლის თარიღი",
            reservation_checkout_label: "გასვლის თარიღი",
            reservation_checkout_placeholder: "აირჩიეთ გასვლის თარიღი",
            reservation_submit: "დაჯავშნა",

            reservation_modal_label: "დაჯავშნის ინფორმაცია",
            reservation_confirm_title: "დაადასტურეთ ინფორმაცია",

            summary_name_label: "სახელი და გვარი",
            summary_phone_label: "ტელეფონი",
            summary_room_label: "ოთახის ტიპი",
            summary_guests_label: "სტუმრები",
            summary_checkin_label: "ჩასვლა",
            summary_checkout_label: "გასვლა",

            reservation_confirm_question: "გსურთ დაჯავშნის დადასტურება?",
            reservation_cancel: "გაუქმება",
            reservation_confirm: "დადასტურება",

            reservation_success_title: "თქვენი ჯავშანი წარმატებით დადასტურდა.",
            reservation_success_text: "ჩვენი თანამშრომლები მალე დაგიკავშირდებიან. გმადლობთ, რომ აგვირჩიეთ!",
            reservation_home: "მთავარზე დაბრუნება",

            contact_label: "კონტაქტი",
            contact_title: "დაგვიკავშირდით",
            contact_title_highlight: "ჩვენს გუნდს",
            contact_person_label: "საკონტაქტო პირი",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "მისამართი",
            contact_address: "გუბა, 28 მაისის პარკი",
            contact_email_label: "ელ-ფოსტა",

            footer_description: "კომფორტი, სიმშვიდე და დაუვიწყარი დასვენება გუბას ულამაზეს ბუნებაში.",
            footer_navigation: "ნავიგაცია",
            footer_home: "მთავარი",
            footer_about: "ჩვენ შესახებ",
            footer_rooms: "ოთახები",
            footer_gallery: "გალერეა",
            footer_reservation: "დაჯავშნა",
            footer_contact: "კონტაქტი",
            footer_address: "გუბა, 28 მაისის პარკი",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "ყველა უფლება დაცულია.",
            footer_created_by: "საიტი შექმნილია",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: "მიერ.",

            previous_image: "წინა სურათი",
            next_image: "შემდეგი სურათი",
            menu: "მენიუ",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "გუბა",
            room_twin_alt: "Twin ოთახი",
            room_triple_alt: "Triple ოთახი",
            room_double_alt: "Double ოთახი",
            gallery_modal_alt: "გალერეა"
        },


        /* =====================================================
           UKRAINIAN
        ===================================================== */

        uk: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — комфортний та незабутній відпочинок у Кубі.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "Головна",
            nav_about: "Про нас",
            nav_rooms: "Номери",
            nav_gallery: "Галерея",
            nav_reservation: "Бронювання",
            nav_contact: "Контакти",

            hero_location: "КУБА • АЗЕРБАЙДЖАН",
            hero_title: "У самому серці Куби",
            hero_title_highlight: "комфорт",
            hero_description: "Природа, гірські пейзажі та комфорт в одному місці — Park Hotel Quba.",
            hero_book: "Забронювати",
            hero_rooms: "Переглянути номери",

            about_label: "ПРО НАС",
            about_title: "У гармонії з",
            about_title_highlight: "природою",
            about_heading: "Незабутній відпочинок серед природи",
            about_text_1: "Куба — один із найкрасивіших регіонів Азербайджану, відомий своєю природою та гірськими краєвидами.",
            about_text_2: "Регіон має давню та багату історію.",
            about_text_3: "Гості можуть відвідати ліси Гечреш, водоспад Афурджа, село Хиналиг та інші пам'ятки.",

            about_feature_mountain: "Гірський краєвид",
            about_feature_nature: "Чиста природа",
            about_feature_quba: "Куба",

            rooms_label: "НАШІ НОМЕРИ",
            rooms_title: "Оберіть для свого",
            rooms_title_highlight: "комфорту",

            room_twin_name: "Twin номер",
            room_twin_desc: "Світлий і затишний номер із двома односпальними ліжками.",
            room_twin_beds: "2 односпальні ліжка",

            room_triple_name: "Triple номер",
            room_triple_desc: "Просторий та комфортний номер для сімей і друзів.",
            room_triple_beds: "1 односпальне ліжко та 1 ліжко",

            room_double_name: "Double номер",
            room_double_desc: "Просторий і комфортний номер для приємного відпочинку.",
            room_double_beds: "2 односпальні ліжка та 1 ліжко",

            room_wifi: "Wi-Fi",
            room_view: "Вид на річку та гори",

            gallery_label: "ГАЛЕРЕЯ",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "ВІДГУКИ ГОСТЕЙ",
            testimonials_title: "Що кажуть наші гості",
            testimonials_description: "Дізнайтеся, що наші гості говорять про перебування в Park Hotel Quba.",

            testimonial_1_text: "Чудове місце для відпочинку та насолоди атмосферою Куби. Все було комфортно, а сервіс чудовий.",
            testimonial_1_name: "Алі М.",
            testimonial_2_text: "У готелі чудова атмосфера та дуже привітний персонал. Нам дуже сподобалося.",
            testimonial_2_name: "Емма К.",
            testimonial_3_text: "Тихе та комфортне місце, оточене красою Куби.",
            testimonial_3_name: "Рашад А.",

            verified_guest: "Перевірений гість",

            reservation_label: "БРОНЮВАННЯ",
            reservation_title: "Плануйте свій",
            reservation_title_highlight: "відпочинок",
            reservation_description: "Введіть необхідні дані. Після надсилання відкриється вікно підтвердження.",

            reservation_name_label: "Ім'я та прізвище",
            reservation_name_placeholder: "Ім'я та прізвище",
            reservation_phone_label: "Телефон",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "Тип номера",
            reservation_room_placeholder: "Оберіть номер",
            reservation_guest_label: "Кількість гостей",

            guest_1: "1 гість",
            guest_2: "2 гості",
            guest_3: "3 гості",
            guest_4: "4 гості",
            guest_5: "5 гостей",
            guest_6: "6 гостей",

            reservation_checkin_label: "Дата заїзду",
            reservation_checkin_placeholder: "Оберіть дату заїзду",
            reservation_checkout_label: "Дата виїзду",
            reservation_checkout_placeholder: "Оберіть дату виїзду",
            reservation_submit: "Забронювати зараз",

            reservation_modal_label: "ДАНІ БРОНЮВАННЯ",
            reservation_confirm_title: "Підтвердьте дані",

            summary_name_label: "Ім'я та прізвище",
            summary_phone_label: "Телефон",
            summary_room_label: "Тип номера",
            summary_guests_label: "Гості",
            summary_checkin_label: "Заїзд",
            summary_checkout_label: "Виїзд",

            reservation_confirm_question: "Ви хочете підтвердити бронювання?",
            reservation_cancel: "Скасувати",
            reservation_confirm: "Підтвердити",

            reservation_success_title: "Ваше бронювання успішно підтверджено.",
            reservation_success_text: "Наші співробітники зв'яжуться з вами найближчим часом. Дякуємо!",
            reservation_home: "Повернутися на головну",

            contact_label: "КОНТАКТИ",
            contact_title: "Зв'яжіться",
            contact_title_highlight: "з нами",
            contact_person_label: "Контактна особа",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "Адреса",
            contact_address: "Куба, парк 28 Травня",
            contact_email_label: "E-mail",

            footer_description: "Комфорт, спокій та незабутній відпочинок серед прекрасної природи Куби.",
            footer_navigation: "Навігація",
            footer_home: "Головна",
            footer_about: "Про нас",
            footer_rooms: "Номери",
            footer_gallery: "Галерея",
            footer_reservation: "Бронювання",
            footer_contact: "Контакти",
            footer_address: "Куба, парк 28 Травня",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "Усі права захищено.",
            footer_created_by: "Сайт створено",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "Попереднє зображення",
            next_image: "Наступне зображення",
            menu: "Меню",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "Куба",
            room_twin_alt: "Twin номер",
            room_triple_alt: "Triple номер",
            room_double_alt: "Double номер",
            gallery_modal_alt: "Галерея"
        },


        /* =====================================================
           CHINESE
        ===================================================== */

        zh: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — 在库巴享受舒适而难忘的住宿体验。",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "首页",
            nav_about: "关于我们",
            nav_rooms: "客房",
            nav_gallery: "图库",
            nav_reservation: "预订",
            nav_contact: "联系我们",

            hero_location: "库巴 • 阿塞拜疆",
            hero_title: "位于库巴中心",
            hero_title_highlight: "舒适",
            hero_description: "自然美景、山景与舒适住宿尽在一处 — Park Hotel Quba。",
            hero_book: "立即预订",
            hero_rooms: "查看客房",

            about_label: "关于我们",
            about_title: "与大自然",
            about_title_highlight: "和谐相处",
            about_heading: "沉浸自然的难忘假期",
            about_text_1: "库巴是阿塞拜疆最美丽的地区之一，以丰富的自然景观和壮丽的山景而闻名。",
            about_text_2: "这里拥有悠久而丰富的历史。",
            about_text_3: "客人可以探索盖奇雷什森林、阿福尔贾瀑布、希纳里格村以及其他自然和历史景点。",

            about_feature_mountain: "山景",
            about_feature_nature: "纯净自然",
            about_feature_quba: "库巴",

            rooms_label: "我们的客房",
            rooms_title: "选择您的",
            rooms_title_highlight: "舒适空间",

            room_twin_name: "双床房",
            room_twin_desc: "明亮舒适的客房，配有两张单人床。",
            room_twin_beds: "2张单人床",

            room_triple_name: "三人房",
            room_triple_desc: "宽敞舒适，适合家庭和朋友团体。",
            room_triple_beds: "1张单人床和1张床",

            room_double_name: "双人房",
            room_double_desc: "宽敞舒适，为愉快的住宿体验而设计。",
            room_double_beds: "2张单人床和1张床",

            room_wifi: "Wi-Fi",
            room_view: "河景和山景",

            gallery_label: "图库",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "宾客评价",
            testimonials_title: "我们的客人怎么说",
            testimonials_description: "了解客人对 Park Hotel Quba 住宿体验的评价。",
            testimonial_1_text: "这里是放松和享受库巴美丽氛围的好地方。一切都很舒适，服务也非常出色。",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "酒店氛围非常好，员工也非常友善。我们非常享受这次住宿。",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "一个安静舒适的地方，被库巴的美丽景色环绕。",
            testimonial_3_name: "Rashad A.",

            verified_guest: "已验证宾客",

            reservation_label: "预订",
            reservation_title: "现在计划您的",
            reservation_title_highlight: "住宿",
            reservation_description: "请输入以下信息。提交预订后将出现确认窗口。",

            reservation_name_label: "姓名",
            reservation_name_placeholder: "姓名",
            reservation_phone_label: "电话",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "客房类型",
            reservation_room_placeholder: "选择客房",
            reservation_guest_label: "宾客人数",

            guest_1: "1位宾客",
            guest_2: "2位宾客",
            guest_3: "3位宾客",
            guest_4: "4位宾客",
            guest_5: "5位宾客",
            guest_6: "6位宾客",

            reservation_checkin_label: "入住日期",
            reservation_checkin_placeholder: "选择入住日期",
            reservation_checkout_label: "退房日期",
            reservation_checkout_placeholder: "选择退房日期",
            reservation_submit: "立即预订",

            reservation_modal_label: "预订信息",
            reservation_confirm_title: "确认信息",

            summary_name_label: "姓名",
            summary_phone_label: "电话",
            summary_room_label: "客房类型",
            summary_guests_label: "宾客",
            summary_checkin_label: "入住",
            summary_checkout_label: "退房",

            reservation_confirm_question: "您要确认预订吗？",
            reservation_cancel: "取消",
            reservation_confirm: "确认",

            reservation_success_title: "您的预订已成功确认。",
            reservation_success_text: "我们的工作人员将尽快与您联系。感谢您的选择！",
            reservation_home: "返回首页",

            contact_label: "联系我们",
            contact_title: "与我们",
            contact_title_highlight: "联系",
            contact_person_label: "联系人",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "地址",
            contact_address: "库巴，5月28日公园",
            contact_email_label: "电子邮箱",

            footer_description: "在库巴美丽的自然环境中享受舒适、宁静和难忘的住宿体验。",
            footer_navigation: "导航",
            footer_home: "首页",
            footer_about: "关于我们",
            footer_rooms: "客房",
            footer_gallery: "图库",
            footer_reservation: "预订",
            footer_contact: "联系我们",
            footer_address: "库巴，5月28日公园",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "版权所有。",
            footer_created_by: "网站制作",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: "。",

            previous_image: "上一张图片",
            next_image: "下一张图片",
            menu: "菜单",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "库巴",
            room_twin_alt: "双床房",
            room_triple_alt: "三人房",
            room_double_alt: "双人房",
            gallery_modal_alt: "图库"
        },


        /* =====================================================
           JAPANESE
        ===================================================== */

        ja: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — クバで快適で忘れられない滞在を。",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "ホーム",
            nav_about: "私たちについて",
            nav_rooms: "客室",
            nav_gallery: "ギャラリー",
            nav_reservation: "予約",
            nav_contact: "お問い合わせ",

            hero_location: "クバ • アゼルバイジャン",
            hero_title: "クバの中心で",
            hero_title_highlight: "快適さ",
            hero_description: "自然、山々の景色、快適な滞在をひとつの場所で — Park Hotel Quba。",
            hero_book: "予約する",
            hero_rooms: "客室を見る",

            about_label: "私たちについて",
            about_title: "自然との",
            about_title_highlight: "調和",
            about_heading: "自然に囲まれた忘れられない休暇",
            about_text_1: "クバはアゼルバイジャンで最も美しい地域のひとつで、豊かな自然と美しい山々で知られています。",
            about_text_2: "この地域には長く豊かな歴史があります。",
            about_text_3: "ゲストはゲチレシュの森、アフルジャ滝、ヒナルグ村などを訪れることができます。",

            about_feature_mountain: "山の景色",
            about_feature_nature: "美しい自然",
            about_feature_quba: "クバ",

            rooms_label: "客室",
            rooms_title: "あなたのための",
            rooms_title_highlight: "快適な空間",

            room_twin_name: "ツインルーム",
            room_twin_desc: "シングルベッド2台を備えた明るく快適な客室です。",
            room_twin_beds: "シングルベッド2台",

            room_triple_name: "トリプルルーム",
            room_triple_desc: "家族や友人グループに適した広々とした客室です。",
            room_triple_beds: "シングルベッド1台とベッド1台",

            room_double_name: "ダブルルーム",
            room_double_desc: "快適な滞在のために設計された広々とした客室です。",
            room_double_beds: "シングルベッド2台とベッド1台",

            room_wifi: "Wi-Fi",
            room_view: "川と山の景色",

            gallery_label: "ギャラリー",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "ゲストレビュー",
            testimonials_title: "ゲストの声",
            testimonials_description: "Park Hotel Qubaでの滞在についてゲストの声をご覧ください。",
            testimonial_1_text: "クバの美しい雰囲気を楽しみながらリラックスできる素晴らしい場所です。すべて快適で、サービスも素晴らしかったです。",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "ホテルの雰囲気は素晴らしく、スタッフもとても親切でした。滞在をとても楽しみました。",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "クバの美しい自然に囲まれた静かで快適な場所です。",
            testimonial_3_name: "Rashad A.",

            verified_guest: "認証済みゲスト",

            reservation_label: "予約",
            reservation_title: "滞在を",
            reservation_title_highlight: "今すぐ計画",
            reservation_description: "以下の情報を入力してください。予約送信後、確認画面が表示されます。",

            reservation_name_label: "氏名",
            reservation_name_placeholder: "氏名",
            reservation_phone_label: "電話番号",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "客室タイプ",
            reservation_room_placeholder: "客室を選択",
            reservation_guest_label: "宿泊人数",

            guest_1: "1名",
            guest_2: "2名",
            guest_3: "3名",
            guest_4: "4名",
            guest_5: "5名",
            guest_6: "6名",

            reservation_checkin_label: "チェックイン日",
            reservation_checkin_placeholder: "チェックイン日を選択",
            reservation_checkout_label: "チェックアウト日",
            reservation_checkout_placeholder: "チェックアウト日を選択",
            reservation_submit: "今すぐ予約",

            reservation_modal_label: "予約情報",
            reservation_confirm_title: "情報を確認してください",

            summary_name_label: "氏名",
            summary_phone_label: "電話番号",
            summary_room_label: "客室タイプ",
            summary_guests_label: "宿泊人数",
            summary_checkin_label: "チェックイン",
            summary_checkout_label: "チェックアウト",

            reservation_confirm_question: "予約を確定しますか？",
            reservation_cancel: "キャンセル",
            reservation_confirm: "確認",

            reservation_success_title: "予約が正常に確定しました。",
            reservation_success_text: "スタッフより近日中にご連絡いたします。ありがとうございます！",
            reservation_home: "ホームへ戻る",

            contact_label: "お問い合わせ",
            contact_title: "お気軽に",
            contact_title_highlight: "お問い合わせください",
            contact_person_label: "担当者",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "住所",
            contact_address: "クバ、28 May Park",
            contact_email_label: "メール",

            footer_description: "クバの美しい自然に囲まれた快適で静かな忘れられない滞在。",
            footer_navigation: "ナビゲーション",
            footer_home: "ホーム",
            footer_about: "私たちについて",
            footer_rooms: "客室",
            footer_gallery: "ギャラリー",
            footer_reservation: "予約",
            footer_contact: "お問い合わせ",
            footer_address: "クバ、28 May Park",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "All rights reserved.",
            footer_created_by: "制作",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: "。",

            previous_image: "前の画像",
            next_image: "次の画像",
            menu: "メニュー",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "クバ",
            room_twin_alt: "ツインルーム",
            room_triple_alt: "トリプルルーム",
            room_double_alt: "ダブルルーム",
            gallery_modal_alt: "ギャラリー"
        },


        /* =====================================================
           KOREAN
        ===================================================== */

        ko: {
            site_title: "Park Hotel Quba",
            site_description: "Park Hotel Quba — 쿠바에서 편안하고 잊지 못할 숙박을 경험하세요.",
            brand_name: "PARK HOTEL",
            brand_location: "QUBA",

            nav_home: "홈",
            nav_about: "소개",
            nav_rooms: "객실",
            nav_gallery: "갤러리",
            nav_reservation: "예약",
            nav_contact: "문의",

            hero_location: "쿠바 • 아제르바이잔",
            hero_title: "쿠바의 중심에서",
            hero_title_highlight: "편안함",
            hero_description: "자연, 산 전망과 편안함을 한곳에서 — Park Hotel Quba.",
            hero_book: "예약하기",
            hero_rooms: "객실 보기",

            about_label: "소개",
            about_title: "자연과",
            about_title_highlight: "조화를 이루며",
            about_heading: "자연 속에서 즐기는 잊지 못할 휴식",
            about_text_1: "쿠바는 아름다운 자연과 산악 풍경으로 유명한 아제르바이잔의 아름다운 지역 중 하나입니다.",
            about_text_2: "이 지역은 오랜 역사와 풍부한 문화적 유산을 가지고 있습니다.",
            about_text_3: "게스트는 게치레시 숲, 아푸르자 폭포, 히날리그 마을 및 다양한 명소를 둘러볼 수 있습니다.",

            about_feature_mountain: "산 전망",
            about_feature_nature: "깨끗한 자연",
            about_feature_quba: "쿠바",

            rooms_label: "객실",
            rooms_title: "편안한",
            rooms_title_highlight: "객실을 선택하세요",

            room_twin_name: "트윈룸",
            room_twin_desc: "싱글 침대 2개가 마련된 밝고 편안한 객실입니다.",
            room_twin_beds: "싱글 침대 2개",

            room_triple_name: "트리플룸",
            room_triple_desc: "가족과 친구 그룹에게 적합한 넓고 편안한 객실입니다.",
            room_triple_beds: "싱글 침대 1개 및 침대 1개",

            room_double_name: "더블룸",
            room_double_desc: "편안한 휴식을 위해 설계된 넓고 편안한 객실입니다.",
            room_double_beds: "싱글 침대 2개 및 침대 1개",

            room_wifi: "Wi-Fi",
            room_view: "강과 산 전망",

            gallery_label: "갤러리",
            gallery_title: "Park Hotel",
            gallery_title_highlight: "Quba",

            testimonials_label: "고객 후기",
            testimonials_title: "고객들의 이야기",
            testimonials_description: "Park Hotel Quba에서의 숙박에 대한 고객들의 이야기를 확인하세요.",
            testimonial_1_text: "쿠바의 아름다운 분위기를 즐기며 휴식하기에 좋은 곳입니다. 모든 것이 편안했고 서비스도 훌륭했습니다.",
            testimonial_1_name: "Ali M.",
            testimonial_2_text: "호텔 분위기가 매우 좋고 직원들도 친절했습니다. 숙박이 정말 즐거웠습니다.",
            testimonial_2_name: "Emma K.",
            testimonial_3_text: "쿠바의 아름다운 자연으로 둘러싸인 조용하고 편안한 곳입니다.",
            testimonial_3_name: "Rashad A.",

            verified_guest: "인증된 고객",

            reservation_label: "예약",
            reservation_title: "지금",
            reservation_title_highlight: "숙박을 계획하세요",
            reservation_description: "아래 정보를 입력하세요. 예약을 제출하면 확인 창이 표시됩니다.",

            reservation_name_label: "성명",
            reservation_name_placeholder: "성명",
            reservation_phone_label: "전화번호",
            reservation_phone_placeholder: "+994 XX XXX XX XX",
            reservation_room_label: "객실 유형",
            reservation_room_placeholder: "객실 선택",
            reservation_guest_label: "투숙객 수",

            guest_1: "1명",
            guest_2: "2명",
            guest_3: "3명",
            guest_4: "4명",
            guest_5: "5명",
            guest_6: "6명",

            reservation_checkin_label: "체크인 날짜",
            reservation_checkin_placeholder: "체크인 날짜 선택",
            reservation_checkout_label: "체크아웃 날짜",
            reservation_checkout_placeholder: "체크아웃 날짜 선택",
            reservation_submit: "지금 예약",

            reservation_modal_label: "예약 정보",
            reservation_confirm_title: "정보를 확인하세요",

            summary_name_label: "성명",
            summary_phone_label: "전화번호",
            summary_room_label: "객실 유형",
            summary_guests_label: "투숙객",
            summary_checkin_label: "체크인",
            summary_checkout_label: "체크아웃",

            reservation_confirm_question: "예약을 확정하시겠습니까?",
            reservation_cancel: "취소",
            reservation_confirm: "확인",

            reservation_success_title: "예약이 성공적으로 확정되었습니다.",
            reservation_success_text: "직원이 곧 연락드리겠습니다. 저희를 선택해 주셔서 감사합니다!",
            reservation_home: "홈으로 돌아가기",

            contact_label: "문의",
            contact_title: "저희에게",
            contact_title_highlight: "연락하세요",
            contact_person_label: "담당자",
            contact_person: "Orkhan Alishanov",
            contact_address_label: "주소",
            contact_address: "쿠바, 28 May Park",
            contact_email_label: "이메일",

            footer_description: "쿠바의 아름다운 자연 속에서 편안하고 평화로운 잊지 못할 숙박을 경험하세요.",
            footer_navigation: "내비게이션",
            footer_home: "홈",
            footer_about: "소개",
            footer_rooms: "객실",
            footer_gallery: "갤러리",
            footer_reservation: "예약",
            footer_contact: "문의",
            footer_address: "쿠바, 28 May Park",
            footer_phone: "+994 55 262 72 92",
            footer_whatsapp: "WhatsApp",
            footer_email: "quba.park.hotel@gmail.com",

            footer_copyright: "© 2026 Park Hotel Quba.",
            footer_rights: "모든 권리 보유.",
            footer_created_by: "웹사이트 제작",
            footer_creator_name: "Ceyhun Qadirov",
            footer_created_by_suffix: ".",

            previous_image: "이전 이미지",
            next_image: "다음 이미지",
            menu: "메뉴",
            instagram: "Instagram",
            tiktok: "TikTok",
            whatsapp: "WhatsApp",

            about_image_alt: "쿠바",
            room_twin_alt: "트윈룸",
            room_triple_alt: "트리플룸",
            room_double_alt: "더블룸",
            gallery_modal_alt: "갤러리"
        }

    };


    /* =========================================================
       LANGUAGE INFORMATION
    ========================================================= */

    const languageNames = {

        az: "AZ",
        en: "EN",
        ru: "RU",
        tr: "TR",
        de: "DE",
        fr: "FR",
        es: "ES",
        it: "IT",
        ar: "AR",
        fa: "FA",
        ka: "KA",
        uk: "UK",
        zh: "ZH",
        ja: "JA",
        ko: "KO"

    };


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const languageButtons =
        document.querySelectorAll("[data-language]");

    const languageCurrent =
        document.querySelector(".language-current");

    const languageDropdown =
        document.querySelector(".language-dropdown");


    /* =========================================================
       TRANSLATE PAGE
    ========================================================= */

    function translatePage(language) {

        const dictionary = translations[language];

        /*
         * IMPORTANT:
         * AZ dictionary exists now.
         * Therefore every language including AZ is processed
         * through the same translation system.
         */

        if (!dictionary) {

            console.error(
                `Translation not found: ${language}`
            );

            return;

        }


        /* -----------------------------------------------------
           TEXT
        ----------------------------------------------------- */

        document
            .querySelectorAll("[data-lang]")
            .forEach(element => {

                const key = element.dataset.lang;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {

                    element.textContent =
                        dictionary[key];

                }

            });


        /* -----------------------------------------------------
           PLACEHOLDER
        ----------------------------------------------------- */

        document
            .querySelectorAll("[data-placeholder-lang]")
            .forEach(element => {

                const key =
                    element.dataset.placeholderLang;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {

                    element.placeholder =
                        dictionary[key];

                }

            });


        /* -----------------------------------------------------
           ALT
        ----------------------------------------------------- */

        document
            .querySelectorAll("[data-alt-lang]")
            .forEach(element => {

                const key =
                    element.dataset.altLang;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {

                    element.alt =
                        dictionary[key];

                }

            });


        /* -----------------------------------------------------
           ARIA
        ----------------------------------------------------- */

        document
            .querySelectorAll("[data-aria-lang]")
            .forEach(element => {

                const key =
                    element.dataset.ariaLang;

                if (
                    Object.prototype.hasOwnProperty.call(
                        dictionary,
                        key
                    )
                ) {

                    element.setAttribute(
                        "aria-label",
                        dictionary[key]
                    );

                }

            });


        /* -----------------------------------------------------
           TITLE
        ----------------------------------------------------- */

        if (dictionary.site_title) {

            document.title =
                dictionary.site_title;

        }


        /* -----------------------------------------------------
           META DESCRIPTION
        ----------------------------------------------------- */

        const metaDescription =
            document.querySelector(
                'meta[name="description"]'
            );

        if (
            metaDescription &&
            dictionary.site_description
        ) {

            metaDescription.setAttribute(
                "content",
                dictionary.site_description
            );

        }


        /* -----------------------------------------------------
           HTML LANG
        ----------------------------------------------------- */

        document.documentElement.lang =
            language;


        /* -----------------------------------------------------
           RTL
        ----------------------------------------------------- */

        if (
            language === "ar" ||
            language === "fa"
        ) {

            document.documentElement.dir =
                "rtl";

        } else {

            document.documentElement.dir =
                "ltr";

        }


        /* -----------------------------------------------------
           CURRENT LANGUAGE BUTTON
        ----------------------------------------------------- */

        if (languageCurrent) {

            languageCurrent.innerHTML = `
                ${languageNames[language] || language.toUpperCase()}
                <i class="fa-solid fa-chevron-down"></i>
            `;

        }


        /* -----------------------------------------------------
           SAVE
        ----------------------------------------------------- */

        localStorage.setItem(
            "selectedLanguage",
            language
        );

    }


    /* =========================================================
       LANGUAGE BUTTONS
    ========================================================= */

    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                const language =
                    button.dataset.language;

                if (!translations[language]) {

                    console.error(
                        `Language "${language}" is not configured.`
                    );

                    return;

                }

                translatePage(language);


                if (languageDropdown) {

                    languageDropdown
                        .classList
                        .remove("active");

                }

            }
        );

    });


    /* =========================================================
       DROPDOWN
    ========================================================= */

    if (
        languageCurrent &&
        languageDropdown
    ) {

        languageCurrent.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                languageDropdown
                    .classList
                    .toggle("active");

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    !languageDropdown.contains(
                        event.target
                    )
                ) {

                    languageDropdown
                        .classList
                        .remove("active");

                }

            }
        );

    }


    /* =========================================================
       INITIAL LANGUAGE
    ========================================================= */

    let savedLanguage =
        localStorage.getItem(
            "selectedLanguage"
        );


    /*
     * If old/invalid language exists,
     * automatically return to AZ.
     */

    if (
        !savedLanguage ||
        !translations[savedLanguage]
    ) {

        savedLanguage = "az";

        localStorage.setItem(
            "selectedLanguage",
            "az"
        );

    }


    /* =========================================================
       START
    ========================================================= */

    translatePage(savedLanguage);


    /* =========================================================
       DEBUG
       Console will show exactly which languages exist.
    ========================================================= */

    console.log(
        "Park Hotel Quba — Language System loaded:",
        Object.keys(translations)
    );

    console.log(
        "Available languages:",
        Object.keys(translations).length
    );

});