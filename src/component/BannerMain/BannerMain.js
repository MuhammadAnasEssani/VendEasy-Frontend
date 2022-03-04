import React, { useEffect, useState } from "react";
import { getOffers } from "../../config/api/offer";
import Notification from "../../component/notification/Notification";

const BannerMain = () => {
  const [offers, setOffers] = useState([]);

  const getOffer = async () => {
    try {
      const res = await getOffers();
      if (res.status == 200) {
        setOffers(res.data.offers);
        // console.log(offers)
        return;
      } else {
        Notification("Offers", "Something went wrong", "Error");
        return;
      }
    } catch (err) {
      Notification("Offers", "Something went wrong", "Error");
    }
  };

  useEffect(() => {
    getOffer();
  }, []);
  console.log(offers);

  return (
    <div>
      <section class="small-banner section">
        <div class="container-fluid">
          <div class="row">
            {offers.length > 0
              ? offers.map((offer) => {
                  return (
                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="single-banner">
                        <img
                          src={offer.avatar}
                          alt="#"
                        />
                        <div class="content">
                          <p>{offer.title}</p>
                          <h3>
							  {offer.description}
                            {/* Summer travel <br /> collection */}
                          </h3>
                          <a href="#">Discover Now</a>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}

            {/* <div class="col-lg-4 col-md-6 col-12">
              <div class="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div class="content">
                  <p>Bag Collectons</p>
                  <h3>
                    Awesome Bag <br /> 2020
                  </h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div> */}
            {/* <div class="col-lg-4 col-12">
              <div class="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div class="content">
                  <p>Flash Sale</p>
                  <h3>
                    Mid Season <br /> Up to <span>40%</span> Off
                  </h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerMain;
