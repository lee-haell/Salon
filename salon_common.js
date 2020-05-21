$(function () {

    var $menuBtn = $('#hamburger-menu'),
         $menu = $('.full-menu'),
         $menuLi = $('.full-menu li'),
         $arrow = $('.arrow'),
         $slideBtn = $('.btn-slide'),
         $womanImg = $('#woman-cut01'),
         $manImg = $('#man-cut01'),
         $wooInfo = $('.designer-woo'),
         $snsInfo = $('.designer-sns'),
         on_off = false;

    /* 햄버거 버튼 애니메이션 */
    $menuBtn.click(function () {
        $(this).toggleClass('active');
    });

    /* 햄버거 메뉴 슬라이드 */
    $menuBtn.click(function(){
        on_off = !on_off;
        if (on_off){
            $menu.animate({'left':0}, 100, 'easeOutExpo');
        }else{
            $menu.animate({'left':'-1920px'}, 100, 'easeOutExpo');
        }
    });

    /* 각 메뉴에 마우스 올리고 내렸을 때 화살표 나왔다 들어가기 */
    $menuLi.on('mouseenter', function(){
        $('.arrow', this).stop().animate({'left':'15px', 'opacity':1}, 500, 'easeOutCubic');
    }).mouseleave(function(){
        $('.arrow', this).stop().animate({'left':'-15px', 'opacity':0}, 500, 'easeOutCubic');
    });
    
    /* Style 버튼 클릭하면 헤어, 디자이너 영역 슬라이드 */
    $slideBtn.on('click', function (){
        on_off = !on_off;
        if(on_off){
           $womanImg.animate({'left':'510px'}, 1000, 'easeOutQuad');
           $manImg.animate({'left':'1020px'}, 1500, 'easeOutQuad');
           $wooInfo.animate({'top':0}, 1500, 'easeOutQuad');
           $wooInfo.css({'zIndex':2}, 1500, 'easeOutQuad');
           }else{
              $womanImg.animate({'left':0}, 1000, 'easeOutQuad');
              $manImg.animate({'left':0}, 1500, 'easeOutQuad');
              $wooInfo.animate({'top':'-145px'}, 1500, 'easeOutQuad');
           }
    });
});
