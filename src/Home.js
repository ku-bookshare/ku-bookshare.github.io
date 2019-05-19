import React from 'react'
import donate from './assets/book.svg';
import books from './assets/books.svg';
import mapLogo from './assets/map.svg';
import take from './assets/take.png';
import Button from './components/Button.js';
import Status from './components/Status.js';
import './App.css';

const Home = () => {
    // changePage = () => {
    //     this.setState(prevState => ({ cover: !prevState.cover }));
    //     console.log(this.state.cover);
    //     //<div className={`body ${this.state.cover ? "" : "page-is-changing"}`}>
    //   }

    return(
      <div className="home-body">
            <div className="home-row-medium">
              <div className="home-colm medium">
                <Status data="21" message="Books Have Been Donated" ></Status>
              </div>
              <div className="home-colm medium">
                <Status data="5" message="Books Found a New Owner" ></Status>
              </div>           
            </div>

            <div className="home-row">
              <Button direct="https://forms.gle/CLXSCvur6cMfTTJ86" to="/donate" name="Donate a Book" image={donate}></Button>
            </div>
            <div className="home-row">
              <Button direct="https://forms.gle/https://docs.google.com/spreadsheets/d/1AZ0cbfKcZh0XKCRr3bB_Qlp3bAYKcUWM01ypYyec_7c/edit?usp=sharing" 
              to="/books" name="Books in Shelves" image={books}></Button>
            </div>
            <div className="home-row">
              <Button direct="https://forms.gle/3G8LYrix7ehgpJnj9" to="/borrow" name="Borrow a Book from Shelf" image={take}></Button>
            </div>
            <div className="home-row mobile">
              <Button to="/locations" name="Where are the Shelves ?" image={mapLogo}></Button>
            </div>
          </div>
    )
}

export default Home;