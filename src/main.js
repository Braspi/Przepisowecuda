import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core' /* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import font awesome icon component */

/* import specific icons */
import { faBars, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

/* You must provide every one imported icon */
library.add(
    // solid
    faBars, faLaptopCode,
    // brands
    faGithub, faInstagram,
    // regular
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
