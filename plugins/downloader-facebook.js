import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let text = `
Contoh: .fb https://fb.watch/azFEBmFRcy/
`.trim()
  m.reply(text)
}

handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['fb']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
