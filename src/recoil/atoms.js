import { atom } from "recoil"

export const themeState = atom({
  key: "themeState",
  default: false,
})

export const productList = atom({
  key: "productList",
  default: [{}],
})
