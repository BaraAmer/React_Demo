import React from 'react';
import ReactDOM from 'react-dom';
import './Buttons.css'
import Cards from './Card.js'



class buttons extends React.Component {

    render(){
        return(
        <div>  
            <div className="container-buttons">
                <button onClick={()=>{
                const ele = <Cards />
                 ReactDOM.render(ele,document.getElementById('cont2'));

                  
                }}>Add</button>
                <button onClick={()=>{
                    console.log("Deleted");
                }}>Delete</button>
            </div>

           
               
        </div>          
        )
    }
}


export default buttons;