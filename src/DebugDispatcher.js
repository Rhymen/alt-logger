import { Dispatcher } from 'flux';

import log from './logger';
import * as utils from './utils';

export default class DebugDispatcher extends Dispatcher {

	constructor(alt) {
		super();
		this.alt = alt;
	}

	dispatch(payload) {
		const start = new Date();
		const prevState = utils.getState(this.alt);
		super.dispatch(payload);
		const nextState = utils.getState(this.alt);
		const stop = new Date();

		log({
			prevState,
			payload,
			nextState,
            durationTime: stop - start
		});
	}

}



