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
      :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.' ]"
      lazy-rules
      ref="email"
    />

    <q-input
      v-model="formData.password"
      filled
      :type="isPwd ? 'password' : 'text'"
      label="Password"
      :rules="[
          val => !!val || '* Required',
          val => val.length >= 6 || 'Please enter at least 6 characters.',
        ]"
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
    <q-toggle 
      v-model="accept" label="I accept the license and terms." right-label />
    <div>
      <q-btn label="Register" type="submit" color="primary" />
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
      accept: false,
      formData: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "fas fa-exclamation-triangle",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-check-circle",
          message: "Submitted"
        });
      }
    },
    onReset() {
      (this.formData.email = ""), (this.formData.password = "");
    },
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style>
</style>
