import QRCode from 'qrcode'

// With promises
export default function qrcode(url:string) {
  return QRCode.toBuffer(url)
}