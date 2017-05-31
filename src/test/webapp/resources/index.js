var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$window','$compile',function($scope,$window,$compile) {
    $scope.cond = {};
    $scope.fields = ["timestamp","id","level","application","message"];//TO-DO:次数组的值通过调用es接口获取
    $scope.opers = ["等于","不等于","大于","小于"];
	$scope.conds = [{name:"name",value:"John"},{name:"name",value:"Allen"}];
 //    var cond = "<select> <option value ='volvo'>Volvo</option></select>"
 //    var template = angular.element(cond);
 //    var mobileDialogElement = $compile(template)($scope);
	// angular.element("#div1").append(mobileDialogElement);
    //conds.push(template);

    $scope.addCond=function(){
    var obj={};
    if(!$scope.conds){$scope.conds=[]};
    $scope.conds.push(obj);
	}

	$scope.delCond=function(idx){
    	$scope.conds.splice(idx,1);
	}

	// $scope.resetCond=function(){

	// }

	$scope.delAllCond=function(){
		$scope.conds = null;
	}

}]);