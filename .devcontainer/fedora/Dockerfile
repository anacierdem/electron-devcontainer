FROM fedora:42

RUN dnf install -y \
    nodejs-22.22.0-2.fc42 nodejs-npm-10.9.4-1.22.22.0.2.fc42 \
    nspr nss atk at-spi2-atk cups gtk3 \
    git \
    && dnf clean all \
    && useradd -m node \
    && echo node ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node