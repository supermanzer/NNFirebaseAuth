<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="grey lighten-3"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      dark
      src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top, rgba(0,0,0, 0.4), rgba(0,0,0,0.7)"
        ></v-img>
      </template>
      <div class="hidden-lg-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
      </div>

      <v-toolbar-title v-text="title" nuxt to="/" />
      <v-spacer></v-spacer>
      <div class="modals">
        <v-btn
          v-for="(m, l) in modals"
          :key="l"
          text
          @click="setOpenDialog(m)"
          >{{ m.title }}</v-btn
        >
        <v-dialog
          v-model="dialog"
          transition="dialog-transition"
          max-width="900px"
        >
          <component :is="modalComponent" v-on:modalClose="dialog = false" />
        </v-dialog>
      </div>
      <v-spacer />
      <div class="hidden-md-and-down">
        <v-btn v-for="(item, k) in links" :key="k" nuxt :to="item.to" text>{{
          item.title
        }}</v-btn>
      </div>
    </v-app-bar>
    <v-main class="grey lighten-3" :dark="false">
      <v-container class="mt-15">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import loginForm from "@/components/account/loginForm";
import registerForm from "@/components/account/registerForm";
import guideForm from "@/components/guides/guideForm";
import accountInfo from "@/components/account/accountInfo";
export default {
  data() {
    return {
      dialog: false,
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
          loggedIn: true,
          dialog: false,
        },
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
          loggedIn: false,
          dialog: false,
        },
        {
          icon: "mdi-account",
          title: "Account",
          to: "/account/info",
          loggedIn: true,
          dialog: true,
          component: accountInfo,
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/account/logout",
          loggedIn: true,
          dialog: false,
        },
        {
          icon: "mdi-folder-plus",
          title: "Create Guide",
          dialog: true,
          component: guideForm,
          loggedIn: true,
        },
        {
          icon: "mdi-login",
          title: "Log In",
          dialog: true,
          component: loginForm,
          loggedIn: false,
        },
        {
          icon: "mdi-clipboard-account",
          title: "Sign Up",
          component: registerForm,
          dialog: true,
          loggedIn: false,
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Firebase Auth Tutorial",
      modalComponent: null,
    };
  },
  computed: {
    links() {
      return this.items.filter(
        (item) =>
          item.loggedIn === this.$store.state.auth.loggedIn &&
          item.dialog != true
      );
    },
    modals() {
      return this.items.filter(
        (item) =>
          item.loggedIn === this.$store.state.auth.loggedIn &&
          item.dialog === true
      );
    },
  },
  methods: {
    setOpenDialog(item) {
      this.modalComponent = item.component;
      this.dialog = true;
    },
  },
};
</script>
