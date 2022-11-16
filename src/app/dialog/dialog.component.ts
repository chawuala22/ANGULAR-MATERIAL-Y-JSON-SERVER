import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  formADD!: FormGroup;
  actionBtn: string = 'Enviar';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.formADD = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      product: ['', Validators.required],
      ndocu: ['', Validators.required],
    });
    console.log(this.editData);

    if (this.editData) {
      this.actionBtn = 'Actualizar';
      this.formADD.controls['name'].setValue(this.editData.name);
      this.formADD.controls['lastname'].setValue(this.editData.lastname);
      this.formADD.controls['product'].setValue(this.editData.product);
      this.formADD.controls['ndocu'].setValue(this.editData.ndocu);
    }
  }
  foods: Food[] = [
    { value: 'Salchipapa', viewValue: 'Salchipapa' },
    { value: 'Pizza', viewValue: 'Pizza' },
    { value: 'Tacos', viewValue: 'Tacos' },
  ];

  add() {
    if (!this.editData) {
      if (this.formADD.valid) {
        this.api.postProduct(this.formADD.value).subscribe({
          next: (res) => {
            Swal.fire('Agregado con exito');
            this.formADD.reset();
            this.dialogRef.close();
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          },
          error: () => {
            alert('Error, no se agregó');
          },
        });
      }
    } else {
      this.actualizar();
    }
  }
  actualizar() {
    this.api.updateProduct(this.formADD.value, this.editData.id).subscribe({
      next: (res) => {
        Swal.fire('Editado con exito');
        this.formADD.reset();
        this.dialogRef.close('update');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error: () => {
        alert('Error, no se agregó');
      },
    });
  }
}
