var Slide = (function(baidu, CSS3Animate){

    function Slide(container, main, pages, duration){
        duration = parseInt(duration);
        container = baidu(container);
        main = baidu(main);
        pages = baidu(pages);

        function initPages(){
            var html = [];
            var length = baidu('.content .metro').length;
            for(var i = 0; i < length; i++){
                html.push('<i target="' + i + '"></i>');
            }
            if(html.length > 1) pages.html(html.join(''));
            baidu('.pages i').on('click', function(e){
                var index = parseInt(baidu(this).attr('target'));
                var position = baidu(baidu('.content .metro')[index]).position().left;
                baidu('.before').scrollLeft(position);
            });
        }

        function ready(){
            var width = baidu(window).width();
            main.css3({translateX: width - 100}).show();
        }

        function show(){
            main.cssAnimate({translateX: 100}, duration);

            pages.css3({translateY: 60}).show()
            .cssAnimate({translateY: 0}, duration);

            baidu('.before .content').css3({opacity: 0}).show().cssAnimate({opacity: 1}, duration);

        }

        function hide(){
            var width = container.width();

            main.cssAnimate({translateX: width-100}, duration);

            baidu('.before .content').cssAnimate({opacity: 0}, duration, function(){
                baidu('.before .content').css3({opacity: 1}).hide();
            });

            pages.cssAnimate({translateY: 60}, duration, function(){
                pages.hide();
            });
        }

        //initPages();
        
        this.show = show;
        this.hide = hide;
        this.ready = ready;
    }

    return Slide;

})(baidu, CSS3Animate);