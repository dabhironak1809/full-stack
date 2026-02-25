module.exports = {
    theme: {
        extend: {
            keyframes: {
                slide: {
                    "0%": { transform: "translateX(0%)" },
                    "20%": { transform: "translateX(0%)" },

                    "25%": { transform: "translateX(-100%)" },
                    "45%": { transform: "translateX(-100%)" },

                    "50%": { transform: "translateX(-200%)" },
                    "70%": { transform: "translateX(-200%)" },

                    "75%": { transform: "translateX(-300%)" },
                    "100%": { transform: "translateX(-300%)" },
                },
            },
            animation: {
                slide: "slide 20s ease-in-out infinite",
            },
        },
    },
};


// background image set method : 2

// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero': "url('/images/hero-bg.jpg')",
//         'footer': "url('/images/footer-bg.jpg')",
//       },
//     },
//   },
// };
