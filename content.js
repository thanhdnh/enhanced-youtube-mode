var controls = document.getElementsByClassName("ytp-right-controls");
var control = controls[0];

var fm = document.createElement("button");
fm.setAttribute("class","ytp-button");
fm.setAttribute("title","Fitting mode");
fm.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path d="m 31,15 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill="#fff" fill-rule="evenodd" id="ytp-id-31"></path><path d="m 26,10 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill="#fff" fill-rule="evenodd" id="ytp-id-31"></path></svg>';
control.appendChild(fm);
fm.addEventListener("click", ctl_fit);

function ctl_fit(){
	
	var m = document.querySelectorAll('#content #top #player');
	var player = m[0];
	
	var cts = document.querySelectorAll('#content #top #player #player-container .html5-video-player .html5-video-container video');
	var ct = cts[0];
	
	var plctrls = document.querySelectorAll('#content #top #player #player-container #movie_player .ytp-chrome-bottom');
	var plctrl = plctrls[0];
	
	var modes = document.querySelectorAll('#content #top #player #player-container #movie_player .ytp-chrome-bottom .ytp-right-controls .ytp-size-button.ytp-button');
	var mode = modes[0];
		
	if(localStorage.getItem("ispop")==null || localStorage.getItem("ispop")==0){
		if(mode.getAttribute('title')==="Default view")
			mode.click();
		
		player.style.position = 'absolute';
		player.style.top = 0;
		player.style.left = 0;
		player.style.width = (window.innerWidth-4)+'px';
		player.style.height = window.innerHeight+'px';
		player.style.zIndex = "9999";
		
		ct.style.width = player.style.width;
		ct.style.height = player.style.height;
		
		plctrl.style.width = (window.innerWidth-30)+'px';
		localStorage.setItem("ispop", 1);
		mode.disabled = true;
	}else{
		player.style.position = '';
		player.style.top = '';
		player.style.left = '';
		player.style.width = '';
		player.style.height = '';
		player.style.zIndex = '';
		
		ct.style.width = '640px';
		ct.style.height = '360px';
		
		plctrl.style.width = '616px';
		localStorage.setItem("ispop", 0);
		mode.disabled = false;
	}
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
	setTimeout(function(){
	var m = document.querySelectorAll('#content #top #player');
	var player = m[0];
	
	var cts = document.querySelectorAll('#content #top #player #player-container .html5-video-player .html5-video-container video');
	var ct = cts[0];
	
	var plctrls = document.querySelectorAll('#content #top #player #player-container #movie_player .ytp-chrome-bottom');
	var plctrl = plctrls[0];
	
	var modes = document.querySelectorAll('#content #top #player #player-container #movie_player .ytp-chrome-bottom .ytp-right-controls .ytp-size-button.ytp-button');
	var mode = modes[0];
	
	if(mode.getAttribute('title')==="Default view")
		fm.disabled = true;
	else
		fm.disabled = false;
		
	if(localStorage.getItem("ispop")==1){
		if(mode.getAttribute('title')==="Default view")
			mode.click();
		
		player.style.position = 'absolute';
		player.style.top = 0;
		player.style.left = 0;
		player.style.width = (window.innerWidth-4)+'px';
		player.style.height = window.innerHeight+'px';
		player.style.zIndex = "9999";
		
		ct.style.width = player.style.width;
		ct.style.height = player.style.height;
		
		plctrl.style.width = (window.innerWidth-30)+'px';
		mode.disabled = true;
	}}, 1000);
  }
}

window.onresize = function(){
	if(localStorage.getItem("ispop")==1){
		location = location.href;
	}
}

document.onmousemove = function(){
	var modes = document.querySelectorAll('#content #top #player #player-container #movie_player .ytp-chrome-bottom .ytp-right-controls .ytp-size-button.ytp-button');
	var mode = modes[0];
	if(mode.getAttribute('title')==="Default view")
		fm.disabled = true;
	else
		fm.disabled = false;
}

var first = true;

