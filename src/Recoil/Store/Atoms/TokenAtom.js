import {atom} from "recoil"

export const tokenAtom = atom({
    key: "tokenAtom",
    default: {
        userId:"",
        account_Type:"Student"
    }
})