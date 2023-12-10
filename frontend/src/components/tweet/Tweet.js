// Tweet.js
import React, { useState } from 'react';
import './Tweet.css';

function Tweet({ onClose }) {
    const [tweetText, setTweetText] = useState('');

    const handlePostTweet = () => {
        if (tweetText.trim() !== '') {
            alert(`Tweet Posted: ${tweetText}`);
            setTweetText('');
            onClose();
        } else {
            alert('Please enter some text before posting.');
        }
    };

    return (
        <div className="tweet-popup">
            <div className="tweet-popup-content">
                <span className="close-popup" onClick={onClose}>&times;</span>
                <textarea
                    placeholder="What's on your mind?"
                    value={tweetText}
                    onChange={(e) => setTweetText(e.target.value)}
                ></textarea>
                <button onClick={handlePostTweet}>Post</button>
            </div>
        </div>
    );
}

export default Tweet;
