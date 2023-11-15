import { ErrorMessage, useField } from 'formik'
import React, { isValidElement } from 'react'

export const Textfields = ({label,...props}) => {

    const [field,meta]=useField(props);
  return (
    <div className="input flex flex-col gap-2">
      <label htmlFor={field.name}>{label}</label>

      <input className={`form-control shadow-sm ${meta.touched && meta.error && 'is-invalid'}`}
    {...field}{...props} 
    autoComplete='off'
    />
    <ErrorMessage component='div' name={field.name} className='text-red-500' />
    </div>
  )
}

