<template>
  <v-row align-center justify-center>
    <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
      <v-card flat>
        <v-card-title primary-title>Create New Guide</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field name label="Guide Name" v-model="name"></v-text-field>
            <v-textarea v-model="text" label="Guide Text"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" text @click="saveGuide">Save Guide</v-btn>
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
    saveGuide() {
      const new_guide = {
        name: this.name,
        text: this.text,
        created: Date.now(),
      };
      console.log(new_guide);
    },
  },
};
</script>

<style>
</style>