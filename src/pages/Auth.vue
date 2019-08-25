<template lang="pug">
  div.q-pa-md
    div(style="max-width: 600px")
      q-tabs.q-mb-lg(v-model="tab" align="justify" narrow-indicator)
        q-tab.text-purple(name="login" label="Login")
        q-tab.text-orange(name="register" label="Register")
      q-tab-panels(v-model="tab" class="text-center" animated)
        q-tab-panel(name="login")
          login
        q-tab-panel(name="register")
          register
</template>

<script>
import register from "components/Auth/Register.vue";
import login from "components/Auth/Login.vue";

export default {
  data() {
    return {
      tab: "mails"
    };
  },
  components: {
    register,
    login
  }
};
</script>

<style>
</style>