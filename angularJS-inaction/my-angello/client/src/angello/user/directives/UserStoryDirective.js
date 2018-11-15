angular.module('Angello.User')
       .directive('userstory', function($rootScope, StoriesModel, $log){
           var linker = function(scope, element, attrs){
               element.mouseover(function(){
                   element.css({'opacity': 0.9});
               }).mouseout(function(){
                   element.css({'opacity': 1.0});
               });
           };

           var controller = function($scope){
               //Pending
           };

           return {
               restrict: 'A',
               controller: controller,
               controllerAs: 'userStory',
               link: linker
           }; // restrict: 'A' means the directive is to be strictly used as an attribte
       });