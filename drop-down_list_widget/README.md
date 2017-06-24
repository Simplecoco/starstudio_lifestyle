## Usage


1. 在.html中添加标签(可以是任意类型标签)，并赋予其id或者class

2. 在对应.js文件中使用 new DropDown(**"selector"**,**[option1,option2...]**,**width**,**height**,**"placeholder"**)
	- **"selector"** ：您在.html中设置的id或者class，注意使用“”将其包含
	- **[option1,option2...]** ：一个数组，数组成员即您要设置的下拉框的每一个选项
	- **width** ：显示框select的宽度
	- **height** ：显示框select的高度
	- **"placeholder"** ：下拉框未选择之前的提示性文字

## Example

```
<div id="test"></div>
```
```
 var test1=new DropDown("test",[1,2,3],400,40,"ssss");
```
