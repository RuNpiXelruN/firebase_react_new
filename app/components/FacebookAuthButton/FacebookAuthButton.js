import React, { PropTypes } from 'react'

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function FacebookAuthButton ({isFetching, onAuth}) {
  return (
    <button onClick={onAuth} >
      { isFetching === true ? 'Loading' : 'Login with Facebook' }
    </button>
  )
}
