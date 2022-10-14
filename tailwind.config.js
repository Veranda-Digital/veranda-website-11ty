/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./_site/**/*.{html,js, sass}'],
    plugins: [],
    theme: {
        screens: {
            ztiny: '200px',
            zmobile: '324px',
            ztablet: '767px',
            zdesktop: '1025px',
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
            sans: ['test_national_2regular', 'sans-serif'],
            sansmd: ['test_national_2bold', 'serif'],
            sansb: ['test_national_2bold', 'sans-serif'],
            sansl: ['test_national_2light', 'test_national_2regular', 'sans-serif'],
            basic: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
        fontSize: {
            xsm: '0.75rem',
            sm: '0.8rem',
            base: '1rem',
            med: '1.25rem',
            lg: '1.50rem',
            lgr: '2rem',
            xlg: ['2.2rem', '45px'],
            xxlg: ['2.8rem', '60px'],
            xxxlg: ['4rem', '75px'],
            huge: ['9.5rem', '120px'],
            xhuge: ['12rem', '10rem']
        },
        extend: {
            backgroundImage: {
                herobg: "url('../assets/hero_bg.png')",
                midbanner: "url('../assets/mid-banner.png')",
                enviro: "url('../assets/enviro.png')"
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
