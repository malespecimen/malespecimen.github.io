var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'Male Specimen TV', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'com.malespecimen.tv', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  navbar: {
    mdCenterTitle:true,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});

const swiper = new Swiper('.mstv-swiper-container', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 5,

  preloadImages:true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 5
    }
  }
})
