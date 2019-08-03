<template>
  <div class="q-pa-md">
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="bluetooth" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>Bluetooth technology</q-item-section>

          <q-item-section side>
            <div class="row items-center">
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
            </div>
          </q-item-section>
        </template>

        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset">
            <div class="row q-col-gutter-xl">
              <div class="col q-ml-md">
                <q-input
                  dense
                  v-model="name"
                  label="Your name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                  dense
                  type="number"
                  v-model="age"
                  label="Your age *"
                  lazy-rules
                  :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
                />
              </div>

              <div class="col q-mr-md">
                <q-input
                  dense
                  v-model="name"
                  label="Your name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input
                  dense
                  type="number"
                  v-model="age"
                  label="Your age *"
                  lazy-rules
                  :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-expansion-item>
      <q-separator spaced />
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="bluetooth" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>Bluetooth technology</q-item-section>

          <q-item-section side>
            <div class="row items-center">
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
              <q-icon name="star" color="red" size="24px" />
            </div>
          </q-item-section>
        </template>
      </q-expansion-item>
  </div>
</template>

<script>
export default {
    
}
</script>
