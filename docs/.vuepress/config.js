module.exports = {
  base:"/xjq2020616_blog_vuepress/",
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
     "mode": 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
      "modePicker": false ,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "前端",
        "icon": "/web.png",
        "items":[
            {
            "text": "Html笔记",
            "link": "/views/Html笔记/",
            "icon": "reco-gitlab"
          },
          {
            "text": "Css笔记",
            "link": "/views/Css笔记/",
            "icon": "reco-gitlab"
          },
           {
            "text": "JavaScript笔记",
            "link": "/views/JavaScript笔记/",
            "icon": "reco-gitlab"
          }
        ]

      },
      {
        "text": "后台",
        "icon": "/web.png",
        "items":[
        {
          "text": "计算机网络基础",
          "link": "/views/计算机网络基础/",
          "icon": "reco-gitlab"
        },
        {
          "text": "Djiango笔记",
          "link": "/views/Djiango笔记/",
          "icon": "reco-gitlab"
        }
        ]

      },
      {
        "text": "学习海洋",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/smallCall?tab=repositories",
            "icon": "reco-gitlab"
          },
          {
            "text": "bilibili",
            "link": "https://www.bilibili.com/",
            "icon": "reco-bilibili"
          },
          {
            "text": "GitHub学习",
            "link": "https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576",
            "icon": "reco-blog"
          }         
        ]
      },      
      {
        "text": "更新记录",
        "link": "/timeline/",
        "icon": "reco-date"
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "笔记分类"
      },
      "tag": {
        "location": 2,
        "text": "标签分类"
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
	"logo": "/竹笋.png",
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