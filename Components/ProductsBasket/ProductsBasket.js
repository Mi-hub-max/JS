class ProductBasket {
  deleteBasketElement(id) {
    let productsStore = localStorageUtil.putProducts(id);
    basketElement.render();
  }
  closeBasket() {
    ROOT_PRODUCTS_BASKET.innerHTML = " ";
    product.render();
    const keyProducts = localStorageUtil.getProducts();
    header.render(keyProducts.length);
  }
  render() {
    let productsStore = localStorageUtil.getProducts();
    let htmlProductsBasket = "";
    let priceProduct = 0;
    let sumProduct = 0;

    items.map(({ id, name, imgUrl, orderInfo, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlProductsBasket += `
          
            <div class = 'cellInBasket'>
              <img src="${imgUrl}" class='imgInBasket'
              <div class='basket-content'>
              <h2>${name}</h2>
              <p>${price}</p>
              <button class = 'deleteBasketProduct' onclick='basketElement.deleteBasketElement(${id})'>
              <img src='./Img/icons/close_icon.svg'/>
              </button>
            </div>
          
        `;
        priceProduct += price;
        sumProduct++;
      }
    });

    const html = `
    <div class='hideWindow' onclick="basketElement.closeBasket()">
    </div> 
    <div class="basket-container">
        <div class= 'basketHeader'> 
          <h2>
            Basket Product
          </h2>
          <h4>
            Checkout is almost done!
          </h4>
        </div>
        <div class='basketProducts'>
        ${htmlProductsBasket}
        </div>
        <div class = 'basketFinalCounts'>
            <div class='finalSumBasket'>
              <h4>Total goods:${sumProduct}</h4>
              <h4>Total price: ${priceProduct}</h4>
            </div>
            <button class ="buttonBuyInBasket">
            Buy
            </button>
        </div>  
      </div> 
    `;
    ROOT_PRODUCTS_BASKET.innerHTML = html;
  }
}
let basketElement = new ProductBasket();
