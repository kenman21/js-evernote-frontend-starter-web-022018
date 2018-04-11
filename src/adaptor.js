class Adaptor {
  constructor() {

  }

  renderUserNotes(url) {
    const sideBar = document.getElementById('sidebar')
    return fetch(url).then(resp => resp.json()).then(json => {

      let currentUser

      currentUser = new User(json[0].name, json[0].id)
      json[0].notes.forEach(note => new Note(note.title, note.body, currentUser.id))

      sideBar.innerHTML = currentUser.renderNotes()

      

      addEventListener('click', NoteDetails)
    })
  }

  create(url, obj) {

    // postConfig = {
    //   method: "POST",
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body: JSON.stringify({obj})
    // }
    //create something and store in backend
  }

  delete() {
    //delete from backend
  }

  update() {
    //update something in backend
  }



}
