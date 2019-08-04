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
                :options="groupOptions"
                color="primary"
                type="checkbox")
                q-space
              q-option-group(
                v-model="group"
                :options="groupOptions"
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
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                label="Sales Order Nos."
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn"
                :options-dense="true")
            div.col.q-ml-md
              q-select(
                borderless
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn")
              q-select(
                borderless
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn")
              q-select(
                borderless
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn")
              q-select(
                borderless
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="options"
                @filter="filterFn")
</template>

<script>
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  data() {
    return {
      name: null,
      age: null,
      accept: false,
      options: stringOptions,
      model: null,
      group: ['op1'],
      groupOptions: [
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
    },
    
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  }
};
</script>
