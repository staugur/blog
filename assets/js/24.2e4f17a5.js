(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{321:function(e,s,n){"use strict";n.r(s);var t=n(0),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("登录注册系统非常简单，在之前的文章中也提到过。")]),e._v(" "),n("p",[e._v("由于HTTP协议是一种无状态协议，而服务器要跟踪用户状态，就只能通过cookie实现。大多数Web框架提供了Session功能来封装保存用户状态的cookie。")]),e._v(" "),n("p",[n("strong",[e._v("使用Session：")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("优点是简单易用，可以直接从Session中取出用户登录信息。")])]),e._v(" "),n("li",[n("p",[e._v("缺点是服务器需要在内存中维护一个映射表来存储用户登录信息，如果有两台以上服务器，就需要对Session做集群，因此，使用Session的Web App很难扩展。、")])])]),e._v(" "),n("p",[n("strong",[e._v("使用Cookie：")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("优点是可配置的过期时间、易扩展、数据持久等。")])]),e._v(" "),n("li",[n("p",[e._v("缺点是是大小受到限制、潜在的安全风险。")])])]),e._v(" "),n("p",[e._v("Flask提供的session做登录分分钟的事情，使用原始cookie登录，稍微麻烦一点，主要是加密解密过程，防止伪造，实现防伪造cookie的关键是通过一个单向算法（例如MD5），demo repository简化了这一过程。")]),e._v(" "),n("p",[e._v("1. 需要登录页地址如果没有登录返回登录页")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    if request.cookies.get("username"):\n        return render_template("index.html")\n    else:\n        return """<form action="%s" method=\'post\'>\n            <input type="text" name="username" required>\n            <input type="password" name="password" required>\n            <input type="submit" value="登录">\n            </form>""" %url_for("login")\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://static.saintic.com/interest.blog/blog/9781998272413359.png",alt:""}})]),e._v(" "),n("p",[e._v("2.提交表单到登录验证(默认admin、admin)，验证成功(设定cookie key:value)返回登录成功信息")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    username = request.form.get("username")\n    password = request.form.get("password")\n    if username == "admin" and password == "admin":\n        app.logger.info(url_for(\'index\'))\n        resp = make_response(redirect(url_for("index")))\n        resp.set_cookie(key=\'username\', value=username, expires=None)\n        resp.set_cookie(key=\'sessionId\', value=md5(username + password + SecretKey), expires=None)\n        return resp\n    else:\n        return "login failed"\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://static.saintic.com/interest.blog/blog/930215056535399.png",alt:""}})]),e._v(" "),n("p",[e._v("3.注销登录即设定登录时的key:value过期时间为0")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    resp.set_cookie(key='username',  value='', expires=0)\n    resp.set_cookie(key='sessionId',  value='', expires=0)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:"http://static.saintic.com/interest.blog/blog/5931434206370172.png",alt:""}})]),e._v(" "),n("p",[e._v("代码库："),n("a",{attrs:{href:"https://github.com/staugur/flask-thirdLogin-demo/tree/master/flask-cookie-login",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/staugur/flask-thirdLogin-demo/tree/master/flask-cookie-login"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("参考资料："),n("a",{attrs:{href:"http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/00140240726395479019cb0be724e7db42936babd5f9717000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/00140240726395479019cb0be724e7db42936babd5f9717000"),n("OutboundLink")],1)]),e._v(" "),n("Ads")],1)}),[],!1,null,null,null);s.default=a.exports}}]);