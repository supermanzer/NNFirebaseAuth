<template>
  <v-row class>
    <v-col lg="6" offset-lg="3" md="8" offset-md="2" sm="12">
      <v-card>
        <v-card-title primary-title>Log In</v-card-title>
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
              :error="error"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              clearable
              label="Password"
              autocomplete="current-password"
              :error="error"
            ></v-text-field>
            <p class="error">{{error_message}}</p>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue accent=-4" text class="mb-4" @click="logIn">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      error_message: "",
    };
  },
  methods: {
    async logIn() {
      console.log();
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$router.push("/");
      } catch (error) {
        (this.error = true), (this.error_message = error.message);
      }
    },
  },
};
</script>

<style>
</style>