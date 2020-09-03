window.addEventListener("load", function () {
  // 1.轮播图
  const arrow_l = document.querySelector(".arrow-l");
  const arrow_r = document.querySelector(".arrow-r");
  const focus = document.querySelector(".focus");
  const focusWidth = focus.offsetWidth;
  //  鼠标经过focus 就显示隐藏左右按钮
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    clearInterval(timer);
    timer = null; // 清除定时器变量
  });
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    timer = setInterval(function () {
      //手动调用点击事件
      arrow_r.click();
    }, 2000);
  });
  //  动态生成小圆圈  有几张图片，我就生成几个小圆圈
  const ul = focus.querySelector("ul");
  const ol = focus.querySelector(".circle");
  for (let i = 0; i < ul.children.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      // 点击小圆圈，移动图片 当然移动的是 ul
      // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
      const index = this.getAttribute("index");
      num = index;
      circle = index;
      console.log(focusWidth);
      console.log(index);

      animate(ul, -index * focusWidth);
    });
  }
  // 把ol里面的第一个小li设置类名为 current
  ol.children[0].className = "current";
  // 克隆第一张图片(li)放到ul 最后面
  const first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  // 点击右侧按钮， 图片滚动一张
  let num = 0;
  let circle = 0;
  // flag1 节流阀
  let flag1 = true;
  arrow_r.addEventListener("click", function () {
    if (flag1) {
      flag1 = false; // 关闭节流阀
      // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag1 = true; // 打开节流阀
      });
      // 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
      circle++;
      // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
      if (circle == ol.children.length) {
        circle = 0;
      }
      // 调用函数
      circleChange();
    }
  });

  // 左侧按钮做法
  arrow_l.addEventListener("click", function () {
    if (flag1) {
      flag1 = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + "px";
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag1 = true;
      });
      // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
      circle--;
      circle = circle < 0 ? ol.children.length - 1 : circle;
      // 调用函数
      circleChange();
    }
  });

  function circleChange() {
    // 先清除其余小圆圈的current类名
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    // 留下当前的小圆圈的current类名
    ol.children[circle].className = "current";
  }
  // 自动播放轮播图
  let timer = setInterval(function () {
    //手动调用点击事件
    arrow_r.click();
  }, 2000);

  //2. 电梯导航
  const elevator = document.querySelector(".elevator");
  const lis = elevator.querySelectorAll("li");
  const goBack = elevator.querySelector(".goBack");
  const floor = document.querySelector(".floor");
  const ws = floor.children;
  const firstTop = floor.children[0].offsetTop;
  //   节流阀
  let flag2 = true;
  displayTool();
  classTool();
  // 显示隐藏电梯导航
  function displayTool() {
    if (window.pageYOffset >= firstTop) {
      elevator.style.display = "block";
    } else {
      elevator.style.display = "none";
    }
  }
  // 添加对应的类名
  function classTool() {
    for (let i = 0; i < ws.length; i++) {
      if (window.pageYOffset >= ws[i].offsetTop) {
        for (let j = 0; j < lis.length - 1; j++) {
          lis[j].className = "";
        }
        lis[i].className = "current";
      }
    }
  }
  document.addEventListener("scroll", function () {
    displayTool();
    if (flag2) {
      classTool();
    }
  });
  // 封装动画函数
  function animate2(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      let step = (target - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == target) {
        clearInterval(obj.timer);
        callback && callback();
      }
      window.scroll(0, window.pageYOffset + step);
    }, 15);
  }
  // 点击电梯导航滚动到相应区域
  for (let i = 0; i < lis.length - 1; i++) {
    lis[i].setAttribute("index", i);
    lis[i].addEventListener("click", function () {
      flag2 = false;
      const index = this.getAttribute("index");
      const current = ws[index].offsetTop;
      // 页面滚动效果
      animate2(window, current, function () {
        flag2 = true;
      });
      // 添加类名样式
      for (let i = 0; i < lis.length - 1; i++) {
        lis[i].className = " ";
      }
      this.className = "current";
    });
  }
  // 点击返回顶部
  goBack.addEventListener("click", function () {
    animate2(window, 0);
  });

  // 3.tab栏切换
  // 第一楼层
  const firstList = document.querySelectorAll(".tab_list")[0];
  const firstLis = firstList.querySelectorAll("li");
  const firstContent = document.querySelectorAll(".tab_content")[0];
  const firstItem = firstContent.querySelectorAll(".tab_list_item");
  // 第二楼层
  const secondList = document.querySelectorAll(".tab_list")[1];
  const secondtLis = secondList.querySelectorAll("li");
  const secondContent = document.querySelectorAll(".tab_content")[1];
  const secondItem = secondContent.querySelectorAll(".tab_list_item");
  // 第三楼层
  const thirdList = document.querySelectorAll(".tab_list")[2];
  const thirdLis = thirdList.querySelectorAll("li");
  const thirdContent = document.querySelectorAll(".tab_content")[2];
  const thirdItem = thirdContent.querySelectorAll(".tab_list_item");
  // 第四楼层
  const fourthList = document.querySelectorAll(".tab_list")[3];
  const fourthLis = fourthList.querySelectorAll("li");
  const fourthContent = document.querySelectorAll(".tab_content")[3];
  const fourthItem = fourthContent.querySelectorAll(".tab_list_item");
  tabToggle(firstLis, firstItem);
  tabToggle(secondtLis, secondItem);
  tabToggle(thirdLis, thirdItem);
  tabToggle(fourthLis, fourthItem);

  // 封装tab栏切换函数
  function tabToggle(lis2, tabListItem) {
    for (let i = 0; i < lis2.length; i++) {
      lis2[i].setAttribute("index", i);
      lis2[i].addEventListener("click", function () {
        for (let j = 0; j < lis2.length; j++) {
          lis2[j].className = "";
        }
        this.className = "selected";
        const index = this.getAttribute("index");
        for (let i = 0; i < tabListItem.length; i++) {
          tabListItem[i].style.display = "none";
        }
        tabListItem[index].style.display = "block";
      });
    }
  }
});