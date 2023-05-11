function Laptop() {
    const laptop = {
      name: document.getElementById("name").value,
      price: parseFloat(document.getElementById("price").value)
    };
    if (document.getElementById("discount").checked) {
      const discountPrice = laptop.price * 0.8;
      laptop.price = discountPrice.toFixed(2);
    }
    const output = `Name: ${laptop.name} <br> Price: ${laptop.price}`;
    document.getElementById("output").innerHTML = output;
  }