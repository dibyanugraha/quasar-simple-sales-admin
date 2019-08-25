<template lang="pug">
  div.q-px-md
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
      q-expansion-item.shadow-2.overflow-hidden(default-opened header-class="bg-primary text-white" expand-icon-class="text-white")
        template(v-slot:header)
          q-item-section.q-px-md.text-weight-medium.text-subtitle1 General
        div.q-pa-md
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-input(
                v-model="name"
                label="Your name *")
              q-input.text-right(
                v-model="age"
                label="Your age *")
              q-input(v-model="date" mask="date" label="Minimum Posting Date" :rules="['date']")
                template(v-slot:append)
                  q-icon(name="event" class="cursor-pointer")
                    q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                      q-date(v-model="date" @input="() => $refs.qDateProxy.hide()")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                dense
                :options="options"
                label="Something"
                @filter="filterFn"
                :options-dense="true")
            div.col.q-ml-md
              q-list(padding)
                q-item(v-ripple)
                  q-item-section
                    q-item-label Battery too low
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-toggle(color="blue" v-model="notif1" val="battery")
                q-item(v-ripple)
                  q-item-section
                    q-item-label Test another one
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-toggle(color="red" v-model="notif1" val="battery")
                q-item(v-ripple)
                  q-item-section
                    q-item-label Another two
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-toggle(color="green" v-model="notif1" val="battery")
                q-item(v-ripple)
                  q-item-section
                    q-item-label Another three
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-toggle(color="yellow" v-model="notif1" val="battery")
            div.col.q-ml-md
              q-list(padding)
                q-item(v-ripple)
                  q-item-section
                    q-item-label Check 01
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-checkbox(color="blue" v-model="notif1")
                q-item(v-ripple)
                  q-item-section
                    q-item-label Check 02
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-checkbox(color="red" v-model="notif1")
                q-item(v-ripple)
                  q-item-section
                    q-item-label Check 03
                    q-item-label(caption) Allow notification
                  q-item-section(side)
                    q-checkbox(color="green" v-model="notif1")
                q-item
                  q-item-section
                    q-item-label Threshold
                    q-item-label(caption) {{ mic }}
                  q-item-section
                    q-slider(v-model="mic"
                      :min="0"
                      :max="50"
                      label)
      q-separator(spaced)
      q-expansion-item.shadow-2.overflow-hidden(header-class="bg-primary text-white" expand-icon-class="text-white")
        template(v-slot:header)
          q-item-section.q-px-md.text-weight-medium.text-subtitle1 Number Series
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
      notif1: true,
      mic: 8,
      date: "2019/08/14",
      group: ['op1'],
      testLabel: [
        {
          "label": "a"
        },
        {
          "label": "b"
        },
        {
          "label": "c"
        },
      ],
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
