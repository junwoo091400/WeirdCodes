	// bank!
  
  // 한글 체크
	function IsHangulCorrect( val ) {
		for ( i = 0; i < val.length; i++ ) {
			ch = val.charCodeAt( i );
			if ( ch <= 128 ) return false;
		}
		return true;
	}

	// 한글 포함 여부 체크
	function IsHangulExists( val ) {
		for ( i = 0; i < val.length; i++ ) {
			ch = val.charCodeAt( i );
			if ( ch > 128 ) return true;
		}
		return false;
	}

	// 영문자 체크
	function IsAlphabetCorrect( checkStr, caseStr, addStr ) {
		var checkLower = "abcdefghijklmnopqrstuvwxyz";
		var checkUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var checkOK = "";

		// 체크해야할 문자지정 : a - 소문자, A - 대문자, all - 대소문자모두
		if ( caseStr == "a" ) checkOK = checkLower;
		else if ( caseStr == "A" ) checkOK = checkUpper;
		else if ( caseStr == "all" ) checkOK = checkLower + checkUpper;

		// 추가적으로 체크해야할 문자들
		checkOK += addStr;

	  	for (i = 0;  i < checkStr.length;  i++)  {
	    		ch = checkStr.charAt(i);
	    		for (j = 0;  j < checkOK.length;  j++)
	      			if (ch == checkOK.charAt(j)) break;
	    		if (j == checkOK.length) {
	      			return (false);
	      			break;
	    		}
	  	}
	  	return (true);
	}

	// 숫자 체크
	function IsNumericCorrect( checkStr, addStr ) {
		var checkOK = "0123456789";

		// 추가적으로 체크해야할 문자들
		checkOK += addStr;

	  	for (i = 0;  i < checkStr.length;  i++)  {
	    		ch = checkStr.charAt(i);
	    		for (j = 0;  j < checkOK.length;  j++)
	      			if (ch == checkOK.charAt(j)) break;
	    		if (j == checkOK.length) {
	      			return (false);
	      			break;
	    		}
	  	}
	  	return (true);
	}

	/************************************************************************/
	/* 사용법: IsAlphaNumCorrect(object) : 영문,숫자만 입력가능한 경우     */
	/************************************************************************/
	function IsAlphaNumCorrect(checkStr, addStr)

	{
		var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

		// 추가적으로 체크해야할 문자들
		checkOK += addStr;

	  	for (i = 0;  i < checkStr.length;  i++)  {
	    		ch = checkStr.charAt(i);
	    		for (j = 0;  j < checkOK.length;  j++)
	      			if (ch == checkOK.charAt(j)) break;
	    		if (j == checkOK.length) {
	      			return (false);
	      			break;
	    		}
	  	}
	  	return (true);
	}

	// 주민번호 체크
	function IsJuminNumCorrect( checkStr ) {
		var chk3 = 0;

		for ( var i = 0; i <= 11; i++ )
			chk3 = chk3 + ((i%8+2) * parseInt(checkStr.substring(i,i+1)))

		chk3 = 11 - (chk3 % 11);
		chk3 = chk3 % 10;

		if ( chk3 != parseInt(checkStr.substring(12,13)) ) return false;

		return true;
	}

	// 외국인등록번호 체크
	function IsForeignNoCorrect( reg_no ) {
		var sum = 0, odd = 0;

		multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
		buf = new Array(13);

		for ( i = 0; i < 13; i++ ) buf[i] = parseInt( reg_no.charAt(i) );

		odd = buf[7] * 10 + buf[8];

		if ( odd % 2 != 0 ) return false;

		if ( (buf[11] != 6) && (buf[11] != 7) && (buf[11] != 8) && (buf[11] != 9) ) return false;

		for ( i = 0, sum = 0; i < 12; i++ ) sum += (buf[i] *= multipliers[i]);

		sum = 11 - (sum % 11);

		if ( sum >= 10 ) sum -= 10;

		sum += 2;

		if ( sum >= 10 ) sum -= 10;

		if ( sum != buf[12] ) return false;
		else	return true;
	}

	// 어학시험 주민번호체크(주민번호, 외국인등록번호)
	function IsJuminNo( juminno ) {
		var result, gender;

		result = IsNumericCorrect( juminno, "" );

		if ( result ) {
			gender = juminno.substr( 6, 1 );

			if ( gender == "5" || gender == "6" || gender == "7" || gender == "8" ) {
				result = IsForeignNoCorrect( juminno );
			}
			else if ( gender == "9" ) {
				var cyear, cmonth;

				cyear = Number( juminno.substr( 0, 2 ) );
				cmonth = Number( juminno.substr( 2, 2 ) );

				if ( (cyear >= 0 && cyear <= 99) && (cmonth >= 1 && cmonth <= 12 ) ) result = true;
				else result = false;
			}
			else {
				result = IsJuminNumCorrect( juminno );
			}
		}

		return result;
	}

	// 오토탭 : 자동으로 포커스이동하기
	function AutoTab(from_obj, to_obj, aa) {
		if (from_obj.value.length >= aa) to_obj.focus();
	}

	// 우편번호찾기
	function FindAddress( frm, zipcode1, zipcode2, addr1, addr2, opt ) {
		var url = "/common/zipcode/zipcode_popup.asp?param1=" + zipcode1 + "&param2=" + zipcode2 + "&param3=" + addr1 + "&param4=" + addr2 + "&param5=" + frm;
		var position = "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=no";
		var win = window.open( url, "_findaddress", position );
	}

	// 출력 가능한 프린터 목록 - 아이엔텍
	function PrinterList() {
		window.open('http://www.certpia.com/common_popup/ybm_printlist/index.asp','_printlist','width=425,height=530');
	}

	// 숫자 세자리마다 컴마 찍어주기
	function FormatNumber( num ) {
		var temp = new String( num );

		if ( temp.length < 1 ) return "";

		// 음수처리
		if ( temp.substr( 0,1 ) == "-" ) minus = "-";
		else minus = "";

		// 소수점이하처리
		dpoint = temp.search( /\./ );
		if ( dpoint > 0 ) {
			// 첫번째 만나는 .을 기준으로 자르고 숫자제외한 문자 삭제
			dpointVa = "." + temp.substr( dpoint ).replace( /\D/g, "" );
			temp = temp.substr( 0, dpoint );
		}
		else dpointVa = "";

		// 숫자이외문자 삭제
		temp = temp.replace( /\D/g, "" );
		if ( temp != "0" ) {
			zero = temp.search( /[1-9]/ );
			if ( zero == -1 ) return "";
			else if ( zero != 0 ) temp = temp.substr( zero );
		}

		if ( temp.length < 4 ) return minus + temp + dpointVa;
		buf = "";
		while ( true ) {
			if ( temp.length < 3 ) {
				buf = temp + buf;
				break;
			}
			buf = "," + temp.substr( temp.length - 3 ) + buf;
			temp = temp.substr( 0, temp.length - 3 );
		}
		if ( buf.substr( 0, 1 ) == "," ) buf = buf.substr( 1 );

		return minus + buf + dpointVa;
	}

	// 라디오버튼이 체크되어 있는지 체크함
	function CheckRadioButton( obj ) {
		var result, i;

		result = false;

		if ( obj.length != null ) {
			for ( i = 0; i < obj.length; i++ ) {
				if ( obj[i].checked ) result = true;
			}
		}
		else {
			if ( obj.checked ) result = true;
		}

		return result;
	}

	// 라디오버튼에 값을 셋팅함
	function SetRadioButton( obj, val ) {
		for ( i = 0; i < obj.length; i++ ) {
			if ( obj[i].value == val ) {
				obj[i].checked = true;
				break;
			}
		}
	}

	// 라디오버튼에서 선택된 값을 가져옴
	function GetRadioButton( obj ) {
		var selval = "";

		if ( obj.length != null ) {
			for ( i = 0; i < obj.length; i++ ) {
				if ( obj[i].checked ) selval = obj[i].value;
			}
		}
		else {
			if ( obj.checked ) selval = obj.value;
		}

		return selval;
	}

	// 셀렉트박스에 값을 셋팅함
	function SetSelectBox( obj, val ) {
		for ( i = 0; i < obj.options.length; i++ ) {
			if ( obj.options[i].value == val ) {
				obj.selectedIndex = i;
				break;
			}
		}
	}

	// 체크박스가 체크되어 있는지 체크함
	function CheckCheckBox( obj ) {
		var result, i;

		result = false;

		if ( obj.length != null ) {
			for ( i = 0; i < obj.length; i++ ) {
				if ( obj[i].checked ) {
					result = true;
					break;
				}
			}
		}
		else {
			if ( obj.checked ) result = true;
		}

		return result;
	}

	// 체크박스에 값을 셋팅함
	function SetCheckBox( obj, val ) {
		arr_val = val.split( ", ")

		if ( obj.length != null ) {
			// 체크박스가 여러개일때
			for ( i = 0; i < obj.length; i++ ) {
				obj[i].checked = false;
				for ( j = 0; j < arr_val.length; j++ ) {
					if ( obj[i].value == arr_val[j] ) {
						obj[i].checked = true;
						break;
					}
				}
			}
		}
		else {
			// 체크박스가 하나일때
			if ( obj.value == arr_val[0] ) obj.checked = true;
			else obj.checked = false;
		}
	}

	// CBT Center의 약도를 보여줌
	function CBTCenterMap( centerid ) {
		if ( centerid == "" ) {
			window.alert( "시험센터를 선택해 주세요" );
			return;
		}

		window.open( "http://exam.ybmnet.co.kr/common_exam/popup_cbtcentermap.asp?centerid=" + centerid );
	}

	// 이메일형식이 올바른지 체크함
	function IsEmailCorrect( email ) {
		if ( IsHangulExists( email ) ) return false;
		if ( email.indexOf( "@" ) == -1 ) return false;
		if ( email.indexOf( "." ) == -1 ) return false;
		if ( email.indexOf( "hanmail.com" ) > 0  ) return false;

		var invalidChars = " \"|&;<>!*\'\\";
		for ( var i = 0; i < invalidChars.length; i++ ) {
			if ( email.indexOf( invalidChars.charAt( i ) ) != -1 )
				return false;
		}

		if ( window.RegExp ) {
			var reg1 = new RegExp( "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)" );
			var reg2 = new RegExp( "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$" );

			if ( reg1.test( email ) || !reg2.test( email ) ) return false;
		}

		return true;
	}

	// 약도보기
	function ShowMap( examid, mapid ) {
		if ( examid == "5" && mapid == "x" )
			window.open( "http://exam.ybmnet.co.kr/tsc/images/img_faq/map_ShanghaiCenter.jpg" );
		else
			window.open( "/common_exam/popup_showmap.asp?examid="+examid+"&mapid="+mapid, "_showmap", "width=750,height=800,scrollbars=yes" );
	}

	// 약도보기 - 모바일
	function ShowMapMobile( examid, mapid ) {
		if ( examid == "5" && mapid == "x" )
			window.open( "http://exam.ybmnet.co.kr/tsc/images/img_faq/map_ShanghaiCenter.jpg" );
		else
			window.open( "/common_exam/popup_showmap.asp?examid="+examid+"&mapid="+mapid+"&mobile=1", "_showmap", "width=750,height=800,scrollbars=yes" );
	}

	// 테이블 정렬하기
	function insertionSort(t, iRowEnd, fReverse, iColumn)
	{
	    var iRowInsertRow, iRowWalkRow, current, insert;
	    for ( iRowInsert = 0 + 1 ; iRowInsert <= iRowEnd ; iRowInsert++ )
	    {
	        if (iColumn) {
			if( typeof(t.children[iRowInsert].children[iColumn]) != "undefined")
	     		      textRowInsert = t.children[iRowInsert].children[iColumn].innerText;
			else
				textRowInsert = "";
	        } else {
	           textRowInsert = t.children[iRowInsert].innerText;
	        }

	        for ( iRowWalk = 0; iRowWalk <= iRowInsert ; iRowWalk++ )
	        {
	            if (iColumn) {
				if(typeof(t.children[iRowWalk].children[iColumn]) != "undefined")
					textRowCurrent = t.children[iRowWalk].children[iColumn].innerText;
				else
					textRowCurrent = "";
	            } else {
				textRowCurrent = t.children[iRowWalk].innerText;
	            }

			//
			// We save our values so we can manipulate the numbers for
			// comparison
			//
			re = /,|%/g;
			current = textRowCurrent.replace(re, "");
			insert  = textRowInsert.replace(re, "");


			//  If the value is not a number, we sort normally, else we evaluate
			//  the value to get a numeric representation
			//

			if (current == "" || insert == "")
			{
				current	= current.toLowerCase();
				insert	= insert.toLowerCase();
			}

			else if ( !isNaN(current) ||  !isNaN(insert))
			{
				current= eval(current);
				insert= eval(insert);
			}
			else
			{
				current	= current.toLowerCase();
				insert	= insert.toLowerCase();
			}



	            if ( (   (!fReverse && insert < current)
	                 || ( fReverse && insert > current) )
	                 && (iRowInsert != iRowWalk) )
	            {
			    eRowInsert = t.children[iRowInsert];
	                eRowWalk = t.children[iRowWalk];
	                t.insertBefore(eRowInsert, eRowWalk);
	                iRowWalk = iRowInsert; // done
	            }
	        }
	    }
	}

	// 접수사진 변경창
	function PopupExamPhoto( param ) {
		window.open( "/common_exam/photo/photo.asp?param=" + param, "_cphoto", "width=910,height=585" );
	}

	// 성적사진 사용자 변경창
	function PopupSPhoto( param ) {
		window.open( "/common_exam/popup_sphoto.asp?param=" + param, "_cphoto", "width=327,height=530" );
	}

	// 비회원 인증창 - 오픈
	function PopupNoMember() {
		var nLayerWidth = 920;
		var nLayerHeight = 650;

		if ( document.documentElement.clientHeight == 0 ) {
			var nLeft = (document.body.scrollLeft + (document.body.clientWidth / 2)) - (nLayerWidth / 2);
			var nTop = (document.body.scrollTop + (document.body.clientHeight / 2)) - (nLayerHeight / 2);
		}
		else {
			var nLeft = (document.body.scrollLeft + (document.documentElement.clientWidth / 2)) - (nLayerWidth / 2);
			var nTop = (document.body.scrollTop + (document.documentElement.clientHeight / 2)) - (nLayerHeight / 2);
		}

		var divNoMember = document.getElementById( "divNoMember" );

		var divNoMemberStyle = "position:absolute; left:" +  nLeft + "px; top:" + nTop + "px; width:" + nLayerWidth + "px; height:" + nLayerHeight  + "px; z-index:1000; border:3px solid #666666;";
		var divNoMemberHtml = "<iframe name='ifmNoMember' frameborder='0' width='920' height='650' scrolling='no' src='/common_exam/nomember/exam_nomember.asp'></iframe>";

		if ( divNoMember ) {
			divNoMember.style.cssText = divNoMemberStyle;
			divNoMember.innerHTML = divNoMemberHtml;
			divNoMember.style.display = "";
		}
		else {
			var layer = document.createElement("div");
			layer.setAttribute( "id", "divNoMember" );
			layer.style.cssText = divNoMemberStyle;
			layer.innerHTML = divNoMemberHtml;
			document.body.appendChild(layer);
		}
	}

		// 비회원 인증창 - 오픈
	function PopupNoMemberDanal() {
		var nLayerWidth = 920;
		var nLayerHeight = 650;

		if ( document.documentElement.clientHeight == 0 ) {
			var nLeft = (document.body.scrollLeft + (document.body.clientWidth / 2)) - (nLayerWidth / 2);
			var nTop = (document.body.scrollTop + (document.body.clientHeight / 2)) - (nLayerHeight / 2);
		}
		else {
			var nLeft = (document.body.scrollLeft + (document.documentElement.clientWidth / 2)) - (nLayerWidth / 2);
			var nTop = (document.body.scrollTop + (document.documentElement.clientHeight / 2)) - (nLayerHeight / 2);
		}

		var divNoMember = document.getElementById( "divNoMember" );

		var divNoMemberStyle = "position:absolute; left:" +  nLeft + "px; top:" + nTop + "px; width:" + nLayerWidth + "px; height:" + nLayerHeight  + "px; z-index:1000; border:3px solid #666666;";
		var divNoMemberHtml = "<iframe name='ifmNoMember' frameborder='0' width='920' height='650' scrolling='no' src='/common_exam/nomember/exam_nomemberDanal.asp'></iframe>";

		if ( divNoMember ) {
			divNoMember.style.cssText = divNoMemberStyle;
			divNoMember.innerHTML = divNoMemberHtml;
			divNoMember.style.display = "";
		}
		else {
			var layer = document.createElement("div");
			layer.setAttribute( "id", "divNoMember" );
			layer.style.cssText = divNoMemberStyle;
			layer.innerHTML = divNoMemberHtml;
			document.body.appendChild(layer);
		}
	}

	// 비회원 인증창 - 닫기
	function PopupNoMemberClose() {
		document.getElementById( "divNoMember" ).style.display = "none";
		goNoSelect();
	}

	// 비회원 인증창 - 비회원으로 서비스 이용 
	function PopupNoMemberProc( memberid, juminno1, kname, gender, kind ) {
		document.getElementById( "divNoMember" ).style.display = "none";
		goNoMember( memberid, juminno1, kname, gender, kind );
	}

	// 비회원 인증창 - 회원로그인
	function PopupNoMemberLogin() {
		document.getElementById( "divNoMember" ).style.display = "none";
		goToLogin();
	}

	// 객체의 좌표값
	function GetObjLeft( obj ) {
		if ( obj.offsetParent == document.body || obj.offsetParent == null )
			return obj.offsetLeft;
		else
			return obj.offsetLeft + GetObjLeft( obj.offsetParent );
	}

	// 객체의 좌표값
	function GetObjTop( obj ) {
		if ( obj.offsetParent == document.body || obj.offsetParent == null )
			return obj.offsetTop;
		else
			return obj.offsetTop + GetObjTop( obj.offsetParent );
	}

	function AccountCertify(EP_account_nm,EP_bank_cd,EP_account_no,regid,proname){

		var EP_account_no = EP_account_no.replace(/-/gi,"");
		var EP_account_no = EP_account_no.replace( /(\s*)/g, "");

		var url = "/common_exam/account_request.asp?EP_account_nm="+EP_account_nm+"&EP_bank_cd="+EP_bank_cd+"&EP_account_no="+EP_account_no+"&order_no="+regid+"&productname="+proname;
		var position = "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=no,width=481,height=138";
		var win = window.open( url, "_confirm", position );
	}
	function AccountCertifyUTF8(EP_account_nm,EP_bank_cd,EP_account_no,regid,proname){

		var EP_account_no = EP_account_no.replace(/-/gi,"");
		var EP_account_no = EP_account_no.replace( /(\s*)/g, "");

		var url = "/common_exam/account_requestUTF8.asp?EP_account_nm="+EP_account_nm+"&EP_bank_cd="+EP_bank_cd+"&EP_account_no="+EP_account_no+"&order_no="+regid+"&productname="+proname;
		var position = "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=no,resizable=yes,width=481,height=138";
		var win = window.open( url, "_confirm", position );
	}

	// 탭메뉴
	function TabButton( tabid, index, maxindex ) {
		for ( var i = 1; i <= maxindex; i++ ) {
			if ( i == index ) {
				$( "#" + tabid + i ).addClass( "on" );
				$( "#" + tabid + i + "sub" ).show();
			}
			else {
				$( "#" + tabid + i ).removeClass( "on" );
				$( "#" + tabid + i + "sub" ).hide();
			}
		}
	}
