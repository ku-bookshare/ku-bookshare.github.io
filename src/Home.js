import React from 'react'
import time from './assets/time.png';
import question from './assets/question.png';
import image from './assets/image.png';
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
        <div className="Home">
            <div className="home-row-medium">
              <div className="home-colm medium">
                <Status message="Books Have Been Donated" ></Status>
              </div>
              <div className="home-colm medium">
                <Status message="Books Found a New Owner" ></Status>
              </div>           
            </div>

            <div className="home-row">
              <Button to="/donate" name="Donate a Book" image={donate}></Button>
            </div>
            <div className="home-row">
              <Button to="/books" name="Books in Shelves" image={books}></Button>
            </div>
            <div className="home-row">
              <Button to="/borrow" name="I Took a Book from Shelf" image={take}></Button>
            </div>
            <div className="home-row mobile">
              <Button to="/locations" name="Where are the Shelves ?" image={mapLogo}></Button>
            </div>
            
          </div>
    )
}

export default Home;