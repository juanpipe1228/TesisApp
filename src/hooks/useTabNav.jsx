import {useState} from "react"
export const useTabNavigation = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (data,newValue) => {
        setValue(newValue)
    }
    return { value, onChange };
}
