// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('spinIcon', function($timeout) {
  return {
    restrict: 'EA',



    link: function(scope, element, attributes){
      element.on('click',function(){
        element.toggleClass("rotateAni");
        $timeout(function(){
          element.toggleClass("rotateAni");
        }, 1500)
      })
    }
  }

});
