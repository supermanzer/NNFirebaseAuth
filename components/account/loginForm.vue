<template>
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
          v-on:keyup.enter="logIn"
          type="password"
          clearable
          label="Password"
          autocomplete="current-password"
          :error="error"
        ></v-text-field>
        <p class="error">{{ error_message }}</p>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue accent=-4" text class="mb-4" @click="logIn"
        >Log In</v-btn
      >
    </v-card-actions>
  </v-card>
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
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$router.push("/");
        this.$emit("modalClose");
      } catch (error) {
        (this.error = true), (this.error_message = error.message);
      }
    },
  },
};
</script>

<style>
</style>