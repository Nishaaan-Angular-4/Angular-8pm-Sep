(function () {

    var customLogo = function () {
        /*Rule 1--> Directives always returns object
          Rule 2--> directive name usually will be in                              camelCase.
          Rule 3--> on the html camel-case 
                eg: directive name customLogo ==>custom-logo
        */

        return {

            template: '<a href="#" class="navbar-brand">{{brandName}}</a>',
            /* compile: function (element, attrs) {
                 //if you want to change the raw html.
                 console.log(element);
                 console.log(attrs);
                 return {
                     pre: function (scope, element, attrs) {
                         //scope initialzation
                     },
                     //this is the link function which we usually see in many examples available online.
                     post: function (scope, element, attrs) {
                         //we will bind the events.
                     }
                 }
             }*/
            link: function (scope, element attrs) {
                //we can bind the events
                // we can attach custom dom manipuation logic.
                /*scope:
                    the scope the of controller.
                  element: 
                     the element on which the directive is applied.
                 attrs:
                     on the element what are the attributes available 
                */
            }

        };
    };
    angular.module("common")
        .directive("customLogo", [customLogo]);

})();
