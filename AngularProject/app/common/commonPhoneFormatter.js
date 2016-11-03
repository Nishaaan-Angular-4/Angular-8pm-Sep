(
    function () {
        function phoneFormatFn() {

            return function (input, criteria) {

                console.log(input)
                console.log(criteria);
                var phone = input.toString();
                if(phone && phone.length==10){
                    var first = phone.substring(0,3);
                    var second = phone.substring(3,6);
                    var last = phone.substring(6,10);
                    return first+"-"+second+"-"+last;
                }
                
                return input;
            };
        }
        angular.module("common")
            .filter("phoneFormat", [phoneFormatFn])
    }
)();
