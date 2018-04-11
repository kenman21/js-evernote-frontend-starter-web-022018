storeNotes = []
let noteId = 0

class Note {
  constructor(title, body, userID){
    this.title = title
    this.body = body
    this.userId = userID
    storeNotes.push(this)
    this.id = ++noteId

  }

  static all() {
    return storeNotes.slice()
  }

  render(){
    return `<a href='#' id="${this.id}">${this.title}</a>`
  }

  renderFullDetails(){
    return `<div>
    <h1>${this.title}</h1>
    <h3>${this.body}</h3>
    <button id="${this.id}" class="delete" user="${this.userId}">Delete</button>
    </div>`
  }

  deleteNote(targetNote){
    storeNotes.splice(storeNotes.indexOf(targetNote), 1)
  }
}
