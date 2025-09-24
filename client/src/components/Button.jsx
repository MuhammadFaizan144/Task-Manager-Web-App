import clsx from 'clsx'
import React from 'react'
const Button = ({ icon, className, label, type, onClick = () => { } }) => {
        //  This is a reusable button component that accepts props:

        // icon → optional icon (React element) to display inside the button.
        // className → custom styling classes (added on top of default ones).
        // label → text inside the button.
        // type → button type ("button", "submit", "reset"). Defaults to "button".
        // onClick → click handler. Default is an empty function so it won’t throw errors if not provided.
    return (
        <button type={type || "button"} className={clsx("px-3 py-2 outline-none", className)}>
            <span>{label}</span> 
            {icon && icon}
        </button>
            // type={type || "button"} →

            // If type is passed, it uses it.
            // Otherwise, defaults to "button" (to prevent unwanted form submissions).
            // className={clsx("px-3 py-2 outline-none", className)} →

            // Default classes:

            // px-3 py-2 → padding.
            // outline-none → removes default browser focus outline.
            // className → merges additional styles passed in.
            // children inside the button

            // <span>{label}</span> → shows the text label.
            // {icon && icon} → renders the icon only if it exists.

    )
}

export default Button