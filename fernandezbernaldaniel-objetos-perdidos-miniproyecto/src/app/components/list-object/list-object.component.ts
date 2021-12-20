import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Objeto } from 'src/app/models/objeto.interface';
import { ObjectService } from 'src/app/services/object.service';

@Component({
  selector: 'app-list-object',
  templateUrl: './list-object.component.html',
  styleUrls: ['./list-object.component.css']
})
export class ListObjectComponent implements OnInit {

  listaObjetos: Objeto[] = [];

  constructor(private objetoService: ObjectService) {}

  ngOnInit(): void {

    this.objetoService.getObjetos().subscribe(resp => {
      this.listaObjetos = resp;
    });
  }

}
