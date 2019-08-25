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
                @click.stop="removeFilter(fieldFilter)")
      q-card(v-if="isAddNewFilter")
        q-card-section
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
import Vue from "vue";
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
      isAddNewFilter: true,
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
    ...mapActions("storeTableFilter", ["addFilter", "deleteFilter"]),
    toggleAddNewFilter() {
      this.isAddNewFilter = !this.isAddNewFilter;
    },
    getOptions() {
      var arr = _.values(this.options);
      return arr;
    },
    addOptionToFilter() {
      this.addFilter(this.selectedFilter);
      this.showOption(this.selectedFilter, false);
      this.selectedFilter = null;
    },
    showOption(filter, isShown) {
      this.options[filter.value].show = isShown;
    },
    removeFilter(filter) {
      debugger;
      this.deleteFilter(filter);
      this.showOption(filter, true);
    }
  }
};
</script>
