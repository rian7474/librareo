const BooksView = {
  beforeRouteEnter(to, from, next) {
    let current = firebase.auth().currentUser
    return current ? next() : next('/login')
  },

  template: `
    <div id="booksView">
      <nav-bar></nav-bar>
      
      <div class="container">
        <div class="card-deck mb-3">
          <book-content v-for="book in books" :v-key="book.id" :book="book"></book-content>
        </div>

        <div class="d-flex justify-content-center">
          <button class="btn btn-info" @click="prev">
            <i class="fas fa-arrow-left"></i>
          </button>

          <div class="pl-2 pr-2">
            <span v-for="i in pages">
              {{ i }}
            </span>
          </div>

          <button class="btn btn-info" @click="next">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `,

  components: {
    NavBar,
    BookContent,
  },

  data: () => ({
    books: [],
    start: 0,
    end: 3,
    interval: 3,
    limit: 10,
  }),

  created() {
    this.getBooks()
  },

  computed: {
    pages() {
      return Math.floor(this.limit / this.interval) + 1
    }
  },

  methods: {
    getBooks() {
      this.getBooksAsync().then(booksFilter => {
        this.books = booksFilter
      })
    },

    async getBooksAsync() {
      let querySnapshot = await firebase.firestore().collection('books').get()
      let books = []
      let filter = []

      querySnapshot.forEach(doc => {
        books.push({ id: doc.id, ...doc.data() })
      })

      this.limit = books.length

      for (let i = this.start; i < this.end; i++) {
        filter.push(books[i])
      }

      return filter
    },

    prev() {
      this.end = this.start
      this.start -= this.interval

      if (this.start <= 0) {
        this.start = 0
        this.end = this.interval
      }

      this.getBooks()
    },

    next() {
      this.start = this.end
      this.end += this.interval

      if (this.end >= this.limit) {
        this.start = this.limit - this.interval
        this.end = this.limit
      }

      this.getBooks()
    }
  }
}
