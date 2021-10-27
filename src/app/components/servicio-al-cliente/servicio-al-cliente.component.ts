import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicio-al-cliente',
  templateUrl: './servicio-al-cliente.component.html',
  styleUrls: ['./servicio-al-cliente.component.scss']
})
export class ServicioAlClienteComponent implements OnInit {

  formulario:FormGroup;
  
  Dirigido: any = ['Contenidos', 'Publicidad', 'Sugerencias', 'Suscripciones digitales'];

  constructor(public Form:FormBuilder) { 
    this.formulario = Form.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      tipo: ['', [Validators.required]],
      texto: ['', [Validators.required, Validators.maxLength(500)]]
    })
    
  }
  
  changeDirigido(e:any) {
    this.formulario.get('tipo')?.setValue(e.target.value, {
      onlySelf: true
    })
  }
  
  ngOnInit(): void {
  }

}
