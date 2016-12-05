var maxScore = 0;

$(document)
		.on(
				"mobileinit",
				function() {
					$
							.extend(
									$.mobile,
									{
										pageLoadErrorMessage : 'Either the page cannot be found or it cannot be loaded',
										defaultPageTransition : 'slide'

									});
				});





$(document).on("pagecreate", function() {	

//********************************************
  
	$('#myName').click(function()  {
	 navigator.notification.beep(2);   // beeps twice
	 
	 
	 // Ref: https://issues.apache.org/jira/browse/CB-8292
	 // the prompt input TextView is in white. It is a known but unresolved issue
	 navigator.notification.prompt("Pleae Enter Your Name",
	                                getNameSuccess,
	                                "Your Name ",
	                                ['Ok', 'Exit'],
	                                "Enter Your Name");	
	});
	
	function getNameSuccess(results){
		
		// input1 refers to the text which the prompt captures. There is no input2
		// buttonIndex: The index of the pressed button.
		
		// alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
		
		// ok button is index#1, exit button is index#2
		if (results.buttonIndex == 1 ){ $('#myName').text("Your Name: " + results.input1);}
	}

	

	$('#myPicture').click(function(){
		navigator.vibrate([3000]);   // to vibration for 3 seconds
		libraryPhoto();
			});
	
	function libraryPhoto(){
	   navigator.camera.getPicture(getPhotoSuccess, getPhotoFail,
	   {
	   	quality:50 , 
	   	destinationType:navigator.camera.DestinationType.NATIVE_URL,
	   	sourceType:     navigator.camera.PictureSourceType.PHOTOLIBRARY});	
		
	} //end function libraryPhoto
	
	function getPhotoSuccess(data){
		$('#myPicture').attr('src', data);
		navigator.notification.alert('Photo is taken from the library', null, 'Photo Retrieved', 'ok');
	} // end getPhotoSuccess
	
	function getPhotoFail(message){
		navigator.notification.alert('Photo cannot get photo from library because '+message, null, 'Phto not retrived','ok');
	}
	
	var score = 0;	
	
	$("#play").click(function() {		
		score = 0;	
		$("#score").text("Your Score:" + score);	
		
		$("#snowflakef1").show();
		$("#snowflakef2").show();
		$("#snowflakef3").show();
		$("#snowflakef4").show();
		$("#snowflakef5").show();
		$("#snowflakef6").show();
		$("#snowflakef7").show();
	});
	
	$("#snowflakef1").click(function() {
		score = score + 2;
		$("#score").text("Your Score:" + score);				
		$("#snowflakef1").hide(1000);
		
		if(score > maxScore)
			{
				$("#mainScore").text("Your Highest Score:" + score);
				maxScore = score;
			}
			
	});
	$("#snowflakef2").click(function() {
		score = score + 3;
		$("#score").text("Your Score:" + score);		
		$("#snowflakef2").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	$("#snowflakef3").click(function() {
		score = score + 4;
		$("#score").text("Your Score:" + score);		
		$("#snowflakef3").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	$("#snowflakef4").click(function() {
		score = score + 1;
		$("#score").text("Your Score:" + score);		
		$("#snowflakef4").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	$("#snowflakef5").click(function() {
		score = score + 5;
		$("#score").text("Your Score:" + score);			
		$("#snowflakef5").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	$("#snowflakef6").click(function() {
		score = score + 3;
		$("#score").text("Your Score:" + score);			
		$("#snowflakef6").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	$("#snowflakef7").click(function() {
		score = score + 4;
		$("#score").text("Your Score:" + score);			
		$("#snowflakef7").hide(1000);
		
		if(score > maxScore)
		{
			$("#mainScore").text("Your Highest Score:" + score);
			maxScore = score;
		}
	});
	
	
});


