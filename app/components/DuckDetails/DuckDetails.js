import React, { PropTypes } from 'react'
import { DuckContainer } from 'containers'
import { loading } from './styles.scss'

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
      ? <div className={loading}>{'Loading&#8230;'}</div>
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
