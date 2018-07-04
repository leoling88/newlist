<template>
  <div class="news-wrap">
    <div class="news-list-hot">
      <ul>
        <li v-for="item in newsHot" :class="{'type-2': item.otype === '3' , 'type-1': item.otype === '1'}">
            <h2 v-text="item.name"></h2>
            <span class="img" ><img :src="_item" alt="" v-for="_item in item.img"></span>
            <span class="about" v-text="item.text"></span>
        </li>
      </ul>
    </div>
<!--     <div class="news-list">
      <ul>
        <li v-for="item in newslists"></li>
      </ul>
    </div> -->
    
  </div>
</template>

<script>
export default {
  name: 'NewLists',
  data () {
    return {
      newsHot:[]
    }
  },
  created:function(){
     this.HelloAxios();
  },
  methods: {
   /*=====跨域 */

  HelloAxios(){
    //var _this = this;
    this.$http({
      method:'get',
      baseURL: '/api',
      url:'/static/goodsdata.json',
    }).then((res) => {
      this.newsHot = res.data.listshot;
      console.log(res.data.listshot)
    }).catch(function(err){
      console.log(err)
    })
  }

  // HelloAxios(){
  //   this.$http.get('http://localhost:8080/static/goodsdata.json').then(res => {
  //     this.newsHot = res.data.listshot;
  //       console.log(res.data.listshot)
  //   }, response => {


  //   })

  // }

   



  }



}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.news-wrap{width:100%;max-width:20rem;margin:1rem auto;overflow:hidden;}
.news-list-hot .type-1{position: relative;height:3rem;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-1 .img{display:block;width:5rem;height:3rem;position: absolute;top:.5rem;left:.5rem;}
.news-list-hot .type-1 .img img{width:100%;height:100%;}
.news-list-hot .type-1 h2{height:2.2rem;font-size:.8rem;color:#000;overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2;}
.news-list-hot .type-2{position: relative;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-2 .img{display:block;width:100%;margin:.5rem 0 ; position:relative; text-align: center;}
.news-list-hot .type-2 .img img{width:33%;display:inline-block;margin-right:.5%;}
.news-list-hot .type-2 .img img:last-child{margin-right:0;}
.news-list-hot .type-2 h2{font-size:.8rem;color:#000;overflow:hidden; }


.news-list-hot .type-1 h2,.news-list-hot .type-1 .about{display:block;padding-left:5.5rem;}
.news-list-hot .about{color:#999;overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:1; }
</style>
