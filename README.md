# BPM Group Limited Template Web Project for Nuxt 3.0

## Running in Devcontainer

If using VSCode as your code editor, you can take advantage of the configuration supplied to run this project in a dev container.
This will take care of all setup steps for you, and then you can run the project in the container using the integrated terminal and issuing the following

```bash
npm run dev
```
If running locally then the following steps will need to be performed, depending on which package manager you are using

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# Unit Testing

Unit testing is performed using vitest, which is the only option supported by NuxtJS at the time of writing.

```bash
npm run test
```
We use [vitest-runner](https://github.com/explore-frontend/vscode-vitest-runner) for running individual tests

