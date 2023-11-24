import './field.css'

export default function Field({
  label,
  type = 'text',
  name,
  placeholder,
  selectOption = [],
  min,
  max,
  defaultValue,
  value,
  checked = false,
  rows = 1,
  disabled,
  required,
  onChange,
  children,
}) {
  const attr = {
    name: name,
    onChange: onChange,
    defaultValue: defaultValue,
    value: value,
    disabled: disabled,
    required: required,
  }
  return (
    <label className="field">
      {label && (
        <p>
          {label}
          {required ? <span>&nbsp;*</span> : ''}
        </p>
      )}
      {type === 'select' ? (
        <select {...attr}>
          {Object.keys(selectOption).map((item) => (
            <option key={item} value={item}>
              {selectOption[item]}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea placeholder={placeholder} spellCheck="false" autoComplete="off" rows={rows} {...attr}></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          min={min}
          max={max}
          checked={checked}
          spellCheck="false"
          autoComplete="off"
          {...attr}
        />
      )}
      {children ? children : <></>}
    </label>
  )
}
