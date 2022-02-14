class Filter {
  checkBox({ id, checked }, event) {
    let products = document.querySelectorAll(".cellInGrid");

    if (checked) {
      products.forEach((el, index) => {
        let proverka = false;
        console.log(
          id + "<id  prod>" + products[index].dataset.color.split(",")
        );
        for (
          let y = 0;
          y < products[index].dataset.color.split(",").length;
          y++
        ) {
          if (id == products[index].dataset.color.split(",")[y]) {
            proverka = true;
            y = products[index].dataset.color.split(",").length + 1;
          } else if (
            proverka == false &&
            y == products[index].dataset.color.split(",").length - 1
          ) {
            products[index].style.display = "none";
          }
        }
      });
    } else if (!checked) {
      products.forEach((el, index) => {
        products[index].style.display = "flex";
      });
    }
  }
  getColor() {
    let sortColor = [];
    // this.products.forEach((item) => console.log(item));
    items.map(({ color }) => {
      sortColor.push(color);
    });
    sortColor = sortColor.flat();
    sortColor = sortColor.filter(function (item, pos) {
      return sortColor.indexOf(item) == pos;
    });
    return sortColor;
  }
  render() {
    let htmlNavList = ``;
    let htmlCheckBox = ``;
    this.getColor().map((elem) => {
      htmlNavList += ` <label for="${elem}">${elem}</label>
      <input id="${elem}" type="checkbox" onclick="filter.checkBox(this,event)" />
      `;
    });
    htmlCheckBox += `<input type="checkbox" id="burger" />
    <label for="burger" class="burger-menu">
      <span></span>
    </label>
    
    <div class="nav-list">
     ${htmlNavList}
    </div>`;
    ROOT_FILTER_PRODUCTS.innerHTML = htmlCheckBox;
  }
}

let filter = new Filter();
filter.render();
