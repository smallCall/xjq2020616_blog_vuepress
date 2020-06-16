module.exports = {
  "title": "愤怒的熊猫",
  "description": "记录每一次的成长",
  //指定 vuepress build 的输出目录
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/熊猫.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // 导航栏配置
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "修改时间",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/smallCall?tab=repositories",
            "icon": "reco-gitlab"
          }
        ]
      }
    ],
    //博客配置
    "type": "blog",
    "blogConfig": {
      "category": {
        // 在导航栏菜单中所占的位置
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 友情链接
    "friendLink": [
      {
        "title": "云应用系统开发技术",
        "desc": "电子书《云应用系统开发技术》",
        "link": "https://cloudappdev.netlify.app/"
      },
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }
    ],
	 "logo": "/logo.png",
    "search": true,
    //最大搜索数量
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后一次更新时间：",
    "author": "panda",
    //设置首页头像
    "authorAvatar": "/大熊猫.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    // 是否在每个代码块的左侧显示行号。
    "lineNumbers": false
  }
}