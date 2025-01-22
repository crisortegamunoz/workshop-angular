import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ThronesapiService } from 'src/app/service/thronesapi.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  
  characters: Character[];

  constructor(private thronesService: ThronesapiService) {
    this.characters = [];
  }
  
  ngOnInit(): void {
    this.thronesService.load().subscribe(response => {
      debugger;
      if (response) {
        
      }
    });
    // codigo accion 1
    // codigo accion 2
    // codigo accion 3
    
  }

}
