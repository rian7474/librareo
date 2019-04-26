const LoginView = {
  beforeRouteEnter(to, from, next) {
    let current = firebase.auth().currentUser
    return current ? next('/') : next()
  },

  template: `
    <div id="booksView">
      <button @click="onLoginGoogle" class="btn btn-danger">
        <i class="fab fa-google"></i> Google
      </button>

      <button class="btn btn-primary">
        <i class="fab fa-facebook"></i> Facebook
      </button>

      <button class="btn btn-info">
        <i class="fab fa-twitter"></i> Twitter
      </button>
    </div>
  `,

  methods: {
    onLoginGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(response => {
          this.$router.push('/')
        })
    }
  }
}
