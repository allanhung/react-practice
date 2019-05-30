FROM centos:7

USER root
RUN yum install -y epel-release
RUN rpm --import https://mirror.go-repo.io/centos/RPM-GPG-KEY-GO-REPO

# add credentials on build
RUN mkdir /root/.ssh/
COPY deploy/git.pem /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa*
COPY deploy/ssh_config /etc/ssh/ssh_config

# install required rpm
RUN yum install -y git python-pip && yum clean all
RUN pip install -q ansible
RUN mkdir -p /etc/ansible
