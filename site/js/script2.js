(
    function (window){
        var visavdiyaGreeter={};
        visavdiyaGreeter.name= 'visavadiya';
        visavdiyaGreeter.sayHi=function (){
            console.log("HI "+ visavdiyaGreeter.name);
        }

        window.visavdiyaGreeter=visavdiyaGreeter;
        
    }
)(window);


