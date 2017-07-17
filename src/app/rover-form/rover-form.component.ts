import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MarsRoverAPIPhotos } from '../mars-rover-api-photos.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: [ './rover-form.component.css' ],
  providers: [ MarsRoverAPIPhotos, PhotoService ]
})

export class RoverFormComponent {
  photos: any[]=null;
  constructor(private router: Router, private marsRoverPhotos: MarsRoverAPIPhotos) { }
  getRoverImages(date: string, camera: string) {
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
        this.photos = response.json();
    });
  }
  saveRoverImages(date, camera){
    this.marsRoverPhotos.saveImages(date, camera);
    alert("The images from " + date + "taken by the " + camera + " camera have been saved to the database.")
  }
}
