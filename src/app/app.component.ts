import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testube';
  teslaUserAgentRegEx = /Tesla\/(develop-)*(feature-)*(?:.*fsd.*)*([0-9]{4}.[0-9]{1,3}.?[0-9]{0,3}.?[0-9]{0,3}.?[0-9]{0,3})*-(.*)/g;
  isFullscreen : boolean;
  theaterZoomLevel : number = 0.64; // make size 64% of original size to account for ViewPort oddness in Tesla Theater Mode.


  constructor(snack : MatSnackBar) {
    this.isFullscreen = false;

    if (document.referrer.startsWith('https://www.youtube.com/') == false &&
        navigator.userAgent.match(this.teslaUserAgentRegEx)) {

      snack.open(`Open in Fullscreen?\nClick "GO TO SITE" on next page`,'Yes',
        {panelClass: 'fullscreen-snack'})
        .onAction()
        .subscribe(()=>{
          location.href = 'https://www.youtube.com/redirect?q=https://testube.app';
        })
    } else if (navigator.userAgent.match(this.teslaUserAgentRegEx)) {
      this.isFullscreen = true;
      document.documentElement.setAttribute('style','zoom: '+ this.theaterZoomLevel);
    }
  }

}
