import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Contoh: ${usedPrefix}${command} https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link`
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'instagram.mp4', ``, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['igg']

handler.command = /^(ig(dl)?)$/i

export default handler
