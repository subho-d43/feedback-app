import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { feedback } from '../data/FeedbackData'

// NOTE: added layout prop for nicer animation
// https://www.framer.com/docs/animation/#layout-animations

function FeedbackList() {
  //const { feedback, isLoading } = useContext(FeedbackContext)

  // if (!isLoading && (!feedback || feedback.length === 0)) {
  //   return <p>No Feedback Yet</p>
  // }

  console.log(feedback);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

}

export default FeedbackList
