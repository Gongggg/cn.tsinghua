// vue
var news_cards = new Vue({
    el: '#v-news-cards',
    data: {
        // TODO: data should be pulled from back-end when page loaded.
        // TODO: if there is more data, please use vue-infinite-scroll.
        items: [
            {
                title: '实验室在第三届世界智能驾驶挑战赛中再获佳绩',
                img: 'static/img/news_1.png',
                content: '实验室参加了虚拟场景组挑战赛，并既2018年获得该项挑战赛第一名之后，再度夺得本届比赛的第一名。',
                inscription: 'Posted on 19/5/2019 by 陈瑜峰',
                src: '#'
            },
            {
                title: '冯玉彤入选清华大学“未来学者”计划',
                img: 'static/img/news_2.jpg',
                content: '实验室冯玉彤同学负责的项目“基于动作识别技术的运动障碍疾病诊断”入选清华大学2019年“未来学者”计划第一批，首批全校仅4个项目入选。',
                inscription: 'Posted on 6/3/2019 by 陈瑜峰',
                src: '#'
            },
            {
                title: '冯玉彤获得2018年商汤奖学金',
                img: 'static/img/news_3.jpg',
                content: '实验室冯玉彤同学荣获2018年“商汤奖学金”，该奖每年在全国范围内评选30人，入选者将获得税前20000元人民币、商汤游学冬令营等奖励。',
                inscription: 'Posted on 2/12/2018 by 陈瑜峰',
                src: '#'
            },
            {
                title: '实验室多篇论文被AAAI 2019接收',
                img: 'static/img/aaai_19.png',
                content: '在即将到来的第三十三届AAAI人工智能会议（AAAI-19）上，实验室五篇论文被接收。',
                inscription: 'Posted on 1/11/2018 by 陈自强',
                src: '#'
            },
            {
                title: '实验室张子昭等同学获得PCM 2018最佳学生论文奖',
                img: 'static/img/pcm_2018.jpeg',
                content: '9月21号-22号在中国合肥举行了第19届泛太平洋多媒体会议（PCM 2018）。在会议中，我们实验室获得最佳学生论文奖。恭喜子昭、浩杰和俊杰。',
                inscription: 'Posted on 21/9/2018 by 陈自强',
                src: '#'
            },
            {
                title: '实验室在第二届世界智能驾驶挑战赛中取得佳绩',
                img: 'static/img/wic_2018.png',
                content: '世界智能驾驶挑战赛(World Intelligent Driving Challenge, WIC) 于2018年5月14日至17日在天津举办。',
                inscription: 'Posted on 13/5/2018 by 陈自强',
                src: '#'
            }
        ]
    }
});

// Masonry + ImagesLoaded
var $container = $('.grid');
$container.imagesLoaded(function () {
    $container.masonry({
        columnWidth: '.grid-item',
        itemSelector: '.grid-item'
    });
});

Vue.use(VueAgile)

var group_gallery = new Vue({
    el: '#v-group-gallery',
    components: {
        agile: VueAgile,
    },
    data: {
        // TODO: data should be pulled from back-end when page loaded.
        // TODO: if there is more data, please use vue-infinite-scroll.
        items: [
            {
                title: '2019 实验室聚餐合影',
                img: 'static/img/group-photo_2019.jpg',
                inscription: 'Posted on 19/5/2019 by 陈瑜峰',
                src: '#'
            },
            {
                title: '2018 实验室聚餐合影',
                img: 'static/img/group-photo_2019.jpg',
                inscription: 'Posted on 19/5/2019 by 陈瑜峰',
                src: '#'
            },
            {
                title: '2017 实验室聚餐合影',
                img: 'static/img/group-photo_2019.jpg',
                inscription: 'Posted on 19/5/2019 by 陈瑜峰',
                src: '#'
            },
            {
                title: '2016 实验室聚餐合影',
                img: 'static/img/group-photo_2019.jpg',
                inscription: 'Posted on 19/5/2019 by 陈瑜峰',
                src: '#'
            },
        ]
    }
});
