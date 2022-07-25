import { useState, useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'
import { dropdownValues, feedbackProvideeData } from '../data/DefinitionData'

function FeedbackForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
      projName: '', 
      comments: '', 
      betterMe: '', 
      betterUs: '',
      buildABetterWorldClient: '',
      buildABetterWorldBusiness: '',
      qualityRiskManagement: '',
      projectMetrics: ''
    });
  const [feedbackProvidee, setFeedbackProvidee] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const defaultDropdownValue = 'Select a Rating';
  const { addFeedback } =
    useContext(FeedbackContext);

    useEffect(() => {
      if(feedbackProvidee !== '') {
        if (data !== null) {
          setIsFormValid(Object.values(data).every((value) => value !== ""));
        }
      }
    }, [data]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const selectFeedbackProvidee = (e) => {
    setFeedbackProvidee(e.target.value);
    feedbackProvideeData.find(item => {
      if(item.name === e.target.value) {
        data.name = item.name;
        data.empId = item.empId;
        setIsFormValid(false);
      }
    });
  }

  const isFeedbackAvailable = (item) => {
    console.log(item);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(data);
    navigate('/feedbackData');
  }

  return (
    <div>
      <Card>
      <h2 className='feedback-option' id='betterMe'>Select Feedback Providee</h2>
      <div className='data-container'>
        <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='feedbackProvidee' onChange={selectFeedbackProvidee} value={feedbackProvidee}>  
      <option value='' className='rating-option'>Select Feedback Providee</option>
      {feedbackProvideeData.map((item) => <option className='rating-option' value={item.name} key={item.empId} disabled={(item) => {
        return true;
      }}>{item.name} (ID: {item.empId})</option>)}
      </select>
      </div>
      </div>
    </Card>
    <form onSubmit={handleSubmit}>
    <Card>
      <h2 className='feedback-option' id='projName'>Project / Engagement Name</h2>
      <div className='input-group'>
          <input
            type='text'
            name='projName'
            value={data.projName}
            onChange={handleChange}
            disabled={feedbackProvidee === ''}
          />
        </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='betterMe'>Better Me</h2>
      <p className='feedback-option-subtext'><strong>Wellbeing</strong> - Is mindful and fully present; maintains personal wellbeing to sustain positive energy and fuel resilience</p>
      <p className='feedback-option-subtext'><strong>Curiosity</strong> - Is a continuous learner, leads with questions, reflects and listens for the art of the possible to spark bold new insights</p>
      <p className='feedback-option-subtext'><strong>Agility</strong> - Embraces change and through self-awareness, adapts behavior in diverse contexts</p>
      <div className='data-container'>
        <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='betterMe' onChange={handleChange} value={data.betterMe} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>
      </div>
      <span className='selected-data'>{data.betterMe !== defaultDropdownValue ? data.betterMe : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='betterUs'>Better Us</h2>
      <p className='feedback-option-subtext'><strong>Inspiring</strong> - Shares a compelling vision of the future, leverages story-telling and rallies others with passion and purpose</p>
      <p className='feedback-option-subtext'><strong>Teaming</strong> - Supports the bringing together of a diverse mix; plays to each other’s strengths, coaches, collaborates and builds trust in a courageous manner to achieve collective goals</p>
      <p className='feedback-option-subtext'><strong>Belonging</strong> - Supports the establishment of an inclusive, open and safe environment where people are aligned around a shared purpose, feel free to be themselves and are valued for their differing identities, perspectives and talents</p>
      <div className='data-container'>
      <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='betterUs' onChange={handleChange} value={data.betterUs} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>  
      </div>
      <span className='selected-data'>{data.betterUs !== defaultDropdownValue ? data.betterUs : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='buildABetterWorldClient'>Building a Better Working World: Client</h2>
      <p className='feedback-option-subtext'><strong>Connected</strong> - Digitally engage, bring all of EY knowledge and EY client business together into one cohesive ecosystem to build trust and enrich relationships</p>
      <p className='feedback-option-subtext'><strong>Proactive</strong> - Actively listen, be highly responsive and proactively bring innovative ideas that inspire EY clients</p>
      <p className='feedback-option-subtext'><strong>Insightful</strong> - Become a trusted advisor, ask better questions to bring bold insights to EY clients</p>
      <div className='data-container'>
      <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='buildABetterWorldClient' onChange={handleChange} value={data.buildABetterWorldClient} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>  
      </div>
      <span className='selected-data'>{data.buildABetterWorldClient !== defaultDropdownValue ? data.buildABetterWorldClient : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='buildABetterWorldBusiness'>Building a Better Working World: Business</h2>
      <p className='feedback-option-subtext'><strong>Progressive</strong> - Adopts new technologies, assets, data and partners across the ecosystem to lead EY clients through transformation and provide long-term business value</p>
      <p className='feedback-option-subtext'><strong>Innovative</strong> - Co-creates better, faster, smarter ways of working; collaborates widely within EY organization and externally to harness diverse thinking, experiment, create new solutions and maximize/improve existing EY products, services and processes </p>
      <p className='feedback-option-subtext'><strong>Commercial</strong> - Sets the highest standards expected of our profession, manages risk and provide quality results in a commercially viable way, embracing new revenue and pricing models</p>
      <div className='data-container'>
      <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='buildABetterWorldBusiness' onChange={handleChange} value={data.buildABetterWorldBusiness} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>  
      </div>
      <span className='selected-data'>{data.buildABetterWorldBusiness !== defaultDropdownValue ? data.buildABetterWorldBusiness : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='qualityRiskManagement'>Quality, risk management and technical excellence</h2>
      <p className='feedback-option-subtext'>Delivers the highest quality work, displaying technical excellence across a range of subject matter. Ensures compliance to relevant risk management policies.</p>
      <div className='data-container'>
      <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='qualityRiskManagement' onChange={handleChange} value={data.qualityRiskManagement} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>  
      </div>
      <span className='selected-data'>{data.qualityRiskManagement !== defaultDropdownValue ? data.qualityRiskManagement : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='projectMetrics'>Engagement/project level metrics</h2>
      <p className='feedback-option-subtext'>Indicate the extent to which this individual helped the team achieve or improve engagement/project metrics.</p>
      <div className='data-container'>
      <div className='input-group select-wrapper'>
      <select className='rating-dropdown' name='projectMetrics' onChange={handleChange} value={data.projectMetrics} disabled={feedbackProvidee === ''}>  
      <option value='' className='rating-option'>Select Rating</option>
      {dropdownValues.map((item) => <option className='rating-option' value={item.data} key={item.id}>{item.data}</option>)}
      </select>  
      </div>
      <span className='selected-data'>{data.projectMetrics !== defaultDropdownValue ? data.projectMetrics : ''}</span>
      </div>
    </Card>
    <Card>
      <h2 className='feedback-option' id='comments'>Provide Any Other Comments</h2>
      <div className='input-group'>
          <input
            name='comments'
            type='text'
            value={data.comments}
            onChange={handleChange}
            disabled={feedbackProvidee === ''}
          />
        </div>
    </Card>
    <div className='form-btn'>
    <Button type='submit' isDisabled={!isFormValid}>Send</Button>
    </div>
    </form>
    <Button type='button'>Go To Feedbacks</Button>
    </div>
  )
}

export default FeedbackForm
