/*TMODJS:{"version":5,"md5":"9fa7d8feae28faa40dc89d2d4ec40c6a"}*/
template('modal-view',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,source=$data.source,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="my-panel"> <div class="movie-panel-left"> <img src="" class="showImage"> </div> <div class="movies-panel-right"> ';
$each(source,function($value,$index){
$out+=' <p class="content">';
$out+=$escape($value);
$out+='</p> ';
});
$out+=' </div> </div> ';
return new String($out);
});