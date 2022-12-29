import { createContext } from "react";
export var Context = createContext({
    id: "",
    title: "",
    keywords: [""],
    placeholder: "",
    tip: "",
    onAdd: function () { },
    onDelete: function () { },
    disabled: false,
    background: "",
    border: "",
});
