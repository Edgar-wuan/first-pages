function inputGetFocus(){
	var bg = document.getElementById('bg')
	bg.style.opacity="1";
	bg.style.backgroundSize="110%";
	bg.style.width="120%";
	bg.style.height="120%";
	//bg.style.left="-200px";
}
function inputLoseFocus(){
	var bg = document.getElementById('bg')
	bg.style.opacity="0";
	bg.style.backgroundSize="100%";
	bg.style.width="100%";
	bg.style.height="100%";
	//bg.style.left="200px";
}
function search2(key){
	var e = key || window.event;
	if(e && e.keyCode==13){
		window.open("https://www.baidu.com/s?wd="+document.getElementById('input_search').value);
	} else {
		
	}
}

function search(){
	window.open("https://www.baidu.com/s?wd="+document.getElementById('input_search').value);
}
function search3(key){
	var e = key || window.event;
	if(e && e.keyCode==13){
		window.open("https://cn.bing.com/search?q="+document.getElementById('input_search').value);
	} else {
		
	}
}

function search4(){
	window.open("https://cn.bing.com/search?q="+document.getElementById('input_search').value);
}
function search5(key){
	var e = key || window.event;
	if(e && e.keyCode==13){
		window.open("https://search.bilibili.com/all?keyword="+document.getElementById('input_search').value);
	} else {
		
	}
}

function search6(){
	window.open("https://search.bilibili.com/all?keyword="+document.getElementById('input_search').value);
}
function search7(key){
	var e = key || window.event;
	if(e && e.keyCode==13){
		window.open("https://xueshu.baidu.com/s?wd="+document.getElementById('input_search').value);
	} else {
		
	}
}

function search8(){
	window.open("https://xueshu.baidu.com/s?wd="+document.getElementById('input_search').value);
}
function search9(key){
	var e = key || window.event;
	if(e && e.keyCode==13){
		window.open("https://shequ.codemao.cn/discover?keyword="+document.getElementById('input_search').value);
	} else {
		
	}
}

function search10(){
	window.open("https://shequ.codemao.cn/discover?keyword="+document.getElementById('input_search').value);
}
function getTime() {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (hour >= 0 && hour <= 9) hour = "0" + hour;
	if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
	if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
	document.getElementById("biaoti").innerHTML = hour+":"+minutes+":"+seconds;
}
window.onload=setInterval("getTime()",1000);

window.onload=loadYiYan();

function loadYiYan(){
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
				var js = JSON.parse(xmlhttp.responseText);
				document.getElementById("slogan2").innerHTML=js.hitokoto+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp??????"+js.from;
				console.log(js.hitokoto+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp????????????"+js.from);
			}
		}
	}
	xmlhttp.open("GET","https://v1.hitokoto.cn");
	xmlhttp.send();
	
}
/*window.onload=loadToYan();
function loadToYan(){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
				var js = xmlhttp.responseText
				document.getElementById("slogan3").innerHTML=js+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp????????????????????????";
				console.log(js+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp????????????????????????")
			}
		}
	}
	xmlhttp.open("GET","https://api.iculture.cc/api/lishi");
	xmlhttp.send();
	
}*/
