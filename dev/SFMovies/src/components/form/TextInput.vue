<template>
    <div class="text-input">
    <input type="text" placeholder="Search"/>
    <img src="../../assets/search-btn.png">
    </div>
</template>
<style>
.text-input{
  position: absolute;
  width: 240px;
  height: 35px;
  left: 50%;
  margin-left: -120px;
  z-index:100;
  margin-top:10px;
  background:white;
   border-radius:15px;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
}

.text-input input{
  position: absolute;
  width: 200px;
  height: 35px;
  padding-left:10px;
    border-radius:15px;
    overflow:hidden;
    border:0;outline:none;
}

.text-input img{
height:35px;
 position: absolute;
 right:0;
}





</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
