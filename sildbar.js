//jquery 与move.js结合编写的一个侧边栏导航组件
$(function(){
	var state='open';//侧边栏打开状态
	var contentstate='allclose';//内容区打开状态
	var hasopenedcontentid=null;//已经打开的内容区
	//侧边栏开关事件
	$('#sildbarColse').click(function(){
		if(state==='open'){
			$('#sildbar').stop().animate({left:'-35px'},'slow');
			move('#sildbarColse')		  
			  .rotate(405)
			  .scale(1.8)
			  .set('left', '60px')
			  .set('color','#444')
			  .duration('2s')		 		  
			  .end();
			  state='close';
			  if(contentstate!=='allclose'){
			  	$(hasopenedcontentid).animate({left:'-200px'});
			  	contentstate='allclose';
			  }
		}else{
			$('#sildbar').stop().animate({left:'0'},'slow');
			move('#sildbarColse')		  
			  .rotate(-450)
			  .scale(1)
			  .set('left', '0px')
			  .set('color','#fff')
			  .duration('2s')		 		  
			  .end();
			  state='open';
			  
		}
		
		});
	//内容区开关事件	
	$('.sildbar-wrap li').each(function(){
			$(this).click(function(e){
				var contentid='#'+this.id+'-content';
				if(contentstate==='allclose'){			
					
					/*$(contentid).show('1000');*/
					hasopenedcontentid=contentid;
					console.log('打开'+contentid);
					move(contentid)
					.set('opacity', '1')
					.set('left','35px')
				    .duration('2s')		 		  
				    .end();
					contentstate='hasopened';
				}else{
					
					console.log('关闭'+hasopenedcontentid);
					/*$(hasopenedcontentid).hide('1000');
					$(contentid).show('1000');*/
					move(hasopenedcontentid)
					.set('opacity', '0')
					.set('left','-120px')
				    .duration('2s')		 		  
				    .end();
					move(contentid)
					.set('opacity', '1')
					.set('left','35px')
				    .duration('2s')		 		  
				    .end();
					console.log('打开'+contentid);
					contentstate='hasopened';
					hasopenedcontentid=contentid;
				}
				
			})
		})
	//内容区关闭按钮事件
	$(".nav-icon").click(function(){
		console.log();
		move(hasopenedcontentid)
					.set('opacity', '0')
					.set('left','-120px')
				    .duration('2s')		 		  
				    .end();
				    contentstate='allclose';
	})
});