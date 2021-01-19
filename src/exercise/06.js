// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    console.dir(event.target.elements)
    const userName = inputRef.current.value
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            ref={inputRef}
            id="usernameInput"
            type="text"
            onChange={handleChange}
          />
        </div>
        {error ? <div style={{color: 'red'}}>{error}</div> : null}
        <button disabled={Boolean(error)} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
