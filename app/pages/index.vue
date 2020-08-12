<template>
 <div>
  <ul v-for="article of articles" :key="article">
   <li>タイトル : {{ article.title }}</li>
   <li>記事内容 : {{ article.content }}</li>
   <hr>
  </ul>
 </div>
</template>

<script lang="ts">
 export default {
  data: function() {
   return {
    articles: [
     { title: "ruby 学習方法", content: "ruby はこのように勉強しましょう"},
     { title: "PHP 学習方法", content: "PHP はこのように勉強しましょう" },
     { title: "java 学習方法", content: "java はこのように勉強しましょう" },
     { title: "HTML 学習方法", content: "HTML はこのように勉強しましょう" }
    ]
   }
  }
 }
</script>
