import React, { PropTypes } from 'react'
import { formatTimestamp } from 'helpers/utils'
import { loading } from './styles.scss'

Reply.propTypes = {
  comment: PropTypes.object.isRequired,
}

function Reply ({comment}) {
  return (
    <div >
      <img src={comment.avatar} alt={comment.name} />
      <div>
        <div >{comment.name}</div>
        <div >{formatTimestamp(comment.timestamp)}</div>
        <div >{comment.reply}</div>
      </div>
    </div>
  )
}


Replies.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  replies: PropTypes.object,
}

function Replies ({replies, error, isFetching}) {
  const replyIds = Object.keys(replies)
  return (
    <div>
      {error ? <h3 >{error}</h3> : null}
      {isFetching === true
        ? <div className={loading}>{'Loading&#8230;'}</div>
        : <div>
            <h1 >{'Replies'}</h1>
            {replyIds.map((replyId) => (
              <Reply key={replyId} comment={replies[replyId]} />
            ))}
          </div>}
      {replyIds.length === 0 ? <h3 >{'Be the first to comment. 😎'}</h3> : null}
    </div>
  )
}

export default Replies
