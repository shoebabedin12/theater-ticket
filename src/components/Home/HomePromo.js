import React from "react";
import HomePromoData from "../../assets/data/HomePromoData";

const HomePromo = () => {
  return (
    <>
      <div className="home_promo_area">
        <div className="container">
          <div className="row">
            {HomePromoData.map(item =>
               <div key={item.id} className="col-4">
               <div className="home_single_promo oflow-hd">
                 <div className="home_single_promo_img oflow-hd">
                   <img
                     src={require(`./../../assets/images/${item.img}`)}
                     alt="img"
                   />
                 </div>
                 <div className="home_single_promo_details oflow-hd">
                   <h2>{item.title}</h2>
                   <p>
                     {item.desc}
                   </p>
                 </div>
               </div>
             </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePromo;
