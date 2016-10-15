import { Dispatcher } from 'flux';

import log from './logger';
import * as utils from './utils';

export default class DebugDispatcher extends Dispatcher {

	constructor(alt) {
		super();
		this.alt = alt;
	}

	dispatch(payload) {
		const prevState = utils.getState(this.alt);
		super.dispatch(payload);
		const nextState = utils.getState(this.alt);

		log({
			prevState,
			payload,
			nextState
		});
	}

}



