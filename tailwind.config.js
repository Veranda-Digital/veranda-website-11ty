/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./_site/**/*.{html,js, sass}'],
    plugins: [],
    theme: {
        screens: {
            tiny: '100px',
            mobile: '324px',
            tablet: '767px',
            desktop: '991px',
            tv: '1200px',
            fourk: '2000px'
        },
        colors: {
            white: '#ffffff',
            black: '#000000',

            slate: '#23252c',
            cream: '#f7f6f1',
            salmon: '#ff9393'
        },
        fontFamily: {
            sans: ['test_national_2regular', 'sans-serif'],
            sansmd: ['test_national_2medium', 'sans-serif'],
            sansb: ['test_national_2bold', 'sans-serif'],
            basic: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
        fontSize: {
            xsm: '0.6rem',
            sm: '0.8rem',
            base: '1rem',
            lg: '1.35rem',
            xlg: '2.3rem',
            xxlg: ['4rem', '75px']
        },
        extend: {
            backgroundImage: {
                hero: "url('../public/images/hero.jpg')",
                enviro: "url('../assets/bg-trees.png')"
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
            }
        }
    }
};
