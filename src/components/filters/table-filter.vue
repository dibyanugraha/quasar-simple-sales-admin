<template>
    <q-list bordered>
      <q-expansion-item group="group01" label="Filters" default-opened header-class="text-primary">
        <q-card v-for="(fieldFilter, key) in componentFilters" 
          :key="key">
          <q-card-section dense>
            <q-input :label="fieldFilter.label" outlined clearable dense :readonly="fieldFilter.readonly" clear-icon="close">
              <template v-slot:after>
                <q-btn
                  flat
                  round
                  dense
                  color="primary"
                  icon="delete"
                  @click="console.log('delete clicked')"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section dense>
            <q-btn unelevated color="primary" class="full-width" label="Add" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
</template>

<script>
import Vue from 'vue';

  export default {
    name: "table-filter",
    props: [
      'componentFilters'
    ],
    data() {
      return {
        showFilter: false
      }
    }
  }
</script>
