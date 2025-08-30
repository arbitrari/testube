export enum CategoryType {
  Streaming = 0,
  Live,
  Sports,
  Personal,
  Gaming,
  Utility,
}

export enum RegionType {
  US = 'US',
  UK = 'UK',
  Worldwide = 'Worldwide',
  Unfiltered = 'Unfiltered'
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
  region: RegionType,
  url: string,
  colors: Colors,
  logos: Logos,
  visible: boolean,
  key?: string // Optional unique identifier
}

export interface Category {
  title: string;
  sources: Source[];
}

export interface UserSettings {
  selectedRegion: RegionType;
  hiddenSources: Map<string, string>;
  horizontalScrolling: boolean;
  fullscreenUrl: string;
  sortByPopularity: boolean;
}

// Service popularity order (based on usage statistics)
export const POPULARITY_ORDER: string[] = [
  // Streaming (by popularity)
  'youtube',
  'netflix', 
  'disneyplus',
  'hulu',
  'prime-us', 'prime-uk', // Prime Video variants
  'max',
  'appletv',
  'peacock',
  'paramountplus',
  'rumble',
  'crackle',
  'curiositystream',
  'crunchyroll',
  'bentkey',
  'viki',
  'shudder',
  'pbskids',
  'purefilx',
  'britbox',
  'discoveryplus',
  'nowtv',
  'itvplayer',
  'channel5od',
  'channel4od',
  'stvplayer',
  'bbciplayer',
  
  // Live TV (by popularity)
  'youtubetv',
  'sling',
  'directv',
  'xfinity',
  'fubotv',
  'philo',
  'tubi',
  'plutotv',
  
  // Sports (by popularity)
  'espn',
  'foxsports',
  'nflplus',
  'mlbtv',
  'nbaleaguepass',
  'f1tv',
  'dazn',
  
  // Gaming (by popularity)
  'twitch',
  'kick',
  'facebookgaming',
  'dlive',
  'xbox',
  'parsec',
  'geforcenow',
  'amazonluna',
  'doom',
  
  // Personal (by popularity)
  'plex',
  'emby',
  'stremio',
  'googledrive',
  'dropbox',
  'icloud',
  'onedrive',
  'box',
  'googlephotos',
  'googlebooks',
  
  // Utility (by popularity)
  'googlemaps',
  'waze',
  'abetterrouteplanner',
  'plugshare',
  'tesla',
  'ventusky',
  'googlecalendar'
];


export const DEFAULT_SOURCES: Map<string, Source> = new Map([
  [
    'bbciplayer',
    {
      name: 'BBC iPlayer',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.bbc.co.uk/iplayer',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/BBC_iPlayer_2021_%28Alt%29.svg/330px-BBC_iPlayer_2021_%28Alt%29.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/BBC_iPlayer_2021_%28Alt%29.svg/330px-BBC_iPlayer_2021_%28Alt%29.svg.png'
      },
      visible: true
    }
  ],
  [
    'youtube',
    {
      name: 'YouTube',
      category: CategoryType.Streaming,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.US,
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
    'prime-us',
    {
      name: 'Prime Video US',
      category: CategoryType.Streaming,
      region: RegionType.US,
      url: 'https://www.primevideo.com',
      colors: {
        dark: '#232f3e',
        light: '#232f3e'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png',
        light: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png'
      },
      visible: true
    }
  ],
  [
    'prime-uk',
    {
      name: 'Prime Video UK',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.amazon.co.uk/gp/video/storefront',
      colors: {
        dark: '#0578ff',
        light: '#0578ff'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/I/31W9hs7w0JL.png',
        light: 'https://m.media-amazon.com/images/I/31W9hs7w0JL.png'
      },
      visible: true
    }
  ],  [
    'max',
    {
      name: 'Max',
      category: CategoryType.Streaming,
      region: RegionType.US,
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
      region: RegionType.Worldwide,
      url: 'https://tv.apple.com',
      colors: {
        dark: '#ffffff',
        light: '#ffffff'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/330px-Apple_TV_Plus_Logo.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/330px-Apple_TV_Plus_Logo.svg.png'
      },
      visible: true
    }
  ],
  [
    'peacock',
    {
      name: 'Peacock',
      category: CategoryType.Streaming,
      region: RegionType.US,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.US,
      url: 'https://crackle.com',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://logos-world.net/wp-content/uploads/2022/04/Crackle-Symbol-700x394.png',
        light: 'https://logos-world.net/wp-content/uploads/2022/04/Crackle-Symbol-700x394.png'
      },
      visible: true
    }
  ],
  [
    'curiositystream',
    {
      name: 'Curiosity Stream',
      category: CategoryType.Streaming,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.US,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.US,
      url: 'https://pbskids.org/video/livetv',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://cms-tc.pbskids.org/globalresources/resources/img/pbs-kids-logo.svg',
        light: 'https://cms-tc.pbskids.org/globalresources/resources/img/pbs-kids-logo.svg'
      },
      visible: true
    }
  ],
  [
    'purefilx',
    {
      name: 'Pure Flix',
      category: CategoryType.Streaming,
      region: RegionType.US,
      url: "https://app.pureflix.com/",
      colors: {
        light: "#2a4be1",
        dark: '#2a4be1'
      },
      logos: {
        light: 'https://www.pureflix.com/hs-fs/hubfs/Marketing%20Ops/Logos/logo-GAPF-no-flare-static-350x127.png',
        dark: 'https://www.pureflix.com/hs-fs/hubfs/Marketing%20Ops/Logos/logo-GAPF-no-flare-static-350x127.png',
      },
      visible: true
    }
  ],
  [
    'britbox',
    {
      name: 'BritBox',
      category: CategoryType.Streaming,
      region: RegionType.US,
      url: 'https://www.britbox.com',
      colors: {
        dark: '#00212b',
        light: '#00212b'
      },
      logos: {
        dark: 'https://play-lh.googleusercontent.com/G1MdVYlzLe0p-MqDoHFCQBDWw2CFYVe9C_cVT2mdR-mNpV0eMpgQgYb3rCXuZp9t1xyq',
        light: 'https://play-lh.googleusercontent.com/G1MdVYlzLe0p-MqDoHFCQBDWw2CFYVe9C_cVT2mdR-mNpV0eMpgQgYb3rCXuZp9t1xyq'
      },
      visible: true
    }
  ],
  [
    'discoveryplus',
    {
      name: 'Discovery+',
      category: CategoryType.Streaming,
      region: RegionType.Worldwide,
      url: 'https://www.discoveryplus.com',
      colors: {
        dark: '#0c5dcc',
        light: '#0c5dcc'
      },
      logos: {
        dark: 'https://m.media-amazon.com/images/I/51mlSTFEy2L.png',
        light: 'https://m.media-amazon.com/images/I/51mlSTFEy2L.png'
      },
      visible: true
    }
  ],
  [
    'nowtv',
    {
      name: 'NOW',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.nowtv.com',
      colors: {
        dark: '#6c39c4',
        light: '#6c39c4'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Now_logo.svg/330px-Now_logo.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Now_logo.svg/330px-Now_logo.svg.png'
      },
      visible: true
    }
  ],
  [
    'itvplayer',
    {
      name: 'ITV Player',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.itv.com',
      colors: {
        dark: '#ffd400',
        light: '#ffd400'
      },
      logos: {
        dark: 'https://www.itv.com/presscentre/presscentre/sites/default/files/styles/half_width/public/itv_logo_blk.jpg?itok=cZvRseaJ',
        light: 'https://www.itv.com/presscentre/presscentre/sites/default/files/styles/half_width/public/itv_logo_blk.jpg?itok=cZvRseaJ'
      },
      visible: true
    }
  ],
  [
    'channel5od',
    {
      name: '5',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.channel5.com',
      colors: {
        dark: '#12253f',
        light: '#12253f'
      },
      logos: {
        dark: 'https://help.channel5.com/hc/theming_assets/01JMWFRMG6MGKQ2V4C84TR4YHX',
        light: 'https://help.channel5.com/hc/theming_assets/01JMWFRMG6MGKQ2V4C84TR4YHX'
      },
      visible: true
    }
  ],  [
    'channel4od',
    {
      name: '4 on demand',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://www.channel4.com',
      colors: {
        dark: '#302c2dff',
        light: '#302c2dff'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Channel_4_%28On_Demand%29_2023.svg/250px-Channel_4_%28On_Demand%29_2023.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Channel_4_%28On_Demand%29_2023.svg/250px-Channel_4_%28On_Demand%29_2023.svg.png'
      },
      visible: true
    }
  ],
  [
    'stvplayer',
    {
      name: 'STV Player',
      category: CategoryType.Streaming,
      region: RegionType.UK,
      url: 'https://player.stv.tv',
      colors: {
        dark: '#ffffff',
        light: '#ffffff'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/STV_Player_2019.svg/330px-STV_Player_2019.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/STV_Player_2019.svg/330px-STV_Player_2019.svg.png'
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
      region: RegionType.US,
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
      region: RegionType.US,
      url: 'https://watch.sling.com',
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
      url: 'https://fubo.tv',
      colors: {
        dark: '#f44616',
        light: '#f44616'
      },
      logos: {
        dark: 'https://s21.q4cdn.com/819998841/files/design/logo/Fubo-89x30-White.svg',
        light: 'https://s21.q4cdn.com/819998841/files/design/logo/Fubo-89x30-White.svg'
      },
      visible: true
    }
  ],
  [
    'philo',
    {
      name: 'Philo',
      category: CategoryType.Live,
      region: RegionType.US,
      url: 'https://philo.com',
      colors: {
        dark: '#0f0e0e',
        light: '#0f0e0e'
      },
      logos: {
        dark: 'https://static-us-east-2-fastly-a.www.philo.com/storage/images/maestro/philo-logo-light.png',
        light: 'https://static-us-east-2-fastly-a.www.philo.com/storage/images/maestro/philo-logo-light.png'
      },
      visible: true
    }
  ],
  [
    'tubi',
    {
      name: 'Tubi',
      category: CategoryType.Live,
      region: RegionType.US,
      url: 'https://tubitv.com',
      colors: {
        dark: '#140080',
        light: '#140080'
      },
      logos: {
        dark: 'https://logos-world.net/wp-content/uploads/2024/06/Tubi-Logo.png',
        light: 'https://logos-world.net/wp-content/uploads/2024/06/Tubi-Logo.png'
      },
      visible: true
    }
  ],
  [
    'plutotv',
    {
      name: 'Pluto TV',
      category: CategoryType.Live,
      region: RegionType.US,
      url: 'https://pluto.tv',
      colors: {
        dark: '#121212',
        light: '#121212'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pluto_TV_logo_2024.svg/220px-Pluto_TV_logo_2024.svg.png',
        light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pluto_TV_logo_2024.svg/220px-Pluto_TV_logo_2024.svg.png'
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.US,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
    'stremio',
    {
      name: 'Stremio',
      category: CategoryType.Personal,
      region: RegionType.Worldwide,
      url: 'https://web.stremio.com/',
      colors: {
        dark: '#212121',
        light: '#212121'
      },
      logos: {
        dark: 'https://github.com/Stremio/stremio-brand/raw/master/logos/PNG/stremio-logotype-dark-theme.png',
        light: 'https://github.com/Stremio/stremio-brand/raw/master/logos/PNG/stremio-logotype-light-theme.png',
      },
      visible: true
    }
  ],
  [
    'googledrive',
    {
      name: 'Google Drive',
      category: CategoryType.Personal,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
      url: 'https://onedrive.live.com/?id=root',
      colors: {
        dark: '#c2c2c2',
        light: '#c2c2c2'
      },
      logos: {
        dark: 'https://logos-world.net/wp-content/uploads/2022/04/OneDrive-Symbol.png',
        light: 'https://logos-world.net/wp-content/uploads/2022/04/OneDrive-Symbol.png',
      },
      visible: true
    }
  ],
  [
    'box',
    {
      name: 'Box',
      category: CategoryType.Personal,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
      url: 'https://twitch.tv',
      colors: {
        dark: '#8d45f8',
        light: '#8d45f8'
      },
      logos: {
        dark: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Twitch_logo_2019_black.svg',
        light: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Twitch_logo_2019_black.svg',
      },
      visible: true
    }
  ],
  [
    'kick',
    {
      name: 'KICK',
      category: CategoryType.Gaming,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
    'xbox',
    {
      name: 'XBOX',
      category: CategoryType.Gaming,
      region: RegionType.Worldwide,
      url: 'https://www.xbox.com/play',
      colors: {
        dark: '#107c10',
        light: '#107c10'
      },
      logos: {
        dark: 'https://freepnglogo.com/images/all_img/1716828776xbox-logo-white-png.png',
        light: 'https://freepnglogo.com/images/all_img/1716828776xbox-logo-white-png.png',
      },
      visible: true
    }
  ],  [
    'parsec',
    {
      name: 'Parsec',
      category: CategoryType.Gaming,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      name: 'Luna',
      category: CategoryType.Gaming,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
      url: 'https://abetterrouteplanner.com',
      colors: {
        dark: '#2196f3',
        light: '#2196f3'
      },
      logos: {
        dark: 'https://abetterrouteplanner.com/assets/assets/abrp-logo/abrp_icon_round.b9349217ad89b95556a1da931fd2b91b.png',
        light: 'https://abetterrouteplanner.com/assets/assets/abrp-logo/abrp_icon_round.b9349217ad89b95556a1da931fd2b91b.png',
      },
      visible: true
    }
  ],
  [
    'plugshare',
    {
      name: 'PlugShare',
      category: CategoryType.Utility,
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
      region: RegionType.Worldwide,
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
