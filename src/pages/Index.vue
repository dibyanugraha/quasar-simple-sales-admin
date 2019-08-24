<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-2" v-if="showFilter">
        <tableFilter :componentFilters="getTableFilters" />
      </div>
      <div class="col">
        <q-table
          title="Treats"
          :data="data"
          :columns="columns"
          row-key="name"
          selection="multiple"
          :selected.sync="selected"
          flat
        >
          <template v-slot:top-right>
            <q-btn-dropdown split class="glossy" color="teal" label="Refresh" @click="onMainClick">
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
                <q-item clickable v-close-popup @click="showNotif('New item is clicked')">
                  <q-item-section>New</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup @click="showNotif('Deleted item is clicked')">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tableFilter from "components/filters/table-filter";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  name: "Index",
  data() {
    return {
      showFilter: false,
      isTableEditable: true,
      model: null,
      options: stringOptions,
      loading: true,
      selected: [],
      text: "",
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
  methods: {
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
    showNotif(message) {
      this.$q.notify({
        message: message,
        color: "blue"
      });
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
    toggleEdit() {
      this.isTableEditable = !this.isTableEditable;
    },
    onMainClick() {
      console.log("Clicked on main button");
    },

    onItemClick() {
      console.log("Clicked on an Item");
    }
  },
  mounted() {
    this.onRefresh();
  },
  components: {
    tableFilter
  },
  computed: {
    ...mapGetters("storeTableFilter", ["getTableFilters"])
  }
};
</script>
