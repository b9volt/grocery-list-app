
//function finds the index of an item in the grocerylist and returns it
var findItemIndex = function(id, list){
  console.log("ITEM ID", id);
  for(var i = 0; i < list.length; i++){
    if(list[i]._id == id){
      var index = i;
    }
  }
  console.log("ITEM INDEX IN LOGIC:", index);
  return index;
};


module.exports = findItemIndex;
