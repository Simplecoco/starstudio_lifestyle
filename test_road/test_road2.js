(function(){


    function MinTime(n, start, end, infoArray) {
        this.n = parseInt(n);
        this.start = parseFloat(start);
        this.end = parseFloat(end);
        this.infoArray = infoArray || [];
    }

    MinTime.prototype = {
        constructor: MinTime,

        addInfoArray: function (start, end, speedLimit) {
            if(start < end) {
                if ((this.infoArray[this.infoArray.length - 1] && this.infoArray[this.infoArray.length - 1]._end == start) || this.infoArray.length == 0) {
                    var perInfo = {};
                    perInfo._start = parseInt(start);
                    perInfo._end = parseInt(end);
                    perInfo._speedLimit = parseInt(speedLimit);
                    this.infoArray.push(perInfo);
                    return true;
                }
            }
            else{
                return false;
            }
        },

        perTime: function () {
            var info = arguments[0];
            var time;
            if (this.start >= info._start && this.end <= info._end) {
                time = (this.end - this.start) / info._speedLimit;
                return time;
            }
            else if (this.start <= info._start && this.end >= info._end) {
                time = (info._end - info._start) / info._speedLimit;
                return time;
            }
            else if (this.start <= info._end && this.end >= info._end) {
                time = (info._end - this.start) / info._speedLimit;
                return time;
            }
            else if (this.start <= info._start && this.end >= info._start) {
                time = (this.end - info._start) / info._speedLimit;
                return time;
            }
        },

        totalTime: function () {
            var timeArr = this.infoArray.map(this.perTime, this);
            return timeArr.reduce(function (prev, cur) {
                if (isNaN(prev) || isNaN(cur)) {
                    return prev;
                }
                else {
                    return prev + cur;
                }
            }).toFixed(2);
        }
    };

    function main() {
        var n = readline().split(/\s+/g);
        var time = new MinTime(parseInt(n[0]));
        for (var i = 0; i < time.n; i++) {
            var info = readline().split(/\s+/g);
            var isTrue=time.addInfoArray(parseInt(info[0]), parseInt(info[1]), parseInt(info[2]));
            if(!isTrue){
                print("error value,please enter again");
                return false;
            }
        }
        var distance = readline().split(/\s+/g);
        if(distance[0] <= distance[1]){
            time.start = distance[0];
            time.end = distance[1];
        }
        else{
            return false;
        }
        print(time.totalTime());
    }

    main();
})();
