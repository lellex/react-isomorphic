import React, { Component } from 'react';
import Link from 'next/link'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/static/logo.svg" className="App-logo" alt="logo" />
          <h2>Voici une démo d'une application créer à partir de create-react-app et utilisant Next.js</h2>
        </div>
        <p className="App-menu">
          <Link href="/index">
            <a className="App-menuitem">Index</a>
          </Link>
          <Link href="/about">
            <a className="App-menuitem">About</a>
          </Link>
        </p>
        {this.props.children}
        <style jsx>{`
          .App {
            text-align: center;
          }

          .App-logo {
            animation: App-logo-spin infinite 20s linear;
            height: 80px;
          }

          .App-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
            color: white;
          }

          .App-menu {
            font-size: large;
          }

          .App-menuitem {
            margin: 12px;
          }

          @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

        `}</style>
      </div>
    );
  }
}

export default App;
