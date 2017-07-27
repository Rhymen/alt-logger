import Config from './Config';
import * as utils from './utils';

export default function log(logData) {
	const {colors, collapsed, timestamp, duration, transformState, transformAction, predicate} = Config.get();
	const {prevState, payload, nextState, durationTime} = logData;

	if (typeof predicate === 'function' && !predicate(payload, prevState, nextState)) {
		return;
	}

	const title = ((timestamp ? `%c ${utils.getTime()}:` : '%c') + `%c ${payload.action}`) + (duration ? `%c (${durationTime} ms)` : '%c'),
		titleCss = `color: ${colors.title}`,
		timestampCss = `color: ${colors.timestamp}`,
		durationCss = `color: ${colors.duration}`;

	try {
		if (typeof collapsed === 'function' ? collapsed(payload, prevState, nextState) : collapsed) {
			console.groupCollapsed(title, timestampCss, titleCss, durationCss);
		} else {
			console.group(title, timestampCss, titleCss, durationCss);
		}
	} catch (e) {
		console.log(title, timestampCss, titleCss, durationCss);
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