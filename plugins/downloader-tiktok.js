import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let text = `
Contoh: .tiktok https://www.tiktok.com/@omagadsus/video/7025456384175017243
`.trim()
  m.reply(text)
}
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`

_©Syn-Bot🍭_
`.trim(), m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
