// vue
var news_cards = new Vue({
    el: '#v-news-cards',
    data: {
        // TODO: data should be pulled from back-end when page loaded.
        // TODO: if there is more data, please use vue-infinite-scroll.
        threed_vision_cards: [
            {
                title: '场景补全及语义分割',
                img: 'static/img/siqi.jpg',
                content: '我们提出了一种基于注意力机制的三维卷积网络(AMFNet)用于语义场景补全(SSC)任务，即使用单视角RGB-D图像实现场景完成与语义分割。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_AMFNet.html'
            },
            {
                title: '基于网格的立体对象表示',
                img: 'static/img/yutong.png',
                content: '网格（Mesh）是三维物体的一类重要的数据类型，在计算机视觉和计算机图形学领域得到了广泛的关注和研究。在三维物体表示任务上，近年来已经出现了大量基于体素、网格和多视图的研究工作，但由于网格数据的复杂性和不规则性，基于网格数据的研究相对稀缺。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_meshnet.html'
            },
            {
                title: '用于立体对象的无相机无约束多视图卷积神经网络',
                img: 'static/img/zhengyue.png',
                content: '基于多视图的立体对象表征被广泛用在分类和检索等识别任务上。我们关注立体对象的检索任务，目前的方法在训练时通常会使用一个对象相对完整的视图信息进行训练，但是我们发现这样完整的训练数据并不能让网络在仅有部分视图的环境下获得好的泛化能力，甚至不如使用不完整的视图训练集得到的效果好，这显然不是我们想要的结果，它妨碍我们实现自由相机位置设定下的检索系统，使得我们不能仅通过扩充完整的训练集达到目的。我们猜想，导致这个问题的原因时缺失视图的特征分布与完整视图时的特征分布存在差异(图1)导致训练时过拟合。为了解决这个问题我们提出了DropMax特征增强模块，它在很大程度上解决了这个问题，让我们有可能高效实现Camera-Constraint-Free的检索系统。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_deepccfv.html'    
            },
            {
                title: '基于分组视图卷积神经网络的立体对象表示',
                img: 'detail/research_GVCNN/results.png',
                content: '我们提出了一种可辩别性的3D形状描述的用于分层相关建模的组视图卷积神经网络（GVCNN）框架。我们提出的GVCNN框架由分层的视图描述符-组特征-形状体系结构组成，即从视图级别，组级别和形状级别开始，它们使用分组策略进行组织。',
                inscription: 'Posted on 01/06/2020 by Yifan Feng',
                src: 'detail/research_GVCNN.html'
            },
            {
                title: '基于多环路视图的立体对象检索',
                img: 'detail/research_mlvcnn/loop-demo.png',
                content: '现有立体对象表示方法仍然缺乏全面的视图表示能力，传统的简单环路视图会对关键视图出现丢失的情况。针对这一问题，本项目提出了基于多环路多视图立体对象的表示框架及其神经网络模型，有效提高了立体对象检索任务中的精度性能。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_mlvcnn.html'
            },
            {
                title: '点云不变性表征',
                img: 'detail/research_pointnorm/rotation_variance.png',
                content: '由于采集设备的位置、姿态不同，真实采集到的点云数据在存在旋转、尺度多种变换，这种数据的变换为机器学习模型带来了不必要的困难，探索对空间变换不变的点云表征有重要意义。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_pointnorm.html'
            },
            {
                title: '针对三维无序数据的卷积表示方法',
                img: 'detail/research_urconv/moti1.png',
                content: '我们提出了一种无序关系卷积（UR-Conv），它对无序3D数据应用了类似卷积的运算，并且对输入数据的顺序不敏感。在我们的方法中，捕获了数据之间的局部依赖性，这增强了模型的表示能力和鲁棒性。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_urconv.html'
            },
            {
                title: '大场景视觉观测',
                img: 'detail/research_SceneRecognition/figure1.png',
                content: '大场景视觉观测是利用立体测量仪器及相关算法，以非接触式测量快速获取地球表面自然形态、地表人工设施精确三维信息的手段， 大场景的视觉观测在地质勘探、灾害救援、军事侦察、航天测绘等战略领域均具有重要的应用前景。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_SceneRecognition.html'
            },
            {
                title: '单帧视图三维重建',
                img: 'detail/research_vsgnet/assemble2.png',
                content: '针对传统单帧视图立体重建算法存在的缺陷，提出了VSGNet（视图-几何-结构联合的单视图重建算法），融合视图（View）、结构（Structure）、几何（Geometry）三方面信息进行立体重建。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_vsgnet.html'
            },     
            {
                title: '跨模态Hash索引',
                img: 'detail/research_hash/suoluetu.png',
                content: '跨模态Hash索引，是为了解决由于多模态信息的异构而导致的模态之间信息难以准确映射的问题，而衍生出的一类解决方法。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_hash.html'
            },
            {
                title: '动作识别',
                img: 'detail/research_activity/dongzuoshibie.png',
                content: '动作识别是计算机视觉在视频领域中的重要应用之一，我们在基于人体骨架的动作识别、帕金森患者行为量化、时序动作定位等任务上做了一些探索。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_activity.html'
            },
        ],

        complex_network_cards: [
            {
                title: '超图建模与分析',
                img: 'detail/research_complexnetwork/representation2.png',
                content: '针对数据的复杂关联建模难题，我们采用超图结构进行数据复杂关联建模，提出了超图动态学习方法和超图神经网络。与传统的超图学习方法不同，这些方法具备更好的数据适应性，从而可以获得更佳的数据建模及分析性能。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_complexnetwork.html'
            },
            {
                title: '超图标签传播网络',
                img: 'detail/research_hlpn/dataset.png',
                content: '近年来，随着互联网规模的爆炸式增长，社交媒体平台上每天都产生大量的用户推文数据，对这些数据进行情感分析和预测在网络舆情监测中有广泛的应用价值。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_hlpn.html'
            },





        ],

        brain_science_cards: [
            {
                title: '用于MCI诊断的基于全尺寸组织医学病理图像的生存预测',
                img: 'static/img/donglin.png',
                content: '近年来，基于数十亿像素的全尺寸组织医学病理图像（WSI）对患者进行生存预测已引起越来越多的关注。这项任务的主要挑战是探索如何能基于信息丰富的特征，来有效反映患者生存状况。',
                inscription: 'Posted on 03/12/2019 by Biao Gong',
                src: 'detail/research_hgrnet.html'
            },
            {
                title: '用于MCI分类的高阶静止状态功能连接网络',
                img: 'static/img/yifan.png',
                content: '通过静息态功能磁共振成像（RS-fMRI）技术估算的脑功能连通性（FC）网络已经成为准确诊断神经退行性疾病的一种有前途的方法。',
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
