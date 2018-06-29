<template>
  <div class="news-wrap">
    <div class="news-list-hot">
      <ul>
        <li>
          <span class="img"><img src="https://www.baidu.com/s?rsv_idx=1&wd=yui&ie=utf-8&rsv_cq=element+ui+%E5%AE%98%E7%BD%91&rsv_dl=0_right_recommends_merge_28335&euri=14262110" alt=""></span>
          <h2 class="title">dd</h2>
          <span class="about">dddd</span>
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
      msg: 'Welcome to Your Vue.js App'
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
