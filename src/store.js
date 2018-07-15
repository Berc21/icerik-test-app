import Vue from 'vue'
import Vuex from 'vuex'

import Services from "@/services"




Vue.use(Vuex)


const state = {
  contentDetails: {},
  isApproveModal: false,
  isReviseModal: false,
  rating: 5,
  revisionMessage: '',
  successMessage: '',
  isActive: false,

}

const mutations = {
  setContentDetails(state, details) {
    state.contentDetails = details
  },

  setApproveModal(state) {
    state.isActive = false;
    state.isApproveModal = !state.isApproveModal;
  },

  setReviseModal(state) {
    state.isActive = false;
    state.isReviseModal = !state.isReviseModal;
  },

  setRating(state, rating) {
    state.rating = rating
  },

  setRevisionMessage(state, revisionMessage) {
    state.revisionMessage = revisionMessage;
  },

  setMessage(state, message) {
    state.successMessage = message;
  },

  toggleActive(state) {
    state.isActive = !state.isActive;
  }
}


const actions = {

  getContentDetails({ commit }) {
    Services.getContentDetails().then(res => {
      commit('setContentDetails', res.data)
    });
  },

  approveContent({ commit }) {
    const body = {
      "id": 326,
      "score": state.rating,
    }
    Services.approveContent(body).then(res => {
      commit('setMessage', res.data.message)
    });
  },

  reviseContent({ commit }) {
    const body = {
      "id": 326,
      "message": state.revisionMessage,
    }
    Services.reviseContent(body).then(res => {
      commit('setMessage', res.data.message)
    });
  },

  toggleApproveModal({ commit }) {
    commit('setApproveModal')
  },

  toggleReviseModal({ commit }) {
    commit('setReviseModal')
  },

  toggleActive({ commit }) {
    commit('toggleActive')
  },

  setRating({ commit }, star) {
    commit('setRating', star)
  },

}






export default new Vuex.Store({
  state,
  mutations,
  actions,
})