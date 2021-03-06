import React, { PropTypes } from 'react'
import { DuckContainer } from 'containers'
// import { userContainer, header } from './styles.css'
// import { errorMsg } from 'sharedStyles/styles.css'

User.propTypes = {
  noUser: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  duckIds: PropTypes.array.isRequired,
}

export default function User (props) {
  return props.noUser === true
    ? <p >{'This user doesnt exist. 👽'}</p>
    : <div>
        {props.isFetching === true
          ? <p >{'Loading'}</p>
          : <div>
              <div >
                <div>{props.name}</div>
              </div>
              {props.duckIds.map((id) => (
                <DuckContainer
                  duckId={id}
                  key={id} />
              ))}
              {props.duckIds.size === 0
                ? <p >
                    {`It looks like ${props.name.split(' ')[0]} hasn't made any ducks yet.`}
                  </p>
                : null}
            </div>}
        {props.error ? <p >{props.error}</p> : null}
      </div>
}
