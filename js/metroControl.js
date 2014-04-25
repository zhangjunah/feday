var MetroControl = (function(baidu){

    function MetroControl(){
        
        function initContent(){
            baidu('.content').html(html);

            var sections = baidu('.content section');
            var width = 0;
            for(var i = 0; i < sections.length; i++){
                width += baidu(sections[i]).outerWidth(true);
            }
            baidu('.content').width(width + 130);

            //metro div control
            $(".live-tile, .flip-list").not(".exclude").liveTile();
            //data-play-onclick
            $("[data-play-onclick='true']").on("click", function(){
                $(this).liveTile('play', 0);
            });
        }

        var html = AceTemplate.format("beforeContent", fedayConfig);
        //console.log(html);

        this.initContent = initContent;
    }

    return MetroControl;

})(baidu);