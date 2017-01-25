var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
		<Friends/>
      </div>
    )
  }
});

var Friends = React.createClass({
	render : function(){
		var name = 'shreyas';
		var friends =['Ameya','Pradeep','Puuzy'];
		
		return (
			<div>
				<h3> Name : {name} </h3>
				<ShowList names={friends} />
			</div>
		)
	}
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));