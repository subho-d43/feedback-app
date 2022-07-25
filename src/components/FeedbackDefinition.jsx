import React from 'react'
import { definition } from '../data/DefinitionData'
import Card from './shared/Card'

function FeedbackDefinition() {
    return (
       <Card>
            <div className="App">
                <table>
                    <tbody>
                    <tr>
                        <th className='not-observed'>Not Observed</th>
                        <th className='never'>Never</th>
                        <th className='rarely'>Rarely</th>
                        <th className='usually'>Usually</th>
                        <th className='almost-always'>Almost Always</th>
                        <th className='gold-standard'>Gold Standard</th>
                    </tr>
                    {definition.map((val, id) => {
                        return (
                            <tr key={id}>
                                <td className='not-observed'>{val.notObserved}</td>
                                <td className='never'>{val.never}</td>
                                <td className='rarely'>{val.rarely}</td>
                                <td className='usually'>{val.usually}</td>
                                <td className='almost-always'>{val.almostAlways}</td>
                                <td className='gold-standard'>{val.goldStandard}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default FeedbackDefinition