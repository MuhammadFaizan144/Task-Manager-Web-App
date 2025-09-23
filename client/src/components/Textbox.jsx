import React from 'react'
import clsx from 'clsx'
// clsx → A utility to conditionally combine class names (instead of messy string concatenation).
const Textbox = React.forwardRef(({ type, placeholder, label, className, register, error, name }, ref) => {
  // This is a functional component using React.forwardRef.
  // forwardRef allows you to pass a ref from the parent down to the <input> directly (useful for focusing programmatically).
  // Props received:
  // type → input type (email, password, etc.).
  // placeholder → hint text inside the input.
  // label → text label shown above input.
  // className → extra CSS classes passed in.
  // register → from react-hook-form, connects input to form state + validation.
  // error → validation error message (if any).
  // name → name attribute of the input.

  return (
    <div className='w-full flex flex-col gap-1'>
      {label && <label htmlFor={name} className='text-slate-800'>{label}</label>}
{/* {label && ...} → Conditional Rendering

This is a short-circuit condition in React JSX.

It means:
If label has a value (not empty, not null, not undefined), then render what’s after &&.
If label is missing/falsey, render nothing.
👉 Example:
label = "Email Address" → <label> renders.  
label = "" or undefined → nothing renders.   */}
{/* 2. <label ...> → Label Element
<label htmlFor={name} className='text-slate-800'>{label}</label>

htmlFor={name}

Links this <label> to the input whose id matches name.
Example: if name="email", this connects the label to <input id="email" ... />.
Clicking the label will focus that input.
className='text-slate-800'
Tailwind CSS class that makes the text dark gray (#1e293b).
{label}
Displays the text value passed in the label prop. */}

      <div>
        <input 
          type={type} 
          name={name} 
          placeholder={placeholder} 
          ref={ref} 
          {...register} 
          aria-invalid={error ? "true" : "false"} 
          className={clsx("bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 out text-base focus:ring-2 ring-blue-300", className)} 
        />
        {/* 2. <input ... /> Field

Each attribute has a role:

Basic Props

type={type} → decides the input type (text, email, password, etc.).
name={name} → identifies the field in the form state.
placeholder={placeholder} → hint text inside the input.

React / react-hook-form Integration

ref={ref} → attaches a ref (via forwardRef), so parent components or react-hook-form can directly interact with the input (like focusing it).

{...register} → spreads all properties from react-hook-form’s register():

Adds onChange, onBlur, and validation rules.
Connects this input to the form’s state.
Accessibility
aria-invalid={error ? "true" : "false"}
ARIA attribute for screen readers.
If there’s a validation error, it tells assistive tech: “this field is invalid.”

Example:
If error exists → aria-invalid="true".
If no error → aria-invalid="false".

Styling
className={clsx(
  "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 out text-base focus:ring-2 ring-blue-300",
  className
)}


Uses clsx to merge classes:

Default styling:

bg-transparent → no background.
px-3 py-2.5 → padding inside input.
border border-gray-300 → light gray border.
placeholder-gray-400 → placeholder text is gray.
text-gray-900 → input text is dark gray.
focus:ring-2 ring-blue-300 → blue outline glow when input is focused.
className → lets you add extra/override styles when using this component */}
      </div>
      {error && (<span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>)}
        {/* 1. {error && ...} → Conditional Rendering
        This means:
        If error has a value (truthy) → render what’s after &&.
        If error is empty/falsey (like "", null, undefined) → render nothing.

        👉 Example:
        error = "Email is required" → <span>Email is required</span> shows.
        error = "" → nothing shows. */}
    </div>
  )
})

export default Textbox