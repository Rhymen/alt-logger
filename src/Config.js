let config = {
	collapsed: true,
	colors: {
		title: '#2ecc71',
		timestamp: '#9ec171',
		duration: '#3498db',
		prevState: '#3498db',
		action: '#2ecc71',
		nextState: '#3498db'
	},
	duration: true,
	timestamp: true,
	transformState: state => state,
	transformAction: action => ({
		'payload': action.payload,
		'type': action.type,
		'id': action.id
	}),
	predicate: undefined
};

export default class Config {
	static get(key = null) {
		return key ? config[key] : config;
	}

	static assign(_config = {}) {
		config = {
			...config,
			..._config
		};
	}
}