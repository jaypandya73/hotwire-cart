import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"
import Rails from "@rails/ujs";

export default class extends Controller {

  static values = { url: String }
  static targets = ["tabs"]

  connect() {
    console.log("init stimulust controller...")
  }

  toogleTab(e) {
    console.log(e.currentTarget)
    console.log(this.element)
    console.log(this.tabsTargets)
    console.log(this.tabsTargets.indexOf(e.currentTarget))
  }

  reloadFrame() {
    console.log('reaload')
    console.log(this.element)
    let element = document.getElementById("items")
    // const { src } = element
    // element.src = null
    // element.src = src
    element.reload()
    let myModal = new Modal(document.getElementById('cart'));
    myModal.show();
  }

  loadShipping() {
    // console.log("called here")
    const element = document.getElementById("shippingPart")
    element.innerHTML = "Loading via Updating Qty..."
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => element.innerHTML = html)
  }

  updateQty(e) {
    console.log("changed here")
    console.log(this.urlValue)

    let element = document.getElementById(`edit_line_item_${e.target.dataset.id}`)

    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      Rails.fire(element, 'submit')
    }, 100)
    this.loadShipping()
  }

  showProfile() {
    console.log("profile tab")
  }

}
