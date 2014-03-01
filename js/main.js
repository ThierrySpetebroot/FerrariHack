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

  arrowLoopDown = function() {
    $('.arrow-down').css({position: "relative"});
    $('.arrow-down').animate({ top: "+=15" },
      1000,
      'swing',
      function() { arrowLoopUp(); });
  };
  arrowLoopUp = function() {
    $('.arrow-down').css({position: "relative"});
    $('.arrow-down').animate({ top: "-=15" },
      1000,
      'linear',
      function() { arrowLoopDown(); });
  };
  arrowLoopDown();
});

