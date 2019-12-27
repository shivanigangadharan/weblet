import React, { useState } from 'react';
import 'styled-components';

function Dialog() {
    const [check, setCheck] = useState();
    return (
        <div>
            <input type="email" required />
            <input type="checkbox"
                oninvalid="this.setCustomValidity('Enter User Name Here')" />

        </div>
    )
}

export default Dialog;
