项目简介
	
	此次项目用时两个周，属于移动端的项目
	
	采用Hbuilder作为编辑器，并运用了Mui框架。
	
	框架：zepto(该框架主要作用于移动端项目，替代了JQ，并且弥补了jq在移动端项目的不足之处)
	
	在实现动画下过的时候，运用到了css3来编译动画效果，以及插件swiper.js来实现分页动画的效果。
	
	在项目中实现了二维码扫描和摄像头的硬件调用

	项目所用的数据都是直接调用阿里云数据库的数据。      


	
开发过程中遇到的问题：
	
	开发一开始没有注意到创建swiper对象有两个，造成swiper.js不能正常使用
	
	一开始本来想在阿里云数据库提数据，但是一直请求不成功。（不知道是网卡，还是什么原因，连查询用的PHP都找不到）
	
	音频播放一直实现不了

	
解决方法

	将new的两个swiper对象合并为一个
	
	将php文件做了修改

总结

	在此次项目中没有规划好整个项目进度，导致拖延了很久

	没有用到git做版本管理，造成版本丢失

	下次再做项目的时候，应该把整体进度做一个规划，整理好整个思路再开始完成项目任务，希望下次更完善！
	
	# ResumeApp
