import { ComponentPropsWithRef } from "react";

export default function (props: ComponentPropsWithRef<'button'>) {
    return (
        <button
            {...props}
            style={{ boxShadow: '8px 8px 0px var(--tw-shadow-color)' }}
            className={[
                "bg-white border-2 border-purple-500 px-3 py-1 shadow-purple-500 font-bold font-mono hover:bg-purple-200",
                props.className
            ].join('')}
        >
            {props.children}
        </button>
    )
}