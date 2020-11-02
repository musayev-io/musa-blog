export default function (doc) {
  console.log(doc)
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/asdf'
  }

  if (doc.type === 'posts') {
    console.log('TYPE: POST')
    return '/post/' + doc.uid
  }

  return '/not-found'
}
