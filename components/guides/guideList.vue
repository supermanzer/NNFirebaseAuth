<template>
  <v-row>
    <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
      <v-card flat>
        <v-card-title primary-title>Guides</v-card-title>
        <v-card-text>
          <v-expansion-panels :accordion="true" focusable v-if="loggedIn">
            <v-expansion-panel v-for="(guide, i) in guides" :key="i">
              <v-expansion-panel-header class="my-3">{{guide.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>{{guide.text}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-alert type="info" :value="true" v-else>Please log in to see guides</v-alert>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "GuideList",
  data() {
    return {
      guides: [],
    };
  },
  methods: {
    getGuides() {
      try {
        this.$fireStore
          .collection("guides")
          .orderBy("created")
          .get()
          .then((resp) => {
            this.loadGuides(resp.docs);
          });
      } catch (e) {
        console.error(e);
      }
    },
    loadGuides(data) {
      data.forEach((doc) => {
        this.guides.push(doc.data());
      });
    },
  },
  mounted() {
    this.getGuides();
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
};
</script>

<style>
</style>