import { localizedString } from "@angular/compiler/src/output/output_ast";

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
    { 
        id: 1,
        idCategoria:1,
        titulo:"El juego del calamar se convierte en la serie más visitada de Netflix",
        autor:"Adriana Marco",
        fecha:Date().toString(),
        imagen:"assets/imagen1.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    { 
        id: 2,
        idCategoria:2,
        titulo:"Murió el rinoceronte más viejo",
        autor:"Alex Blanco",
        fecha:Date().toString(),
        imagen:"assets/imagen2.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id:3,
        idCategoria:3,
        titulo:"Ciclismo - El regreso de Chris Froome",
        autor:"Jorge Luis Arana",
        fecha:Date().toString(),
        imagen:"assets/imagen3.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id:4,
        idCategoria:4,
        titulo:"Criptomonedas - Shiba inu alcanza precio récord",
        autor:"Virtudes Alves",
        fecha:Date().toString(),
        imagen:"assets/imagen7.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id:5,
        idCategoria:5,
        titulo:"Coronavirus - La Región Metropolitana vuelve a fase 3",
        autor:"Alina Casal",
        fecha:Date().toString(),
        imagen:"assets/imagen8.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id:6,
        idCategoria:6,
        titulo:"Climático - Tecnología contra el cambio climático",
        autor:"Sara Rivera",
        fecha:Date().toString(),
        imagen:"assets/imagen9.jpg",
        texto: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat vehicula..."
    },
    {
        id: 7,
        idCategoria: 0,
        titulo: "Noticia",
        autor: "Mario Palomares",
        fecha: Date().toString(),
        imagen:"assets/imagen4.jpg",
        texto: "Sed vitae ligula eu sapien mattis bibendum. Pellentesque sed urna ac elit volutpat faucibus a in est. Vestibulum mi tortor, egestas quis urna ac, aliquam accumsan ante. Phasellus sed libero eget arcu vehicula consectetur. Pellentesque et dolor elementum enim porta sodales..."
    },
    {
        id: 8,
        idCategoria: 0,
        titulo: "Noticia",
        autor: "Tomas Martín",
        fecha: Date().toString(),
        imagen:"assets/imagen5.jpg",
        texto: "Sed vitae ligula eu sapien mattis bibendum. Pellentesque sed urna ac elit volutpat faucibus a in est. Vestibulum mi tortor, egestas quis urna ac, aliquam accumsan ante. Phasellus sed libero eget arcu vehicula consectetur. Pellentesque et dolor elementum enim porta sodales..."
    },
    {
        id: 9,
        idCategoria: 0,
        titulo: "Noticia",
        autor: "Mamadou Molina",
        fecha: Date().toString(),
        imagen:"assets/imagen6.jpg",
        texto: "Sed vitae ligula eu sapien mattis bibendum. Pellentesque sed urna ac elit volutpat faucibus a in est. Vestibulum mi tortor, egestas quis urna ac, aliquam accumsan ante. Phasellus sed libero eget arcu vehicula consectetur. Pellentesque et dolor elementum enim porta sodales..."
    },
    {
        id: 10,
        idCategoria: 0,
        titulo: "Noticia",
        autor: "Jose David Zafra",
        fecha: Date().toString(),
        imagen:"assets/imagen4.jpg",
        texto: "Sed vitae ligula eu sapien mattis bibendum. Pellentesque sed urna ac elit volutpat faucibus a in est. Vestibulum mi tortor, egestas quis urna ac, aliquam accumsan ante. Phasellus sed libero eget arcu vehicula consectetur. Pellentesque et dolor elementum enim porta sodales..."
    }
];