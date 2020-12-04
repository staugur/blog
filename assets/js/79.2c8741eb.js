(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{376:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("本次分享主题：")]),s._v(" "),a("ul",[a("li",[s._v("三端操作系统复制剪贴板命令")]),s._v(" "),a("li",[s._v("使用golang调用带有管道符的命令。")]),s._v(" "),a("li",[s._v("使用golang调用powershell触发Windows 10桌面消息通知。")]),s._v(" "),a("li",[s._v("使用homebrew安装golang打包编译的可执行程序")])])]),s._v(" "),a("p",[s._v("最近在学习go语言，把之前picbed的命令行cli.py用go重写，在编写过程中，go实现相应功能走了些\n弯路，在本文拎出来分享给大家（新手）。")]),s._v(" "),a("h2",{attrs:{id:"三端复制剪贴板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三端复制剪贴板"}},[s._v("#")]),s._v(" 三端复制剪贴板")]),s._v(" "),a("p",[s._v("三端指的是Windows、Linux、macOS，实现用命令复制内容到系统剪贴板。")]),s._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("p",[s._v("cmd内置的 "),a("code",[s._v("clip")]),s._v(" 命令实现复制剪贴板，示例：")]),s._v(" "),a("div",{staticClass:"language-batch line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" hello world | clip")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("p",[s._v("需要安装第三方软件包 "),a("code",[s._v("xclip")]),s._v(" ，用于桌面环境，\n测试支持Deepin、Fedora、Manjaro、Ubuntu、CentOS，\n其他系统未测试，示例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xclip -selection clipboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),a("p",[s._v("内置的 "),a("code",[s._v("pbcopy")]),s._v(" 命令可以实现复制到系统剪贴板，示例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pbcopy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用golang调用带有管道符的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用golang调用带有管道符的命令"}},[s._v("#")]),s._v(" 使用golang调用带有管道符的命令")]),s._v(" "),a("p",[s._v("go执行系统命令使用 "),a("code",[s._v("os/exec")]),s._v(" 标准库，不过当有管道符的时候就有点麻烦了，这时候google找到了\n捷径，Linux、macOS使用 "),a("code",[s._v("sh -c")]),s._v(" ，而Windows使用 "),a("code",[s._v("cmd.exe /C")]),s._v(" ，示例：")]),s._v(" "),a("h3",{attrs:{id:"linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[s._v("#")]),s._v(" Linux/macOS")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os/exec"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if macOS")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// cmd := fmt.Sprintf(`echo "%s" | pbcopy`, content)')]),s._v("\n\tcmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`echo "%s" | xclip -selection clipboard`')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"windows-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-2"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strings"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os/exec"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n    cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`echo %s | clip`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReplaceAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\terr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" exec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cmd.exe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"使用golang调用powershell触发windows10桌面消息通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用golang调用powershell触发windows10桌面消息通知"}},[s._v("#")]),s._v(" 使用golang调用powershell触发Windows10桌面消息通知")]),s._v(" "),a("p",[s._v("找到一个Win10桌面通知的脚本不容易，得用powershell调起，以下内容保存为xxx.ps1，执行它\n通过 "),a("code",[s._v("powershell xxx.ps1 <Title> <Sub-Title>")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[String]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[String]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SubTitle")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Out-Null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Windows.UI.Notifications.ToastNotification, Windows.UI.Notifications, ContentType = WindowsRuntime]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Out-Null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Out-Null")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$APP_ID")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'110366bd-56e2-47ed-9bdf-3ce1fa408b6c'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$template")]),s._v(" = @"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n<toast>\n    <visual>\n        <binding template="')]),s._v("ToastText02"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">\n            <text id="')]),s._v("1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">'),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('</text>\n            <text id="')]),s._v("2"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">'),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SubTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('</text>\n        </binding>\n    </visual>\n</toast>\n"')]),s._v("@\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$xml")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Object")]),s._v(" Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("XmlDocument\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LoadXml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$toast")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Object")]),s._v(" Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Notifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ToastNotification "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$xml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[Windows.UI.Notifications.ToastNotificationManager]")]),s._v("::CreateToastNotifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$APP_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("在go程序中想调用它，我一时没想到别的方法，暂时思路是把内容保存为临时文件，再用 os/exec 调用，\n如下示例（没有错误处理）：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os/exec"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io/ioutil"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genTmpPS1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\texec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"powershell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-ExecutionPolicy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unrestricted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上传成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已复制到剪贴板"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("genTmpPS1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filepath "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\ttpl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`\nparam(\n    [String] $Title,\n    [String] $SubTitle\n)\n\n[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null\n[Windows.UI.Notifications.ToastNotification, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null\n[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null\n\n$APP_ID = \'110366bd-56e2-47ed-9bdf-3ce1fa408b6c\'\n\n$template = @"\n<toast>\n    <visual>\n        <binding template="ToastText02">\n            <text id="1">$($Title)</text>\n            <text id="2">$($SubTitle)</text>\n        </binding>\n    </visual>\n</toast>\n"@\n\n$xml = New-Object Windows.Data.Xml.Dom.XmlDocument\n$xml.LoadXml($template)\n$toast = New-Object Windows.UI.Notifications.ToastNotification $xml\n[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($APP_ID).Show($toast)\n`')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\ttmpfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" ioutil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TempFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TempDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.ps1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ttmpfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tpl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ttmpfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" tmpfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("h2",{attrs:{id:"使用homebrew安装golang编译的可执行程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用homebrew安装golang编译的可执行程序"}},[s._v("#")]),s._v(" 使用homebrew安装golang编译的可执行程序")]),s._v(" "),a("p",[s._v("go程序编译完成后就一个二进制的可执行文件，在macOS系统中，可以自建一个Tap方便homebrew安装。")]),s._v(" "),a("p",[s._v("相关概念可以参考 "),a("a",{attrs:{href:"https://mogeko.me/2019/046/",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用 Homebrew 维护自己的软件仓库"),a("OutboundLink")],1),s._v("\n这篇文章，这里不再赘述。")]),s._v(" "),a("h3",{attrs:{id:"新发布程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新发布程序"}},[s._v("#")]),s._v(" 新发布程序")]),s._v(" "),a("p",[s._v("当你的程序是第一次发布时，需要先创建一个 "),a("code",[s._v("homebrew-XXX")]),s._v(" 的git仓库，比如我的\n"),a("a",{attrs:{href:"https://github.com/staugur/homebrew-tap",target:"_blank",rel:"noopener noreferrer"}},[s._v("staugur/homebrew-tap"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("以"),a("a",{attrs:{href:"https://github.com/staugur/picbed-cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("picbed-cli"),a("OutboundLink")],1),s._v("的发行版为例，\n我已经编译了macOS版本的压缩包，在release中有附件，压缩包里只有一个picbed-cli可执行文件。")]),s._v(" "),a("p",[s._v("打开macOS终端，执行命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew create 程序包网络下载地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载包，然后提示ENTER回车直接使用编辑器进入编辑 "),a("code",[s._v("xxx.rb")]),s._v(" 文件，修改下desc、homepage两个\n描述信息，修改 "),a("code",[s._v("def install")]),s._v(" 把 "),a("code",[s._v("system ./configure")]),s._v(" 那几行注释，增加 "),a("code",[s._v("bin.install")]),s._v("，\n参考示例：")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PicbedCli")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Formula")]),s._v("\n  desc "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"picbed client cli"')]),s._v("\n  homepage "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/staugur/picbed-cli"')]),s._v("\n  url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://static.saintic.com/download/picbed-cli/picbed-cli.0.4.2-darwin-amd64.tar.gz"')]),s._v("\n  sha256 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c33ae9aae32273e9ea681eff904bfbae912753e7afa0175ad69765fe17b002ff"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")])]),s._v("\n    bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"picbed-cli"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n  test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    system "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("其实也可以不需要 "),a("code",[s._v("brew create")]),s._v(" 命令，参照上述示例填写，把压缩包的地址和sha256填上即可。")]),s._v(" "),a("p",[s._v("示例内容保存为xxx.rb提交到你的git仓库 homebrew-XXX 中")]),s._v(" "),a("h3",{attrs:{id:"更新程序版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新程序版本"}},[s._v("#")]),s._v(" 更新程序版本")]),s._v(" "),a("p",[s._v("只需要编辑git仓库homebrew-XXX下的xxx.rb，修改url为新版本压缩包路径、sha256为新版本压缩包\nsha256值，再提交后即可。")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("brew update && brew upgrade picbed-cli")]),s._v(" 执行版本更新。")]),s._v(" "),a("Ads"),s._v(" "),a("Utterances")],1)}),[],!1,null,null,null);t.default=e.exports}}]);