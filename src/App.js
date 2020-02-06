import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">React JS</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Kevin Risqi Ramadhani</td>
                    <td>Malang</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Yoga Ibnudinata</td>
                    <td>Tulungagung</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Febri Thoriqul Khoiri</td>
                    <td>Blitar</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Irham Rizaldi</td>
                    <td>Sidoarjo</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Padang Basudewa</td>
                    <td>Kepanjen</td>
                  </tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
