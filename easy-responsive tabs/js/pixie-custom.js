$(document).ready(function() {
    
   if ($(".common-tabs-box").length > 0) {
        $('.common-tabs-box').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
        });
    }
   
})

