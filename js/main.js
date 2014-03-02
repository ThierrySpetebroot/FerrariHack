requirejs.config({
  baseUrl: "js/app",
  paths: {
    lib: "../lib",
    data: "../data"
  },
  shim: {
    'lib/jquery': {
      exports: '$'
    },
    'lib/jquery-ui': ['lib/jquery'],
    'lib/jquery.fullPage': ['lib/jquery-ui']
  }
});

require(['slideController', 'lib/jquery.fullPage'], function(slideController) {
  $.fn.fullpage({
    onLeave: slideController.onSectionLeave,
    onSlideLeave: slideController.onSlideLeave,
    slidesColor: ['#f2f2f2', '#C3282F', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']
  });

  $('.arrow-down').css({position: "relative"});

  arrowLoopDown = function() {
    $('.arrow-down')
      .animate({ marginBottom: "10" }, 1000, 'swing')
      .animate({ marginBottom: "30" }, 1000, 'linear', function() { arrowLoopDown(); });
  };
  arrowLoopDown();
});

