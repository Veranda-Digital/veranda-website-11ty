/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}', // Include source files
        './public/**/*.html' // Include public HTML files
    ],
    safelist: ['text-xxxxlg', '80vw'],
    plugins: [],
    theme: {
        screens: {
            ztiny: '200px',
            zmobile: '324px',
            ztablet: '767px',
            zdesktop: '1023px',
            zlgdesktop: '1225px',
            zuwdesktop: '1900px',
            ztv: '2400px'
        },
        colors: {
            white: '#ffffff',
            black: '#000000',

            primary: '#1c5141',
            slate: '#23252c',
            cream: '#f7f6f1',
            salmon: '#ff9393',
            brightgreen: '#33d16b'
        },
        fontFamily: {
            sans: ['national_2regular', 'sans-serif'],
            sansmd: ['national_2bold', 'sans-serif'],
            sansb: ['national_2bold', 'sans-serif'],
            sansl: ['national_2light', 'national_2regular', 'sans-serif'],
            basic: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
        fontSize: {
            xsm: '0.7rem',
            sm: '0.8rem',
            base: '1rem',
            press: ['1.15rem', '1.6'],
            med: '1.25rem',
            lg: ['1.5rem', '34px'],
            lgr: '2rem',
            xlg: ['2.2rem', '45px'],
            xxlg: ['2.8rem', '56px'],
            xxxlg: ['4rem', '75px'],
            xxxxlg: ['6.5rem', '95px'],
            huge: ['9.5rem', '120px'],
            xhuge: ['12rem', '10rem']
        },
        extend: {
            backgroundImage: {
                herobg: "url('../assets/bg/hero_bg.webp')",
                // midbanner: "url('../assets/bg/midbanner_bg.webp')",
                enviro: "url('../assets/bg/enviro_bg.webp')"
            },
            spacing: {
                128: '32rem',
                144: '36rem'
            },
            height: {
                128: '32rem'
            },
            borderRadius: {
                '4xl': '2rem'
            },
            width: {
                '80vw': '80vw' // Custom width class
            }
        }
    }
};
