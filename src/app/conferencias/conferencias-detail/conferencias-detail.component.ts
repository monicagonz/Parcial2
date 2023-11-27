import { Component, Input, OnInit } from '@angular/core';
import { ConferenciasService } from '../conferencias.service';
import { ConferenciasDetail } from '../conferenciasDetail';
import { Conferencias } from '../conferencias';

@Component({
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {

  @Input() conferenciasDetail!: Conferencias;

 constructor() { }

 ngOnInit() {
 }

}
