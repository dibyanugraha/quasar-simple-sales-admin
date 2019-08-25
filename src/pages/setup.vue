<template lang="pug">
  div.q-pa-md
    q-toolbar.bg-primary.text-white.q-my-md.shadow-2
      q-btn-dropdown(stretch flat label="Dropdown")
        q-list
          q-item(v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0")
            q-item-section(avatar)
              q-avatar(icon="folder" color="secondary" text-color="white")
            q-item-section
              q-item-label Photos
              q-item-label(caption) February 22, 2016
            q-item-section(side)
              q-icon(name="info")
      q-separator(dark vertical inset)
      q-btn-dropdown(stretch flat label="Dropdown")
        q-list
          q-item(v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0")
            q-item-section(avatar)
              q-avatar(icon="folder" color="secondary" text-color="white")
            q-item-section
              q-item-label Photos
              q-item-label(caption) February 22, 2016
            q-item-section(side)
              q-icon(name="info")
      q-separator(dark vertical inset)
      q-btn-dropdown(stretch flat label="Dropdown")
        q-list
          q-item(v-for="n in 3" :key="`x.${n}`" clickable v-close-popup tabindex="0")
            q-item-section(avatar)
              q-avatar(icon="folder" color="secondary" text-color="white")
            q-item-section
              q-item-label Photos
              q-item-label(caption) February 22, 2016
            q-item-section(side)
              q-icon(name="info")
      q-space
      q-btn(stretch flat label="Link")
    q-form(@submit="onSubmit" @reset="onReset")
      q-expansion-item(default-opened)
        template(v-slot:header)
          q-item-section(avatar)
            q-avatar(icon="bluetooth" color="primary" text-color="white")
          q-item-section General
          q-item-section(v-if="isCollapse" side v-for="label in testLabel") {{ label }}
        div.q-pa-md
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-input(
                v-model="name"
                label="Your name *"
                hint="Name and surname")
              q-input.text-right(
                v-model="age"
                label="Your age *")
              q-input(v-model="date" mask="date" label="Minimum Posting Date" :rules="['date']")
                template(v-slot:append)
                  q-icon(name="event" class="cursor-pointer")
                    q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                      q-date(v-model="date" @input="() => $refs.qDateProxy.hide()")
            div.col.q-ml-md
              q-option-group(
                v-model="group"
                :options="groupOptions"
                color="primary"
                type="toggle")
            div.col.q-ml-md
              q-option-group(
                v-model="group"
                :options="groupOptions"
                color="primary"
                type="checkbox")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Something"
                @filter="filterFn"
                :options-dense="true")
      q-separator(spaced)
      q-expansion-item
        template(v-slot:header)
          q-item-section(avatar)
            q-avatar(icon="bluetooth" color="primary" text-color="white")
          q-item-section Number Series
          q-item-section(side v-for="label in testLabel") {{ label }}
        div.q-pa-md
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Sales Order Nos."
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Sales Invoice Nos."
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Posted Sales Invoice Nos."
                @filter="filterFn"
                :options-dense="true")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Posted Sales Shipment Nos."
                @filter="filterFn"
                :options-dense="true")
            div.col.q-ml-md
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
            div.col.q-ml-md
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                @filter="filterFn")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
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
      date: "2019/08/14",
      group: ['op1'],
      testLabel: [
        "a", "b", "c"
      ],
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
