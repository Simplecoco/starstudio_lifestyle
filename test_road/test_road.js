/**
 * Created by SimpleCoco on 2017/5/27.
 */


function MinTime(n,start,end,infoArray) {
    this.n=parseInt(n);
    this.start=parseFloat(start);
    this.end=parseFloat(end);
    this.infoArray=infoArray || [];
}

MinTime.prototype = {
    constructor:MinTime,

    init:function () {
        this.n=parseInt(prompt("请输入公路段数"));
        for(var i=0;i<this.n;i++){
            var info=prompt("请输入第"+parseInt(i+1)+"段的起点，终点，限速。用空格分隔");
            var infoArr=info.split(/\s+/g);
            var infos=infoArr.map(function (x) {
                return parseInt(x);
            });
            // if(infos[0] >= infos[1]){
            //     return false;
            // }
            this.addInfoArray(infos[0],infos[1],infos[2]);
        }
        // if(this.infoArray){
        //     return this.infoArray.every(function (x,i) {
        //         if(x[i+1]){
        //             if(x[i]._end !== x[i+1]._start || x[i]._start >= x[i]._end){
        //                 return false;
        //             }
        //         }
        //     });
        // }
        var distance=prompt("请输入要计算的起始点，用空格分隔");
        var distanceArr=distance.split(/\s+/g);
        if(distanceArr[0]<=distance[1]){
            this.start=parseFloat(distanceArr[0]);
            this.end=parseFloat(distanceArr[1]);
        }
        else{
            return false;
        }
        // this.infoArray.

        // var that=this;
        // this.createDom("<label for='roads'>公路段数 </label><input type='text' id='roads'> <button>下一步</button>");

    },

    addInfoArray:function (start,end,speedLimit) {
        var perInfo={};
        perInfo._start=parseInt(start);
        perInfo._end=parseInt(end);
        perInfo._speedLimit=parseInt(speedLimit);
        this.infoArray.push(perInfo);
    },

    perTime:function () {
        var info=arguments[0];
        var time;
        if(this.start>=info._start && this.end<=info._end){
            time=(this.end - this.start)/info._speedLimit;
            return time;
        }
        else if(this.start<=info._start && this.end>=info._end){
            time=(info._end - info._start)/info._speedLimit;
            return time;
        }
        else if(this.start<=info._end && this.end>=info._end){
            time=(info._end - this.start)/info._speedLimit;
            return time;
        }
        else if(this.start<=info._start && this.end>=info._start){
            time=(this.end - info._start)/info._speedLimit;
            return time;
        }
    },

    totalTime:function () {
        var timeArr=this.infoArray.map(this.perTime,this);
        return timeArr.reduce(function (prev, cur) {
            if(isNaN(prev) || isNaN(cur)) {
                return prev;
            }
            else {
                return prev + cur;
            }
        }).toFixed(2);
    }
//
//     createDom:function (content) {
//         var test=document.getElementsByClassName("test")[0];
//         test.innerHTML = content;
//         var example=this;
//         // var bt=test.getElementsByTagName("button")[0];
//         // bt.bindEvent();
//         // bt.addEventListener("click",this.bindEvent,false);
//         // test.bindEvent(example);
//         test.addEventListener("click",function(){example.getRoads(test)},false);
//     },
//     removeDom:function () {
//         var test=document.getElementsByClassName("test")[0];
//         test.innerHTML = "";
//     },
//     // bindEvent:function (example) {
//     //     var test=document.getElementsByClassName("test")[0];
//     //     test.addEventListener()
//         // this.addEventListener("click",example.getData,false);
//     // },
//     getRoads:function (dom) {
//         if(event.target.nodeName == "BUTTON" && dom.children[1].value !== ""){
//             this.n=parseInt(dom.children[1].value);
//             console.log(arguments);
//             this.createDom("<label>每段起点 </label><input type='text'> <label>每段终点</label><input type='text'> <label>限速</label><input type='text'> <button>添加</button>");
//         }
//     },
//     getInfos:function (dom) {
//         if(event.target.nodeName == "Button"){
//             var infos=dom.getElementsByTagName("input").map(function (inputDom) {
//                 return parseInt(inputDom.value);
//             });
//             console.log(infos);
//             this.addInfoArray(infos[0],infos[1],infos[2]);
//         }
//     },
//
//     getDistance:function (dom) {
//         if(event.target.nodeName == "Button"){
//             var infos=dom.getElementsByTagName("input").map(function (inputDom) {
//                 return parseInt(inputDom.value);
//             });
//             console.log(infos);
//             this.addInfoArray(infos[0],infos[1]);
//         }
//     }
};

var timer=new MinTime(4,20,60);
timer.init();
alert("最少需要"+timer.totalTime()+"小时完成这段路程");
document.write("最少需要"+timer.totalTime()+"小时完成这段路程");
