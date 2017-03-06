
$("#mainContent").hide();

// 引入swiper模块


var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
     	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  	},
	  	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  	} 
    });
    
    
    
    
$('#enter').click(function(){
  $(".swiper-container").hide();
  $("#mainContent").show();
$.ajax({
	type:"get",
	url:"http://www.renxuanxun.online/resume/php/data.php?table=tb_skill",
	dataType:'json',
	success:function(data){
		
		for(var i = 0 , len = data.length; i < len ; i ++){
			if(data[i].type == '标准'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#biaozhun')
			}else if(data[i].type == '规范'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#guifan')
			}else if(data[i].type == '工具'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#gongju')
			}else if(data[i].type == '数据库'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#shujuku')
			}else if(data[i].type == '插件'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#chajian')
			}else if(data[i].type == '类库'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#neiku')
			}else if(data[i].type == '框架'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#kuangjia')
			}else if(data[i].type == '后台'){
				$('#liCollapse').clone(true).find('#spanI').html(data[i].name)
			.end().find('#spanD').html(data[i].intorduce).end().find('#span1').html(data[i].type).end().find('#span2').html(data[i].level).end().find('#span3').html(data[i].time).end().find('#span4').html(data[i].intorduce).end().find('#span5').removeAttr("src").attr('src',data[i].image).end().show().appendTo('#houtai')
			}
			
		}
		
	}
});

$.ajax({
	type:"get",
	url:"./mock/project.json",
	dataType:'json',
	success:function(data){
		
		for(var i = 0 , len = data.length; i < len ; i ++){
			$('#poll').clone(true).find('#poll1').css('background-image','url('+data[i].images+')')
			.end().find('#poll2').html(data[i].category).end()
			.find('#poll3').html(data[i].name).end().find('#poll4')
			.html(data[i].detail).end().find('#poll5').html(data[i].tech)
			.end().find('#poll6').html(data[i].description).end().find('#poll7')
			.html(data[i].url).end().show().appendTo('#pullsex')
		}
	} 
});

})

//var audioPlayer = document.querySelector('audio'); 
//
//
//$('.musi1').click(function(){
//	
//	
//	if (audioPlayer.paused) {
//		
//		audioPlayer.play();
//	}else{
//		
//		audioPlayer.pause();
//		
//		
//	}
//});

document.addEventListener( "plusready", onPlusReady2, false );
// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady2() { 
	startPlay();
} 

var p = null; 

function startPlay() {
	if ( plus.audio == undefined ) {
		alert( "Device not ready!" );
	}
	p = plus.audio.createPlayer( "./images/gakki.mp3" );
	p.play( function () {
		
	}, function ( e ) {
		alert( "Audio play error: " + e.message ); 
	} ); 
}
function stopPlay() {
	p.pause();
}
function resumePlay(){
	p.resume();
};
var isPlay = true;
$('.musi1').click(function(){
	if(isPlay){
		stopPlay();
	}else{
		resumePlay();
	}
	
});
//mui 页面 



// 扩展API加载完毕，现在可以正常调用扩展API 


// 拍照
function captureImage(){
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	console.log("Resolution: "+res+", Format: "+fmt);
	cmr.captureImage( function( path ){
			alert( "Capture image success: " + path );  
		},
		function( error ) {
			alert( "Capture image failed: " + error.message );
		},
		{resolution:res,format:fmt}
	);
}




//二维码


document.addEventListener( "plusready", onPlusReady1, false );
//// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady1() {
	var e = document.getElementById("scan");
	e.removeAttribute( "disabled" );
}

var scan = null;
function onmarked( type, result ) {
	var text = '未知: ';
	switch(type){
		case plus.barcode.QR:
		text = 'QR: ';
		break;
		case plus.barcode.EAN13:
		text = 'EAN13: ';
		break;
		case plus.barcode.EAN8:
		text = 'EAN8: ';
		break;
	}
	alert( text+result );
}

function erweima(){
	
	scan = new plus.barcode.Barcode('bcid');
	scan.onmarked = onmarked; 
	
	scan.start();
}

function cancelScan() {
	scan.close();
}

$('#a2').click(function(){
	$('#tuiChu').show()
})
  



$('#tuiChu').click(function(){
	cancelScan();
	$('#tuiChu').hide()
})


