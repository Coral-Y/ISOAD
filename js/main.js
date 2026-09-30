// Mobile navigation toggle
(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }
})();

// Program day tabs
(function () {
  const tabs = document.querySelectorAll(".day-tab");
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const day = tab.getAttribute("data-day");
      document.querySelectorAll(".day-tab").forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      document.querySelectorAll(".day-panel").forEach(function (p) {
        p.classList.toggle("active", p.id === day);
      });
    });
  });
})();

// Speakers rendering (data comes from js/config.js)
(function () {
  const grid = document.getElementById("speakers-grid");
  if (!grid) return;

  grid.innerHTML = speakers.map(function (s) {
    return '<div class="card speaker">' +
      '<img class="avatar" src="' + IMG_DIR + s.img + '" alt="' + s.name + '" />' +
      '<h3>' + s.name + '</h3>' +
      '<div class="role">' + s.role + '</div>' +
      '<div class="title">' + s.title + '</div>' +
      '</div>';
  }).join("");
})();
