import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faTrashAlt, faPencilAlt, faPlus 
} from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faPencilAlt, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)