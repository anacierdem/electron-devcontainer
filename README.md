# Running in docker

Run this on host machine:

    xhost +local:docker

Then run in `npm start` in container.

## GPU woes

GPU acceleration doesn't work as of now.

Integration seem to work, simply run `docker compose up` to see what I mean. Also see `inxi -G` in the devcontainer.

To test barebones X integration, run xeyes in the devcontainer.