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
  ]
]);