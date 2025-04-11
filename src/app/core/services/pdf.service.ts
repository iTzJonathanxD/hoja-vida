import { Injectable } from "@angular/core"
import jspdf from "jspdf"
import html2canvas from "html2canvas"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class PdfService {
  private isGeneratingSubject = new BehaviorSubject<boolean>(false)
  isGenerating$ = this.isGeneratingSubject.asObservable()

  constructor() {}

  async generatePdf(): Promise<void> {
    this.isGeneratingSubject.next(true)

    try {
      // Create a clone of the entire document to avoid modifying the original
      const originalContent = document.body.innerHTML
      const printContent = document.getElementById("resume-container")

      if (!printContent) {
        throw new Error("Resume container not found")
      }

      // Create a new document for printing
      const printWindow = window.open("", "_blank")
      if (!printWindow) {
        throw new Error("Could not open print window")
      }

      // Add necessary styles to the print window
      printWindow.document.write(`
        <html>
          <head>
            <title>Jonathan Marin - CV</title>
            <style>
              body {
                font-family: 'Poppins', sans-serif;
                color: #333333;
                background-color: white;
                margin: 0;
                padding: 20px;
              }
              .no-print, .sidebar-toggle, #pdfButton, .scroll-top-btn {
                display: none !important;
              }
              .card {
                border: 1px solid #ddd;
                border-radius: 8px;
                margin-bottom: 20px;
                page-break-inside: avoid;
              }
              .card-header {
                background-color: #2E7D32;
                color: white;
                padding: 15px;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
              }
              .card-body {
                padding: 15px;
              }
              h1, h2, h3, h4, h5, h6 {
                margin-top: 0;
              }
              .text-success {
                color: #2E7D32;
              }
              .progress {
                height: 10px;
                background-color: #e9ecef;
                border-radius: 5px;
                margin-bottom: 15px;
              }
              .progress-bar {
                background-color: #2E7D32;
                border-radius: 5px;
              }
              @page {
                size: A4;
                margin: 10mm;
              }
              @media print {
                body {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              }
            </style>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `)

      // Wait for content to load
      printWindow.document.close()

      // Remove elements that shouldn't be in the PDF
      const elementsToRemove = printWindow.document.querySelectorAll(
        ".no-print, .sidebar-toggle, #pdfButton, .scroll-top-btn",
      )
      elementsToRemove.forEach((el) => el.remove())

      // Wait for images to load
      setTimeout(async () => {
        try {
          // Use html2canvas and jsPDF
          const pdf = new jspdf("p", "mm", "a4")
          const contentToPrint = printWindow.document.body

          // Get the dimensions
          const pdfWidth = pdf.internal.pageSize.getWidth()
          const pdfHeight = pdf.internal.pageSize.getHeight()

          // Calculate the number of pages
          const htmlHeight = contentToPrint.scrollHeight
          const htmlWidth = contentToPrint.scrollWidth
          const ratio = htmlHeight / htmlWidth

          // Render each page
          let position = 0
          let remainingHeight = htmlHeight
          const pageHeight = pdfHeight - 20 // Margins

          while (remainingHeight > 0) {
            // Capture the current portion of the page
            const canvas = await html2canvas(contentToPrint, {
              y: position,
              height: Math.min(htmlHeight - position, pageHeight * (htmlWidth / pdfWidth)),
              scale: 2,
              useCORS: true,
              allowTaint: true,
              backgroundColor: "#ffffff",
            })

            // Add the image to the PDF
            const imgData = canvas.toDataURL("image/png")
            if (position > 0) {
              pdf.addPage()
            }

            pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, (canvas.height * (pdfWidth - 20)) / canvas.width)

            // Move to next portion
            position += pageHeight * (htmlWidth / pdfWidth)
            remainingHeight -= pageHeight * (htmlWidth / pdfWidth)
          }

          // Save the PDF
          pdf.save("Jonathan_Marin_CV.pdf")

          // Close the print window
          printWindow.close()
        } catch (error) {
          console.error("Error generating PDF:", error)
          printWindow.close()
          throw error
        }
      }, 1000)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Hubo un error al generar el PDF. Por favor intente nuevamente.")
    } finally {
      this.isGeneratingSubject.next(false)
    }
  }
}
