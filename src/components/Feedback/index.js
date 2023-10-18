import {Component} from 'react'
import './index.css'
import Emojis from '../Emojis'

class Feedback extends Component {
    const {resources} = this.props 
    const {emojis, loveEmojiUrl} = resources
    render() {
        return (
            <div>
                <div>
                    <h1>How satisfied are you with our customer support performance?</h1>
                    <ul>
                        {emojis.map(each => (
                            <Emojis key={each.id} emojiDetails={each} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Feedback