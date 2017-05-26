function addCond(){
	var cond = $(".cond")[0];
  var pNode = document.createElement("p");
  pNode.textContent = "新建一个P节点";
  console.log(pNode);
  console.log("typeof cond:"+typeof cond);  //object
  console.log("typeof pNode:"+typeof pNode); //object
	$(".conds").append(pNode);
	}