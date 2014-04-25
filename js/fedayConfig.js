var fedayConfig = {
    backImgs: ["images/mclaren_p1_2014-2560x1600.jpg", "images/b-2560-1600-1.jpg"],
    beforeEvents:[
        {
            title: "FEDay 第二季:  Speed & Performance",
            tag: "FEDay 2nd",
            slogan: "性能与访问速度优化专题",
            poster: "images/feday2/poster.png",
            info: "FEDay是由web前端研发部及BIT UMP共同主办的技术交流活动，活动内容涉及PC,无线,国内及国际化网络环境等方面。",
            background: '#313030',
            album: {
                images: ["images/download.png"],
                link: "http://fe.baidu.com/doc/fex/doc/feday/FEDay_season_2.zip"
            },

            recommend: {
                images: ["images/feday2/caseshow_6_2.png","images/feday2/caseshow_6.png"],
                link: ["http://fe.baidu.com/doc/fex/doc/feday/s2_webuploader.pptx","https://github.com/gmuteam/webuploader"]
            },

            topic: [
                {
                    name: "WISE访问优化探索之路",
                    author: "何涛",
                    image: "images/feday2/1.png",
                    info: "从WISE无线产品的角度了解如何针对性去进行优化，并针对竞品进行优化来保障百度无线产品的体验领先地位。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s2_wise_speed.pptx"
                },
                {
                    name: "Quickling解决方案介绍",
                    author: "相守鼎",
                    image: "images/feday2/2-1.png",
                    info: "通过介绍什么是quickling解决方案以及其作用和实现原理，让大家了解到精彩的技术细节。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s2_quickling.ppt"
                },
                {
                    name: "国内Hao123优化历程",
                    author: "张袁炜",
                    image: "images/feday2/2-2.png",
                    info: "在这个分享中，你能了解到伴随着内容和样式的组件增加和复杂化，国内Hao123在使用非静态HTML的方案中，如何保证用户的访问速度和使用体验不下降或者更好的详情。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s2_hao123_speed.zip"
                },
                {
                    name: "国际化Hao123优化历程",
                    author: "莫卓颖",
                    image: "images/feday2/2-3.png",
                    info: "百度国际化是百度的一个重要的业务方向，那么，国际化的网络状况是怎么样的？又该如何有效进行优化？通过这个分享，相信会对后续的国际化业务有所帮助。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s2_internal_speed.ppt"
                }
            ],
            caseShow:[
                {
                    name: "地图<br />街景地图",
                    image: "images/feday2/caseshow_1.png",
                    link: "http://t.cn/8kUWGEo"
                },
                {
                    name: "文库<br />图书编辑器",
                    image: "images/feday2/caseshow_2.png",
                    link: "http://lvchengbin.fe.baidu.com/bookeditor/#/bored"
                },
                {
                    name: "贴吧背景<br />裁剪工具",
                    image: "images/feday2/caseshow_3.png",
                    link: "http://fe.baidu.com/doc/fex/doc/feday/s2_background_cut.pptx"
                },
                {
                    name: "音乐<br />音效增强",
                    image: "images/feday2/caseshow_4.png",
                    link: "http://labs.music.baidu.com/demo/webaudio/"
                },
                {
                    name: "light资源<br />聚合平台",
                    image: "images/feday2/caseshow_5.png",
                    link: "http://fe.baidu.com/doc/fis/light/"
                }
            ]
            // ,
            // report: {
            //     title: "内网报道",
            //     link: "http://family.baidu.com/portal/newsDetail?articleId=679694718"
            // }
        },
        {
            title: "FEDay 第一季:   移动,你我同行",
            tag: "FEDay 1st",
            slogan: "移动,你我同行",
            info: "本次FEDay是首次举办，主题是 \"移动,你我同行\"，各产品都派出了骨干同学参加，负责技术分享的产品线也都纷纷拿出了最耀眼的技术成果。",
            poster: "images/feday1/1-1.png",
            album: {
                images: ["images/feday1/2-1.png", "images/feday1/2-2.png"],
                link: "http://xiangce.baidu.com/picture/album/list/4e1d1b35942456f2c661b568c47fbf389945ea99"
            },
            topic: [
                {
                    name: "应用调起",
                    author: "刘骥",
                    image: "images/feday1/4-2.png",
                    info: "Webapp调起Native app的实现原理，Android Service，结合Hybrid和应用调起，使webapp能够发送internet调起应用。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s1_app_call.pptx",
                    video: "http://learn.baidu.com/courseInfo.html?courseId=1324"
                },
                {
                    name: "贴吧移动产品技术",
                    author: "杨尊程",
                    image: "images/feday1/4-3.png",
                    info: "贴吧pad项目性能优化经验，页面加载、横竖屏切换的解决方式，以及兼容模板传统方式、又提高首屏性能的pagelet方案等。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s1_tieba_mobile.pptx",
                    video: "http://learn.baidu.com/courseInfo.html?courseId=1324"
                },
                {
                    name: "矢量地图技术",
                    author: "王加鹏",
                    image: "images/feday1/4-4.png",
                    info: "矢量地图技术在无线端的应用，项目最开始从借鉴google的经验，到后来百度同学自己总结出更贴合实际、性能更高的方案。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s1_vector_map_texh.pptx",
                    video: "http://learn.baidu.com/courseInfo.html?courseId=1324"
                },
                {
                    name: "移动UE设计",
                    author: "李海威",
                    image: "images/feday1/4-1.png",
                    info: "移动互联网时代视觉交互设计的变化，让人耳目一新的展现和交互形式，换位思考了产品的设计和交互。",
                    ppt: "http://fe.baidu.com/doc/fex/doc/feday/s1_ue.ppt",
                    video: "http://learn.baidu.com/courseInfo.html?courseId=1324"
                }
            ],
            caseShow:[
                {
                    name: "Pad云相册",
                    image: "images/feday1/6-a.png",
                    link: "http://fex.baidu.com/fex/demo/gallery/"
                },
                {
                    name: "矢量地图",
                    image: "images/feday1/6-b.png",
                    link: ""
                },
                {
                    name: "音乐微聊项目",
                    image: "images/feday1/6-c.png",
                    link: ""
                }
            ],
            report: {
                title: "内网报道",
                link: "http://family.baidu.com/portal/newsDetail?articleId=679694718"
            }
        }
    ]
};