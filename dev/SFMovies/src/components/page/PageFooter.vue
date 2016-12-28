<template>
  <div class="page-footer">
    <nav>
      <ul class="pagination">
        <li class="back"><a href="#">&laquo;</a></li>
        <li class="page  active" name="0"><a href="#">1</a></li>
        <li class="page " name="1"><a href="#">2</a></li>
        <li class="front"><a href="#">&raquo;</a></li>
      </ul>
    </nav>
  </div>
</template>
<style>
.page-footer{
position:absolute;
bottom:0;
left:50%;
 margin-left: -114px;
}
a{
color:black;
}
.page-footer-active{
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
        },
        mounted(){
        this.event();
      },
        methods:{
        event(){
        $(".back").on("click",function () {
        if(currentPage != 0){
          var clickPage = currentPage -1;
        if(currentPage >=  clickPage){
       currentPage = clickPage;
       $($(".page")[currentPage]).addClass('active').siblings().removeClass('active');
       toGetMapInfo(currentPage);
       }
        }

      });

       $(".front").on("click",function () {
      if(currentPage != 1){
     var clickPage = currentPage +1;
       if(currentPage <=  clickPage){
         currentPage = clickPage;
        $($(".page")[currentPage]).addClass('active').siblings().removeClass('active');
         toGetMapInfo(currentPage);
    }

    }


      });
      $(".page").on("click",function () {
      var clickPage = parseInt($(this).attr('name'));

      if(currentPage !=  clickPage){
      currentPage = clickPage;
       $(this).addClass('active').siblings().removeClass('active');
       toGetMapInfo(currentPage);
      }});
      }

        }


    }



</script>
