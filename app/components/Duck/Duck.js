import React, { PropTypes } from 'react'
import { formatTimestamp } from 'helpers/utils'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'

const { func, object, string, array, bool, number } = PropTypes

Duck.propTypes = {
  duck: PropTypes.shape({
    avatar: string.isRequired,
    duckId: string.isRequired,
    name: string.isRequired,
    text: string.isRequired,
    timestamp: number.isRequired,
    uid: string.isRequired,
  }),
  onClick: func,
  isLiked: bool.isRequired,
  addAndHandleLike: func.isRequired,
  handleDeleteLike: func.isRequired,
  numberOfLikes: number,
  hideReplyBtn: bool.isRequired,
  hideLikeCount: bool.isRequired,
  goToProfile: func.isRequired,
}

export default function Duck (props) {
  // const starIcon = props.isLiked === true ? likedIcon : icon
  const starFn = props.isLiked === true ? props.handleDeleteLike : props.addAndHandleLike
  return (
    <div
      // className="duckContainer"
      // style="cursor: {props.hideReplyBtn === true ? 'default' : 'pointer'}"
      onClick={props.onClick} >
        <img src={props.duck.avatar} />
        <div >
          <div >
            <div onClick={props.goToProfile} >{props.duck.name}</div>
            <div>{formatTimestamp(props.duck.timestamp)}</div>
          </div>
          <div >{props.duck.text}</div>
          <div >
            {props.hideReplyBtn === true
              ? null
              : <Reply  />}
            <div >
              <Star onClick={(e) => starFn(props.duck.duckId, e)}/>
              { props.hideLikeCount === true ? null : <div>{props.numberOfLikes}</div> }
            </div>
          </div>
        </div>
    </div>
  )
}
