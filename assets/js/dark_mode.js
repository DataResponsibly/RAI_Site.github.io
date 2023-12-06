// document.addEventListener('DOMContentLoaded', function() {
//     const mode_toggle = document.getElementById("light-toggle");

//     mode_toggle.addEventListener("click", function() {
//         toggleTheme(localStorage.getItem("theme"));
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    const banner = document.getElementById("banner");

    mode_toggle.addEventListener("click", function() {
        const currentTheme = localStorage.getItem("theme");
        toggleTheme(currentTheme);
        toggleBannerClass(currentTheme);
    });
});

window.addEventListener("load", setTimeout(loadCorrect, 1)); 

function loadCorrect() {
    const currentTheme = localStorage.getItem("theme");
    const banner = document.getElementById("banner");
    if (currentTheme === 'light') {
        banner.classList.add('banner-light');
        banner.classList.remove('banner-dark');
    } else {
        banner.classList.add('banner-dark');
        banner.classList.remove('banner-light');
    }

}


function toggleBannerClass(currentTheme) {
    const banner = document.getElementById("banner");

    if (banner) {
        if (currentTheme === 'dark') {
            banner.classList.add('banner-light');
            banner.classList.remove('banner-dark');
        } else {
            banner.classList.add('banner-dark');
            banner.classList.remove('banner-light');
        }
    }
}
