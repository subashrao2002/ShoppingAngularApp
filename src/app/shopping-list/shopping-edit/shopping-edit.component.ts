import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('enteredName') enteredName: ElementRef;
  // @ViewChild('enteredAmount') enteredAmount: ElementRef;
  // @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editMode: boolean = false; // dont know what is this for ??
  editedIngredientIndex: number;
  editedIngredient: Ingredient;
  @ViewChild('f') slform: NgForm;

  constructor(private shoppinglistSvc: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistSvc.editedIngredient.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        //get ingredient from svc 
        this.editedIngredient = this.shoppinglistSvc.getIngredientbyId(index);
        this.slform.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // oningredientAdd(){
  //   const name = this.enteredName.nativeElement.value;
  //   const amount = this.enteredAmount.nativeElement.value;
  //   // this.newIngredientAdded.emit(new Ingredient(name,amount));
  //   this.shoppinglistSvc.addIngredient(new Ingredient(name,amount));
  // }

  onSubmit(form: NgForm) {
    const updatedIngredient: Ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppinglistSvc.updateIngredient(this.editedIngredientIndex, updatedIngredient);
    } else {
      this.shoppinglistSvc.addIngredient(updatedIngredient);
    }
    this.editMode = false;
    this.slform.reset();
  }
  onClear(){
    this.editMode = false;
    this.slform.reset();
  }

  onDelete(){
    this.shoppinglistSvc.deleteIngredient(this.editedIngredientIndex);
    this.editMode = false;
    this.slform.reset();
  }
}
