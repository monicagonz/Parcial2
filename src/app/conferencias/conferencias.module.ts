import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasComponent } from './conferencias.component';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';
import { ConferenciasService } from './conferencias.service';
import { ConferenciasDetailComponent } from './conferencias-detail/conferencias-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciasListComponent],
  declarations: [ConferenciasListComponent, ConferenciasDetailComponent]
})
export class ConferenciasModule { }
