<template>
  <v-row justify-center align-center>
    <v-col lg="6" offset-lg="3">
      <v-card>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://images.pexels.com/photos/5188525/pexels-photo-5188525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
          <v-card-title>Logout Successful</v-card-title>
        </v-img>

        <v-card-text justify-center align-center height="100px">
          <h1>Bye Bye</h1>
          <h4>I hope you enjoyed our guides and things.</h4>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import fb from "@/plugins/fb";
export default {
  mounted() {
    this.logOut();
  },
  methods: {
    async logOut() {
      try {
        await this.$fireAuth.signOut();
        console.log("User signed out");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
</style>