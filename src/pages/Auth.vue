<template>
  <div class="q-pa-md">
    <div style="max-width: 600px">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-purple" name="login" label="Login" />
        <q-tab class="text-orange" name="register" label="Register" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          class="text-white text-center"
        >
          <q-tab-panel name="login">
          </q-tab-panel>

          <q-tab-panel name="register">
            <register />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import register from 'components/Auth/Register.vue'
export default {
  data () {
    return {
      tab: 'mails'
    }
  },
  components: {
    register
  }
}
</script>

<style>
</style>
