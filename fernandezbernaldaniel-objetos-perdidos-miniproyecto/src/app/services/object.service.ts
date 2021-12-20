import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Objeto } from '../models/objeto.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private firestore: AngularFirestore) { }

  addObject(objeto: Objeto){
    let userId = localStorage.getItem('uid');
    console.log(objeto);
    return this.firestore.collection(`objetos`).add({
      nombre: objeto.nombre,
      categoria: objeto.categoria,
      descripcion: objeto.descripcion,
      // localizacion: objeto.localizacion,
      uid: localStorage.getItem('uid')
    });
  }

  getObjetos(): Observable<Objeto[]>{
    return this.firestore.collection<Objeto>('objetos').valueChanges();
  }
}
