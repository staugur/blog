(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{521:function(n,s,t){"use strict";t.r(s);var a=t(4),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("以下描述引用自"),t("a",{attrs:{href:"https://oss.so/article/55",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://oss.so/article/55"),t("OutboundLink")],1)]),n._v(" "),t("blockquote",[t("p",[n._v("经过访问BING的网址最终发现，bing中文网一直在提供每日更新背景图片壁纸的json数据。访问网址："),t("a",{attrs:{href:"http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("根据上面地址的结构，我暂时研究到就三项属性有效，他们分别是")]),n._v(" "),t("p",[n._v("1、format，非必要。我理解为输出格式，不存在或者不等于js，即为xml格式，等于js时，输出json格式；")]),n._v(" "),t("p",[n._v("2、idx，非必要。不存在或者等于0时，输出当天的图片，-1为已经预备用于明天显示的信息，1则为昨天的图片，idx最多获取到之前16天的图片信息；*")]),n._v(" "),t("p",[n._v("3、n，必要。这是输出信息的数量，比如n=1，即为1条，以此类推，至多输出8条；*")]),n._v(" "),t("p",[n._v("*号注释：此处我们要注意的时，是否正常的输出信息，与n和idx有关，通过idx的值，我们就可以获得之前bing所使用的背景图片的信息了。")])]),n._v(" "),t("p",[t("strong",[n._v("补充描述")])]),n._v(" "),t("p",[n._v("返回的图片url是推荐使用的，不过接口同时返回了urlbase，可以根据此项拼接不同分辨率，如1366x768、1980x1080。")]),n._v(" "),t("p",[t("strong",[n._v("返回描述")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "images": [\n        {\n            "startdate": "20171009",\n            "fullstartdate": "201710091600",\n            "enddate": "20171010",\n            "url": "/az/hprichbg/rb/SoyuzReturn_ZH-CN9848773206_1920x1080.jpg",\n            "urlbase": "/az/hprichbg/rb/SoyuzReturn_ZH-CN9848773206",\n            "copyright": "联盟号航天器下降模块返回地球 (© Bill Ingalls/NASA)",\n            "copyrightlink": "http://www.bing.com/search?q=%E8%88%AA%E5%A4%A9%E5%99%A8&form=hpcapt&mkt=zh-cn",\n            "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20171009_SoyuzReturn%22&FORM=HPQUIZ",\n            "wp": true,\n            "hsh": "8c4989f0b54d9f847280af90f0ced6d1",\n            "drk": 1,\n            "top": 1,\n            "bot": 1,\n            "hs": []\n        }\n    ],\n    "tooltips": {\n        "loading": "正在加载...",\n        "previous": "上一个图像",\n        "next": "下一个图像",\n        "walle": "此图片不能下载用作壁纸。",\n        "walls": "下载今日美图。仅限用作桌面壁纸。"\n    }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br")])]),t("p",[t("strong",[n._v("开放接口")])]),n._v(" "),t("p",[t("a",{attrs:{href:"https://open.saintic.com/openapi#Bing%E4%BB%8A%E6%97%A5%E7%BE%8E%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://open.saintic.com/OpenApi#Bing今日美图"),t("OutboundLink")],1)]),n._v(" "),t("p",[t("strong",[n._v("今日美图")])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://open.saintic.com/api/bingPic/",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);