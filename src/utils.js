export function getTime() {
	const date = new Date();
	return `${formatTwo(date.getHours())}:${formatTwo(date.getMinutes())}:${formatTwo(date.getSeconds())}.${formatThree(date.getMilliseconds())}`;
}

export function getState(alt) {
	const lastSnapshot = alt._lastSnapshot;
	const state = alt.takeSnapshot();
	alt._lastSnapshot = lastSnapshot;
	return JSON.parse(state);
}

function formatTwo(number){
	return ('0' + number).substr(-2);
}

function formatThree(number){
    return ('00' + number).substr(-3);
}