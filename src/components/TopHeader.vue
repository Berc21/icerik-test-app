<template>
<header class="box">
  <nav class="container  navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://zeo.org">
        <img src="https://zeo.org/wp-content/themes/zeo/assets/img/zeo-logo.svg" alt="Zeo Logo" width="112" height="28">
      </a>
      <div role="button" tabindex="0" @click="toggleMenu" class="navbar-burger  burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu is-hidden-desktop" :class="{ active: isActive  }">

      <a class="navbar-item">
        <font-awesome-icon icon="book" style="margin-right: 16px" />
       Projelerim
      </a>
      <a class="navbar-item">
        <font-awesome-icon icon="question" style="margin-right: 16px" /> Yardım
      </a>

      <a class="bd-tw-button button is-success is-rounded">
        <font-awesome-icon icon="pencil-alt" style="margin-right: 8px" /> İçerik Siparişi Oluştur
      </a>

      <p class="navbar-item has-text-weight-bold">
        Yüklü Bakiyeniz: ₺6443.88
      </p>
      <p class="navbar-item">
        <font-awesome-icon style="font-size: 24px;margin-right: 32px" scale="10" icon="bell" />
        <font-awesome-icon style="font-size: 24px;" icon="user" />
      </p>
    </div>

    <div class="navbar-menu ">
      <div class="navbar-start">
        <a class="navbar-item">
          <font-awesome-icon icon="book" class="m-r-8" />
          <span class="is-size-5"> Projelerim</span>
        </a>
        <a class="navbar-item">
          <font-awesome-icon icon="question" class="m-r-8" /> <span class="is-size-5">Yardım</span> 
        </a>
      </div>
      <div class="navbar-item">
        <a class="bd-tw-button button is-success is-rounded">
          <font-awesome-icon icon="pencil-alt" class="m-r-8" /> <span class="is-size-5">İçerik Siparişi Oluştur</span>
        </a>
      </div>
      <div class="navbar-end">

        <p class="navbar-item is-size-5">
          Yüklü Bakiyeniz:<span class="has-text-weight-bold m-l-8"> ₺6443.88 </span> 
        </p>

        <p class="navbar-item">
          <font-awesome-icon icon="bell" style="font-size: 24px;" />
        </p>

        <p class="navbar-item">
          <font-awesome-icon icon="user" style="font-size: 24px;" />
        </p>


      </div>
    </div>
  </nav>
</header>
</template>

<script>

export default {
  name: 'TopHeader',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
