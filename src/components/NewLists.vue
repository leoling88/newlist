<template>
  <div class="news-wrap">
    <div class="news-list-hot">
      <ul>
        <li v-for="item in newsHot">
          <span class="img"><img src="item.img" alt=""></span>
          <h2 class="title" v-text="itme.titel"></h2>
          <span class="about" v-text="item.text"></span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NewLists',
  data () {
    return {
      newsHot:[
        {
          img:'',
          title:'头条新闻',
          text:'中国新闻网第一时间'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-wrap{width:25rem;margin:1rem auto;}
.news-list-hot li{position: relative;padding:.5rem;}
.news-list-hot .img{display:block;width:5rem;height:5rem;position: absolute;top:0;left:0;border:1px solid #ccc;border-radius:.25rem;}
</style>
