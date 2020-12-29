	
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:{
  	disableOnInteraction:false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
 });
	
	
	//获取所有的分页器标签
	var spanArray = document.querySelectorAll(".swiper-pagination-bullet");
	var textArray = ["FPX冠军皮肤", "FPX冠军手办预售", "杰作宝箱", "领取冠军荣耀宝箱", "云顶竞猜有奖"];
	for(var i = 0; i < spanArray.length; i++){
		spanArray[i].innerHTML = textArray[i];
	}
	

/*
window.onload =function(){
		//此处代码  是当前静态页面加载完毕才会执行!!
	}
*/