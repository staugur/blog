(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{556:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#!/usr/bin/env python\n#coding:utf8\n#get system info from psutil\n#required:psutil\ntry:\n    import sys,psutil,platform,commands,json,socket,os\nexcept ImportError as msg:\n    print "Import Error, because %s" % msg\n    sys.exit(1)\n\nclass SysInfo():\n    sys_ip=socket.gethostbyname(socket.gethostname())\n    try:\n        client_ip=os.environ[\'SSH_CONNECTION\'].split()[0]\n    except:\n        client_ip=\'unknown\'\n    sys_version=platform.linux_distribution()\n    sys_fqdn=platform.uname()[1]   #hostname,eg:localhost.localdomain\n    sys_kernel=platform.uname()[2] #kernel version\n    sys_arch=platform.uname()[4]   #eg:x86_64 amd64 win32\n\n    def hostname(self):\n        return json.dumps({"Hostname": self.sys_fqdn})\n\n    def ip(self):\n        return json.dumps({"ServerIP": self.sys_ip, \'SSH_Client_IP\': self.client_ip})\n\n    def Kernel(self):\n        return json.dumps({"Kernel": self.sys_kernel})\n\n    def Arch(self):\n        return json.dumps({"Arch": self.sys_arch})\n\n    def Version(self):\n        return json.dumps({"SysVersion": self.sys_version})\n\n    def CPU(self):\n        cpu_label=str(commands.getoutput(\'grep "model name" /proc/cpuinfo | awk -F ": " \\\'{print $2}\\\' | head -1\'))\n        cpu_cache=str(commands.getoutput(\'grep "cache size" /proc/cpuinfo|uniq|awk \\\'{print $4,$5}\\\'\'))\n        cpu_time=psutil.cpu_times()\n        cpu_logical_nums=psutil.cpu_count()\n        cpu_physical_nums=psutil.cpu_count(logical=False)\n        return json.dumps({"Label": str(cpu_label), "Logical": int(cpu_logical_nums), "Cache_size": str(cpu_cache)})\n\n    def MEM(self):\n        mem=psutil.virtual_memory()\n        total=mem.total\n        free=mem.free\n        mem_total=str(total / 1024 / 1024) + \'M\'\n        mem_free=str(free / 1024 / 1024) + \'M\'\n        try:\n            buffers=mem.buffers\n            cached=mem.cached\n            UsedPerc=100 * int(total - free - cached - buffers) / int(total)\n\n            memused=str(UsedPerc)+\'%\'\n            return json.dumps({"Total": mem_total, "Free": mem_free, "Memory_UsageRate": memused})\n        except AttributeError:\n            return json.dumps({"Total": mem_total, "Free": mem_free})\n\n    def DISK(self):\n        ps=0\n        pt=[]\n        while ps < len(psutil.disk_partitions()):\n            for i in range(3):\n                pt.append(psutil.disk_partitions()[ps][i])\n                pt.append(str(psutil.disk_usage(psutil.disk_partitions()[ps][1])[-1])+\'%\')\n                ps+=1\n        return json.dumps({"Partitions": len(psutil.disk_partitions()), "DiskInfo": pt})\n\n    def NETWORK(self):\n        net_io=psutil.net_io_counters(pernic=False)[0:4]\n        return json.dumps({"NetworkFlow": str(net_io)})\n\n    def OTHER(self):\n        login_users=len(psutil.users())\n        pid_nums=len(psutil.pids())\n        return json.dumps({"LoginUserNums": int(login_users), "PidNums": int(pid_nums)})\n\nif __name__ == \'__main__\':\n    info=SysInfo()\n    print info.hostname()\n    print info.ip()\n    print info.Version()\n    print info.Kernel()\n    print info.Arch()\n    print info.CPU()\n    print info.MEM()\n    print info.DISK()\n    #print info.NETWORK()\n    print info.OTHER()\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);