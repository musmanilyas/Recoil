import { atom } from "recoil";

const items = [
  { id: 1, task: "pay bills", done: false, hide: false },
  { id: 2, task: "buy groceries", done: false, hide: false },
  { id: 3, task: "learn Recoil", done: false, hide: false },
];

export const listState = atom({
  key: "listState",
  default: items,
});

export const allState = atom({
  key: "allState", // unique ID (with respect to other atoms/selectors)
  default: items, // default value (aka initial value)
});

export const filterState = atom({
  key: "filterState",
  default: false,
});

export const inputValue = atom({
  key: "inputValue",
  default: false,
});
