<template>
  <div class="news-wrap"  @touchstart="touchStart($event)" res="myScroll"  @touchmove="touchMove($event)">

    <div class="news-list-hot"  >
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

//var w = document.documentElement.clientWidth || document.body.clientWidth;
var v_h = document.documentElement.clientHeight || document.body.clientHeight;
//var w = document.documentElement.scrollWidth || document.body.scrollWidth;
var b_h = document.documentElement.scrollHeight || document.body.scrollHeight;
export default {
  name: 'myScroll',
  data () {
    return {
      newsHot:[],
        pageX:0,
        pageY:0,
        myScroll:null,
        scrollTop:0,
        rolling: true
    }
  },
  created:function(){
     this.HelloAxios();



  },
  methods: {
   /*=====跨域======= */

    HelloAxios(){
      //var _this = this;
      this.$http({
        method:'get',
        baseURL: '',        //baseURL: '/api'
        url:'test/static/goodsdata.json',     //'static/goodsdata.json'
      }).then((res) => {
        this.newsHot = res.data.listshot;
        console.log(res.data.listshot)
      }).catch(function(err){
        console.log(err)
      })
    },
    touchStart(e){ //触摸事件
        this.pageX = e.targetTouches[0].pageX
        this.pageY = e.targetTouches[0].pageY
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        console.log("X:" + this.pageX +"||" +"Y:" + this.pageY)
    },
    touchMove(e){ //触摸滑动事件
       this.scrollPosition = this.scrollTop      //获取滚动条位置
        console.log("滚动条位置:" + this.scrollPosition)
        console.log(e.targetTouches[0].pageY+"<=======>"+this.pageY)
        if(e.targetTouches[0].pageY>this.pageY){ //向下滑动
                    console.log("向下滑动")            

        }else{ //向上滑动


          if(this.rolling == true){
            this.rolling = false

            this.$http({
              method:'get',
              baseURL: '/api',        //baseURL: '/api'
              url:'static/goodsdata.json',     //'static/goodsdata.json'
            }).then((res) => {
              console.log(res.data.listshot)
              for(var i=0; i < res.data.listshot.length; i ++){
                this.newsHot.push(res.data.listshot[i])

              }
            }).catch(function(err){
              console.log(err)
            })
            
          }
          console.log("向上滑动")
        }
    },
    touchEnd(e){
      alert()

    }


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
