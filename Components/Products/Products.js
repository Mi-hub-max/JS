class Products {
  constructor() {
    this.classNameActive = "StyleButtonActive";
    this.labelAdd = "Add to Basket";
    this.labelRemove = "Delete from Basket";
  }
  setLocationStorage(elem, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (pushProduct) {
      elem.classList.add("StyleButtonActive");
      elem.innerHTML = this.labelRemove;
    } else {
      elem.classList.remove("StyleButtonActive");
      elem.innerHTML = this.labelAdd;
    }
    header.render(products.length);
  }
  render() {
    let productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    items.map(({ id, name, imgUrl, orderInfo, price, color }) => {
      let activeClass,
        activeText = "";
      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <div class='cellInGrid' data-color="${color}">
          <h4 style ='margin:10px 0 10px 0'><b>${name}</b></h4>
          <img class = 'ElementImage' src="${imgUrl}">
          <div class= 'WithoutBorder'>${orderInfo.inStock} left in stock</div>
          <button class ='StyleButton ${activeClass}'
          onClick='product.setLocationStorage(this, ${id});'
          >
            ${activeText}
          </button>
          <div class = 'endElement'> 
            <img src="Img/icons/like_empty.svg">
            <b>${orderInfo.reviews}%</b>
            <div class='secondElem'>Positive reviews Above avarage</div>
          </div>
        </div>`;
    });
    let divGrid = `<div id='grid'> ${htmlCatalog} </div>`;
    ROOT_PRODUCTS.innerHTML = divGrid;
  }
}
let product = new Products();
product.render();
