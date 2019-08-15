//Ex. At (http://infodepot.korea.ac.kr/student/LockerApplication.jsp?AgreeYN=Y)
//Locker application(?) JS.

function f_agree(){
		document.frm0.method = "post";
		document.frm0.action = "./LockerApplication.jsp?AgreeYN=Y";
		document.frm0.submit();
}
function f_cancel(){
		document.frm0.method = "post";
		document.frm0.action = "./LockerApplication.jsp?CancelYN=Y";
		document.frm0.submit();
}

function f_save(strBldCd, strRequestDiv){
	msg = "";

	var val1 = document.all("i_TEL").value;
	var val2 = document.all("i_MOBILE").value;
	var val3 = document.all("i_EMAIL").value; // 05/02/14 추가

	if(val1 == "" && val2 == ""){
		
			alert("연락 전화번호, 핸드폰 번호를 입력하십시요.");
		
		
		document.all("i_TEL").focus();
		return;
	} else if(val3 == ""){
		
			alert("이메일(Email)주소를 입력하십시요.");
		
		
		document.all("i_EMAIL").focus();
		return;
	}	


	if(strRequestDiv == '91'){
		
			msg = "신청을 취소하시겠습니까?";
		
	}else if(strRequestDiv == '01'){
				
	  if(strBldCd == '01') {
			msg = "중앙도서관 신관 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 중앙도서관 신관 지하1층 매점에서 열쇠를 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 5,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 10,000원입니다.\n\n";
	  } else if(strBldCd == '02') {
			msg = "중앙광장 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 중앙광장 지하1층 락커룸에서 열쇠를 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 5,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 10,000원입니다.\n\n";
	  } else if(strBldCd == '03') {
			msg = "우당교양관 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 우당교양관 1층 로비에서 열쇠를 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 10,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 5,000원입니다.\n\n";
	  } else if(strBldCd == '04') {
			msg = "과학도서관 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 과학도서관 지하 1층 계단 옆(하나스퀘어 연결계단)에서 열쇠를\n 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 5,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 10,000원입니다.\n\n";
	  } else if(strBldCd == '16') {
			msg = "HANA SQUARE 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 과학도서관 지하 1층 계단 옆(하나스퀘어 연결계단)에서 열쇠를\n 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 5,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 10,000원입니다.\n\n";
	  } else if(strBldCd == '20') {
			msg = "백주년기념관 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 백주년기념관 지하1층 입구에서 열쇠를 배부 받으시기 바랍니다.\n\n";
			msg += "2. 열쇠보증금은 5,000원이며 사용종료시 환불하여 드립니다.\n\n";
			msg += "3. 사용료는 10,000원입니다.\n\n";
	  } else if(strBldCd == '21') {
			msg = "세종학술정보원 사물함 신청안내\n\n";
			msg += "1. 당첨될 경우 2019. 09. 09(월) ~ 09. 10(화) 08:00~18:00 에 \n 세종학술정보원 2층 로비에서 당첨자 확인증을 배부 받으시기 바랍니다.\n\n";
	  }
	  
			msg += "신청하시겠습니까?";		
		
	}
	
	if( strBldCd == '05' ) {
		
		if ( '0217' != '0217' ) {
			
				alert("공학관 사물함은 공과대학 학생만 신청할 수 있습니다.");
			
			return;
		}
			
	  } else if( strBldCd == '06' ) {
		
		if ( '0217' != '0217' ) {
			
				alert("제2공학관 사물함은 공과대학 학생만 신청할 수 있습니다.");
			
			return;
		}
			
	  } 	else if( strBldCd == '07' ) {
		
		if ( '0217' != '0217' ) {
			
				alert("창의관 사물함은 공과대학 학생만 신청할 수 있습니다.");
			
			return;
		}
			
	  } 	else if( strBldCd == '17' ) {
		
		if ( '0217' != '0217' ) {
			
				alert("과학도서관 사물함은 공과대학 학생만 신청할 수 있습니다.");
			
			return;
		}
			
	  } 		
	
	if(confirm(msg)){
		location.href = "/student/LockerApplicationSave.jsp?place="+strBldCd+"&div="+strRequestDiv+"&tel="+val1+"&mobile="+val2+"&mail="+val3;
	}
	bubbleInsert = false;
}
