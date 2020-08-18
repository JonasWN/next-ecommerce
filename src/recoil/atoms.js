import { atom, selector } from "recoil"

const state = atom({
  key: "state",
  default: "",
})

const selectorState = selector({
  key: "selectorState",
  get: ({ get }) => {
    const text = get(state)
    return text.length
  },
})
