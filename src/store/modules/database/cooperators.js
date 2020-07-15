export default {
  state: {
    cooperators: null,
  },
  getters: {},
  mutations: {
    setCooperators(state, payload) {
      state.cooperators = payload;
    },
  },
  actions: {
    createCooperators({ dispatch }, payload) {
      payload = Object.assign(payload, { collection: "cooperators" });

      let docId = dispatch("createObject", payload)
        .then((doc) => {
          return doc.id;
        })
        .catch((err) => {
          console.error("Error ", err);
        });

      return docId;
    },
  },
};
