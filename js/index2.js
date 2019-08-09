window.addEventListener('load',loaded);
console.log(1);
function loaded () {
    var fatherNode = document.getElementById('section');

    var date = [
        {
            title: '只能音响大金刚+小度畅听VIP会员年卡 ',
            src: './image/1559013054146616.jpg',
            desc: '小度智能音箱的好时机啊打哈萨克的哈吉打砂机大健康的手机爱卡大河健康砂进口',
            color: '黑色',
            campaignPirce: 199,
            originPrice: 9.9,
            num: 1,
            checked: true
        },
        {
            title: '只能音响大金刚+小度畅听VIP会员年卡 ',
            src: './image/1559115062993981.jpg',
            desc: '小度智能音箱的好时机啊打哈萨克的哈吉打砂机大健康的手机爱卡大河健康砂进口',

            color: '黑色',
            campaignPirce: 19.9,
            originPrice: 9.9,
            num: 1,
            checked: false
        },
        {
            title: '只能音响大金刚+小度畅听VIP会员年卡 ',
            src: './image/1559013054146616.jpg',
            desc: '小度智能音箱的好时机啊打哈萨克的哈吉打砂机大健康的手机爱卡大河健康砂进口',

            color: '黑色',
            campaignPirce: 99,
            originPrice: 9.9,
            num: 1,
            checked: true
        },
        {
            title: '只能音响大金刚+小度畅听VIP会员年卡 ',
            src: './image/1559115062993981.jpg',
            desc: '小度智能音箱的好时机啊打哈萨克的哈吉打砂机大健康的手机爱卡大河健康砂进口',

            color: '黑色',
            campaignPirce: 1999,
            originPrice: 9.9,
            num: 1,
            checked: false
        }
    ]

    function renderView(date,parentnode) {
        var html = '';
        date.forEach(function (item,index) {
            html+= `
            <div class="item-container">
                    <h1 class="item-title"><b>买减</b> <p>${item.title}</p><span>换商品></span></h1>
                    <div class="item-config">
                        <div class="check-btn  ${item.checked ? 'check' : ''}">
                            <span class="iconfont icon-dui "></span>
                        </div>
                        <div class="item-pic">
                            <img src="${item.src}" alt="">
                        </div>
                        <div class="config-info">
                            <h3>${item.desc}</h3>
                            <ul class="config-list">
                                <li>${item.color}</li>
                            </ul>
                            <div class="price-num">
                                <span>￥ <b>${item.campaignPirce}</b></span>
                                <div>
                                    <span class="count-down">-</span>
                                    <input type="text" value="${item.num}">
                                    <span class="add">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        })
        parentnode.innerHTML = html;
    }
    renderView(date,fatherNode);


    function addevent () {
        var allAdd = document.getElementsByClassName('add');
        var CounDown = document.getElementsByClassName('count-down');
    }
    Array.from(allAdd).forEach(function (item,idx) {
        item.onclick = function () {
            addOrCount({
                val :this.previousElementSibling.value,
                addFlag :true,
                ele: this.previousElementSibling,
                idx : idx
            });
        }
    })

    Array.from(allCountDown).forEach(function (item, idx) {
        item.onclick = function () {
            // var val = this.nextElementSibling.value;
            // addOrCount(this.nextElementSibling.value, false, this.nextElementSibling, idx);
            // 这个传进去的对象就是obj
            addOrCount({
                val: this.nextElementSibling.value, 
                addFlag: false, 
                ele: this.nextElementSibling, 
                idx: idx
            });
        }
    });

    for(var i = 0; i < che)
}
