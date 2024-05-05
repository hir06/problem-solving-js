import React, { useRef, useState } from "react";

export default function PhoneNumber() {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const formatPhn = (inputVal : string) => {
        let formattedPhn: string = ''
        inputVal = inputVal.replace(/\D/g, '').slice(0,10)
        console.log(inputVal.length)
      
        if(inputVal.length >6) formattedPhn = `(${inputVal.slice(0,3)})${inputVal.slice(3,6)}-${inputVal.slice(6)}`
        else if (inputVal.length >3) formattedPhn = `(${inputVal.slice(0,3)})${inputVal.slice(3)}`
        else formattedPhn = inputVal
        return formattedPhn
    }
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = event.currentTarget.value
        const start = event.target.selectionStart || inputVal.length
        const newVal = formatPhn(inputVal)
        setValue(newVal)
        const diff = newVal.length - inputVal.length
        const currentInput = inputRef.current
        if(currentInput) {
            const selectStart = start + diff
            setTimeout(() => {
                currentInput.setSelectionRange(selectStart, selectStart)
            },0)
         
        }
       
    }
    return (
        <input ref={inputRef} value={value} onChange={handleOnChange}/>
    )
}