<div class="contact-page">
  <div class="container">
    <h1 class="title">CONTACT </h1>
    <p class="description">
      Leave a message below or send an email directly to <a href="mailto:support@noodles.services">support@noodles.services</a>.
    </p>

    <form>
      <div class="form-field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="form-field">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>

      <button class="btn-submit">Send</button>
    </form>
  </div>
</div>

<style lang="scss">
  .contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: 550px;
    position: relative;
    top: 300px;
  }

  .title {
    margin: 0;
  }
  
  .description {
    margin: 10px 0;
    color: #606060;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    label {
      margin-bottom: 10px;
      font-size: 1.1em;
      font-family: 'Source Code Pro';
    }

    input {
      background-color: #202020;
      border-radius: 8px;
      padding: 10px;
      color: #ffffff;
      font-family: 'Source Code Pro';
      font-size: 1em;
      outline: none;
      border: 1px solid #000000;
    }

    input:focus {
      border: 1px solid #ffbb00;
    }

    textarea {
      @extend input;
      resize: none;
    }
    
    
  }
  
  a {
    // text-decoration: none;
    color: #ffbb00;
  }

  .btn-submit {
    width: 100%;
    border: none;
    background-color: #ffbb00;
    padding: 8px;
    font-size: 1.1em;
    cursor: pointer;
    font-family: 'Source Code Pro Medium';
    outline: none;
    border-radius: 8px;
  }
</style>