!((id,valid,isShow = true) =>{
    var root = document.getElementById(id);
    var isValid = false;
    var init = () => {
        document.body.style = "100%";
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
        root.style.overflow = "hidden";
        root.style.position = "relative";
        root.style.background = "#666";
        root.style.minHeight = "100vh";
        root.style.height = "auto";
        var el = document.createElement("div");
        el.id = "read-more-wrap";
        el.style.position = "absolute";
        el.style.bottom = "0";
        el.style.zIndex = "999";
        el.style.width = "100%";
        el.style.marginTop ="-100px";
        el.innerHTML = `<div id="read-more-mask" style="position: relative; height: 200px; background: -webkit-gradient(linear, 0 0%, 0 100%, from(rgba(255, 255, 255, 0)), to(rgb(255, 255, 255)));"></div><a id="read-more-btn" target="_self" style="position: absolute; left: 50%; top: 70%; bottom: 30px; transform: translate(-50%, -50%); width: 160px; height: 36px; line-height: 36px; font-size: 15px; text-align: center; border: 1px solid rgb(222, 104, 109); color: rgb(222, 104, 109); background: rgb(255, 255, 255); cursor: pointer; border-radius: 6px;">阅读全文</a>`
        root.appendChild(el);
        var el = document.createElement("div");
        el.id = "btw-modal";
        el.style.position = "fixed";
        el.style.top = "50%";
        el.style.visibility = "hidden";
        el.style.left = "50%";
        el.style.transform = "translate(-50%, -50%)";
        el.style.width = "320px";
        el.style.textAlign = "center";
        el.style.fontSize ="13px";
        el.style.background ="rgb(255, 255, 255)";
        el.style.borderRadius ="10px";
        el.style.zIndex = "9999";
        el.innerHTML = `<span id="btw-modal-close-btn" style="position: absolute; top: 5px; right: 15px; line-height: 34px; font-size: 34px; cursor: pointer; opacity: 0.2; z-index: 9999; color: rgb(0, 0, 0); background: none; border: none; outline: none;">×</span>      <p id="btw-modal-header" style="margin-top: 40px; line-height: 1.8; font-size: 13px; color: rgb(240, 65, 52);">扫码关注公众号：<strong>java金融</strong><br>发送：<strong> 555</strong><br>获取永久解锁本站全部文章的验证码</p>      <img src="https://img-blog.csdnimg.cn/20201031233431661.jpg" style="width: 180px; margin-top: 10px; border: 8px solid rgb(230, 230, 230);">      <div id="btw-modal-input-code" style="margin-top: 20px; background: rgb(255, 255, 255);">        <input id="btw-modal-input" type="text" maxlength="10" placeholder="请输入验证码" style="width: 160px; height: 32px; line-height: 32px; padding: 0px 10px; margin: 0px 10px; font-size: 13px; text-rendering: auto; text-transform: none; cursor: text; outline: none; box-sizing: border-box; border: 1px solid rgb(221, 221, 221); appearance: textfield; background-color: white; -webkit-rtl-ordering: logical;">        <button id="btw-submit-btn" style="padding: 0px 20px; height: 32px; font-size: 14px; outline: none; border: none; color: rgb(255, 255, 255); background: rgb(222, 104, 109); cursor: pointer;">提 交</button>      </div>      <p id="btw-footer" style="margin: 40px 0px 20px; color: rgb(153, 153, 153);"></p>`;
        root.appendChild(el);
        var el = document.createElement("div");
        el.id = "mask";
        el.style.width = "100%";
        el.style.height = document.body.clientHeight;
        el.style.position = "absolute";
        el.style.top = "0";
        el.style.left = "0";
        el.style.visibility = "hidden";
        el.style.zIndex = "999";
        el.style.background = "rgba(0,0,0,0.5)";
        document.body.appendChild(el);
    }
    var showMask = (isShow = false) => {
         root.style.height = isShow||!isValid?"2935px":"auto";
         var elWrap = document.getElementById("read-more-wrap");
         elWrap.style.visibility = isShow?"visible":"hidden";
         document.body.style.background = isShow?"rgb(0,0,0,0)":"rgba(0,0,0,0.5)";
    }   
    var showPopup = (isShow= true) => {
        var elModal = document.getElementById("btw-modal");
        elModal.style.visibility = isShow?"visible":"hidden";
        var elMask = document.getElementById("mask");
        elMask.style.visibility = isShow?"visible":"hidden";
        elMask.style.height = document.body.clientHeight + "px";
    }
	if (sessionStorage.getItem('javajrpassword') !=8888){
		init();
		showMask(true);
	}
	
    var btn = document.getElementById("read-more-btn");
	if (btn !=null) {
    btn.onclick = () => {
        showMask();
        showPopup();
    }
	}
    var close = document.getElementById("btw-modal-close-btn");
	if (close !=null) {
    close.onclick = () => {
        showMask(true);
        showPopup(false);
    }
	}
    var submit = document.getElementById("btw-submit-btn");
		if (submit !=null) {
    submit.onclick = () => {
        var elInput = document.getElementById("btw-modal-input");
        if(elInput.value == valid){
            isValid = true;
            showMask(false);
            showPopup(false);
			sessionStorage.setItem('javajrpassword',valid);
        }else {
			alert("验证码不正确");
		}
    }
	}
})("artDetail",8888)
