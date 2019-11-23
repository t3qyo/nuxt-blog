<template>
  <section class="index">
    <card v-for="i in 5" v-bind:key="i" />
  </section>
</template>

<script>
import Card from "~/components/card.vue";

export default {
  transition: "slide-left",
  components: {
    Card
  }
};
</script>

<style>
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>

