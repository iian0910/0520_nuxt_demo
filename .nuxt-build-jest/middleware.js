const middleware = {}
/* eslint-disable dot-notation */

middleware['user-agent'] = require('..\\middleware\\user-agent.js')
middleware['user-agent'] = middleware['user-agent'].default || middleware['user-agent']

/* eslint-enable dot-notation */
export default middleware
