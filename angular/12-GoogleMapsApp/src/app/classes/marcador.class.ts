export class Marcador {
    lat: number = 0;
    lng: number = 0;
    titulo: string = 'Sin titulo';
    descripcion: string = 'Sin descripción';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}