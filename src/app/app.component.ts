import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testube';

  constructor(snack : MatSnackBar) {

    if (document.fullscreen == false) {
      snack.open('Open in Fullscreen?','Yes').onAction().subscribe(()=>{
        location.href = 'https://youtube.com/redirect?q=https://testube.app';
        setTimeout(()=> { location.href = 'https://testube.app'}, 500)
      })
    }
  }

}
