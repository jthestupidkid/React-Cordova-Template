require('./css/font.css');

var React = require('react/addons');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var injectTapEventPlugin = require('react-tap-event-plugin');
var ThemeManager = new mui.Styles.ThemeManager();

injectTapEventPlugin();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

var TestComponent = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object,
	},

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme(),
		};
	},
	render() {
		return (
			<RaisedButton label="Default" />
		);
	}
});

React.render(
	<TestComponent />,
	document.body
);
