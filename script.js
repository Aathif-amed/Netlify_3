async function foo() {

    try {
        let data = await fetch("https://api.chucknorris.io/jokes/random");
        let data1 = await data.json()
        let div = document.createElement("div");
        div.classList.add("conatiner-fulid", "d-flex", "justify-content-center", "m-5", "p-5")
        div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">ChuckNoris</div>
        <div class="card-body">
          <p class="card-text">${data1.value}</p>
        </div>
      </div>`
        document.body.append(div);

    } catch (error) {
        console.log(error);
    }

}
foo();