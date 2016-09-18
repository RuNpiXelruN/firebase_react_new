import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Duck } from 'components'

const { func, object, string, bool, number } = PropTypes

const DuckContainer = React.createClass ({
  propTypes: {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired,
  },

  contextTypes: {
    router: PropTypes.object.isRequired,
  },

  getDefaultProps () {
    return {
      hideLikeCount: true,
      hideReplyBtn: false,
    }
  },

  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.uid)
  },

  handleClick (e) {
    e.stopPropagation()
    this.context.router.push('/duckDetail' + this.props.duck.duckId)
  },

  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  }
})

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  return {
    duck: ducks[props.duckId],
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

// mapDispatchToProps (dispatch) {
//   return bindActionCreators( , dispatch)
// }

export default connect(mapStateToProps)(DuckContainer)