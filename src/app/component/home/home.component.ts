import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  cardList: Card[];

  constructor(private route: Router) {
    this.cardList = [];
  }

  ngOnInit(): void {
  
    this.cardList = this.loadCards();
  }

  onLoadDone(msg: string): void {
    alert(msg)
  }

  onClickButton(): void {
    this.route.navigateByUrl('/character');
  }

  private loadCards(): Card[] {
    return [
      {
        title: 'Forja tu Espada de Código con Angular',
        description: 'Cada línea de código que escribes en Angular es como un golpe de espada en la forja. Con cada nuevo componente, directiva o servicio que dominas, te acercas más a convertirte en un verdadero maestro del código.'
      },
      {
        title: 'El Invierno se Acerca (y con él, la demanda de desarrolladores Angular)',
        description: 'En el cambiante mundo del desarrollo web, la demanda de expertos en Angular se intensifica, como la larga noche que se avecina. Aprende Angular y conviértete en un valioso aliado en la batalla por construir aplicaciones modernas y eficientes.'
      },
      {
        title: 'prueba ',
        description: 'descripcion prueba'
      }
    ]
  }

  characters:any = [
    {
      "id": 0,
      "firstName": "Daenerys",
      "lastName": "Targaryen",
      "fullName": "Daenerys Targaryen",
      "title": "Mother of Dragons",
      "family": "House Targaryen",
      "image": "daenerys.jpg",
      "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
    },
    {
        "id": 2,
        "firstName": "Jon",
        "lastName": "Snow",
        "fullName": "Jon Snow",
        "title": "King of the North",
        "family": "House Stark",
        "image": "jon-snow.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
    }
  ]
}

