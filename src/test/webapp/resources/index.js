var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope','$window','$compile',function($scope,$window,$compile) {
	const MAXCOND=10;
    $scope.cond = {};
    $scope.fields = ["timestamp","id","level","application","message"];//TO-DO:此数组的值通过调用es接口获取
    $scope.opers = [{id:0,name:"等于",oper:"==="},
					{id:1,name:"不等于",oper:"!=="},
					{id:2,name:"包含",oper:""},
					{id:3,name:"不包含",oper:""},
					{id:4,name:"大于",oper:">"},
					{id:5,name:"小于",oper:"<"},
					{id:6,name:"大于等于",oper:">="},
					{id:7,name:"小于等于",oper:"<="},];
	$scope.conds = [{fieldName:"level",selectedOper:0,fieldValue:"ERROR"}];


    $scope.addCond=function(){
    
    if(!$scope.conds){$scope.conds=[]};
	if($scope.conds.length>=MAXCOND){
		alert("最多只能输入"+MAXCOND+"个条件");
		}else{
			var obj={};
			$scope.conds.push(obj);
			}
    
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