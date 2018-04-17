var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={"contactItem"}>
        <img className={"contactImage"} src={"http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"} alt={this.props.item.firstName + " " + this.props.item.lastName}/>
        <div className={"contactData"}>
          <p className={"contactLabel"}> Imię: {this.props.item.firstName}</p>
          <p className={"contactLabel"}> Nazwisko: {this.props.item.lastName}</p>
          <p> Email: <a className={"contactEmail"} href={"mailto: " + this.props.item.email}> {this.props.item.email} </a></p>
        </div>
      </div>
    )
  },
});
