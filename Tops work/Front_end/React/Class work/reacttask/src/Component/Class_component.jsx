import React from 'react';
import './Form.css';

class Class_component extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>HTML Forms</h2>
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" defaultValue="John" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" defaultValue="Doe" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Class_component;
