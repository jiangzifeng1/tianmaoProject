"use strict";var _createClass=function(){function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,s){return e&&n(t.prototype,e),s&&n(t,s),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}define(["jquery","formtest"],function(i,s){return{init:function(){function t(){_classCallCheck(this,t),this.setnameNext=i(".testphone").find(".next"),this.setnameInput=i(".testphone").find("input"),this.setinfor=i(".top").find(".setinfor"),this.setname=i(".top").find(".setname"),this.testphone=i(".testphone"),this.writeinfor=i(".writeinfor"),this.setpay=i(".setpay"),this.paymethod=i(".paymethod"),this.password=[],this.radioList=i(".paymethod").find("input"),this.nextpaymethod=i(".nextpaymethod"),this.success=i(".success"),this.signsuccess=i(".signsuccess"),this.initInput()}new(_createClass(t,[{key:"initInput",value:function(){var e=this;this.setnameInput.on("blur",function(t){return e.setnameHandler(t)}),this.setnameNext.on("click",function(t){return e.setnameHandler(t)}),s.formInit(this.writeinfor,this.setinfor,this.setpay,this.paymethod,this.password),this.radioList.on("click",function(t){return e.radioHanler(t)}),this.nextpaymethod.on("click",function(t){return e.nextpaymethodHandler(t)})}},{key:"setnameHandler",value:function(s){var n,a=this;"INPUT"===s.target.nodeName?""!==i(s.target).val()?(n=/^1\d{10}$/.test(i(s.target).val()),i.ajax({url:"http://localhost/tianmao/dist/php/registry.php",data:"usernames="+i(s.target).val(),type:"post"}).done(function(t){var e=Boolean(t);e?(a.setnameInput.next().html("用户名已存在").css({color:"red",fontWeight:"bold"}),a.setnameNext.removeClass("nextactive")):n?n&&!e&&(a.setnameInput.next().html("输入正确").css({color:"green",fontWeight:"bold"}),a.setnameNext.addClass("nextactive"),a.username=i(s.target).val()):(a.setnameInput.next().html("输入格式错误").css({color:"red",fontWeight:"bold"}),a.setnameNext.removeClass("nextactive"))})):this.setnameInput.next().html(""):"rgb(255, 0, 0)"===this.setnameNext.css("backgroundColor")&&(this.setinfor.addClass("active"),this.setname.addClass("complete"),this.testphone.css("display","none"),this.writeinfor.css("display","block"))}},{key:"radioHanler",value:function(t){console.log(this.password),i(t.target).prop("checked")&&(i(t.target).siblings("span").css("color","green"),i(t.target).parent().siblings("div").find("span").css("color","#000"))}},{key:"nextpaymethodHandler",value:function(){var t=this.username,e=this.password[0],s=this.password[1];i.ajax({url:"http://localhost/tianmao/dist/php/registry.php",data:"username="+t+"&password="+e+"&nickname="+s,type:"post"}),this.success.addClass("complete"),this.setpay.addClass("complete"),this.paymethod.css("display","none"),this.signsuccess.css("display","block")}}]),t)}}});