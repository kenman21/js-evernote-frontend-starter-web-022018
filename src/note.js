storeNotes = []

class Note {
  constructor(title, body, userID){
    this.title = title
    this.body = body
    this.userId = userID
    storeNotes.push(this)

  }

  static all() {
    return storeNotes.slice()
  }

  render(){
    return `<a href='#'>${this.title}</a>`
  }
}
