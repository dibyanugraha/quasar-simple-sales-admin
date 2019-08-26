<template lang="pug">
  q-list
    q-expansion-item.shadow-1.overflow-hidden(
      style="border-radius: 3px"
      label="Filters"
      default-opened
      header-class="bg-primary text-white"
      expand-icon-class="text-white")
      q-card(v-for="(fieldFilter, key) in componentFilters" :key="key")
        q-card-section(dense)
          q-input(
            :label="fieldFilter.label"
            outlined
            clearable
            dense
            :readonly="fieldFilter.readonly"
            clear-icon="close")
            template(v-slot:after)
              q-btn(
                flat
                round
                dense
                color="primary"
                icon="delete"
                @click.stop="hideoption(fieldFilter)")
      q-card
        q-card-section(v-if="isAddNewFilter")
          q-select(
            v-model="selectedFilter"
            outlined
            dense
            :options="getOptions()"
            @keyup.enter.native="addOptionToFilter()")
            template(v-slot:after)
              q-btn(round dense flat icon="close" @click.stop="toggleAddNewFilter()")
        q-card-section
          q-btn.full-width(unelevated color="primary" @click.stop="toggleAddNewFilter()" icon="add")
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "table-filter",
  props: ["componentFilters"],
  data() {
    return {
      showFilter: false,
      selectedFilter: {
          label: "",
          value: "",
          show: true
          },
      isAddNewFilter: false,
      options: {
        "Google" :{
          label: "Google",
          value: "Google",
          show: true
        },
        "Facebook": {
          label: "Facebook",
          value: "Facebook",
          show: true
        },
        "Twitter": {
          label: "Twitter",
          value: "Twitter",
          show: true
        },
        "Apple": {
          label: "Apple",
          value: "Apple",
          show: true
        }
      }
    };
  },
  methods: {
    ...mapActions("storeTableFilter", ["addFilter", "deleteFilter", "updateFilter"]),
    toggleAddNewFilter() {
      this.isAddNewFilter = !this.isAddNewFilter;
    },
    getOptions() {
      var arr = _.values(this.options);
      return arr;
    },
    addOptionToFilter() {
      this.addFilter(this.selectedFilter);
      this.showOption(this.selectedFilter);
      this.selectedFilter = null;
    },
    showOption(filter) {
      this.updateFilter(filter);
    },
    hideoption(filter) {
      this.deleteFilter(filter);
    }
  }
};
</script>
