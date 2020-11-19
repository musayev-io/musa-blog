import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const Elements = prismicDOM.RichText.Elements

// https://prismic.io/docs/vuejs/getting-started/prismic-nuxt
export default function (type, element, content, children) {
  console.log(`type: ${type}`)
  console.log(`element: ${JSON.stringify(element)}`)
  console.log(`content: ${content}`)
  console.log(`children: ${children}`)
  console.log('musa break')
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<a href="${url}" data-nuxt-link>${content}</a>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${
      element.alt || ''
    }" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<a href="${url}" data-nuxt-link>${result}</a>`
      } else {
        const target = element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }
  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join('')}</h1>`

    case Elements.heading2:
      return `<h2 class="text-m-orange-2 font-heading text-4xl mt-8 mb-6">${children.join(
        ''
      )}</h2>`

    case Elements.heading3:
      return `<h3 class="text-m-blue-2 font-heading text-3xl mt-6 mb-6">${children.join(
        ''
      )}</h3>`

    case Elements.heading4:
      return `<h4>${children.join('')}</h4>`

    case Elements.heading5:
      return `<h5>${children.join('')}</h5>`

    case Elements.heading6:
      return `<h6>${children.join('')}</h6>`

    case Elements.paragraph:
      if (children[0] === '') {
        return
      }
      return `<p class="text-white font-body text-2xl tracking leading-normal py-4">${children.join(
        ''
      )}</p>`

    case Elements.preformatted:
      return `<pre>${children.join('')}</pre>`

    case Elements.strong:
      return `<strong>${children.join('')}</strong>`

    case Elements.em:
      return `<em>${children.join('')}</em>`

    case Elements.listItem:
      return `<li class="text-white font-body text-2xl">${children.join(
        ''
      )}</li>`

    case Elements.oListItem:
      return `<li class="text-white font-body text-2xl">${children.join(
        ''
      )}</li>`

    case Elements.list:
      return `<ul class="list-disc list-inside pl-14">${children.join('')}</ul>`

    case Elements.oList:
      return `<ol class="list-decimal list-inside pl-14">${children.join(
        ''
      )}</ol>`

    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `
    case Elements.span:
      console.log(content)
      return content ? content.replace(/\n/g, '<br />') : ''

    default:
      return null
  }
}
