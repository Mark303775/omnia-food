/** @type {import('tailwindcss').Config} */
//
// Design tokens carried over 1:1 from the original css/general.css
// ("01 TYPOGRAPHY SYSTEM … 07 WHITESPACE").
//
// IMPORTANT – rem handling:
// The original site set `html { font-size: 62.5% }` (1rem = 10px) and shrank it
// to 56.25% / 50% on smaller screens, so the whole layout scaled down together.
// Here <html> uses the normal 16px base and scales by 90% / 80% at the same
// breakpoints (see the classes on <html> in index.html). Tailwind's default
// spacing scale (1 unit = 0.25rem) therefore reproduces the original values
// exactly: e.g. 3.2rem (32px) = p-8, 9.6rem (96px) = p-24 – at every breakpoint.
//
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    // Same pixel breakpoints as the original media queries
    // (84em / 75em / 59em / 44em / 34em, i.e. 1344 / 1200 / 944 / 704 / 544px).
    // The original was desktop-first, so these are used with the `max-*`
    // variants: max-2xl: ≤1344px, max-xl: ≤1200px, max-lg: ≤944px,
    // max-md: ≤704px, max-sm: ≤544px.
    screens: {
      sm: "545px",
      md: "705px",
      lg: "945px",
      xl: "1201px",
      "2xl": "1345px",
    },
    // Original type scale (px): 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98.
    // Plain values on purpose: no built-in line-height, exactly like the original CSS.
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      30: "1.875rem",
      36: "2.25rem",
      44: "2.75rem",
      52: "3.25rem",
      62: "3.875rem",
      74: "4.625rem",
      86: "5.375rem",
      98: "6.125rem",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#e67e22",
          tint: "#fdf2e9",
          "tint-2": "#fae5d3",
          "tint-3": "#eb984e",
          shade: "#cf711f",
          "shade-2": "#45260a",
        },
        ink: "#333", // headings, nav links
        body: "#555", // default text
        muted: "#888",
        subtle: "#767676", // lightest grey allowed on #fff
        soft: "#6f6f6f", // lightest grey allowed on #fdf2e9
        step: "#bab9b9",
        placeholder: "#aaa",
        line: "#eee",
        "tag-vegetarian": "#00f128",
        "tag-vegan": "#99ff00",
        "tag-paleo": "#fad900",
        banner: "#ffd43b",
        "meal-icon": "#cfc912",
      },
      // Odd sizes that exist in the original design but not in Tailwind's default scale
      spacing: {
        5.5: "1.375rem", // logo height 22px
        7.5: "1.875rem", // list icon 30px
        11.5: "2.875rem", // starter plan padding 46px
      },
      maxWidth: {
        container: "75rem", // 1200px
        hero: "81.25rem", // 1300px
      },
      borderRadius: {
        btn: "9px",
        card: "11px",
      },
      letterSpacing: {
        heading: "-0.5px",
        label: "0.75px",
      },
      lineHeight: {
        small: "1.05",
        medium: "1.2",
        paragraph: "1.6",
        large: "1.8",
        auto: "normal", // browser default for form controls
      },
      boxShadow: {
        meal: "0 1.5rem 3rem rgba(0, 0, 0, 0.075)",
        "meal-hover": "0 2rem 4rem rgba(0, 0, 0, 0.06)",
        cta: "0 1.5rem 3rem rgba(0, 0, 0, 0.15)",
        sticky: "0 0.75rem 2rem rgba(0, 0, 0, 0.03)",
        field: "0 1px 2px rgba(0, 0, 0, 0.1)",
        focus: "0 0 0 0.5rem rgba(230, 125, 34, 0.5)",
        "focus-cta": "0 0 0 0.5rem rgba(253, 242, 233, 0.5)",
      },
      transitionDuration: {
        400: "400ms",
      },
      // The original used the CSS default `ease` for all transitions
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      backgroundImage: {
        // Path is relative to the generated css/tailwind.css (same as the old ../img/eating.jpg)
        "cta-eating":
          "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('../img/eating.jpg')",
      },
    },
  },
  plugins: [],
};
