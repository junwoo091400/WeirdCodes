<!--
<2018 / 10 / 24 (Wednesday) Accessed>
ORIGIN: "https://www2.yonsei.ac.kr/entrance/2019/susi/pass_1st_bcbf/pass.asp"

Just Plain old 'form' submit. But they used javascript to send it. Haha interesting.

-->

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
	<title>연세대학교 입학처</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="연세대학교 입학처" />
	<meta name="description" content="연세대학교 입학처" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<link type="text/css" rel="stylesheet" href="css/exam.css" />
</head>
<script language="javascript">
function SetFocus(){
	document.FORM1.Name.focus();
}
function SendIt(){
	document.FORM1.submit();
}
</script>

<script language="JavaScript"> 
 var initBody 
 function beforePrint(){
  initBody = document.body.innerHTML; 
  document.body.innerHTML = print_page.innerHTML;
 } 
 function afterPrint(){
  document.body.innerHTML = initBody; 
 } 
 function pageprint(){
  window.onbeforeprint = beforePrint; 
  window.onafterprint = afterPrint; 
  window.print();
 } 
</script> 
<body onload="SetFocus();">

	<div class="examMainbody">

	<!-- 고사장안내 header -->
	<div class="examHeader">
		<h1><img src="images/logo_yonsei.gif" alt="연세대학교 입학처" /></h1>
		<h2>2019학년도 수시모집 특기자전형(과학공학/IT명품인재계열)<br> 2단계 평가 대상자 발표</h2>
	</div>
	<!--// 고사장안내 header -->

	<!-- 고사장안내 content -->
	<div class="examContent">

		<!-- 정보 조회 -->
		<form method=post action="pass_ok.asp" name="FORM1">
			<fieldset id="">
				<legend>정보 조회</legend>
				<table class="dataTable">
					<caption>성명, 생년월일, 수험번호</caption>
					<colgroup>
						<col style="width:20%;"/>
						<col />
					</colgroup>
					<tbody>
						<tr>
							<th scope="row">성명</th>
							<td>
								<div class="inputBox inline w50per">
									<span class="inputWrap"><input type="text" name="Name" title="성명" /></span>
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row">수험번호</th>
							<td>
								<div class="inputBox inline w50per">
									<span class="inputWrap"><input type="text" name="Suhumno" title="수험번호" /></span>
								</div>
								<span class="exTxt">예) BCDA12345</span>
							</td>
						</tr>
						<tr>
							<th scope="row">생년월일</th>
							<td>
								<div class="inputBox inline w50per">
									<span class="inputWrap"><input type="text" name="Birthdate" title="생년월일" /></span>
								</div>
								<span class="exTxt">예) 990101</span>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- Button -->
				<div class="btnGroup center">
					<a href="javascript:SendIt();" class="bgDarkBlue btnType03 w200 txtWhite">확인</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>

			</fieldset>
		</form>
		<!--// 정보 조회 -->

		<!-- 유의사항 -->
		<div class="cautionBox">
			<ol class="indent">
				<li>
					<span class="txtDarkBlue">1. 2019학년도 연세대학교 수시모집 지원자 중 아래 전형 지원자에 한하여 조회 가능합니다.</span>
				</li>
				<li>
					<ul class="txtPurple" style="padding-left:20px; line-height:0.1;">
						<li> <b>특기자전형 (과학공학인재계열 / IT명품인재계열)</b></li>
					</ul>
				</li>
				<li>
					<span class="txtDarkBlue">2. 수험번호는 인터넷 원서접수 시 부여된 9자리 번호입니다. (예 : BCDA12345)</span>
				</li>
				<li>
					<span class="txtDarkBlue">3. 원주캠퍼스 지원자는 원주캠퍼스 발표일정에 따라 원주 입학홍보처 홈페이지에서 조회 바랍니다.</span>
				</li>
				<li>
					<span class="txtDarkBlue">4. 신촌캠퍼스 문의전화 : 02-2123-4131 (입학상담실)</span>
				</li>

			</ol>
		</div>


	</div>
	<!--// 고사장안내 content -->

	<!-- 고사장안내 footer -->
	<div class="examFooter">
		COPYRIGHT 2018 © YONSEI.AC.KR ALL. RIGHT. RESERVED. 
	</div>
	<!--// 고사장안내 footer -->

	</div>


</body>
</html>