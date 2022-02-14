class Header {
  toggleCheckbox(element, event) {
    let arrProducts = document.getElementsByClassName("cellInGrid");
  }
  render(counterProducts) {
    let counter = 0;

    let htmlHeader = `
    
    <div class="main-image">
    <img
      src="./img/icons/image.jpg"
      alt="заставка"
      width="100%"
      height="60px"
    />
  </div>

    <button class= "HeaderButtonElement" onclick="basketElement.render()">
      <img src="./img/icons/cart.svg" alt="" width="40%" />
      
      <p class="counterText" style = "margin: 0;"> (${counterProducts})</p>
    </button>
  `;
    ROOT_HEADER.innerHTML = htmlHeader;
  }
}
let header = new Header();
const keyProducts = localStorageUtil.getProducts();
header.render(keyProducts.length);
