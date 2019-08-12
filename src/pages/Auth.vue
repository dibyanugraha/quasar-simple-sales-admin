<template>
  <div class="q-pa-md">
    <div style="max-width: 600px">
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-purple" name="login" label="Login" />
        <q-tab class="text-orange" name="register" label="Register" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" class="text-center" animated>
        <q-tab-panel name="login">
          <login />
        </q-tab-panel>
        <q-tab-panel name="register">
          <register />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
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
