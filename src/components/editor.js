import React from 'react'
import Graph from './graph'

export default class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		let {tree} = this.props;
		return (<svg width="600" height="500">
					<g>
						<Graph tree={tree}></Graph>
					</g></svg>);
		/*
		return (<div><svg width="600" height="36"><g>
			<text x="10" y="20" style={{"fontSize":"20px"}} onClick={this.changeDefault.bind(this)}>Return</text>
		</g></svg>{graphs}</div>)
		*/
	}
}