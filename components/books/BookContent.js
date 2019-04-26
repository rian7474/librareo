const BookContent = {
  name: 'book-content',
  props: {
    book: BookModel,
  },

  template: `
    <div :id="book.id" class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{ book.title }}
        </h5>

        <p class="card-text">
          {{ book.description }}
        </p>
      </div>

      <div class="card-footer">
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  `
}
