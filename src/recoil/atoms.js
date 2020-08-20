import { atom, selector } from "recoil"

export const themeState = atom({
  key: "themeState",
  default: false,
})

export const productList = atom({
  key: "productList",
  default: [{}],
})

export const selectorState = selector({
  key: "selectorState",
  get: ({ get }) => {
    const text = get(state)
    return text.length
  },
})
