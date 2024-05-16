"use client";
import { Provider } from "react-redux"; // Importing Provider
import store from "./../redux/store"; // Importing redux store

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
