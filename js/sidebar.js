document.addEventListener("DOMContentLoaded", () => {
  handleSidebar();
});

function handleSidebar() {
  const hamburgerBtn = document.querySelector(".hamburger > i");
  const sidebar = document.querySelector(".sidebar-nav");

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-nav-hidden");
  });

  document.body.addEventListener("click", (e) => {
    if (e.target !== hamburgerBtn && e.target !== sidebar) {
      sidebar.classList.add("sidebar-nav-hidden");
    }
  });
}
