import Avatar from './Avatar';
var React = require('react');

var USER_DATA = {
	name: 'Shreyas Gune',
	username: 'shreyasgune',
	image : 'https://avatars1.githubusercontent.com/u/1239274?v=3&amp;u=511db957b02a775aa1e0ef313da87757dab03a4f&amp;s=400'
};


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

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
		<Friends/>
		<Avatar user={USER_DATA} />
      </div>
    )
  }
});

module.exports = HelloWorld;