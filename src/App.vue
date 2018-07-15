<template>
<div>
  <top-header></top-header>
  <router-view></router-view>
</div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  components: {
    TopHeader,
  }
}
</script>

<style lang="scss">

$spaceamounts: (8,16,24,32,40,48, 64); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }

    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}


</style>
