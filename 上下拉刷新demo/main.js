
// 创建滚动视图
var myScroll = new IScroll('.content', {


    //配置侦听滚动事件的方式
    probeType: 3//可取值：1,2,3


});



// 下拉刷新
var refreshText = document.querySelector('.refresh span');
var refreshImg = document.querySelector('.refresh strong');

myScroll.scrollTo(0, -40, 0);

myScroll.on('scrollEnd', function(){
    //获得滚动停止后的位置
    var y = this.y;
    if( y>-40 && y<0 ){
        // console.log('能看到部分，收起下拉刷新的dom');
        myScroll.scrollTo(0, -40, 300);
    }
    else if(y>=0){
        // console.log('能看到全部，执行下拉刷新');
        refreshText.innerText = '正在刷新...';
        refreshImg.innerText = '★';
        refreshImg.className = 'active';

        //请求新的数据
        setTimeout(function(){
            //请求成功，还是请求失败，关闭刷新
            refreshText.innerText = '下拉可以刷新...';
            refreshImg.innerText = '↓';
            refreshImg.className = '';

            myScroll.scrollTo(0, -40, 300);


        }, 2000);

    }
})


myScroll.on('scroll', function(){
    //获得正在滚动的位置
    var y = this.y;
    if( y>-40 && y<0 ){
        // console.log('能看到部分，显示下拉可以刷新');
        refreshText.innerText = '下拉可以刷新...';
        refreshImg.className = '';
    }
    else if(y>=0){
        // console.log('能看到全部，显示释放立即刷新');
        refreshText.innerText = '释放立即刷新...';
        refreshImg.className = 'up';
    }
})




// 上拉加载更多、

var loadmoreText = document.querySelector('.loadmore span');
var loadmoreImg = document.querySelector('.loadmore strong');

myScroll.on('scrollEnd', function(){
    var y = this.y;

    var y1 = this.maxScrollY;
    var y2 = this.maxScrollY+40;
    if( y > y1 && y < y2 ){
        //可以看见部分加载更多的dom，收起加载更多的dom
        myScroll.scrollTo(0, y2, 300);
    }
    else if(y <= y1){
        //可以看见全部加载更多的dom，执行加载更多
        loadmoreText.innerText = '正在加载中...';
        loadmoreImg.innerText = '★';
        loadmoreImg.className = 'active';

        //加载更多，在这应该发送ajax请求更多数据
        setTimeout(function(){
            

            //请求成功
            // var data = ['new item1', 'new item2', 'new item3', 'new item4'];
            // var htmlStr = '';
            // data.map(function(item){
            //     htmlStr += '<li class="item">'+item+'</li>';
            // })
            // document.querySelector('.list-content').innerHTML += htmlStr;
            // myScroll.refresh();

            // 请求失败
            alert('请求失败，请检查网络');
            myScroll.scrollTo(0, y2, 300);

            //关闭加载更多的动画
            loadmoreText.innerText = '上拉可以加载更多...';
            loadmoreImg.innerText = '↑';
            loadmoreImg.className = '';


        }, 3000);

    }

})

myScroll.on('scroll', function(){

    var y = this.y;

    var y1 = this.maxScrollY;
    var y2 = this.maxScrollY+40;
    if( y > y1 && y < y2 ){
        //可以看见部分加载更多的dom，提示可以加载更多
        loadmoreText.innerText = '上拉可以加载更多...';
        loadmoreImg.className = '';

    }
    else if(y <= y1){
        //可以看见全部加载更多的dom，提示释放立即加载
        loadmoreText.innerText = '释放立即加载更多...';
        loadmoreImg.className = 'down';
    
    
    }

})






