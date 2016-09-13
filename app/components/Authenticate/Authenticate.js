import React, { PropTypes } from 'react'
import { FacebookAuthButton } from 'components'

Authenticate.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default function Authenticate ({onAuth, isFetching, error}) {
  return (
    <div>
      <h1>Authenticate</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p>{error}</p> : null}
    </div>
  )
}
