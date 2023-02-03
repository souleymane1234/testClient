import React, { useEffect, useState  } from 'react';
import ClipLoader from "react-spinners/ClipLoader";



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
                     <img className="d-block w-100" src={backendData.imageCouverture1} alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={backendData.imageCouverture2} alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src={backendData.imageCouverture3} alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>
        </section>   

        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Qui sommes nous</h3>
               </div>
              </div>
             <div className="row">
                <p className="mt-4 mb-5">{backendData.textBienvenue}</p>
             </div>   
          </div>   
        </section>   

        <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Destinations Favorite</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-6 mb-5">
                    <div className="card mt-4">
                       <img className="card-img-top" src={backendData.presentation1Image} alt=""/>
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
       </section>  


   </div>
   </div>
    );
  }
  
  export default Content;