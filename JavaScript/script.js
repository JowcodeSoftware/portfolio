document.getElementById("certificados-toggle").addEventListener("click", function () {
    const content = document.getElementById("certificados-content");
    const arrow = document.querySelector(".arrow");
    
    content.classList.toggle("hidden");
    arrow.style.transform = content.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
});

document.getElementById("hero-return").addEventListener("click", function () {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
});
/////////////////////////////////////////////////////////////////////


    document.getElementById("menu-hamburguer").addEventListener("click", function() {
        const navList = document.querySelector(".nav-list");
        navList.classList.toggle("active");
    });


