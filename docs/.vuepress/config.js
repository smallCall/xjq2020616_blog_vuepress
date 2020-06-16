module.exports = {
  "title": "熊猫笔记",
  "description": "微笑面对毒打",
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
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "更新记录",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "学习海洋",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitLab",
            "link": "https://gitlab.com/bobyuan/",
            "icon": "reco-gitlab"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
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
    // 
	"logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后更新时间",
    "author": "Panda",
    "authorAvatar": "/大熊猫.png",
    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": false
  }
}