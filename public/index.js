
// this.youtubethumbnail = 'https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg'
// youTubeIframeSource = https://www.youtube.com/embed/<insert-youtube-video-id-here>
// pdfthumbnail = 
// googleDrivePDFSource = https://drive.google.com/file/d/1T-SrgO3Z_uzczLDxIj7MTa5UzaU2g2wO/preview
// thumbnail size: 480 x 270px
class Catalog {
  constructor() {
    this.iframeUrl = 'https://www.youtube.com/embed/sjF2S7pMXNk'
    this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/learn-dt.appspot.com/o/'
    this.keyValDelimeter = '='
    this.youTube = 'YouTube'
    this.pdf = 'PDF'

    this.data = [
      "name=In the Beginning|desc=Old Testament|author=Superbook|host=YouTube|id=fn-wEOpPsMo|type=Animation|image=",
      "name=Abraham|desc=Old Testament|author=Superbook|host=YouTube|id=xAFMg09bido|type=Animation|image=",
      "name=Jacob & Esau|desc=Old Testament|author=Superbook|host=YouTube|id=zhykNXjGQuA|type=Animation|image=",
      "name=The Exodus|desc=Old Testament|author=Superbook|host=YouTube|id=H98zaq803Tg|type=Animation|image=",
      "name=The 10 Commandments|desc=Old Testament|author=Superbook|host=YouTube|id=VtWfiTXO1Ts|type=Animation|image=",
      "name=David - Giant Adventure|desc=Old Testament|author=Superbook|host=YouTube|id=jdMq3YAfmO0|type=Animation|image=",
      "name=Daniel - Roar|desc=Old Testament|author=Superbook|host=YouTube|id=5UNBtaVsWm4|type=Animation|image=",
      "name=The First Christmas|desc=New Testament|author=Superbook|host=YouTube|id=1fl9laM4ViM|type=Animation|image=",
      "name=Miracles of Jesus|desc=New Testament|author=Superbook|host=YouTube|id=uZTHwqj0Bkk|type=Animation|image=",
      "name=The Last Supper|desc=New Testament|author=Superbook|host=YouTube|id=9Edfb_faOb0|type=Animation|image=",
      "name=He is Risen|desc=New Testament|author=Superbook|host=YouTube|id=3F0rt2AiqJY|type=Animation|image=",
      "name=Paul - Road to Damascus|desc=New Testament|author=Superbook|host=YouTube|id=ogDArF83p8I|type=Animation|image=",
      "name=The Final Battle|desc=New Testament|author=Superbook|host=YouTube|id=ycSy-kmtM4Q|type=Animation|image=",
      "name=Jonah|desc=Old Testament|author=Superbook|host=YouTube|id=YkC2MKfI5Gk|type=Animation|image=",
      "name=Joseph|desc=And Pharaoh's Dream|author=Superbook|host=YouTube|id=1VENAMIch84|type=Animation|image=",
      "name=The Fiery Furnace|desc=Shadrach, Meshach, Abednego|author=Superbook|host=YouTube|id=bFhmFzmW40I|type=Animation|image=",
      "name=Rahab|desc=And The Walls of Jericho|author=Superbook|host=YouTube|id=F7sm4tSS7IE|type=Animation|image=",
      "name=Esther|desc=For Such a Time as This|author=Superbook|host=YouTube|id=q94wBYdMwtE|type=Animation|image=",
      "name=John the Baptist|desc=New Testament|author=Superbook|host=YouTube|id=_d4KeGaTa9U|type=Animation|image=",
      "name=Noah & the Ark|desc=Old Testament|author=Superbook|host=YouTube|id=t1p5ocaJzTM|type=Animation|image=",
      "name=Gideon|desc=Old Testament|author=Superbook|host=YouTube|id=StowZD2JvZw|type=Animation|image=",
      "name=In the Beginning|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=6cvA9nIRy5A|type=Animation|image=",
      "name=Abraham|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=8UbeJSOQsHQ|type=Animation|image=",
      "name=Moses|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=E1SztIhPXtg|type=Animation|image=",
      "name=The Exodus|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=QPxjlOr7hro|type=Animation|image=",
      "name=The Land of Canaan|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=eZT8CMbznB4|type=Animation|image=",
      "name=Elijah & Elisha|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=0OHvyS_DJ_I|type=Animation|image=",
      "name=Babylon|desc=Old Testament|author=Bible Animation Series|host=YouTube|id=me6HsPd85r0|type=Animation|image=",
      "name=Birth|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=YISebgzy0SI|type=Animation|image=",
      "name=Early Ministry|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=W5oJ3pT6VXA|type=Animation|image=",
      "name=Miracles & Parables|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=AqmBaJNLvAk|type=Animation|image=",
      "name=Crucifixion & Death|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=Cy0SzlxMVho|type=Animation|image=",
      "name=Burial & Resurrection|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=MEWdbYu94wQ|type=Animation|image=",
      "name=The Gospel|desc=Of Jesus Christ|author=Bible Animation Series|host=YouTube|id=SN3Oa8867dM|type=Animation|image=",
      "name=Pharisee & Tax Collector|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=Ufe6zouTq8g|type=Animation|image=",
      "name=The Lost Son|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=mLI2zqMU6Ww|type=Animation|image=",
      "name=Jesus Heals the Paralytic|desc=New Testament|author=RodTheNey|host=YouTube|id=0LqHYkGU4Zg|type=Animation|image=",
      "name=Following Jesus|desc=New Testament|author=RodTheNey|host=YouTube|id=eKzGAlBvWP8|type=Animation|image=",
      "name=The Good Samaritan|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=Dr0Vn5QBMtM|type=Animation|image=",
      "name=Wise & Foolish Builders|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=CXWHLB1f6_U|type=Animation|image=",
      "name=The Talents|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=bbPKhYBaWRg|type=Animation|image=",
      "name=The Lost Sheep|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=tyWZeOlaRo4|type=Animation|image=",
      "name=The Sower|desc=Parable of Jesus|author=RodTheNey|host=YouTube|id=V9IOhGPrRvY|type=Animation|image=",
      "name=Overview|desc=Old Testament|author=The Bible Project|host=YouTube|id=ALsluAKBZ-c|type=Comic|image=",
      "name=Genesis 1-11|desc=Old Testament|author=The Bible Project|host=YouTube|id=GQI72THyO5I|type=Comic|image=",
      "name=Genesis 12-50|desc=Old Testament|author=The Bible Project|host=YouTube|id=F4isSyennFo|type=Comic|image=",
      "name=Exodus 1-18|desc=Old Testament|author=The Bible Project|host=YouTube|id=jH_aojNJM3E|type=Comic|image=",
      "name=Exodus 19-40|desc=Old Testament|author=The Bible Project|host=YouTube|id=oNpTha80yyE|type=Comic|image=",
      "name=Leviticus|desc=Old Testament|author=The Bible Project|host=YouTube|id=IJ-FekWUZzE|type=Comic|image=",
      "name=Numbers|desc=Old Testament|author=The Bible Project|host=YouTube|id=tp5MIrMZFqo|type=Comic|image=",
      "name=Deuteronomy|desc=Old Testament|author=The Bible Project|host=YouTube|id=q5QEH9bH8AU|type=Comic|image=",
      "name=Bible Study|desc=Study Resources|author=Clarence Larkin|host=PDF|id=1T-SrgO3Z_uzczLDxIj7MTa5UzaU2g2wO|type=E-Book|image=larkin-bible-study.jpg",
    ]

    // this.src = {
    //   YouTube: id => `https://www.youtube.com/embed/${id}`,
    //   PDF: id => `https://drive.google.com/file/d/${id}/preview`
    // }

    // this.thumbnail = {
    //   YouTube: datum => `https://img.youtube.com/vi/${datum.id}/0.jpg`,
    //   PDF: datum => `./images/${datum.image}`
    // }

    this.thumbnails = document.querySelector('.-thumbnails')
    this.iframe = document.querySelector('.-pane iframe')
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

  srcs(datum) {
    var json = {
      YouTube: {
        iframe: `https://www.youtube.com/embed/${datum.id}`,
        thumbnail: `https://img.youtube.com/vi/${datum.id}/0.jpg`,
      },
      PDF: {
        iframe: `https://drive.google.com/file/d/${datum.id}/preview`,
        thumbnail: `./images/${datum.image}`
      }
    }
    return json[datum.host]
  }

  build() {
    var html = ''
    this.expand().map(datum => {
      var identifier = `${datum.name} ${datum.desc} ${datum.author}`
      // var src = `${this.imageUrl}${datum.image}?alt=media&token=${datum.imagetoken}`
      // var src = this.thumbnail[datum.host](datum)

      var src = this.srcs(datum).thumbnail

      html += `<div class="-mku -inlineblock -vatop -posrel" id="${this.id(identifier)}" data-id="${datum.id}" data-host="${datum.host}">
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
    mkus.forEach(mku => this.ctaListener(mku) )
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
      this.changeIframeSrc(mku)
    }
  }

  changeIframeSrc(mku) {
    var id = mku.getAttribute('data-id')
    var host = mku.getAttribute('data-host')

    // this.iframe.setAttribute('src', this.src[host](id))
    this.iframe.setAttribute('src', this.srcs({ id, host }).iframe)
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