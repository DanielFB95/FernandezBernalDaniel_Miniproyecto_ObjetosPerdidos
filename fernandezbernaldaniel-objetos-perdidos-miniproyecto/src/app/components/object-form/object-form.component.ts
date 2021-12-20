import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.interface';
import { Objeto } from 'src/app/models/objeto.interface';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.css']
})
export class ObjectFormComponent implements OnInit {

  categorias: Categoria[] = [
    {nombre: "categoria 1"},
    {nombre: "categoria 2"},
    {nombre: "categoria 3"},
    {nombre: "categoria 4"},
    {nombre: "categoria 5"},
  ];

  listForm = new FormGroup({
    categoria: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required)
  })

  constructor(private objetoService: ObjectService) { }

  ngOnInit(): void {
  }

  addObjeto(){
    const nuevoObjeto: any = {
    categoria : this.listForm.controls['categoria'].value,
    nombre : this.listForm.controls['nombre'].value,
    descripcion : this.listForm.controls['descripcion'].value
    }
    this.objetoService.addObject(nuevoObjeto).then(resp =>{  
    });
  }

}
