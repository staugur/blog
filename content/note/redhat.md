---
title: "RHEL Yum Repo Content"
date: 2024-12-07T14:00:13+08:00
tags: ["linux"]
categories: ["笔记"]
---

```ini
#
# Certificate-Based Repositories
# Managed by (rhsm) subscription-manager
#
# *** This file is auto-generated.  Changes made here will be over-written. ***
# *** Use "subscription-manager repo-override --help" if you wish to make changes. ***
#
# If this file is empty and this system is subscribed consider
# a "yum repolist" to refresh available repos
#

[satellite-utils-6.16-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.16 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.16-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.16 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.22-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Jaeger 1.22.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.22/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.13-for-rhel-8-x86_64-debug-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.5-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.5 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.6-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.6 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.8 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.8-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.8 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.5 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.12-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-e4s-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/appstream/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[custom-metrics-autoscaler-2-for-rhel-8-x86_64-debug-rpms]
name = Custom Metrics Autoscaler 2 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/custom-metrics-autoscaler/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-12-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-0.1.3-for-rhel-8-x86_64-files]
name = Network Observability (Files)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/NETOBSERV/1.0/files
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.15 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-tools/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-e4s-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/baseos/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite 6 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/satellite/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-5-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Ceph Storage Tools 5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.17-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.17 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.17/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.7-rpms]
name = Red Hat Container Development Kit 3.7 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.15-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.15 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[interconnect-2-for-rhel-8-x86_64-debug-rpms]
name = JBoss Interconnect 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/interconnect/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/baseos/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2.9-for-rhel-8-x86_64-rpms]
name = Red Hat AMQ Clients 2.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-snr-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability - Self Node Remediation 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-snr/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.4-source-rpms]
name = Red Hat Container Development Kit 3.4 /(Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Engine 2.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.24-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Jaeger 1.24 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.24/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.12-rpms]
name = Red Hat Container Development Kit 3.12 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Automation Hub 4 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-hub/4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.17-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Jaeger 1.17 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.17/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.5-source-rpms]
name = Red Hat Container Development Kit 3.5 /(Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite 6 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/satellite/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-5-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ceph Storage Tools 5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.2-for-rhel-8-x86_64-rpms]
name = JBoss Enterprise Application Platform 7.2 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-7.3-for-rhel-8-x86_64-rpms]
name = Red Hat JBoss Data Grid 7.3 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/7.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.13-for-rhel-8-x86_64-debug-rpms]
name = Logical Volume Manager Storage 4.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.2-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-far-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability - Fence Agents Remediation Operator 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-far/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.14-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.14 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-15-tools-for-rhel-8-x86_64-rpms]
name = Red Hat OpenStack Platform 15 Tools for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.14-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.11-for-rhel-8-x86_64-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cluster-observability-operator-1-for-rhel-8-x86_64-textonly-source-rpms]
name = Cluster Observability Operator (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cluster-observability-operator/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.12-for-rhel-8-x86_64-source-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Builds for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.14-rpms]
name = Red Hat Container Development Kit 3.14 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-for-rhel-8-x86_64-rpms]
name = Fast Datapath for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/fast-datapath/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosds-textonly-3-for-middleware-rpms]
name = Red Hat OpenShift Dev Spaces 3 Container Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/rhosds/3.0/x86_64/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.12-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-source-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat AMQ Clients 2.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[3scale-amp-2-rpms-for-rhel-8-x86_64-debug-rpms]
name = Red Hat 3scale API Management Platform 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/3scale-amp/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-10-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.11-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.11 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.17-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.17 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.17/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.7-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.7 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.0-early-access-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.0 Early Access for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.9-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[application-interconnect-1-for-rhel-8-x86_64-rpms]
name = Red Hat Application Interconnect for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhai/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-4-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Ceph Storage Tools 4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.13-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosdt-2-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift distributed tracing 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.3-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.3 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-2-for-rhel-8-x86_64-rpms]
name = Kernel Module Management 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.18-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.18 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.18/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.7-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.7 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap-solutions/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-textonly-1-for-middleware-rpms]
name = Red Hat JBoss AMQ Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/amq/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rodoo-1-for-rhel-8-x86_64-source-rpms]
name = Run Once Duration Override Operator (RODOO) 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rodoo/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.12-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/resilientstorage/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-e4s-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/highavailability/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.6-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.6 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-serverless-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Openshift Serverless 1 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.6-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-16-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenStack Platform 16 Tools for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.9-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rodoo-1-for-rhel-8-x86_64-rpms]
name = Run Once Duration Override Operator (RODOO) 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rodoo/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nhc-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability - Node Healthcheck Operator 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nhc/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-e4s-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/highavailability/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.16-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.16 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Automation Services Catalog 1 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-services-catalog/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.9-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.9 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.11 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.4-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.4 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.7-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/codeready-builder/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.5-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/highavailability/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat JBoss Data Grid 8.1 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.4-for-rhel-8-x86_64-rpms]
name = OpenShift Tools and Services 4.4 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat JBoss Data Grid 8.4 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.7-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[soa-textonly-1-for-middleware-rpms]
name = Red Hat JBoss SOA Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/soa/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-utils/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/highavailability/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.15-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.15 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat Service Interconnect 1.4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2-for-rhel-8-x86_64-rpms]
name = Red Hat build of Quarkus 2 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-beta-for-rhel-8-x86_64-debug-rpms]
name = Fast Datapath Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/fast-datapath/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMS)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client-2/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.3-for-rhel-8-x86_64-source-rpms]
name = OpenShift Tools and Services 4.3 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-0.1.3-for-rhel-8-x86_64-debug-rpms]
name = Network Observability (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/NETOBSERV/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.16-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.16 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-1.0-for-rhel-8-x86_64-rpms]
name = Kernel Module Management 1.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-8.0-for-rhel-8-x86_64-source-rpms]
name = JBoss Enterprise Application Platform 8.0 (RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/8.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.11-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/resilientstorage/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.6-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Service Interconnect for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.11-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.11 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-2.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Jaeger 2.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/2.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-0.1.3-for-rhel-8-x86_64-rpms]
name = Network Observability (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/NETOBSERV/0.1.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-4.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability 4.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa/1.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/appstream/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Extended Update Support (Source RPMS)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client-2/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Engine 2.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-rhui-source-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (Source RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbeap/7.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-rt-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Real Time (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/rt/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-1.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat Devworkspace 1.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.11-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.11 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.11-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.17-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Jaeger 1.17 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.17/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.12-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-7-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Ceph Storage Tools 7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.2 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.3-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-rhui-source-rpms]
name = JBoss Core Services (RHEL 8) (Source RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbcs/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-capsule-6-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Capsule 6 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-capsule/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-source-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/codeready-builder/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-debug-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosdt-3-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift distributed tracing 3 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.8-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.15 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat build of Quarkus 3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite 6 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/satellite/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat Service Interconnect 1.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.3-for-rhel-8-x86_64-rpms]
name = OpenShift Tools and Services 4.3 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-e4s-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/appstream/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fsw-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Fuse Service Works Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/fsw/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.5-for-rhel-8-x86_64-rpms]
name = OpenShift Tools and Services 4.5 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-interconnect-textonly-1-for-middleware-rpms]
name = Red Hat AMQ Interconnect Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/amq-interconnect/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.12-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[3scale-amp-2-rpms-for-rhel-8-x86_64-source-rpms]
name = Red Hat 3scale API Management Platform 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/3scale-amp/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 (RPMS)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client-2/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.15-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.15 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-4.10-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability 4.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa/1.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.7-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.7 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.10-rpms]
name = Red Hat Container Development Kit 3.10 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.11-for-rhel-8-x86_64-debug-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/appstream/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.10-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.10 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.0-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmtc-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Migration Toolkit for Containers for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmtc/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.4-debug-rpms]
name = Red Hat Container Development Kit 3.4 /(Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosdt-2-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift distributed tracing 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMS)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client-2/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Extended Update Support (RPMS)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client-2/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.9-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.9 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/resilientstorage/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.11-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Data Grid Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jb-datagrid/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.8-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Engine 2.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Virtualization 4 Tools for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhv-tools/4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Migration Toolkit 1.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.6-debug-rpms]
name = Red Hat Container Development Kit 3.6 /(Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.12 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[3scale-amp-2-rpms-for-rhel-8-x86_64-rpms]
name = Red Hat 3scale API Management Platform 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/3scale-amp/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-snr-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability - Self Node Remediation 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-snr/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[interconnect-2-for-rhel-8-x86_64-source-rpms]
name = JBoss Interconnect 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/interconnect/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-e4s-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/baseos/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/codeready-builder/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhose-textonly-1-for-middleware-rpms]
name = Red Hat Middleware Container Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/rhose-middleware/1.0/x86_64/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-8-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ceph Storage Tools 8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.13-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.13 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.4-for-rhel-8-x86_64-source-rpms]
name = OpenShift Tools and Services 4.4 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.4 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[interconnect-2-for-rhel-8-x86_64-rpms]
name = JBoss Interconnect 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/interconnect/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.12-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.12 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosdt-2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift distributed tracing 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat JBoss Data Grid 8.4 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-10-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.10 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-2.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Jaeger 2.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/2.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Virtualization 4 Tools Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/rhv-tools/4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.2-for-rhel-8-x86_64-rpms]
name = Red Hat Migration Toolkit 1.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cert-manager-1.7-for-rhel-8-x86_64-source-rpms]
name = Cert Manager support for Red Hat OpenShift 1.7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cert-manager/1.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.5 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.4-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Core Services Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jbcs/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat build of Quarkus 1 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-capsule-6-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Capsule 6 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-capsule/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-7-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ceph Storage Tools 7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Virtualization 4 Tools for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhv-tools/4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.3-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-interconnect-1-for-rhel-8-x86_64-rpms]
name = JBoss AMQ Interconnect 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq-interconnect/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/supplementary/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.13 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.7-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.7 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.2 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/highavailability/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-e4s-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap-solutions/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.0-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-1.0-for-rhel-8-x86_64-source-rpms]
name = Kernel Module Management 1.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nhc-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability - Node Healthcheck Operator 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nhc/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.9 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-serverless-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Openshift Serverless 1 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Builds 1.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.16-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.16 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-textonly-1-for-middleware-rpms]
name = Red Hat build of Quarkus Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/quarkus/1.0/x86_64/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.10 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-source-rpms]
name = JBoss Core Services (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbcs/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.15-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.15 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.1-for-rhel-8-x86_64-rpms]
name = OpenShift Pipelines 1.1 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.6-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.16-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.16 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-beta-for-rhel-8-x86_64-rpms]
name = Fast Datapath Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/fast-datapath/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2.2-for-rhel-8-x86_64-rpms]
name = Red Hat build of Quarkus 2.2 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.4-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.8-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.8 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-1.0-for-rhel-8-x86_64-rpms]
name = Red Hat Devworkspace 1.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/1.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-6-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Ceph Storage Tools 6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-eus-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/codeready-builder/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-mdr-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability - Machine Deletion Remediation Operator 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-mdr/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-6-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ceph Storage Tools 6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.13-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.15 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.10-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-e4s-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.0-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Builds for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.12 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-4.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability 4.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa/4.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[osso-1-for-rhel-8-x86_64-source-rpms]
name = Secondary Scheduler Operator 1 for RHEL 8 for Red Hat OpenShift (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/osso/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.13-for-rhel-8-x86_64-source-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.8-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/resilientstorage/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.4-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Migration Toolkit 1.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/appstream/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.11-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[custom-metrics-autoscaler-2-for-rhel-8-x86_64-source-rpms]
name = Custom Metrics Autoscaler 2 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/custom-metrics-autoscaler/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.24-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Jaeger 1.24 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.24/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.11-for-rhel-8-x86_64-source-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat build of Quarkus 2.2 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.11-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.11 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jon-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Operations Network Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jon/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.7-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Builds for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.2-for-rhel-8-x86_64-source-rpms]
name = JBoss Enterprise Application Platform 7.2 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.5-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.17-rpms]
name = Red Hat Container Development Kit 3.17 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.17/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.1-for-rhel-8-x86_64-rpms]
name = Red Hat Migration Toolkit 1.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Builds 1.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat AMQ Clients 2.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1-for-rhel-8-x86_64-rpms]
name = Red Hat Service Interconnect for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-0.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Devworkspace 0.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/0.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-beta-for-rhel-8-x86_64-source-rpms]
name = Fast Datapath Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/fast-datapath/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.17-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.17 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.17/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.10-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.4-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Service Interconnect 1.4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.6 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.6-rpms]
name = Red Hat Container Development Kit 3.6 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Engine 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap-solutions/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.2-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-3-for-rhel-8-x86_64-rpms]
name = Red Hat AMQ Clients 3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-for-rhel-8-x86_64-debug-rpms]
name = Fast Datapath for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/fast-datapath/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-17.1-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenStack Platform 17.1 Tools for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/17.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.18-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.18 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.18/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap-solutions/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.7-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.7 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosdt-3-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift distributed tracing 3 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat AMQ Clients 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Engine 2.8 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-15-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenStack Platform 15 Tools for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.7-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.10-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.10 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap-solutions/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.3 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.2-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.2 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Engine 2.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-e4s-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/baseos/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nmo-1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability - Node Maintenance Operator 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nmo/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.9-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.9 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-1-for-rhel-8-x86_64-debug-rpms]
name = Network Observability (NETOBSERV) 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/network-observability/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/appstream/os
enabled = 1
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 1

[lvms-4.13-for-rhel-8-x86_64-source-rpms]
name = Logical Volume Manager Storage 4.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.2-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-4-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ceph Storage Tools 4 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.2-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.1-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.2-for-rhel-8-x86_64-debug-rpms]
name = JBoss Enterprise Application Platform 7.2 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-3-for-rhel-8-x86_64-source-rpms]
name = Red Hat AMQ Clients 3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.14 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[source-to-image-1-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Source-to-Image 1 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/source-to-image/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-2.3-source-rpms]
name = Red Hat Container Development Kit 2.3 /(Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/2.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.11-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.11 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-tools/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoss-1.29-for-rhel-8-x86_64-source-rpms]
name = Red Hat Openshift Serverless 1.29 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1.29/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.1-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.8-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoar-nodejs-12-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Application Runtimes Node.js v12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoar-nodejs/12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4.2-for-rhel-8-x86_64-rpms]
name = Red Hat Automation Hub 4.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-hub/4.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-rpms]
name = JBoss Core Services (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbcs/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-rhui-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbeap/7.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-2-for-rhel-8-x86_64-debug-rpms]
name = Kernel Module Management 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.14-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.14 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.15 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-0.1.3-for-rhel-8-x86_64-source-rpms]
name = Network Observability (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/NETOBSERV/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Virtualization 4 Tools Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/rhv-tools/4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Migration Toolkit 1.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat build of Quarkus 2.2 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-e4s-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/appstream/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoss-1.29-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Openshift Serverless 1.29 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1.29/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rh-gluster-3-client-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Storage Native Client for RHEL 8 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhgs-client/3.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.8-rpms]
name = Red Hat Container Development Kit 3.8 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-far-1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability - Fence Agents Remediation Operator 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-far/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openliberty-textonly-1-for-middleware-rpms]
name = Open Liberty Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/openliberty/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-15-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenStack Platform 15 Tools for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.6-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.6 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-tools/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openjdk-textonly-1-for-middleware-rpms]
name = OpenJDK Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/openjdk/1.0/x86_64/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.16-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.16 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.15-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.15 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.7-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-7.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat JBoss Data Grid 7.3 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/7.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.7-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-mdr-1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability - Machine Deletion Remediation Operator 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-mdr/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat JBoss Data Grid 8.1 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/sap-solutions/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Automation Hub 4 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-hub/4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.14 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.3-for-rhel-8-x86_64-debug-rpms]
name = JBoss Enterprise Application Platform 7.3 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.14-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cert-manager-1.7-for-rhel-8-x86_64-debug-rpms]
name = Cert Manager support for Red Hat OpenShift 1.7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cert-manager/1.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Virtualization 4 Tools for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhv-tools/4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.13-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.13 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[discovery-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Discovery 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/discovery/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Migration Toolkit 1.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.12-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.12 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-2.3-debug-rpms]
name = Red Hat Container Development Kit 2.3 /(Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/2.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.16-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.16 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.22-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Jaeger 1.22.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.22/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[discovery-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Discovery 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/discovery/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMS)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client-2/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.13 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.1-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Pipelines 1.1 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.15 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-5-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ceph Storage Tools 5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/baseos/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[custom-metrics-autoscaler-2-for-rhel-8-x86_64-rpms]
name = Custom Metrics Autoscaler 2 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/custom-metrics-autoscaler/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat build of Quarkus 2 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.12-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.12 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-rt-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Real Time (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/rt/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.5-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.12-for-rhel-8-x86_64-debug-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Automation Services Catalog 1 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-services-catalog/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.4-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Tools and Services 4.4 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-serverless-1-for-rhel-8-x86_64-rpms]
name = Red Hat Openshift Serverless 1 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[wfk-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Web Framework Kit Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/wfk/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cluster-observability-operator-1-for-rhel-8-x86_64-textonly-debug-rpms]
name = Cluster Observability Operator (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cluster-observability-operator/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.16-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.16 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-3-for-rhel-8-x86_64-source-rpms]
name = Red Hat build of Quarkus 3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.15 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-tech-preview-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Automation Services Catalog 1 Tech Preview for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-services-catalog-tech-preview/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-e4s-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat AMQ Clients 3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.15-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.15 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-7-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ceph Storage Tools 7 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.14-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.0-for-rhel-8-x86_64-rpms]
name = OpenShift Pipelines 1.0 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cert-manager-1.7-for-rhel-8-x86_64-rpms]
name = Cert Manager support for Red Hat OpenShift 1.7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cert-manager/1.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-8.0-for-rhel-8-x86_64-debug-rpms]
name = JBoss Enterprise Application Platform 8.0 (RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/8.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.4-rpms]
name = Red Hat Container Development Kit 3.4 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.15 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Service Interconnect 1.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.17-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.17 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.17/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Builds 1.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-4-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ceph Storage Tools 4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Utils 6.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.13-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.13 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap-solutions/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.16-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.16 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.20-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Jaeger 1.20.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.20/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jpp-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Portal Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jpp/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.12-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.12 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.10-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.10 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.13-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Automation Services Catalog 1 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-services-catalog/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nhc-1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability - Node Healthcheck Operator 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nhc/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.7-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.7 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.20-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Jaeger 1.20.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.20/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-mdr-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability - Machine Deletion Remediation Operator 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-mdr/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-1-for-rhel-8-x86_64-source-rpms]
name = Network Observability (NETOBSERV) 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/network-observability/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.3-rpms]
name = Red Hat Container Development Kit 3.3 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.4-for-rhel-8-x86_64-rhui-debug-rpms]
name = JBoss Enterprise Application Platform 7.4 (RHEL 8) (Debug RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbeap/7.4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nmo-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Workload Availability - Node Maintenance Operator 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nmo/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jdv-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Data Virtualization Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jdv/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.5-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.5 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.12-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.12 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[osso-1-for-rhel-8-x86_64-debug-rpms]
name = Secondary Scheduler Operator 1 for RHEL 8 for Red Hat OpenShift (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/osso/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.11 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.15 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/supplementary/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.7-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.7 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.7/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmtc-for-rhel-8-x86_64-source-rpms]
name = Red Hat Migration Toolkit for Containers for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmtc/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Migration Toolkit 1.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.3 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.9-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.9 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.6-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-interconnect-1-for-rhel-8-x86_64-source-rpms]
name = JBoss AMQ Interconnect 1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq-interconnect/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[fast-datapath-for-rhel-8-x86_64-source-rpms]
name = Fast Datapath for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/fast-datapath/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/supplementary/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.6-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.6 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.13-for-rhel-8-x86_64-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-0.10-for-rhel-8-x86_64-source-rpms]
name = Red Hat Devworkspace 0.10 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/0.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.7-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Automation Hub 4.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-hub/4.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.3-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 2.3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-7.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat JBoss Data Grid 7.3 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/7.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/supplementary/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Automation Hub 4 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/automation-hub/4/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-3-for-rhel-8-x86_64-rpms]
name = Red Hat build of Quarkus 3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.16-rpms]
name = Red Hat Container Development Kit 3.16 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/highavailability/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.3-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.3 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-hub-4.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Automation Hub 4.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-hub/4.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-1.0-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Devworkspace 1.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.3-debug-rpms]
name = Red Hat Container Development Kit 3.3 /(Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-nmo-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability - Node Maintenance Operator 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-nmo/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.0-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Pipelines 1.0 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-eus-source-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-ironic-4.12-for-rhel-8-x86_64-rpms]
name = Ironic content for Red Hat OpenShift Container Platform 4.12 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp-ironic/4.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-1.0-for-rhel-8-x86_64-debug-rpms]
name = Kernel Module Management 1.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.13-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.14-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.4 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat build of Quarkus 1 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.15-rpms]
name = Red Hat Container Development Kit 3.15 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 - Extended Update Support (Debug RPMS)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client-2/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.13-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.13 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-interconnect-1-for-rhel-8-x86_64-debug-rpms]
name = JBoss AMQ Interconnect 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq-interconnect/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[devworkspace-0.10-for-rhel-8-x86_64-rpms]
name = Red Hat Devworkspace 0.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/devworkspace/0.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat Migration Toolkit 1.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Service Interconnect for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rh-gluster-3-client-for-rhel-8-x86_64-rpms]
name = Red Hat Storage Native Client for RHEL 8 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhgs-client/3.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.3-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.3 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.15 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-2.0-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Jaeger 2.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/2.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 (Debug RPMS)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client-2/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.4-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.4 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.5-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Tools and Services 4.5 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[kmm-2-for-rhel-8-x86_64-source-rpms]
name = Kernel Module Management 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/kmm/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.24-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Jaeger 1.24 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.24/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.18-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.18 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.18/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.9/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[source-to-image-1-for-rhel-8-x86_64-rpms]
name = OpenShift Source-to-Image 1 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/source-to-image/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[network-observability-1-for-rhel-8-x86_64-rpms]
name = Network Observability (NETOBSERV) 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/network-observability/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.12-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.12 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[discovery-1-for-rhel-8-x86_64-rpms]
name = Red Hat Discovery 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/discovery/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.5-for-rhel-8-x86_64-e4s-debug-rpms]
name = Red Hat Satellite Tools 6.5 for RHEL 8 x86_64 - Update Services SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1-for-rhel-8-x86_64-textonly-rpms]
name = Red Hat OpenShift Builds for RHEL 8 x86_64 Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds-textonly/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-8.0-for-rhel-8-x86_64-rpms]
name = JBoss Enterprise Application Platform 8.0 (RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/8.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.9-rpms]
name = Red Hat Container Development Kit 3.9 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.16-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.16 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.6-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 2.3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhsi-textonly-1-for-middleware-rpms]
name = Red Hat Service Interconnect Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/rhsi/1/x86_64/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Utils 6 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-utils/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.6-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.6 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/codeready-builder/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-2-for-rhel-8-x86_64-source-rpms]
name = Red Hat build of Quarkus 2 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.17-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.17 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.17/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.12-for-rhel-8-x86_64-debug-rpms]
name = Logical Volume Manager Storage (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.12/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/appstream/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-debug-rpms]
name = JBoss Core Services (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbcs/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.15-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.15 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.15/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[application-interconnect-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Application Interconnect for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhai/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.6-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Tools 6.6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6.16-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6.16 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-utils/6.16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-far-1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Workload Availability - Fence Agents Remediation Operator 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-far/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.4-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Automation Platform 2.4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-8-tools-for-rhel-8-x86_64-rpms]
name = Red Hat Ceph Storage Tools 8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/supplementary/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.5-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.5 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhwa-snr-1-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Workload Availability - Self Node Remediation 1 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhwa-snr/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 - Update Services SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.7/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhoss-1.29-for-rhel-8-x86_64-rpms]
name = Red Hat Openshift Serverless 1.29 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhoss/1.29/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[quarkus-1-for-rhel-8-x86_64-rpms]
name = Red Hat build of Quarkus 1 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/quarkus/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.3-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Tools and Services 4.3 (RHEL 8) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-tech-preview-for-rhel-8-x86_64-source-rpms]
name = Red Hat Automation Services Catalog 1 Tech Preview for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-services-catalog-tech-preview/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-supplementary-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Supplementary (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/supplementary/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/baseos/os
enabled = 1
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 1

[rhosdt-3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift distributed tracing 3 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosdt/3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[automation-services-catalog-1-tech-preview-for-rhel-8-x86_64-rpms]
name = Red Hat Automation Services Catalog 1 Tech Preview for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/automation-services-catalog-tech-preview/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.8-for-rhel-8-x86_64-rpms]
name = Red Hat Service Interconnect 1.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/baseos/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.1-for-rhel-8-x86_64-source-rpms]
name = OpenShift Pipelines 1.1 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.15-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6.15 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-e4s-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap-solutions/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.7-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2-for-rhel-8-x86_64-rpms]
name = Red Hat AMQ Clients 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.6-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.6 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.0-for-rhel-8-x86_64-source-rpms]
name = OpenShift Pipelines 1.0 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-capsule-6-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Capsule 6 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-capsule/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.15-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.15 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rh-gluster-3-client-for-rhel-8-x86_64-source-rpms]
name = Red Hat Storage Native Client for RHEL 8 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhgs-client/3.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.3-for-rhel-8-x86_64-rpms]
name = JBoss Enterprise Application Platform 7.3 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/baseos/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.2-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Builds 1.2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.3-source-rpms]
name = Red Hat Container Development Kit 3.3 /(Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.3-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.3 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.3/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-maintenance/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.14-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.10-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.10 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-7.3-for-rhel-8-x86_64-source-rpms]
name = JBoss Enterprise Application Platform 7.3 (RHEL 8) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jbeap/7.3/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[service-interconnect-1.4-for-rhel-8-x86_64-rpms]
name = Red Hat Service Interconnect 1.4 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhsi/1.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.0-early-access-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.0 Early Access for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-rhui-debug-rpms]
name = JBoss Core Services (RHEL 8) (Debug RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbcs/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-eus-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.10-for-rhel-8-x86_64-source-rpms]
name = OpenShift Developer Tools and Services 4.10 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.10/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-2.0-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 2.0 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/2.0/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Engine 2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.2-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Builds 1.2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.5-rpms]
name = Red Hat Container Development Kit 3.5 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.5/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhv-4-tools-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Virtualization 4 Tools Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/rhv-tools/4/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release,file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-beta
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhbop-textonly-1-for-middleware-rpms]
name = Red Hat Build of OptaPlanner Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/rhel/server/6/6Server/$basearch/rhbop-textonly/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.8-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.8 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmt-1.0-for-rhel-8-x86_64-rpms]
name = Red Hat Migration Toolkit 1.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmt/1.0/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-6-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ceph Storage Tools 6 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-e4s-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Update Services SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-tools/6.10/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.5-debug-rpms]
name = Red Hat Container Development Kit 3.5 /(Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.5/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.9-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.1-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.1 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.0-early-access-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.0 Early Access for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.0/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/resilientstorage/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-eus-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/highavailability/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[amq-clients-2-for-rhel-8-x86_64-source-rpms]
name = Red Hat AMQ Clients 2 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/amq/2/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.11-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.11 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.11/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-2.3-rpms]
name = Red Hat Container Development Kit 2.3 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/2.3/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.15 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[osso-1-for-rhel-8-x86_64-rpms]
name = Secondary Scheduler Operator 1 for RHEL 8 for Red Hat OpenShift (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/osso/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-1-for-rhel-8-x86_64-rhui-rpms]
name = JBoss Core Services (RHEL 8) (RPMs) from RHUI
baseurl = https://cdn.redhat.com/content/dist/layered/rhui/rhel8/x86_64/jbcs/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.8-for-rhel-8-x86_64-debug-rpms]
name = OpenShift Developer Tools and Services 4.8 (RHEL 8) (x86_64 Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.8-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Tools 6.8 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.8/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.9-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.14-for-rhel-8-x86_64-debug-rpms]
name = Logical Volume Manager Storage 4.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-17.1-tools-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenStack Platform 17.1 Tools for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/17.1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-rt-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Real Time (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/rt/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-baseos-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - BaseOS - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/baseos/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-resilientstorage-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - Resilient Storage (RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/resilientstorage/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.7-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Tools 6.7 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-tools/6.7/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.16-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.16 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.16/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-16-tools-for-rhel-8-x86_64-rpms]
name = Red Hat OpenStack Platform 16 Tools for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/16/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.5-for-rhel-8-x86_64-source-rpms]
name = OpenShift Tools and Services 4.5 (RHEL 8) (x86_64 Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.14-for-rhel-8-x86_64-source-rpms]
name = Logical Volume Manager Storage 4.14 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.14/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.6-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Container Platform 4.6 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat Container Native Virtualization 4.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.13-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift GitOps 1.13 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.13/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.12-for-rhel-8-x86_64-rpms]
name = Logical Volume Manager Storage (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.12/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.9-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.9 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-tools-6.10-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Tools 6.10 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-tools/6.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-eap-textonly-1-for-middleware-rpms]
name = Red Hat JBoss Enterprise Application Platform Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/middleware/jbeap/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.14-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Pipelines 1.14 (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-e4s-source-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Update Services for SAP Solutions (Source RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sat-client/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-appstream-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - AppStream - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/appstream/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhmtc-for-rhel-8-x86_64-rpms]
name = Red Hat Migration Toolkit for Containers for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhmtc/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-utils-6-beta-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Utils 6 Beta for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-utils/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-16-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenStack Platform 16 Tools for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ocp-tools-4.14-for-rhel-8-x86_64-rpms]
name = OpenShift Developer Tools and Services 4.14 (RHEL 8) (x86_64 RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ocp-tools/4.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.13-for-rhel-8-x86_64-rpms]
name = Logical Volume Manager Storage 4.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-solutions-e4s-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP Solutions - Update Services for SAP Solutions (Debug RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap-solutions/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.9 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.15-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.15 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.15/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.14-for-rhel-8-x86_64-rpms]
name = Logical Volume Manager Storage 4.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhceph-8-tools-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ceph Storage Tools 8 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhceph-tools/8/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.15-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.15 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.15/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[lvms-4.12-for-rhel-8-x86_64-source-rpms]
name = Logical Volume Manager Storage (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/lvms/4.12/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.13-for-rhel-8-x86_64-rpms]
name = Red Hat Container Native Virtualization 4.13 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6-beta-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Satellite Maintenance 6 Beta for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-maintenance/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openshift-builds-1.1-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Builds 1.1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openshift-builds/1.1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.1-for-rhel-8-x86_64-rpms]
name = Red Hat JBoss Data Grid 8.1 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.17-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Jaeger 1.17 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.17/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.9-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.9 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.9/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6.11-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite Maintenance 6.11 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-maintenance/6.11/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-debug-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/highavailability/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-ee-textonly-rpms]
name = Red Hat Ansible Automation Platform EE Text-Only Advisories
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform-textonly/ee/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[codeready-builder-for-rhel-8-x86_64-debug-rpms]
name = Red Hat CodeReady Linux Builder for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel8/$releasever/x86_64/codeready-builder/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.17-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Container Platform 4.17 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.17/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.13-rpms]
name = Red Hat Container Development Kit 3.13 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.13/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-coreservices-textonly-1-for-middleware-rhui-rpms]
name = Red Hat JBoss Core Services Text-Only Advisories from RHUI
baseurl = https://cdn.redhat.com/content/dist/middleware/rhui/jbcs/1.0/$basearch/os
enabled = 0
gpgcheck = 1
gpgkey = file://
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-maintenance-6-beta-for-rhel-8-x86_64-rpms]
name = Red Hat Satellite Maintenance 6 Beta for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/beta/layered/rhel8/x86_64/sat-maintenance/6/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.20-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Jaeger 1.20.0 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.20/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.6-source-rpms]
name = Red Hat Container Development Kit 3.6 /(Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.14-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift GitOps 1.14 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.14/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.10-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.10 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.10/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Engine 2 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[openstack-17.1-tools-for-rhel-8-x86_64-rpms]
name = Red Hat OpenStack Platform 17.1 Tools for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/openstack-tools/17.1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[jb-datagrid-8.4-for-rhel-8-x86_64-rpms]
name = Red Hat JBoss Data Grid 8.4 (RHEL 8) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/jdg/8.4/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-6-client-2-for-rhel-8-x86_64-source-rpms]
name = Red Hat Satellite 6 Client 2 for RHEL 8 x86_64 (Source RPMS)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/sat-client-2/6/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.8-for-rhel-8-x86_64-source-rpms]
name = Red Hat OpenShift Pipelines 1.8 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.8/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[application-interconnect-1-for-rhel-8-x86_64-source-rpms]
name = Red Hat Application Interconnect for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhai/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-atomic-7-cdk-3.11-rpms]
name = Red Hat Container Development Kit 3.11 /(RPMs)
baseurl = https://cdn.redhat.com/content/dist/rhel/atomic/7/7Server/$basearch/cdk/3.11/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[source-to-image-1-for-rhel-8-x86_64-source-rpms]
name = OpenShift Source-to-Image 1 (for RHEL 8 x86_64) (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/source-to-image/1/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.2-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Ansible Automation Platform 2.2 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.2/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-highavailability-e4s-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - High Availability - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/highavailability/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-eus-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Extended Update Support (RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhocp-4.14-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Container Platform 4.14 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhocp/4.14/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-2.9-for-rhel-8-x86_64-rpms]
name = Red Hat Ansible Engine 2.9 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible/2.9/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cnv-4.16-for-rhel-8-x86_64-debug-rpms]
name = Red Hat Container Native Virtualization 4.16 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cnv/4.16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rodoo-1-for-rhel-8-x86_64-debug-rpms]
name = Run Once Duration Override Operator (RODOO) 1 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rodoo/1/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[satellite-client-6-for-rhel-8-x86_64-eus-debug-rpms]
name = Red Hat Satellite Client 6 for RHEL 8 x86_64 - Extended Update Support (Debug RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sat-client/6/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhosj-1.22-for-rhel-8-x86_64-rpms]
name = Red Hat OpenShift Jaeger 1.22.0 for RHEL 8 x86_64 (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/rhosj/1.22/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[ansible-automation-platform-2.5-for-rhel-8-x86_64-source-rpms]
name = Red Hat Ansible Automation Platform 2.5 for RHEL 8 x86_64 (Source RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/ansible-automation-platform/2.5/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[pipelines-1.16-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift Pipelines 1.16 (for RHEL 8 x86_64) (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/pipelines/1.16/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[gitops-1.13-for-rhel-8-x86_64-debug-rpms]
name = Red Hat OpenShift GitOps 1.13 for RHEL 8 x86_64 (Debug RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/gitops/1.13/debug
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-e4s-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Update Services for SAP Solutions (RPMs)
baseurl = https://cdn.redhat.com/content/e4s/rhel8/$releasever/x86_64/sap/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[rhel-8-for-x86_64-sap-netweaver-eus-source-rpms]
name = Red Hat Enterprise Linux 8 for x86_64 - SAP NetWeaver - Extended Update Support (Source RPMs)
baseurl = https://cdn.redhat.com/content/eus/rhel8/$releasever/x86_64/sap/source/SRPMS
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

[cluster-observability-operator-1-for-rhel-8-x86_64-textonly-rpms]
name = Cluster Observability Operator (for RHEL 8 x86_64) (RPMs)
baseurl = https://cdn.redhat.com/content/dist/layered/rhel8/x86_64/cluster-observability-operator/1/os
enabled = 0
gpgcheck = 1
gpgkey = file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
sslverify = 1
sslcacert = /etc/rhsm/ca/redhat-uep.pem
sslclientkey = /etc/pki/entitlement/2566392842379951526-key.pem
sslclientcert = /etc/pki/entitlement/2566392842379951526.pem
sslverifystatus = 1
metadata_expire = 86400
enabled_metadata = 0

```