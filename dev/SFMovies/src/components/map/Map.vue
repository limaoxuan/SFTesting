<template>
  <div class="map">

    <div id="map">
    </div>
    <my-footer/>
  </div>
</template>
<style>
    .map{
    width:80%;
    height:80%;
    margin: 50px 10% 50px 10%;
    border-radius:5px;
    overflow:hidden;
    background:white;
     position: relative;
    }
    #map{
      position: relative;
      width:100%;
      height:100%;
    }

</style>
<script>
  import SearchComponent from '../form/TextInput.vue'
   import FooterComponent from '../page/PageFooter.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
        'my-search':SearchComponent,
          'my-footer':FooterComponent
        }
    }

</script>
