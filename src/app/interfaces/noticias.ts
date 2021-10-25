export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaNoticias:Array<Noticias>=[
    { id: 1,
     idCategoria:1,
     titulo:"Noticia 1",
     autor:"Autor noticia 1",
     fecha:Date().toString(),
     imagen:"assets/imagen1.jpg",
     texto: "texto de la noticia 1"
    },
    { id: 2,
        idCategoria:2,
        titulo:"Noticia 2",
        autor:"Autor noticia 2",
        fecha:Date().toString(),
        imagen:"assets/imagen2.jpg",
        texto: "texto de la noticia 2"
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Noticia 3",
        autor:"Autor noticia 3",
        fecha:Date().toString(),
        imagen:"assets/imagen3.jpg",
        texto: "texto de la noticia 3"
    }
];
