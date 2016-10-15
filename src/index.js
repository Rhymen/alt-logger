import Config from './Config';
import DebugDispatcher from './DebugDispatcher';

export default function createLogger(alt, config) {
	alt.dispatcher = new DebugDispatcher(alt);
	Config.assign(config);
	return alt;
}