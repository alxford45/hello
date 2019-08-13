import List from "./list";

const input = document.getElementById("input");
const listRoot = document.getElementById("list");
const addButton = document.getElementById("addButton");

const data = new List();
/**
 * @name createListItem
 *
 * @description 1) Takes a value and creates a list item in a scoped variable.
 *              2) returns a function that takes a key.
 *              3) takes a key then assigns the key to the local list item.
 *              4) returns a list item HTMLElement.
 *
 *
 *
 * @param {string} val
 * @returns {function} @param {string | number} key
 *                     @returns {HTMLElement}
 *
 */
const createListItem = val => {
  const item = document.createElement("li");
  item.innerText = val;
  return key => {
    item.accessKey = key;
    return item;
  };
};
/**
 * @name createRemoveButton
 * @description 1) takes a key and creates a button in a scoped variable.
 *              2) assigns key and text property to button.
 *              3) assigns Event Listener to button.
 *              4) Event Listener callback removes the list item by calling remove
 *                 with the key as its index.
 *
 * @param {string | number} key
 * @returns {HTMLElement}
 *
 */
const createRemoveButton = key => {
  const removeButton = document.createElement("button");
  removeButton.innerText = "x";
  removeButton.addEventListener("click", () => {
    data.remove(key);
    render();
  });
  return removeButton;
};
/**
 * @name render
 * @param {}
 * @returns {void}
 *
 * @description
 *  1) creates new unordered list element (<ul></ul>)
 *  2) iterates over data array and wraps the value and a "remove button"
 *     in a new list item tag (<li></li>) using @name createListItem and
 *     @name createRemoveButton
 *  3) ternerary operator:
 *
 *      {boolean expression} ? (execute on true) : (execute on false)
 *
 *      list.firstChild :=  !null -> replace the first child with list
 *                           null -> append list as first child
 *
 */
const render = () => {
  const state = data.get();
  const list = document.createElement("ul");

  state.forEach((val, idx) => {
    const listItem = createListItem(val)(idx);
    const removeButton = createRemoveButton(idx);
    listItem.insertAdjacentElement("beforeend", removeButton);
    list.appendChild(listItem);
  });

  listRoot.firstChild
    ? listRoot.firstChild.replaceWith(list)
    : listRoot.appendChild(list);
};

addButton.addEventListener("click", () => {
  data.append(input.value);
  render();
});
