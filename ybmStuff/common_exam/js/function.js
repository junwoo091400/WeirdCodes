//Just, all the needy-greedy detailed funcs. 
/***************************************************************/
/* 2007 사이트에서 사용되는 공통 자바스크립트 함수 정의 파일   */
/***************************************************************/



        /***************************************************************/
        /* 사용법: object.value.trim()                                 */
        /***************************************************************/
        String.prototype.trim = function() {
		    return this.replace(/(^\s*)|(\s*$)/g, "");
	    }
	
	
	
        /***************************************************************/
        /* 사용법: chkEngNum(object) : 영문,숫자만 입력가능한 경우     */
        /***************************************************************/
	    function chkEngNum(oField)

	    { 
        	var valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
        	var bFlag = false; 
        	var temp; 
        		
        	for (var i=0; i<oField.value.length; i++)
        	
        		{ 
        		temp = "" + oField.value.substring(i, i+1); 
        		if (valid.indexOf(temp) == "-1") bFlag = true; 
        		} 
        
        	if (bFlag)
        	
        		{
        		alert("해당 항목은 반드시 영문 또는 숫자만 입력 가능 합니다.");
        		oField.value = "";
        		oField.focus();
        		return false;
        		}
        
        	return true;
        }
        
         /***************************************************************/
        /* 사용법: fnNotchkEngNum(object) : 영문,숫자만 입력불가능   */
        /***************************************************************/
	    function fnNotchkEngNum(oField)

	    { 
        	var valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
        	var bFlag = false; 
        	var temp; 
        		
        	for (var i=0; i<oField.value.length; i++)
        	
        		{ 
        		temp = "" + oField.value.substring(i, i+1); 
        		if (valid.indexOf(temp) != "-1") bFlag = true; 
        		} 
        
        	if (bFlag)
        	
        		{
        		alert("해당 항목은  영문 또는 숫자가 불가능합니다.");
        		oField.value = "";
        		oField.focus();
        		return false;
        		}
        
        	return true;
        }
        
        
        /***************************************************************/
        /* 사용법: chkEngNum(object) : 숫자만 입력가능한 경우     */
        /***************************************************************/
        
        function chkNum(oField)

	    { 
        	var valid = "0123456789"
        	var bFlag = false; 
        	var temp; 
        		
        	for (var i=0; i<oField.value.length; i++)
        	
        		{ 
        		temp = "" + oField.value.substring(i, i+1); 
        		if (valid.indexOf(temp) == "-1") bFlag = true; 
        		} 
        
        	if (bFlag)
        	
        		{
        		alert("해당 항목은 반드시 정수만 입력 가능 합니다.");
        		oField.value = "";
        		oField.focus();
        		return false;
        		}

		    return true;
	    }
	    
	  
	
	
	    /***************************************************************/
        /* 사용법: nullCheck(object) : 사용자 값 입력여부 체크         */
        /***************************************************************/
        
        function nullCheck(oField,msg){
    		var val = oField.value;
    		if(val.trim()==''){
    			alert(msg);
    			oField.focus();
    			return false;
    		}
    		else
    			return true;
	    }
	
	    /***************************************************************/
        /* 사용법: __ws__(id) : 플래쉬 테두리 없애기     */
        /***************************************************************/
        
	    function __ws__(id)
        {
        	document.write(id.innerHTML); id.id="";
        }
        
        /***************************************************************/
        /* 사용법: sample_win(id) : 강의 샘플창 열기     */
        /***************************************************************/
        function sample_win(a, b, c, d){
    		var win_left = (screen.width - b) / 2;
    		var win_top = (screen.height - c - 30) / 2 ;
    		window.open(a, '', 'width='+b+',height='+c+',top='+win_top+',left='+win_left+',noresize,'+d);
	    }
	
	
	
	
	      
        
        //체크박스 선택했는지 여부 체크 
        function fnCheckboxChecked(objname)
        {
        	
        	var flag = "";
        	var lecture_cnt;
        
        	lecture_cnt = 0;
        
        	if ( document.all(objname) )
        	{
        		if (document.all(objname).length)
        		{
        			for ( var i = 0 ; i < document.all(objname).length ; i ++ )
        			{
        				if(document.all(objname)(i).checked){
        				        lecture_cnt  ++ ;       
        				}
        			}
        		}else{
        		    if( document.all(objname).checked){
        		        lecture_cnt  ++ ; 
        		    }
        	    }
        		
        	}
        	
        	if(lecture_cnt > 0 ){
        	        return true ;
        	}else{
        	        return false ;
                }
        }


        function showhide(num, p_totcount){ 
        	for (i=1; i<=p_totcount; i++){
        		menu=eval("document.all.block"+i+".style"); 
        		if (num==i ) {
        			if (menu.display=="block"){
        				menu.display="none"; 
        			}
        			else{
        				menu.display="block"; 
        			}
        		}
        		else { 
        			menu.display="none"; 
        		}
        	} 
        }
        
        function goReceipt(tid){
		    var win = window.open("https://iniweb.inicis.com/mall/cr/cm/mCmReceipt_head.jsp?noTid="+tid+"&noMethod=1","Receipt","width=408,height=708");
	    }
	    
	    function goCashReceipt(tid){
		    var win = window.open("https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/Cash_mCmReceipt.jsp?noTid="+tid,"Receipt","width=408,height=708");
	    }
	    
  
    
        function isNum(num) { return !num.match(/[^0-9]/i); } 


        //email 체크
        function emailCheck(str)
    
    	{
    	if(str.search((/(\S+)@(\S+)\.(\S+)/)) == -1)
    	
    		{
    		return true;
    		}
    	
    	else
    	
    		{
    		return false;
    		}
    
    	}
	
    	function ReadCookie(name)
        {
        	var label = name + "=" ;
        	var labelLen = label.length ;
        	var cLen = document.cookie.length
        	var i = 0
        	while (i < cLen){
        		var j = i + labelLen
        		if (document.cookie.substring(i,j) == label) {
        			var cEnd = document.cookie.indexOf(";",j)
        			if (cEnd == -1){
        				cEnd = document.cookie.length
                    		}
        			return unescape(document.cookie.substring(j,cEnd))
                	}
        		i++
        	}
        	return ""
        }
        
        //주민번호 체크 
        function chkZuminno(frm,param1, param2){
    		
    
    		d = new Array(6);
    		e = new Array(7);
    		tot = 0;
    		f = 0;
    
    		if(frm[param1].value != "" && frm[param2].value != ""){
    			for(i=1;i<7;i++) {
    				d[i]=frm[param1].value.substring(i-1,i);
    				e[i]=frm[param2].value.substring(i-1,i);
    
    				if(i<3) 
    				{
    					f=Number(e[i])*(i+7);
    				}
    				else if(i >= 3) 
    				{
    					f=Number(e[i])*((i+9)%10);
    				}
    				tot = tot + Number(d[i])*(i+1) + f;
    			}
    
    			e[7]=frm[param2].value.substring(6,7);
    
    			if (Number(e[7]) != ((11-(tot%11))%10)) {
    				return false;
    			}else{
    				return true;
    			}
    		}
    	}
    	
    	
    	 
