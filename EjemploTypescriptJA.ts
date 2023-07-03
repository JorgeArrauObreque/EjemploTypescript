interface IPersona{
    ToString():string;
}


class persona implements IPersona{
    private rut:string;
    private nombres:string;
    private apellidos:string;
    private fecha_nacimiento:Date;
    private direccion:string;
    private email:string;
    private telefono:Number;
    

    constructor ( rut:string, nombre:string, apellidos:string, fecha_nacimiento:Date, direccion:string, email:string, telefono:Number)
    {
         this.rut =rut;
         this.nombres=nombre;
         this.apellidos=apellidos;
         this.fecha_nacimiento=fecha_nacimiento;
         this.direccion=direccion;
         this.email=email;
         this.telefono=telefono;
    }
    public GetRut():string{
        return this.rut;
    }
    public SetRut(rut:string):void{
        this.rut  = rut;
    }
    public GetNombre():string{
        return this.nombres;
    }
    public SetNombre(nombre:string):void{
        this.nombres  = nombre;
    }
    public GetApellidos():string{
        return this.apellidos;
    }
    public SetApellidos(apellidos:string):void{
        this.apellidos  = apellidos;
    }
    public GetFechaNacimiento():Date{
        return this.fecha_nacimiento;
    }
    public SetFechaNacimiento(fecha_nacimiento:Date):void{
        this.fecha_nacimiento  = fecha_nacimiento;
    }
    public Getdireccion():string{
        return this.direccion;
    }
    public SetDireccion(direccion:string):void{
        this.direccion  = direccion;
    }
    public Getemail():string{
        return this.email;
    }
    public Setemail(email:string):void{
        this.email  = email;
    }
    public GetTelefono():Number{
        return this.telefono;
    }
    public SetTelefono(telefono:Number):void{
        this.telefono  = telefono;
    }
    public ToString(): string {
        return `nombre completo: ${this.nombres} ${this.apellidos}`;
    }
}
class hospital {
    private nombre_hospital:string;
    private direccion_hospital:string;
    constructor(nombre_hospital:string,direccion_hospital:string){
        this.nombre_hospital = nombre_hospital;
        this.direccion_hospital = direccion_hospital;
    }
    public GetNombreHospital():string{
        return this.nombre_hospital;
    }
    public SetNombreHospital(nombre_hospital:string):void{
        this.nombre_hospital = nombre_hospital;
    }
    public GetDireccionHospital():string{
        return this.direccion_hospital;
    }
    public SetDireccionHospital(direccion_hospital:string):void{
   
        this.direccion_hospital = direccion_hospital;
    }
    
}

class Medico extends persona{
    private especialidad:string;
    private hospital:hospital;


    constructor( rut:string, nombre:string, apellidos:string, fecha_nacimiento:Date, direccion:string, email:string, telefono:Number,especialidad:string,hospital:hospital){
        super(rut,nombre,apellidos,fecha_nacimiento,direccion,email,telefono);
        this.especialidad = especialidad;
        this.hospital = hospital;
    }
}

class enfermera extends persona{
    constructor( rut:string, nombre:string, apellidos:string, fecha_nacimiento:Date, direccion:string, email:string, telefono:Number){
        super(rut,nombre,apellidos,fecha_nacimiento,direccion,email,telefono);
    }
}




// Crear una instancia de Medico
const h = new hospital("Hospital ABC", "123 Main St");
const m = new Medico("12345678-9","Dr. Smith", "Johnson", new Date(1980, 0, 1), "456 Elm St", "dr.smith@example.com", 987654321, "Cardiología", h);

console.log(m.GetNombre());

console.log(m.ToString());


//creado por jorge arrau