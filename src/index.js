import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import CreateClient from './CreateClient'
import Login from './Login'


ReactDOM.render(<CreateClient />, document.getElementById('root'))

registerServiceWorker()