const { I } = inject();

class GooglePage {
  constructor() {
    this.searchTextBox = '//input[@name="q"]'
    this.searchButton = '(//input[@name="btnK"])[2]'
  }

  inputSearchTextBox(value) {
    I.appendField($this.searchButton, value)
  }

  clickSearchButton() {
    I.click(this.searchButton)
  }
}

export default new GooglePage()
