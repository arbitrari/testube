export enum CategoryType {
  Streaming = 0,
  Live,
  Sports,
  Personal,
  Gaming,
  Utility,
}

export interface Colors {
  dark: string,
  light: string
}

export interface Logos {
  dark: string,
  light: string
}

export interface Source {
  name: string,
  category: CategoryType,
  url: string,
  colors: Colors,
  logos: Logos,
  visible: boolean
}

export interface Category {
  title: string;
  sources: Source[];
}


export const DEFAULT_SOURCES: Map<string, Source> = new Map([
  [
    'youtube',
    {
      name: 'YouTube',
      category: CategoryType.Streaming,
      url: 'https://youtube.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg',
        light: 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg'
      },
      visible: true
    }
  ],
  [
    'netflix',
    {
      name: 'Netflix',
      category: CategoryType.Streaming,
      url: 'https://netflix.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png',
        light: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png'
      },
      visible: true
    }
  ],
  [
    'disneyplus',
    {
      name: 'Disney+',
      category: CategoryType.Streaming,
      url: 'https://disneyplus.com',
      colors: {
        dark: '#040814',
        light: '#040814'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Logo.wine.svg',
      },
      visible: true
    }
  ],
  [
    'hulu',
    {
      name: 'Hulu',
      category: CategoryType.Streaming,
      url: 'https://hulu.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg',
      },
      visible: true
    }
  ],
  [
    'prime',
    {
      name: 'Prime Video',
      category: CategoryType.Streaming,
      url: 'https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=285877801',
      colors: {
        dark: '#232f3e',
        light: '#232f3e'
      },
      logos: {
        dark: 'https://1000logos.net/wp-content/uploads/2023/11/Amazon-Prime-Video-Logo.png',
        light: 'https://1000logos.net/wp-content/uploads/2023/11/Amazon-Prime-Video-Logo.png'
      },
      visible: true
    }
  ],
  [
    'max',
    {
      name: 'Max',
      category: CategoryType.Streaming,
      url: 'https://max.com',
      colors: {
        dark: '#000e46',
        light: '#000e46'
      },
      logos: {
        dark: 'https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=192&f=webp',
        light: 'https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=192&f=webp',
      },
      visible: true
    }
  ],
  [
    'appletv',
    {
      name: 'Apple TV+',
      category: CategoryType.Streaming,
      url: 'https://tv.apple.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://tv.apple.com/assets/brands/Apple_TV_Plus_logo_white-fa7126f2bf5269837b484153a88493f8.png',
        light: 'https://tv.apple.com/assets/brands/Apple_TV_Plus_logo_white-fa7126f2bf5269837b484153a88493f8.png'
      },
      visible: true
    }
  ],
  [
    'peacock',
    {
      name: 'Peacock',
      category: CategoryType.Streaming,
      url: 'https://www.peacocktv.com/watch/home',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://www.peacocktv.com/dam/growth/assets/what-is-peacock/11.19/peacock-logo-white.png',
        light: 'https://www.peacocktv.com/dam/growth/assets/what-is-peacock/11.19/peacock-logo-white.png'
      },
      visible: true
    }
  ],
  [
    'paramountplus',
    {
      name: 'Paramount+',
      category: CategoryType.Streaming,
      url: 'https://www.paramountplus.com/',
      colors: {
        dark: '#0036c4',
        light: '#0036c4'
      },
      logos: {
        dark: 'https://wwwimage-us.pplusstatic.com/base/files/cbs_page_attribute/pplus_logo_white.svg',
        light: 'https://wwwimage-us.pplusstatic.com/base/files/cbs_page_attribute/pplus_logo_white.svg'
      },
      visible: true
    }
  ],
  [
    'rumble',
    {
      name: 'Rumble',
      category: CategoryType.Streaming,
      url: 'https://rumble.com',
      colors: {
        dark: '#10212F',
        light: '#10212F'
      },
      logos: {
        dark: 'https://corp.rumble.com/wp-content/uploads/2022/01/logo.png',
        light: 'https://corp.rumble.com/wp-content/uploads/2022/01/logo.png'
      },
      visible: true
    }
  ],
  [
    'crackle',
    {
      name: 'Crackle',
      category: CategoryType.Streaming,
      url: 'https://crackle.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://theme.zdassets.com/theme_assets/2245835/235983e17cb74a10434931c8ec05c9d9c1def3e6.png',
        light: 'https://theme.zdassets.com/theme_assets/2245835/235983e17cb74a10434931c8ec05c9d9c1def3e6.png'
      },
      visible: true
    }
  ],
  [
    'curiositystream',
    {
      name: 'Curiosity Stream',
      category: CategoryType.Streaming,
      url: 'https://curiositystream.com',
      colors: {
        dark: '#161e37',
        light: '#161e37'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/CuriosityStream/CuriosityStream-Secondary-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/CuriosityStream/CuriosityStream-Secondary-White-Logo.wine.svg'
      },
      visible: true
    }
  ],
  [
    'crunchyroll',
    {
      name: 'Crunchyroll',
      category: CategoryType.Streaming,
      url: 'https://crunchyroll.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Crunchyroll/Crunchyroll-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Crunchyroll/Crunchyroll-Logo.wine.svg'
      },
      visible: true
    }
  ],
  [
    'bentkey',
    {
      name: 'Bentkey',
      category: CategoryType.Streaming,
      url: 'https://bentkey.com',
      colors: {
        dark: '#081722',
        light: '#081722'
      },
      logos: {
        dark: 'https://www.bentkey.com/development/avatar/logo-final.png',
        light: 'https://www.bentkey.com/development/avatar/logo-final.png'
      },
      visible: true
    }
  ],
  [
    'viki',
    {
      name: 'Rakuten Viki',
      category: CategoryType.Streaming,
      url: 'https://viki.com',
      colors: {
        dark: '#0C9BFF',
        light: '#0C9BFF'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/I/31T4eMT29IL.png',
        light: 'https://m.media-amazon.com/images/I/31T4eMT29IL.png'
      },
      visible: true
    }
  ],
  [
    'shudder',
    {
      name: 'Shudder',
      category: CategoryType.Streaming,
      url: 'https://shudder.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600/sh/shudder-logo-flat.png',
        light: 'https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600/sh/shudder-logo-flat.png'
      },
      visible: true
    }
  ],
  [
    'pbskids',
    {
      name: 'PBS Kids',
      category: CategoryType.Streaming,
      url: 'https://pbskids.org/video/livetv',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/150px-PBS_Kids_Logo.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/150px-PBS_Kids_Logo.svg.png'
      },
      visible: true
    }
  ],
// LIVE TELEVISION
  [
    'youtubetv',
    {
      name: 'YouTube TV',
      category: CategoryType.Live,
      url: 'https://tv.youtube.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/YouTube_TV_logo.svg',
        light: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/YouTube_TV_logo.svg'
      },
      visible: true
    }
  ],
  [
    'sling',
    {
      name: 'Sling',
      category: CategoryType.Live,
      url: 'https://sling.com',
      colors: {
        dark: '#02223b',
        light: '#02223b'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sling_TV_logo.svg',
        light: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sling_TV_logo.svg'
      },
      visible: true
    }
  ],
  [
    'directv',
    {
      name: 'DIRECTV Stream',
      category: CategoryType.Live,
      url: 'https://stream.directv.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DIRECTV_STREAM_2021_logo.svg/220px-DIRECTV_STREAM_2021_logo.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DIRECTV_STREAM_2021_logo.svg/220px-DIRECTV_STREAM_2021_logo.svg.png'
      },
      visible: true
    }
  ],
  [
    'xfinity',
    {
      name: 'Xfinity Stream',
      category: CategoryType.Live,
      url: 'https://xfinity.com/stream',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://www.xfinity.com/stream/partners/comcast/logo.svg',
        light: 'https://www.xfinity.com/stream/partners/comcast/logo.svg'
      },
      visible: true
    }
  ],
  [
    'fubotv',
    {
      name: 'FuboTV',
      category: CategoryType.Live,
      url: 'https://fubo.tv',
      colors: {
        dark: '#1d175c',
        light: '#1d175c'
      },
      logos: {
        dark: 'https://www.ccmtc.com/wp-content/uploads/2021/08/light-1.png',
        light: 'https://www.ccmtc.com/wp-content/uploads/2021/08/light-1.png'
      },
      visible: true
    }
  ],
  [
    'philo',
    {
      name: 'Philo',
      category: CategoryType.Live,
      url: 'https://philo.com',
      colors: {
        dark: '#066fd0',
        light: '#066fd0'
      },
      logos: {
        dark: 'https://static-us-east-2-fastly-a.www.philo.com/storage/images/philo-logo-white.png',
        light: 'https://static-us-east-2-fastly-a.www.philo.com/storage/images/philo-logo-white.png'
      },
      visible: true
    }
  ],
  [
    'tubi',
    {
      name: 'Tubi',
      category: CategoryType.Live,
      url: 'https://tubitv.com',
      colors: {
        dark: '#fa382f',
        light: '#fa382f'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Tubi/Tubi-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Tubi/Tubi-White-Logo.wine.svg'
      },
      visible: true
    }
  ],
  [
    'plutotv',
    {
      name: 'Pluto TV',
      category: CategoryType.Live,
      url: 'https://pluto.tv',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://static-homepage-en.pluto.tv/hp-assets/images/pluto-tv-abbd637b3dc06fb0f0c5ee6eea402166.svg',
        light: 'https://static-homepage-en.pluto.tv/hp-assets/images/pluto-tv-abbd637b3dc06fb0f0c5ee6eea402166.svg'
      },
      visible: true
    }
  ],
  [
    'canalplus',
    {
      name: 'Canal+ online',
      category: CategoryType.Live,
      url: 'https://canalplus.com/',
      colors: {
        dark: "#000000",
        light: "#000000"
      },
      logos: {
        dark: "https://i.imgur.com/Zj8cNLw.png",
        light: "https://i.imgur.com/Zj8cNLw.png"
      },
      visible: true
    }
  ],
  // SPORTS
  [
    'espn',
    {
      name: 'ESPN',
      category: CategoryType.Sports,
      url: 'https://www.espn.com/watch/',
      colors: {
        dark: '#d00',
        light: '#d00'
      },
      logos: {
        dark: 'https://www.freepnglogos.com/uploads/espn-png-logo/pn-white-png-logo-18.png',
        light: 'https://www.freepnglogos.com/uploads/espn-png-logo/pn-white-png-logo-18.png'
      },
      visible: true
    }
  ],
  [
    'foxsports',
    {
      name: 'FOX Sports',
      category: CategoryType.Sports,
      url: 'https://www.foxsports.com/live',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://statics.foxsports.com/static/orion/style/images/icons/fox-logos/fox-logo-black.svg',
        light: 'https://statics.foxsports.com/static/orion/style/images/icons/fox-logos/fox-logo-black.svg'
      },
      visible: true
    }
  ],
  [
    'nflplus',
    {
      name: 'NFL+',
      category: CategoryType.Sports,
      url: 'https://www.nfl.com/plus/',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://static.www.nfl.com/league/apps/shared/svg/PrimaryDark.svg',
        light: 'https://static.www.nfl.com/league/apps/shared/svg/PrimaryDark.svg'
      },
      visible: true
    }
  ],
  [
    'mlbtv',
    {
      name: 'MLBtv',
      category: CategoryType.Sports,
      url: 'https://www.mlb.com/tv',
      colors: {
        dark: '#041e42',
        light: '#041e42'
      },
      logos: {
        dark: 'https://images.ctfassets.net/iiozhi00a8lc/78yBC9oWuP1VldT6aJT1sL/8cc2b4b9d9ab83e6a90ee48476b66074/MLBTV_19_ondark_RGB.svg',
        light: 'https://images.ctfassets.net/iiozhi00a8lc/78yBC9oWuP1VldT6aJT1sL/8cc2b4b9d9ab83e6a90ee48476b66074/MLBTV_19_ondark_RGB.svg'
      },
      visible: true
    }
  ],
  [
    'nbaleaguepass',
    {
      name: 'NBA League Pass',
      category: CategoryType.Sports,
      url: 'https://www.nba.com/watch/league-pass',
      colors: {
        dark: '#143b75',
        light: '#143b75'
      },
      logos: {
        dark: 'https://cdn.nba.com/manage/2023/02/NBA_League_Pass_horiz_onDkBkgd-2.png',
        light: 'https://cdn.nba.com/manage/2023/02/NBA_League_Pass_horiz_onDkBkgd-2.png'
      },
      visible: true
    }
  ],
  [
    'f1tv',
    {
      name: 'F1TV',
      category: CategoryType.Sports,
      url: 'https://f1tv.formula1.com',
      colors: {
        dark: '#15151e',
        light: '#15151e'
      },
      logos: {
        dark: 'https://formula1.my.site.com/resource/1568115282000/F1LogoMicro',
        light: 'https://formula1.my.site.com/resource/1568115282000/F1LogoMicro'
      },
      visible: true
    }
  ],
  [
    'dazn',
    {
      name: 'DAZN',
      category: CategoryType.Sports,
      url: 'https://dazn.com',
      colors: {
        dark: '#0c161c',
        light: '#0c161c'
      },
      logos: {
        dark: 'https://www.dazn.com/favicon.svg',
        light: 'https://www.dazn.com/favicon.svg'
      },
      visible: true
    }
  ],
  // PERSONAL
  [
    'plex',
    {
      name: 'Plex',
      category: CategoryType.Personal,
      url: 'https://app.plex.tv/desktop',
      colors: {
        dark: '#1f2326',
        light: '#1f2326'
      },
      logos: {
        dark: 'https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg',
        light: 'https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg',
      },
      visible: true
    }
  ],
  [
    'emby',
    {
      name: 'Emby',
      category: CategoryType.Personal,
      url: 'http://app.emby.media/',
      colors: {
        dark: '#212121',
        light: '#212121'
      },
      logos: {
        dark: 'https://emby.media/resources/logowhite_1881.png',
        light: 'https://emby.media/resources/logowhite_1881.png',
      },
      visible: true
    }
  ],
  [
    'googledrive',
    {
      name: 'Google Drive',
      category: CategoryType.Personal,
      url: 'https://drive.google.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-64dp/logo_drive_2020q4_color_2x_web_64dp.png',
        light: 'https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-64dp/logo_drive_2020q4_color_2x_web_64dp.png',
      },
      visible: true
    }
  ],
  [
    'dropbox',
    {
      name: 'Dropbox',
      category: CategoryType.Personal,
      url: 'https://dropbox.com',
      colors: {
        dark: '#0d2f81',
        light: '#0d2f81'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-White-Logo.wine.svg',
      },
      visible: true
    }
  ],
  [
    'icloud',
    {
      name: 'iCloud',
      category: CategoryType.Personal,
      url: 'https://icloud.com/iclouddrive',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://financesonline.com/uploads/2019/08/icloud-logo1.png',
        light: 'https://financesonline.com/uploads/2019/08/icloud-logo1.png',
      },
      visible: true
    }
  ],
  [
    'onedrive',
    {
      name: 'OneDrive',
      category: CategoryType.Personal,
      url: 'https://onedrive.live.com/?id=root',
      colors: {
        dark: '#0078d4',
        light: '#0078d4'
      },
      logos: {
        dark: 'https://cdn.freebiesupply.com/logos/large/2x/onedrive-logo-black-and-white.png',
        light: 'https://cdn.freebiesupply.com/logos/large/2x/onedrive-logo-black-and-white.png',
      },
      visible: true
    }
  ],
  [
    'box',
    {
      name: 'Box',
      category: CategoryType.Personal,
      url: 'https://box.com',
      colors: {
        dark: '#0061d5',
        light: '#0061d5'
      },
      logos: {
        dark: 'https://www.gainsight.com/wp-content/uploads/2015/09/box-logo.png',
        light: 'https://www.gainsight.com/wp-content/uploads/2015/09/box-logo.png',
      },
      visible: true
    }
  ],
  [
    'googlephotos',
    {
      name: 'Google Photos',
      category: CategoryType.Personal,
      url: 'https://photos.google.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://www.google.com/photos/static/2020/images/index/logo_photos_192px.svg',
        light: 'https://www.google.com/photos/static/2020/images/index/logo_photos_192px.svg',
      },
      visible: true
    }
  ],
  [
    'googlebooks',
    {
      name: 'Google Books',
      category: CategoryType.Personal,
      url: 'https://play.google.com/books',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://cdn.worldvectorlogo.com/logos/google-play-books.svg',
        light: 'https://cdn.worldvectorlogo.com/logos/google-play-books.svg',
      },
      visible: true
    }
  ],
  // GAMING
  [
    'twitch',
    {
      name: 'Twitch',
      category: CategoryType.Gaming,
      url: 'https://twitch.tv',
      colors: {
        dark: '#8d45f8',
        light: '#8d45f8'
      },
      logos: {
        dark: 'https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg',
        light: 'https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg',
      },
      visible: true
    }
  ],
  [
    'kick',
    {
      name: 'KICK',
      category: CategoryType.Gaming,
      url: 'https://kick.com',
      colors: {
        dark: '#0c0e0f',
        light: '#0c0e0f'
      },
      logos: {
        dark: 'https://i.imgur.com/BdexlQP.png',
        light: 'https://i.imgur.com/BdexlQP.png',
      },
      visible: true
    }
  ],
  [
    'facebookgaming',
    {
      name: 'Facebook Gaming',
      category: CategoryType.Gaming,
      url: 'https://fb.gg',
      colors: {
        dark: '#005fec',
        light: '#005fec'
      },
      logos: {
        dark: 'https://static.xx.fbcdn.net/rsrc.php/yV/r/cE21p7BN2IP.svg',
        light: 'https://static.xx.fbcdn.net/rsrc.php/yV/r/cE21p7BN2IP.svg',
      },
      visible: true
    }
  ],
  [
    'dlive',
    {
      name: 'DLive',
      category: CategoryType.Gaming,
      url: 'https://dlive.tv',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://dlive.tv/img/logo-darkmode.50133ca0.svg',
        light: 'https://dlive.tv/img/logo-darkmode.50133ca0.svg',
      },
      visible: true
    }
  ],
  [
    'caffeine',
    {
      name: 'Caffeine',
      category: CategoryType.Gaming,
      url: 'https://caffeine.tv',
      colors: {
        dark: '#0000ff',
        light: '#0000ff'
      },
      logos: {
        dark: 'https://cdn.apk-cloud.com/detail/screenshot/uIs50DZc_Wun-tXMjGT8TR9HlNM17NyGpzpJ_jKp2LDi2WmfvtQlELjZhyHP_Py0Mw=h900.webp?vr',
        light: 'https://cdn.apk-cloud.com/detail/screenshot/uIs50DZc_Wun-tXMjGT8TR9HlNM17NyGpzpJ_jKp2LDi2WmfvtQlELjZhyHP_Py0Mw=h900.webp?vr',
      },
      visible: true
    }
  ],
  [
    'xbox',
    {
      name: 'XBOX',
      category: CategoryType.Gaming,
      url: 'https://www.xbox.com/play',
      colors: {
        dark: '#107c10',
        light: '#107c10'
      },
      logos: {
        dark: 'https://cdn.freebiesupply.com/logos/large/2x/xbox-9-logo-black-and-white.png',
        light: 'https://cdn.freebiesupply.com/logos/large/2x/xbox-9-logo-black-and-white.png',
      },
      visible: true
    }
  ],  [
    'parsec',
    {
      name: 'Parsec',
      category: CategoryType.Gaming,
      url: 'https://web.parsec.app/',
      colors: {
        dark: '#0c0c0c',
        light: '#0c0c0c'
      },
      logos: {
        dark: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyNCIgaGVpZ2h0PSI0NDEiIHZpZXdCb3g9IjAgMCAxODI0IDQ0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsUnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBkPSJNNTMuNyAzMDIuNjhjMTIuMTYgNy40NiAxNzguNTYgMTA5Ljk4IDE3OC41NiAxMDkuOThzMTcuNCAxMy42NCAzNC45NCA1LjE4YzE3LjUzLTguNDYgMTYuODItMjUuNTggMTYuODItMjcuODJWMTYzLjU5cy42NS0xMy41OS01LjE4LTI1Ljg4Yy02LjU3LTEzLjg2LTE1LjUtMjEuMi0yNS4yMy0yNy4xN0MyNDMuODggMTA0LjU3IDg0Ljc2IDYuMzggODQuNzYgNi4zOFM3MC42MS00LjgxIDUzLjcxIDIuNUMzNi44IDkuODEgMzYuMjQgMjYuMDUgMzYuMjQgMzAuMzJ2MjQ0Ljg2Yy4xMiAzLjY5LjU1IDguNTkgMS45NCAxMS4zMyAyLjQyIDQuNzkgMy4zNiA4LjcgMTUuNTIgMTYuMTd6bTU2LjkzLTE5Mi4xNWw5OC45OCA2MC44MXYxMzcuOGwtOTguOTgtNjAuMTdWMTEwLjUzeiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMjk0LjkxYy4xMiAzLjY5LjU1IDguOSAxLjk0IDExLjY1IDIuNDMgNC43OSAzLjM3IDguNzEgMTUuNTMgMTYuMTcgMTIuMTYgNy40NiAxNzguNTYgMTA5Ljk4IDE3OC41NiAxMDkuOThzMTcuNCAxMy42NCAzNC45NCA1LjE4YzE3LjUzLTguNDYgMTYuODItMjUuNTggMTYuODItMjcuODJWMTgzLjY0cy42NS0xMy41OS01LjE4LTI1Ljg4Yy02LjU3LTEzLjg2LTE1LjUtMjEuMi0yNS4yMy0yNy4xNy05LjczLTUuOTctMTY4Ljg1LTEwNC4xNi0xNjguODUtMTA0LjE2cy0xNC4xNS0xMS4xOS0zMS4wNS0zLjg4Qy41NiAyOS44NiAwIDQ2LjEgMCA1MC4zN3YyNDQuNTR6bTc0LjQtMTY0LjMybDk4Ljk4IDYwLjgxdjEzNy44TDc0LjQgMjY5LjAzVjEzMC41OXoiIGZpbGw9IiNGNTAwNDkiLz4KICAgIDxwYXRoIGQ9Ik0zOTYgNTdoMTUxLjU5QzU5Ny44NiA1NyA2MjMgNzguNDQgNjIzIDEyMS4zdjk1LjQxYzAgNDIuODctMjUuMTQgNjQuMjktNzUuNDEgNjQuMjlINDg1djEwNmgtODlWNTd6bTEzOCAxNDYuNjR2LTcxLjI3YzAtNy41Ny00LjI2LTExLjM2LTEyLjc2LTExLjM2SDQ4NnY5NGgzNS4yNGM4LjUtLjAxIDEyLjc2LTMuNzkgMTIuNzYtMTEuMzd6TTc4NS4yMiAzODdsLTEwLjEzLTQ5aC03Ny45OGwtMTAuNjQgNDloLTg4LjA2bDg0LjE0LTMzMGgxMDguNjJsODQuMTQgMzMwaC05MC4wOXptLTc0LjI5LTExNGg0OS44N2wtMjQuMTktMTE3LjgyTDcxMC45MyAyNzN6TTk3OCAyNzB2MTE3aC05MFY1N2gxNTIuNTFjNTAuMzIgMCA3NS40OSAyMS4yNSA3NS40OSA2My43NHY4NS42M2MwIDMyLjUxLTE0LjcxIDUyLjUyLTQ0LjEyIDYwLjA0TDExMzIuNDIgMzg3aC05Ni40NGwtNTIuMzMtMTE3SDk3OHptMzQuMjQtMTQ4SDk3N3Y4OGgzNS4yNGM4LjUxIDAgMTIuNzYtMy43OSAxMi43Ni0xMS4zOXYtNjUuMjJjMC03LjU5LTQuMjYtMTEuMzktMTIuNzYtMTEuMzl6TTEyNzAgMzExLjcxVjI2NC4zYzAtNy41My00LjI2LTExLjMtMTIuNzctMTEuM2gtNDljLTI1LjMgMC00My4xNi01LjU1LTUzLjU5LTE2LjY3LTEwLjQzLTExLjExLTE1LjY0LTI3LjExLTE1LjY0LTQ3Ljk3di02Ny43M2MwLTQyLjQxIDI0Ljk1LTYzLjYyIDc0Ljg3LTYzLjYyaDcwLjI2YzQ5LjkxIDAgNzQuODcgMjEuMjIgNzQuODcgNjMuNjJWMTYwaC05MHYtMjdjMC03LjMzLTQuMjktMTEtMTIuODYtMTFoLTE0LjI5Yy04LjU2IDAtMTIuODUgMy44LTEyLjg1IDExLjR2NDkuMjFjMCA3LjYgNC4yOCAxMS40IDEyLjg1IDExLjRoNDguMjljMjUuMzQgMCA0Mi44OSA1LjM2IDUzLjY4IDE2LjA2IDEwLjc5IDEwLjcxIDE2LjE4IDI2LjQyIDE2LjE4IDQ3LjEzdjY2LjI3YzAgNDIuMzctMjQuNSA2My41NC03NC41MyA2My41NGgtNjkuOTFjLTUwLjM4IDAtNzUuNTYtMjEuMTgtNzUuNTYtNjMuNTRWMjg0aDkwdjI3LjcxYzAgNy41MyA0LjIyIDExLjI5IDEyLjY2IDExLjI5aDE0LjY4YzguNDQgMCAxMi42Ni0zLjc2IDEyLjY2LTExLjI5ek0xNDcwIDMyMmgxMTJ2NjZoLTIwMFY1N2gxOTZ2NjZoLTEwOHY2N2g5NGwtLjUyIDYySDE0NzB2NzB6bTM1NC0xNDJoLTg5di01Mi43NGMwLTcuNS00LjIyLTExLjI2LTEyLjY1LTExLjI2aC0xNy43MWMtOC40MyAwLTEyLjY1IDMuNzYtMTIuNjUgMTEuMjZsLS41MiAxODguNjVjMCA3LjM5IDQuMjYgMTEuMDkgMTIuOCAxMS4wOWgxNy45MmM4LjUzIDAgMTIuOC0zLjcgMTIuOC0xMS4wOVYyNjZoODl2NTcuOWMwIDQyLjc0LTI1LjA2IDY0LjEtNzUuMTggNjQuMWgtNzIuNjNjLTUwLjEyIDAtNzUuMTgtMjEuMzYtNzUuMTgtNjQuMVYxMjAuNTVjMC00Mi4zNiAyNS41OC02My41NSA3NS43LTYzLjU1aDcyLjExYzUwLjEyIDAgNzUuMTggMjEuMTkgNzUuMTggNjMuNTVWMTgwaC4wMXoiIGZpbGw9IiNGOUZBRkMiLz4KICA8L2c+Cjwvc3ZnPgo=',
        light: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyNCIgaGVpZ2h0PSI0NDEiIHZpZXdCb3g9IjAgMCAxODI0IDQ0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsUnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICA8cGF0aCBkPSJNNTMuNyAzMDIuNjhjMTIuMTYgNy40NiAxNzguNTYgMTA5Ljk4IDE3OC41NiAxMDkuOThzMTcuNCAxMy42NCAzNC45NCA1LjE4YzE3LjUzLTguNDYgMTYuODItMjUuNTggMTYuODItMjcuODJWMTYzLjU5cy42NS0xMy41OS01LjE4LTI1Ljg4Yy02LjU3LTEzLjg2LTE1LjUtMjEuMi0yNS4yMy0yNy4xN0MyNDMuODggMTA0LjU3IDg0Ljc2IDYuMzggODQuNzYgNi4zOFM3MC42MS00LjgxIDUzLjcxIDIuNUMzNi44IDkuODEgMzYuMjQgMjYuMDUgMzYuMjQgMzAuMzJ2MjQ0Ljg2Yy4xMiAzLjY5LjU1IDguNTkgMS45NCAxMS4zMyAyLjQyIDQuNzkgMy4zNiA4LjcgMTUuNTIgMTYuMTd6bTU2LjkzLTE5Mi4xNWw5OC45OCA2MC44MXYxMzcuOGwtOTguOTgtNjAuMTdWMTEwLjUzeiIgZmlsbD0iIzI2QUJGRiIvPgogICAgPHBhdGggZD0iTTAgMjk0LjkxYy4xMiAzLjY5LjU1IDguOSAxLjk0IDExLjY1IDIuNDMgNC43OSAzLjM3IDguNzEgMTUuNTMgMTYuMTcgMTIuMTYgNy40NiAxNzguNTYgMTA5Ljk4IDE3OC41NiAxMDkuOThzMTcuNCAxMy42NCAzNC45NCA1LjE4YzE3LjUzLTguNDYgMTYuODItMjUuNTggMTYuODItMjcuODJWMTgzLjY0cy42NS0xMy41OS01LjE4LTI1Ljg4Yy02LjU3LTEzLjg2LTE1LjUtMjEuMi0yNS4yMy0yNy4xNy05LjczLTUuOTctMTY4Ljg1LTEwNC4xNi0xNjguODUtMTA0LjE2cy0xNC4xNS0xMS4xOS0zMS4wNS0zLjg4Qy41NiAyOS44NiAwIDQ2LjEgMCA1MC4zN3YyNDQuNTR6bTc0LjQtMTY0LjMybDk4Ljk4IDYwLjgxdjEzNy44TDc0LjQgMjY5LjAzVjEzMC41OXoiIGZpbGw9IiNGNTAwNDkiLz4KICAgIDxwYXRoIGQ9Ik0zOTYgNTdoMTUxLjU5QzU5Ny44NiA1NyA2MjMgNzguNDQgNjIzIDEyMS4zdjk1LjQxYzAgNDIuODctMjUuMTQgNjQuMjktNzUuNDEgNjQuMjlINDg1djEwNmgtODlWNTd6bTEzOCAxNDYuNjR2LTcxLjI3YzAtNy41Ny00LjI2LTExLjM2LTEyLjc2LTExLjM2SDQ4NnY5NGgzNS4yNGM4LjUtLjAxIDEyLjc2LTMuNzkgMTIuNzYtMTEuMzd6TTc4NS4yMiAzODdsLTEwLjEzLTQ5aC03Ny45OGwtMTAuNjQgNDloLTg4LjA2bDg0LjE0LTMzMGgxMDguNjJsODQuMTQgMzMwaC05MC4wOXptLTc0LjI5LTExNGg0OS44N2wtMjQuMTktMTE3LjgyTDcxMC45MyAyNzN6TTk3OCAyNzB2MTE3aC05MFY1N2gxNTIuNTFjNTAuMzIgMCA3NS40OSAyMS4yNSA3NS40OSA2My43NHY4NS42M2MwIDMyLjUxLTE0LjcxIDUyLjUyLTQ0LjEyIDYwLjA0TDExMzIuNDIgMzg3aC05Ni40NGwtNTIuMzMtMTE3SDk3OHptMzQuMjQtMTQ4SDk3N3Y4OGgzNS4yNGM4LjUxIDAgMTIuNzYtMy43OSAxMi43Ni0xMS4zOXYtNjUuMjJjMC03LjU5LTQuMjYtMTEuMzktMTIuNzYtMTEuMzl6TTEyNzAgMzExLjcxVjI2NC4zYzAtNy41My00LjI2LTExLjMtMTIuNzctMTEuM2gtNDljLTI1LjMgMC00My4xNi01LjU1LTUzLjU5LTE2LjY3LTEwLjQzLTExLjExLTE1LjY0LTI3LjExLTE1LjY0LTQ3Ljk3di02Ny43M2MwLTQyLjQxIDI0Ljk1LTYzLjYyIDc0Ljg3LTYzLjYyaDcwLjI2YzQ5LjkxIDAgNzQuODcgMjEuMjIgNzQuODcgNjMuNjJWMTYwaC05MHYtMjdjMC03LjMzLTQuMjktMTEtMTIuODYtMTFoLTE0LjI5Yy04LjU2IDAtMTIuODUgMy44LTEyLjg1IDExLjR2NDkuMjFjMCA3LjYgNC4yOCAxMS40IDEyLjg1IDExLjRoNDguMjljMjUuMzQgMCA0Mi44OSA1LjM2IDUzLjY4IDE2LjA2IDEwLjc5IDEwLjcxIDE2LjE4IDI2LjQyIDE2LjE4IDQ3LjEzdjY2LjI3YzAgNDIuMzctMjQuNSA2My41NC03NC41MyA2My41NGgtNjkuOTFjLTUwLjM4IDAtNzUuNTYtMjEuMTgtNzUuNTYtNjMuNTRWMjg0aDkwdjI3LjcxYzAgNy41MyA0LjIyIDExLjI5IDEyLjY2IDExLjI5aDE0LjY4YzguNDQgMCAxMi42Ni0zLjc2IDEyLjY2LTExLjI5ek0xNDcwIDMyMmgxMTJ2NjZoLTIwMFY1N2gxOTZ2NjZoLTEwOHY2N2g5NGwtLjUyIDYySDE0NzB2NzB6bTM1NC0xNDJoLTg5di01Mi43NGMwLTcuNS00LjIyLTExLjI2LTEyLjY1LTExLjI2aC0xNy43MWMtOC40MyAwLTEyLjY1IDMuNzYtMTIuNjUgMTEuMjZsLS41MiAxODguNjVjMCA3LjM5IDQuMjYgMTEuMDkgMTIuOCAxMS4wOWgxNy45MmM4LjUzIDAgMTIuOC0zLjcgMTIuOC0xMS4wOVYyNjZoODl2NTcuOWMwIDQyLjc0LTI1LjA2IDY0LjEtNzUuMTggNjQuMWgtNzIuNjNjLTUwLjEyIDAtNzUuMTgtMjEuMzYtNzUuMTgtNjQuMVYxMjAuNTVjMC00Mi4zNiAyNS41OC02My41NSA3NS43LTYzLjU1aDcyLjExYzUwLjEyIDAgNzUuMTggMjEuMTkgNzUuMTggNjMuNTVWMTgwaC4wMXoiIGZpbGw9IiNGOUZBRkMiLz4KICA8L2c+Cjwvc3ZnPgo='
      },
      visible: true
    }
  ],
  [
    'geforcenow',
    {
      name: 'GeForce Now',
      category: CategoryType.Gaming,
      url: 'https://play.geforcenow.com/mall/',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://cdn.steamgriddb.com/logo/15ef9d499850bb871944e0b52083173a.png',
        light: 'https://cdn.steamgriddb.com/logo/15ef9d499850bb871944e0b52083173a.png',
      },
      visible: true
    }
  ],
  [
    'amazonluna',
    {
      name: 'Amazon Luna',
      category: CategoryType.Gaming,
      url: 'https://luna.amazon.com',
      colors: {
        dark: '#3c007d',
        light: '#3c007d'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/G/01/T/TC05316420/A07531864/brand/luna-logo.png',
        light: 'https://m.media-amazon.com/images/G/01/T/TC05316420/A07531864/brand/luna-logo.png',
      },
      visible: true
    }
  ],
  [
    'doom',
    {
      name: 'DOOM',
      category: CategoryType.Gaming,
      url: 'https://uacorp.space',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://static.wikia.nocookie.net/logopedia/images/0/09/Doom_1.gif',
        light: 'https://static.wikia.nocookie.net/logopedia/images/0/09/Doom_1.gif',
      },
      visible: true
    }
  ],
  // UTILITY
  [
    'googlemaps',
    {
      name: 'Google Maps',
      category: CategoryType.Utility,
      url: 'https://maps.google.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q',
        light: 'https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q',
      },
      visible: true
    }
  ],
  [
    'waze',
    {
      name: 'Waze',
      category: CategoryType.Utility,
      url: 'https://waze.com/livemap',
      colors: {
        dark: '#47cfee',
        light: '#47cfee'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d0/Waze-logo-2020.svg/800px-Waze-logo-2020.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d0/Waze-logo-2020.svg/800px-Waze-logo-2020.svg.png',
      },
      visible: true
    }
  ],
  [
    'abetterrouteplanner',
    {
      name: 'ABetterRoutePlanner',
      category: CategoryType.Utility,
      url: 'https://abetterrouteplanner.com',
      colors: {
        dark: '#2196f3',
        light: '#2196f3'
      },
      logos: {
        dark: 'https://new.abetterrouteplanner.com/abrp_banner.png',
        light: 'https://new.abetterrouteplanner.com/abrp_banner.png',
      },
      visible: true
    }
  ],
  [
    'plugshare',
    {
      name: 'PlugShare',
      category: CategoryType.Utility,
      url: 'https://plugshare.com',
      colors: {
        dark: '#003ca6',
        light: '#003ca6'
      },
      logos: {
        dark: 'https://assets.plugshare.com/assets/plugshare-web.png',
        light: 'https://assets.plugshare.com/assets/plugshare-web.png',
      },
      visible: true
    }
  ],
  [
    'tesla',
    {
      name: 'Tesla Account',
      category: CategoryType.Utility,
      url: 'https://tesla.com/teslaaccount',
      colors: {
        dark: '#e12026',
        light: '#e12026'
      },
      logos: {
        dark: 'https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-White-Logo.wine.svg',
        light: 'https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-White-Logo.wine.svg',
      },
      visible: true
    }
  ],
  [
    'ventusky',
    {
      name: 'Ventusky',
      category: CategoryType.Utility,
      url: 'https://www.ventusky.com/?l=radar',
      colors: {
        dark: '#31537d',
        light: '#31537d'
      },
      logos: {
        dark: 'https://i.imgur.com/OOZBXGw.png',
        light: 'https://i.imgur.com/OOZBXGw.png',
      },
      visible: true
    }
  ],
  [
    'googlecalendar',
    {
      name: 'Google Calendar',
      category: CategoryType.Utility,
      url: 'https://calendar.google.com',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date().getDate()}_2x.png`,
        light: `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date().getDate()}_2x.png`,
      },
      visible: true
    }
  ],
]);
