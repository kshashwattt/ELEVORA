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
        menuBtn.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            setMenu(!navLinks.classList.contains("active"));
        });
    }

    document.addEventListener("click", function (event) {
        var link = event.target.closest("a[href]");
        if (!link) return;

        var href = link.getAttribute("href") || "";
        if (!href || /^(tel:|mailto:|https?:|#)/i.test(href)) return;
        if (link.target === "_blank") return;

        event.preventDefault();
        window.location.assign(link.href);
    }, true);

    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        if (header) {
            header.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(0,0,0,.06)" : "none";
        }
    });
})();
