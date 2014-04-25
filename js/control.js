baidu(function control(){
    var disabled = false;
    var Screen = "home";
    var container = baidu("#container");
    var bg = baidu(".bg");
    var duration = 700;
    var switchIcon = baidu('#switchIcon');
    var home = new Home(container, '.home', switchIcon, duration);
    var slide = new Slide(container, '.before', '.pages', duration);
    var metroControl;
    var bgImgs = fedayConfig.backImgs || ["images/mclaren_p1_2014-2560x1600.jpg", "images/b-2560-1600-1.jpg"];
    
    var last_wheel_event = 0;
    baidu(window).on('mousewheel', function(e){
        e.preventDefault();
        if(disabled) return;
        /*if ( e.timeStamp - last_wheel_event < 200 ) {
            last_wheel_event = e.timeStamp;
            return;
        }
        last_wheel_event = e.timeStamp;*/
        var scrollLeft = baidu('.before').scrollLeft();
        if(e.wheelDelta < 0) {
            if(Screen == "home") changeScreen();
            else{
                baidu('.before').scrollLeft(scrollLeft - e.wheelDelta);
            }
        }
        else {
            if(Screen == "before"){
                //if(scrollLeft == 0) changeScreen();
                //else{
                    baidu('.before').scrollLeft(scrollLeft - e.wheelDelta);
                //}
            }
        }
    });
    baidu(switchIcon).on('click', function(){
        if(disabled) return;
        changeScreen();
    });
    baidu(window).on( 'keydown', function(e) {
        if(disabled) return;
        var scrollLeft = baidu('.before').scrollLeft();
        if(e.keyIdentifier == "Right") {
            if(Screen == "home") changeScreen();
            else{
                baidu('.before').scrollLeft(scrollLeft + 80);
            }
        }
        if(e.keyIdentifier == "Left") {
            if(Screen == "before"){
                if(scrollLeft == 0) changeScreen();
                else{
                    baidu('.before').scrollLeft(scrollLeft - 80);
                }
            }
        }
    });
    baidu(window).on('resize', function(e){
        if(Screen == "home") slide.ready();
        coverBg();
    });

    function coverBg(){
        var width = baidu(window).width();
        var height = baidu(window).height();
        bg.css({width: width + 205, height: height + 5});
    }

    function changeScreen(){
        if(Screen == "home"){
            disabled = true;
            home.hide();
            slide.show();
            bg.cssAnimate({translateX: -200}, duration, function(){
                disabled = false; 
                Screen = "before";
            });
        }else{
            disabled = true;
            home.show();
            slide.hide();
            bg.cssAnimate({translateX: 0}, duration, function(){
                disabled = false; 
                Screen = "home";
            });
        }
    }

    //入场动画
    function firstShow(){
        var count = bgImgs.length;
        var src = bgImgs[parseInt(Math.random() * count) % count];
        if(src) {
            var img = new Image();
            img.addEventListener('load', function() {
                bg.css("background-image", "url(" + src + ")");
                baidu('.loading').html('').hide();
                coverBg();
                bg.css3({opacity:0}).show()
                .cssAnimate({opacity:1}, 500, function(){
                    baidu('#switchIcon').show();
                    slide.ready();
                    var width = baidu(window).width();
                    var height = baidu(window).height();
                    baidu('.title').css3({translateX: -600});
                    //baidu('.en').css3({translateY: -height/2});
                    baidu('.en').css3({scale: 0});

                    baidu('.cn').css3({translateX: width/2-300});
                    baidu('.info').css3({translateY: height/2});
                    baidu('.home').show();
                    baidu('.title').cssAnimate({translateX: 0}, 800);

                    baidu('.en').cssAnimate({scale: 1.5}, 800, function(){
                        this.cssAnimate({scale: 1}, 400);
                    });
                    /*
                    baidu('.en').cssAnimate({translateY: 0}, 500, function(){
                        this.cssAnimate({scale: 1.5}, 400, function(){
                            this.cssAnimate({scale: 1}, 400);
                        });
                    });*/
                    baidu('.cn').cssAnimate({translateX: 0}, 700);
                    baidu('.info').cssAnimate({translateY: 0}, 600);

                    metroControl.initContent();
                });
            
            });
            metroControl = new MetroControl();
            setTimeout(function(){img.src = src;}, 1000);
            
        }
    }
    firstShow();
});
