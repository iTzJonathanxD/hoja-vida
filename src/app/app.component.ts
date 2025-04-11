import { Component, OnInit, HostListener, Renderer2 } from "@angular/core"
import { LoaderService } from "./core/services/loader.service"
import { PdfService } from "./core/services/pdf.service"
import { trigger, state, style, animate, transition } from "@angular/animations"
import { SidebarService } from "./core/services/sidebar.service"
import { ResumeDataService } from "./core/services/resume-data.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("1s ease-in", style({ opacity: 1 }))]),
    ]),
    trigger("slideInRight", [
      state("void", style({ transform: "translateX(-100%)" })),
      transition(":enter", [animate("0.5s ease-out", style({ transform: "translateX(0)" }))]),
    ]),
    trigger("slideInLeft", [
      state("void", style({ transform: "translateX(100%)" })),
      transition(":enter", [animate("0.5s ease-out", style({ transform: "translateX(0)" }))]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isLoading = true
  isGeneratingPdf = false
  showScrollTop = false
  showPhotoModal = false
  photoUrl = ""

  constructor(
    private loaderService: LoaderService,
    public pdfService: PdfService,
    public sidebarService: SidebarService,
    private renderer: Renderer2,
    private resumeData: ResumeDataService,
  ) {}

  ngOnInit() {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      setTimeout(() => {
        this.isLoading = isLoading
      }, 3000) // Show loader for at least 3 seconds
    })

    this.pdfService.isGenerating$.subscribe((isGenerating) => {
      this.isGeneratingPdf = isGenerating

      // Disable body scroll when generating PDF
      if (isGenerating) {
        this.renderer.addClass(document.body, "overflow-hidden")
      } else {
        this.renderer.removeClass(document.body, "overflow-hidden")
      }
    })
  }

  downloadPdf(): void {
    this.pdfService.generatePdf()
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  toggleSidebar() {
    this.sidebarService.toggle()
  }

  openPhotoModal() {
    this.showPhotoModal = true
    this.photoUrl = this.resumeData.profile.photoUrl
  }

  closePhotoModal() {
    this.showPhotoModal = false
  }

  updatePhoto() {
    if (this.photoUrl) {
      this.resumeData.updateProfilePhoto(this.photoUrl)
      this.closePhotoModal()
    }
  }
}
