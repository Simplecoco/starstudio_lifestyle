function Carousel() {
  var custom = arguments[0];
  this.isShowController = custom.isShowController || false;
  this.isInfiniteLoop = custom.isInfiniteLoop || false;
  this.perTime = custom.perTime || 1500;
  this.num = custom.num || 4;
  this.width = custom.width || 160*5;
  this.height = custom.height || 90*5;
  this.duration = custom.duration || 800;
  this.index = 1;
  this.nowPosition = this.isInfiniteLoop ? -this.index*this.width : -(this.index - 1)*this.width;
  this.isAuto = custom.isAuto !== false;

  this._isCtrlForbidden = true;
}

Carousel.prototype = {
  constructor: Carousel,
  init: function () {
    this._initPicture();
    this._initConfig();
  },

  _initPicture: function () {
    var fragment = document.createDocumentFragment();
    var viewport = document.getElementsByClassName('viewport')[0];
    var container = document.getElementsByClassName('container')[0];

    viewport.style.width = this.width + 'px';
    viewport.style.height = this.height + 'px';
    container.style.height = this.height + 'px';

    if(this.isInfiniteLoop){
      var firstLi = this._initPic(this.num);
      fragment.appendChild(firstLi);
    }

    for(var i=1; i<=this.num; i++){
      var li = this._initPic(i);
      fragment.appendChild(li);
    }

    if(this.isInfiniteLoop){
      var lastLi = this._initPic(1);
      fragment.appendChild(lastLi);
    }

    container.appendChild(fragment);
    container.style.transform = "translateX(" + this.nowPosition + "px" +")";
    container.style.transition = "transform " + this.duration + "ms";
  },

  _initPic:function (num) {
    var li = document.createElement('li');
    li.className = 'pic';
    li.innerHTML = '<img src="img/' + num + '.png" >';
    li.style.width = this.width + 'px';
    return li;
  },

  moveToLeft: function () {
    if(!this._isCtrlForbidden){
      return;
    }
    var container = document.getElementsByClassName('container')[0];
    if(container.style.transition == "none"){
      container.style.transition = "transform " + this.duration + "ms";
    }
    if(this.index > 1){
      this.nowPosition += this.width;
      this.index--;
    }
    else{
      if(this.isInfiniteLoop){
        this._fakeMoveToLeft();
        return;
      }
      this.nowPosition = -this.width*(this.num - 1);
      this.index = this.num;
    }
    container.style.transform = "translateX(" + this.nowPosition + "px" +")";
  },

  moveToRight: function () {
    if(!this._isCtrlForbidden){
      return;
    }
    var container = document.getElementsByClassName('container')[0];
    if(container.style.transition == "none"){
      container.style.transition = "transform " + this.duration + "ms";
    }
    if(this.index <= this.num - 1){
      this.nowPosition -= this.width;
      this.index++;
    }
    else{
      if(this.isInfiniteLoop){
        this._fakeMoveToRight();
        return;
      }
      this.nowPosition = 0;
      this.index = 1;
    }
    container.style.transform = "translateX(" + this.nowPosition + "px" +")";
  },

  _fakeMoveToRight: function () {
    this._isCtrlForbidden = false;
    var container = document.getElementsByClassName('container')[0];
    this.nowPosition -= this.width;
    container.style.transform = "translateX(" + this.nowPosition + "px" +")";
    setTimeout(function () {
      container.style.transition = "none";
      this.nowPosition = -this.width;
      container.style.transform = "translateX(" + this.nowPosition + "px" +")";
      this.index = 1;
      this._isCtrlForbidden = true;
    }.bind(this), this.duration);
  },

  _fakeMoveToLeft: function () {
    this._isCtrlForbidden = false;
    var container = document.getElementsByClassName('container')[0];
    this.nowPosition += this.width;
    container.style.transform = "translateX(" + this.nowPosition + "px" +")";
    setTimeout(function () {
      container.style.transition = "none";
      this.nowPosition = -this.width*this.num;
      container.style.transform = "translateX(" + this.nowPosition + "px" +")";
      this.index = this.num;
      this._isCtrlForbidden = true;
    }.bind(this), this.duration);
  },

  _auto: function () {
    var that = this;
    return setInterval(that.moveToRight.bind(that), that.perTime);
  },

  _initConfig: function () {
    var that = this;
    if(this.isShowController){
      var leftButton = document.getElementsByClassName('leftButton')[0];
      var rightButton = document.getElementsByClassName('rightButton')[0];
      leftButton.style.display = "block";
      rightButton.style.display = "block";
      leftButton.addEventListener('click', that.moveToLeft.bind(that), false);
      rightButton.addEventListener('click', that.moveToRight.bind(that),false);
    }

    if(this.isAuto){
      var viewport = document.getElementsByClassName('viewport')[0];
      var timer = this._auto();
      viewport.addEventListener('mouseover', function () {
        clearInterval(timer);
      });
      viewport.addEventListener('mouseout', function () {
        timer = this._auto();
      }.bind(this));
    }
  }
};

var test = new Carousel({ width:160*3, height:90*3, num: 4, isInfiniteLoop: true, isShowController: true, duration:800, perTime: 1500, isAuto: true});
test.init();