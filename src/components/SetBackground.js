import React from 'react'

const SetBackground = (WrappedComponent) => {
  const WithBackground = () => {
    return (
      <div style={{backgroundColor:'#FAEBD7'}}>
        <WrappedComponent />
      </div>
    )
  }
  return WithBackground;
}

export default SetBackground;
