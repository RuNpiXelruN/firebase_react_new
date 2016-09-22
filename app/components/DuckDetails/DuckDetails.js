import React, { PropTypes } from 'react'
import { DuckContainer } from 'containers'
import { loading } from './styles.scss'
// import { RepliesContainer } from 'containers'
import { formatReply } from 'helpers/utils'

Reply.propTypes = {
  submit: PropTypes.func.isRequired,
}

function Reply ({submit}) {
  const handleSubmit = (e) => {
    if (Reply.ref.value.length === 0) return
    submit(Reply.ref.value, e)
    Reply.ref.value = ''
  }

  return (
    <div >
      <textarea
        ref={(ref) => (Reply.ref = ref)}
        maxLength={140}
        type='text'
        placeholder='Your reponse'/>
      <button
        onClick={handleSubmit} >
          {'Submit'}
      </button>
    </div>
  )
}

DuckDetails.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  addAndHandleReply: PropTypes.func.isRequired,
}

export default function DuckDetails ({duckId, isFetching, authedUser, error, addAndHandleReply}) {
  return (
    <div >
      {isFetching === true
        ? <div className={loading}>{'Loading&#8230;'}</div>
        : <div >
            <div >
              <DuckContainer duckId={duckId} hideLikeCount={false} hideReplyBtn={true} />
              <Reply submit={(replyText) => addAndHandleReply(duckId, formatReply(authedUser, replyText))} />
            </div>
            <div >
              REPLY SECTION
            </div>
          </div>}
      {error ? <p >{error}</p> : null}
    </div>
  )
}
