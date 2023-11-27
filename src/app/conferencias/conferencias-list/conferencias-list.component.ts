import { Component, OnInit } from '@angular/core';
import { ConferenciasService } from '../conferencias.service';
import { Conferencias } from '../conferencias';


@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {
 
  selectedConferencia!: Conferencias;
  selected: Boolean = false;
  conferences: any[] = [];

  

  conferencias: Array<Conferencias> = [];

  constructor(private conferenceService: ConferenciasService) { }

 getConferencias(): void {
   this.conferenceService.getConferencias().subscribe((conferencias) => {
     this.conferencias = conferencias;
   });
 }

 ngOnInit() {
   this.getConferencias();
 }

}

 


