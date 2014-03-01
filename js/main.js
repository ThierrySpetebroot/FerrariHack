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
    slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']
  });
});

