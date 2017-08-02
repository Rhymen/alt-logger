# Logger for alt
This middleware for [alt.js](https://github.com/goatslacker/alt) allows you to display dispatches and state changes in the console.
It should only be used during development.

## Table of contents
* [Install](#install)
* [Usage](#usage)
* [Options](#options)
* [Tips](#tipps)
  * [Log only in development](#log-only-in-development)
  * [Only log actions with a certain type](#only-log-actions-with-certain-type)
  * [Collapse everything except actions with a certain type](#collapse-everything-except-actions-with-certain-type)
* [License](#license)

## Install
`npm i -D alt-logger`

## Usage
```javascript
import Alt from 'alt';
import createLogger from 'alt-logger';

export default createLogger(new Alt());
```
At the moment it's not possibly to add a custom dispatcher to alt, because it would override the DebugDispatcher.

## Options
```javascript
{
  collapsed: true, // Defines if the log group should be collapsed or not
  colors: {
    title: '#2ecc71',
    prevState: '#3498db',
    action: '#2ecc71',
    nextState: '#3498db'
  }, // Object with the log colors.
  timestamp: true, // Print the timestamp with the action name
  duration: true, // Print the duration
  transformState: state => state, // Transform state before print.
  transformAction action => ({
    'payload': action.payload,
    'type': action.type,
    'id': action.id
  }), // Transform action before print.
  predicate: undefined // If specified this function will be called before each action is processed with this middleware. If false is returned the log process is interrupted.
}
```

## Tips
### Log only in development
```javascript
import Alt from 'alt';
import createLogger from 'alt-logger';

const alt = new Alt();
export default (process.env.NODE_ENV === 'development') ? createLogger(alt) : alt;
```

### Collapse everything except actions with a certain type
```javascript
    createLogger(alt, {
        collapsed: (action) => action.type !== USER_ACTION
    });
```

### Only log actions with a certain type
```javascript
    createLogger(alt, {
        predicate: (action) => action.type === USER_ACTION
    });
```

## License
MIT


