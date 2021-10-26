export interface Categorias {
    id:number;
    titulo:string;
    color:string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
        titulo:"Entretenimiento",
        color: "green"
    },
    {
        id:2,
        titulo:"Mundo",
        color:"blue"
    },
    {
        id:3,
        titulo:"Deporte",
        color:"darkred"
    },
    {
        id:4,
        titulo:"Economia",
        color:"purple"
    },
    {
        id:5,
        titulo:"Salud",
        color:"darkblue"
    },
    {
        id:6,
        titulo:"Tecnología",
        color:"red"
    }
]