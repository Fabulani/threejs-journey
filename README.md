# My Three.js Journey

This is the monorepo for my [Three.js Journey course from Bruno Simon](https://threejs-journey.com/). In this course, I learn about WebGL and Three.js, React, shaders, and some other cool web graphics stuff.

All lessons were done using dev containers (basic `node:lts` image), so anyone with [Docker](https://www.docker.com/) and VSCode's extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) can do the same. Alternativelly, you could just install [Node LTS](https://nodejs.org/en/download).

## Usage

> Large files (e.g., images) are stored in Git LFS. To access them, [install Git LFS](https://git-lfs.com/) and run `git lfs install`.

(optional) Start the dev container.

Each lesson has its own project folder inside `lessons`, named after the lesson number.

- To open a lesson, `cd` into its folder, e.g.: `cd lessons/03/exercise`.
- Install dependencies with `npm install`.
- Start the server with `npm run dev`.
- Access the web page at `http://localhost:5173/`.
