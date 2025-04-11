import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  private isOpenSubject = new BehaviorSubject<boolean>(false)
  isOpen$ = this.isOpenSubject.asObservable()

  get isOpen(): boolean {
    return this.isOpenSubject.value
  }

  constructor() {
    // Check if we're on desktop and set sidebar to open by default
    if (window.innerWidth >= 992) {
      this.isOpenSubject.next(true)
    }

    // Listen for window resize events
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        this.isOpenSubject.next(true)
      } else {
        this.isOpenSubject.next(false)
      }
    })
  }

  toggle(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value)
  }

  open(): void {
    this.isOpenSubject.next(true)
  }

  close(): void {
    this.isOpenSubject.next(false)
  }
}
