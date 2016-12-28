<template>
  <div id="app">
    <logo/>
    <my-map/>
  </div>
</template>

<script>
 import LogoComponent from './components/logo/Logo.vue'
 import MapComponent from './components/map/Map.vue'

export default {
    data(){
            return{
                // 初始化下方footer-bar的数据源
                map:null,
            }
        },
  components: {
  'logo':LogoComponent,
  'my-map':MapComponent,
  },
   mounted(){
this.addBackGround();

      },
methods:{
addBackGround(){
$("#app").css("background-image","url(static/imgs/bg.png)");


}


}
}




</script>

<style>

*{
    margin: 0;
    padding: 0;
}
#app {
    height:100%;
    width:100%;
    position:absolute;

}




</style>
