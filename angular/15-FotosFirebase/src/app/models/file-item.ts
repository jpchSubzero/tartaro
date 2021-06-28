export class FileItem {
    public archivo: File = undefined!;
    public nombre: string = '';
    public url: string = '';
    public estaSubiendo: boolean = false;
    public progreso: number = 0;

    constructor(archivo:File) {
        this.archivo = archivo;
        this.nombre = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
    }
 
}