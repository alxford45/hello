import React from "react";
import DOM from "react-dom";
import { List } from "./List";

//clean up dom elements used for other examples
//ignore this :)
const input = document.getElementById("input")!;
const addButton = document.getElementById("addButton")!;
const list = document.getElementById("list")!;
document.body.removeChild(input);
document.body.removeChild(addButton);
document.body.removeChild(list);

// entry point for React App
// render(ParentComponent, HTMLElement Root)
DOM.render(<List />, document.getElementById("root"));
