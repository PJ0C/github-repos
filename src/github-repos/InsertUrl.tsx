import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component<{}, { value: string }> {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Digite o url:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default NameForm;
