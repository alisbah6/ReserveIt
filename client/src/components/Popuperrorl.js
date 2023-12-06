import React from 'react';
import './Popup.css'
import { } from 'react-router-dom'

function Popuperror() {
    return (
        <div>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Fill the all box before register</h2>
                    <a class="close" href="/Login">&times;</a>
                </div>
            </div >
        </div>

    )
}
export default Popuperror