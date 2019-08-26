import Vue from "vue";

const state = {
  fieldFilters: {
    "Apple": {
        readonly: false,
        value: "Apple",
        label: "Apple",
        show: true
    },
    "Facebook": {
        readonly: false,
        value: "Facebook",
        label: "Facebook",
        show: true
    }
  }
};

const mutations = {
  UPDATE_FILTER(state, payload) {
    Object.assign(state.fieldFilters[payload.id], payload.updates);
  },
  DELETE_FILTER(state, id) {
    Vue.delete(state.fieldFilters, id);
  },
  DISABLE_FILTER(state, id) {
    state.fieldFilters[id].show = false;
  },
  ENABLE_FILTER(state, id) {
    state.fieldFilters[id].show = true;
  },
  ADD_FILTER(state, payload) {
    Vue.set(state.fieldFilters, payload.id, payload.filter);
  }
};

const actions = {
  updateFilter({ commit }, payload) {
    // commit("UPDATE_FILTER", payload);
    commit("ENABLE_FILTER", payload.value);
  },
  deleteFilter({ commit }, payload) {
    // commit("DELETE_FILTER", payload);
    commit("DISABLE_FILTER", payload.value);
  },
  addFilter({ commit }, filter) {
    filter.readonly = false;
    let payload = {
      id: filter.value,
      filter: filter
    };
    commit("ADD_FILTER", payload);
  }
};

const getters = {
  getActiveFilters: (state, getters) => {
		let selectedFilters = state.fieldFilters;
		let activeFilters = {};
		Object.keys(selectedFilters).forEach(function(key) {
			let filter = selectedFilters[key];
			if (filter.show) {
				activeFilters[key] = filter;
			}
		});
		return activeFilters;
	}

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
