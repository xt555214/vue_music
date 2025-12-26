// 音乐数据 - 歌曲和播放列表
const photos = [
  'anton-mislawsky-1B7vFqOn6og-unsplash.jpg',
  'ben-collins-Fr2iwKpsi-Y-unsplash (1).jpg',
  'ben-collins-Fr2iwKpsi-Y-unsplash.jpg',
  'bobby-hendry-KR53q8ZDd_Y-unsplash.jpg',
  'bobby-hendry-MD3rdOB5pxk-unsplash.jpg',
  'chris-bulilan-1oJMdG-rrH0-unsplash.jpg',
  'clay-banks-fEVaiLwWvlU-unsplash.jpg',
  'daniel-angele-2gu4hKuFhi0-unsplash.jpg',
  'eric-nopanen-8e0EHPUx3Mo-unsplash.jpg',
  'erik-mclean-QzpgqElvSiA-unsplash.jpg',
  'felipe-portella-h6gTtqBZUxc-unsplash.jpg',
  'frame-harirak-iPwHUd19R38-unsplash.jpg',
  'jabber-visuals-PlUQQyIMO8U-unsplash.jpg',
  'jose-pinto-4Z7cphVnSec-unsplash.jpg',
  'kevin-mccutcheon-TcSckNRL9J8-unsplash.jpg',
  'mike-giles-IiwYeihxC58-unsplash.jpg',
  'simon-noh-0rmby-3OTeI-unsplash.jpg'
];

// 艺术家数据
export const artists = [
  {
    id: 1,
    name: 'Echo Valley',
    avatar: `/photo/${photos[0]}`,
    description: 'Electronic music producer',
    genre: 'Electronic',
    followers: '1.2M',
    bio: 'Echo Valley 是一位来自未来的电子音乐制作人，擅长将合成器音色与深邃的节拍完美融合。他的音乐充满科技感，每一首作品都像是一次穿越时空的旅程。从2018年出道至今，已发布多张备受好评的专辑，在全球电子音乐节上屡获殊荣。'
  },
  {
    id: 2,
    name: 'Urban Beats',
    avatar: `/photo/${photos[1]}`,
    description: 'Pop sensation',
    genre: 'Pop',
    followers: '2.5M',
    bio: 'Urban Beats 是当代流行音乐界的新星，以其独特的城市风格和动感旋律征服了无数听众。他们的音乐融合了流行、R&B和电子元素，每一首歌都充满了活力和感染力。出道仅三年，就已经在全球各大音乐榜单上占据一席之地。'
  },
  {
    id: 3,
    name: 'Coastal Sounds',
    avatar: `/photo/${photos[2]}`,
    description: 'Ambient music creator',
    genre: 'Ambient',
    followers: '890K',
    bio: 'Coastal Sounds 是一位专注于环境音乐的创作者，擅长用声音描绘自然景观。他的作品灵感来源于海洋、森林和天空，每一首曲子都像是一幅用音符绘制的风景画。他的音乐能够帮助人们放松身心，在忙碌的生活中找到片刻宁静。'
  },
  {
    id: 4,
    name: 'Nature Vibes',
    avatar: `/photo/${photos[3]}`,
    description: 'Folk music artist',
    genre: 'Folk',
    followers: '650K',
    bio: 'Nature Vibes 是一位民谣音乐人，用吉他弹奏出最真挚的情感。他的音乐风格清新自然，歌词充满诗意，讲述着关于生活、爱情和梦想的故事。从街头表演到音乐节舞台，他用真诚的音乐打动了无数听众的心。'
  },
  {
    id: 5,
    name: 'Wild West',
    avatar: `/photo/${photos[4]}`,
    description: 'Rock band',
    genre: 'Rock',
    followers: '3.1M',
    bio: 'Wild West 是一支充满激情的摇滚乐队，他们的音乐充满了力量和自由精神。乐队成立于2015年，由四位志同道合的音乐人组成。他们的现场演出总是充满能量，每一场演出都能让观众感受到摇滚乐的魅力。'
  },
  {
    id: 6,
    name: 'City Pop',
    avatar: `/photo/${photos[5]}`,
    description: 'Jazz musician',
    genre: 'Jazz',
    followers: '1.8M',
    bio: 'City Pop 是一位才华横溢的爵士音乐家，擅长将传统爵士与现代城市节奏相结合。他的萨克斯风演奏技巧精湛，每一段即兴演奏都充满了灵感和创意。他的音乐既有爵士的优雅，又有现代都市的活力。'
  },
  {
    id: 7,
    name: 'Synthwave',
    avatar: `/photo/${photos[6]}`,
    description: 'Electronic artist',
    genre: 'Electronic',
    followers: '1.5M',
    bio: 'Synthwave 是一位复古未来主义电子音乐艺术家，他的音乐充满了80年代的怀旧情怀和未来科技感。他擅长使用经典的合成器音色，创造出充满霓虹灯和赛博朋克风格的音乐作品，让听众仿佛置身于科幻电影中。'
  },
  {
    id: 8,
    name: 'Nature Sounds',
    avatar: `/photo/${photos[7]}`,
    description: 'Ambient producer',
    genre: 'Ambient',
    followers: '720K',
    bio: 'Nature Sounds 是一位环境音乐制作人，专注于创作能够与自然和谐共存的音乐。他的作品融合了真实的自然声音采样和电子音效，创造出既宁静又充满生命力的音乐。他的音乐适合冥想、瑜伽和放松时刻。'
  },
  {
    id: 9,
    name: 'Cloud Nine',
    avatar: `/photo/${photos[8]}`,
    description: 'Pop singer',
    genre: 'Pop',
    followers: '2.1M',
    bio: 'Cloud Nine 是一位充满活力的流行歌手，她的声音清澈甜美，能够轻松驾驭各种风格的流行歌曲。从抒情慢歌到动感舞曲，她都能完美演绎。她的音乐总是充满正能量，能够带给听众快乐和希望。'
  },
  {
    id: 10,
    name: 'Digital Dreams',
    avatar: `/photo/${photos[9]}`,
    description: 'Tech music producer',
    genre: 'Electronic',
    followers: '980K',
    bio: 'Digital Dreams 是一位技术流电子音乐制作人，他的音乐充满了数字时代的特色。他擅长使用最新的音乐制作技术和软件，创造出前卫而富有实验性的电子音乐。他的作品在电子音乐圈内备受推崇。'
  },
  {
    id: 11,
    name: 'Sunset Vibes',
    avatar: `/photo/${photos[10]}`,
    description: 'Pop artist',
    genre: 'Pop',
    followers: '1.4M',
    bio: 'Sunset Vibes 是一位温暖治愈的流行音乐艺术家，她的音乐就像夕阳一样温暖人心。她的歌曲大多讲述关于爱情、友情和生活的美好瞬间，旋律优美，歌词真挚。她的音乐能够陪伴听众度过每一个美好的黄昏时光。'
  },
  {
    id: 12,
    name: 'City Beats',
    avatar: `/photo/${photos[11]}`,
    description: 'Hip-Hop artist',
    genre: 'Hip-Hop',
    followers: '2.3M',
    bio: 'City Beats 是一位来自街头的说唱艺术家，他的音乐真实地反映了城市生活的方方面面。他的歌词犀利深刻，节奏感强烈，每一首歌都充满了力量和态度。他从地下说唱圈起步，如今已成为备受瞩目的说唱新星。'
  },
  {
    id: 13,
    name: 'Cosmic Sounds',
    avatar: `/photo/${photos[12]}`,
    description: 'Ambient space music',
    genre: 'Ambient',
    followers: '560K',
    bio: 'Cosmic Sounds 是一位专注于太空主题的环境音乐创作者，他的音乐灵感来源于宇宙、星空和未知的太空世界。他的作品充满了神秘感和探索精神，能够让听众在音乐中遨游太空，感受宇宙的浩瀚与美丽。'
  },
  {
    id: 14,
    name: 'Water Music',
    avatar: `/photo/${photos[13]}`,
    description: 'Folk singer-songwriter',
    genre: 'Folk',
    followers: '420K',
    bio: 'Water Music 是一位民谣创作歌手，她的音乐如流水般清澈纯净。她的歌曲大多以自然为主题，用简单的吉他伴奏和真挚的歌声，讲述着关于河流、海洋和雨水的故事。她的音乐能够洗涤心灵，带来内心的平静。'
  },
  {
    id: 15,
    name: 'Rock Legends',
    avatar: `/photo/${photos[14]}`,
    description: 'Classic rock band',
    genre: 'Rock',
    followers: '4.2M',
    bio: 'Rock Legends 是一支传奇摇滚乐队，成立已有20年历史。他们的音乐风格深受经典摇滚影响，同时融入了现代元素。乐队成员都是经验丰富的音乐人，他们的现场演出总是能够点燃全场，是摇滚乐迷心中的经典。'
  },
  {
    id: 16,
    name: 'Smooth Jazz',
    avatar: `/photo/${photos[15]}`,
    description: 'Jazz ensemble',
    genre: 'Jazz',
    followers: '1.9M',
    bio: 'Smooth Jazz 是一支专业的爵士乐团，由多位顶尖爵士乐手组成。他们的音乐风格优雅流畅，既有传统爵士的精髓，又有现代爵士的创新。无论是小酒馆的即兴演出还是音乐厅的正式演出，他们都能带来完美的爵士体验。'
  },
  {
    id: 17,
    name: 'Tech Music',
    avatar: `/photo/${photos[16]}`,
    description: 'Electronic producer',
    genre: 'Electronic',
    followers: '1.1M',
    bio: 'Tech Music 是一位专注于技术电子音乐的制作人，他的音乐充满了科技感和未来感。他擅长使用各种电子乐器和合成器，创造出复杂而精致的电子音乐作品。他的音乐在电子音乐节和俱乐部中广受欢迎。'
  }
];

// 歌曲数据 - 与艺术家ID绑定
export const songs = [
  // Echo Valley (artistId: 1)
  {
    id: 1,
    title: 'Midnight Dreams',
    artist: 'Echo Valley',
    artistId: 1,
    duration: '03:45',
    cover: `/photo/${photos[0]}`,
    genre: 'Electronic'
  },
  {
    id: 18,
    title: 'Electric Storm',
    artist: 'Echo Valley',
    artistId: 1,
    duration: '04:20',
    cover: `/photo/${photos[0]}`,
    genre: 'Electronic'
  },
  {
    id: 19,
    title: 'Digital Pulse',
    artist: 'Echo Valley',
    artistId: 1,
    duration: '03:58',
    cover: `/photo/${photos[0]}`,
    genre: 'Electronic'
  },
  // Urban Beats (artistId: 2)
  {
    id: 2,
    title: 'City Lights',
    artist: 'Urban Beats',
    artistId: 2,
    duration: '04:12',
    cover: `/photo/${photos[1]}`,
    genre: 'Pop'
  },
  {
    id: 20,
    title: 'Night Drive',
    artist: 'Urban Beats',
    artistId: 2,
    duration: '03:35',
    cover: `/photo/${photos[1]}`,
    genre: 'Pop'
  },
  {
    id: 21,
    title: 'Summer Vibes',
    artist: 'Urban Beats',
    artistId: 2,
    duration: '04:08',
    cover: `/photo/${photos[1]}`,
    genre: 'Pop'
  },
  // Coastal Sounds (artistId: 3)
  {
    id: 3,
    title: 'Ocean Waves',
    artist: 'Coastal Sounds',
    artistId: 3,
    duration: '05:23',
    cover: `/photo/${photos[2]}`,
    genre: 'Ambient'
  },
  {
    id: 22,
    title: 'Tide Pool',
    artist: 'Coastal Sounds',
    artistId: 3,
    duration: '06:15',
    cover: `/photo/${photos[2]}`,
    genre: 'Ambient'
  },
  {
    id: 23,
    title: 'Beach Meditation',
    artist: 'Coastal Sounds',
    artistId: 3,
    duration: '05:42',
    cover: `/photo/${photos[2]}`,
    genre: 'Ambient'
  },
  // Nature Vibes (artistId: 4)
  {
    id: 4,
    title: 'Mountain Peak',
    artist: 'Nature Vibes',
    artistId: 4,
    duration: '03:58',
    cover: `/photo/${photos[3]}`,
    genre: 'Folk'
  },
  {
    id: 24,
    title: 'Forest Walk',
    artist: 'Nature Vibes',
    artistId: 4,
    duration: '04:25',
    cover: `/photo/${photos[3]}`,
    genre: 'Folk'
  },
  // Wild West (artistId: 5)
  {
    id: 5,
    title: 'Desert Storm',
    artist: 'Wild West',
    artistId: 5,
    duration: '04:35',
    cover: `/photo/${photos[4]}`,
    genre: 'Rock'
  },
  {
    id: 25,
    title: 'Highway Rider',
    artist: 'Wild West',
    artistId: 5,
    duration: '04:12',
    cover: `/photo/${photos[4]}`,
    genre: 'Rock'
  },
  {
    id: 26,
    title: 'Rebel Heart',
    artist: 'Wild West',
    artistId: 5,
    duration: '03:55',
    cover: `/photo/${photos[4]}`,
    genre: 'Rock'
  },
  // City Pop (artistId: 6)
  {
    id: 6,
    title: 'Sunset Boulevard',
    artist: 'City Pop',
    artistId: 6,
    duration: '03:21',
    cover: `/photo/${photos[5]}`,
    genre: 'Jazz'
  },
  {
    id: 27,
    title: 'Jazz Night',
    artist: 'City Pop',
    artistId: 6,
    duration: '04:48',
    cover: `/photo/${photos[5]}`,
    genre: 'Jazz'
  },
  {
    id: 28,
    title: 'Smooth Groove',
    artist: 'City Pop',
    artistId: 6,
    duration: '04:15',
    cover: `/photo/${photos[5]}`,
    genre: 'Jazz'
  },
  // Synthwave (artistId: 7)
  {
    id: 7,
    title: 'Neon Nights',
    artist: 'Synthwave',
    artistId: 7,
    duration: '04:47',
    cover: `/photo/${photos[6]}`,
    genre: 'Electronic'
  },
  {
    id: 29,
    title: 'Retro Future',
    artist: 'Synthwave',
    artistId: 7,
    duration: '04:30',
    cover: `/photo/${photos[6]}`,
    genre: 'Electronic'
  },
  // Nature Sounds (artistId: 8)
  {
    id: 8,
    title: 'Forest Path',
    artist: 'Nature Sounds',
    artistId: 8,
    duration: '05:12',
    cover: `/photo/${photos[7]}`,
    genre: 'Ambient'
  },
  {
    id: 30,
    title: 'Mountain Echo',
    artist: 'Nature Sounds',
    artistId: 8,
    duration: '05:55',
    cover: `/photo/${photos[7]}`,
    genre: 'Ambient'
  },
  // Cloud Nine (artistId: 9)
  {
    id: 9,
    title: 'Sky High',
    artist: 'Cloud Nine',
    artistId: 9,
    duration: '03:56',
    cover: `/photo/${photos[8]}`,
    genre: 'Pop'
  },
  {
    id: 31,
    title: 'Floating',
    artist: 'Cloud Nine',
    artistId: 9,
    duration: '04:02',
    cover: `/photo/${photos[8]}`,
    genre: 'Pop'
  },
  {
    id: 32,
    title: 'Dream State',
    artist: 'Cloud Nine',
    artistId: 9,
    duration: '03:48',
    cover: `/photo/${photos[8]}`,
    genre: 'Pop'
  },
  // Digital Dreams (artistId: 10)
  {
    id: 10,
    title: 'Electric Pulse',
    artist: 'Digital Dreams',
    artistId: 10,
    duration: '04:18',
    cover: `/photo/${photos[9]}`,
    genre: 'Electronic'
  },
  {
    id: 33,
    title: 'Code Breaker',
    artist: 'Digital Dreams',
    artistId: 10,
    duration: '04:35',
    cover: `/photo/${photos[9]}`,
    genre: 'Electronic'
  },
  // Sunset Vibes (artistId: 11)
  {
    id: 11,
    title: 'Golden Hour',
    artist: 'Sunset Vibes',
    artistId: 11,
    duration: '03:42',
    cover: `/photo/${photos[10]}`,
    genre: 'Pop'
  },
  {
    id: 34,
    title: 'Evening Glow',
    artist: 'Sunset Vibes',
    artistId: 11,
    duration: '03:55',
    cover: `/photo/${photos[10]}`,
    genre: 'Pop'
  },
  {
    id: 35,
    title: 'Twilight',
    artist: 'Sunset Vibes',
    artistId: 11,
    duration: '04:10',
    cover: `/photo/${photos[10]}`,
    genre: 'Pop'
  },
  // City Beats (artistId: 12)
  {
    id: 12,
    title: 'Urban Jungle',
    artist: 'City Beats',
    artistId: 12,
    duration: '04:29',
    cover: `/photo/${photos[11]}`,
    genre: 'Hip-Hop'
  },
  {
    id: 36,
    title: 'Street Flow',
    artist: 'City Beats',
    artistId: 12,
    duration: '04:15',
    cover: `/photo/${photos[11]}`,
    genre: 'Hip-Hop'
  },
  {
    id: 37,
    title: 'City Lights',
    artist: 'City Beats',
    artistId: 12,
    duration: '03:58',
    cover: `/photo/${photos[11]}`,
    genre: 'Hip-Hop'
  },
  // Cosmic Sounds (artistId: 13)
  {
    id: 13,
    title: 'Starlight',
    artist: 'Cosmic Sounds',
    artistId: 13,
    duration: '05:05',
    cover: `/photo/${photos[12]}`,
    genre: 'Ambient'
  },
  {
    id: 38,
    title: 'Galaxy Drift',
    artist: 'Cosmic Sounds',
    artistId: 13,
    duration: '06:20',
    cover: `/photo/${photos[12]}`,
    genre: 'Ambient'
  },
  // Water Music (artistId: 14)
  {
    id: 14,
    title: 'Riverside',
    artist: 'Water Music',
    artistId: 14,
    duration: '04:01',
    cover: `/photo/${photos[13]}`,
    genre: 'Folk'
  },
  {
    id: 39,
    title: 'Stream Flow',
    artist: 'Water Music',
    artistId: 14,
    duration: '04:18',
    cover: `/photo/${photos[13]}`,
    genre: 'Folk'
  },
  // Rock Legends (artistId: 15)
  {
    id: 15,
    title: 'Thunder Road',
    artist: 'Rock Legends',
    artistId: 15,
    duration: '03:38',
    cover: `/photo/${photos[14]}`,
    genre: 'Rock'
  },
  {
    id: 40,
    title: 'Power Chord',
    artist: 'Rock Legends',
    artistId: 15,
    duration: '04:25',
    cover: `/photo/${photos[14]}`,
    genre: 'Rock'
  },
  {
    id: 41,
    title: 'Guitar Hero',
    artist: 'Rock Legends',
    artistId: 15,
    duration: '04:12',
    cover: `/photo/${photos[14]}`,
    genre: 'Rock'
  },
  // Smooth Jazz (artistId: 16)
  {
    id: 16,
    title: 'Jazz Cafe',
    artist: 'Smooth Jazz',
    artistId: 16,
    duration: '04:52',
    cover: `/photo/${photos[15]}`,
    genre: 'Jazz'
  },
  {
    id: 42,
    title: 'Midnight Session',
    artist: 'Smooth Jazz',
    artistId: 16,
    duration: '05:15',
    cover: `/photo/${photos[15]}`,
    genre: 'Jazz'
  },
  {
    id: 43,
    title: 'Saxophone Dreams',
    artist: 'Smooth Jazz',
    artistId: 16,
    duration: '04:38',
    cover: `/photo/${photos[15]}`,
    genre: 'Jazz'
  },
  // Tech Music (artistId: 17)
  {
    id: 17,
    title: 'Digital Age',
    artist: 'Tech Music',
    artistId: 17,
    duration: '03:27',
    cover: `/photo/${photos[16]}`,
    genre: 'Electronic'
  },
  {
    id: 44,
    title: 'Binary Code',
    artist: 'Tech Music',
    artistId: 17,
    duration: '04:05',
    cover: `/photo/${photos[16]}`,
    genre: 'Electronic'
  },
  {
    id: 45,
    title: 'Algorithm',
    artist: 'Tech Music',
    artistId: 17,
    duration: '03:50',
    cover: `/photo/${photos[16]}`,
    genre: 'Electronic'
  }
];

// 播放列表数据
export const playlists = [
  {
    id: 1,
    title: 'Chill Vibes',
    artist: 'Relaxation Mix',
    duration: '45:23',
    cover: `/photo/${photos[0]}`,
    songCount: 12,
    songs: [songs[0], songs[2], songs[7], songs[12]]
  },
  {
    id: 2,
    title: 'Workout Energy',
    artist: 'Power Playlist',
    duration: '52:15',
    cover: `/photo/${photos[1]}`,
    songCount: 14,
    songs: [songs[4], songs[11], songs[14]]
  },
  {
    id: 3,
    title: 'Late Night Drive',
    artist: 'Road Trip Mix',
    duration: '38:42',
    cover: `/photo/${photos[2]}`,
    songCount: 10,
    songs: [songs[1], songs[5], songs[9]]
  },
  {
    id: 4,
    title: 'Jazz Collection',
    artist: 'Smooth Classics',
    duration: '41:18',
    cover: `/photo/${photos[15]}`,
    songCount: 8,
    songs: [songs[5], songs[15]]
  },
  {
    id: 5,
    title: 'Electronic Dreams',
    artist: 'EDM Mix',
    duration: '48:30',
    cover: `/photo/${photos[6]}`,
    songCount: 13,
    songs: [songs[0], songs[6], songs[9], songs[16]]
  },
  {
    id: 6,
    title: 'Pop Hits 2024',
    artist: 'Top Charts',
    duration: '43:55',
    cover: `/photo/${photos[10]}`,
    songCount: 11,
    songs: [songs[1], songs[8], songs[10]]
  },
  {
    id: 7,
    title: 'Nature Sounds',
    artist: 'Peaceful Moments',
    duration: '55:20',
    cover: `/photo/${photos[7]}`,
    songCount: 15,
    songs: [songs[2], songs[7], songs[12]]
  },
  {
    id: 8,
    title: 'Rock Anthems',
    artist: 'Classic Rock',
    duration: '46:12',
    cover: `/photo/${photos[14]}`,
    songCount: 12,
    songs: [songs[4], songs[14]]
  }
];

// 音乐类型数据
export const genres = [
  {
    name: 'Rock',
    preview: 'Best of 80s, 90s',
    cover: `/photo/${photos[4]}`,
    songs: songs.filter(s => s.genre === 'Rock')
  },
  {
    name: 'Dubstep',
    preview: 'Bass, Drop, Remix',
    cover: `/photo/${photos[6]}`,
    songs: songs.filter(s => s.genre === 'Electronic')
  },
  {
    name: 'Electro',
    preview: 'EDM, Dance, Party',
    cover: `/photo/${photos[9]}`,
    songs: songs.filter(s => s.genre === 'Electronic')
  },
  {
    name: 'Jazz',
    preview: 'Smooth, Classic, Sax',
    cover: `/photo/${photos[5]}`,
    songs: songs.filter(s => s.genre === 'Jazz')
  },
  {
    name: 'Techno',
    preview: 'Clubs, Rave, Beat',
    cover: `/photo/${photos[11]}`,
    songs: songs.filter(s => s.genre === 'Electronic')
  },
  {
    name: 'Country',
    preview: 'Folk, Guitar, Road',
    cover: `/photo/${photos[3]}`,
    songs: songs.filter(s => s.genre === 'Folk')
  }
];
