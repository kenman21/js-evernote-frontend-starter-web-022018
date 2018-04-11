class Adaptor {
  constructor() {

  }

  newUser(json){
    let newUser = new User()
    newUser.name = json[0].name
    newUser.id = json[0].id
    newUser.notes = json[0].notes
    debugger;
    console.log(json[0].id)
  }

  get(url) {
    return fetch(url).then(resp => resp.json()).then(json=>this.newUser(json))
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
