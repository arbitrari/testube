import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testube';
  teslaUserAgentRegEx = /Tesla\/([0-9]{4}.[0-9]{2}.[0-9]{2}.[0-9]{1,2})-(.{7})/g;



  constructor(snack : MatSnackBar) {
    if (document.referrer != 'https://www.youtube.com/' &&
        navigator.userAgent.match(this.teslaUserAgentRegEx)) {

      snack.open(`Open in Fullscreen?\nClick "GO TO SITE" on next page`,'Yes',
        {panelClass: 'fullscreen-snack'})
        .onAction()
        .subscribe(()=>{
          location.href = 'https://youtube.com/redirect?q=https://testube.app';
        })
    }
  }

}
