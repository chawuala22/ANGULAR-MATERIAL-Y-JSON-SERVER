import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
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
      nombre: ['', Validators.required],
      estadio: ['', Validators.required],
      sitioWeb: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      fundacion: ['', Validators.required],
      entrenador: ['', Validators.required],
      capacidad: ['', Validators.required],
      valor: ['', Validators.required],
    });
    console.log(this.editData);

    if (this.editData) {
      this.actionBtn = 'Actualizar';
      this.formADD.controls['nombre'].setValue(this.editData.nombre);
      this.formADD.controls['estadio'].setValue(this.editData.estadio);
      this.formADD.controls['sitioWeb'].setValue(this.editData.sitioWeb);
      this.formADD.controls['fundacion'].setValue(this.editData.fundacion);
      this.formADD.controls['entrenador'].setValue(this.editData.entrenador);
      this.formADD.controls['capacidad'].setValue(this.editData.capacidad);
      this.formADD.controls['valor'].setValue(this.editData.valor);
    }
  }
  add() {
    if (!this.editData) {
      if (this.formADD.valid) {
        this.api.postTeam(this.formADD.value).subscribe({
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
    this.api.updateTeam(this.formADD.value, this.editData.id).subscribe({
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
