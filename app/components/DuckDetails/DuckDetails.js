import React, { PropTypes } from 'react'
import { DuckContainer } from 'containers'

DuckDetails.propTypes = {
  duckId: PropTypes.string.isRequired,
  authedUser: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default function DuckDetails (props) {
  return (
    <div>
      {props.isFetching === true
      ? <div>Loading...</div>
    : <div>
        <div className="duckContent">
          <DuckContainer duckId={props.duckId} hideLikeCount={false} hideReplyBtn={true} />
          MAKE REPLY HERE
        </div>
        <div className="repliesContainer">
          REPLIES HERE
        </div>
      </div>}
      {props.error ? <p>{props.error}</p> : null}
    </div>
  )
}
