import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Інтернет-магазин книг – UNIVERSE
          </p>
          <p className="text-justify mt-2">
          UNIVERSE — найбільший книжковий онлайн-магазин в Україні. Наша організація в мережі інтернет є масштабною книжковою екосистемою, що працює з більшістю видавництв України. Ми любимо і поважаємо книги, і цінуємо наших читачів, надаючи їм найкращі новинки. Ми хочемо, щоб кожен твір знайшов свого власника. Здійснюємо доставку не тільки по Києву, але і в інші регіони України.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
