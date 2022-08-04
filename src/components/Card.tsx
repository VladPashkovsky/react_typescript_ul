import React, { FC, ReactElement, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string,
  height?: string,
  variant: CardVariant
  children: ReactElement,
  onClick: (num: number) => void
}

const Card: FC<CardProps> = ({width, height, variant, children, onClick}) => {
  const [state, setState] = useState(0)

  return (
    <div onClick={() => onClick(state)} style={{width, height, border: variant === CardVariant.outlined ? '5px solid black' : 'none', background: variant === CardVariant.primary ? 'grey' : ''}}>
      {children}
    </div>
  )
}

export default Card