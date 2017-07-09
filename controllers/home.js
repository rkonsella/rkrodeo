app.controller("FirstCtrl",function () {
    this.count = 0;
    this.increment = function (){
        this.count = this.count + 1;
    }
});