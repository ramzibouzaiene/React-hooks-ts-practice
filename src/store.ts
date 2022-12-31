import { createContext } from "react";

const initialState = {
    firstName: "Ramzi",
    lastName: "Bouzaiene"
};

export type UserState = typeof initialState;

const context = createContext< typeof initialState>(initialState);

export default context;