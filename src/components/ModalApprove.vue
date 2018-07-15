<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <h1 class="title is-5 is-size--mobile">İçeriği 3 ile 5 Arasında Derecelendirebilirsiniz</h1>
    </header>
    <section class="modal-card-body">
      <star-rating @rating-selected="setRating" :increment="0.5" :rating="rating"></star-rating>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-medium has-box-shadow is-success is-uppercase m-r-16" @click="acceptIt">Onayla</button>

      <p v-show="isLow">En az 3 star ile derecelendirebilirsiniz</p>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      isLow: false,
    };
  },
  computed: {
    ...mapState(["rating"])
  },
  methods: {
    ...mapActions(["toggleApproveModal", "approveContent", "toggleActive"]),
    
    setRating(value) {
      if(value < 3 ) { this.isLow = true; return; }
      this.isLow = false;
      this.$store.commit("setRating", value);
    },
    acceptIt() {
      if(this.isLow) return;
      this.approveContent(this.rating);
      this.toggleApproveModal();
      this.toggleActive();
    }
  }
};
</script>
