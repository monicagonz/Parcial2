export class Conferencias {

    id: number;
    name: string;
    starts: string;
    ends: string;
    venue: string;
    descripcion: string;
  
  
    public constructor(id: number, name: string,starts: string, ends: string, venue:string, descripcion: string) {
      this.id = id;
      this.name = name;
      this.starts = starts;
      this.ends = ends;
      this.venue = venue;
      this.descripcion =  descripcion;
    }
  }