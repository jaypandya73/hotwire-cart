import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"
import Rails from "@rails/ujs";

export default class extends Controller {
  
  connect() {
    console.log("connected...")
  }

  openModal(e) {
    console.log(this.element)
    const productId = e.target.getAttribute("data-product-id")
    const ndc = e.target.getAttribute("data-product-ndc")
    document.getElementById(`productNdc-${productId}`).innerHTML = `NDC: ${ndc}`
    const myModal = new Modal(document.getElementById(`product${productId}`))
    myModal.show()
  }

}
