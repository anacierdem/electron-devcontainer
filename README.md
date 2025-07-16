# Running in docker

Run this on host machine:

    xhost +local:docker

Then run in `npm start` in container.

## GPU woes

GPU acceleration doesn't work as of now.

Integration seem to work, simply run `docker compose up` to see what I mean. Also see `inxi -G` in the devcontainer.

To test barebones X integration, run xeyes in the devcontainer.

## TODO

- [x] Run as a non-root user instead
- [x] vscode seem to be auto connect X11, get rid of unnecessary configs. OTOH, it doesn't boot properly