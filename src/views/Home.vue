<template>
    <div class="container">
      <ContentDetail />
     </div>
</template>

<script>
// @ is an alias to /src
import ContentDetail from "@/components/ContentDetail.vue";

export default {
  name: "home",
  components: {
    ContentDetail
  }
};
</script>
