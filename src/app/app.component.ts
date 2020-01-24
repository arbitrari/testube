import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testube';

  constructor(snack : MatSnackBar,
              loc   : Location) {
    // console.log(document.referrer);
    if (document.referrer != 'https://www.youtube.com/') {
      snack.open(`Open in Fullscreen?\nClick "GO TO SITE" on next page`,'Yes',{panelClass: 'fullscreen-snack'}).onAction().subscribe(()=>{
        location.href = 'https://youtube.com/redirect?q=https://testube.app';
        // setTimeout(()=> { location.href = 'https://testube.app'}, 500)
      })
    }
  }

}
