import List from "./list";

//references to corresponding html elements
var input = document.getElementById("input");
var listRoot = document.getElementById("list");
var addButton = document.getElementById("addButton");

//initialize List as empty array
var data = new List();
/**
 * @param {}
 * @returns {void}
 *
 * @description
 *  1) creates new unordered list element (<ul></ul>)
 *  2) iterates over data array and wraps the value and a "remove button"
 *     in a new list item tag (<li></li>). Each remove button is passed
 *     an index to remove itself in the click listener:
 *
 *     for each value in data => {
 *      <li>
 *        {value} <button onClick={remove}>x</button>
 *      <li>
 *
 *       remove => data.remove(index)
 *      }
 *
 *  3) if listRoot is empty?
 *
 *     <div id="listRoot" />            <div id="listRoot">
 *                                        <ul>
 *                             --->        ...list items
 *                                        </ul>
 *                                      </div>
 *
 *    if listRoot is Not empty?
 *     <div id="listRoot">           <div id="listRoot">
 *       <ul>                          <ul>
 *         ...old items       --->     ...new items
 *       </ul>                          </ul>
 *     </div>                         </div>
 *
 */
function render() {
  var state = data.get();
  var list = document.createElement("ul");

  for (var i = 0; i < state.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText = state[i];
    listItem.accessKey = i;
    var removeButton = document.createElement("button");
    removeButton.accessKey = i;
    var remove = function() {
      data.remove(this.accessKey);
      render();
    };
    removeButton.innerText = "x";
    removeButton.addEventListener("click", remove);
    listItem.insertAdjacentElement("beforeEnd", removeButton);
    list.appendChild(listItem);
  }
  if (!listRoot.firstChild) {
    // If root is empty (has no first child)
    // then append list to root.
    listRoot.appendChild(list);
  } else {
    // If root is not empty (has a first child)
    // then replace first child with list.

    listRoot.firstChild.replaceWith(list);
  }
}

//Event listener executes on "click" event
//Call back function appends current <input> state to data array
//render is called to render the updated list
addButton.addEventListener("click", function() {
  data.append(input.value);
  render();
});
