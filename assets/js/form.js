let generate_button = document.querySelector(".generate_button");

let product = document.querySelector("#product");

generate_button.addEventListener("click", (e) => {
  e.preventDefault();

  axios
    .get(`http://23.99.194.19:5000/get-text?ins=${product.value}`)
    .then((result) => {
      let Responsedata = result.data;
      document.querySelector(
        ".output_area textarea"
      ).value = `${product.value} ${Responsedata}`;

      window.scrollTo(0, 1000);
    })
    .catch((err) => {
      console.log(err);
    });

  //   document.querySelector(".output_area input").value = product.value;
});
