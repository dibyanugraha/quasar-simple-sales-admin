import Vue from "vue";

const state = {
  fieldFilters: {
    '1': {
        readonly: false,
        value: 'Field01',
        label: 'Field01',
        active: false
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
  ADD_FILTER(state, payload) {
    Vue.set(state.fieldFilters, payload.id, payload.filter);
  }
};

const actions = {
  updateFilter({ commit }, payload) {
    commit("UPDATE_FILTER", payload);
  },
  deleteFilter({ commit }, payload) {
    commit("DELETE_FILTER", payload);
  },
  addFilter({ commit }, filter) {
    let payload = {
      id: filter.value,
      filter: filter
    };
    commit("ADD_FILTER", payload);
  }
};

const getters = {
  getActiveFilters: (state, getters) => {
		let selectedFilters = getters.fieldFilters;
		let activeFilters = {};
		Object.keys(selectedFilters).forEach(function(key) {
			let filter = selectedFilters[key];
			if (filter.active) {
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
