const theme = {
  plain: {
    color: `#D4D4D4`,
    backgroundColor: `#1E1E1E`,
  },
  styles: [
    {
      types: [`comment`],
      style: {
        color: `#6f705e`,
      },
    },
    {
      types: [`keyword`, `operator`, `punctuation`, `tag`],
      style: {
        color: `#f92672`,
      },
    },
    {
      types: [`function`, `attr-name`],
      style: {
        color: `#a6e22e`,
      },
    },
    {
      types: [`string`, `token`, `attr-value`],
      style: {
        color: `#e6db74`,
      },
    },
    {
      types: [`punctuation`, `script`],
      style: {
        color: `rgb(201, 237, 242)`,
      },
    },
    {
      types: [`number`],
      style: {
        color: `#ae81ff`,
      },
    },
  ],
}

export default theme