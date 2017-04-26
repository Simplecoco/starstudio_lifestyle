/**
 * Created by 辛珀 on 2017/2/14.
 */

//主要修改了，redTip和greenTip,将结构简化明了，还有就是对象自动获取位置，将模拟失焦改为显示绑定等，以及一些细节的按钮未启用版,还有如果添加新对象的话，
//对象名字要和id相同，因为后面通过that.id找对象，如果知道了什么获取对象名的方法可以解决这个问题。

(function(){
    var rule = {
        id: {
            id: "id",
            description: "用户名",
            regexp: /^(?!^_+$)(?!^\d+$)([\u4E00-\u9FA5\uF900-\uFA2D\w_]){1,18}$/,  //不能纯数字，不能纯下划线
            tip: "用户名只能为数字，字母，下划线的组合，还不能有空格哦。",
            get index() {                                                   //自动获取位置
                return Object.keys(rule).indexOf(this.id) + 1;
            },
            get dom() {
                return document.getElementById(this.id);
            },
            bind:defineAndBind
        },

        password: {
            id: "password",
            description: "密码",
            regexp: /^(?!^\d+$)(?!^[a-zA-Z]+$)(\S{6,22})$/,         //不能纯数字，纯字母，并且是没有空格的密码
            tip: "密码须为6-22位无空格的字符的组合，且不能只为同一种类型哦",
            get index() {                                                   //自动获取位置
                return Object.keys(rule).indexOf(this.id) + 1;
            },
            get dom() {
                return document.getElementById(this.id);
            },
            bind:defineAndBind
        },

        confirmPassword: {
            id: "confirmPassword",
            description: "确认密码",
            regexp: /^(?!^\d+$)(?!^[a-zA-Z]+$)(.{6,22})$/,     //同理
            tip: "密码格式错误。",
            tip_b: "两次密码不一样哦。",
            get index() {                                                   //自动获取位置
                return Object.keys(rule).indexOf(this.id) + 1;
            },
            get dom() {
                return document.getElementById(this.id);
            },
            bind:defineAndBind
        },


        telephone: {
            id: "telephone",
            description: "手机号码",
            regexp: /^1((3[0-9])|(4[57])|(5[0-35-9])|(7[36-8])|(8[0-9]))[0-9]{8}$/,
            tip: "请输入正确的11位号码哦",
            get index() {                                                   //自动获取位置
                return Object.keys(rule).indexOf(this.id) + 1;
            },
            get dom() {
                return document.getElementById(this.id);
            },
            bind:defineAndBind
        },

        //studentId: {
        //    id:"studentId",
        //    description:"学号",
        //    regexp:/^\d{13}$/,
        //    tip:"请输入正确的13位学号",
        //    get index() {                                                   //自动获取位置
        //        return Object.keys(rule).indexOf(this.id) + 1;
        //    },
        //    get dom() {
        //        return document.getElementById(this.id);
        //    },
        //    bind:defineAndBind
        //},

        email: {
            id: "email",
            description: "邮箱",
            regexp: /^(?!^_+$)([\w_]){1,18}@\w{1,10}\.com$/,  //不能纯下划线
            tip: "请输入正确的邮箱地址xxx@xxx.com",
            emailAutoFillData:["@163.com", "@126.com", "@qq.com", "@outlook.com", "@gmail.com"],
            get index() {                                                   //自动获取位置
                return Object.keys(rule).indexOf(this.id) + 1;
            },
            get dom() {
                return document.getElementById(this.id);
            },
            bind:defineAndBind
        },

        bingoValueGroup: {}
    };

    function defineAndBind() {
        var that = this;                            //这里可以问两个问题，引用类型的深浅复制，以及this的指向
        var dom = this.dom;
        var tip = dom.nextSibling.nextSibling;
        var validTip = tip.nextSibling.nextSibling;
        dom.addEventListener("blur", test);

        if (this.id === "email") {
            dom.addEventListener("keyup", emailAutoFill);     //对于email，还要多绑一个keyup事件
        }

        function test() {
            var index = Object.keys(rule.bingoValueGroup).length;
            var value = this.value;
            var regexp = that.regexp;

            if (parseInt(that.index) - 1 <= index && !rule.email.mark) {           //有前后矛盾，所以加了一个标记。还有就是当前正确值为当前序号减一时才会执行判断操作

                if (value == "") {
                    tip.innerText = that.description + "不能为空哦。";
                    redTip();
                    return false;
                }
                else if (!(regexp.test(value)) && that.id !== "confirmPassword") {
                    tip.innerText = that.tip;
                    redTip();
                    return false;
                }
                else if (value !== rule.password.bingoValue && that.id === "confirmPassword" && value !== document.getElementById("password").value) {
                    tip.innerText = that.tip_b;
                    redTip();
                    return false;
                }
                else {
                    if(that.id === "id"){
                        isExist();
                    }
                    else {
                        greenTip();
                        //signIn();                 //每次测试完都验证一下
                    }
                }
            }
        }

        function emailAutoFill() {
            var regexp = /^.+@(.*)$/;

            if (regexp.test(this.value)) {                                 //测试已经超出自动填充范围。。。然后就关闭填充框，这里待完善
                tip.style.transform = "rotateX(-90deg)";
                delete rule.email.mark;                     //标记

                dom.addEventListener("keyup", function () {             //手动输入完以后还要验证下
                    if (that.regexp.test(dom.value)) {
                        greenTip();
                        //signIn();
                    }
                });
                return false;
            }
            else if (this.value === "") {
                tip.style.transform = "rotateX(-90deg)";
                return false;
            }
            else {
                var fragment = document.createDocumentFragment();
                for (var i = 0; i < that.emailAutoFillData.length; i++) {                       //创造自动填充选项
                    var li = document.createElement("li");
                    var liText = document.createTextNode(this.value + that.emailAutoFillData[i]);
                    li.appendChild(liText);
                    fragment.appendChild(li);
                }
                tip.innerHTML = "";                 //每次添加前先清空
                tip.appendChild(fragment);
                tip.style.background="linear-gradient(130deg,rgba(10,110,255,0.8),rgba(8,10,255,0.8))";
                tip.style.transition = "transform 0.2s 0.2s";
                tip.style.transform = "rotateX(0)";
                rule.email.mark = "no blur";                  //标记
                tip.addEventListener("click", select);
            }

            function select(event) {
                if (event.target.nodeName === "LI") {
                    var e = event.target;
                    dom.value = e.innerText;
                    greenTip();
                    delete rule.email.mark;                    //标记
                    //signIn();
                }
            }
        }

        function redTip() {                           //删除之前的正确值并显示错误提示
            delete that.bingoValue;
            delete rule.bingoValueGroup[that.id];
            validTip.style.transition = "transform 0.2s";
            validTip.style.transform = "scale(0)";
            tip.style.background="rgba(238,44,44,0.6)";
            tip.style.transition = "transform 0.2s 0.2s";
            tip.style.transform = "rotateX(0)";
        }
        function greenTip() {                                    //保存正确值并显示logo
            that.bingoValue = dom.value;
            rule.bingoValueGroup[that.id] = that.bingoValue;
            tip.style.transition = "transform 0.2s";
            tip.style.transform = "rotateX(-90deg)";
            validTip.style.transition = "transform 0.2s 0.2s";
            validTip.style.transform = "scale(1)";
        }

        function isExist(){
            //ajax验重
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                        var message=JSON.parse(xhr.response);
                        if(message.errorCode == "0"){
                            greenTip();
                        }
                        else if(message.errorCode == "1"){
                            tip.innerText = message.errorMessage;
                            redTip();
                            return false;
                        }
                    }
                    else{
                        tip.innerText = "请求不成功";
                        redTip();
                        return false;
                    }
                }
            };
            xhr.open("post","http://www.jinsong.online/ci_api/index.php/admin/id_only",true);
            var form=new FormData();
            form.append(that.id,dom.value);
            xhr.send(form);
        }

        return {dom: dom, test: test};     //return出去，以便点击注册按钮再次验证时调用，防止用户第一次输入成功，然后又进行修改
    }

    function signIn() {
        var signIn = document.getElementById("signIn");
        signIn.addEventListener("click", finalVerify);

        function finalVerify() {
            for (var i = 0; i < Object.keys(rule).length; i++) {
                var o = rule[Object.keys(rule)[i]].bind();
                o.test.apply(o.dom);
            }
            if (Object.keys(rule.bingoValueGroup).length === Object.keys(rule).length) {      //当正确值足够时提交
                signIn.innerText = "Loading...";
                signIn.className ="invalidBt";
                signIn.disabled = "disabled";
                var registerForm = document.getElementsByClassName("register")[0];
                //form.submit();
                var xhr=new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                    if(xhr.readyState == 4){
                        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                            var message = JSON.parse(xhr.response);
                            console.log(message);
                            if (message.errorCode == "0") {
                                registerForm.style.transform="rotateX(90deg)";
                                setTimeout(function(){registerForm.innerHTML="注册成功";registerForm.style.transform="rotateX(0)";},500);
                                //registerForm.transition="transform 0.5s 0.5s";
                                //registerForm.transform="rotateX(0deg)";
                                //signIn.innerText = "注册成功";
                            }
                            else if (message.errorCode == "1") {
                                signIn.innerText = message.errorMessage;
                                //redTip();
                                return false;
                            }
                            else {
                                signIn.innerText = "请求失败";
                            }
                        }
                    }
                };
                xhr.open("post","http://www.jinsong.online/ci_api/index.php/admin/registration",true);
                delete rule.bingoValueGroup["confirmPassword"];
                var form=new FormData(rule.bingoValueGroup);
                for(var j=0;j<Object.keys(rule.bingoValueGroup).length;j++){
                    form.append(Object.keys(rule.bingoValueGroup)[j],rule.bingoValueGroup[Object.keys(rule.bingoValueGroup)[j]]);
                }
                xhr.send(form);
            }
        }
    }

    function bindDom() {
        Object.defineProperty(rule, "bingoValueGroup", {enumerable: false});   //防止之后之后调用keys遍历出
        for(var i=0;i<Object.keys(rule).length;i++){
            rule[Object.keys(rule)[i]].bind();
        }
        signIn();
    }

    bindDom();
})();
