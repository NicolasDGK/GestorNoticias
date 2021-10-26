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
     titulo:"El juego del calamar se convierte en la serie más visitada de Netflix",
     autor:"Autor noticia 1",
     fecha:Date().toString(),
     imagen:"assets/imagen1.jpg",
     texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    { id: 2,
        idCategoria:2,
        titulo:"Murió el rinoceronte más viejo",
        autor:"Autor noticia 2",
        fecha:Date().toString(),
        imagen:"assets/imagen2.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Ciclismo - El regreso de Chris Froome",
        autor:"Autor noticia 3",
        fecha:Date().toString(),
        imagen:"assets/imagen3.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    }
];
