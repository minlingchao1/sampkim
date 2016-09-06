var Slide = Object();

Slide.SlideMovie = function(obj)
{
    var l = parseInt($(this.SlideParams.l_map).css(this.SlideParams.l_path));
    // alert(this.SlideParams.l_path);

    if(l%this.SlideParams.l_width != 0) return;

    if(this.SlideParams.reg.test(obj.attr("class")))
    {
        if(Math.abs((this.SlideParams.l_totals - this.SlideParams.l_nums)*this.SlideParams.l_width) == Math.abs(l) || this.SlideParams.l_totals <= this.SlideParams.l_nums){
            return ;
        } 
        this.SlideParams.l_now = l - this.SlideParams.l_width;
    }else{
        if(l == 0) return;
        this.SlideParams.l_now = l + this.SlideParams.l_width;
    }
    // var path = this.SlideParams.l_path;
    if(this.SlideParams.l_path == 'top'){
        $(this.SlideParams.l_map).animate({top:this.SlideParams.l_now+'px'},'normal');
    }else if(this.SlideParams.l_path == 'left'){
        $(this.SlideParams.l_map).animate({left:this.SlideParams.l_now+'px'},'normal');
    }
}


$(function(){
jQuery("#slideBox11").slide({mainCell:".bd ul",effect:"left"});
});

