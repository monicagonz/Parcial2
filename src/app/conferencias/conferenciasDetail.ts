import { Conferencias } from "./conferencias";


export class ConferenciasDetail extends Conferencias{

    constructor(id: number, name: string, starts: string, ends: string, venue:string, descripcion:string ) {
        super(id, name,starts,ends,venue,descripcion);
        
      }

}
 