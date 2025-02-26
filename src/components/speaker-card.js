import React from 'react'

import PropTypes from 'prop-types'

import './speaker-card.css'

const SpeakerCard = (props) => {
  return (
    <div className="speaker-card-speaker-card">
      <div className="speaker-card-image-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="speaker-card-image"
        />
        <div className="speaker-card-read-more-container">
          <span className="speaker-card-hint">{props.hintLabel}</span>
          <svg viewBox="0 0 1024 1024" className="speaker-card-icon1">
            <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
          </svg>
        </div>
      </div>
      <span className="speaker-card-first-name">{props.firstName}</span>
      <span className="speaker-card-last-name">{props.lastName}</span>
      <span className="speaker-card-text">{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  hintLabel: 'read more',
  firstName: 'Jonathan',
  lastName: 'carey',
  imageAlt: 'image',
  role: 'brand manager @ pepsi',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

SpeakerCard.propTypes = {
  hintLabel: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imageAlt: PropTypes.string,
  role: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default SpeakerCard
