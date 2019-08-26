<!-- EX) cafm.korea.ac.kr/archibus/safety_edu/selec_my_req_list.jsp
Really interesting. Because
1) Popup player(in <iframe>) tracks the progress quite well(you can't spoof it by jumping around in time-bar)..
2) It has it's own safety-feature, prohibiting you from taking the test before you reach 80% attendance.
3) How it initiates the video. a_func() LOL.
-->





<!DOCTYPE html>
<html>
<head>
<meta charset="euc-kr">
<title>나의 학습현황</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="../includes/pjs.js"></script>

<style type="text/css">
	
	span.s_style { color:#515151;font-size:12pt;font-weight:bold; }
	span.sub_s { color:blue;font-size:10pt; }
	td.p_td { text-align:center;padding:20px; }
	td.m_td { border:0px;text-align:center; }
	td.s_td { width:30%;border-style:solid;border-width:thin;background-color:#f8f8f8;color:#626262;font-weight:bold; }
	td.s_td1 { text-align:left;width:70%; }
	td { font-size:10pt; }
	
	input.btn { cursor:pointer;border:0px;background-color:#30ace7;color:#ffffff;margin:2px;padding:5px 2px;font-size:10pt; }
	input.rbtn { cursor:pointer;border:1px solid #fc6e51;background-color:#ffffff;color:#fc6e51;margin:2px;padding:7px 2px;font-size:10pt;font-weight:bold; }
	input.tgrbtn { cursor:pointer;border:0px;background-color:#fc6e51;color:#ffffff;margin:2px;padding:7px 2px;font-size:10pt;font-weight:bold; }
	input.gbtn { cursor:pointer;border:0px;background-color:#757575;color:#ffffff;margin:2px 10px;padding:7px 2px;font-size:10pt;font-weight:bold; }

	A:link {cursor:pointer;text-decoration:underline;}
	A:active {cursor:pointer;text-decoration:none;}
	A:visited {cursor:pointer;text-decoration:none;}
	A:hover {cursor:pointer;text-decoration:none;}
	.ntstr {font-size: 9pt;}
	

</style>
<script>
function mv_event(y){	
	alert('영상을 건너띄고 다시 보기 하실 경우 시간은 처음부터 다시 체크 됩니다.');
	document.xel.action = y;
	document.xel.method = "post";
//	document.xel.target = "_blank";
	document.xel.submit();
}

function a_func(z){
	window.open("","seedu","scrollbars=yes,resizable=yes,width=700,height=400");
	document.xel.action = "selec_edu_list.jsp?lec_id="+z;
	document.xel.method = "post";
	document.xel.target = "seedu";
	document.xel.submit();
}

function can_event(a){
	document.xel.lec_id.value = a;
	var con_test = confirm("수강,시험정보와 이수반영시간까지 모두 삭제됩니다.\n취소하시겠습니까?\n\nYour course information will be deleted.\nAre you sure you want to cancel?");
	if(con_test==true){		
		document.xel.action = "selec_req_del.jsp?lec_id="+a;
		document.xel.method = "post";
//		document.xel.target = "seedu";
		document.xel.submit();
	}else{
		return false;
	}
}

function test_event(v,x){
	alert('시험 응시는 3회까지만 가능합니다.\nYou can take the exam only three times.');
	document.xel.lec_id.value = v;
	document.xel.lang_t.value = x;
	window.open("","seedu","scrollbars=yes,resizable=yes,width=1200,height=800");
	document.xel.action = "se_exam_list.jsp";
	document.xel.method = "post";
	document.xel.target = "seedu";
	document.xel.submit();
}


function test_revent(v,x){
	document.xel.lec_id.value = v;
	document.xel.lang_t.value = x;
	window.open("","seedu","scrollbars=yes,resizable=yes,width=1200,height=800");
	document.xel.action = "se_exam_result.jsp";
	document.xel.method = "post";
	document.xel.target = "seedu";
	document.xel.submit();
}

//2019-04-16_cym  function sel_isu(n){	
//	var con_test1 = confirm("지난 학기와 현재 학기 모두를 이수 반영할 경우에는\n현재 학기 먼저 반영하신 후에 지난 학기 반영을 선택해 주셔야 합니다.\n\nIf you have completed both the last semester and the current semester,\nyou must reflect the current semester first before last semester.");
//	if(con_test1==true){		
//		window.open("","se_isu","resizable=yes,width=500,height=300");
//		document.xel.action = "se_isu_insert.jsp?lec_id="+n;
//		document.xel.method = "post";
//		document.xel.target = "se_isu";
//		document.xel.submit();
//	}
//2019-04-16_cym  }
function nbtn(){
	document.getElementById("notice").style.display="none";
}
function setCookieWeb ( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate()+expiredays);
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString()+ ";";
}

$( function() {
//    $( "#notice" ).draggable();

	$("#notice .btn_close").click(function () {
		setCookieWeb( "todayCookie1", "done" , 1);
		$("#notice").hide();
	});

	var cookiedata = document.cookie;
	
	if ( cookiedata.indexOf("todayCookie1=done") < 0 ){
		 $("#notice").show();
	}else {
		$("#notice").hide();
	}

//	var agent = navigator.userAgent.toLowerCase();
//	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
//	  
//	}else {
//	  alert("익스플로러 브라우저로 시청해주세요.");
//	  self.close();
//	}
 } );
</script>
</head>
<body style="text-align:center;">
<br>

<form name="xel">
<table style="width:80%;border:0px;">
	<tr>
	<td colspan="2" style="border-bottom:1px solid  #989898;"><h1 style="color:#757575;text-align:left;">◎ 나의 학습현황</h1></td>
	<tr>
</table>
<br>
<span style="color:red;font-weight:bold;">[안전교육은 80%이상 이수 시 시험응시가 가능합니다.]&nbsp;&nbsp;
<select name="edu_year">

<option value="2019"  >2019</option>

<option value="2018"  >2018</option>

<option value="2017"  >2017</option>

</select>
<select name="edu_term">

<option value="2학기"  >2학기</option>

<option value="1학기"  >1학기</option>

</select>
<input type="button" value="검색" onclick="sub('1','selec_my_req_list');" />
<br><br></span><br>
<div id="notice" style="display:none;position:absolute;top:100px;left:100px; width:600px;background-color:#ffff99;width:600px;height:600px;overflow:auto;">
	<div style="text-align:right;">
		<div style="text-align:right;color:red;font-size:20px;font-weight:bolder;padding:10px 10px 0 0;"><span  onclick="nbtn();">X</span></div>
	</div>
	<div style="text-align:left;padding:0 10px 10px 10px;">
	<h3 style="text-align:center;">※ 꼭 읽어주세요. ※<br></h3>
	<span class="ntstr" style="color:red;font-weight:bold;">(★★중요)안전교육 이수 전 브라우저 환경설정을 해주시기 바랍니다.</span><br>
	<span class="ntstr" style="color:red;font-weight:bold;">브라우저 설정이 되어 있지 않은 경우 진행률이 오르지 않을 수 있습니다.</span><br>
	<span  class="ntstr"style="color:red;font-weight:bold;">영상이 로딩되는 시간이 있으므로 조금 기다리신 후에 다음페이지 클릭이나 다음 챕터를 클릭 부탁드립니다.</span><br>
	<span  class="ntstr"style="color:red;font-weight:bold;">새로 추가된 영상이 끊기는 경우에는<br>실버라이트 코덱을 설치 후 이용부탁드립니다.(하단의 환경설정 방법 메뉴얼참고)</span><br><br>
	<span style="color:blue;font-weight:bold;text-decoration:underline;"><a href="browserSet1.pdf" target="_blank" style="text-decoration:underline;cursor:pointer;color:blue;">환경설정하는 방법 ▶</a></span><br><br><br>
	<span  class="ntstr"style="color:blue;font-weight:bold;">누락페이지가 있거나 진행률이 오르지 않는 경우 <span style="text-decoration:underline;">이메일: help@afm.co.kr</span>로 문의부탁드립니다.<br></span><span  class="ntstr" style="color:red;font-weight:bold;">문의주실때 학번, 성함, 진행률 미반영된 교육명등을 기재부탁드립니다.<br><br></span>
	<span class="ntstr" >안전교육 동영상을 시청하실 때에는 유선 인터넷 환경이나 인터넷 연결이 안정적인 환경에서 시청부탁드립니다. 와이파이 환경이나 인터넷 연결이 불안정한 환경에서 시청하실 경우 시청내역이 저장이 되지 않을 수 있으므로 시청하실때 확인 후 시청 부탁드립니다. </span><br><br>
	<span class="ntstr" style="color:red;font-weight:bold;">교육은 꼭 한 개의 교육을 이수후에 다른 교육을 들어주세요.<br><br></span>
	<span class="ntstr" >여러 개의 영상을 띄워놓고 들으실 경우 데이터가 정상처리가 되지 않습니다. <br>
	위의 경우에는 본인 책임이므로 데이터 손실 시 복원이 불가능합니다.<br></span><br>
	<a href="javascript:;" style="text-decoration:underline;cursor:pointer;font-size: 9pt;" class="btn_close">오늘 하루 열지 않음</a><br><br>
	</div>
</div>
<table style="width:80%;border:0px;">
	<tr>
		<td class="p_td">
			<table style="width:100%;border:0px;text-align:center;border-collapse:collapse;" cellspacing="0" cellpadding="10" >
			<tr>
					<td class="m_td" style="border-bottom:1px solid #646464;border-right:1px solid #646464;">
						<span class="s_style">실험전후안전(총 1시간) </span><br><br>
						<span class="sub_s" style="margin-left:30px;" title="교육기간(Training period)" alt="교육기간(Training period)">교육기간: </span>2019.03.27~2019.03.28<br>
						
						<input class="btn" type="button" onclick="mv_event('2019/02/index.jsp');" value="학습하기" title="학습하기(Learning)" alt="학습하기(Learning)">


						<!--2019-04-16_cym <input class="btn" type="button" onclick="sel_isu('');" value="선택반영" title="이수선택반영하기(Please select the training to be completed)" alt="이수선택반영하기(Please select the training to be completed)">-->

					</td>
					<td class="s_td1" style="border-bottom:1px solid #646464;">
					<a href="javascript:a_func('2')" title="학습현황(Current Status of Learning)" alt="학습현황(Current Status of Learning)"><span class="sub_s" style="margin-left:30px;" >[학습현황] </span>0.0 % / 100 %</a>&nbsp;&nbsp;&nbsp;&nbsp;

					<input class="rbtn" type="button" onclick="test_event('2','kor');" value="응시하기"  title="학습이 완료되어야만 응시하실 수 있습니다.(You must complete the course before you can apply.)" alt="학습이 완료되어야만 응시하실 수 있습니다.(You must complete the course before you can apply.)" disabled>&nbsp;&nbsp;
					<input class="tgrbtn" type="button" onclick="test_revent('2','kor');" value="결과보기" title="결과보기(Result)" alt="결과보기(Result)" disabled>

					<span class="sub_s" style="margin-left:30px;" title="시험점수(Score)" alt="시험점수(Score)" >[시험점수] </span>0 / 100&nbsp;&nbsp;&nbsp;&nbsp;

					<input class="gbtn" type="button" onclick="can_event('2');" value="취소하기" title="취소하기(Cancel)" alt="취소하기(Cancel)" >

					</td>
				</tr>				
				<tr><td style="padding-bottom:30px;" colspan="2">&nbsp;</td></tr>
			<tr>
					<td class="m_td" style="border-bottom:1px solid #646464;border-right:1px solid #646464;">
						<span class="s_style">안전관리기본(총 1시간) </span><br><br>
						<span class="sub_s" style="margin-left:30px;" title="교육기간(Training period)" alt="교육기간(Training period)">교육기간: </span>2019.03.27~2019.03.28<br>
						
						<input class="btn" type="button" onclick="mv_event('2019/33/index.jsp');" value="학습하기" title="학습하기(Learning)" alt="학습하기(Learning)">


						<!--2019-04-16_cym <input class="btn" type="button" onclick="sel_isu('');" value="선택반영" title="이수선택반영하기(Please select the training to be completed)" alt="이수선택반영하기(Please select the training to be completed)">-->

					</td>
					<td class="s_td1" style="border-bottom:1px solid #646464;">
					<a href="javascript:a_func('33')" title="학습현황(Current Status of Learning)" alt="학습현황(Current Status of Learning)"><span class="sub_s" style="margin-left:30px;" >[학습현황] </span>0.0 % / 100 %</a>&nbsp;&nbsp;&nbsp;&nbsp;

					<input class="rbtn" type="button" onclick="test_event('33','kor');" value="응시하기"  title="학습이 완료되어야만 응시하실 수 있습니다.(You must complete the course before you can apply.)" alt="학습이 완료되어야만 응시하실 수 있습니다.(You must complete the course before you can apply.)" disabled>&nbsp;&nbsp;
					<input class="tgrbtn" type="button" onclick="test_revent('33','kor');" value="결과보기" title="결과보기(Result)" alt="결과보기(Result)" disabled>

					<span class="sub_s" style="margin-left:30px;" title="시험점수(Score)" alt="시험점수(Score)" >[시험점수] </span>0 / 100&nbsp;&nbsp;&nbsp;&nbsp;

					<input class="gbtn" type="button" onclick="can_event('33');" value="취소하기" title="취소하기(Cancel)" alt="취소하기(Cancel)" >

					</td>
				</tr>				
				<tr><td style="padding-bottom:30px;" colspan="2">&nbsp;</td></tr>

			</table>
		</td>
	</tr>
</table>
<input type="hidden" name="lec_id">
<input type="hidden" name="lang_t">
</form>
</body>
</html>







		














































 

 







 






