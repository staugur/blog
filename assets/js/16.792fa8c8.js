(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{498:function(e,o,t){"use strict";t.r(o);var n=t(4),p=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("Zookeeper")]),e._v(" 分布式服务框架是 Apache Hadoop 的一个子项目，它主要是用来解决分布式应用中经常遇到的一些数据管理问题，如：统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等。")]),e._v(" "),t("p",[e._v("部署Zoo keeper也很简单，有两种模式，standalone和cluster，下面分别讲述。")]),e._v(" "),t("p",[e._v("1).standalone单机模式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("a.官方下载链接，https://zookeeper.apache.org/releases.html，我用的是最新稳定版zookeeper-3.4.8\n\nb.解压到一个目录并进入，比如/data/zookeeper/zk  \n\nc.配置文件：cp  conf/zoo\\_sample.cfg conf/zoo.cfg\n\nd.现在可以直接启动了，单机模式下默认配置已经可以了，不过你可以更改conf目录下的zoo.cfg，单机模式下主要有以下配置：\n")])])]),t("ul",[t("li",[t("p",[e._v("tickTime：这个时间是作为 Zookeeper 服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每个 tickTime 时间就会发送一个心跳。")])]),e._v(" "),t("li",[t("p",[e._v("dataDir：顾名思义就是 Zookeeper 保存数据的目录，默认情况下，Zookeeper 将写数据的日志文件也保存在这个目录里。")])]),e._v(" "),t("li",[t("p",[e._v("clientPort：这个端口就是客户端连接 Zookeeper 服务器的端口，Zookeeper 会监听这个端口，接受客户端的访问请求。")])])]),e._v(" "),t("p",[e._v('PS：日志配置文件是conf/log4j.properties，可以配置日志文件路径，然而我个人测试时发现似乎没什么效果，所以直接修改配置脚本bin/zkEnv.sh，这个脚 本56行处有个ZOO_LOG_DIR="."，这是配置日志路径的变量，此外这个ZK环境脚本可以配置很多，比如日志输出。')]),e._v(" "),t("p",[e._v("2).cluster集群模式")]),e._v(" "),t("p",[e._v("待续")])])}),[],!1,null,null,null);o.default=p.exports}}]);