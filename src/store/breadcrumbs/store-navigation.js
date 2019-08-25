import Vue from 'vue';

const state = {
    breadcrumbs: {
        "0": {
            "link": "/",
            "previous-link": "/",
            "label": "Home",
            "icon": "home",
            "active": true
        },
        "1": {
            "link": "/document",
            "previous-link": "/",
            "label": "Document",
            "icon": "",
            "active": true
        }
    }
};

const mutation = {

};

const actions = {

};

const getters = {

};

export default {
    namespaced: true,
    state,
    mutation,
    actions,
    getters
}