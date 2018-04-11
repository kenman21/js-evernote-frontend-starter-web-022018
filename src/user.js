
class User {
  constructor(name, id, notes){
    this.notes = []
    this.id = id
    this.name = name
  }

  renderNotes(){
    return `${this.notes.map(note=>note.render())}`
  }
}
