<template lang="pug">
  div.q-pa-md
    q-form(@submit="onSubmit" @reset="onReset")
      q-expansion-item
        template(v-slot:header)
          q-item-section(avatar)
            q-avatar(icon="bluetooth" color="primary" text-color="white")
          q-item-section General
          q-item-section(side)
            div.row.items-center
              q-icon(name="star" color="red" size="24px")
        div.q-pa-md
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-input(
                dense
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']")
              q-input(
                dense
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[val => val !== null && val !== '' || 'Please type your age',val => val > 0 && val < 100 || 'Please type a real age']")
            div.col.q-ml-md
              q-option-group(
                v-model="group"
                :options="options"
                color="primary"
                type="checkbox")
              q-option-group(
                v-model="group"
                :options="options"
                color="primary"
                type="toggle")
      q-separator(spaced)
      q-expansion-item
        template(v-slot:header)
          q-item-section(avatar)
            q-avatar(icon="bluetooth" color="primary" text-color="white")

          q-item-section Number Series

          q-item-section(side)
            div.row__items-center
              q-icon(name="star" color="red" size="24px")

        div.q-pa-md
          div.row__q-col-gutter-xl
            div.col__q-ml-md
              q-input(
                dense
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']")

              q-input(
                dense
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[val => val !== null && val !== '' || 'Please type your age',val => val > 0 && val < 100 || 'Please type a real age']")
</template>

<script>
export default {
  data() {
    return {
      name: null,
      age: null,
      accept: false,
      group: ['op1'],
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
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
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>
