import React, { useState } from "react";

const MailingListInputField = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("https://sendfox.com/form/mnpp8v/1yrnde", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Subscription failed: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEmail("");
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(
          err.message || "There was an error subscribing you to the email list"
        );
      });
  };

  return (
    <div className="join-the-newsletter-section">
      <strong>JOIN THE NEWSLETTER!</strong>
      <p>Subscribe to get notified of new drops and discounts</p>
      <form className="mailing-list-input-field" onSubmit={handleSubmit}>
        {error !== "" && <strong>{error}</strong>}
        <label>
          <input
            name="mailing-list-input"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email address"
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default MailingListInputField;
