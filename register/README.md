#### Tip
- **线上预览** ：[注册页面重构](http://jshello.top/ci_api/index.php/admin/test)
- 该页面仅用于测试使用，请勿输入自己常用的用户名和密码
- 对每个字段的验证和功能进行了一定程度，添加 index.html 和 regiter.js 中注释部分格式相同的代码，则可以便捷地增加一个字段的功能，你也可以直接把注释直接撤销验证此封装。
  例如我们可以增加一个验证学号的字段：
  ```
  - index.html -
  
        <li>
        <label for="studentId">Your Id</label>
        <div class="inputBox">
        <input type="text" name="studentId" id="studentId">
        <span class="tip"></span>
        <i class="valid-tip">√</i>
        </div>
        </li>
     
  - register.js -

     studentId: {
           id:"studentId",
           description:"学号",
           regexp:/^\d{13}$/,
           tip:"请输入正确的13位学号",
           get index() {                                                   //自动获取位置
               return Object.keys(rules).indexOf(this.id) + 1;
           },
           get dom() {
               return document.getElementById(this.id);
           },
           bind:defineAndBind
        },

  ```

- 注册表单可以对空字段提示，对错误的输入提示，邮箱输入的自动填充等，其中用户名字段与后端通信进行验重，你可以注册一次以后再输入相同的用户名验证此功能。当前聚焦字段之前的字段要有输入以后才会产生提示，防止出现过多的提示

