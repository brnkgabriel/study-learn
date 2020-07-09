
// this.youtubethumbnail = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg'
class Catalog {
  constructor() {
    this.iframeUrl = 'https://www.youtube.com/embed/sjF2S7pMXNk'
    this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/'
    this.keyValDelimeter = '='

    this.data = [
      "name=Overview|desc=Old Testament|author=The Bible Project|host=YouTube|id=ALsluAKBZ-c|image=overview_oldT_thebibleproject|imagetoken=3df2b6fc-e02b-4073-a16f-b0c9855f5dcb|type=Comic",
    ]

    this.hosts = {
      youtube: 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/youtube.png?alt=media&token=670a7052-114e-4d5e-a757-ed51ba7bbfcb'
    }

    this.content = document.querySelector('.-content')
  }

  replacePattern(pattern, str) {
    var re = new RegExp(pattern, 'g')
    var replaced = str.replace(re, '-')
    return replaced
  }

  id(identifier) {
    var replacedApos = this.replacePattern("'", identifier)
    var replaceAmp = this.replacePattern('&', replacedApos)
    var replacePercnt = this.replacePattern('%', replaceAmp)
    return replacePercnt.toLowerCase().split(' ').join('-')
  }

  build() {
    var html = ''
    this.expand().map(datum => {
      var identifier = `${datum.name} ${datum.desc} ${datum.author}`
      var src = `${this.imageUrl}${datum.image}_rectangle.jpg?alt=media&token=${datum.imagetoken}`

      html += `
      <div class="-mku -inlineblock -vatop .-posrel" id="${this.id(identifier)}">
        <div class="-img -posrel">
          <span class="-posabs -type">${datum.type}</span>
          <span class="-posabs -host">
            <img src="${this.hosts[datum.host.toLowerCase()]}" alt="${datum.host}"/>
          </span>
          <img data-src="${src}" src="${src}"  alt="${identifier}" />
        </div>
        <div class="-details">
          <div class="-name">${datum.name}</div>
          <div class="-desc">${datum.desc}</div>
          <div class="-author">by ${datum.author}</div>
        </div>
        <div class="-cta">preview</div>
      </div>
      `
    })
    this.content.innerHTML = html
    return this
  }

  appendListeners() {
    return this
  }
  
  expand() {
    return this.data.map(datum => this.json(datum.split('|')))
  }

  json(details) {
    var obj = {}
    details.map(property => {
      var keyValue = property.split(this.keyValDelimeter)
      obj[keyValue[0]] = keyValue[1]
    })
    return obj
  }
}

new Catalog()
.build()
.appendListeners()