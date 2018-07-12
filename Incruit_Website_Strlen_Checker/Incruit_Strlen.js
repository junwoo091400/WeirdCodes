//http://www.incruit.com/l_common/clientscript/v2/text.js?20180622134901

function chkLength(objMsg) {

	Msg_Len = document.getElementById('CurrentLen');
	Msg_Byte = document.getElementById('CurrentByte');
	Msg_Except_Len = document.getElementById('CurrentExceptLen');
	Msg_Except_Byte = document.getElementById('CurrentExceptByte');

	//공백 포함
	var length = LengthMsg(objMsg.value);
	var text = objMsg.value;

	Msg_Len.innerHTML = text.length.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//현재 글자수를 넣는다
	Msg_Byte.innerHTML = length.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//현재 byte수를 넣는다

	//공백 미포함
	var pattern = /\s/gm;
	text = text.replace(pattern,'');
	length = LengthMsg(text);

	Msg_Except_Len.innerHTML = text.length.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//현재 글자수를 넣는다
	Msg_Except_Byte.innerHTML = length.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//현재 byte수를 넣는다
}

function LengthMsg(objMsg) {
	var nbytes = 0;
	for (i=0; i<objMsg.length; i++){

		var ch = objMsg.charAt(i);

		if(escape(ch).length > 4) { // 한글일경우
			nbytes += 2;
		}else if (ch == '\n' || ch=='\r' ) { // 줄바꿈일경우
			//if (objMsg.charAt(i-1) != '\r') { // 하지만 밀려서 줄이 바뀐경우가 아닐때
			//	nbytes += 2;
			//}
			nbytes += 1;
		}else if (ch == '<' || ch == '>') { // 특수문자는 4byte
			nbytes += 4;
		} else { //나머지는 모두 1byte
			nbytes += 1;
		}

	}//END FOR
	return nbytes;
}

function del_all() {
	document.getElementById('txtcontent').value = '';
	document.getElementById('CurrentLen').innerHTML = 0;
	document.getElementById('CurrentByte').innerHTML =  0;
	document.getElementById('CurrentExceptLen').innerHTML = 0;
	document.getElementById('CurrentExceptByte').innerHTML =  0;
}