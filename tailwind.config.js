/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-1": "var(--bg-1)",
        bgffffff: "var(--bgffffff)",
        "label-1": "var(--label-1)",
        "label-2": "var(--label-2)",
        "label-3": "var(--label-3)",
        "label-4": "var(--label-4)",
        "labellabel-50": "var(--labellabel-50)",
        "labellabel-98": "var(--labellabel-98)",
        labelsprimary: "var(--labelsprimary)",
        "light-grey1": "var(--light-grey1)",
        primary: "var(--primary)",
        "variable-collection-color": "var(--variable-collection-color)",
      },
    },
  },
  plugins: [],
};
