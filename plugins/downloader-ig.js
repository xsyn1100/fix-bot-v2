import instagramGetUrl from 'instagram-url-direct'
let text = `
let text = `
Contoh: .ig https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link
`.trim()
  m.reply(text)

}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['instagram']

handler.command = /^(ig(dl)?)$/i

export default handler
