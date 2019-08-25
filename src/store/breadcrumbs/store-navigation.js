import Vue from "vue";
import { stat } from "fs";

const state = {
  breadcrumbs: {
    "0": {
      link: "/",
      "previous-link": "/",
      label: "Home",
      icon: "home",
      active: true
    },
    "1": {
      link: "/document",
      "previous-link": "/",
      label: "Document",
      icon: "",
      active: true
    }
  }
};

const mutation = {
  UPDATE_BREADCRUMBS(state, payload) {
    Object.assign(state.breadcrumbs[payload.id], payload.updates);
  }
};

const actions = {
  updateBreadCrumb({ commit }, payload) {
    commit("UPDATE_BREADCRUMBS", payload);
  },
  deleteBreadCrumbs({ commit }, payload) {
    commit("DELETE_BREADCRUMBS", payload);
  },
  addBreadCrumbs({ commit }, breadcrumbs) {
    let payload = {
      id: filter.value,
      breadcrumbs: breadcrumbs
    };
    commit("ADD_BREADCRUMBS", payload);
  }
};

const getters = {
  getBreadCrumbs: state => {
    return state.breadcrumbs;
  }
};

export default {
  namespaced: true,
  state,
  mutation,
  actions,
  getters
};
