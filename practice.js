const test = {
  slice: {
    primary: {
      caption: [{ text: '123' }],
    },
  },
}

console.log(JSON.stringify(test))

if (test.slice.primary.caption.length > 0) {
  console.log('true')
}
