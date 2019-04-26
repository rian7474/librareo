const ProfileView = {
  beforeRouteEnter(to, from, next) {
    let current = firebase.auth().currentUser
    return current ? next() : next('/login')
  },

  template: `
    <div id="booksView">
      <nav-bar></nav-bar>
      <h1>Profile View</h1>
    </div>
  `,

  components: {
    NavBar,
  }
}
