import * as QR from 'qrious'
import 'pt-root-ui-font/bold.css'
import 'pt-root-ui-font/regular.css'
import './styles.css'

const href: string = window.location.href
const url: URL = new URL(href)
const searchParams: URLSearchParams = url.searchParams
const event: string = searchParams.get('event') ?? ''
const id: string = searchParams.get('id') ?? ''
const secret: string = searchParams.get('secret') ?? ''
const value: string = `${event}-${id}-${secret}`

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas')

new QR({
    element: canvas,
    level: 'H',
    padding: 128,
    size: 1024,
    value: value
})

document.getElementById('link').addEventListener('click', _onClick.bind(this))
document.getElementById('ticketId').innerText = id

function _onClick() {
    const link: HTMLElement = document.getElementById('link')
    link.setAttribute('download', `${event}-${id}.png`)
    let data: string = canvas.toDataURL('image/png')
    link.setAttribute('href', data.replace('image/png', 'image/octet-stream'))
}