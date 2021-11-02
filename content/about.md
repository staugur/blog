---
title: "About"
date: "2016-11-05"
menu: "main"
showComments: false
---

<style>

    @import url('https://fonts.googleapis.com/css?family=Katibeh&display=swap');

    .about-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .about-info-left li {
        list-style-type: none;
    }

    .about-info-right {
        margin: .5em 1.25em;
    }

    .about-info-right img {
        width: 130px;
    }

    .about-info-right .left-ear,
    .about-info-right .left-hand,
    .about-info-right .right-ear,
    .about-info-right .right-hand {
        display: none;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        .about-info {
            flex-direction: column-reverse;
            align-items: center;
        }

        .about-info-right {
            margin: auto auto 2em;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .about-info-right img {
            border-radius: 50%;
            -webkit-border-radius: 50%;
        }

        .about-info-right .left-hand {
            font-family: 'Katibeh';
            display: inline;
            font-size: 5em;
            transform: translate(20px);
            -moz-transform: translate(20px);
            -webkit-transform: translate(20px);
            -o-transform: translate(20px);
        }

        .about-info-right .right-hand {
            font-family: 'Katibeh';
            display: inline;
            font-size: 5em;
            transform: translate(-18px);
            -moz-transform: translate(-18px);
            -webkit-transform: translate(-18px);
            -o-transform: translate(-18px);
        }

        .about-info-right .left-ear {
            display: inline;
            font-size: 1.2em;
            align-self: flex-start;
            transform: rotate(-40deg) translate(20px, 15px);
            -moz-transform: rotate(-40deg) translate(20px, 15px);
            -webkit-transform: rotate(-40deg) translate(20px, 15px);
            -o-transform: rotate(-40deg) translate(20px, 15px);
        }

        .about-info-right .right-ear {
            display: inline;
            font-size: 1.2em;
            align-self: flex-start;
            transform: rotate(45deg) translate(-13px, 15px);
            -moz-transform: rotate(45deg) translate(-13px, 15px);
            -webkit-transform: rotate(45deg) translate(-13px, 15px);
            -o-transform: rotate(45deg) translate(-13px, 15px);
        }
    }
    section {
        font-size: 1.1em;
        font-weight: 600;
        padding: 5px 0px;
    }
</style>


<div class="about-info">
    <div class="about-info-left">
        <p>一个 SA/DevOpser，在此记录技术点滴，开源项目与文档，分享经验与技术。</p>
        <p>Contact me:</p>
        <ul>
	<li><p><span class="iconfont icon-mail"></span> Email: <a href="mailto:me@tcw.im"
                    rel="nofollow noreferrer" target="_blank">me@tcw.im</a></p></li>
	<li><p><span class="iconfont icon-github"></span> GitHub: <a href="https://github.com/staugur"
                        rel="nofollow noreferrer" target="_blank">staugur</a></p></li>
        </ul>
    </div>
    <div class="about-info-right">
	    <div class="left-hand"><span style="font-size: 0.5em">&ensp;</span>٩</div>
        <div class="left-ear">▲</div>
        <img alt="Avatar" src="https://static.saintic.com/cdn/images/at.png!/fw/300">
        <div class="right-ear">▲</div>
        <div class="right-hand">و<span style="font-size: 0.5em">✧</span></div>
    </div>
</div>

<section>My Github Chart:</section>

<p><img src="https://ghchart.rshah.org/staugur" alt="staugur's Github chart" style="width: 100%;"></p>

<section>My Public Page:</section>

我的Pypi公共库是-->> [pypi/saintic](https://pypi.org/user/saintic/)

我的GitHub私人代码仓库是-->> [github/staugur](https://github.com/staugur)

我的Docker仓库是-->> [docker/staugur](https://hub.docker.com/u/staugur)

<section>My Open Source Project:</section>

<p>Python:</p>

- [grab_huaban_board](https://github.com/staugur/grab_huaban_board) - 抓取花瓣网爬虫

- [Flask-PluginKit](https://github.com/staugur/Flask-PluginKit) - Flask插件式开发工具包

- [sapic(picbed)](https://github.com/sapicd/sapic) - 多存储、扩展式图床

<p>Golang:</p>

- [rtfd](https://github.com/staugur/rtfd) - sphinx文档构建工具

<p>Javascript/Node.js/Vue.js:</p>

- [down2local](https://github.com/staugur/down2local) - 下载中转

- [vuepress-plugin-utterances](https://github.com/staugur/vuepress-plugin-utterances) - utterances评论系统的vuepress插件

<small>节选部分，如有兴趣可至GitHub...</small>

<br>

<center>  ·End·  </center>
