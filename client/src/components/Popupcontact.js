import React from 'react';
import './Popup.css'
import { } from 'react-router-dom'

function Popupcontact() {
    return (
        <div>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Your Feedback successfully sent</h2>
                    <a class="close" href="/Contact">&times;</a>
                </div>
            </div >
        </div>

    )
}
export default Popupcontact