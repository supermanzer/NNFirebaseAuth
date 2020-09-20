import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - firebase-auth",
    title: "firebase-auth",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/fb.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/firebase',
  ],

  // Firebase module configuration (https://firebase.nuxtjs.org/guide/getting-started/#full-configuration)
  firebase: {
    config: {
      apiKey: "AIzaSyDI7UiPwA_I0S6ZCEXUlBLJC0F0S-oHSu4",
      authDomain: "fir-auth-744a4.firebaseapp.com",
      databaseURL: "https://fir-auth-744a4.firebaseio.com",
      projectId: "fir-auth-744a4",
      storageBucket: "fir-auth-744a4.appspot.com",
      messagingSenderId: "765351641369",
      appId: "1:765351641369:web:239f7931de6b8a136e8588",
      measurementId: "G-CW3V6XGK8G"
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'auth/ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
        }
      },
      firestore: true,
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
