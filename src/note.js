class Note {
  constructor(title, body, user){
    this.title = title
    this.body = body
    this.user = user
  }

  render(){
    return `<a href='#'>${this.title}</a>`
  }
}
