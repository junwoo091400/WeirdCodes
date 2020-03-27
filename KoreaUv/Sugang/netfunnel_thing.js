/*
Access this file through : "http://163.152.6.61/js/netfunnel.js"
OR, through : "http://sugang.korea.ac.kr/js/netfunnel.js".

Note, the lines following :"NetFunnel.RTYPE_NONE=0;" were prettified via python script.
For ex) You can ==> a = input() b = a.split(";") print(c+";" for c in b) <==
*/
/**
 * Copyright (c) 2019 AimToG. All rights reserved.
 * Code licensed under the AimToG License
 * Version 2.2.8
 *
 * @author jhh<jhh@aimtog.co.kr>
 * @author hkkang<hkkang@aimtog.co.kr>
 */
var NetFunnel = {}; NetFunnel.Skin = {};

//EditZoneStart ----------------------------------------------------------------
NetFunnel.TS_HOST        	= 'netfunnel.korea.ac.kr';		// Default TS host
// NetFunnel.TS_HOST        	= '192.168.140.2';		// Default TS host
NetFunnel.TS_PORT			= 443;				// Default TS port
NetFunnel.TS_PROTO			= 'https';			// Default TS protocol [http|https]
NetFunnel.TS_QUERY			= 'ts.wseq';		// Default request query
NetFunnel.TS_SERVICE_ID		= 'service_1';		// Default TS Service id
NetFunnel.TS_ACTION_ID		= 'act_1';			// Default TS Action id
NetFunnel.TS_MAX_TTL		= 30;				// Default max ttl (second) 5~30
NetFunnel.TS_CONN_TIMEOUT	= 3;				// Default connect timeout (second)
NetFunnel.TS_CONN_RETRY		= 1;				// Default connect retry count
NetFunnel.TS_COOKIE_ID		= 'NetFunnel_ID';	// Default Cookie ID
NetFunnel.TS_COOKIE_TIME	= 10;				// Default Cookie Time (minute)
NetFunnel.TS_COOKIE_DOMAIN	= '';				// Default Cookie Domain
NetFunnel.TS_BYPASS			= false;			// NetFunnel Routine Bypass [true|false]
NetFunnel.TS_POPUP_TOP		= false;			// Popup Top Position ( "false" is center )
NetFunnel.TS_POPUP_LEFT		= false;			// Popup Left Position ( "false" is center )
NetFunnel.TS_AUTO_COMPLETE	= true;			// Auto setComplete [true|false]
NetFunnel.TS_DEBUG_MODE		= false;			// Debug Mode
NetFunnel.TS_SHOWTIME_LIMIT	= 0;				// Show WaitTime Limit (second, 0 is Unlimited)
NetFunnel.TS_SHOWCNT_LIMIT	= 0;				// Show WaitUser Limit (0 is Unlimited)
NetFunnel.TS_SHOWNEXT_LIMIT	= 0;				// Show NextWaitUser Limit (0 is Unlimited)
NetFunnel.TS_LIMIT_TEXT		= '다수';				// SHOWCNT,SHOWNEXT Limit를 넘었을때 출력되는 문자열
NetFunnel.TS_IFRAME_RESIZE	= false;			// true | false
NetFunnel.TS_USE_UNFOCUS	= true;				// object unfocus after netfunnel call
NetFunnel.TS_VIRT_WAIT		= 10000;			// virtual wait time (millisecond)
NetFunnel.TS_USE_MOBILE_UI	= true;			// Mobile UI
NetFunnel.TS_POPUP_TARGET	= window;			// Popup target window
NetFunnel.TS_USE_FRAME_BLOCK= false;			// Block FrameSet Page
NetFunnel.TS_FRAME_BLOCK_LIST = [];				// Frame Block Window List
NetFunnel.TS_USE_PRE_WAIT	= false;			// Pre waiting popup use
NetFunnel.TS_USER_DATA_KEYS	= [];				// Input UserData Key & Type(c=cookie,v=variable)
												// ex) [ {"key":<user_data_key>, "type":<c|v>}, ... ]
NetFunnel.TS_CONFIG_USE		= true;				// 무조건 Config에 있는 IP 와 PORT로 사용
NetFunnel.TS_POPUP_ZINDEX	= 32000;			// 대기 Popup창의 z-index 값.
												// 대기창이 뒤로 숨지 않도록 적당한 값을 넣어줘야 한다.
NetFunnel.TS_IP_ERROR_RETRY	= true;				// Retry(Re-Issue) Where IP Validation Error
NetFunnel.TS_SUCCESS_POPUP_VISIBILITY = false;

//일정 기간 동안 대기인원 변함 없을시 Bypass 처리
NetFunnel.TS_NWAIT_BYPASS		= true;				// 사용 유무
NetFunnel.TS_MAX_NWAIT_COUNT	= 100;				// 대기인원 반복 체크 기준값

//Server Block
NetFunnel.TS_BLOCK_MSG			= 'Service Block!!';// Server Block시 팝업에 표시할 문구
NetFunnel.TS_BLOCK_URL			= '';				// Server Block시 등록된 url로 이동(미등록시 경고창 후 서비스 진입 불가)
NetFunnel.TS_IPBLOCK_WAIT_COUNT	= 200;				// Server IP Block 가상대기창 반복 횟수
NetFunnel.TS_IPBLOCK_WAIT_TIME	= 10000;			// Server IP Block 가상대기시간

//대기창 미리보기
NetFunnel.TS_SHOW_WAIT_POPUP		= false;		//대기창 보기

//event skin 지정
NetFunnel.TS_SKIN_ID				= '';			// Skin ID (미지정시 default 대기창)

// Variable for MProtect
NetFunnel.MP_USE			= false;						// 매크로방지기능 사용유무 (true|false)
NetFunnel.MP_TIMELIMIT		= 20000;						// 사용자의 요청을 체크하기 위한 단위 시간 (ms)
NetFunnel.MP_MAXREQLIMIT	= NetFunnel.MP_TIMELIMIT/1100;	// TIMELIMIT 시간 내에 getTidChkEnter를 요청가능한 최대값
NetFunnel.MP_DEVLIMIT		= 20;							// 요청주기의 표준편차 제한값 (ms)
NetFunnel.MP_DEVCNTLIMIT	= 7;							// 표준편차 계산을 위한 item숫자
NetFunnel.MP_REQONLYLIMIT	= 10;							// setComplete 없이 getTidChkEnter만 요청한 횟수 제한값(횟수)
NetFunnel.MP_MINCOUNT		= 5;							// 계산을 하지 않는 자료개수

// Logo Image Data -------------------------------------------------------------
//   - height:16 pixel
//   - GIF Format Data (Base64 Encoding)
NetFunnel.gLogoData         = "R0lGODlhJgAQAOe/AB5vlR5ykh9zkyNymCF0lC1xkiN1lSR2liZ3lyd4mDN1lyh5mSp6mjN4lCt7my18nDh5myt+mC59nTd7ly9+njF/nzp+mjKAoDt/mzOBoT+CnkCDn0KFoUOGokSHo0iLpk+SrlSWsl2ZsF6asWeYsWCbsmGcs2OetWSftla4Q1e5RFi6RVm7Rl+6TWK6RnaowXuou3WqvHipwmG8TmS9SGK9T2W+SWq8T2O+UH6rvmS/UX+sv2y+UWXAUoCtwIKuwYOvw4SwxIWxxW/DXYayxnfCXYezx3XDZXbEZom1yY21w4q2you4y3rIaXvJao67zoLKcpq6yonJcpe/zZu/1IrNfY3Nd6C/z5zA1ZrC0KHA0I7QgJ/D2KPD04/SgZbQgZDTgqPH0KbG1pbUiqvH0azM3LDM16PZkaLamLPP2q7Zn7bS3KncobfT3bHcorrW4LnfrbPirrrgrsTY5Lvhr7jkqsba5rzjsLrkt73kscjc6Mvc4rzluMzd49Dg59Hh6MfpvtLi6dPk6s3qxtfk5dTl687rx9Xm7Nbn7dPrz9Ts0Nfo79Xt0dnp8N3q69fv097r7OHq8uXq7d/s7eDt7uDw1ePs9Obs7uTt9eft79/y3uLw8Onu8ODz3+vw8+H14Ozx9O3y9er14u306e7z9uj26u/26+/19+n46/D37PD2+PL3+fL57vP4+/T67/T5/Pf59vX6/fj69/L89/X88Pn7+Pr8+ff9//v9+v78///9+//9//n///z/+/7//P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAAAmABAAAAj+AH2hSuXLl61SsHzp8pVLIcOHBSNKnDgxFY8VnXwlckHH1y2PBiuJakixZElUOlrocGWoBRxfuBS58vWpxRZbJnNKRKXSpqIWdB6x0JFCUZMWKhjpXMrTypkUTlzgWXHkjgsko3R4wbk0J08ovoq0aMEmxZAvW6rM0jGmq05TOqT4MpWiBR8oLfL0UOPqxphbC91SnFUHUMFHcTTJcgMGjShccgYtDUyxYSguWq5EWdXFjq9WWNp4mlJG4ZwrqvRcQVRQTBZfUbRkyULqDZWEug5RcLAAACUIQHxBIkAiUIIFYXz9cHApyQQJBT1Q8CVAwgIGiGAgIJXrlu4RBgXsUQjiKxKBEn8WOMCgCgiDS0okMBDhSzp1AxFjbGd4SH4BDpFQENwkBIzwBwIgSLCBD+8lIcEHC6TxwXQBSCCAAZ68gMApBenmQRBPIEIBDL40ct6BP5AhQQUMSLKEBH5wsGIFvgzQgBFCvCLDhgyJWEJBjkigQRonJADDHwns4EsIDDBASRIR9AGKBBNMJ4ACa5jRSgwM/EAEJIhcYEJEKEhgpgaq9OHADwVxQAEmTFDQhy9lLJCBLwdYQIEFjeRAwZ973LIJKBI5QkghqtwSSyYc+kIKJ7eowkktH2XCiS+WcKKpLadomkksAQEAOw==";
NetFunnel.gLogoText			= '';
NetFunnel.gLogoURL 			= '';

NetFunnel.gPreWaitData		= 'R0lGODlhKAAoALMMAPj4+MTExPT09NTU1NPT08XFxcbGxsLCwtXV1cPDw/X19b+/v////wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSAABcv0qQRLvwQCyc73C5YGxB5BgkwuS4nk4iCJJqlQKdZKxJII0ifYaRLwfECJmZg2AQaFwqA2ecfnrry+dJvR80NoRi5NRE8uXD5eLYk9iyxjhnprgnt2cn97mpucnZ6foKGio3oRACH5BAkFAAwALAAAAAAoACgAAASAkMlJq7046827/2AojmRpnmiqrmwLAohhIAAFy/SpBEu/BALJzvcLlgbEHkGCTC5LieTiIIkmqVAp1krEkgjSJ9hpEvB8QImZmDYBBoXCoDZ5x+euvP4Vm9HzQ2hGLk1ETy5cPl4tiT2LLGOGemuCe3Zyf3uam5ydnp+goaKjnREAIfkECQUADAAsAAAAACgAKAAABICQyUmrvTjrzbv/YCiOZGmeaKqubAsCiGEgAAXL9KkES78EAsnO9wuWBsQeQYJMLkuJ5OIgiSapUCnWSsSSCNIn2GkS8HxAiZmYNgEGhcKgNnnH5668fnOb0fNDaEYuTURPLlw+Xi2JPYssY4Z6a4J7dnJ/e5qbnJ2en6ChoqOiEQAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkQJTEY7CXK7ngQn1JoAg0JhUJMEj1GX8dhUL9uk6azMeKJN3KyPce3uSWdCaWBiZCdrQnAsiDuKK3aCP316PwyEY3SVmpucnZ6foKGio6IRACH5BAkFAAwALAAAAAAoACgAAAR9kMlJq7046827/2AojmRpnmiqrmwLAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRtBGWRJsgt+v9GIBBoTCoXb/gDUxGo4xn3hJOaGWsq75S8BidC6Mk47GpFzbzS3yBJk90EoV3JlNscYtwJ1lbXWZaXGlhmJmam5ydnp+goBEAIfkECQUADAAsAAAAACgAKAAABH2QyUmrvTjrzbv/YCiOZGmeaKqubFsCiGEggDspwaIvgWAzg92O8EsIdYficZG0EZZEmyC36/0YgEGhMKhdv2ALTEajjGfeEk5oZayrvlLwGJ0LoyTjsakXNvNLfIEmT3QShXcmU2xxi3AnWVtdZlpcaWGYmZqbnJ2en6CgEQAh+QQJBQAMACwAAAAAKAAoAAAEfZDJSau9OOvNu/9gKI5kaZ5oqq5sqwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkSbILfr/RiAQaEwqF2/YGxs5pXAZLQTTmhlrKu+UvAYnQujJOOxqRc280t8gSZPdBKFdyZTbHGLcCdZW10UkVxlYZiZmpucnZ6foKARACH5BAUFAAwALAAAAAAoACgAAASBkMlJq7046827/2AojmRpnmiqrmyrAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRNMFktAlhSSzhhD2JILfLloLHKgMwKBQGNZPx2HSthe3WNDx5ztKlLdbHuHb5JWRmaBNgQmItbztxLIpIP3OHP3p/P2NlZ3iWm5ydnp+goaKjpD8RADs=';

NetFunnel.gFixelData		= 'R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';
//EditZoneEnd ------------------------------------------------------------------
NetFunnel.RTYPE_NONE=0;
NetFunnel.RTYPE_CHK_ENTER=5002;
NetFunnel.RTYPE_ALIVE_NOTICE=5003;
NetFunnel.RTYPE_SET_COMPLETE=5004;
NetFunnel.RTYPE_GET_TID_CHK_ENTER=5101;
NetFunnel.RTYPE_INIT=5105;
NetFunnel.RTYPE_STOP=5106;
NetFunnel.kSuccess=200;
NetFunnel.kContinue=201;
NetFunnel.kContinueDebug=202;
NetFunnel.kTsBypass=300;
NetFunnel.kTsBlock=301;
NetFunnel.kTsIpBlock=302;
NetFunnel.kTsExpressNumber=303;
NetFunnel.kTsErrorNoUservice=500;
NetFunnel.kTsErrorNoAction=501;
NetFunnel.kTsErrorAComplete=502;
NetFunnel.kTsErrorWrongServer=503;
NetFunnel.kTsErrorTooRecreate=504;
NetFunnel.kTsErrorNoKey=505;
NetFunnel.kTsErrorInvalidID=506;
NetFunnel.kTsErrorInvalidKey=507;
NetFunnel.kTsErrorInvalidIdStr=508;
NetFunnel.kTsErrorDuplicate=509;
NetFunnel.kTsErrorDelAction=510;
NetFunnel.kTsErrorUserviceExist=511;
NetFunnel.kTsErrorActionExist=512;
NetFunnel.kTsErrorLicenseOver=513;
NetFunnel.kTsErrorSize=514;
NetFunnel.kTsErrorNoUserAction=515;
NetFunnel.kTsErrorTooBigKey=516;
NetFunnel.kTsErrorInvalidIp=517;
NetFunnel.kErrorAuth=900;
NetFunnel.kErrorNotFound=901;
NetFunnel.kErrorNoinit=902;
NetFunnel.kErrorCode=903;
NetFunnel.kErrorParam=904;
NetFunnel.kErrorData=905;
NetFunnel.kErrorUnknownType=906;
NetFunnel.kErrorAlready=907;
NetFunnel.kErrorService=908;
NetFunnel.kErrorExecution=909;
NetFunnel.kErrorSock=920;
NetFunnel.kErrorSockSend=921;
NetFunnel.kErrorSockRecv=922;
NetFunnel.kErrorNotFoundLocalIP=925;
NetFunnel.kErrorSockConnect=926;
NetFunnel.kErrorNoConnect=927;
NetFunnel.kErrorSockData=928;
NetFunnel.kErrorIO=991;
NetFunnel.kErrorArunning=992;
NetFunnel.kErrorPermission=993;
NetFunnel.kErrorExpiredTime=994;
NetFunnel.kErrorOverCounter=995;
NetFunnel.kErrorSecurity=996;
NetFunnel.kErrorSystemStopping=997;
NetFunnel.kErrorNotSupport=998;
NetFunnel.kErrorSystem=999;
NetFunnel.PS_N_RUNNING=0;
NetFunnel.PS_RUNNING=1;
NetFunnel.PS_CONTINUE=2;
NetFunnel.PS_TIMEOUT=3;
NetFunnel.PS_ERROR=99;
NetFunnel.CONN_TIMEOUT_KEY="connection_timeout";
NetFunnel.gControl=null;
NetFunnel.gShowtimeLimit=false;
NetFunnel.gShowcntLimit=false;
NetFunnel.gShownextLimit=false;
NetFunnel.gSkinId="";
NetFunnel.gPopupTop=false;
NetFunnel.gPopupLeft=false;
NetFunnel.gTotWait=-1;
NetFunnel.gPrevWaitTime=-1;
NetFunnel.gLastSkinID="default";
NetFunnel.gUseMobileUI=false;
NetFunnel.gUseUnfocus=false;
NetFunnel.gAlreadyProc=0;
NetFunnel.gWaitPop=null;
NetFunnel.gIPBlockWaitCount=0;
NetFunnel.gNWaitCount=0;
NetFunnel.gNWaitTemp=0;
NetFunnel.gReTimer=null;
NetFunnel.gDebugflag=false;
NetFunnel.Util={makeDebugMsg:function(l,k,c,f,d){var b="\n";
var a="       ";
if(d==true){b="<br>";a="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}var j="Unknown";
var h="Unkonwn Error";
switch(k){case NetFunnel.RTYPE_GET_TID:j="getTicketID";
break;
case NetFunnel.RTYPE_CHK_ENTER:j="chkEnter";
break;
case NetFunnel.RTYPE_ALIVE_NOTICE:j="aliveNotice";
break;
case NetFunnel.RTYPE_SET_COMPLETE:j="setComplete";
break;
case NetFunnel.RTYPE_GET_TID_CHK_ENTER:j="getTID+ChkEnter";
break;
case NetFunnel.RTYPE_INIT:j="Init";
break;
case NetFunnel.RTYPE_STOP:j="stop";
break;
default:j="Unknown";
break}switch(c){case NetFunnel.kSuccess:h="Normal";
break;
case NetFunnel.kContinue:h="Continue";
break;
case NetFunnel.kContinueDebug:h="Debug Continue mode";
break;
case NetFunnel.kTsBypass:h="ServerSide Bypass";
break;
case NetFunnel.kTsBlock:h="ServerSide Block";
break;
case NetFunnel.kTsIpBlock:h="ServerSide Ip Block";
break;
case NetFunnel.kErrorSystem:h="System Error";
break;
case NetFunnel.kErrorSecurity:h="Security Error";
break;
case NetFunnel.kErrorIO:h="I/O Error";
break;
case NetFunnel.kErrorSockConnect:h="Connection Timeout";
break;
case NetFunnel.kErrorAlready:h="Already Running";
break;
case NetFunnel.kErrorNoinit:h="Init Error";
break;
case NetFunnel.E_INSERT:h="Insert Error";
break;
case NetFunnel.kErrorPermission:h="No Permission";
break;
case NetFunnel.kErrorExpiredTime:h="Key Expire";
break;
case NetFunnel.kErrorParam:h="Parameter Error";
break;
case NetFunnel.E_NOT_STARTED:h="No service time";
break;
case NetFunnel.kTsErrorNoUserAction:h="No action Error";
break;
default:h="Unknown Error";
break}var g=l+" "+b+b+"  - type : "+j+" ("+k+")"+b+" - Code : "+h+" ("+c+")"+b+" - Params"+b;
for(var e in f){g+=a+e+" ---> "+f[e]+b}return g},goNextPage:function(b,d){var a=b;
for(var c in d){a+="&"+c+"="+d[c]}document.location.href=a},alertDebugMsg:function(a){alert(a)},decodeBase64:function(d){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a="";
var l,j,g;
var k,h,f,e;
var c=0;
d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");
do{k=b.indexOf(d.charAt(c++));
h=b.indexOf(d.charAt(c++));
f=b.indexOf(d.charAt(c++));
e=b.indexOf(d.charAt(c++));
l=(k<<2)|(h>>4);
j=((h&15)<<4)|(f>>2);
g=((f&3)<<6)|e;
a+=String.fromCharCode(l);
if(f!=64){a+=String.fromCharCode(j)}if(e!=64){a+=String.fromCharCode(g)}}while(c<d.length);
return a},getParam:function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var b="[\\?&]"+a+"=([^&#]*)";
var d=new RegExp(b);
var c=d.exec(document.location.href);
if(c===null){return""}return c[1]},isSmartPhone:function(){var b=["iPhone","iPod","iPad","BlakBerry","Android","WindowsCE","LG","MOT","SAMSUNG","SonyEricsson","Nokia","Webos","Opera mini","Opera mobi","Iemobile"];
try{for(var a=0;
a<b.length;
a++){if(navigator.userAgent.match(b[a])!==null){return true}}}catch(c){}return false},calcStdDev:function(g,f){if(typeof g!="object"){return false}if(g.length<2){return false}if(f>1||f<0){f=0}var e=0,d=0;
for(d=0;
d<g.length;
d++){e+=parseInt(g[d],10)}var a=e/g.length;
var b=0;
for(d=0;
d<g.length;
d++){b+=((parseInt(g[d],10)-a)*(parseInt(g[d],10)-a))}var c=Math.sqrt(b/(g.length-f));
return c},delFocus:function(g){try{var f=document;
if(typeof g=="object"&&typeof g.document=="object"){f=g.document}var b=f.getElementsByTagName("body")[0];
var a=f.createElement("iframe");
a.style.position="absolute";
a.style.width="0px";
a.style.height="0px";
a.style.border="0px";
a.style.top=NetFunnel.PopupUtil.getScrollTop(f);
a.style.left=NetFunnel.PopupUtil.getScrollLeft(f);
b.appendChild(a);
a.focus();
var c=a.parentNode;
if(c&&typeof c=="object"){c.removeChild(a)}}catch(d){}},isVirtualWait:function(a){if(typeof a!="object"){return false}if(typeof a.mprotect=="number"&&a.mprotect>0){return true}return false},getTimeStr:function(g,E,L,b){var d=parseInt(g,10);
if(typeof E=="undefined"){E="%H시간 %M분 %S초"}if(typeof L=="undefined"){L=" "}if(typeof b=="undefined"){b=false}var n=0;
var c=0;
var r=0;
var C=0;
var K=false;
var I=false;
var F=false;
var x=false;
var u=false;
var G=E.match(/%[-]*[0-9]*[H|M|S]/g);
for(C=0;
C<G.length;
C++){K=G[C];
I=K.charAt(K.length-1);
if(I=="H"){F=true}if(I=="M"){x=true}if(I=="S"){u=true}}if(F==true){c=Math.floor(d/3600)}if(x==true){if(F==true){n=Math.floor((d%3600)/60)}else{n=Math.floor(d/60)}}if(u==true){if(F==false&&x==false){r=d}else{if(x==true){r=d%60}else{if(F==true&&x==false){r=Math.floor(d%3600)}}}}var q="";
var w=E.split(L);
for(var D=0;
D<w.length;
D++){var o=w[D];
G=o.match(/%[-]*[0-9]*[H|M|S]/g);
var M=true;
for(C=0;
G&&C<G.length;
C++){K=G[C];
var p="";
var H=false;
var e="&nbsp;";
var a=false;
var v=0;
I=K.charAt(K.length-1);
if(K.length>2){var B="";
var f=true;
for(var A=1;
A<K.length-1;
A++){var z=K[A];
if(z=="-"){a=true}else{if(z=="0"&&f==true){e="0";
f=false;
H=true}else{B+=z;
H=true}}}v=parseInt(B,10)}var J="";
if(I=="H"){if(c==0){M=false}J=""+c}else{if(I=="M"){if(n==0){M=false}J=""+n}else{if(I=="S"){J=""+r}}}if(H){if(a){p=J}var t=v-J.length;
for(var y=0;
y<t;
y++){p+=e}if(!a){p+=J}}else{p=J}o=o.replace(K,p)}if(b==true||M==true){if(q.length>0){q=q+L+o}else{q=o}}}return q},getFrameWindowList:function(d){var c=[];
for(var a=0;
a<top.frames.length;
a++){var b=top.frames[a];
if(b===d){continue}c.push({win:b,popup:null})}return c}};
NetFunnel.BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(d){for(var a=0;
a<d.length;
a++){var b=d[a].string;
var c=d[a].prop;
this.versionSearchString=d[a].versionSearch||d[a].identity;
if(b){if(b.indexOf(d[a].subString)!=-1){return d[a].identity}}else{if(c){return d[a].identity}}}return""},searchVersion:function(b){var a=b.indexOf(this.versionSearchString);
if(a==-1){return 0}return parseFloat(b.substring(a+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
NetFunnel.BrowserDetect.init();
if(NetFunnel.BrowserDetect.browser=="Explorer"){if(typeof Array.push!="function"){Array.prototype.push=function(){var b=this.length>>>0;
for(var a=0;
a<arguments.length;
a++){this[b]=arguments[a];
b=b+1>>>0}this.length=b;
return b}}if(typeof Array.pop!="function"){Array.prototype.pop=function(){var b=this.length>>>0,a;
if(b){a=this[--b];
delete this[b]}this.length=b;
return a}}}NetFunnel.getCommandStr=function(f,e){var c="";
var b=0;
if(f=="recv"){b=parseInt(e.substring(0,4),10)}else{var d=/opcode=([0-9]+)&/;
var a=d.exec(e);
if(a.length>1){b=parseInt(a[1],10)}}switch(b){case 5101:c="getTidchkEnter";
break;
case 5002:c="chkEnter      ";
break;
case 5003:c="aliveNotice   ";
break;
case 5004:c="setComplete   ";
break;
default:c="Unknown       "}return c};
NetFunnel.writeDebugMsg=function(j,i,c){var l=new Date();
var e=parseInt(l.getHours(),10);
var f=parseInt(l.getMinutes(),10);
var k=parseInt(l.getSeconds(),10);
var a=parseInt(l.getMilliseconds(),10);
var g="";
if(e<10){g+="0"}g+=e+":";
if(f<10){f+="0"}g+=f+":";
if(k<10){k+="0"}g+=k;
g+="."+a;
var h="";
var b="";
var m="";
if(i=="recv"){h="padding-left:1px;";
b="#9E9E9E;";
m=g+" | Recv | <b>"+NetFunnel.getCommandStr(i,c)+"</b> | "}
else{h="margin-top:5px;";b="#EEEEEE;";
m=g+" | Send | <b>"+NetFunnel.getCommandStr(i,c)+"</b> | "}
j&&j.document.write("<div onload='this.focus()' style='width:650;overflow:hidden;padding:1px;border:1px solid #eeeeee;margin:0px;font-size:10px;font-family:monospace;background-color:"+b+h+"'>"+m+c.substring(0,50)+"</div>")};
NetFunnel.printDebugMsg=function(c,a,b){NetFunnel.debugWindow=window.open("","NetFunnel_debugWindow","status=1,width=700,height=300,resizable=1,scrollbars=1");
if(typeof NetFunnel.debugWindow=="object"){NetFunnel.writeDebugMsg(NetFunnel.debugWindow,c,a)}};
NetFunnel.Storage=function(a){this.html5Support=this.supportsHtml5Storage();
if(typeof a=="number"){this.type=a}};
NetFunnel.Storage.prototype.supportsHtml5Storage=function(){try{return"localStorage" in window&&window.localStorage!==null}catch(a){return false}};
NetFunnel.Storage.prototype.html5Support=false;
NetFunnel.Storage.prototype.length=0;
NetFunnel.Storage.prototype.type=1;
NetFunnel.Storage.prototype.setStorageType=function(a){if(a<1||a>2){this.type=1}else{this.type=a}};
NetFunnel.Storage.prototype.getStorage=function(){if(this.type==1){return localStorage}else{if(this.type==2){return sessionStorage}}return localStorage};
NetFunnel.Storage.prototype.setItem=function(b,d,a,c){try{if(this.html5Support){this.getStorage().setItem(b,d);
NetFunnel.Cookie.set(b,d,a,c)}else{NetFunnel.Cookie.set(b,d,a,c)}return true}catch(f){return false}};
NetFunnel.Storage.prototype.setItemStorageOnly=function(b,d,a,c){try{if(this.html5Support){this.getStorage().setItem(b,d)}else{NetFunnel.Cookie.set(b,d,a,c)}return true}catch(f){return false}};
NetFunnel.Storage.prototype.getItem=function(b,c){var a=false;
try{if(this.html5Support){a=this.getStorage().getItem(b);
if(!a&&(c==undefined||c==false)){a=NetFunnel.Cookie.get(b)}}else{a=NetFunnel.Cookie.get(b)}return a}catch(d){return false}};
NetFunnel.Storage.prototype.removeItem=function(a,b){try{if(this.html5Support){this.getStorage().removeItem(a);
if(b==undefined||b==false){NetFunnel.Cookie.del(a)}}else{NetFunnel.Cookie.del(a)}return true}catch(c){return false}};
NetFunnel.Storage.prototype.clear=function(){try{if(this.html5Support){this.getStorage().clear()}return true}catch(a){return false}};
NetFunnel.MProtect=function(){try{var s=new NetFunnel.Storage();
var b=new Date();
var n=b.getTime();
var l=s.getItem("NFMPT.data",true);
if(l===null){l=""}var c=s.getItem("NFMPT.stdData",true);
if(c===null){c=""}var a=parseInt(s.getItem("NFMPT.lastTime",true),10);
if(isNaN(a)||a===null||a==""){a=0}var r=parseInt(s.getItem("NFMPT.reqCnt",true),10);
if(isNaN(r)||r===null||r==""){r=0}var m=[];
var h=[];
if(l!=""){m=l.split(",")}if(c!=""){h=c.split(",")}if(a!=0){m[m.length]=n-a;
h[h.length]=n-a}a=n;
var k=m.length-1;
var f=0;
for(;
k>=0;
k--){f+=parseInt(m[k],10);
if(f>NetFunnel.MP_TIMELIMIT){break}}var g=h.length-NetFunnel.MP_DEVCNTLIMIT;
if(g<0){g=0}var q=h.slice(g);
var d=m.slice(k+1);
s.setItemStorageOnly("NFMPT.data",d.join(","));
s.setItemStorageOnly("NFMPT.stdData",q.join(","));
s.setItemStorageOnly("NFMPT.lastTime",a+"");
s.setItemStorageOnly("NFMPT.reqCnt",(++r)+"");
var p=NetFunnel.Util.calcStdDev(q,0);
if(p!=false&&p<NetFunnel.MP_DEVLIMIT){return 2}if(d.length<NetFunnel.MP_MINCOUNT){return 0}if(d.length+1>NetFunnel.MP_MAXREQLIMIT){return 1}if(r>NetFunnel.MP_REQONLYLIMIT){s.setItemStorageOnly("NFMPT.reqCnt","0");
return 3}}catch(o){}return 0};
NetFunnel.ProgressBar=function(f,e,g){this._bar=null;
this._bar2=null;
this._config={};
this._totWaitCnt=0;
this._wflag=0;
if(typeof f=="string"){this._obj=g.getElementById(f)}else{this._obj=f}this._config.width=360;
this._config.height=5;
this._config.count=50;
this._config.interval=50;
this._config.color=this._color;
this._config.bgcolor=this._bgcolor;
this._config.waitchk=0;
if(typeof e=="object"){for(var c in e){this._config[c]=e[c]}}if(this._config.count<=0){this._config.count=50}this._oTable=g.createElement("table");
this._oTable.style.width=this._config.width+"px";
this._oTable.style.height=this._config.height+"px";
this._oTable.style.tableLayout="fixed";
this._oTable.style.borderCollapse="separate";
this._oTable.style.borderRadius="20px";
this._oTable.style.mozBorderRadius="20px";
this._oTable.style.overflow="hidden";
this._oTable.cellPadding=0;
this._oTable.cellSpacing=0;
var d=g.createElement("tbody");
var h=g.createElement("tr");
var a=g.createElement("td");
a.style.height=this._config.height+"px";
a.style.backgroundColor=this._config.bgcolor;
var b=g.createElement("td");
b.style.backgroundColor=this._config.bgcolor;
h.appendChild(a);
h.appendChild(b);
d.appendChild(h);
this._oTable.appendChild(d);
this._obj.appendChild(this._oTable);
this._bar=a;
this._bar2=b;
this.show=function(){this._obj.style.visibility="visible";
var i=this;
this._timer=setInterval(function(){i._action(0)},this._config.interval);
return};
this.hide=function(){this._obj.style.visibility="hidden";
if(this._timer){clearTimeout(this._timer);
this._timer=null}return};
this._action=function(){try{if(this._config.waitchk!=0){if(parseInt(this._config.waitchk,10)<parseInt(NetFunnel.gLastData.nwait,10)){NetFunnel.gLastData.nwait=this._config.waitchk}}if(this._wflag==0&&NetFunnel.retryData===null){this._wflag=1}this._oTable.style.width=this._config.width+"px";
if(NetFunnel.gTotWait<=0){NetFunnel.gTotWait=NetFunnel.gLastData.nwait}if(parseInt(NetFunnel.gLastData.nwait,10)>parseInt(NetFunnel.gTotWait,10)){NetFunnel.gTotWait=NetFunnel.gLastData.nwait}var i=this._config.width-Math.round((NetFunnel.gLastData.nwait/NetFunnel.gTotWait)*this._config.width);
var k=this._config.width-i;
this._bar.style.width=i+"px";
this._bar.style.backgroundColor=this._config.color;
this._bar2.style.width=k+"px";
this._bar2.style.backgroundColor=this._config.bgcolor;
this._config.waitchk=NetFunnel.gLastData.nwait}catch(j){}return true}};
NetFunnel.ProgressBar.prototype._mmm=0;
NetFunnel.ProgressBar.prototype._curr=0;
NetFunnel.ProgressBar.prototype._direct=0;
NetFunnel.ProgressBar.prototype._obj=null;
NetFunnel;