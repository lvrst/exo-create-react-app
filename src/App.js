import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
      name: '',
      message: '',
      comments: []
  }

  keepComments = (event, object) => {

    object = {
        name: this.state.name,
        message: this.state.message
    }
    event.preventDefault();

    this.setState({
      comments: [...this.state.comments, object]
    })
  }


  changeMessage = (event) => {
      this.setState({
          message: event.target.value
      })
  }

  changeName = (event) => {
      this.setState({
          name: event.target.value
      })
    }

  render() {
    const listComments = this.state.comments.map(comment => {
      return <li><strong>{comment.name}</strong><br/>{comment.message}</li>
    })
    
    
    return (
      <div className="App container">
        <article className="message is-info">
          <div className="message-body">
            <button className="button is-info">Activer le mode d'administration</button>
          </div>
        </article>
        <div className="columns">
          <div className="column">
            <h1 className="title">Ajouter un commentaire</h1>
            <form className="commentform">
              <div className="field">
                <label className="label">Nom</label>
                <div className="control">
                  <input onChange={this.changeName} className="input" type="text" placeholder="Votre nom"/></div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea onChange={this.changeMessage} className="textarea" placeholder="Votre commentaire"></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button onClick={this.keepComments} className="button is-primary">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column">
              <h1 className="title">Liste des commentaires ({this.state.comments.length})</h1>
              <ul>
              {listComments}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default App;