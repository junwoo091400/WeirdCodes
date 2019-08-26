// EX) http://cafm.korea.ac.kr/archibus/includes/pjs.js

var n4 = (document.layers)?true:false;
var e4 = (document.all)?true:false;
  //바이트검사
function Byte(input) {
    var i, j=0;
    for(i=0;i<input.length;i++) {
        val=escape(input.charAt(i)).length;
        if(val==  6) j++;
        j++;
    }
    return j;
}
  //공백제거
function Trim(string) {
    for(;string.indexOf(" ")!= -1;){
        string=string.replace(" ","")
    }
    return string;
}
   //숫자만입력(onKeypress='return onlyInt(this)')
function onlyInt(e) {
     if(n4) var keyValue = e.which
    else if(e4) var keyValue = event.keyCode
    if (((keyValue >= 48) && (keyValue <= 57))  || keyValue==13 || keyValue==46) return true;
     else{
	alert('숫자로 입력하세요.');
	return false
	}
}

function onlyInt_f(e) {
     var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (((keyCode >= 48) && (keyCode <= 57))  || keyCode==13 || keyCode==46) return true;
     else{
		alert('숫자로 입력하세요.');
		return false
	}
}

//숫자만입력(onKeypress='return numberCheck(this)')
	function numberCheck(e) {
		var keyValue;
		if (e.which) {
			keyValue = e.which;
		} else if(event.keyCode) {
			keyValue = event.keyCode;
		}

		if (((keyValue >= 48) && (keyValue <= 57))  || keyValue==13 || keyValue==46) {
			return true;
		} else {
			alert('숫자로 입력하세요.');
			return false
		}
	}


//숫자만입력(onKeypress='return numberCheck(this)')
	function numberCheck(e, event) {
		var keyValue;
		if (window.event) {
			keyValue = window.event.keyCode
		} else if(event) {
			keyValue = event.which;
		}
		if (((keyValue >= 48) && (keyValue <= 57))  || keyValue==13 || keyValue==46) {
			return true;
		} else {
			alert('숫자로 입력하세요.');
			return false
		}
	}

//유효성검사및글자수검사(if Existsint('pjs','빌딩코드',2))
function Existsint(input, obj, maxlength) {
var pjs = document.xel;
 for(i=0;i<pjs.elements.length;i++){
 if((pjs.elements[i].name == input )){
        if(!Trim(pjs.elements[i].value)){
	    alert(obj+"을(를) 입력하세요.")
	   return false;
	   }else{
     	if(Trim(pjs.elements[i].value).length >= maxlength ){
	alert("최대글자수는"+maxlength+" 개 입니다.");
	}else{
  	return true;
	}
    	}
   }
       }
        }
   //유효성검사만(if Exists('pjs','빌딩코드'))
function Exists(input, obj) {
var pjs = document.xel;
 for(i=0;i<pjs.elements.length;i++){
 if((pjs.elements[i].name == input )){
        if(!Trim(pjs.elements[i].value)){
	    alert(obj+"을(를) 입력하세요.");
		document.getElementsByName(input)[0].focus();
	   return false;
	   }else{
     
    	return true;
      	}
   }
       }
        }
//글자수검사(if intmax('pjs',2))
function intmax(input, maxlength) {
var pjs = document.xel;
 for(i=0;i<pjs.elements.length;i++){
 if((pjs.elements[i].name == input )){
 	if(Trim(pjs.elements[i].value).length >= maxlength ){
	alert("최대글자수는"+maxlength+" 개 입니다.");
	   return false;
	   }else{
     
    	return true;
      	}
   }
       }
        }
//뒤로(onclick="back();")
function back()
	{
	history.back();
 }
  //페이지이동(onclick="move('http://www.naver.com');")
function move(url) {
    location.href = url;
}
 //닫기(onclick="toclose();")
function toclose() {
    self.close();
}
// 주민등록번호체크( 입력폼 1개)(onblur="Jumin(this);")
function Jumin(jumin) {
     var weight = "234567892345"; // 자리수 weight 지정
     var val = jumin.value.replace("-",""); // "-"(하이픈) 제거
     var sum = 0;
      if(val.length != 13) {alert("주민등록번호를 제대로 입력해주세요."); return false; }
      for(i=0;i<12;i++) {
         sum += parseInt(val.charAt(i)) * parseInt(weight.charAt(i));
     }
      var result = (11 - (sum % 11)) % 10;
     var check_val = parseInt(val.charAt(12));
      if(result != check_val) {alert("주민등록번호를 제대로 입력해주세요."); return false; }
     return true;
 }
//이메일 체크(onblur="Email(this);")
function Email(obj){
var mailexp = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/i;
  if(!mailexp.test(obj.value))
 {
  alert("이메일을 정확하게 입력 하세요.");
  return false;
 }else{
 return true;
 }
  }
function page_new(obj,cbj,dbj,name){//kai-2009-07-21
		var frm = document.xel ;
		document.getElementsByName(name)[0].value = obj;
		if(dbj){
			frm.target=dbj;
		}else{
			frm.target='_main';
		}
		
			frm.action= cbj;
			frm.method='post';
			frm.submit();
}
//전화번호체크(onblur="Phone(this);")
function Phone(objValue){
      if(Trim(objValue.value) == '') return true;
         var text = objValue.value.split('-');
      var arrNo = new Array('02'    //서울 02
          ,'031'   //경기 031
          ,'032'     //인천 032
            ,'033'  //강원 033
          ,'041'   //충남 041
           ,'042'  //대전 042
           ,'043'  //충북 043
           ,'051'  //부산 051
          ,'052'  //울산 052
           ,'053'  //대구 053
           ,'054'  //경북 054
           ,'055'   //경남 055
            ,'061'  //전남 061
           ,'062'  //광주 062
            ,'063'  //전북 063
            ,'064'  //제주 064
           ,'010'  //핸펀
          ,'011'
          ,'016'
          ,'017'
          ,'018'
          ,'019');
               var newLen = objValue.value.length;
     var flag = false;
          if(newLen  < 11 ||
       newLen  > 13 ||
       text.length != 3 ||
        text[1].length < 3 ||
       text[2].length != 4)
        {
       alert('연락처 형식이 맞지 않습니다');
      return false;
     }
                for(var i=0; i<arrNo.length; i++ )  {
      if(text[0] == arrNo[i]) {
       flag = true;
       break;
      }
     }
     if(!flag){
       alert('연락처 형식이 맞지 않습니다 ');
      return false;
     }
     return true;
 }
   //------------------------------------------------------------------------------------------------------------------------------------------
  function onlyCommaOut(input) {
   var return_var;
       return_var = input.replace(/,/gi,"");
	return return_var
}
  // ----- 숫자에  3자리 마다 콤마 넣기  -----------//(onkeyup="comma(this)")
function CommaIn(input) {
         CommaOut(input); //  기존의 콤마는 지우고
 	eval(input).value = putComma(eval(input).value);
}
 function putComma(input) {
	var num = input;
 	if (num < 0) {
		num *= -1;
		var minus = true
	}else{
		var minus = false
	}
 	var dotPos = (num+"").split(".")
	var dotU = dotPos[0]
	var dotD = dotPos[1]
	var commaFlag = dotU.length%3
 	if(commaFlag) {
		var out = dotU.substring(0, commaFlag)
		if (dotU.length > 3) out += ","
	}
	else var out = ""
 	for (var i=commaFlag; i < dotU.length; i+=3) {
		out += dotU.substring(i, i+3)
		if( i < dotU.length-3) out += ","
	}
 	if(minus) out = "-" + out
	if(dotD) return out + "." + dotD
	else return out
}
  // 숫자에   콤마 제거 하기
function CommaOut1(input) {
	return input.replace(/,/gi,"");
}
function CommaOut(input) {
	eval(input).value = eval(input).value.replace(/,/gi,"");
}
 //--------------------------------------------------------------------------------------------------------------------------------------------//
 
  //팝업창 열기
function poppop(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
   menubar_str = menubar ? 'yes' : 'no';
   statusbar_str = statusbar ? 'yes' : 'no';
   scrollbar_str = scrollbar ? 'yes' : 'no';
   resizable_str = resizable ? 'yes' : 'no';
   window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str).focus();
 }
 
   //서브밋날리기
function sub(type,url) {
	if(type == 1){
		document.xel.action = url+'.jsp';
		document.xel.method = 'post';
		document.xel.submit();
	}else if(type == 2){
		document.xel.action = url+'.jsp';
		document.xel.method = 'post';
		document.xel.encoding = 'multipart/form-data';
		document.xel.submit();
	}else if(type == 3){
		document.xel.action = url+'.jsp';
		document.xel.method = 'post';
		document.xel.target = '_main';
		document.xel.submit();
	}else if(type == 4){
		document.xel.action = url+'.jsp';
		document.xel.method = 'post';
		document.xel.target = '_self';
		document.xel.submit();
	}else if(type == 5){
		document.xel.action = url+'.jsp';
		document.xel.method = 'post';
		document.xel.target = '_blank';
		document.xel.submit();
	}else if(type == 6){
		document.xel.action=url+'.jsp';
		document.xel.method = 'post';
		document.xel.target = '_main';
		document.xel.pg.value=0;
		document.xel.submit();
	}
}
 //서브밋jsp없이 날리기
function sub1(type, url) {
	if(type == 1){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.submit();
	}else if(type == 2){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.encoding = 'multipart/form-data';
		document.xel.submit();
	}else if(type == 3){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.target = '_main';
		document.xel.submit();
	}else if(type == 4){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.target = '_self';
		document.xel.submit();
	}else if(type == 5){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.target = '_blank';
		document.xel.submit();
	}else if(type == 6){
		document.xel.action=url;
		document.xel.method = 'post';
		document.xel.target = '_main';
		document.xel.pg.value=0;
		document.xel.submit();
	}
}
   //리스트삭제부분에서 유효성 검사
function chkboxchk(input, message) {
pjs = document.xel;
 var cnt = 0;
 for(i=0;i<pjs.elements.length;i++){
 if((pjs.elements[i].name == input) && (pjs.elements[i].checked)){
 	cnt++ ;
}
       }
if (cnt == 0) {
alert(message);
  return false;
   }else{
   return true;
       	}
 
   }
   //팝업창 닫히면서 부모창 리로드
function close_popup(pjs){
   opener.location.reload()  ;
 alert(pjs);
 self.close();
    }
  //셀렉트에서 선택되어진것 //명칭변경으로 삭제 예정 스크립트
function opt(m,v){
		
	if(typeof m == 'object'){//옛날로직....
	//alert(typeof m);
		for (i=0;i<m.length;i++){
			if(m.options[i].value==v)
			m.options[i].selected = true;
		}
	}else{//새로운 로직...
		var n = document.getElementsByTagName("select");
		for(var i =0; i < n.length ; i++){
			var q = n.item(i);
			var str = q.getAttribute("name");
			if(str == m){
				for (j=0;j<q.length;j++){
					if(q.options[j].value == v)
					q.options[j].selected = true;
				}
			}
		}
	}
}
//셀렉트에서 선택되어진것 jyw
function selected(n,v){
for (i=0;i<n.length;i++){
 if(n.options[i].value==v)
   n.options[i].selected = true;
}
}
//멀티 셀렉트 유효성 검사
	function optselect(obj,v,z,y,x){
var StrFlds = '' ;
			for (var j=0; j < obj.options.length; j++) {
				StrFlds = obj.options[j].selected;
								if (StrFlds == true) {
if(x==1){subsub(z,y)}
else if(x==2){subsub(z,y)}
  }
			}
	}
 	//레이어 보이기 숨기기
	function show(obj) {
   document.all[obj].style.visibility = "visible"
   document.xel.style.visibility = "hidden";
}
 function hide(obj) {
   document.all[obj].style.visibility = "hIDden"
      document.xel.style.visibility = "visible";
 }
//팝업창에 모든 변수 넘기기
function wrcfin(url) {
 	var viewWindow = window.open('', 'popWin', 'width=300,height=300,scrollbars=no');
document.xel.method = 'post';
    document.xel.action=url+'.jsp';
document.xel.target = 'popWin';
document.xel.submit();
}
 function wrcfin1(url) {
 document.xel.encoding = 'multipart/form-data';
document.xel.method = 'post';
document.xel.action=url+'.jsp';
	var viewWindow = window.open('', 'popWin', 'width=300,height=300,scrollbars=no');
document.xel.target = 'popWin';
document.xel.submit();
}
 function reservepopup (url) {
 //document.xel.encoding = 'multipart/form-data';
document.xel.method = 'post';
document.xel.action=url+'.jsp';
var viewWindow = window.open('', 'popWin', 'left=100,top=100,width=770,height=540,scrollbars=yes, resizable=yes');
document.xel.target = 'popWin';
document.xel.submit();
 }
 
function popresize(url, width, height, scrollbar) {
scrollbar_str = scrollbar ? 'yes' : 'no';
var viewWindow = window.open('', 'popWin', 'width='+width+',height='+height+',scrollbars='+scrollbar_str);
document.xel.method = 'post';
document.xel.action=url+'.jsp';
document.xel.target = 'popWin';
document.xel.submit();
document.xel.target = '_self';//kjt
} 

function popresize1(url, width, height, scrollbar) {
scrollbar_str = scrollbar ? 'yes' : 'no';
var viewWindow = window.open('', 'popWin', 'width='+width+',height='+height+',scrollbars='+scrollbar_str);
document.xel.method = 'post';
document.xel.action=url;
document.xel.target = 'popWin';
document.xel.submit();
document.xel.target = '_self';//kjt
} 
 /*---------------------------3자리컴마, 2자리 소수점*/
function strip_comma(data)
{
    var flag = 1;
    var valid = "1234567890";
    var output = '';
    if (data.charAt(0) == '-')
    {
        flag = 0;
        data = data.substring(1);
    }
         for (var i=0; i<data.length; i++)
    {
        if (valid.indexOf(data.charAt(i)) != -1)
            output += data.charAt(i)
    }
         if (flag == 1)
        return output;
    else if (flag == 0)
        return ('-' + output);
}
function add_comma(what)
{
    var flag = 1;
    var data = what;
    var len = data.length;
	var split1;
	var split2;
	var split3;
  	if (data.charAt(0) == '-')
    {
        flag = 0;
        data = data.substring(1);
    }
    if (data.charAt(0) == '0' && data.charAt(1) == '-')
    {
        flag = 0;
        data = data.substring(2);
    }
	if (data.indexOf('.') >= 0) {
        split2 = data.substring(0,data.indexOf('.'));
        split3 = data.substr(data.indexOf('.'));
    }
    else{
        split2 = data;
        split3 = '';
        }
    var number = strip_comma(split2);
    number = '' + number;
//	alert(number);
    if (number.length > 3)
    {
        var mod = number.length % 3;
        var output = (mod > 0 ? (number.substring(0,mod)) : '');
        for (i=0; i<Math.floor(number.length/3); i++)
        {
            if ((mod == 0) && (i == 0))
                output += number.substring(mod+3*i, mod+3*i+3);
            else
                output += ',' + number.substring(mod+3*i, mod+3*i+3);
        }
		if (flag == 0)
        {
			if(split3.substring(0,2) == ".." || split3.substring(0,3) == "..." )
			{
				split3_1 = split3.substring(0,1);
				return '-'+output+split3_1;
			}
			else if(!(split3.substring(1,2) >= '0' && split3.substring(1,2) <='9'))
			{
				split3_1 = split3.substring(0,1);
				return '-'+output+split3_1;
			}
			else if(!(split3.substring(2,3) >= '0' && split3.substring(2,3) <='9'))
			{
				split3_1 = split3.substring(0,2);
				return '-'+output+split3_1;
			}
			else
			{
				split3_1 = split3.substring(0,3);
				return '-'+output+split3_1;
			}
		}
		else
		{
			if(split3.substring(0,2) == ".." || split3.substring(0,3) == "..." )
			{
				split3_1 = split3.substring(0,1);
				return output+split3_1;
			}
			else if(!(split3.substring(1,2) >= '0' && split3.substring(1,2) <='9'))
			{
				split3_1 = split3.substring(0,1);
				return output+split3_1;
			}
			else if(!(split3.substring(2,3) >= '0' && split3.substring(2,3) <='9'))
			{
				split3_1 = split3.substring(0,2);
				return output+split3_1;
			}
			else
			{
				split3_1 = split3.substring(0,3);
				return output+split3_1;
			}
		}
    }
	else
	{
		if(flag == 0)
		{
			if(split3.substring(0,2) == ".." || split3.substring(0,3) == "..." )
			{
				split3_1 = split3.substring(0,1);
				return '-'+number+split3_1;
			}
			else if(!(split3.substring(1,2) >= '0' && split3.substring(1,2) <='9'))
			{
				split3_1 = split3.substring(0,1);
				return '-'+number+split3_1;
			}
			else if(!(split3.substring(2,3) >= '0' && split3.substring(2,3) <='9'))
			{
				split3_1 = split3.substring(0,2);
				return '-'+number+split3_1;
			}
			else
			{
				split3_1 = split3.substring(0,3);
				return '-'+number+split3_1;
			}
		}
		else
		{
			if(split3.substring(0,2) == ".." || split3.substring(0,3) == "..." )
			{
				split3_1 = split3.substring(0,1);
				return number+split3_1;
			}
			else if(!(split3.substring(1,2) >= '0' && split3.substring(1,2) <='9'))
			{
				split3_1 = split3.substring(0,1);
				return number+split3_1;
			}
			else if(!(split3.substring(2,3) >= '0' && split3.substring(2,3) <='9'))
			{
				split3_1 = split3.substring(0,2);
				return number+split3_1;
			}
			else
			{
				split3_1 = split3.substring(0,3);
				return number+split3_1;
			}
		}
	}
   }
 function replace(str, original, replacement)
 {
     var result;
     result = "";
     while(str.indexOf(original) != -1)
     {
         if (str.indexOf(original) > 0)
             result = result + str.substring(0, str.indexOf(original)) + replacement;
         else
             result = result + replacement;
             str = str.substring(str.indexOf(original) + original.length, str.length);
     }
     return result + str;
 }
  function comma(what)
{
    var data = what.value;
         if ((event.keyCode == 107) || (event.keyCode == 187))
    {
        if ((data == "+") || (data == "0+") || (Math.floor(replace((replace(data,"+","")),",","")) == 0))
        {
            dataval = "";
        }
        else
        {
            var dataval = data + '000';
            dataval = replace(dataval,"+","");
        }
    }
    else
    {
        if (Math.floor(data) == 0)
        {
            dataval = "";
        }
        else
        {
            var dataval = data;
        }
    }
         what.value = add_comma(dataval);
}
/*---------------------------3자리컴마, 2자리 소수점*/
 //틀고정
function datos_onscroll() {
	if (datos.scrollLeft != text1.value) {
		text1.value = datos.scrollLeft;
		tituloscolumnas.scrollLeft = datos.scrollLeft;
		return;
	}
  	if (datos.scrollHeight != text2.value) {
	    text2.value = datos.scrollTop;
		titulosfilas.scrollTop = datos.scrollTop;
		return;
	}
}
/*------------------------------------페이지 분할 시작*/
 function page(obj,cbj,dbj){
		var frm = document.xel ;
		frm.pg.value=obj;
		if(dbj){
			frm.target=dbj;
		}else{
			frm.target='main';
		}
			frm.action= cbj+'.jsp';
			frm.method='post';
			frm.submit();
}
 function page1(obj,cbj,dbj){
		var frm = document.xel ;
		frm.pg1.value=obj;
		if(dbj){
			frm.target=dbj;
		}else{
			frm.target='main';
		}
			frm.action= cbj+'.jsp';
			frm.method='post';
			frm.submit();
}
/*-----------------------------------페이지 분할 끝*/
  //어느 히든값에다가 값집어넣고, 서브밋날리기
function inputData(input, data, url, tar) {
var pjs = document.xel;
   for(i=0;i<pjs.elements.length;i++){
   if((pjs.elements[i].name.indexOf("sorting") > -1 )){
 		   pjs.elements[i].value = "";
}
if((pjs.elements[i].name == input )){
        pjs.elements[i].value = data;
	   }
	   }//for종료
	document.xel.action=url+'.jsp';
	document.xel.method = 'post';
	document.xel.target = tar;
	document.xel.submit();
            }
 
  //모듈화된 팝업창
//팝업창 열기
function popUp(name, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable, url)
{
  toolbar_str = toolbar ? 'yes' : 'no';
   menubar_str = menubar ? 'yes' : 'no';
   statusbar_str = statusbar ? 'yes' : 'no';
   scrollbar_str = scrollbar ? 'yes' : 'no';
   resizable_str = resizable ? 'yes' : 'no';
   window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str).focus();
 }
 function sub_download(type, url) {
   if(type == 1)
	{
    document.xel.action=url+'.jsp';
	document.xel.method = 'post';
	document.xel.target = '_main';
    document.xel.submit();
	}
}
/* 
 *    값가져오기 2009-08-20 By 백재선
*/
function getValue(name){
	var result;
	var inputList = document.getElementsByTagName("input");
	
	for(var i =0; i < inputList.length ; i++){
		
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			if(inputListItem.getAttribute("type") == 'text' || inputListItem.getAttribute("type") == 'hidden'|| inputListItem.getAttribute("type") == 'file'){ 
				result=	inputListItem.value 
			}else if(inputListItem.getAttribute("type") == 'radio' || inputListItem.getAttribute("type") == 'checkbox'){//라디오인경우//체크박스인경우
				if(inputListItem.checked)  result= inputListItem.value;
			} 
		}
	}
	inputList = document.getElementsByTagName("select");
	
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			result=	inputListItem.value
		}
	}
	return result;
}
/* 
 *    값가져오기  인덱스 적용  2009-08-20 By 백재선
*/
function getMultiValue(name,idx) {
	var result, pre_name;
	var idx_temp = 0;
	var inputList = document.getElementsByTagName("input");
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			if(pre_name == inputListItem.getAttribute("name") )idx_temp++;
			
			if(idx_temp == idx){		
				if(inputListItem.getAttribute("type") == 'text' || inputListItem.getAttribute("type") == 'hidden'|| inputListItem.getAttribute("type") == 'file' ){	
					result=	inputListItem.value  
				}else if(inputListItem.getAttribute("type") == 'radio' || inputListItem.getAttribute("type") == 'checkbox'){//라디오인경우//체크박스인경우
					if(inputListItem.checked)  result= inputListItem.value;
				} 
			}
			pre_name = inputListItem.getAttribute("name");
		}//if종료
	}//for 종료
	inputList = document.getElementsByTagName("select");
	pre_name = '';
	idx_temp = 0;
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			if(pre_name == inputListItem.getAttribute("name")) idx_temp++;
			if(idx_temp == idx){	
				result=	inputListItem.value
			}
			pre_name = inputListItem.getAttribute("name");
		}
	}
	return result;
}
/* 
 *    값설정하기 인덱스 적용  2009-08-20 By 백재선
*/
function setMultiValue(name,idx,value1) {
	var result, pre_name;
	var duplicated = false;
	var idx_temp = 0;
 	
	var inputList = document.getElementsByTagName("input");
	
	for(var i =0; i < inputList.length ; i++){
 		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			if(pre_name == inputListItem.getAttribute("name") )idx_temp++;
				if(idx_temp == idx){
		 
					if(inputListItem.getAttribute("type") == 'text' || inputListItem.getAttribute("type") == 'hidden'){
						  inputListItem.value = value1; 
					}else if(inputListItem.getAttribute("type") == 'radio'){//라디오인경우
						 if(inputListItem.getAttribute("value") == value1) inputListItem.checked = true;
					}else if(inputListItem.getAttribute("type") == 'checkbox'){//체크박스인경우
						 if(inputListItem.getAttribute("value") == value1)inputListItem.checked = true;
					}
				}
 		  	pre_name = inputListItem.getAttribute("name");
		}//파라미터 name이 같을대
	}//for 종료
	inputList = document.getElementsByTagName("select");
	pre_name = '';
	idx_temp = 0;
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			if(pre_name == inputListItem.getAttribute("name") )idx_temp++;
				if(idx_temp == idx){
		
					for (j=0;j<inputListItem.length;j++){
						if(inputListItem.options[j].value == value1) inputListItem.options[j].selected = true;
					}
				}
				pre_name = inputListItem.getAttribute("name");
  		}//이름값이같으면 끝
	}
	return true;
}
/* 
 *    값설정하기    2009-08-20 By 백재선
*/
function setValue(name,value1) {
	var result;
	var inputList = document.getElementsByTagName("input");
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			
			if(inputListItem.getAttribute("type") == 'text' || inputListItem.getAttribute("type") == 'hidden'){	
				inputListItem.value = value1; 
			
			}else if(inputListItem.getAttribute("type") == 'radio'){//라디오인경우
				if(inputListItem.getAttribute("value") == value1) inputListItem.checked = true;
		
			}else if(inputListItem.getAttribute("type") == 'checkbox'){//체크박스인경우
				if(inputListItem.getAttribute("value") == value1)inputListItem.checked = true;
			}
		}
	}
	inputList = document.getElementsByTagName("select");
	for(var i =0; i < inputList.length ; i++){
		var inputListItem = inputList.item(i);
		if(inputListItem.getAttribute("name") == name ){
			for (j=0;j<inputListItem.length;j++){
				if(inputListItem.options[j].value == value1)inputListItem.options[j].selected = true;
			}
		}
	}
	return true;
}
//페이지 탭 관련
function tile(obj){
	pagechange(obj);
}
function _listOver(obj){//kai
	if (obj.className != 'listclick' && obj.className != 'listnotclick'){
		obj.className='listOn';
	}
}
function _listout(obj){//kai
	if (obj.className != 'listclick' && obj.className != 'listnotclick'){
		obj.className='listout';
	}
}
function _listout_bg(obj){//kai
	if (obj.className != 'listclick' && obj.className != 'listnotclick'){
		obj.className='listout_bg';
	}
}


//부모창서브밋날리기
function parentsub(type, url) {
	var pjs = opener.document.xel;
	if(type == 1){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.submit();
	}else if(type == 2){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.encoding = 'multipart/form-data';
		pjs.submit();
	}else if(type == 3){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.target = '_main';
		pjs.submit();
	}else if(type == 4){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.target = '_self';
		pjs.submit();
	}else if(type == 5){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.target = '_blank';
		pjs.submit();
	}else if(type == 6){
		pjs.action=url+'.jsp';
		pjs.method = 'post';
		pjs.target = '_main';
		pjs.pg.value=0;
		pjs.submit();														
	}
}
  ////////checkbox 일괄선택/해제
 function checkAll1(pjs, pjs2) {//checkAll1('일괄선택될 체크박스 이름','  클릭이벤트가 발생될 아이디')
 var pjs3 = document.getElementsByName(pjs);
var pjs1 = document.getElementById(pjs2);
 
 
 var checkOption= pjs1.checked //전체선택/해제가 체크박스인 경우
 for ( var i = 0; i < pjs3.length; i++ ) {
  pjs3[i].checked = checkOption;
 }
}
/////////checkbox 일괄선택/해제 끝
 
 
/*
kai(2009-09-10)
code_chk(this,'타입',입력제한수)
타입 => 숫자 , 대문자, 소문자, !특수문자(숫자, 대문자, 소문자만 가능)
*/
function code_chk(obj, type, size){
	var e = window.event;
	
	if(type == "숫자"){
		//<input style="ime-mode:disabled;"> ==>해당 input 테그에 이 스타일 속성 추가해야 한글처리 막을수 있음. 추가 해야 함...
		if(e.keyCode >= 48 && e.keyCode <= 57){
			e.returnValue =  true;
		}else{
			alert("숫자만 입력 가능 합니다");
			obj.focus();
			e.returnValue =  false;
		}
	}else if(type == "대문자"){
		if(e.keyCode >= 65 && e.keyCode <= 90){
			
			e.returnValue =  true;
		}else{
			alert("대문자만 입력 가능 합니다");
			obj.focus();
			e.returnValue =  false;
			
		}
	}else if(type == "소문자"){
		if(e.keyCode >= 97 && e.keyCode <= 122){
			
			e.returnValue =  true;
		}else{
			alert("소문자만 입력 가능 합니다");
			obj.focus();
			e.returnValue =  false;
			
		}
	}else if(type == "!특수문자"){
		if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122) ){
			
			e.returnValue =  true;
		}else{
			alert("특수문자는 입력 불가능 합니다");
			obj.focus();
			e.returnValue =  false;
		}
	}else{
		alert('[숫자],[대문자],[소문자],[!특수문자] 만가능...');
	}
	
	if(obj.value.length >= size){
		alert(size+"자 이상 입력이 불가능합니다.");
		obj.focus();
		e.returnValue =  false;
	}
}
function getStringLength (str)
  {
   var retCode = 0;
   var strLength = 0;
   for (i = 0; i < str.length; i++)
   {
    var code = str.charCodeAt(i)
    var ch = str.substr(i,1).toUpperCase()
    code = parseInt(code)
    if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0)))
     strLength = strLength + 2;
    else
     strLength = strLength + 1;
   }
   return strLength;
  }

  function winCenter() {
if (document.layers) {
var sinist = screen.width / 2 - outerWidth / 2;
var toppo = screen.height / 2 - outerHeight / 2;
} else {
var sinist = screen.width / 2 - document.body.offsetWidth / 2;
var toppo = -75 + screen.height / 2 - document.body.offsetHeight / 2;
}
self.moveTo(sinist, toppo);
}
