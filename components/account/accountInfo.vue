<template>
  <v-card flat>
    <v-card-title primary-title>Account Info</v-card-title>
    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <v-subheader>Current User</v-subheader>
          <v-list-item-title
            ><strong>{{ user.email }}</strong></v-list-item-title
          >
          <v-list-item-subtitle>{{ bio }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list v-if="guides.length > 0">
        <v-subheader>GUIDES</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(guide, i) in guides" :key="i">
            <v-list-item-title v-text="guide.name"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Account-Info",
  data() {
    return {
      guides: [],
      bio: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    getGuides() {
      this.guides = [];
      this.$fireStore
        .collection("guides")
        .where("author", "==", this.user.email)
        .get()
        .then((qS) => {
          qS.forEach((doc) => {
            this.guides.push(doc.data());
          });
        });
    },
    getBio() {
      const uid = this.$store.state.auth.user.uid;
      this.$fireStore
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          this.bio = doc.data().bio;
        });
    },
  },
  mounted() {
    this.getGuides();
    this.getBio();
  },
};
</script>

<style>
</style>