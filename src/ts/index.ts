import { List, append, remove } from "./list";

const input = document.getElementById("input")! as HTMLInputElement;
const listRoot = document.getElementById("list")!;
const addButton = document.getElementById("addButton")!;

let STATE = List<string>();

const createListItem = (val: string) => {
  const item = document.createElement("li");
  item.innerText = val;
  return (key: number) => {
    item.accessKey = key.toString();
    return item;
  };
};
const createRemoveButton = (key: number) => {
  const removeButton = document.createElement("button");
  removeButton.innerText = "x";
  removeButton.addEventListener("click", () => {
    STATE = remove(STATE)(key);
    render();
  });
  return removeButton;
};
const render = () => {
  const list = document.createElement("ul");

  STATE.forEach((val, idx) => {
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
  STATE = append(STATE)(input.value);
  render();
});
