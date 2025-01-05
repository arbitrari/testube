import {
  Component,
  OnInit
} from '@angular/core';
import {
  VERSION
} from '../../../environments/version';
import * as Sentry from '@sentry/angular';
@Component({
    selector: 'app-debug',
    templateUrl: './debug.component.html',
    styleUrls: ['./debug.component.scss'],
    standalone: false
})
export class DebugComponent implements OnInit {
  buildDate: string;
  buildHash: string;
  userAgent: string;
  zoom: number;
  maxZoom: number;
  minZoom: number;
  // teslaUserAgentRegEx = /Tesla\/(?:develop-)*(?:feature-)*(?:.*fsd.*)*(?:factory-)*(?:terminal-)*([0-9]{4}.[0-9]{1,3}.?[0-9]{0,3}.?[0-9]{0,3}.?[0-9]{0,3})*-(.*)/g;

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
    // console.log(this.isTesla(), this.userAgent, this.userAgent.match(this.teslaUserAgentRegEx));
  }

  // isTesla(): boolean {
  //   if (this.userAgent.match(this.teslaUserAgentRegEx)) return true;
  //   return false;
  // }

  // getTeslaFirmware(): string {
  //   if (this.userAgent.includes('fsd-eap')) return 'FSD Beta';
  //   let exec = this.teslaUserAgentRegEx.exec(this.userAgent);
  //   return exec[1] ? exec[1] : 'Unknown';
  // }

  getViewport(width: boolean): string {
    if (width) return document.documentElement.clientWidth.toString();
    return document.documentElement.clientHeight.toString();
  }

  // reportDetectionIssue() {
  //   Sentry.captureException(new Error("Failed to Identify Tesla UserAgent"), {
  //     extra: {
  //       'userAgent': this.userAgent
  //     }
  //   })
  // }
}