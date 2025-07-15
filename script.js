const menu_btn1 = document.getElementById("menu-btn1")
const menu_btn2 = document.getElementById("menu-btn2")
const backdrop = document.getElementById("backdrop")
const sidebar = document.getElementById("sidebar")
const mic = document.getElementById("mic")
const tooltip = document.getElementById("tooltip")
const pills = document.querySelectorAll(".pill")

menu_btn1.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    backdrop.classList.toggle("show");
});

function cut_sidebar() {
    sidebar.classList.remove("show");
    backdrop.classList.remove("show");
}

backdrop.addEventListener("click", cut_sidebar);
menu_btn2.addEventListener("click", cut_sidebar);

mic.addEventListener("mouseenter", () => {
    tooltip.classList.toggle("show");
});
mic.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
});

pills.forEach(pill => {
    pill.addEventListener("click", () => {
        pills.forEach(p => {p.classList.remove("active")});

        pill.classList.toggle("active");
    });
});

