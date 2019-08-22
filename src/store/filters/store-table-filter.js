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

};

const actions = {

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