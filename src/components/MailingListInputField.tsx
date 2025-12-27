import React, { useState } from 'react';

const MailingListInputField = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        fetch('https://sendfox.com/form/mnpp8v/1yrnde',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        email,
                    }),
                }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setEmail("");
            setError("");
        })
        .catch(err => {
            console.log(err);
            setError("There was an error subscribing you to the email list");
        })
    }

    return (
        <div className="join-the-newsletter-section">
            <strong>JOIN THE NEWSLETTER!</strong>
            <p>Subscribe to get notified of new drops and discounts</p>
            <form className="mailing-list-input-field" onSubmit={handleSubmit} data-async="true" data-recaptcha="true">
                {error !== '' && <strong>{error}</strong>}
                <label>
                    <input name="mailing-list-input" type="email" value={email} onChange={handleInputChange} placeholder='Email address'/>
                </label>
                <button type="submit">Subscribe</button>
            </form>
        </div>
			
    )
}

export default MailingListInputField;