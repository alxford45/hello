function List(data = []) {
  //constructor
  this.data = data;
}
//function.prototype is the syntax for adding function "helper" methods
List.prototype.append = function(item) {
  this.data.push(item);
};
List.prototype.size = function() {
  return this.data.length;
};
List.prototype.remove = function(index) {
  console.log(index);
  console.log(this.data);
  this.data.splice(index, 1);
  console.log(this.data);
};
List.prototype.get = function() {
  return this.data;
};

export default List;
