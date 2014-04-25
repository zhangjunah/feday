var Home = (function(baidu, CSS3Animate){
    function Home(container, home, switchIcon, duration){
        duration = parseInt(duration);
        container = baidu(container);
        home = baidu(home);
        switchIcon = baidu(switchIcon);

        function show(){
            var width = container.width();
            var height = container.height();
            home.css3({translateX:-width/2, translateY:-height}, duration)
            .show().cssAnimate({translateX:0, translateY:0}, duration);

            switchIcon.cssAnimate({rotate: 135, translateX: width-115}, duration, function(){
                switchIcon.removeAttr('style');
            });
        }

        function hide(){
            var width = container.width();
            var height = container.height();
            home.cssAnimate({translateX:-width/2, translateY:-height}, duration, function(){
                home.hide();
            });

            switchIcon.cssAnimate({rotate: -45, translateX: -width + 115}, duration, function(){
                switchIcon.css3({translateX: 0, rotate: -45}).css('left', "35px");
            });
        }

        this.show = show;
        this.hide = hide;
    }

    return Home;
})(baidu, CSS3Animate);