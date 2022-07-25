import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display' key={item.id}>{item.name}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{
        <ul className='feedback-list'>
          <li>Project / Engagement Name : {item.projName}</li>
          <li>Better Me : {item.betterMe}</li>
          <li>Better Us : {item.betterUs}</li>
          <li>Building a Better Working World: Client : {item.buildABetterWorldClient}</li>
          <li>Building a Better Working World: Business : {item.buildABetterWorldBusiness}</li>
          <li>Quality, risk management and technical excellence : {item.qualityRiskManagement}</li>
          <li>Engagement/project level metrics : {item.projectMetrics}</li>
          <li>Any other Comments : {item.comments}</li>
        </ul>
      }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
