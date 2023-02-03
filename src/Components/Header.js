import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <section class="navbar-white bg-white header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">Gammy Tours</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
