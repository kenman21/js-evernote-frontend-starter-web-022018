storeUsers = []

class User {
  constructor(name, id){
    // this.notes = []
    this.id = id
    this.name = name
    storeUsers.push(this)

  }

  static all() {
    return storeUsers.slice()
  }

  notes() {
    return Note.all().filter(note => note.userId === this.id)
  }

  renderNotes(){
    return `${this.notes().map(note=>note.render()).join('')}`
  }
}
