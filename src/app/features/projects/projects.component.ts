import { Component, OnInit } from "@angular/core"
import { ResumeDataService } from "../../core/services/resume-data.service"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("0.8s ease-out", style({ opacity: 1 }))]),
    ]),
    trigger("slideIn", [
      state("void", style({ transform: "translateX(-30px)", opacity: 0 })),
      transition(":enter", [animate("0.6s ease-out", style({ transform: "translateX(0)", opacity: 1 }))]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  currentSlide = 0
  autoplayInterval: any = null
  touchStartX = 0
  touchEndX = 0

  constructor(public resumeData: ResumeDataService) {}

  ngOnInit(): void {
    this.startAutoplay()
    this.setupTouchEvents()
  }

  setupTouchEvents(): void {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.addEventListener(
        "touchstart",
        (e) => {
          this.touchStartX = e.touches[0].clientX
        },
        false,
      )

      projectsSection.addEventListener(
        "touchend",
        (e) => {
          this.touchEndX = e.changedTouches[0].clientX
          this.handleSwipe()
        },
        false,
      )
    }
  }

  handleSwipe(): void {
    const minSwipeDistance = 50
    const swipeDistance = this.touchEndX - this.touchStartX

    if (swipeDistance > minSwipeDistance) {
      // Swiped right
      this.prevSlide()
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped left
      this.nextSlide()
    }
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval)
    }
  }

  resetAutoplay(): void {
    this.stopAutoplay()
    this.startAutoplay()
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.resumeData.projects.length
    this.resetAutoplay()
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.resumeData.projects.length) % this.resumeData.projects.length
    this.resetAutoplay()
  }

  goToSlide(index: number): void {
    this.currentSlide = index
    this.resetAutoplay()
  }

  openProjectLink(url: string): void {
    window.open(url, "_blank")
  }
}
