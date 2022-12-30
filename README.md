# Svelte + Rust Plotters Template

This template lets you seamlessly develop apps using Svelte and the Rust Plotters library. It features automatic hot reloading, and the traditional `npm run dev` and `npm run build` commands will take care of the Rust and Svelte code together.

## Setup

I will assume that you have a recent version of Node.js installed, and that you have set up your environment to be able to compile Rust code to WASM using `wasm-pack`.

Clone this repository, and install the required dependancies:

```
npm install
npm i -g concurrently
cargo install rsw
```

## Development

Simply run:

```
npm run dev
```

