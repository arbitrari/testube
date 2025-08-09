import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SourceManagerService } from './services/source-manager/source-manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'testube';
  // teslaUserAgentRegEx = /Tesla\/(?:develop-)*(?:feature-)*(?:.*fsd.*)*(?:factory-)*(?:terminal-)*([0-9]{4}.[0-9]{1,3}.?[0-9]{0,3}.?[0-9]{0,3}.?[0-9]{0,3})*-(.*)/g;
  isFullscreen: boolean;


  constructor(private snack: MatSnackBar, private sourceManager: SourceManagerService) {
    this.isFullscreen = false;
    if (document.referrer.startsWith('https://www.youtube.com/') == false //&&
        /* navigator.userAgent.match(this.teslaUserAgentRegEx) */) {

      const snackBarRef: MatSnackBarRef<any> = this.snack.open(`Open in Fullscreen?\n Click "GO TO SITE" on next page`,'Yes',
        {panelClass: 'fullscreen-snack'});
      
      // Handle Yes action
      snackBarRef.onAction().subscribe(()=>{
        const fullscreenUrl = this.sourceManager.getFullscreenUrl();
        location.href = `https://www.youtube.com/redirect?q=${encodeURIComponent(fullscreenUrl)}`;
      });

      // Add No option by creating a custom action
      snackBarRef.afterOpened().subscribe(() => {
        const snackBarElement = document.querySelector('.fullscreen-snack');
        if (snackBarElement) {
          const noButton = document.createElement('button');
          noButton.textContent = 'No';
          noButton.className = 'mat-mdc-snack-bar-action mat-mdc-button-base mat-mdc-button mat-unthemed mat-mdc-button-base';
          noButton.style.marginLeft = '8px';
          noButton.style.color = 'inherit';
          noButton.style.fontWeight = '500';
          noButton.style.fontSize = '14px';
          noButton.style.textTransform = 'uppercase';
          noButton.onclick = () => {
            snackBarRef.dismiss();
          };
          
          const actionContainer = snackBarElement.querySelector('.mat-mdc-snack-bar-actions');
          if (actionContainer) {
            actionContainer.appendChild(noButton);
          }
        }
      });
    } else /* if (navigator.userAgent.match(this.teslaUserAgentRegEx)) */ {
      this.isFullscreen = true;
    }
  }

}
