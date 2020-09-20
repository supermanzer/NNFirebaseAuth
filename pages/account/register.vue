<template>
  <v-row class>
    <v-col lg="6" offset-lg="3" md="8" offset-md="2" sm="12">
      <v-card>
        <v-card-title primary-title>Sign Up</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              name="email"
              label="Email Address"
              id="email"
              type="email"
              clearable
              v-model="email"
              autocomplete="username"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              clearable
              label="Choose a Password"
              autocomplete="current-password"
              aria-autocomplete="current-password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue accent=-4" text class="mb-4" @click.prevent="register">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import fb from "@/plugins/fb";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>