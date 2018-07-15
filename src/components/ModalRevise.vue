<template>

<div class="modal-card" >
     <header class="modal-card-head">
     <h1 class="title is-5">Revize Açıklaması</h1>
 </header>
   <section class="modal-card-body">
      <b-input @change.native="setRevisionMessage" :value="revisionMessage" type="textarea"></b-input>
  </section>
  <footer  class="modal-card-foot">
      <button class="button is-medium has-box-shadow is-warning is-uppercase m-r-16 has-text-white"  @click="acceptIt" >Revize Ver</button>
      <p v-show="isEmpty" >Lütfen Detaylı Bir Mesaj Giriniz</p>
</footer>
   </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      isEmpty: false
    };
  },
  computed: {
    ...mapState(["revisionMessage"])
  },
  methods: {
    ...mapActions(["toggleReviseModal", "reviseContent", "toggleActive"]),
    acceptIt() {
      if (this.revisionMessage.trim() == "") {
        this.isEmpty = true;
        return;
      }
      this.reviseContent();
      this.toggleReviseModal();
      this.toggleActive();
    },
    setRevisionMessage(e) {
      if (e.target.value) this.isEmpty = false;

      this.$store.commit("setRevisionMessage", e.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-card {
  width: 600px;
  @media only screen and (max-width: 600px) {
    width: auto;
  }
}
</style>

