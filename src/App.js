import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackDefinition from './components/FeedbackDefinition'
import FeedbackData from './components/FeedbackData'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackDefinition />
                  <FeedbackForm />
                </>
              }
            ></Route>
            <Route path='/feedbackData' element={<FeedbackData />}/>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
