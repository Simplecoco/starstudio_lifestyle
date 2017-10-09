## DEMO PREVIEW ONLINE
- [轮播图组件](https://simplecoco.github.io/demo/Carousel/index.html)

## Usage

- 支持的自定义参数
	- isShowController: 是否显示控制按钮
	- isInfiniteLoop: 是否无限循环（即轮播到最后一张图回到第一张图，但没有滚回第一张图的视觉效果）
	- perTime: 每张图停留的时间
	- num: 轮播图片的数目，请勿超过img文件夹中的数目，否则超过的数目将无法显示)、
	- width: 轮播视窗宽度
	- height: 轮播视窗高度
	- duration: 过渡时间
	- index: 轮播从第几张图开始
	- isAuto: 是否自动轮播

### Example


```
var test = new Carousel({ width:160*3, height:90*3, num: 4, isInfiniteLoop: true, isShowController: true, duration:800, perTime: 1500, isAuto: true});
test.init();

```
## Warning
- 图片暂时请以 1.png, 2.png ...... 的方式命名
- 传入的参入请以对象字典(键值对)方式传入
