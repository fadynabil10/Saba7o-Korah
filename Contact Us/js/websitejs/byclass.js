/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function validEmail(sEmail) {
	  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
    
}
 
    $('.hoverslider').on({mouseenter: function() {
            $(this).find('.active > .hovercaption').slideDown();
        }, mouseleave: function() {

            $(this).find('.active > .hovercaption').slideUp();
        }});
    
   $('.carousel').each(function(index) {
       if( $(this).attr('speed')){
           speed= $(this).attr('speed');
           speed= speed*1000;
       //    alert($(this).attr('hover'));
           $(this).carousel({
      hover:"hover",
      interval:speed
   });
   if($(this).attr('hover')=='0'){
       $(this).carousel('pause');
   }
       }else {
          $(this).carousel();
       }
   
   //alert($(this).attr('speed'));
   });
   
   $('#contactusform').ajaxForm({
    dataType: 'json',
    success: processJsoncontactus
    
});
function processJsoncontactus(data) {
if(data.success){
   //alert(data.success);
   $('#alertcontact').removeClass('alert-error');
   $('#alertcontact').addClass('alert-success');
   $('#alertcontact').html(data.success);
   $('#alertcontact').show();
   $('body').animate({
        scrollTop:  $('#alertcontact').position().top-60
    });
   	$('#contactusform').resetForm();	
   
   
}else if(data.valid){
	$('#alertcontact').removeClass('alert-success');
	 $('#alertcontact').addClass('alert-error');
	$('#alertcontact').html(data.valid);
	$('#alertcontact').show();
	$('body').animate({
        scrollTop:  $('#alertcontact').position().top-60
    });
	}else{
		
		$('#contactusform').resetForm();	
		
		}
 
 
 $('#recaptcha_reload').click();


}


function validcontactform(){
	
	ErrorMessage='';
	email=false;
	flag=true;
	FName= $("#contactusform input[name='FName']").val();
	LName= $("#contactusform input[name='LName']").val();
	Email= $("#contactusform input[name='Email']").val();
	PlaceID= $("#contactusform select[name='PlaceID']").val();
	Message= $("#contactusform textarea[name='Message']").val();
	
	if( FName=='' || FName ===null){
		flag=false;
		$("#contactusform input[name='FName']").addClass('errorcontact');
		ErrorMessage = ErrorMessage+'<p>'+$("#contactusform input[name='FName']").prev().text()+' </p>'
		}
		
		if( LName=='' || LName ==null){
		flag=false;
		$("#contactusform input[name='LName']").addClass('errorcontact');
		ErrorMessage = ErrorMessage+'<p>'+$("#contactusform input[name='LName']").prev().text()+' </p>'
		}
		
		if( Email=='' || Email ==null){
		flag=false;
		$("#contactusform select[name='Email']").addClass('errorcontact');
		ErrorMessage = ErrorMessage+'<p>'+$("#contactusform input[name='Email']").prev().text()+' </p>'
		}
		else if(validEmail(Email)){
			
			}else{
				flag=false;
				
	ErrorMessage='<span class="pull-left"> the email address you entered is wrong</span><span> البريد الالكتروني غير صحيح</span>';
	email=true;
		}
		
		if( PlaceID=='' || PlaceID ==0){
		flag=false;
		$("#contactusform select[name='PlaceID']").addClass('errorcontact');
		ErrorMessage = ErrorMessage+'<p>'+$("#contactusform select[name='PlaceID']").prev().text()+' </p>'
		}
		
		if( Message=='' || Message ==null){
		flag=false;
		$("#contactusform textarea[name='Message']").addClass('errorcontact');
		ErrorMessage = ErrorMessage+'<p>'+$("#contactusform textarea[name='Message']").prev().text()+' </p>'
		}
		
	if(flag){
		
		return true;
		}else{
			$('body').animate({
        scrollTop:  $('#alertcontact').position().top-60
			});
			$('#alertcontact').removeClass('alert-success');
	 $('#alertcontact').addClass('alert-error');
	 if(email){
			$('#alertcontact').html(ErrorMessage);
		}else{
			$('#alertcontact').html('<span> الرجاء ملء الحقول التالية</span>'+' <span style="float: left;">Please fill out the fields below </span>'+ErrorMessage);
			}
			$('#alertcontact').show();
			return false;
			}	
		
	
	}








