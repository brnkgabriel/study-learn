
// this.youtubethumbnail = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg'
// youTubeIframeSource = https://www.youtube.com/embed/<insert-youtube-video-id-here>
class Catalog {
  constructor() {
    this.iframeUrl = 'https://www.youtube.com/embed/sjF2S7pMXNk'
    this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/'
    this.keyValDelimeter = '='

    this.data = [
      "name=Overview|desc=Old Testament|author=The Bible Project|host=YouTube|id=ALsluAKBZ-c|image=OverviewTheBibleProject.jpg|imagetoken=d4ed4886-c07c-4e76-b165-a6b466fe11a5|type=Comic",
      "name=Genesis 1-11|desc=Old Testament|author=The Bible Project|host=YouTube|id=GQI72THyO5I|image=Genesis1To11TheBibleProject.jpg|imagetoken=dde0df75-ff63-4bb0-8fc1-4f5007cc1cee|type=Comic",
      "name=Genesis 12-50|desc=Old Testament|author=The Bible Project|host=YouTube|id=F4isSyennFo|image=Genesis12To50TheBibleProject.jpg|imagetoken=d7278a1e-24ee-4f91-b74f-7266cadf7b6f|type=Comic",
      "name=Exodus 1-18|desc=Old Testament|author=The Bible Project|host=YouTube|id=jH_aojNJM3E|image=Exodus1To18TheBibleProject.jpg|imagetoken=ff1d386b-ff3d-41f6-a82f-484b31612802|type=Comic",
      "name=Overview|desc=Old Testament|author=The Bible Project|host=YouTube|id=ALsluAKBZ-c|image=OverviewTheBibleProject.jpg|imagetoken=d4ed4886-c07c-4e76-b165-a6b466fe11a5|type=Comic",
      "name=Genesis 1-11|desc=Old Testament|author=The Bible Project|host=YouTube|id=GQI72THyO5I|image=Genesis1To11TheBibleProject.jpg|imagetoken=dde0df75-ff63-4bb0-8fc1-4f5007cc1cee|type=Comic",
      "name=Genesis 12-50|desc=Old Testament|author=The Bible Project|host=YouTube|id=F4isSyennFo|image=Genesis12To50TheBibleProject.jpg|imagetoken=d7278a1e-24ee-4f91-b74f-7266cadf7b6f|type=Comic",
      "name=Exodus 1-18|desc=Old Testament|author=The Bible Project|host=YouTube|id=jH_aojNJM3E|image=Exodus1To18TheBibleProject.jpg|imagetoken=ff1d386b-ff3d-41f6-a82f-484b31612802|type=Comic",
    ]

    this.hosts = {
      youtube: 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/youtube.png?alt=media&token=670a7052-114e-4d5e-a757-ed51ba7bbfcb'
    }

    this.thumbnails = document.querySelector('.-thumbnails')
    this.youTubeIframe = document.querySelector('.-pane iframe')
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
      var src = `${this.imageUrl}${datum.image}?alt=media&token=${datum.imagetoken}`

      html += `<div class="-mku -inlineblock -vatop -posrel" id="${this.id(identifier)}" data-id="${datum.id}">
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
      </div>`
    })
    this.thumbnails.innerHTML = html
    return this
  }

  appendListeners() {
    var mkus = document.querySelectorAll('.-mku')
    mkus.forEach(mku => {
      mku.addEventListener('click', () => { this.changeYouTubeVideo(mku) })
    })
    return this
  }

  changeYouTubeVideo(mku) {
    var youTubeId = mku.getAttribute('data-id')
    var iframeSrc = `https://www.youtube.com/embed/${youTubeId}`
    this.youTubeIframe.setAttribute('src', iframeSrc)
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