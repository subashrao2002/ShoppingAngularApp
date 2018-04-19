import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() selectedDropDown = new EventEmitter<string>();
    onClick(selected: string){
        this.selectedDropDown.emit(selected);
    }
}