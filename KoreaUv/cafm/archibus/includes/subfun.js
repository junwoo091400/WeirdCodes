//EX) LITERALLY. "http://cafm.korea.ac.kr/archibus/includes/subfun.js"

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
