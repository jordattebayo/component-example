import { useState } from 'preact/hooks'

type Variant =  "light" | "dark";

export type ButtonProps = { variant: Variant }

function getClass(variant: Variant): string{
    switch(variant){
        case "dark":
            return "dk"
        case "light":
            return "lt"
        default:
            return "lt"
    }
}

export default function Button(props: ButtonProps){
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount((count) => count + 1)} className={getClass(props.variant)}>
          count is {count}
        </button>
    )
}