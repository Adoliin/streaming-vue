import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faHeart, faTimes} from '@fortawesome/free-solid-svg-icons'
Vue.component('fa-icon', FontAwesomeIcon)
library.add(faBars)
library.add(faHeart)
library.add(faTimes)
