<template>
  <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
    <q-banner rounded inline-actions class="text-white bg-red">
      You have lost connection to the internet. This app is offline.
      <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi" />
      </template>
    </q-banner>

    <q-input
      filled
      label="E-mail"
      v-model="formData.email"
      type="email"
      lazy-rules
      ref="email"
    />

    <q-input
      v-model="formData.password"
      filled
      :type="isPwd ? 'password' : 'text'"
      label="Password"
      lazy-rules
      ref="password"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <div>
      <q-btn label="Login" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      isPwd: true,
      formData: {
        email: "",
        password: ""
      },
      register: false
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
    },
    onReset() {
      (this.formData.email = ""), (this.formData.password = "");
    }
  }
};
</script>

<style>
</style>
