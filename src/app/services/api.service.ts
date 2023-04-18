import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  uRL: string = 'https://wo-fifa.azurewebsites.net/'

  constructor(private httpclient : HttpClient) { }

  postTeam(data : Equipo){
    return this.httpclient.post<Equipo>(`${this.uRL}equipos/crear`, data);
  }

  getTeam(){
    return this.httpclient.get<Equipo[]>(`${this.uRL}equipos/listar/0/100`);
  }
  
  updateTeam(data:Equipo, id:number){
  return this.httpclient.put<Equipo>(`${this.uRL}equipos/actualizar/`+id, data);
  }

  deleteTeam(id:number){
    return this.httpclient.delete<Equipo>(`${this.uRL}equipos/eliminar/`+id);
  }
}
