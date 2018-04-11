class Adaptor {
  constructor {

  }

  get(url) {
    fetch(url).then(resp => resp.json()).then(console.log)
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
