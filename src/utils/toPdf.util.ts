import * as htmlToImage from 'html-to-image'
import { jsPDF } from 'jspdf'

function toPdf() {
  const container = document.querySelector('.reviewcontainer') as HTMLElement
  htmlToImage.toPng(container).then((data) => {
    const img = (new Image().src = data)
    const doc = new jsPDF('p', 'cm', 'a4').addImage(img, 'PNG', 0, 0, 21, 29.7)
    doc.save('简历.pdf')
  })
}
export { toPdf }
