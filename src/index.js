document.addEventListener("DOMContentLoaded", e=>{
  // const sideBar = document.getElementById('sidebar')
  const adaptor = new Adaptor
  let usersUrl = "http://localhost:3000/api/v1/users"
  let notesUrl = "http://localhost:3000/api/v1/notes"

  // adaptor.get(usersUrl).then(json => currentUser = new User(json[0].name, json[0].id))
  // adaptor.get(notesUrl).then(json => json.forEach(note => new Note(note.title, note.body, note.user.id)))

  // sideBar.innerHTML = currentUser.notes().map(note => note.render())

  adaptor.renderUserNotes(usersUrl)


})
