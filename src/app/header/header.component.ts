import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { error } from "util";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    // @Output() selectedDropDown = new EventEmitter<string>();
    // onClick(selected: string){
    //     this.selectedDropDown.emit(selected);
    // }
    constructor(private dsSvc: DataStorageService,private authSvc: AuthService){}

    onSave(){
        this.dsSvc.storeRecipes().subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    onFetch(){
        this.dsSvc.fetchRecipes();
    }

    onLogOut(){
        this.authSvc.logOut();
    }
}