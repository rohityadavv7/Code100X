import { atom } from "recoil";

export const loggedInAtom = atom({
    key: "loggedInAtom",
    default: localStorage.getItem("loggedInUser")? JSON.parse(localStorage.getItem("loggedInUser")):"Student",
});