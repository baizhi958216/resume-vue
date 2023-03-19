import { jsPDF } from 'jspdf'

function toPdf() {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF()
  console.log('导出pdf')
}
export { toPdf }
