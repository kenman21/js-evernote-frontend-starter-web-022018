class Adaptor {
  constructor() {

  }

  renderUserNotes(url) {
    const sideBar = document.getElementById('sidebar')
    const main = document.getElementById('main-content')
    return fetch(url).then(resp => resp.json()).then(json => {
      const currentUser = new User(json[0].name, json[0].id)

      json[0].notes.forEach(note => new Note(note.title, note.body, currentUser.id))

      sideBar.innerHTML = currentUser.renderNotes()

      function currentUserReturn(){
        return currentUser
      }

      // function displayDetails(e) {
        // let targetNote;
        // if (e.target.tagName==="A"){
        //   targetNote = Note.all().find(note=>note.id===parseInt(e.target.id))
        //   main.innerHTML = targetNote.renderFullDetails()
        // } else if (e.target.className==="delete"){
        //   targetNote = Note.all().find(note=>note.id===parseInt(e.target.id))
        //   targetNote.deleteNote(targetNote)
        //   debugger;
        // }
      // }


      document.addEventListener('click', e=>{
        let targetNote;
        if (e.target.tagName==="A"){
          targetNote = Note.all().find(note=>note.id===parseInt(e.target.id))
          main.innerHTML = targetNote.renderFullDetails()
        } else if (e.target.className==="delete"){
          targetNote = Note.all().find(note=>note.id===parseInt(e.target.id))
          targetNote.deleteNote(targetNote)
          let targetUser = User.all().find(user=>user.id===parseInt(e.target.getAttribute("user")))
          document.getElementById('sidebar').innerHTML = targetUser.renderNotes()
          e.target.parentElement.remove()
          fetch(`http://localhost:3000/api/v1/notes/${targetNote.id}`, {
            method: "DELETE"
          })
          // targetUser.renderNotes()
        }
      })
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
    debugger;
    //delete from backend
  }

  update() {
    //update something in backend
  }



}
