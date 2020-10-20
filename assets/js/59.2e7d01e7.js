(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{539:function(s,n,r){"use strict";r.r(n);var t=r(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,r=s._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("p",[s._v("redis单机版数据迁移。")]),s._v(" "),r("p",[s._v("从一个实例迁移到另一个实例，使用于本机不同端口迁移备份、其他机器间迁移备份。")]),s._v(" "),r("p",[s._v("工具是一个简单的python脚本，指定redis的源和目标信息即可。")]),s._v(" "),r("p",[s._v("脚本链接："),r("a",{attrs:{href:"https://github.com/staugur/scripts/blob/master/services/migrateredis.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/staugur/scripts/blob/master/services/migrateredis.py"),r("OutboundLink")],1)]),s._v(" "),r("p",[s._v("其内容直接贴在下面：")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v('# -*- coding: utf-8 -*-\n"""\n    migrateredis.py\n    ---------------\n\n    迁移redis数据，可以从本机迁移到其他机器，迁移一个库或多个库中数据。\n\n    原理：redis dump/restore命令\n\n    依赖：pip install redis>=2.10.5\n"""\n\nfrom redis import from_url, RedisError\n\ndef migrate(src_url, dst_url):\n    src = from_url(src_url)\n    dst = from_url(dst_url)\n    for key in src.keys():\n        try:\n            dst.restore(key, src.ttl(key), src.dump(key))\n        except RedisError:\n            print(\'Migrate %s failed\' % key)\n\nif __name__ == "__main__":\n    # 源redis的url，格式：\n    #redis://[:password]@host:port/db\n    #host,port必填项,如有密码,记得密码前加冒号,比如redis://localhost:6379/0\n    src_url = "redis://@127.0.0.1:6379/0"\n    # 迁移目标redis的url\n    dst_url = "redis://@127.0.0.1:16379/0"\n    # 执行\n    if src_url and dst_url:\n        migrate(src_url, dst_url)\n')])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br"),r("span",{staticClass:"line-number"},[s._v("33")]),r("br")])]),r("p",[r("strong",[s._v("注意：")])]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[s._v("使用时先安装依赖模块，命令是：pip install redis>=2.10.5\n\n再修改src\\_url和dst\\_url，参见注释，然后用python执行此脚本。\n")])])]),r("p",[s._v("FAQ:")]),s._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[s._v("1. pip install时提示not found command\n\n    答：CentOS系统使用yum install \\-y python-pip安装，Ubuntu使用apt-get install python-pip")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);