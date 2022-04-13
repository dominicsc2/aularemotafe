import React from 'react'
import styles from './FeedbackBar.module.scss'
import { FeedbackItem } from './FeedbackItem/FeedbackItem'
import { fb_elements } from './feedbackelements'

const FeedbackBar: React.FC = () => {
  const newFeedbackBar = fb_elements.map(feedback => (
    <FeedbackItem key={feedback.icon} icon={feedback.icon} number={feedback.number} />
  ))

  return <div className={styles.align}>{newFeedbackBar}</div>
}

export default FeedbackBar
