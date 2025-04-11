import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core"
import { trigger, state, style, animate, transition } from "@angular/animations"

@Component({
  selector: "app-minecraft-loader",
  templateUrl: "./minecraft-loader.component.html",
  styleUrls: ["./minecraft-loader.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate("0.5s ease-in", style({ opacity: 1 }))]),
      transition(":leave", [animate("0.5s ease-out", style({ opacity: 0 }))]),
    ]),
  ],
})
export class MinecraftLoaderComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvasRef!: ElementRef<HTMLCanvasElement>
  loadingText = "Cargando recursos..."
  loadingProgress = 0
  loadingMessages = [
    "Generando terreno...",
    "Cargando texturas...",
    "Preparando inventario...",
    "Spawneando entidades...",
    "Cargando experiencia...",
  ]
  currentMessageIndex = 0

  constructor() {}

  ngOnInit(): void {
    this.updateLoadingProgress()
  }

  ngAfterViewInit(): void {
    this.initCanvas()
  }

  updateLoadingProgress(): void {
    const interval = setInterval(() => {
      if (this.loadingProgress < 100) {
        this.loadingProgress += 1

        // Change message at certain progress points
        if (this.loadingProgress % 20 === 0) {
          this.currentMessageIndex = (this.currentMessageIndex + 1) % this.loadingMessages.length
          this.loadingText = this.loadingMessages[this.currentMessageIndex]
        }
      } else {
        clearInterval(interval)
      }
    }, 30)
  }

  initCanvas(): void {
    const canvas = this.canvasRef.nativeElement
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create dirt block pattern
    this.drawMinecraftBackground(ctx, canvas.width, canvas.height)

    // Animation loop
    const animate = () => {
      this.drawMinecraftBackground(ctx, canvas.width, canvas.height)
      requestAnimationFrame(animate)
    }

    animate()
  }

  drawMinecraftBackground(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw dirt blocks pattern
    const blockSize = 50
    const darkBrown = "#5C4033"
    const lightBrown = "#8B4513"

    for (let x = 0; x < width; x += blockSize) {
      for (let y = 0; y < height; y += blockSize) {
        // Alternate colors for a dirt block effect
        ctx.fillStyle = (Math.floor(x / blockSize) + Math.floor(y / blockSize)) % 2 === 0 ? darkBrown : lightBrown
        ctx.fillRect(x, y, blockSize, blockSize)

        // Add texture details
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
        ctx.fillRect(x + 5, y + 5, 10, 10)
        ctx.fillRect(x + 30, y + 20, 8, 8)
        ctx.fillRect(x + 15, y + 35, 12, 7)
      }
    }
  }
}
