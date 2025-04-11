import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(true)
  isLoading$ = this.isLoadingSubject.asObservable()

  constructor() {
    setTimeout(() => {
      this.hideLoader()
    }, 3000)
  }

  showLoader(): void {
    this.isLoadingSubject.next(true)
  }

  hideLoader(): void {
    this.isLoadingSubject.next(false)
  }
}
