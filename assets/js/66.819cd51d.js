(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{546:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("下面的代码可以在"),e("a",{attrs:{href:"https://github.com/staugur/rtfd",title:"rtfd",target:"_blank",rel:"noopener noreferrer"}},[s._v("rtfd"),e("OutboundLink")],1),s._v("中找到源码，不过下方代码稍有更改。")]),s._v(" "),e("h6",{attrs:{id:"_1-封装configparser模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-封装configparser模块"}},[s._v("#")]),s._v(" 1. 封装configparser模块")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("说明：解析ini格式的配置文件，对configparser模块简单封装，以方便查询配置。参考下方代码，CfgHandler是主要类，它接收一个ini文件，对于section和item可以直接采用属性的方式调用。")])]),s._v(" "),e("li",[e("p",[s._v("示例：")])])]),s._v(" "),e("p",[s._v("ini文件内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[test]\na = 1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在python中调用：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('cfg = CfgHandler("ini")\ncfg.test.a == cfg.test["a"] ==  cfg["test"].a == cfg["test"]["a"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("代码：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('from os import isfile\nfrom configparser import ConfigParser, ExtendedInterpolation\n\n\nclass SectionHandler(object):\n\n    def __init__(self, cfg, section):\n        self._cfg_file = cfg._cfg_file\n        self._cfg_obj = cfg._cfg_obj\n        self._section = section\n\n    def __str__(self):\n        return "<%s object at %s, the section is %s(in %s)>" % (\n            self.__class__.__name__, hex(id(self)),\n            self._section, self._cfg_file\n        )\n\n    __repr__ = __str__\n\n    def __getattr__(self, option):\n        option = option.lower()\n        if self._cfg_obj.has_option(self._section, option):\n            value = self._cfg_obj.get(self._section, option)\n            if value in ("true", "True"):\n                value = True\n            elif value in ("false", "False"):\n                value = False\n            return value\n        raise AttributeError(\n            "No option %s in section: %s" % (option, self._section)\n        )\n\n    __getitem__ = __getattr__\n\n    def get(self, option, converter=None, default=None, err_ignore=True):\n        try:\n            value = getattr(self, option)\n        except AttributeError:\n            if err_ignore is True:\n                return default\n            else:\n                raise\n        else:\n            if callable(converter):\n                value = converter(value)\n            return value\n\n    def __len__(self):\n        return len(self._cfg_obj.options(self._section))\n\n\nclass CfgHandler(object):\n\n    def __init__(self, cfg=None):\n        self._cfg_file = cfg\n        self._cfg_obj = ConfigParser(interpolation=ExtendedInterpolation())\n        if isfile(self._cfg_file):\n            self._cfg_obj.read(self._cfg_file)\n\n    def __str__(self):\n        return "<%s object at %s, the config file is %s>" % (\n            self.__class__.__name__, hex(id(self)), self._cfg_file\n        )\n\n    __repr__ = __str__\n\n    def __getattr__(self, section):\n        section = section.lower()\n        if self._cfg_obj.has_section(section):\n            return SectionHandler(self, section)\n        raise AttributeError("No section: %s" % section)\n\n    __getitem__ = __getattr__\n\n    @property\n    def sections(self):\n        return self._cfg_obj.sections()\n\n    def options(self, section):\n        return self._cfg_obj.options(section)\n\n    def items(self, section):\n        return self._cfg_obj.items(section)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br")])]),e("h6",{attrs:{id:"_2-click的帮助选项、版本选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-click的帮助选项、版本选项"}},[s._v("#")]),s._v(" 2. click的帮助选项、版本选项")]),s._v(" "),e("p",[s._v("2.1 使用-h显示帮助")]),s._v(" "),e("p",[s._v("默认情况下，click需要使用—help才会显示帮助，不过可以设置这个，示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@click.group(context_settings={'help_option_names': ['-h', '--help']})\ndef cli():\n    pass\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("2.2 打印版本")]),s._v(" "),e("p",[s._v("有时候我们想执行 "),e("code",[s._v("命令 \\-v")]),s._v(" 打印版本，对于click，示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("def print_version(ctx, param, value):\n    if not value or ctx.resilient_parsing:\n        return\n    click.echo('版本')\n    ctx.exit()\n\n@click.group()\n@click.option('--version', '-v', is_flag=True, callback=print_version,\n              expose_value=False, is_eager=True)\ndef cli():\n    pass\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);