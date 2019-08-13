/**
 * @class List
 * @constructor @param {Array | no param}
 *
 * keyword "class" is syntactic sugar to represent class objects in javascript.
 *
 * under the hood this will compile to function List() {} and Lists.prototype
 *
 * Almost the same as standard OOP Classes except in  special cases due
 * to it being a javascript function
 */
class List {
  constructor(data = []) {
    this.data = data;
  }
  append(item) {
    this.data.push(item);
  }
  size() {
    return this.data.length;
  }
  remove(index) {
    this.data.splice(index, 1);
  }
  get() {
    return this.data;
  }
}

export default List;
