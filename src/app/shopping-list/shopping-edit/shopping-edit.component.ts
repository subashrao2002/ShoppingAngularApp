import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('enteredName') enteredName: ElementRef;
  @ViewChild('enteredAmount') enteredAmount: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  oningredientAdd(){
    const name = this.enteredName.nativeElement.value;
    const amount = this.enteredAmount.nativeElement.value;
    this.newIngredientAdded.emit(new Ingredient(name,amount));
  }
}
