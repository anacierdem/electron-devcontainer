FROM node:22

RUN apt-get update && apt-get install \
    libgbm-dev libgles2-mesa-dev libgtk-3-0 libasound2 libxcb-dri3-0 libxtst6 libnss3 libatk-bridge2.0-0 libxss1 \
    -yq --no-install-suggests --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*