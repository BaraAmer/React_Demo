import React from 'react';
import ReactDOM from 'react-dom/client';
import './card.css'



class Cards extends React.Component {
    render(){
        return(
            <div className="container-cards">
            <h3>Tilile of card 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum distinctio at id eius
               explicabo recusandae labore iste, nesciunt numquam ratione est soluta necessitatibus et harum 
               repellendus laboriosam, assumenda dicta vero.</p>
            </div>
        )
    }
}


export default Cards;