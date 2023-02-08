import { React } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import { connect } from "react-redux";
import configureStore from "../../../configureStore";

const Home = (store) => {

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default connect(null)(Home);
