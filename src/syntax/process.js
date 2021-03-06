import {EventEmitter} from 'events';
import UUID from 'uuid'
import {NodePos} from 'react-svg-graph-editor'
import Tuple from './tuple'

/*
 lisp的に色々置けるようにする
*/
export default class ZooProcess extends EventEmitter {

	constructor(type, graph, options) {
		super();
		this.type = type;
		this.graph = graph;
		this.id = UUID();
		this.settings = options.settings || {};
		this.wires = [];
		this.node = new NodePos(options);
		this.tuples = [];
	}

	getId() {
		return this.id;
	}

	setSettings(settings) {
		this.settings = settings;
	}

	receive(event) {
		console.log('receive', event, this.settings);
		this.type.execute(event, this.settings).then((result)=>{
			this.send(result);
		}).catch((err)=>{
			console.error(err);
		})
	}

	send(event) {
		this.wires.forEach((zooProcess)=>{
			zooProcess.receive(event);
		});
	}

	updateWires(wires) {
		this.wires = wires;
	}

	addWire(zooProcess) {
		this.wires.push(zooProcess);
	}

	removeWire(zooProcess) {
		let index = this.wires.indexOf(zooProcess);
		this.wires.splice(index, 1);
	}

	addTuple() {
		let newTuple = new Tuple();
		this.tuples.push(newTuple);
	}

}
