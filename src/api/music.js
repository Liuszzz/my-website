const music = [
    {
        //登录
        name: 'login',
        url: '/music/login/cellphone?phone=15579124028&password=liuxin123.',
        method: 'GET'
    },
    {
        //登录
        name: 'postLogin',
        url: '/music/login/cellphone',
        method: 'POST'
    },
    {
        //获取用户信息 , 歌单，收藏，mv, dj 数量
        name: 'getSubcount',
        url: '/music/user/subcount',
        method: 'GET'
    },
    {
        //获取用户的歌单{创建的和喜欢的歌单}
        name: 'getMyPlaylist',
        url: '/music/user/playlist',
        method: 'POST'
    },
    {
        //获取歌单详情
        name: 'getPlaylistDetail',
        url: '/music/playlist/detail',
        method: 'POST'
    },
    {
        //我的歌手
        name: 'myArtist',
        url: '/music/artist/sublist',
        method: 'GET'
    },
    {
        //日推
        name: 'personalized',
        url: '/music/personalized',
        method: 'GET'
    },
    {
        //私人FM
        name: 'personal_fm',
        url: '/music/personal_fm',
        method: 'GET'
    }
]

export default music
