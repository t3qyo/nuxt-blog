<template>
  <article class="card">
    <nuxt-link :to="{ name: 'blog-slug'}" class="wrapper">
      <!-- <h1 class="card_title">記事１</h1>
      <p class="card_text">記事の内容。ああああああああああああああああああ</p>
      <p class="card_date">2018/8/2</p> -->
      <h1 class="card_title">{{post.id}}</h1>
      <p class="card_text">{{post.content}}</p>
      <p class="card_date">{{post.page}}</p>
    </nuxt-link>
  </article>
</template>

<script>
import Vue from "vue";
import { API, graphqlOperation } from 'aws-amplify';
import { getPost } from "../src/graphql/queries";

const getPostInput = {
  id: 'first',
  page: 1
}

export default {
  name: "Post",
  data() {
    return {
      post: []
    };
  },
  mounted: async function() {
    let post = await API.graphql(graphqlOperation(getPost,getPostInput));
    console.log("post")
    console.log(post);
    console.log(post.data.getPost)
    this.post = post.data.getPost;
    // this.post = {id: "hoge", content: "hogecont", page:2}
  }
};

</script>


<style scoped>
.card {
  width: 300px;
  height: 200px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgb(57, 72, 85);
  padding: 10px 20px;
  margin: 10px 10px;
}
.wrapper {
  text-decoration: none;
}
.card_title {
  font-size: 1.2rem;
}
.card_text {
  color: rgb(57, 72, 85);
  margin: 10px 0;
}
.card_date {
  font-size: 0.7rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>