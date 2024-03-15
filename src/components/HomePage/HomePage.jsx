import React from "react";
import "./HomePage.css";
const HomePage = () => {
   return (
      <>
         <div className="Container">
            <section className="container-header">
               <div className="right-panel">New York Event</div>
               <div className="middle-panel">
                  <h1>LWT GAMES</h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Minima, aliquam! Architecto eaque animi ab quisquam unde
                     impedit illo quo voluptatem, placeat officia, ex
                     perspiciatis quos iste quis praesentium ipsum iure.
                  </p>
                  <button type="button" className="btn btn-primary">
                     Play Bingo
                  </button>
               </div>
               <div className="left-panel">Virtual Event</div>
            </section>
         </div>
         <section className="container-body">
            <h3>Why </h3>
         </section>
      </>
   );
};

export default HomePage;
