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
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
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
      <template v-slot:img="{props}">
        <v-img v-bind="props" gradient="to top, rgba(0,0,0, 0.4), rgba(0,0,0,0.7)"></v-img>
      </template>
      <div class="hidden-lg-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
      </div>

      <v-toolbar-title v-text="title" nuxt to="/" />
      <v-spacer />
      <div class="hidden-md-and-down">
        <v-btn v-for="(item, k) in items" :key="k" nuxt :to="item.to" text>{{item.title}}</v-btn>
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
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-account",
          title: "Account",
          to: "/account/info",
        },
        {
          icon: "mdi-logout",
          title: "Logout",
          to: "/account/logout",
        },
        {
          icon: "mdi-folder-plus",
          title: "Create Guide",
          to: "/guide/create",
        },
        {
          icon: "mdi-login",
          title: "Log In",
          to: "/account/login",
        },
        {
          icon: "mdi-clipboard-account",
          title: "Sign Up",
          to: "/account/register",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Firebase Auth Tutorial",
    };
  },
};
</script>
