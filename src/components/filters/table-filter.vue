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
                @click.stop="updateActiveFilters(fieldFilter, false)")
      q-card(v-if="isAddNewFilter")
        q-card-section
          q-select(
            v-model="selectedFilter"
            outlined
            dense
            :options="options"     
            @keyup.enter.native="updateActiveFilters(this.selectedFilter, true)")
            template(v-slot:after)
              q-btn(round dense flat icon="close" @click.stop="showHideAddNewFilter")
        q-card-section
          q-btn.full-width(unelevated color="primary" @click.stop="showHideAddNewFilter" icon="add")
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  name: "table-filter",
  props: ["componentFilters"],
  data() {
    return {
      showFilter: false,
      selectedFilter: {
          label: "",
          value: "",
          readonly: false,
          active: false
          },
      isAddNewFilter: false,
      options: [
        {
          label: "Google",
          value: "Google",
          readonly: false,
          active: false
        },
        {
          label: "Facebook",
          value: "Facebook",
          readonly: false,
          active: false
        },
        {
          label: "Twitter",
          value: "Twitter",
          readonly: false,
          active: false
        },
        {
          label: "Apple",
          value: "Apple",
          readonly: false,
          active: false
        },
        {
          label: "Oracle",
          value: "Oracle",
          readonly: false,
          active: false
        }
      ]
    };
  },
  created: {
  },
  methods: {
    ...mapActions("storeTableFilter", ["updateFilter"]),
    showHideAddNewFilter: function() {
      this.isAddNewFilter = !this.isAddNewFilter;
      this.newFilter = {};
    },
    updateActiveFilters(filter, isActive) {
      this.updateFilter(filter, isActive);
      this.showHideAddNewFilter();
    }
  }
};
</script>
