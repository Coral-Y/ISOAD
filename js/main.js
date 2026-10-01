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

// Program rendering (data comes from js/config.js)
(function () {
  const tabsEl = document.getElementById("program-tabs");
  const daysEl = document.getElementById("program-days");
  if (!tabsEl || !daysEl) return;

  const TRACK_CLASSES = ["t-a", "t-b", "t-c", "t-d"];

  function renderSpeaker(t) {
    if (t.speaker) {
      const s = t.speaker;
      return '<div class="who"><strong>' + s.name + '</strong>' +
        (s.country ? ' (' + s.country + ')' : '') +
        (s.bio ? ' — ' + s.bio : '') + '</div>';
    }
    return t.note ? '<div class="who">' + t.note + '</div>' : "";
  }

  function renderTalk(t) {
    return '<div class="talk' + (t.isBreak ? ' break' : '') + '">' +
      '<div class="time">' + t.time + '</div><div>' +
      (t.tag ? '<span class="tag">' + t.tag + '</span>' : '') +
      '<div class="title">' + t.title + '</div>' +
      renderSpeaker(t) +
      '</div></div>';
  }

  function renderHead(cls, item) {
    if (!item.title && !item.tag && !item.meta) return "";
    return '<div class="' + cls + '">' +
      (item.tag ? '<span class="tag">' + item.tag + '</span>' : '') +
      (item.title ? '<h3>' + item.title + '</h3>' : '') +
      (item.meta ? '<div class="meta">' + item.meta + '</div>' : '') +
      '</div>';
  }

  function renderTrack(track, i) {
    const sections = track.sections || [];
    const hasTalks = sections.some(function (s) { return s.talks && s.talks.length; });
    const body = hasTalks
      ? sections.map(function (s) {
          const head = s.title
            ? '<div class="sub-head">' + s.title + (s.meta ? '<div class="meta">' + s.meta + '</div>' : '') + '</div>'
            : '';
          return head + (s.talks || []).map(renderTalk).join("");
        }).join("")
      : '<div class="empty">Detailed program to be announced.</div>';
    return '<div class="track ' + TRACK_CLASSES[i % TRACK_CLASSES.length] + '">' +
      '<div class="track-head">' +
      (track.label ? '<span class="track-label">' + track.label + '</span>' : '') +
      '<h3>' + track.title + '</h3>' +
      (track.meta ? '<div class="meta">' + track.meta + '</div>' : '') +
      '</div>' + body + '</div>';
  }

  function renderItem(item) {
    if (item.type === "break") {
      return '<div class="block">' + renderTalk({ time: item.time, title: item.title, isBreak: true }) + '</div>';
    }
    if (item.type === "parallel") {
      const tracks = item.tracks || [];
      return (item.note ? '<div class="parallel-note"><span class="badge">Parallel</span> ' + item.note + '</div>' : '') +
        '<div class="tracks">' +
        (tracks[0] ? renderTrack(tracks[0], 0) : '') +
        (tracks.length > 1
          ? '<div class="track-stack">' + tracks.slice(1).map(function (t, i) { return renderTrack(t, i + 1); }).join("") + '</div>'
          : '') +
        '</div>';
    }
    return '<div class="block">' + renderHead("block-head", item) + (item.talks || []).map(renderTalk).join("") + '</div>';
  }

  tabsEl.innerHTML = program.map(function (day, i) {
    return '<button class="day-tab' + (i === 0 ? ' active' : '') + '" data-day="' + day.id + '">' + day.label + '</button>';
  }).join("");

  daysEl.innerHTML = program.map(function (day, i) {
    return '<div class="day-panel' + (i === 0 ? ' active' : '') + '" id="' + day.id + '">' +
      day.periods.map(function (p) {
        return '<div class="period">' + p.name + '</div>' + p.items.map(renderItem).join("");
      }).join("") +
      '</div>';
  }).join("");
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
