(function (window){
    var vivekGreeter={};
    vivekGreeter.name="vivek";
    var greeting="Hello";
    vivekGreeter.sayHello= function (){

        console.log(greeting + vivekGreeter.name);
    }
    window.vivekGreeter=vivekGreeter;
})(window);