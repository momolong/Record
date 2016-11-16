
mui.init();
	document.getElementById('index').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'index.html',//目标页面的url
    			id:'index',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
	document.getElementById('record').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'record.html',//目标页面的url
    			id:'record',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
   	document.getElementById('live').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'live.html',//目标页面的url
    			id:'live',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
    createNew:false,
    })	
    })	
    document.getElementById('life').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'life.html',//目标页面的url
    			id:'life',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })	
    document.getElementById('play').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'play.html',//目标页面的url
    			id:'play',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })	
    document.getElementById('login').addEventListener('tap',function(){
    	 	//打开新页面
    		mui.openWindow({
    			url:'login.html',//目标页面的url
    			id:'login',
			show:{
				autoShow:true,
				aniShow:'slide-in-right',//动画名称
    			duration:500 		  //动画时间
				},//动画 
				createNew:false,
    })
    })	
   