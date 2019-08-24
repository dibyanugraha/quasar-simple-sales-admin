import Vue from 'vue';

const state = {
    fieldFilters: {
        '1': {
            readonly: false,
            label: 'Field01'
        },
        '2': {
            readonly: false,
            label: 'Field02'
        },
        '3': {
            readonly: true,
            label: 'Field03'
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
    updateFilter( {commit}, payload) {
        commit('UPDATE_FILTER', payload);
    },
    deleteFilter( {commit}, payload) {
        commit('DELETE_FILTER', payload);
    },
    addFilter( {commit}, filter) {
        let payload = {
            id: filter.value,
            filter: filter
        };
        commit('ADD_FILTER', payload);
    }
};

const getters = {
    getTableFilters: (state) => {
        return state.fieldFilters;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};