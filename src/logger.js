import Config from './Config';
import * as utils from './utils';

export default function log(logData) {
	const {colors, collapsed, timestamp, transformState, transformAction, predicate} = Config.get();
	const {prevState, payload, nextState} = logData;

	if (typeof predicate === 'function' && !predicate(payload, prevState, nextState)) {
		return;
	}

	const title = (`%c ${payload.action}` + (timestamp ? ` @ ${utils.getTime()}` : '')),
		titleCss = `color: ${colors.title}`;

	try {
		if (typeof collapsed === 'function' ? collapsed(payload, prevState, nextState) : collapsed) {
			console.groupCollapsed(title, titleCss);
		} else {
			console.group(title, titleCss);
		}
	} catch (e) {
		console.log(title, titleCss);
	}

	console.info('%c prevState', `color: ${colors.prevState}`, transformState(prevState));
	console.info('%c action', `color: ${colors.action}`, transformAction(payload));
	console.info('%c nextState', `color: ${colors.nextState}`, transformState(nextState));

	try {
		console.groupEnd();
	} catch (e) {
		console.log('-- group end --', titleCss);
	}
}