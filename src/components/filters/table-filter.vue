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
      <q-card>
        <q-card-section>
          <q-btn unelevated color="primary" class="full-width" label="Add" @click="addFilter"/>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script>
import Vue from "vue";
import { mapActions } from 'vuex';

export default {
  name: "table-filter",
  props: ["componentFilters"],
  data() {
    return {
      showFilter: false,
    };
  },
  computed: {
  },
  methods: {
    ...mapActions('storeTableFilter', ['updateFilter', 'deleteFilter']),
    removeFilter: function(id) {
      this.deleteFilter(id)
    },
    addFilter: function() {
      console.log('we will add new filter')
    }
  }
};
</script>
