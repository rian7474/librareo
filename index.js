let app

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
    })
  }
})
