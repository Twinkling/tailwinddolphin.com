import React, { useState, useEffect } from 'react'
import OutOfBounds from '../OutOfBounds'
import CopyToClipboard from '../CopyToClipboard'

interface Props {
  setFontWeight: (value: string) => void
}

interface FontWeight {
  class: string
  weight: number
}

const fontWeight: FontWeight[] = [
  { class: 'font-thin', weight: 100 },
  { class: 'font-extralight', weight: 200 },
  { class: 'font-light', weight: 300 },
  { class: 'font-normal', weight: 400 },
  { class: 'font-medium', weight: 500 },
  { class: 'font-semibold', weight: 600 },
  { class: 'font-bold', weight: 700 },
  { class: 'font-extrabold', weight: 800 },
  { class: 'font-black', weight: 900 },
]

const FontWeightHelper = ({ setFontWeight }: Props): JSX.Element => {
  const [value, setValue] = useState(400)
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedFontWeight, setConvertedFontWeight] =
    useState<FontWeight | null>(fontWeight[4])

  // returns closes size matching with fontWeight array
  const getClosestFontWeight = (
    fontWeight: FontWeight[],
    value: number
  ): FontWeight => {
    let closest = fontWeight.reduce(
      (prev: FontWeight, curr: FontWeight): FontWeight => {
        return Math.abs(curr.weight - value) < Math.abs(prev.weight - value)
          ? curr
          : prev
      }
    )
    return closest
  }

  // updates converted size on value and unit change
  useEffect(() => {
    const closestFontSize = getClosestFontWeight(fontWeight, value)
    if (closestFontSize) {
      setConvertedFontWeight(closestFontSize)
    }
  }, [value])

  // check if converted font weight is at upper/lower limit
  useEffect(() => {
    if (convertedFontWeight?.class === 'font-thin') {
      setOutOfBounds('min')
    } else if (convertedFontWeight?.class === 'font-black') {
      setOutOfBounds('max')
    } else if (convertedFontWeight?.class === 'font-normal') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent font weight to converted size
    setFontWeight(convertedFontWeight!.class)
  }, [convertedFontWeight, setFontWeight])

  return (
    <section className='w-full'>
      {/* CONVERTER */}
      <form className='flex items-center w-full gap-4'>
        <label htmlFor='fontSize' className='flex items-center gap-4'>
          Font Weight
          {/* SIZE INPUT*/}
          <div className='relative'>
            <input
              type='number'
              step='100'
              name='fontSize'
              min='100'
              max='900'
              className='p-4 w-36'
              value={value || 400}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
            <input
              type='range'
              step='100'
              min='100'
              max='900'
              className='absolute left-0 w-full -bottom-1'
              value={value || 400}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </div>
        </label>
      </form>
      {/* RESULT */}
      <div className='inline-block w-full h-full'>
        {convertedFontWeight && (
          <div className='flex flex-col gap-4'>
            <div>
              <p className='flex items-center gap-4'>
                <CopyToClipboard
                  valueToCopy={convertedFontWeight!.class.toString()}>
                  <span className='font-semibold'>{`'${
                    convertedFontWeight!.class
                  }'`}</span>
                </CopyToClipboard>
                <CopyToClipboard
                  valueToCopy={convertedFontWeight!.weight.toString()}>
                  <span>{`${convertedFontWeight!.weight}`}</span>
                </CopyToClipboard>

                {outOfBounds && <OutOfBounds bounds={outOfBounds} />}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FontWeightHelper
