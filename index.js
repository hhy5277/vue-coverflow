 /**
 *
 * vue-coverflow
 * author @orangexc
 *
 */

var CoverflowComponent = require('./coverflow.vue')

var coverflow = {
  coverflow: CoverflowComponent,
  install: function (Vue) {
    Vue.component('coverflow', SwiperComponent)
  }
}

module.exports = coverflow
