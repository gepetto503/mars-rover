import { Component, Input } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: [ './photos-list.component.css' ],
  providers: [ PhotoService ]
})

export class PhotosListComponent {

  @Input() childPhotos;//this is an array of photos from the service, fed to this child component by the rover component

  constructor(private photoService: PhotoService) { }


  saveImage(imgURL: string, camera: string, date: string) {
    let newPhoto: Photo = new Photo(imgURL, camera, date);
    this.photoService.addPhoto(newPhoto);
    alert('This image has been added to your list of saved images.');
  }
}
