<template>
  <div class="news-wrap">
    <div class="news-list-hot">
      <ul>
        <li v-for="item in newsHot" :class="{'type-2': item.otype === '3' , 'type-1': item.otype === '1'}">
          <a >
            <h2 v-text="item.name"></h2>
            <span class="img" ><img :src="_item" alt="" v-for="_item in item.img"></span>
            <span class="about" v-text="item.text"></span>
          </a>

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
      newsHot:[
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'一个时代的遗憾！阿根廷葡萄牙携手出局 世界杯终归未见梅罗之战',
          text:'世界杯最新消息',
          otype:'3'
        },
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'梅西C罗出局！乌拉圭2-1葡萄牙 ',
          text:'热点新闻',
          otype:'1'
        },
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'梅西C罗出局！乌拉圭2-1葡萄牙 ',
          text:'热点新闻',
          otype:'1'
        } ,
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'梅西C罗出局！乌拉圭2-1葡萄牙 ',
          text:'热点新闻',
          otype:'1'
        },
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'一个时代的遗憾！阿根廷葡萄牙携手出局 世界杯终归未见梅罗之战',
          text:'世界杯最新消息',
          otype:'3'
        },               
        {
          img:[ 
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png',
            'http://img1.gtimg.com/2018/pics/hv1/216/196/2282/148437246.png'

          ],
          name:'一个时代的遗憾！阿根廷葡萄牙携手出局 世界杯终归未见梅罗之战',
          text:'世界杯最新消息',
          otype:'3'
        }
      ]
    }
  },
   created:function(){
     this.HelloAxios();
  },
  methods: {
   HelloAxios(){
        this.$http({
          method:'get',
          baseURL: '/api',
          url:'product/list.do?keyword=手机',
        }).then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })


   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-wrap{max-width:40rem;margin:1rem auto;}
.news-list-hot .type-1{position: relative;height:3rem;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-1 .img{display:block;width:5rem;height:3rem;position: absolute;top:.5rem;left:.5rem;}
.news-list-hot .type-1 .img img{width:100%;height:100%;}
.news-list-hot .type-1 h2{height:2.2rem;font-size:.8rem;color:#000;overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2;}
.news-list-hot .type-2{position: relative;border-bottom:1px solid #ccc;padding:.5rem;}
.news-list-hot .type-2 .img{display:block;width:100%;margin:.5rem 0 .25rem; position:relative; text-align: center;}
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
