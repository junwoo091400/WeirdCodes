<!--
SOURCE(https://sugang.korea.ac.kr/www/eexUnivPassList.jsp)

copied by Junwoo HWANG on JULY 12th 2018.

What is interesting : 

1) function checkIt FUNCTION
Chain of If & Else, funny :)

2) I can't find where 'submit()' function is defined,,,, argh!!
in documents.forms[0] => This object contains that FUNCTION, but can't find the source.
- This function takes you to Results page...

AGGGHHH

-->







<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="euc-kr">
<title>고려대학교 인재발굴처</title>
<link rel="stylesheet" href="./css/common.css" />

<!--[if lt IE 9]>
<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if IE]>
<script>
document.createElement("header");
document.createElement("footer");
document.createElement("aside");
document.createElement("nav");
document.createElement("article");
document.createElement("section");
document.createElement("figure");
document.createElement("legend");
document.createElement("time");
</script>
<![endif]-->




<script language="javascript">

function checkIt()
{
/**    
    if(document.forms[0].apply_type.value == '00'){
        alert("전형구분을 선택하여 주시기 바랍니다.");
        document.forms[0].apply_type.focus();
        return ;
    }
    else
****/
    
    if(document.forms[0].exam_no.value == '' ){
        alert("수험번호를 입력하여 주시기 바랍니다. ");
        document.forms[0].d1.focus();
        return ;
    }
    else if(document.forms[0].birth.value == '' || document.forms[0].birth.value.length!=8 ){
        alert("생년월일을 YYYYMMDD 형식으로 입력하여 주시기 바랍니다. \n\n 예) \"2001년 1월 1일\"은 \"20010101\"로 입력. ");
        document.forms[0].d2.focus();
        return ;
    }   
    else if(document.forms[0].app_nm.value == '' ){
        alert("이름을 입력하여 주시기 바랍니다. ");
        document.forms[0].app_nm.focus();
        return ;
    }
/*  else if(document.forms[0].d2.value == '' ||document.forms[0].d2.length!=7 ){
        alert("조회조건(7글자)을 입력하여 주시기 바랍니다.  ");
        document.forms[0].d2.focus();
        return ;
    }   */
    else {
        document.forms[0].exam_no.value = document.forms[0].exam_no.value.toUpperCase();
        
        document.forms[0].submit();
        
        // https를 http로 변경..
        //var actionUrl = document.forms[0].action;
 		//document.forms[0].action = actionUrl.indexOf('https') != -1 ? actionUrl.replace('https','http') : actionUrl;
 		//document.forms[0].submit();
    }
}

function change()
{
    //document.location.href="./eexUnivPassList.jsp?apply_type="+document.forms[0].apply_type.value;
}

function init()
{
    document.forms[0].exam_no.value='';
    document.forms[0].birth.value='';
    document.forms[0].app_nm.value='';  
}

function  openNewWindow(url)
{
   var imywidth;
   var imyheight;
   imywidth = 20;
   imyheight = 20;
   var newwin = window.open(url,"_blank", "status=no, toolbar=no, menubar=no, scrollbars=yes ,resizable=yes,copyhistory=no,width=800, height=500" + ",left=" + imywidth + ",top=" + imyheight);
}

</script>

</head>

<body onload="JavaScript:init();">
<form method="post" action="eexUnivMain.jsp">

	<div class="wrap">
		<h1 class="inquiry"><img src="./images/logo_new.png" alt="고려대학교 인재발굴처 로고" /></h1>
		<section class="inquiry">
			<h2>고려대학교 합격자조회</h2>
			<table>
				<tr>
					<th>수험번호</th>
					<td>
						<input name="exam_no" id="d1" LimitType="Number" type="text"  value="" />
						<input type="hidden" name="requestType" value="pass" />
					</td>
				</tr>
				<tr>
					<th>생년월일</th>
					<td>
						<input name="birth"   id="d2" LimitType="Number" type="text"  value="" />&nbsp;&nbsp;* 형식 : YYYYMMDD
					</td>
				</tr>
				<tr>
					<th>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명</th>
					<td>
						<input name="app_nm" id="nm" type="text" class="input_text" size="12" maxlength="30" style="ime-mode:active;" />
					</td>
				</tr>
			</table>
			
			<div class="ac">
				<a href="javascript:checkIt()"><img src="./images/btn_search.gif" alt="검색" /></a>
				<a href="javascript:document.forms[0].reset()"><img src="./images/btn_reset.gif" alt="초기화" /></a>
			</div>
			<input type="hidden" name="dept" value=oku />
			<p>유의사항은 인재발굴처 홈페이지에서 공지합니다.</p>
			<!-- <a href="http://oku.korea.ac.kr" target="_new" class="homepage"><img src="./images/btn_home.gif" alt="입학처 홈페이지 바로가기" /></a>-->
			<a href="http://oku.korea.ac.kr" target="_new" class="homepage"><img src="./images/btn_home_new.gif" alt="홈페이지 바로가기" /></a>
		</section>
	</div>

</form>
</body>
</html>

