import React, { Component } from "react";
import {format} from 'date-fns'; 

export default class Login extends Component
{
    constructor(props) 
    {
        let currentDate = format(new Date(), 'yyyy-MM-dd');
        super(props);
        let member = {
            memberList: [],
            name : "",
            prename : "",
            password : "",
            email : "",
            birth : "",
            signInDate : currentDate,
        }
        let connexionMember = {
            email : "",
            password : "",
        }
        this.state = {
          activeItem: member,
          connexionMember: connexionMember,
        };
    };

    handleChange = (e) => {
        let { name, value } = e.target;
    
        const activeItem = { ...this.state.activeItem, [name]: value };
    
        this.setState({ activeItem });
      };
    
    handleChangeConnexion = (e) => {
        let { name, value } = e.target;
    
        const connexionMember = { ...this.state.connexionMember, [name]: value };
    
        this.setState({ connexionMember });
    };

    treatmentConnectionData = (e) => {
        const { verify } = this.props;
        let password = verify(e);
        console.log(password+"  /  "+e.password);
        if(password == e.password)
        {
            console.log("Ok");
        }
        else 
        {
            console.log("Not ok");
        }
    }

    render()
    {
        const { onSave } = this.props;
        return(
            <div>
                <h1>Inscription</h1>
                <form>
                    <input type="text" value={this.state.activeItem.name} name="name" onChange={this.handleChange} 
                        placeholder="Nom"/>
                    <input type="text" value={this.state.activeItem.prename} name="prename" onChange={this.handleChange} 
                        placeholder="Prenom"/>
                    <input type="email" value={this.state.activeItem.email} name="email" onChange={this.handleChange} 
                        placeholder="Email"/>
                    <input type="password" value={this.state.activeItem.password} name="password" onChange={this.handleChange} 
                        placeholder="Mot de passe"/>
                    <input type="date" value={this.state.activeItem.birth} name="birth" onChange={this.handleChange} 
                        placeholder="anniversaire"/>
                </form>
                <button onClick={() => onSave(this.state.activeItem)}>Envoyer</button>

                <h1>Connexion</h1>
                <form>
                    <input type="email" value={this.state.connexionMember.email} name="email" onChange={this.handleChangeConnexion} 
                        placeholder="Email" required/>
                    <input type="password" value={this.state.connexionMember.password} name="password" onChange={this.handleChangeConnexion} 
                        placeholder="Mot de passe"/>
                </form>
                <button onClick={() => this.treatmentConnectionData(this.state.connexionMember)}>Envoyer</button>

            </div>
        )
    }
}