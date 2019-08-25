<template>
  <div class="q-px-md">
    <div class="q-pa-md q-gutter-sm">
      <q-banner inline-actions rounded class="bg-orange text-white">
        You have lost connection to the internet. This app is offline.
        <template v-slot:action>
          <q-btn flat label="Turn ON Wifi" />
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
    </div>
    <q-expansion-item default-opened group="group01">
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="web_asset" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>General</q-item-section>

        <q-item-section side>
          <div class="row items-center">{{ importantFields }}</div>
        </q-item-section>
      </template>

      <div class="q-pa-md">
        <q-form @submit="onSubmit" @reset="onReset">
          <div class="row q-col-gutter-xl">
            <div class="col q-ml-md">
              <q-input v-model="name" label="Your name *" />
              <q-input v-model="age" label="Your age *" />
            </div>

            <div class="col q-col-gutter-y-md">
              <q-input v-model="name" label="Your name *" />
              <q-toggle v-model="toggleTest" label="On Right" />
            </div>
          </div>
        </q-form>
      </div>
    </q-expansion-item>
    <q-separator spaced />
    <q-expansion-item group="group02">
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="list" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>Lines</q-item-section>

        <q-item-section side>
          <div class="row items-center">
            <div>10 lines</div>
          </div>
        </q-item-section>
      </template>

      <div class="row q-col-gutter-md">
        <div class="col-6 col-md-2" v-if="showFilter">
          <q-list bordered>
            <q-expansion-item
              group="group01"
              icon="explore"
              label="Filters"
              default-opened
              header-class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <q-input outlined clearable dense label="Label" clear-icon="close" v-model="text">
                    <template v-slot:before>
                      <q-icon name="delete" class="cursor-pointer" />
                    </template>
                  </q-input>
                </q-card-section>

                <q-card-section>
                  <q-input clearable outlined dense label="Label" clear-icon="close" v-model="text">
                    <template v-slot:before>
                      <q-icon name="delete" class="cursor-pointer" />
                    </template>
                  </q-input>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />

            <q-expansion-item
              group="group01"
              icon="bluetooth"
              label="Fourth"
              header-class="bg-teal text-white"
              expand-icon-class="text-white"
            >
              <q-card class="bg-teal-2">
                <q-card-section>Lorem ipsum dolor sit amet</q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <div class="col col-md">
          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
            selection="multiple"
            :selected.sync="selected"
            flat
          >
            <template v-slot:top-left>
              <q-btn-dropdown
                split
                class="glossy"
                color="teal"
                label="Refresh"
                @click="onMainClick"
              >
                <q-list>
                  <q-item clickable v-close-popup @click="toggleFilter">
                    <q-item-section avatar>
                      <q-avatar icon="folder" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Show Filters</q-item-label>
                      <q-item-label caption>Show table filters</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon name="info" color="amber" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>
            <template v-slot:body="props">
              <q-menu touch-position context-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup @click="showNotif">
                    <q-item-section>New</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup @click="showNotif">
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
              <q-tr :props="props">
                <q-td auto-width>
                  <q-checkbox class="q-pl-auto" v-model="props.selected"></q-checkbox>
                </q-td>
                <q-td key="desc" :props="props">
                  <q-select
                    borderless
                    v-model="model"
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    :options="options"
                    @filter="filterFn"
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">No results</q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </q-td>
                <q-td key="calories" :props="props">
                  <q-input
                    borderless
                    type="text"
                    v-model="props.row.calories"
                    mask="#.##"
                    input-class="text-right"
                    fill-mask="0"
                  />
                </q-td>
                <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
                <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
                <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                <q-td key="iron" :props="props">
                  <q-badge square color="amber">{{ props.row.iron }}</q-badge>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </q-expansion-item>
  </div>
</template>

<script>
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  data() {
    return {
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
  }
};
</script>
