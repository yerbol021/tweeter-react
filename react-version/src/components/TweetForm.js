import React from 'react'; //optional

function TweetForm(){
  const message = "What are you humming about?"
  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={message}></textarea>
      <input type="submit" value="Tweet" className="form__input"/>
      <span className="form__counter">140</span>
    </form>
  </section>

  );
}

export default TweetForm;