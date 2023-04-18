import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import Swal from 'sweetalert2';
import { Equipo } from '../models/equipo';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'estadio',
    'sitioWeb',
    'nacionalidad',
    'fundacion',
    'entrenador',
    'capacidad',
    'valor',
    'action',
  ];
  dataSource!: MatTableDataSource<Equipo>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.allproducts();
  }

  editProduct(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row,
    });
  }
  deleteProduct(id: number) {
    this.api.deleteTeam(id).subscribe({
      next: (res) => {
        Swal.fire('Eliminado con exito');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error: () => {
        Swal.fire('Eliminado sin exito');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  allproducts() {
    this.api.getTeam().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.content);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (e) => {
        alert('no hay productos');
      },
    });
  }
}
