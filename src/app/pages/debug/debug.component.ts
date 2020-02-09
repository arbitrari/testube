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
  teslaUserAgentRegEx = /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/g;

  constructor() {}

  ngOnInit() {
    this.buildDate = VERSION.date;
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


  enableController() {
    let gg = window.navigator.getGamepads;
    window.navigator.getGamepads = function () {
      let g = gg.apply(window.navigator);
      if (g[0] !== null) {
        let g0 = {};
        for (var property in g[0]) {
          g0[property] = g[0][property]
        };
        g0['mapping'] = "standard";
        return [g0, null, null, null]
      };
      return g;
    }
    
  }

}