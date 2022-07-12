import {
  Component,
  OnInit
} from '@angular/core';
import {
  VERSION
} from '../../../environments/version';
import {Clipboard} from '@angular/cdk/clipboard';
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
  teslaUserAgentRegEx = /Tesla\/(?:develop-)*(?:feature-)*(?:.*fsd.*)*([0-9]{4}.[0-9]{1,3}.?[0-9]{0,3}.?[0-9]{0,3}.?[0-9]{0,3})*-(.*)/g;

  constructor(
    private clipboard: Clipboard
  ) {}

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
    console.log(this.isTesla(), this.userAgent, this.userAgent.match(this.teslaUserAgentRegEx))
  }

  isTesla(): boolean {
    if (this.userAgent.match(this.teslaUserAgentRegEx)) return true;
    return false;
  }

  getTeslaFirmware(): string {
    console.log(this.userAgent.match(this.teslaUserAgentRegEx))
    if (this.userAgent.includes('fsd-eap')) return 'FSD Beta';
    return this.teslaUserAgentRegEx.exec(this.userAgent)[1] ? this.teslaUserAgentRegEx.exec(this.userAgent)[1] : 'Unknown';
  }

  getViewport(width: boolean): string {
    if (width) return document.documentElement.clientWidth.toString();
    return document.documentElement.clientHeight.toString();
  }

  updateZoom() {
    document.documentElement.setAttribute('style', 'zoom: ' + this.zoom)
  }

  copyUserAgent() {
    this.clipboard.copy(this.userAgent);
  }
}