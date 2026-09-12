(function () {
    var menuBtn = document.getElementById("menuBtn");
    var navLinks = document.getElementById("navLinks");

    function setMenu(open) {
        if (!menuBtn || !navLinks) return;
        navLinks.classList.toggle("active", open);
        menuBtn.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.classList.toggle("menu-open", open);
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            setMenu(!navLinks.classList.contains("active"));
        });
    }

    document.querySelectorAll("header a[href], footer a[href]").forEach(function (link) {
        link.addEventListener("click", function (event) {
            var href = link.getAttribute("href") || "";
            if (/^(tel:|mailto:|https?:|#)/i.test(href)) {
                if (navLinks && navLinks.contains(link)) setMenu(false);
                return;
            }
            event.preventDefault();
            window.location.href = link.href;
        });
    });

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        if (header) {
            header.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(0,0,0,.06)" : "none";
        }
    });
})();
