import React, { FC, useRef, useState } from 'react'


const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag')
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP')
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder='Управляемый'/>
      <input ref={inputRef} type='text' placeholder='не управляемый'/>
      <button onClick={clickHandler}>Something</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{height: '200px', width: '200px', background: 'red'}}>
      </div>

      <div
        onDrag={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{height: '200px', width: '200px', background: isDrag ? 'blue' : 'red', marginTop: '15px'}}>
      </div>
    </div>
  )
}

export default EventsExample