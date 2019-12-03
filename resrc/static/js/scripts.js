// vue
var news_cards = new Vue({
    el: '#v-news-cards',
    data: {
        // TODO: data should be pulled from back-end when page loaded.
        // TODO: if there is more data, please use vue-infinite-scroll.
        items: [
            {
                title: 'Attention-based Multi-modal Fusion Network for Semantic Scene Completion',
                img: 'static/img/siqi.jpg',
                content: 'This paper presents an end-to-end 3D convolutional network named attention-based multi-modal fusion network (AMFNet) for the semantic scene completion (SSC) task of inferring the occupancy and semantic labels of a volumetric 3D scene from single-view RGB-D images.',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_AMFNet.html'
            },
            {
                title: 'Survival Prediction on Whole Slide Histo-pathological Images',
                img: 'static/img/donglin.png',
                content: 'Survival prediction for patients based on their gigapixel whole-slide histopathological images (WSIs) has been drawing increasing attention in recent years. One key challenge of this task is how to explore informative survivalspeciﬁc features reﬂecting the patient’s survival status effectively. In this paper, we introduce a hypergraph regression framework, called HyperGraph Regression Network (HGRNet), to tackle this challenge for survival prediction. HGRNet is capable of mining the pathological topological patterns affecting the survival status by a hierarchical representation built upon a hypergraph structure.',
                inscription: 'Posted on 6/3/2019 by Biao Gong',
                src: 'detail/research_hgrnet.html'
            }
            // ,
            // {
            //     title: '冯玉彤获得2018年商汤奖学金',
            //     img: 'static/img/news_3.jpg',
            //     content: '实验室冯玉彤同学荣获2018年“商汤奖学金”，该奖每年在全国范围内评选30人，入选者将获得税前20000元人民币、商汤游学冬令营等奖励。',
            //     inscription: 'Posted on 2/12/2018 by 陈瑜峰',
            //     src: '#'
            // },
            // {
            //     title: '实验室多篇论文被AAAI 2019接收',
            //     img: 'static/img/aaai_19.png',
            //     content: '在即将到来的第三十三届AAAI人工智能会议（AAAI-19）上，实验室五篇论文被接收。',
            //     inscription: 'Posted on 1/11/2018 by 陈自强',
            //     src: '#'
            // },
            // {
            //     title: '实验室张子昭等同学获得PCM 2018最佳学生论文奖',
            //     img: 'static/img/pcm_2018.jpeg',
            //     content: '9月21号-22号在中国合肥举行了第19届泛太平洋多媒体会议（PCM 2018）。在会议中，我们实验室获得最佳学生论文奖。恭喜子昭、浩杰和俊杰。',
            //     inscription: 'Posted on 21/9/2018 by 陈自强',
            //     src: '#'
            // },
            // {
            //     title: '实验室在第二届世界智能驾驶挑战赛中取得佳绩',
            //     img: 'static/img/wic_2018.png',
            //     content: '世界智能驾驶挑战赛(World Intelligent Driving Challenge, WIC) 于2018年5月14日至17日在天津举办。',
            //     inscription: 'Posted on 13/5/2018 by 陈自强',
            //     src: '#'
            // }
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
                title: 'Attention-based Multi-modal Fusion Network for Semantic Scene Completion',
                img: 'static/img/lunbo_siqi.png',
                inscription: 'Posted on 19/5/2019 by Biao Gong',
                src: 'detail/research_AMFNet.html'
            },
            {
                title: 'Survival Prediction on Whole Slide Histo-pathological Images',
                img: 'static/img/lunbo_donglin.jpg',
                inscription: 'Posted on 19/5/2019 by Biao Gong',
                src: 'detail/research_hgrnet.html'
            },
            //,
            // {
            //     title: '2016 实验室聚餐合影',
            //     img: 'static/img/group-photo_2019.jpg',
            //     inscription: 'Posted on 19/5/2019 by 陈瑜峰',
            //     src: '#'
            // },
        ]
    }
});
