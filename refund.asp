<!--
EX) "https://appexam.ybmnet.co.kr/toeic/receipt/cancel_1_refund.asp"
Pretty cool. The banking and stuff. Just, kinda tingly. -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<link rel="stylesheet" type="text/css" href="/common_exam/toeic/css/toeic.css">
<link rel="shortcut icon" href="/common_exam/images/favicon_ss_t_16x16.ico" type="image/x-icon">
<title>TOEIC</title>
<script type="text/javascript" language="javascript"  src="/common_exam/js/function.js" ></script>
<script type="text/javascript" language="javascript"  src="/common_exam/js/func.js" ></script>
<script language="javascript">
<!--
	function fnCancel(){
	
		var frm = document.cancelform;

		if(!nullCheck(frm.bank_owner,"예금주를 입력해 주세요.")) return ;
		if(!nullCheck(frm.bank_account,"계좌번호를 입력해 주세요.")) return ;
		if(!nullCheck(frm.bankCd,"은행을 입력해 주세요.")) return ;
		frm.bankNm.value = frm.bankCd.options[frm.bankCd.selectedIndex].text;

		if (frm.account_status.value==""){
			alert("계좌조회 인증 후 신청해주세요.");
			return;
		}else if(frm.account_status.value=="0"){
			alert("계좌번호 인증 중 오류가 발생했습니다.");
			return;
		}

		if(confirm("접수를 취소하시겠습니까?\n\n취소 이후에는 복원이 되지 않습니다.")){		
			frm.action = "cancel_1_refund_proc.asp";
			frm.submit();
		}
	}

	function Confirm(regid,proname){
		var frm = document.cancelform;

		if(!nullCheck(frm.bank_owner,"예금주를 입력해 주세요.")) return ;
		if(!nullCheck(frm.bank_account,"계좌번호를 입력해 주세요.")) return ;
		if(!nullCheck(frm.bankCd,"은행을 입력해 주세요.")) return ;

		var EP_account_nm=frm.bank_owner.value;
		var EP_bank_cd=frm.bankCd.value;
		var EP_account_no=frm.bank_account.value;
	
		AccountCertify(EP_account_nm,EP_bank_cd,EP_account_no,regid,proname);
	
	}
-->
</script>
</head>
<body>
<table width="101%" class="wrap"  >
<tr>
	<td valign="top">
	<!-- body_wrap -->
	<table class="body_wrap"  align="center">
	<tr>
		<!-- top -->
		<td>
		<table width="960px" >
		<tr>
			<!-- bi -->
			<td valign="top" class="bi">
			
	<a href="/YBMSisacom.asp?SiteURL=http%3A%2F%2Fexam%2Eybmnet%2Eco%2Ekr&pageURL=%2Ftoeic%2F"><img src="/common_exam/toeic/images/common/toeic_bi.gif" /></a>

			</td>
			<!-- //bi -->
			<td valign="top">
			<table >
			<tr>
				<!-- gnb -->
				<td height="43px" align="right">
				
<script language="JavaScript">
	function goToLogin(){
		location.href="http://www.ybmnet.co.kr/common/login.asp?url=https%3A%2F%2Fappexam%2Eybmnet%2Eco%2Ekr%2Ftoeic%2Freceipt%2Fcancel%5F1%5Frefund%2Easp&what=appexam%2Eybmnet%2Eco%2Ekr"
	}
	function goToLogout(){
		location.href="/common/logout.asp?url=HTTP%3A%2F%2Fappexam%2Eybmnet%2Eco%2Ekr%2F&what=appexam%2Eybmnet%2Eco%2Ekr"

	}
</script>
<script language="javascript">
<!-- Emforce General Tag-->
var _ekamsAdvertiserID = 660;
</script>
<script language="javascript" src="/common_exam/js/roiJsNewScript660.js"></script>
<div class="toeic_solgan"><img src="https://imagesisa.ybmnet.co.kr/exam/toeic/toeic_slogan.png"></div>
<table class="wrap_gnb_tb" align="right">
		<tr>
				<td><a href="http://exam.ybmnet.co.kr">어학시험</a></td>
				<td style="padding:0 6px; color:#ddd">I</td>
				<td><a href="/YBMSisacom.asp?SiteURL=http://www.ybmclass.com" target="_blank">토익인강</a></td>
				<td style="padding:0 6px; color:#ddd">I</td>
				<td ><a href="http://www.ybmit.com" target="_blank">IT 자격증</a></td>
				<td style="padding:0 6px; color:#ddd">I</td>
				<td><a href="/YBMSisacom.asp?SiteURL=http://www.ybmnet.co.kr&pageURL=mypage/mypage.asp" target="_blank">My 서비스</a></td>
				<td style="padding:0 6px; color:#ddd">I</td>
				
				<td><a href="JavaScript:goToLogout()">로그아웃</a></td>
				
				<td style="padding:0 0 5px 10px"><a href="/YBMSisacom.asp?SiteURL=http://www.ybmnet.co.kr" target="_blank"><img src="https://exam.ybmnet.co.kr/common/common/exam_gnb_bi.png" border="0" alt="ybmnet.co.kr"></a></td>
		</tr>
</table>

				</td>
				<!-- //gnb -->
			</tr>
			<tr>
				<!-- lnb -->
				
<script src="/common_exam/js/jquery-1.7.1.min.js"></script>


<td align="left"><!-- gnb -->
  
  <div class="subGnb"><span style="display:hide; text-indent:-9999px">subGnb</span>
    <ul class="mnu">
      <li onmouseover="selBind(0, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=318" class="mnu1 on"><span>시험소개</span></a>
        <ul class="smnu1" style="display:block">
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/history.asp" class="smnu1_1 on">연혁</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/since.asp" class="smnu1_2">개발배경/개발기관</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/composition.asp" class="smnu1_3">시험구성</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/area.asp" class="smnu1_4">출제분야</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/sample_lc1.asp" class="smnu1_5">샘플문제</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/info/report.asp" class="smnu1_6">성적표양식</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/news/ets_archives.asp" class="smnu1_7">ETS Research Archives </a></li>
        </ul>
      </li>
      <li onmouseover="selBind(1, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=319" class="mnu2"><span>이용현황</span></a>
        <ul class="smnu2" style="display:none">
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/recruit_company.asp" class="smnu2_1">기업 및 기관</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/government.asp" class="smnu2_2">정부 및 공공기관</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/license.asp" class="smnu2_3">국가고시 및 자격증</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/grade.asp" class="smnu2_4">대학교</a></li>		  
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/college_graduate.asp" class="smnu2_5">전문대학교</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/status/grad_admission.asp" class="smnu2_6">대학원</a></li>
        </ul>
      </li>
      <li onmouseover="selBind(2, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=320" class="mnu3"><span>시험접수</span></a>
        <ul class="smnu3" style="display:none">
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/receipt/receipt.asp" class="smnu3_1">인터넷접수</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/confirm/confirm_identify.asp" class="smnu3_2">접수확인</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/receipt/cancel_schedule.asp" class="smnu3_3">접수취소/확인</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/info/receipt_schedule.asp" class="smnu3_4">시험일정</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/info/receipt_visit.asp" class="smnu3_5">TOEIC Plaza 안내</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=appexam.ybmnet.co.kr&pageURL=/toeic/info/school_search_list.asp" class="smnu3_6">고사장 안내</a></li>
        </ul>
      </li>
      <li onmouseover="selBind(5, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=321" class="mnu4"><span>성적확인</span></a></li>
      <li onmouseover="selBind(3, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=322" class="mnu5"><span>수험자가이드</span></a>
        <ul class="smnu5" style="display:none">
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/guide/guide_receipt.asp" class="smnu5_1">수험자가이드</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeic/guide/guide_rule_1.asp" class="smnu5_2">시험관리규정</a></li>
        </ul>
      </li>
      <li onmouseover="selBind(6, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=323" class="mnu7"><span>토익스토리</span></a></li>
      <li onmouseover="selBind(7, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr/toeicswt/banner.asp?bannerid=324" class="mnu8"><span>학습교재</span></a></li>
      <li onmouseover="selBind(4, 2, 'over');" onmouseout="selBind(2, 2, 'out');"><a href="http://exam.ybmnet.co.kr" class="mnu6"><span>전체어학시험보기</span></a>
        <ul class="smnu6" style="display:none">
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeicswt/index.asp" class="smnu6_1">TOEIC Speaking</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/toeflitp/index.asp" class="smnu6_2">TOEFL ITP</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/tbridge/index.asp" class="smnu6_3">TOEIC Bridge</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/jet/index.asp" class="smnu6_4">JET</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/jetspeaking/index.asp" class="smnu6_5">JET-SW</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/jetkids/index.asp" class="smnu6_6">JET-Kids</a></li>
          <!-- li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/ibset/index.asp" class="smnu6_7">iB-SET</a></li -->
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/jpt/index.asp" class="smnu6_9">JPT</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/nihongo/index.asp" class="smnu6_8">日本語檢定</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/sjpt/index.asp" class="smnu6_10">SJPT</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/tsc/index.asp" class="smnu6_11">TSC</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/bizhanja/index.asp" class="smnu6_12">YBM 商務漢檢</a></li>
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/kpe/index.asp" class="smnu6_13">KPE</a></li>
          <!-- li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/kidshanja/info_hanja.asp" class="smnu6_14">YBM漢字인증시험</a></li -->
          <li><a href="/YBMSisacom.asp?SiteURL=exam.ybmnet.co.kr&pageURL=/tfi/index.asp" class="smnu6_15">TFI</a></li>
        </ul>
      </li>
    </ul>
  </div>
  
  <!--// gnb --></td>
<script src='/common_exam/toeic/js/topmenu.js'></script> 
<script type="text/javascript">
<!--
	selBind(2, 2, 'over');
	selBind(2, 2, 'out');
//-->
</script> 

				<!-- //lnb -->
			</tr>
			</table>
			</td>
		</tr>
		</table>
		</td>
		<!-- //top -->
	</tr>
	<tr>
		<!-- middle -->
		<td>
		<table width="960px" >
		<tr>
			<!-- left menu -->
			<td valign="top">
			

<table>
	<tr>
		<td><img src="/common_exam/toeic/images/common/03_title.gif" /></td>
	</tr>
	<tr>
		<td class="depth">
			<table style="border-bottom:2px solid #FFFFFF">

	
				<tr>
					<td class="depth_list"><a href="https://appexam.ybmnet.co.kr/toeic/receipt/receipt.asp"><img src="/common_exam/toeic/images/common/left_menu03_m1_off.gif" /> </td>
				</tr>
				
	
				<tr>
					<td class="depth_list"><a href="https://appexam.ybmnet.co.kr/toeic/confirm/confirm_list.asp"><img src="/common_exam/toeic/images/common/left_menu03_m2_off.gif" /> </td>
				</tr>
				
				<tr>
					<td class="depth_list" style="border:none"><img src="/common_exam/toeic/images/common/left_menu03_m3_on.gif" /> </td>
				</tr>			 
				<tr>
					<td  style="border-bottom:1px solid #e3e3e3;">
						<!-- 3depth -->
						<table class="depth_3">
							  
							<tr>
								<td>ㆍ<a href="http://appexam.ybmnet.co.kr/toeic/receipt/cancel_schedule.asp"><span  >취소 신청 방법 및 기간</span></a></td>
							</tr>
							 
							<tr>
								<td>ㆍ<a href="https://appexam.ybmnet.co.kr/toeic/receipt/cancel.asp"><span class="depth_3on">접수취소</span></a></td>
							</tr>
							 
							<tr>
								<td>ㆍ<a href="https://appexam.ybmnet.co.kr/toeic/receipt/cancel_list.asp"><span  >취소신청내역</span></a></td>
							</tr>
								
							 
						</table>
						<!-- //3depth -->
					</td>
				</tr>
				
	
				<tr>
					<td class="depth_list"><a href="http://appexam.ybmnet.co.kr/toeic/info/receipt_schedule.asp"><img src="/common_exam/toeic/images/common/left_menu03_m4_off.gif" /> </td>
				</tr>
				
	
				<tr>
					<td class="depth_list"><a href="http://appexam.ybmnet.co.kr/toeic/info/receipt_visit.asp"><img src="/common_exam/toeic/images/common/left_menu03_m5_off.gif" /> </td>
				</tr>
				
	
				<tr>
					<td class="depth_list"><a href="http://appexam.ybmnet.co.kr/toeic/info/school_search_list.asp"><img src="/common_exam/toeic/images/common/left_menu03_m6_off.gif" /> </td>
				</tr>
				
				 
			</table>
		</td>
	</tr> 
	
	<tr>
		<td class="depth_bn"><a href="http://exam.ybmnet.co.kr/center_new/" target="_blank"><img src="../images/toeic_receipt/ldepth_faq.gif" border="0" /></a></td>
	</tr>
	
</table>

			</td>
			<!-- //left menu -->
			<!-- contents wrap -->
			<td valign="top" class="contents_wrap">
			<table width="757px" >
			<tr>
				<!-- title -->
				<td height="59px" valign="top" >
				<table  class="title" align="center">
				<tr>
					<td> <img src="../images/toeic_receipt/receipt_contents_title5.gif"  /> </td>
					<td class="nb">
					<!-- nb -->
					<img src="/common_exam/toeic/images/common/icon_home.gif" />HOME > 시험접수 > <span class="nb_here">접수취소/확인</span>
					<!-- //nb -->
					</td>
				</tr>
				</table>
				</td>
				<!-- //title -->
			</tr>
			<tr>
				<td valign="top">
				<table  class="contetns_bg">
				<tr>
					<!-- contents start -->
					<td class="contetns_start">
					<table width="100%">
					<tr>
						<td class="stitle" style="border-bottom:1px solid #e5e5e5"><img src="../images/toeic_receipt/receipt_contents_stitle14.gif" /></td>
					</tr>
					<tr>
						<td>
						<!-- 현재 접수내역 -->
						<table style="margin-top:15px">
						<tr>
							<td class="sstitle">ㆍ취소신청과목</td>
						</tr>
						<tr>
							<td>
							<table class="table_info">
							<tr>
								<th>과목</th>
								<th>회차 및 시험일 </th>
								<th>수험번호</th>
								<th>고사장</th>
								<th class="nobd">성적표 수령방법 </th>
							</tr>
							<tr>
								<td class="bg">TOEIC</td>
								<td>Meh </td>
								<td>125693</td>
								<td>Muh </td>
								<td class="nobd">Bluh</td>
							</tr>
							
							</table>
							</td>
						</tr>
						</table>
						<!-- //현재 접수내역 -->
						</td>
					</tr>
					<tr>
						<td>
						<!-- 결제정보 -->
						<form name="cancelform" method="post">
							<input type="hidden" name="strParasConfirm" value="strLOL">
							<input type="hidden" name="memberid" value="memberidLOL">
							<input type="hidden" name="regid" value="regidLOL">
							<input type="hidden" name="refund_price" value="99BTC">
							<input type="hidden" name="refund_per" value="150%!">
							<input type="hidden" name="package_cancel" value="1">
							<input type="hidden" name="account_status" id="account_status" value="">
							<table style="margin-top:5px">
							<tr>
								<td class="sstitle">ㆍ취소신청자 정보 </td>
							</tr>
							<tr>
								<td>
								<table class="table_form">
								<tr>
									<th width="100px" class="tbd">이름</th>
									<td class="tbd">Melon Musk</td>
								</tr>
								<tr>
									<th>E-mail</th>
									<td>melonmusk@mars</td>
								</tr>
								<tr>
									<th>전화번호</th>
									<td>MARS-mars-MARS</td>
								</tr>
								
								<tr>
									<th class="bg">환불계좌정보</th>
									<td style="padding:0">
									<table>
									<tr>
										<td style="padding:0; border:none ;padding:8px 10px 3px 10px">예금주</td>
										<td style="padding:0; border:none">
										<input type="text" name="bank_owner" class="input_s" maxlength="20" />
										</td>
									</tr>
									<tr>
										<td style="padding:0; border:none;padding:3px 10px">입금은행</td>
										<td style="padding:0; border:none">
										<input type="hidden" name="bankNm" value="">
										<select name="bankCd"  class="select_s" style="width:150px">
											<option value='039' >경남은행</option><option value='034' >광주은행</option><option value='004' >국민은행</option><option value='003' >기업은행</option><option value='031' >대구은행</option><option value='032' >부산은행</option><option value='050' >상호저축은행</option><option value='045' >새마을금고</option><option value='007' >수협은행</option><option value='088' >신한은행</option><option value='048' >신협</option><option value='020' >우리은행</option><option value='071' >우체국</option><option value='037' >전북은행</option><option value='035' >제주은행</option><option value='023' >한국스탠다드차타드은행</option><option value='027' >한국씨티은행</option><option value='002' >KDB산업은행</option><option value='081' >KEB하나은행</option><option value='011' >NH농협</option>
										</select>
										</td>
									</tr>
									<tr>
										<td style="padding:0; border:none; padding:5px 10px 8px 10px">계좌번호</td>
										<td style="padding:0; border:none">
										<input type="text" name="bank_account" class="input_l" onBlur="chkNum(this)"  maxlength="20"/>
										</td>
										<td><a href="javascript:Confirm('26199797','TOEIC환불');"><img src="/common_exam/toeic/images/toeic_receipt/btn_submit.gif" border="0" /></a></td>
									</tr>
									</table>
									</td>
								</tr>
								<tr>
									<th>취소 신청일 </th>
									<td> 2079-04-23 </td>
								</tr>
								</table>
								</td>
							</tr>
							<tr>
								<td align="center"><a href="javascript:fnCancel();"><img src="../images/toeic_receipt/btn_cancel_app.gif" border="0" /></a></td>
							</tr>
							</table>
						</form>
						<!-- //결제정보 -->
						</td>
					</tr>
					<tr>
						<td>
						<!-- 안내 -->
						<table class="notice">
						<tr>
							<th><img src="../images/toeic_receipt/receipt_contents_stitle17.gif" /></th>
						</tr>
						<tr>
							<td class="nobd"> ㆍ본인명의 계좌로 작성을 하시기 바랍니다.<br />
							ㆍ취소 처리후 환불시 상기 은행으로 입금되오니, 정확한 입력바랍니다.<br />
							ㆍ환불계좌정보 인증 후 접수취소가 가능하며 은행 점검 시간에 취소 신청시 담당자의 계좌번호 인증 확인 후 환불절차가 진행됩니다.<br>
							&nbsp;&nbsp;&nbsp;<a href='#' onClick="window.open('/common_exam/pop_bank_ptime.asp', 'popupbank', 'resizable=no scrollbars=yes width=400 height=700')"><span class="c_font">계좌번호 인증 가능시간 보기</span></a><br />
							ㆍ환불 금액은 취소신청 시기에 따라 정해지며, 취소/환불규정에 의하여 처리됩니다.<br />
							ㆍ취소 신청자에 대한 환불은 영업일 기준 3일 이내에 각 신청기간에 해당되는 환불 금액을  위에 입력한 은행 계좌로 송금하여 드립니다.<br />
							ㆍ처리 상태가 은행정보 오류일 경우에만 접수취소내역 확인에서 은행 계좌를 수정하실 수 있습니다.<br />
							ㆍ상품권으로 접수하였을 경우, 상품권잔액도 신청기간에 따라 차등환불 현금입금 처리됩니다.<br />
							<span style="padding-left:10px">단 취소 시점이 상품권 유효기간 이후일 경우 상품권 잔액환불이 불가합니다.</span><br>
							ㆍ인터넷 접수기간 이후 취소의 경우 패키지 취소는 각 과목 환불규정에 따라 환불 율 적용됨<br />
							<span style="padding-left:10px">(패키지 접수 시 할인 적용된 금액에서 환불규정에 따라 환불됩니다.)</span><br />
							ㆍ취소 신청에 대해서는 재차 변경이 불가하오니 신중을 기해 신청해주시길 바랍니다.</td>
						</tr>
						</table>
						<!-- //안내 -->
						</td>
					</tr>
					</table>
					</td>
					<!-- //contents start -->
				</tr>
				</table>
				</td>
			</tr>
			</table>
			</td>
			<!-- //contents wrap -->
		</tr>
		</table>
		</td>
		<!-- //middle -->
	</tr>
	</table>
	<!-- //body_wrap -->
	</td>
</tr>
</table>
<!-- footer -->
<script type="text/JavaScript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
</script>
<link href="/common_exam/toeic/css/footer.css" rel="stylesheet" type="text/css" />
<div id="ets">
  <p class="info_center">ETS, the ETS logo, TOEIC, 토익, TOEFL ITP are registered trademarks of Educational Testing Service, Princeton, New Jersey, U.S.A., used in the Republic of Korea under license. <br /><br />
    <span style="font-size:12px;">(주)와이비엠넷은 통신판매중개자로서 어학시험 서비스는 (주)와이비엠의 책임하에 운영되고 있습니다.</span></p>
</div>
<div id="footer_basic">  
  <div id="info2">
    <div class="info2">
		<div id="info">
		<ul>		
			<li class="frst"><a href="https://company.ybmnet.co.kr/" target="_blank" title="회사소개로 이동">회사소개</a></li>
			<li><a href="javascript:MM_openBrWindow('https://member.ybmnet.co.kr/join/terms/ybmnet_agree.html','','scrollbars=yes,width=700,height=680')" title="이용약관 보기(새창)">이용약관</a></li>
			<li><a href="http://member.ybmnet.co.kr/join/terms/ybmnet_indiv_new.html" target="_blank">개인정보처리방침</a> </li>
			<li><a href="https://company.ybmnet.co.kr/creator/" target="_blank" title="콘텐츠창작지원 이동">콘텐츠창작지원</a></li>
			<li><a href="https://company.ybmnet.co.kr/proposal" target="_blank" title="제휴문의로 이동">비즈니스제휴제안</a></li>
			<li><a href="https://www.ybmnet.co.kr/center_2014/index.asp" target="_blank" title="고객센터로 이동">고객센터</a></li>
		</ul>
		<div style="float:right; border-left:1px solid #efefef; padding:0 0 0 20px">
			<p style="letter-spacing:-1px; font-weight:bold">기업은행채무지급보증</p>
			<p style="letter-spacing:-1px">전자상거래 등에서의 소비자보호에 관한 법률에 따라<br>
			기업은행과 채무지급보증 계약을 체결하여 고객님의<br>
			결제금액에 대한 안전거래를 보장하고 있습니다.</p>
			<p style="letter-spacing:-1px"><a href="http://www.ybmnet.co.kr/footer/ibkBank.htm" target="_blank" onclick="window.open(this.href, 'popupNam4', 'width=620, height=560, statusbar=0, scrollbars=1'); return false;" title="새창" style="background:url(https://www.ybmnet.co.kr/images/index/bg_ibkbank.gif) no-repeat top right; padding-right:9px">서비스가입 사실 확인</a></p>
      </div>
	  </div>
      <div class="txt">
		<p>㈜와이비엠넷 경기도 성남시 분당구 대왕판교로 670 유스페이스2 A동 8/9층  대표이사 오재환 <br />
			사업자등록번호 220-81-89608 / 통신판매업신고 경기성남-0034 <a href="javascript:MM_openBrWindow('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208189608','bizCommPop','scrollbars=yes,width=1000,height=700')" title="사업자정보확인(새창)"><u>사업자정보확인</u></a><br />
			시험 02.2279.0505 / 결제 02.2008.5200 / Fax. 0502-320-5201 개인정보 <a href="mailto:privacy@ybm.co.kr" title="개인정보관련 문의메일 보내기">privacy@ybm.co.kr</a></p>
		  <address>
		  <em>Copyright &copy;</em> (주)와이비엠넷. All rights reserved.
		  </address>
      </div>
    </div>
  </div>
</div>
<!--CHK_END_STRING-->
<!-- 구글 애널리틱스 소스코드 :: 웹로거 대체 2014-10-15	--> 
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55278078-5', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');

</script>
<!-- //footer -->
</body>
</html>
