<template>
  <div class="col-6 col-md-2">
    <q-list bordered v-if="showFilter">
      <q-expansion-item group="group01" label="Filters" default-opened header-class="text-primary">
        <q-card v-for="fieldFilter in fieldFilters" :key="fieldFilter.fieldName">
          <q-card-section dense>
            <q-input outlined clearable dense v-model="fieldFilter.fieldName" readonly="fieldFilter.readonly" clear-icon="close">
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
  </div>
</template>

<script>
export default {
  name: "TableFilter",
  data() {
    return {
      showFilter: false,
      fieldFilters: [
          {
              fieldName: "Field01",
              readonly: false
          },
          {
              fieldName: "Field02",
              readonly: false
          },
          {
              fieldName: "Field03",
              readonly: true
          }
      ]
    }
  }
}
</script>
