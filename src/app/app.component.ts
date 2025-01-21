import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
