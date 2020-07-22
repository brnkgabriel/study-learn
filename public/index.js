
// this.youtubethumbnail = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg'
// youTubeIframeSource = https://www.youtube.com/embed/<insert-youtube-video-id-here>
class Catalog {
  constructor() {
    this.iframeUrl = 'https://www.youtube.com/embed/sjF2S7pMXNk'
    this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/'
    this.keyValDelimeter = '='

    this.data = [
      "name=Overview|desc=Old Testament|author=The Bible Project|host=YouTube|id=ALsluAKBZ-c|image=OverviewTheBibleProjectSquare.jpg|imagetoken=eac14a93-bbc7-4db9-a5ce-aff0a1b971da|type=Comic",
      "name=Genesis 1-11|desc=Old Testament|author=The Bible Project|host=YouTube|id=GQI72THyO5I|image=Genesis1To11TheBibleProjectSquare.jpg|imagetoken=fb0b7e55-1e5c-4779-a576-13383b4134de|type=Comic",
      "name=Genesis 12-50|desc=Old Testament|author=The Bible Project|host=YouTube|id=F4isSyennFo|image=Genesis12To50TheBibleProjectSquare.jpg|imagetoken=2fdeb7e0-d716-4d7c-b2ec-ee29408ce5c5|type=Comic",
      "name=Exodus 1-18|desc=Old Testament|author=The Bible Project|host=YouTube|id=jH_aojNJM3E|image=Exodus1To18TheBibleProjectSquare.jpg|imagetoken=04c02a8b-6976-4d79-8c9d-a4e5ce403a22|type=Comic",
      "name=Exodus 19-40|desc=Old Testament|author=The Bible Project|host=YouTube|id=oNpTha80yyE|image=Exodus19To40TheBibleProjectSquare.jpg|imagetoken=d28a7232-5b60-482e-8aa9-ce82ccf2f349|type=Comic",
      "name=Leviticus|desc=Old Testament|author=The Bible Project|host=YouTube|id=IJ-FekWUZzE|image=LeviticusSquare.jpg|imagetoken=bc353ac8-3f55-4f34-9145-2c40ef450011|type=Comic",
      "name=Numbers|desc=Old Testament|author=The Bible Project|host=YouTube|id=tp5MIrMZFqo|image=NumbersSquare.jpg|imagetoken=ae691344-ce85-4041-b898-59566f279d7f|type=Comic",
      "name=Deuteronomy|desc=Old Testament|author=The Bible Project|host=YouTube|id=q5QEH9bH8AU|image=DeuteronomySquare.jpg|imagetoken=8139cc1a-8bc7-480c-9377-8c7ecd1c6e3b|type=Comic",
    ]

    this.hosts = {
      youtube: 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/youtube.png?alt=media&token=670a7052-114e-4d5e-a757-ed51ba7bbfcb'
    }

    this.thumbnails = document.querySelector('.-thumbnails')
    this.youTubeIframe = document.querySelector('.-pane iframe')
    this.pane = document.querySelector('.-pane')
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
      // var src = `${this.imageUrl}${datum.image}?alt=media&token=${datum.imagetoken}`
      var src = `https://img.youtube.com/vi/${datum.id}/0.jpg`

      html += `<div class="-mku -inlineblock -vatop -posrel" id="${this.id(identifier)}" data-id="${datum.id}">
        <div class="-img -posrel">
          <span class="-posabs -type">${datum.type}</span>
          <img data-src="${src}" src="${src}"  alt="${identifier}" />
        </div>
        <div class="-details">
          <div class="-name">${datum.name}</div>
          <div class="-desc">${datum.desc}</div>
          <div class="-author">${datum.author}</div>
        </div>
        <div class="-ctas">
          <div class="-cta -material">material</div><div class="-cta -exercise">exercise</div>
        </div>
      </div>`
    })
    this.thumbnails.innerHTML = html
    return this
  }

  appendListeners() {
    var mkus = document.querySelectorAll('.-mku')
    mkus.forEach(mku => {
      this.ctaListener(mku)
      // mku.addEventListener('click', () => { this.changeYouTubeVideo(mku) })
    })
    return this
  }

  ctaListener(mku) {
    var ctas = mku.querySelectorAll('.-cta')
    ctas.forEach(cta => {
      cta.addEventListener('click', () => { this.changeContent(cta, mku) })
    })
  }

  changeContent(cta, mku) {
    var className = cta.classList[1]
    var fn = this.pane.classList
    if (className === '-exercise') fn.add('active')
    else {
      fn.remove('active')
      this.changeYouTubeVideo(mku)
    }
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