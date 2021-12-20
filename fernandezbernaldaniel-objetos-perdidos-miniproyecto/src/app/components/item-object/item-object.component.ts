import { Component, Input, OnInit } from '@angular/core';
import { Objeto } from 'src/app/models/objeto.interface';

@Component({
  selector: 'app-item-object',
  templateUrl: './item-object.component.html',
  styleUrls: ['./item-object.component.css']
})
export class ItemObjectComponent implements OnInit {

  @Input() objetoInput!: Objeto;

  constructor() { }

  ngOnInit(): void {
  }

}
