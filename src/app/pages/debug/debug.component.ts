import {
  Component,
  OnInit
} from '@angular/core';
import {
  VERSION
} from '../../../environments/version';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  buildDate: string;
  buildHash: string;
  userAgent: string;
  zoom: number;
  maxZoom: number;
  minZoom: number;
  teslaUserAgentRegEx = /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.*)/g;

  constructor() {}

  ngOnInit() {
    this.buildDate = new Date(VERSION.date).toLocaleString('en-US',{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });;
    this.buildHash = VERSION.hash;
    this.userAgent = window.navigator.userAgent;
    this.maxZoom = 2.0;
    this.minZoom = 0;
    if (document.documentElement.getAttribute('style')) {
      this.zoom = Number(document.documentElement.getAttribute('style').split(': ')[1]);
    } else
      this.zoom = 1;
  }

  isTesla(): boolean {
    if (this.userAgent.match(this.teslaUserAgentRegEx)) return true;
    return false;
  }

  getTeslaFirmware(): string {
    console.log(this.userAgent.match(this.teslaUserAgentRegEx))
    return this.userAgent.match(this.teslaUserAgentRegEx)[0].split('/')[1];
  }

  getViewport(width: boolean): string {
    if (width) return document.documentElement.clientWidth.toString();
    return document.documentElement.clientHeight.toString();
  }

  updateZoom() {
    document.documentElement.setAttribute('style', 'zoom: ' + this.zoom)
  }
}