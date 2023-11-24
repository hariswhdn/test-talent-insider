import {useCallback, useEffect, useState, useRef} from 'react'
import './multiRange.css'

export default function MultiRange({className, min, max, onChange}) {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({min: minVal, max: maxVal})
  }, [minVal, maxVal, onChange])

  return (
    <div className={'slider' + (className ? ' ' + className : '')}>
      <input
        type="range"
        min={min}
        max={max}
        step="50000"
        value={minVal}
        ref={minValRef}
        onChange={(e) => {
          const value = Math.min(+e.target.value, maxVal - 50000)
          setMinVal(value)
          e.target.value = value.toString()
        }}
        className={'thumb' + (minVal > max - 100 ? ' zindex5' : ' zindex3')}
      />
      <input
        type="range"
        min={min}
        max={max}
        step="50000"
        value={maxVal}
        ref={maxValRef}
        onChange={(e) => {
          const value = Math.max(+e.target.value, minVal + 50000)
          setMaxVal(value)
          e.target.value = value.toString()
        }}
        className="thumb zindex4"
      />
      <div className="slider_track" />
      <div ref={range} className="slider_range" />
    </div>
  )
}
