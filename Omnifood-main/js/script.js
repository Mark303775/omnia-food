console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector("h1");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
// There is no .year element in the markup: guard it, otherwise the TypeError stops this whole script
if (yearEl) yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector("#mobile-nav-toggle");
const headerEl = document.querySelector("#header");
const navEl = document.querySelector("#main-nav");
const desktopMq = window.matchMedia("(min-width: 945px)");

function setNavOpen(isOpen) {
  // Keep the state on both group elements so Tailwind group variants work
  // consistently with the header and all of its descendants.
  if (headerEl) headerEl.classList.toggle("nav-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);

  if (btnNavEl) {
    btnNavEl.setAttribute("aria-expanded", String(isOpen));
    btnNavEl.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }
}

if (btnNavEl && headerEl && navEl) {
  btnNavEl.addEventListener("click", function () {
    const isOpen = headerEl.classList.contains("nav-open");
    setNavOpen(!isOpen);
  });

  // Close the menu with Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && headerEl.classList.contains("nav-open")) {
      setNavOpen(false);
      btnNavEl.focus();
    }
  });

  // Reset the mobile menu when switching to desktop layout.
  const resetDesktopNav = function (e) {
    if (e.matches) setNavOpen(false);
  };
  if (typeof desktopMq.addEventListener === "function") {
    desktopMq.addEventListener("change", resetDesktopNav);
  } else {
    // Compatibility with older browsers.
    desktopMq.addListener(resetDesktopNav);
  }
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Only handle in-page links: tel:, mailto: and external links keep their default behaviour
    if (!href.startsWith("#")) return;

    e.preventDefault();

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#") {
      const sectionEl = document.querySelector(href);
      if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation (close, never toggle: a toggle would OPEN it when clicked on desktop)
    if (link.hasAttribute("data-nav-link")) {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.remove("nav-open");
        document.body.classList.remove("nav-open");
        const toggle = document.querySelector("#mobile-nav-toggle");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
      }
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector("#hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("is-sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("is-sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
