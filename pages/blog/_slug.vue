<template>
  <section class="slug">
    <h1 class="slug_title">タイトル</h1>
    <p class="slug_date">2018/8/2</p>
    <vue-markdown>
# hogehoe title
## fugafuga
### ryuryu
* aaa
* bbb
* ccc
* ddd
    </vue-markdown>
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  transition: "slide-left",
  components: {
    VueMarkdown
  }
};
</script>

<style scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>