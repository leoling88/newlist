<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
body { width:100%;background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif;overflow:hidden; }
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#555; text-decoration:none; }
a:hover { text-decoration:none; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
table { border-collapse:collapse; }
html {width:100%;overflow-x:hidden;overflow-y: scroll;font-size:20px;} 

.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
</style>