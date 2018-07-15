<template>
  <section class="info has-box-shadow" style="overflow-x:auto;">
    <table class="table">
      <thead class="p-16">
        <tr>
          <th class="has-text-grey has-text-weight-normal">İçerik Türü</th>
          <th class="has-text-grey has-text-weight-normal">İlgi Alanı</th>
          <th class="has-text-grey has-text-weight-normal">Yazar Seviyesi</th>
          <th class="has-text-grey has-text-weight-normal">İçerik Dili</th>
          <th class="has-text-grey has-text-weight-normal">Görsel Kullanımı</th>
          <th class="has-text-grey has-text-weight-normal"> Kelime Aralığı</th>
          <th class="has-text-grey has-text-weight-normal"> Fiyat</th>
        </tr>
      </thead>
      <tbody class="p-16 has-text-weight-semibold">
        <tr>
          <td> {{contentDetails.product_title}}</td>
          <td> {{contentDetails.interest_title}}</td>
          <td> {{contentDetails.userlevel_title}}</td>
          <td> {{contentDetails.language_title}}</td>
          <td>
            <span v-if="contentDetails.visual">Kullanılacak </span>
            <span v-else> Kullanılmayacak </span>
          </td>
          <td>{{contentDetails.limit_word_lower}} - {{contentDetails.limit_word_upper}}</td>
          <td>₺{{contentDetails.price_publisher}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    contentDetails: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
 width: 100%;
}
.has-box-shadow {
  box-shadow: 0 2px 3px rgba(black, 0.1), 0 0 0 1px rgba(black, 0.1);
}
.p-16 {
  padding: 16px;
}

</style>


