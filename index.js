import riot from 'riot'
import './src/less/main.less'
import './src/js/tags/app.html'

document.body.innerHTML = '<app></app>'
riot.mount('*')
