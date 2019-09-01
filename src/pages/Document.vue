<template lang="pug">
  div.q-px-md
    div.q-pa-md
      q-toolbar.bg-primary.text-white.q-my-md.shadow-2
        q-btn-dropdown(stretch flat label="Menu")
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
        q-btn-dropdown(stretch flat label="Another Menu")
          q-list
            q-item(v-for="n in 2" :key="`x.${n}`" clickable v-close-popup tabindex="0")
              q-item-section(avatar)
                q-avatar(icon="folder" color="secondary" text-color="white")
              q-item-section
                q-item-label Photos
                q-item-label(caption) February 22, 2016
              q-item-section(side)
                q-icon(name="info")
        q-separator(dark vertical inset)
        q-btn-dropdown(stretch flat label="Third Menu")
          q-list
            q-item(v-for="n in 5" :key="`x.${n}`" clickable v-close-popup tabindex="0")
              q-item-section(avatar)
                q-avatar(icon="folder" color="secondary" text-color="white")
              q-item-section
                q-item-label Photos
                q-item-label(caption) February 22, 2016
              q-item-section(side)
                q-icon(name="info")
      q-expansion-item.shadow-2.overflow-hidden(default-opened header-class="bg-primary text-white" expand-icon-class="text-white")
        template(v-slot:header)
          q-item-section.q-px-md.text-weight-medium.text-subtitle1 General
        div.q-pa-md
          div.row.q-col-gutter-xl
            div.col.q-ml-md
              q-input(
                v-model="name"
                label="Your name *")
              q-input(v-model="date" mask="date" label="Minimum Posting Date")
                template(v-slot:append)
                  q-icon(name="event" class="cursor-pointer")
                    q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                      q-date(v-model="date" @input="() => $refs.qDateProxy.hide()")
              q-select(
                v-model="model"
                use-input
                hide-selected
                fill-input
                :options="options"
                label="Pick something"
                @filter="filterFn"
                :options-dense="true")
              q-input(label="Wake up time" v-model="time" mask="time" :rules="['time']")
                template(v-slot:append)
                  q-icon(name="access_time" class="cursor-pointer")
                    q-popup-proxy(transition-show="scale" transition-hide="scale")
                      q-time(
                        v-model="time"
                        format24h)
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
          q-item-section.q-px-md.text-weight-medium.text-subtitle1 Lines
        div.row.q-col-gutter-md.q-px-md
          div.col-2(v-if="showFilter")
            tableFilter.q-py-md(:componentFilters="getActiveFilters")
          div.col
            q-table.q-py-xs(
              :data="data"
              :columns="columns"
              row-key="name"
              selection="multiple"
              :selected.sync="selected"
              flat
              :filter="myFilterInput")
              template(v-slot:top-left)
                q-btn-dropdown(split color="teal" label="Refresh" @click="onMainClick")
                  q-list
                    q-item(clickable v-close-popup @click="toggleFilter")
                      q-item-section(avatar)
                        q-avatar(icon="folder" color="primary" text-color="white")
                      q-item-section
                        q-item-label Show Filters
                        q-item-label(caption) Show table filters
                      q-item-section(side)
                        q-icon(name="info" color="amber")
              template(v-slot:body="props")
                q-menu(touch-position context-menu)
                  q-list(style="min-width: 100px")
                    q-item(clickable v-close-popup @click="showNotif('New item is clicked')")
                      q-item-section New
                    q-separator
                    q-item(clickable v-close-popup @click="showNotif('Deleted item is clicked')")
                      q-item-section Delete
                q-tr(:props="props")
                  q-td(auto-width)
                    q-checkbox.q-pl-auto(v-model="props.selected")
                  q-td(key="desc" :props="props")
                    q-select(
                      borderless
                      v-model="model"
                      use-input
                      hide-selected
                      fill-input
                      :options="options"
                      @filter="filterFn")
                      template(v-slot:no-option)
                        q-item
                          q-item-section.text-grey No results
                  q-td(key="calories" :props="props")
                    q-input(
                      borderless
                      type="text"
                      v-model="props.row.calories"
                      mask="#.##"
                      input-class="text-right"
                      fill-mask="0")
                  q-td(key="fat" :props="props") {{ props.row.fat }}
                  q-td(key="carbs" :props="props") {{ props.row.carbs }}
                  q-td(key="protein" :props="props") {{ props.row.protein }}
                  q-td(key="sodium" :props="props") {{ props.row.sodium }}
                  q-td(key="calcium" :props="props") {{ props.row.calcium }}
                  q-td(key="iron" :props="props")
                    q-badge(square color="amber") {{ props.row.iron }}
</template>

<script>
import { mapGetters } from "vuex";
import tableFilter from "components/filters/table-filter";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  data() {
    return {
      time: '10:56',
      timeWithSeconds: '10:56:00',
      myFilterInput: '',
      notif1: true,
      mic: 8,
      date: "2019/08/14",
      name: null,
      age: null,
      accept: false,
      model: null,
      options: stringOptions,
      loading: true,
      selected: [],
      showFilter: false,
      importantFields: ["field01", "field02"],
      text: "",
      toggleTest: false,
      columns: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        {
          name: "fat",
          label: "Fat (g)",
          field: "fat",
          sortable: true,
          style: "width: 10px"
        },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  },
  mounted() {
    this.onRefresh();
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
    getSelectedString() {
      return this.selected.length === 0
        ? ""
        : `${this.selected.length} record${
            this.selected.length > 1 ? "s" : ""
          } selected of ${this.data.length}`;
    },
    onRefresh() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    filterFn(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
    onMainClick() {
      console.log("Clicked on main button");
    },

    onItemClick() {
      console.log("Clicked on an Item");
    },
    showNotif() {
      this.$q.notify({
        message: "Deleted",
        color: "blue"
      });
    }
  },
  components: {
    tableFilter
  },
  computed: {
    ...mapGetters("storeTableFilter", ["getActiveFilters"])
  }
};
</script>
