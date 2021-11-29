// Import vue component
import MyEmbeded8 from './MyEmbeded8.vue';
import EmberOne from './components/EmberOne.vue';
import EmberTwo from './components/EmberTwo.vue';
import EmberThree from './components/EmberThree.vue';

export function install(Vue, options) {
    if (install.installed) return;
    install.installed = true;

    const store = options.store;
    const router = options.router;

    Vue.prototype.countValue = options.countValue;

    store.registerModule('myEmbeded8', {
        state: {
            foo: 'bar',
        }
    })
    Vue.countValue = options.countValue;

    router.addRoute({ path: '/self', component:  MyEmbeded8});
    router.addRoute({ path: '/emberone', component:  EmberOne});
    router.addRoute({ path: '/embertwo', component:  EmberTwo});
    router.addRoute({ path: '/emberthree', component:  EmberThree});
}

MyEmbeded8.install = install;

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default MyEmbeded8;