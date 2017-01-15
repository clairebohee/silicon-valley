var posts = []

var post = {
  url: 'http://jsonplaceholder.typicode.com/posts/',
  $el: $('<div class="post">').appendTo($('body')),
  initialize: function(id) {
    this.$el.attr('id', id)
    this.url += id
    var thisPost = this
    $.get(this.url, function(data) {
      console.log(this)
      thisPost.attributes = data
      thisPost.render()
    })
    posts.push(this)
  },
  render: function() {
    // .append에 array를 argument로 넣어주면 array안의 item들을 순서대로 넣어줍니다
    this.$el.append([
      $('<div>').addClass('title').text(this.attributes.title),
      $('<div>').addClass('body').text(this.attributes.body)
    ])
  }
}

post.initialize(1)
