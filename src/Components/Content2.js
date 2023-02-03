import React, { useEffect, useState  } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import "./style.css";



  function Content() {
   const [backendData, setBackendData] = useState([{}])
   const [userId, setUserId] = useState('');
   const [loading, setLoading] = useState(true);

   React.useEffect(() => {
      const path = new URLSearchParams(window.location.search);
      console.log(path.get('id'));

   }, [userId])


//    React.useEffect(() => {

// var formdata = new FormData();
// formdata.append("id", userId);

// fetch("/api/singleUsers/" + userId)
//   .then(response => response.json())
//   .then(data => {
//    setBackendData(data)
//    console.log("ma dataaaaaaaaaaa", data)
// })
//   .catch(error => console.log('error', error));
// }, [])
   useEffect(() => {
   var formdata = new FormData();
   const path = new URLSearchParams(window.location.search);
   const val = (path.get('id'));
    formdata.append("id", val);
      fetch("https://pleasant-shirt-bass.cyclic.app/api/singleUsers/" + val)
      .then(
         Response => Response.json()
      )
      .then(data => {
         setBackendData(data)
         console.log("ma dataaaaaaaaaaa", data)
         console.log("mo ", val)
         setLoading(!loading)
      })
   }, [])

   // useEffect(() => {
   //    setId(window.location.pathname);

   // }, [])
   useEffect(()=> {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
   }, []);
   const load =  <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    return (
       <div>
            <div>
              
         <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src={require('./bannerfirst.jpg')} alt="First slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section className="bg-white" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h2 className="text-center mt-4 text-secondary">Avec nous votre page web c'est</h2>
               </div>
              </div> 
          </div>   
        </section>  

      <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src={require('./bannerseconde.jpg')} alt="First slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>

      <section className="">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img className="d-block w-100" src={require('./bannerfird.jpg')} alt="First slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>

      <section  id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Remplissez le formulaire</h3>
               </div>
              </div>
              <div>
                   <form>
                     <div className='divForm1'>
                        <div>
                           <label>Nom et Prenom</label>
                           <input className="ok" type="text"/>
                        </div>
                        <div className=''>
                           <label>Téléphone</label>
                           <input className="ok" type="text"/>
                        </div>
                     </div>
                     <div className='divForm2'>
                        <div className=''>
                           <label>Entreprise</label>
                           <input className="ok" type="text"/>
                        </div>
                        <div className=''>
                           <label>Email</label>
                           <input className="ok" type="text"/>
                        </div>
                     </div>
                  </form>
                  <div className='login'>Envoyer</div>
              </div>
          </div>   
      </section>  
      
        <section className="bg-white" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h2 className="text-center mt-4 text-secondary text-success">ILS NOUS FONT CONFIANCE</h2>
               </div>
              </div>
               <div className="row" id="imageBox">
                 <div className="col-sm-4 mb-5">
                     <img className="logoPartenaire" src={require('./sofitel.png')} alt="logo 1"/>
                 </div>
                  <div className="col-sm-4 mb-5">
                     <img className="logoPartenaire" src={require('./KFCLogo.png')} alt="logo 2"/>
                 </div>
                  <div className="col-sm-4 mb-5">
                     <img className="logoPartenaire" src={require('./burgeur.png')} alt="logo 3"/>
                 </div>
              </div>
          </div>   
        </section>   

        {/* <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Destinations Favorite</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-6 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src="/public/Images/bannerfirst.jpg" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">{backendData.presentation1Titre}</h4>
                          <p className="card-text text-secondary">{backendData.presentation1Description}</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Voir plus!</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-6 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src={backendData.presentation2Image} alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">{backendData.presentation2Titre}</h4>
                          <p className="card-text text-secondary">{backendData.presentation2Description}</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Voir plus!</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>   */}


   </div>
   </div>
    );
  }
  
  export default Content;