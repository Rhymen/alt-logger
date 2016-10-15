export function getTime() {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}

export function getState(alt) {
	const lastSnapshot = alt._lastSnapshot;
	const state = alt.takeSnapshot();
	alt._lastSnapshot = lastSnapshot;
	return JSON.parse(state);
}