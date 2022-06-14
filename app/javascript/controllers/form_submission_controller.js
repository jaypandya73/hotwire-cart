import { Controller } from "@hotwired/stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = [ "form" ]

  connect() {
    console.log("loaded")
  }

  search() {
    clearTimeout(this.timeout)
    
    this.timeout = setTimeout(() => {
      Rails.fire(this.formTarget, 'submit')
    }, 100)
  }
}
