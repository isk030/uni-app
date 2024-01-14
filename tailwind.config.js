/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Set font family
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            // Set theme colors (Required config!)
            colors: {
                primary: colors.blue,
                secondary: colors.slate,
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
});
