<template>
  <q-list>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 3px"
      group="group01"
      label="Filters"
      default-opened
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card v-for="(fieldFilter, key) in componentFilters" :key="key">
        <q-card-section dense>
          <q-input
            :label="fieldFilter.label"
            outlined
            clearable
            dense
            :readonly="fieldFilter.readonly"
            clear-icon="close"
          >
            <template v-slot:after>
              <q-btn
                flat
                round
                dense
                color="primary"
                icon="delete"
                @click.stop="removeFilter(key)"
              />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
      <q-card v-if="isAddNewFilter">
        <q-card-section>
          <q-select
            v-model="newFilter"
            outlined
            dense
            :options="options"     
            @keyup.enter.native="validateAndAddNewFilter()"   
          >
            <template v-slot:after>
              <q-btn round dense flat icon="close" @click.stop="showHideAddNewFilter" />
            </template>
          </q-select>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <q-btn unelevated color="primary" class="full-width" @click.stop="showHideAddNewFilter" icon="add" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import _ from "lodash";

const isSubset = (aSubSet, aSuperSet) => (
  _.every(aSubSet, (val, key) => _.isEqual(val, aSuperSet[key]))
);

export default {
  name: "table-filter",
  props: ["componentFilters"],
  data() {
    return {
      showFilter: false,
      isAddNewFilter: false,
      newFilter: {
        label: '',
        value: ''
      },
      options: [
        {
          label: "Google",
          value: "Google"
        },
        {
          label: "Facebook",
          value: "Facebook"
        },
        {
          label: "Twitter",
          value: "Twitter"
        },
        {
          label: "Apple",
          value: "Apple"
        },
        {
          label: "Oracle",
          value: "Oracle"
        }
      ]
    };
  },
  computed: {},
  methods: {
    ...mapActions("storeTableFilter", ["addFilter", "deleteFilter"]),
    removeFilter: function(id) {
      this.deleteFilter(id);
    },
    showHideAddNewFilter: function() {
      this.isAddNewFilter = !this.isAddNewFilter;
      this.newFilter = null;
    },
    validateAndAddNewFilter() {
      this.addFilter(this.newFilter);
      this.showHideAddNewFilter();
      this.removeFilterOption(this.newFilter.label);
    },
    removeFilterOption(label) {
      this.options.splice(label, 1);
      this.newFilter = null;
    }
  }
};
</script>
