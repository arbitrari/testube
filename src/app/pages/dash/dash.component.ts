import { Component, OnInit } from '@angular/core';
import { CardProvider, CategoryType } from 'src/app/elements/card/card.component';

export interface Category {
  title : string;
  providers : CardProvider[];
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  categories : Category[];

  constructor() { }

  ngOnInit() {
    this.getDefault();
  }

  getDefault() {
    this.categories = [
      {
        title: 'Streaming',
        providers : [
          {
            name: 'YouTube',
            url: 'https://youtube.com',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
            category: CategoryType.Streaming,
          },
          {
            name: 'Netflix',
            url: 'https://netflix.com',
            color: '#121212',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Hulu',
            url: 'https://hulu.com',
            color: '#121212',
            logo: 'https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Amazon Prime Video',
            url: 'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011',
            color: '#232f3e',
            logo: 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Disney+',
            url: 'https://disneyplus.com/',
            color: '#040814',
            logo: 'https://prod-static.disney-plus.net/builds/f8e127d5a44c027d327ef5ab0941255ed9d6f8c6_1579286552526/images/logo.svg',
            category: CategoryType.Streaming,
          },
          {
            name: 'HBO Go',
            url: 'https://hbogo.com/',
            color: '#121212',
            logo: 'https://logodix.com/logo/470321.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'HBO Now',
            url: 'https://play.hbonow.com',
            color: '#121212',
            logo: 'https://www.logolynx.com/images/logolynx/4c/4cbb96f6ec860f96ab3351a9a1612d5a.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'HBO Max',
            url: 'https://hbomax.com/',
            color: '#0d062f',
            logo: 'https://www.hbomax.com/img/hbo-max-h-w-l.svg',
            category: CategoryType.Streaming,
          },
          {
            name: 'Apple TV+',
            url: 'https://tv.apple.com/',
            color: '#121212',
            logo: 'https://tv.apple.com/assets/brands/Apple_TV_Plus_logo_white-fa7126f2bf5269837b484153a88493f8.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Peacock',
            url: 'https://www.peacocktv.com/watch/home',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NBCUniversal_Peacock_Logo.svg/250px-NBCUniversal_Peacock_Logo.svg.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Crackle',
            url: 'https://crackle.com/',
            color: '#121212',
            logo: 'https://www.crackle.com/config/avod/images/logo1x.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Curiosity Stream',
            url: 'https://curiositystream.com/',
            color: '#161e37',
            logo: 'https://theme.zdassets.com/theme_assets/662900/1399663ce17aaccbcbe101c65aaedfedaa9e856a.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Crunchyroll',
            url: 'https://crunchyroll.com/',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Crunchyroll_Logo.svg/1200px-Crunchyroll_Logo.svg.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'VRV',
            url: 'https://vrv.co/',
            color: '#1b1a26',
            logo: 'https://theme.zdassets.com/theme_assets/629753/f5aa6b8929112b4d87e9fd63ee2a074f0f93a4e7.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'funimation',
            url: 'https://funimation.com/shows',
            color: '#410099',
            logo: 'https://ikkicon.com/wp-content/uploads/2017/04/funimation-logo-WHITE.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'Shudder',
            url: 'https://shudder.com',
            color: '#121212',
            logo: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600/sh/shudder-logo-flat.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'hotstar',
            url: 'https://hotstar.com',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/1920px-Disney%2B_Hotstar_logo.svg.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'ESPN Plus',
            url: 'https://plus.espn.com/',
            color: '#121212',
            logo: 'https://espn-cannonball-cdn.bamgrid.com/assets/originals/desktop@3x.png',
            category: CategoryType.Streaming,
          },
          {
            name: 'PBS Kids',
            url: 'https://pbskids.org/video/livetv',
            color: '#121212',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/150px-PBS_Kids_Logo.svg.png',
            category: CategoryType.Streaming,
          }
        ]
      },
      {
        title: 'Live Television',
        providers : [
          {
            name: 'YouTube TV',
            url: 'https://tv.youtube.com',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/YouTube_TV_logo.svg/250px-YouTube_TV_logo.svg.png',
            category: CategoryType.Live,
          },
          {
            name: 'Sling',
            url: 'https://sling.com/',
            color: '#02223b',
            logo: 'https://www.sling.com/content/dam/sling-tv/sling-logos/sling_logo_new.svg',
            category: CategoryType.Live,
          },
          {
            name: 'AT&T TV Now',
            url: 'https://www.atttvnow.com/',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/AT%26T_TV_Now.svg',
            category: CategoryType.Live,
          },
          {
            name: 'Xfinity Stream',
            url: 'https://xfinity.com/stream',
            color: '#121212',
            logo: 'https://www.xfinity.com/stream/partners/comcast/logo.svg',
            category: CategoryType.Live,
          },
          {
            name: 'fubotv',
            url: 'https://fubo.tv',
            color: '#1d175c',
            logo: 'https://www.fubo.tv/lp/directory/keyart/logo_fuboTV_white.png',
            category: CategoryType.Live,
          },
          {
            name: 'philo',
            url: 'https://philo.com',
            color: '#066fd0',
            logo: 'https://static-us-east-2-fastly-a.www.philo.com/storage/images/philo-logo-white.png',
            category: CategoryType.Live,
          },
          {
            name: 'tubi',
            url: 'https://tubitv.com/',
            color: '#fa382f',
            logo: 'https://cdn-images-1.medium.com/max/204/1*qZAjauhzDX2Y0IeZmESdnA@2x.png',
            category: CategoryType.Live,
          },
          {
            name: 'Pluto TV',
            url: 'https://pluto.tv/',
            color: '#121212',
            logo: 'https://pluto.tv/assets/images/logo.svg',
            category: CategoryType.Live,
          },
          {
            name: 'locast',
            url: 'https://locast.org/',
            color: '#c2c2c2',
            logo: 'https://locast.org/assets/images/locast-logo.svg',
            category: CategoryType.Live,
          },
        ]
      },
      {
        title: 'Personal Media',
        providers : [
          {
            name: 'Plex',
            url: 'https://app.plex.tv/desktop',
            color: '#1f2326',
            logo: 'https://zhf1943ap1t4f26r11i05c7l-wpengine.netdna-ssl.com/wp-content/themes/plex/assets/img/plex-logo.svg',
            category: CategoryType.Personal,
          },
          {
            name: 'Emby',
            url: 'http://app.emby.media/',
            color: '#212121',
            logo: 'https://emby.media/resources/logowhite_1881.png',
            category: CategoryType.Personal,
          },
          {
            name: 'Google Drive',
            url: 'https://drive.google.com/',
            color: '#c2c2c2',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/600px-Google_Drive_logo.png',
            category: CategoryType.Personal,
          },
          {
            name: 'Dropbox',
            url: 'https://dropbox.com/',
            color: '#0d2f81',
            logo: 'https://cfl.dropboxstatic.com/static/images/index/rebrand/logos/wordmarks/wordmark_white.svg',
            category: CategoryType.Personal,
          },
          {
            name: 'iCloud',
            url: 'https://icloud.com/iclouddrive',
            color: '#c2c2c2',
            logo: 'https://financesonline.com/uploads/2019/08/icloud-logo1.png',
            category: CategoryType.Personal,
          },
          {
            name: 'OneDrive',
            url: 'https://onedrive.live.com/?id=root',
            color: '#0078d4',
            logo: 'https://cdn.freebiesupply.com/logos/large/2x/onedrive-logo-black-and-white.png',
            category: CategoryType.Personal,
          },
          {
            name: 'Box',
            url: 'https://box.com',
            color: '#0061d5',
            logo: 'https://www.okta.com/sites/default/files/styles/product_logo_set/public/Box_logo_resized_white.png?itok=zGGmEzHE',
            category: CategoryType.Personal,
          },
          {
            name: 'Google Photos',
            url: 'https://photos.google.com/',
            color: '#c2c2c2',
            logo: 'https://cdn.worldvectorlogo.com/logos/google-photos.svg',
            category: CategoryType.Personal,
          },
        ]
      },
      {
        title: 'Gaming',
        providers : [
          {
            name: 'Twitch',
            url: 'https://twitch.tv',
            color: '#8d45f8',
            logo: 'https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg',
            category: CategoryType.Gaming,
          },
          {
            name: 'YouTube Gaming',
            url: 'https://youtube.com/gaming',
            color: '#121212',
            logo: 'https://cdn2.iconfinder.com/data/icons/gaming-platforms-logo-shapes/250/youtubegaming_logo-512.png',
            category: CategoryType.Gaming,
          },
          {
            name: 'Facebook Gaming',
            url: 'https://fb.gg',
            color: '#005fec',
            logo: 'https://logodownload.org/wp-content/uploads/2019/07/facebook-gaming-0.png',
            category: CategoryType.Gaming,
          },
          {
            name: 'DLive',
            url: 'https://dlive.tv/',
            color: '#121212',
            logo: 'https://dlive.tv/img/logo-darkmode.d6dbeb0a.svg',
            category: CategoryType.Gaming,
          },
          {
            name: 'Caffeine',
            url: 'https://caffeine.tv/',
            color: '#0000ff',
            logo: 'https://cdn.apk-cloud.com/detail/screenshot/uIs50DZc_Wun-tXMjGT8TR9HlNM17NyGpzpJ_jKp2LDi2WmfvtQlELjZhyHP_Py0Mw=h900.webp?vr',
            category: CategoryType.Gaming,
          },
          {
            name: 'Rainway',
            url: 'https://play.rainway.com',
            color: '#15121f',
            logo: 'https://play.rainway.com/extra/rainway-logo.svg',
            category: CategoryType.Gaming,
          },
          {
            name: 'Stadia',
            url: 'https://stadia.google.com/home',
            color: '#c2c2c2',
            logo: 'https://ssl.gstatic.com/stadia/gamers/landing_page_icons/stadia_icon_61x40_1.png',
            category: CategoryType.Gaming,
          },
          {
            name: 'Amazon Luna',
            url: 'https://www.amazon.com/luna/',
            color: '#3c007d',
            logo: 'https://m.media-amazon.com/images/G/01/T/TC05316420/A07531864/brand/luna-logo.png',
            category: CategoryType.Gaming,
          },
        ]
      },
      {
        title: 'Utility',
        providers : [
          {
            name: 'Google Maps',
            url: 'https://maps.google.com/',
            color: '#c2c2c2',
            logo: 'https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q',
            category: CategoryType.Utility,
          },
          {
            name: 'Waze',
            url: 'https://waze.com/livemap',
            color: '#47cfee',
            logo: 'https://pngimg.com/uploads/waze/waze_PNG23.png',
            category: CategoryType.Utility,
          },
          {
            name: 'ABetterRoutePlanner',
            url: 'https://new.abetterrouteplanner.com',
            color: '#2196f3',
            logo: 'https://new.abetterrouteplanner.com/abrp_banner.png',
            category: CategoryType.Utility,
          },
          {
            name: 'Plugshare',
            url: 'https://www.plugshare.com/',
            color: '#003ca6',
            logo: 'https://assets.plugshare.com/assets/plugshare-web.png',
            category: CategoryType.Utility,
          },
          {
            name: 'Tesla',
            url: 'https://tesla.com/teslaaccount',
            color: '#e12026',
            logo: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG18.png',
            category: CategoryType.Utility,
          },
          {
            name: 'Dark Sky',
            url: 'https://maps.darksky.net/',
            color: '#121212',
            logo: 'https://darksky.net/images/darkskylogo.png',
            category: CategoryType.Utility,
          },
        ]
      }
    ]
  }

}
