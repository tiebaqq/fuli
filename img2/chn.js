$(document).ready(function()
{	
	$("#tplayer").click(function()
	{		
		$(this).hide();
		$("#cplayer").show();	
		setTimeout(function()
		{	
			$("#cplayer").hide();
			$("#tplayer").hide();
			$("#xplayer").hide();			
			$("#swfplayer").show();
		},1000);
		
		setTimeout(function()
		{
			$("#tplayer").hide();
			$("#xplayer").show();
			$("#swfplayer").hide();
			$("#player_mask").show();
		},5000);
	})
	$(".tvp_app_bar .tvp_close").click(function(){$("#banner").hide()});
})
