import Vue from 'vue'
import Router from 'vue-router'

import Button from './components/Button.vue'
import Home from './components/Home.vue'
import HeaderTabNav from './components/HeaderTabNav.vue'
import Cell from './components/Cell.vue'
import Spinner from './components/Spinner.vue'
import Search from './components/Search.vue'
import SwitchBadge from './components/SwitchBadge.vue'
import Checklist from './components/Checklist.vue'
import Radio from './components/Radio.vue'
import Field from './components/Field.vue'
import ToastIndicator from './components/ToastIndicator.vue'
import Loadmore from './components/Loadmore.vue'
import InfiniteScroll from './components/InfiniteScroll.vue'
import MessageBox from './components/MessageBox.vue'
import ActionSheet from './components/ActionSheet.vue'
import Popup from './components/Popup.vue'
import Swipe from './components/Swipe.vue'
import LazyLoad from './components/LazyLoad.vue'
import Range from './components/Range.vue'
import Progress from './components/Progress.vue'
import Picker from './components/Picker.vue'
import DateTimePicker from './components/DateTimePicker.vue'
import IndexList from './components/IndexList.vue'
import PaletteButton from './components/PaletteButton.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/button', component: Button },
    { path: '/header-tab-nav', component: HeaderTabNav },
    { path: '/cell', component: Cell },
    { path: '/spinner', component: Spinner },
    { path: '/search', component: Search },
    { path: '/switch-badge', component: SwitchBadge },
    { path: '/checklist', component: Checklist },
    { path: '/radio', component: Radio },
    { path: '/field', component: Field },
    { path: '/toast-indicator', component: ToastIndicator },
    { path: '/loadmore', component: Loadmore },
    { path: '/infinite-scroll', component: InfiniteScroll },
    { path: '/message-box', component: MessageBox },
    { path: '/action-sheet', component: ActionSheet },
    { path: '/popup', component: Popup },
    { path: '/swipe', component: Swipe },
    { path: '/lazy-load', component: LazyLoad },
    { path: '/range', component: Range },
    { path: '/progress', component: Progress },
    { path: '/picker', component: Picker },
    { path: '/date-time-picker', component: DateTimePicker },
    { path: '/index-list', component: IndexList },
    { path: '/palette-button', component: PaletteButton }
  ]
})
