import React, { useState, useEffect, useContext } from 'react'
import { CopyToClipboard } from '..'
import {
  WidgetWrapper,
  WidgetConverter,
  WidgetResult,
  FavoriteButton,
} from '..'
import { colors, Color } from '../../utils/tailwindClasses'

interface Props {
  setColor?: (value: string) => void
}

const ColorHelper = ({ setColor }: Props): JSX.Element => {
  const [value, setValue] = useState('#ec4899')
  const [closestColor, setClosestColor] = useState<Color>({
    class: 'pink-500',
    hex: '#ec4899',
  })

  const reset = () => {
    const input = document.getElementById('hex-value') as HTMLInputElement
    setValue('#ec4899')
    input.value = '#ec4899'
    setClosestColor({
      class: 'pink-500',
      hex: '#ec4899',
    })
  }
  // Converts hex to array of rgb
  const hexToRgb = (hex: string): number[] => {
    return hex
      .slice(1)
      .replace(/^(.)(.)(.)$/gi, '$1$1$2$2$3$3')
      .match(/.{2}/g)
      ?.map((value) => parseInt(value, 16))
  }
  // Distance between 2 colors (in RGB)
  // https://stackoverflow.com/questions/23990802/find-nearest-color-from-a-colors-list
  const distance = (a: number[], b: number[]): number => {
    return Math.sqrt(
      Math.pow(a[0] - b[0], 2) +
        Math.pow(a[1] - b[1], 2) +
        Math.pow(a[2] - b[2], 2)
    )
  }
  const nearestColor = (colorHex: string): any | Color => {
    return colors.reduce(
      (a, b) =>
        (a =
          distance(hexToRgb(colorHex), hexToRgb(b.hex)) < a[0]
            ? [distance(hexToRgb(colorHex), hexToRgb(b.hex)), b]
            : a),
      [Number.POSITIVE_INFINITY, colors[0]]
    )[1]
  }

  const isTooDark = (color: string): boolean => {
    const hex = color.substring(1)
    const rgb = parseInt(hex, 16)

    const red = (rgb >> 16) & 0xff
    const green = (rgb >> 8) & 0xff
    const blue = (rgb >> 0) & 0xff

    const brightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue

    return brightness < 120
  }

  useEffect(() => {
    if (setColor) setColor(closestColor.class)
  }, [closestColor, setColor])

  return (
    <WidgetWrapper>
      {/* RESET */}
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>

      {/* INPUT */}
      <WidgetConverter helperName='Color Picker'>
        <div className='flex flex-col gap-2'>
          <div className='relative overflow-hidden rounded-md h-14 w-44'>
            <input
              type='color'
              name='color'
              className='absolute w-[200%] h-[200%] -m-4 bg-indigo-300 cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ring-1 ring-stone-600/10 dark:ring-stone-100/10'
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const input = document.getElementById(
                  'hex-value'
                ) as HTMLInputElement
                input.value = e.target.value
                if (e.target.value.length === 7 && e.target.value[0] === '#') {
                  setValue(e.target.value)
                  setClosestColor(nearestColor(value))
                }
              }}
            />

            {/* ADD/REMOVE FAVORITE */}
            <FavoriteButton
              favoriteClass={closestColor.class}
              category='colors'
              color={
                isTooDark(closestColor.hex) ? 'text-white/80' : 'text-black/80'
              }
            />
          </div>
          <input
            type='text'
            defaultValue={value}
            id='hex-value'
            placeholder='#000000'
            maxLength={7}
            className='p-1 text-center rounded-md w-44 bg-slate-100 dark:bg-slate-700 ring-1 ring-stone-600/10 dark:ring-stone-100/10'
            onChange={(e) => {
              if (e.target.value.length === 7 && e.target.value[0] === '#') {
                setValue(e.target.value)
                setClosestColor(nearestColor(e.target.value))
              }
            }}
          />
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={closestColor.class}>
          <span className='font-semibold'>{`${closestColor.class}`}</span>
        </CopyToClipboard>
        <CopyToClipboard valueToCopy={closestColor.hex}>
          <span>{`${closestColor.hex}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default ColorHelper
