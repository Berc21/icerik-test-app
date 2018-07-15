<template>
<div>
  <section class="exclamation">
    
    <font-awesome-icon class="exclamation-icon" icon="exclamation-circle" />
    <h1 class="title is-4 is-center has-text-centered m-b-16">{{contentDetails.status_str }}</h1>
  
  </section>
  
  <section class="bread-info is-block-mobile m-b-24">
    
    <nav class="breadcrumb is-marginless has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li>Projelerim </li>
        <li> Sosyal Medya Blog Yazıları</li>
        <li style="overflow: hidden;"> {{contentDetails.content_title}}</li>
      </ul>
    </nav>
    
    <div class="rating-container">
      <star-rating :read-only="true" :star-size="starSize" :show-rating="false"></star-rating>
      <p class="rating-text">İçeriğe Verilen Puan</p>
    </div>
  
  </section>

  <section style="margin: 8px;" class="has-box-shadow p-16 is-flex is-between">
    <h2 class="title is-4 is-size-6-mobile is-marginless ">{{contentDetails.content_title}}</h2>
    <p class="is-pulled-right is-size-5-desktop has-text-weight-bold">Teslim Zamanı: {{contentDeadline}} </p>
  </section>

  <Info style="margin: 8px;" :contentDetails="contentDetails"></Info>

  <b-message class="m-t-16" title="Başarılı!" :active.sync="isActive" type="is-success">
    {{ successMessage }}
  </b-message>

  <section style="margin: 8px;" class="columns is-multiline is-desktop m-t-32">
    <div class="column">
      
      <main class="has-box-shadow has-box-shadow p-16">
        <h4 class="title is-5">İçerik Açıklaması</h4>
        <p class="is-size-6">
          {{contentDetails.content_description}}
        </p>
        
        <hr>
        
        <h4 class="title is-5">Yazarın Ürettiği İçerik</h4>
        <p class="is-size-6">
          {{contentDetails.content}}
        </p>

      </main>

    </div>
    <div class="column is-one-quarter-desktop">
      
      <div class="has-box-shadow p-16">
        
        <p class="is-size-5 has-text-weight-bold m-b-16">Kelime Sayısı: 0</p>
        <p class="is-size-5 has-text-weight-bold m-b-16"> Anahtar Kelime Kullanımı</p>
        <button class="button is-light is-medium is-rounded m-r-8 m-b-8" v-for="(keyword, index) in keywords" :key="index">{{keyword}}</button>
      
      </div>
      <div class="m-t-16 is-block">
        
        <button class="button is-medium has-box-shadow is-success is-uppercase  m-l-8 m-r-8" @click="toggleApproveModal">Onayla</button>
        <b-modal :active.sync="isApproveModal" has-modal-card>
          <ModalApprove />
        </b-modal>
        
        <button class="button is-medium has-box-shadow is-warning has-text-white is-uppercase" @click="toggleReviseModal">Revize Ver</button>
        <b-modal :active.sync="isReviseModal" has-modal-card>
          <ModalRevise/>
        </b-modal>
     
      </div>
    </div>
  </section>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Info from "./Info";
import ModalApprove from "./ModalApprove";
import ModalRevise from "./ModalRevise";
import StarRating from "vue-star-rating";
export default {
  name: "ContentDetail",
  components: {
    Info,
    ModalApprove,
    ModalRevise,
    StarRating
  },
  data() {
    return {
      starSize: 40
    };
  },
  computed: {
    ...mapState(["contentDetails", "successMessage"]),
    isActive: {
      get() {
        return this.$store.state.isActive;
      },
      set() {
        this.$store.commit("toggleActive");
      }
    },
    isApproveModal: {
      get() {
        return this.$store.state.isApproveModal;
      },
      set() {
        this.$store.commit("setApproveModal");
      }
    },
    isReviseModal: {
      get() {
        return this.$store.state.isReviseModal;
      },
      set() {
        this.$store.commit("setReviseModal");
      }
    },
    keywords() {
      const stringKeywords = this.contentDetails.content_keywords;
      if (stringKeywords) {
        return stringKeywords.split(",");
      }
    },
    contentDeadline() {
      const seconds =
        Number(this.contentDetails.created_at) +
        Number(this.contentDetails.deadline_content);
      const t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(seconds);
      const year = t.getFullYear();
      const month = t
        .getMonth()
        .toString()
        .padStart(2, 0);
      const day = t
        .getDate()
        .toString()
        .padStart(2, 0);
      const hours = t
        .getHours()
        .toString()
        .padStart(2, 0);
      const mins = t
        .getMinutes()
        .toString()
        .padStart(2, 0);
      return `${day}.${month}.${year} / ${hours}:${mins}`;
    }
  },
  methods: {
    ...mapActions([
      "toggleApproveModal",
      "toggleReviseModal",
      "getContentDetails"
    ])
  },
  created() {
    this.getContentDetails();
  },
  padNum(num) {
    return num.toString().padStart(2, 0);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.has-box-shadow {
  box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
}
.is-between {
  justify-content: space-between;
  align-items: center;
}
.p-16 {
  padding: 16px;
}
.has-succeeds-separator {
  ul {
    padding: 8px;
    li {
      font-weight: bold;
      &::before {
        margin: 0 16px;
      }
      &:last-child {
        font-weight: normal;
        color: lightslategrey;
      }
    }
  }
}
.keyword {
  max-width: 500px;
}
.bread-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  .rating-text {
    text-align: center;
    @media only screen and (max-width: 600px) {
      text-align: left;
    }
  }
}

.exclamation {
  position: relative;
  margin-top: 48px;
  &-icon {
    position: absolute;
    top: -32px;
    left: 50%;
    font-size: 32px;
    color: #209cee;
  }
}
</style>
