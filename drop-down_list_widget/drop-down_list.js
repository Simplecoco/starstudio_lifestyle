/**
 * Created by SimpleCoco on 2017/4/15.
 */
function DropDown(selector,options,width,height,placeholder) {
    this.selector=selector;
    this.options=options || {};
    this.height=height || "";
    this.width=width || "";
    this.placeholder=placeholder || "请做出你的选择";
    this.init();
    return this;
}

DropDown.prototype = {
    constructor : DropDown,

    init : function () {
        this.newNode = this.createNode();
        this.bindEvent();
        this.locate();
        // window.onunload = this.removeEvent;
    },

    locate : function () {
        var holdNode=document.getElementsByClassName(this.selector)[0] || document.getElementById(this.selector);  //可能会有问题
            holdNode.parentNode.replaceChild(this.newNode,holdNode);
    },

    createNode: function () {
        var div=document.createElement("div");
        div.className="drop-down";
        div.style.width=parseInt(this.width) + "px";
        div.style.height=parseInt(this.height)+ "px";

        var input=document.createElement("input");
        input.placeholder=this.placeholder;
        input.disabled="disabled";

        var ul=document.createElement("ul");
        for(var i=0;i<this.options.length;i++){
            var li=document.createElement("li");
            li.innerText=this.options[i];
            li.title=this.options[i];
            li.style.lineHeight=parseInt(this.height)+ "px";
            ul.appendChild(li);
        }

        div.appendChild(input);
        div.appendChild(ul);

        return div;
    },

    bindEvent: function () {
        // console.log(this);
        var that=this;
        this.newNode.addEventListener("click",this.unfold,false);
        this.newNode.addEventListener("click",this.select,false);
        document.addEventListener("click",function(){that.fold(that);},false);
        // this.fold.call()
    },
    // removeEvent:function () {
    //     this.newNode.removeEventListener("click",this.unfold,false);
    //     this.newNode.removeEventListener("click",this.select,false);
    //     document.removeEventListener("click",this.fold,false);
    // },

    unfold: function () {
        var target;
        // var this.currentBox=this;
        if (event.target.nodeName == "DIV") {
            target = event.target;
            console.log(event.target);
        }
        else if (event.target.nodeName == "INPUT") {
            target = event.target.parentNode;
        }
        else {
            return false;
        }

        // document.call(this.fold,false);
        // this.fold.apply(document);
        var ul = target.getElementsByTagName("ul")[0];
        ul.style.display = "block";
        event.stopPropagation();

    },

    fold: function (current) {
        var ul=current.newNode.getElementsByTagName("ul")[0];
        console.log(ul);
        if(ul.style.display == "block"){
            ul.style.display="none";
        }
        //     var divArray=document.getElementsByClassName("drop-down");
        //     for(var i=0;i<divArray.length;i++){
        //         var ul=divArray[i].getElementsByTagName("ul")[0];
        //         if(ul.style.display == "block"){
        //             ul.style.display = "none";
        //             // this.current=false;
        //     }
        // }
    },

    select: function () {
        if(event.target.nodeName == "LI"){
            var input=this.getElementsByTagName("input")[0];
            input.value=event.target.innerText;
            input.title=event.target.title;
            var ul=event.target.parentNode;
            ul.style.display = "none";
            event.stopPropagation();
        }
    }
};

var test1=new DropDown("test",[1,2,3],400,40,"ssss");
var test2=new DropDown("haha",["一","二","三"]);
var test3=new DropDown("keke",["我是谁","我在哪","我要吃什么"],160,30,"hhhhh");

