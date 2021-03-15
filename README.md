# vue-mall

### 项目说明：

一个Web移动端商城

### 项目技术栈：

+ vue-cli
+ vue-router
+ vuex
+ axios
+ ES6
+ better-scroll
+ eslint
+ ...

 ### 项目功能：

- [x] 首页
- [x] 分类
- [x] 购物车
- [x] 个人主页
- [x] 详情
- [x] Tab选项卡
- [x] 吸顶效果
- [x] 防抖函数
- [x] 懒加载
- [x] 点击回到顶部
- [x] 标题内容联动

### 项目结构

```
 
    ├─public                    // 打包的数据文件 
    └─src                       
        ├─assets                // 图片等静态资源文件
        │  ├─css
        │  └─img
        │      ├─cart         
        │      ├─common
        │      ├─detail
        │      ├─home
        │      ├─profile
        │      └─tabbar
        ├─common                // 工具类函数文件
        ├─components            // 公共组件
        │  ├─common             // 其他项目也可用的公共组件
        │  │  ├─navBar          // 导航栏组件
        │  │  ├─scroll          // 滚动条组件
        │  │  ├─swiper          // 轮播图组件
        │  │  └─tabBar          // 切换栏组件
        │  └─content            // 仅用于本项目的公共组件
        │      ├─backTop        // 点击回到顶部组件
        │      ├─checkButton    // 复选框组件
        │      ├─goods          // 商品组件
        │      ├─mainTabBar     // 底部切换栏组件
        │      ├─tabControl     // 控制栏组件
        │      └─toast          // 弹框提示组件
        ├─network               // 数据请求文件
        ├─router                // 路由文件
        ├─store                 // vuex状态管理文件
        └─views                 // 项目页面文件
            ├─cart              // 购物车页面组件
            │  └─childComps     // 购物页面子组件
            ├─category          // 分类页面组件
            │  └─childComps     // 分类页面子组件
            ├─detail            // 详情页面组件
            │  └─childComps     // 详情页面子组件
            ├─home              // 首页页面组件
            │  └─childComps     // 首页页面子组件
            └─profile           // 个人主页组件
                └─childComps    // 个人主页子组件


````

### 项目展示：

<center>
<img src="https://user-images.githubusercontent.com/50788337/110977586-51c68180-839d-11eb-9a60-ca99814edd3e.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977615-5723cc00-839d-11eb-9d03-6cde4ea2830b.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977637-5d19ad00-839d-11eb-972b-707ffa638ab5.png" width="400"/>
  <img src="https://user-images.githubusercontent.com/50788337/110977652-6145ca80-839d-11eb-9683-9ee4e91e0a0c.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977673-66a31500-839d-11eb-8807-22f6ee39e95c.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977683-69056f00-839d-11eb-8d42-a7ba96ca9379.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977715-70c51380-839d-11eb-9ee0-a20eedba258c.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977721-73c00400-839d-11eb-881b-ea21f1023b6b.png" width="400"/>
    <img src="https://user-images.githubusercontent.com/50788337/110977729-76225e00-839d-11eb-94bf-33db87bbb18f.png" width="400"/>
</center>



### 项目使用：
```
1. git clone https://github.com/kevin102606/vue-mall
2. cd  vue-mall
3. npm install
4. npm run serve

````
