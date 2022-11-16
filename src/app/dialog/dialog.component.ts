import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formADD !: FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formADD = this.formBuilder.group({
      name :['', Validators.required],
      lastname:['', Validators.required],
      product: ['', Validators.required]
    })
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  add(){
    console.log(this.formADD.value);
    
  }
}
