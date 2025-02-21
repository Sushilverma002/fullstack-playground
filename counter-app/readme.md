# installtion of tailwindCSS in react + vite.

npm install tailwindcss postcss autoprefixer
npx tailwindcss init

Create a postcss.config.js file in the root directory and add the following content:

module.exports = {
plugins: [
require('tailwindcss'),
require('autoprefixer'),
],
}

Step 5: Include Tailwind CSS in Your Stylesheets
Open the src/index.css file and import Tailwind CSS:

/_ ./src/index.css _/
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

Step 6: Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
