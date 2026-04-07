<!DOCTYPE html>
<html lang="pl">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WXGWVZXS');</script>
    <!-- End Google Tag Manager -->
    <link rel="stylesheet" href="../css/css.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/kontakt.css">
    <link rel="stylesheet" href="../css/dokumenty.css">
    <link rel="stylesheet" href="../css/oplaty.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/rodo.css">
    <link rel="stylesheet" href="/css/czynnosci.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

    </style>
    <meta property="og:title" content="<?php echo $og_title ?? $title ?? ''; ?>">
    <meta name="description" content="<?php echo $description ?? ''; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo $canonical ?? ''; ?>">
    <meta name="geo.region" content="PL-KP">
    <meta name="geo.placename" content="Bydgoszcz">
    <meta name="geo.position" content="53.1235;18.0084">
    <link rel="canonical" href="<?php echo $canonical ?? ''; ?>">
    <meta name="keywords" content="kancelaria notarialna, testamenty Bydgoszcz, poświadczenia podpisu Bydgoszcz, opłaty notarialne, dokumenty do notariusza, notariusz Bydgoszcz, akty notarialne">
    <meta name="author" content="Notariusz Oliwia Ślęzak">
    <meta name="publisher" content="STK">
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Notary",
            "name": "Kancelaria Notarialna Oliwia Ślęzak",
            "image": "https://notariuszbyd.pl/pioromale.png",
            "address": {
            "@type": "PostalAddress",
                "streetAddress": "ul. Jagiellońska 107 lok. 1",
                "addressLocality": "Bydgoszcz",
                "postalCode": "85-950",
                "addressCountry": "PL"
            },
            "telephone": "+48721594315",
            "email": "os@notariuszbyd.pl",
            "openingHours": "Mo-Tu,Th-Fr 09:00-17:00, We 10:00-18:00",
            "priceRange": "$$"
        }
    </script>
    <title><?php echo $title ?? 'Moja strona'; ?></title>
    <?php if (!empty($noindex)): ?>
        <meta name="robots" content="noindex, follow">
    <?php endif; ?>
    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXGWVZXS"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="cookies_popup" class="hidden">
    <p>Korzystając ze strony akceptują Państwo warunki <a target="_blank" href="../privacy.php"> Polityki prywatności</a>.
        Zachęcamy do zapoznania się ze wszystkimi informacjami. <a id="accept" href="#"> Akceptuj i zamknij.</a>.</p>
</div>
<header class="header">
    <div class="info">
        <ul class="banner">
            <li><img src="../img/map.png" alt="ikona mapy" class="map_up"> <a href="https://maps.app.goo.gl/XojQcoZCyUK3M69f7"
                                                                              target="_blank" class="map_banner">ul.
Jagiellońska 107 lok. 1, Bydgoszcz</a></li>
            <li><img src="../img/phone.png" alt="ikona telefonu" class="phone_up"> <a href="tel:+48721594315"
                                                                                      class="phone_banner">+48 721 594 315</a>
            </li>

            <li><img src="../img/mail.png" alt="ikona maila" class="mail_up"> <a href="mailto:os@notariuszbyd.pl"
                                                                                 target="_blank" class="mail_banner">os@notariuszbyd.pl</a>
            </li>
            <li><img src="../img/clock.png" alt="ikona zegara" class="time_up"> <a
                    href="https://maps.app.goo.gl/XojQcoZCyUK3M69f7"
                    target="_blank" class="time_banner">9:00 - 17:00 / środa 10:00 - 18:00</a></li>
        </ul>
    </div>
    <nav class="nav_container">

        <div class="navbar">
            <a href="/" class="navlogo">
                <img src="../notariusz_logo.png" class="navlogo_img" alt="logo">
            </a>
        </div>

        <div class="nav_menu" id="nav-menu">
            <ul class="nav_list">
                <li><a href="<?php echo $base_url; ?>" class="nav_link">O KANCELARII</a></li>
                <li><a href="<?php echo $base_url; ?>czynnosci" class="nav_link">CZYNNOŚCI NOTARIALNE</a></li>
                <li><a href="<?php echo $base_url; ?>dokumenty" class="nav_link">DOKUMENTY</a></li>
                <li><a href="<?php echo $base_url; ?>oplaty" class="nav_link">OPŁATY</a></li>
                <li><a href="<?php echo $base_url; ?>kontakt" class="nav_link">KONTAKT</a></li>
            </ul>
        </div>

        <div class="nav_menuicon" id="menuicon">
            <img class="nav_open" src="../img/menu-line.png" alt="ikona menu">
            <img class="nav_close" src="../img/close-large-line.png" alt="ikona zamknięcia menu">
        </div>
    </nav>
</header>

<?php if (!empty($banner)): ?>
    <div class="banner3">
        <img loading="lazy" src="<?php echo $banner; ?>" alt="<?php echo $banner_alt ?? ''; ?>" class="banner_3">
    </div>
<?php endif; ?>
</body>