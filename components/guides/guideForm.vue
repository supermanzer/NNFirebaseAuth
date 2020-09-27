<template>
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
</template>

<script>
export default {
  name: "GuideFormComponent",
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
      this.$emit("modalClose");
    },
  },
};
</script>

<style>
</style>