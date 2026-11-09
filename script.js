const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
  });
});

document.getElementById("manageButton").addEventListener("click", () => {
  const schedule = document.querySelector(".schedule-panel");
  schedule.scrollIntoView({ behavior: "smooth", block: "center" });
});
