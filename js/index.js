

window.onload = function () {
    var bScroll = new BScroll('.content-left', {
        scrollY: true, //默认
        click: true
    })
    // 左边纵轴滚动

    var bcroll = new BScroll('.content-right', {
        scrollX: true,  //默认
        click: true
    })
    // 右上横轴滚动

    var broll = new BScroll('.gddah', {
        scrollX: true,  //默认
        click: true
        // 默认不让点击，需设置click:true;
    })
    // 右下横轴滚动        







    var lMenuCon = document.getElementById('l-menus-con');
    // 左边菜单容器
    var topMenw = document.getElementById('top-menu');
    console.log(topMenw)
    // 顶部菜单容器
    var productContent = document.getElementById('product-content');
    // 内容区域容器

    var currentIdx = 0;
    // 定义当前下标


    // 第一步，渲染左边菜单
    // 初始化左边菜单
    function initMenu(data, site, callBack) {
        var lis = '';
        for (var i = 0; i < data.length; i++) {
            lis += `<li class="${i === 0 ? 'current' : ''}"data-index="${i}">${data[i].name}</li>`
            // 默认第一个选中  每项名字放中间 data-index="${i}给每一项设置自定义属性；添加下标
        }
        site.innerHTML = lis;//将data里的数据渲染在页面

        callBack && callBack();
        // 如果函数有，则执行;callBack参数代表函数；如果
        // 函数不存在；返回；存在；则执行
    }

    // callBack: 回调函数: 回头调用的函数
    initMenu(lMenuData, lMenuCon, function () {
        // 参数1：左边菜单数据；二：左边菜单容器

        bScroll.refresh();
        // 刷新better-scroll

        // 点击左菜单事件
        lMenuCon.onclick = function (e) {
            var target = e.target;
            if (target.nodeName === 'LI') {
                // console.log(target.dataset.index)
                // 拿到了每一个下标
                for (var j = 0; j < lMenuCon.children.length; j++) {
                    lMenuCon.children[j].classList.remove('current');
                    // 删除所有左边菜单容器子元素带有类名current
                }
                target.classList.add('current');
                // 然后给自己加上；
            }
        }
    });



    // 右侧顶部menw
    function changeTopMenw(data, site, callBack) {
        var lis = '';
        for (var i = 0; i < data.length; i++) {
            lis += `<li class="${i === 0 ? 'current' : ''}" data-index="${i}">${data[i].name}</li>`
        }
        //${i === 0 ? 'current' : '' }默认第一个用 " data-index="${i}"自定义属性；添加下标  ${data[i].name}：内容，名字
        site.innerHTML = lis;

        callBack && callBack();
    }

    changeTopMenw(rConData[currentIdx].menuInfo, topMenw, function () {
        // 参数：1：顶部菜单数据；2：顶部菜单容器；
        bcroll.refresh();
        // 刷新better-scroll

        topMenw.onclick = function (e) {
            var target = e.target;
            if (target.nodeName === 'LI') {
                console.log(target.dataset.index);

                for (var j = 0; j < topMenw.children.length; j++) {
                    topMenw.children[j].classList.remove('current');
                    // 删除所有左边菜单容器子元素带有类名current
                }
                target.classList.add('current');
                // 然后给自己加上；
            }
        }
    });

    // 渲染内容区域
    // 右边
    function chanContent(data, site, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<div class="class-item"><h4 class="item-title">${data[i].title}</h4><div class="product-list">`;
            for (var j = 0; j < data[i].list.length; j++) {
                var temp = data[i].list[j];
                html += `
                <div class="tuwen">
                    <dl>
                        <dt>
                            <img src="./image/pic.png" alt="">
                        </dt>
                        <dd>
                            <h2>${temp.name}</h2>
                            <p>${temp.subtitle}</p>
                            <dl class="en">
                                <div class="price">
                                    <dd class="one">${temp.vip.price}</dd>
                                    <dd class="twe">${temp.noVip.price}</dd>
                                </div>
                                <dt>
                                    <img src="./image/pic1.png" alt="">
                                </dt>
                                <div class="dakuang">
                                    <span class="conoud">-</span>
                                    <span class="num">1</span>
                                    <span class="add">+</span>
                                </div>
                            </dl>
                        </dd>
                    </dl>
                </div>
                `
            }
            html += '</div></div>'
        }
        console.log(html);
        site.innerHTML = html;
        callBack && callBack();


    }

    chanContent(rConData[currentIdx].cellList, productContent, function () {
        addEvent()
    });

    function addEvent() {
        var gwc = document.querySelectorAll('.en dt');
        // 获取购物车

        var kuang = document.getElementsByClassName('dakuang');
        // console.log(gwc);
        var add = document.getElementsByClassName('add');
        var conoud = document.getElementsByClassName('conoud');
        var num = document.getElementsByClassName('num');
        console.log(num);

        for (var i = 0; i < gwc.length; i++) {
            (function (idx) {
                // 点击购物车事件
                gwc[idx].onclick = function () {
                    this.style.display = 'none';
                    kuang[idx].style.display = 'block';
                    kuang[idx].style.display = 'flex';
                }
                // 加号事件
                add[idx].onclick = function () {
                    var val = num[idx].innerText;
                    // 获取到中间的数量
                    val++;
                    num[idx].innerText = val;
                }
                // 减号事件
                conoud[idx].onclick = function () {
                    var val = num[idx].innerText;
                    // val = val <= 1 ?  1  : val - 1;
                    if (val <= 1) {
                        kuang[idx].style.display = 'none';
                        gwc[idx].style.display = 'block';
                    } else {
                        val--;
                    }
                    num[idx].innerText = val;
                }

               
            })(i)
        }

         // 点击右上滚动条对应标题
         var uls = document.querySelector('.content-right ul');
         // 右上滚动条的父元素
         var classItem = document.getElementsByClassName('class-item');
         console.log(classItem)
         // 标题
         
        uls.onclick=function(e){
            var tar=e.target;
            console.log(tar);
            var tarIndex=tar.dataset.index;
            broll.scrollToElement(classItem[tarIndex],1000);
        }
    }
}



