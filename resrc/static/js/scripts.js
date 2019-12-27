// vue
var news_cards = new Vue({
    el: '#v-news-cards',
    data: {
        // TODO: data should be pulled from back-end when page loaded.
        // TODO: if there is more data, please use vue-infinite-scroll.
        threed_vision_cards: [
            {
                title: 'Attention-based Multi-modal Fusion Network',
                img: 'static/img/siqi.jpg',
                content: 'This paper presents an end-to-end 3D convolutional network named attention-based multi-modal fusion network (AMFNet) for the semantic scene completion (SSC) task of inferring the occupancy and semantic labels of a volumetric 3D scene from single-view RGB-D images.',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_AMFNet.html'
            },
            {
                title: 'MeshNet: Mesh Neural Network for 3D Shape Representation',
                img: 'static/img/yutong.png',
                content: 'This paper proposes a neural network using mesh for 3D shape representation and design blocks for capturing and aggregating features of polygon faces in 3D shapes.',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_meshnet.html'
            },
            {
                title: 'Towards Camera-Setting-Robust Multi-View Representation',
                img: 'static/img/zhengyue.png',
                content: 'This paper presents a method that remedies a overfitting problem caused by the pattern gap between a complete and missing view dataset, making it possible to train a network that is robust in camera-constraint free settings.',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_deepccfv.html'
            },
        ],

        complex_network_cards: [
        ],

        brain_science_cards: [
            {
                title: 'Survival Prediction on Whole Slide Histo-pathological Images',
                img: 'static/img/donglin.png',
                content: 'Survival prediction for patients based on their gigapixel whole-slide histopathological images (WSIs) has been drawing increasing attention in recent years. One key challenge of this task is how to explore informative survivalspeciﬁc features reﬂecting the patient’s survival status effectively. In this paper, we introduce a hypergraph regression framework, called HyperGraph Regression Network (HGRNet), to tackle this challenge for survival prediction. HGRNet is capable of mining the pathological topological patterns affecting the survival status by a hierarchical representation built upon a hypergraph structure.',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_hgrnet.html'
            },
            {
                title: 'High-Order Resting-State FC Network for MCI Classification',
                img: 'static/img/yifan.png',
                content: 'Brain functional connectivity (FC) network, estimated with resting-state functional magnetic resonance imaging (RS-fMRI) technique, has emerged as a promising approach for accurate diagnosis of neurodegenerative diseases.',
                inscription: 'Posted on 12/12/2019 by Chaoyang Xia',
                src: 'detail/research_HFCNet.html'
            },
        ]
    }
});

// get query pram, then find and click tab
var url = new URL(window.location.href);
var tab_href = url.searchParams.get('tab');
if (tab_href == null) {
    tab_href = 'all_research';
}
$(`.nav-link[href="#${tab_href}"]`).click();
console.log(`click tab id ${tab_href}`)

// Masonry + ImagesLoaded
// var $container = $('.grid');
// $container.imagesLoaded(function () {
//     $container.masonry({
//         columnWidth: '.grid-item',
//         itemSelector: '.grid-item'
//     });
// });

// Vue.use(VueAgile)

// var group_gallery = new Vue({
//     el: '#v-group-gallery',
//     components: {
//         agile: VueAgile,
//     },
//     data: {
//         // TODO: data should be pulled from back-end when page loaded.
//         // TODO: if there is more data, please use vue-infinite-scroll.
//         items: [
//             {
//                 title: 'MeshNet: Mesh Neural Network for 3D Shape Representation',
//                 img: 'static/img/lunbo_yutong2.png',
//                 inscription: 'Posted on 03/12/2019 by Biao Gong',
//                 src: 'detail/research_meshnet.html'
//             },
//             {
//                 title: 'Attention-based Multi-modal Fusion Network for Semantic Scene Completion',
//                 img: 'static/img/lunbo_siqi.png',
//                 inscription: 'Posted on 03/12/2019 by Biao Gong',
//                 src: 'detail/research_AMFNet.html'
//             },
//             {
//                 title: 'Survival Prediction on Whole Slide Histo-pathological Images',
//                 img: 'static/img/lunbo_donglin.jpg',
//                 inscription: 'Posted on 03/12/2019 by Biao Gong',
//                 src: 'detail/research_hgrnet.html'
//             },
//             {
//                 title: 'MeshNet: Mesh Neural Network for 3D Shape Representation',
//                 img: 'static/img/lunbo_yutong.png',
//                 inscription: 'Posted on 03/12/2019 by Biao Gong',
//                 src: 'detail/research_meshnet.html'
//             },
//             {
//                 title: 'Towards Camera-Setting-Robust Multi-View Representation',
//                 img: 'static/img/lunbo_zhengyue.png',
//                 inscription: 'Posted on 03/12/2019 by Biao Gong',
//                 src: 'detail/research_hgrnet.html'
//             },
//             //,
//             // {
//             //     title: '2016 实验室聚餐合影',
//             //     img: 'static/img/group-photo_2019.jpg',
//             //     inscription: 'Posted on 19/5/2019 by 陈瑜峰',
//             //     src: '#'
//             // },
//         ]
//     }
// });
