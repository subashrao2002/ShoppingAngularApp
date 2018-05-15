import * as firebase from 'firebase';
import { error } from 'util';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router){}

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(
            error => console.log(error)
        )
    }
    signIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(["/recipes"]);
                firebase.auth().currentUser.getIdToken().then(
                    (tkn: string) => this.token = tkn
                )
                console.log(response)
            }
        )
        .catch(
            err => console.log(err)
        )
    }

    getToken(){
        firebase.auth().currentUser.getIdToken().then(
            (tkn: string) => this.token = tkn
        )
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }
}