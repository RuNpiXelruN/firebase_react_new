import React, { PropTypes } from 'react'

NewDucksAvailable.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

function NewDucksAvailable ({handleClick}) {
  return (
    <div onClick={handleClick}>
      {'New Posts Available!'}
    </div>
  )
}

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}

export default function Feed (props) {
  return props.isFetching === true
    ? <h1>{'Fetching...'}</h1>
  : <div>
      {props.newDucksAvailable ? <NewDucksAvailable handleClick={props.resetNewDucksAvailable} /> : null}
      {props.duckIds.length === 0
        ? <p>{'Oh damnn'}<br/>{'It appears you have no posts yet :('}</p>
        : null}
      {props.duckIds.map((id) => (
        <p>Duck Id: {id}</p>
      ))}
      {props.error ? <p>{props.error}</p> : null}
    </div>
}
