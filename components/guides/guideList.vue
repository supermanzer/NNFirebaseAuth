<template>
  <v-row>
    <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
      <v-card flat>
        <v-card-title primary-title>Guides</v-card-title>
        <v-card-text>
          <v-expansion-panels :accordion="true" focusable v-if="loggedIn">
            <v-expansion-panel v-for="guide in guides" :key="guide.id">
              <v-expansion-panel-header class="my-3">{{
                guide.name
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>{{
                guide.text
              }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-alert type="info" :value="true" v-else
            >Please log in to see guides
            <v-btn
              color="info"
              nuxt
              to="/account/login"
              class="float-right"
              depressed
              >Log In</v-btn
            >
          </v-alert>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "GuideList",
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    guides() {
      return this.$store.state.guides.guides;
    },
  },
};
</script>

<style>
</style>