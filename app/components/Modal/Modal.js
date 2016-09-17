import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import { formatDuck } from 'helpers/utils'

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  duckText: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateDuckText: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  duckFanout: PropTypes.func.isRequired,
}

export default function Modal (props) {
  function submitDuck () {
    props.duckFanout(formatDuck(props.duckText, props.user))
  }

  return (
    <span onClick={props.openModal}>
      {'New Post'}
      <ReactModal isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div>
          <span>{'Type new Post'}</span>
          <span onClick={props.closeModal}>{'X'}</span>
        </div>
        <div>
          <textarea
            onChange={(e) => props.updateDuckText(e.target.value)}
            value={props.duckText}
            maxLength={140}
            type='text'
            placeholder="What's on your mind?" />
        </div>
        <button
          disabled={props.isSubmitDisabled}
          onClick={submitDuck}>
            {'Submit!'}
        </button>
      </ReactModal>
    </span>
  )
}
