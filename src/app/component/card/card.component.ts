import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input() card: Card | null;
  @Output() loadDone: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.card = null;
  }

  ngOnInit(): void {
    //this.communication();
  }

  communication(): void {
    this.loadDone.emit('El componente cargo correctamente')
  }

}
