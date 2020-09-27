<template>
  <v-row align-center justify-center>
    <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
      <v-card flat>
        <v-card-title primary-title>Create New Guide</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveGuide" ref="form">
            <v-text-field name label="Guide Name" v-model="name"></v-text-field>
            <v-textarea v-model="text" label="Guide Text"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" text type="submit" @click="saveGuide"
            >Save Guide</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "GuideForm",
  data() {
    return {
      name: "",
      text: "",
    };
  },
  methods: {
    async saveGuide() {
      const new_guide = {
        name: this.name,
        text: this.text,
        created: Date.now(),
        author: this.$store.state.auth.user.email,
      };
      await this.$fireStore.collection("guides").add(new_guide);
      console.log(new_guide);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>