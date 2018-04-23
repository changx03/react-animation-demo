import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false,
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => {
            this.setState(prevState => ({ showBlock: !prevState.showBlock }));
          }}
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log('onEnter');
          }}
          onEntering={() => {
            console.log('onEntering');
          }}
          onEntered={() => {
            console.log('onEntered');
          }}
          onExit={() => {
            console.log('onExit');
          }}
          onExiting={() => {
            console.log('onExiting');
          }}
          onExited={() => {
            console.log('onExited');
          }}
        >
          {state => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 300ms ease-out',
              }}
            >
              {state}
            </div>
          )}
        </Transition>
        <Modal closed={this._closeModal} show={this.state.isModalOpen} />
        <Backdrop show={this.state.isModalOpen} />
        <button className="Button" onClick={this._showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }

  _showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  _closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
}

export default App;
