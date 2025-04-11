import { Component, OnInit } from "@angular/core"
import { trigger, state, style, animate, transition } from "@angular/animations"
import { LoaderService } from "../../services/loader.service"

@Component({
  selector: "app-professional-loader",
  templateUrl: "./professional-loader.component.html",
  styleUrls: ["./professional-loader.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("0.5s ease-in", style({ opacity: 1 }))]),
      transition(":leave", [animate("0.5s ease-out", style({ opacity: 0 }))]),
    ]),
    trigger("scaleIn", [
      state("void", style({ transform: "scale(0.8)", opacity: 0 })),
      transition(":enter", [animate("0.5s ease-out", style({ transform: "scale(1)", opacity: 1 }))]),
    ]),
  ],
})
export class ProfessionalLoaderComponent implements OnInit {
  loadingProgress = 0
  loadingText = "Cargando..."
  loadingMessages = [
    "Preparando información...",
    "Cargando experiencia...",
    "Configurando habilidades...",
    "Finalizando...",
  ]
  currentMessageIndex = 0

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.updateLoadingProgress()
  }

  updateLoadingProgress(): void {
    const interval = setInterval(() => {
      if (this.loadingProgress < 100) {
        this.loadingProgress += 1

        // Change message at certain progress points
        if (this.loadingProgress === 25) {
          this.currentMessageIndex = 0
          this.loadingText = this.loadingMessages[this.currentMessageIndex]
        } else if (this.loadingProgress === 50) {
          this.currentMessageIndex = 1
          this.loadingText = this.loadingMessages[this.currentMessageIndex]
        } else if (this.loadingProgress === 75) {
          this.currentMessageIndex = 2
          this.loadingText = this.loadingMessages[this.currentMessageIndex]
        } else if (this.loadingProgress === 90) {
          this.currentMessageIndex = 3
          this.loadingText = this.loadingMessages[this.currentMessageIndex]
        }
      } else {
        clearInterval(interval)
        setTimeout(() => {
          this.loaderService.hideLoader()
        }, 500)
      }
    }, 30)
  }
}
