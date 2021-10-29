import React from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { fetchAdvertisements } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    advertisements :state.advertisements
  }
}
const mapDispatchToProps = (dispath) => ({
  fetchAdvertisements: () => {dispath(fetchAdvertisements())}
})


class Main extends React.Component {
  componentDidMount() {
    this.props.fetchAdvertisements();
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };

    const AboutPage = () => {
      return <About />;
    };

    const ContactPage = () => {
      return (
        <Contact
        />
      );
    };
    return (
      <div className="App">
        <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="/about" component={AboutPage} />
              <Redirect to="/home" />
            </Switch>
        <Footer /> 
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
