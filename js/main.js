// Mobile navigation toggle
(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.getElementById("navLinks");
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
  var tabs = document.querySelectorAll(".day-tab");
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var day = tab.getAttribute("data-day");
      document.querySelectorAll(".day-tab").forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      document.querySelectorAll(".day-panel").forEach(function (p) {
        p.classList.toggle("active", p.id === day);
      });
    });
  });
})();

// Speakers data + rendering (avatars are generated SVG placeholders)
(function () {
  var grid = document.getElementById("speakers-grid");
  if (!grid) return;

  var speakers = [
    { name: "Dean W. Felsher", role: "Invited Speaker", title: "Professor of Medicine (Oncology) and of Pathology, Stanford University", img: "dean-felsher.png" },
    { name: "Yoichi Nabeshima", role: "Invited Speaker", title: "Professor, Department of Ageing Science and Medicine, Kyoto University", img: "yoichi-nabeshima.png" },
    { name: "Alexey Moskalev", role: "Invited Speaker", title: "Professor · Corresponding Member of the Russian Academy of Sciences", img: "alexey-moskalev.png" },
    { name: "YANG Qiang", role: "Invited Speaker", title: "Director, PolyU Academy for Artificial Intelligence, The Hong Kong Polytechnic University · Fellow of Royal Society of Canada · Fellow of Canadian Academy of Engineering", img: "yang-qiang.png" },
    { name: "LIU Yang", role: "Invited Speaker", title: "Associate Professor · Presidential Young Scholar, The Hong Kong Polytechnic University", img: "liu-yang.png" }
  ];

  var IMG_DIR = "images/speakers/";

  var palettes = [
    ["#5b8cff", "#22d3ee"], ["#f5a623", "#ff6b6b"], ["#22d3ee", "#5b8cff"],
    ["#a78bfa", "#5b8cff"], ["#34d399", "#22d3ee"], ["#f472b6", "#a78bfa"],
    ["#fbbf24", "#f472b6"], ["#60a5fa", "#34d399"]
  ];

  function initials(name) {
    return name.replace(/^(Dr\.|Prof\.)\s*/, "").split(" ")
      .map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
  }

  function avatar(name, i) {
    var c = palettes[i % palettes.length];
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
      '<defs><linearGradient id="g' + i + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="200" height="200" fill="url(#g' + i + ')"/>' +
      '<text x="100" y="118" font-size="72" font-family="Segoe UI, Arial" font-weight="700" ' +
      'fill="#05122e" text-anchor="middle">' + initials(name) + '</text></svg>';
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  grid.innerHTML = speakers.map(function (s, i) {
    var fallback = avatar(s.name, i);
    var src = s.img ? (IMG_DIR + s.img) : fallback;
    return '<div class="card speaker">' +
      '<img class="avatar" src="' + src + '" alt="' + s.name + '" ' +
      'onerror="this.onerror=null;this.src=\'' + fallback + '\'" />' +
      '<h3>' + s.name + '</h3>' +
      '<div class="role">' + s.role + '</div>' +
      '<div class="title">' + s.title + '</div>' +
      '</div>';
  }).join("");
})();
