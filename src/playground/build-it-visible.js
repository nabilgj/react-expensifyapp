// component VisibilityToggle
// constructor, render, method onClick handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>

        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility
            ? (this.state.buttonDetails = "Hide Details")
            : (this.state.buttonDetails = "Show Details")}
        </button>
        {this.state.visibility && (
          <p>Hey. These are sme details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
