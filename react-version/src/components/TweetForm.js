import React from 'react';

function TweetForm() {
  const message = "What are you humming about?";

  const handleClick = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional logic for form submission if needed
  };

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
        <textarea className="form__textarea" name="text" placeholder={message}></textarea>
        <input
          type="submit"
          value="Tweet"
          className="form__input"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;
