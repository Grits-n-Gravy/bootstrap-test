let randoCat = function randomCategory() {
  return Math.floor(Math.random() * 1000);
};

let randoQue = function randoQue() {
  return Math.floor(Math.random() * 5);
};

async function getInfo() {
  try {
    const response = await fetch(
      "https://jservice.io/api/category?id=" + randoCat()
    );
    const data = await response.json();
    console.log(data.title);
    let categories = document.getElementById("category" + i);
    for (let i = 1; i <= 4; i++) {
      categories.insertAdjacentText("afterbegin", data.title);
    // }
    // let category1 = document.getElementById("category1");
    // category1.insertAdjacentText("afterbegin", data.title);
    // let clues = document.getElementById("btn1");
    // clues.insertAdjacentText("afterbegin", data.clues[0].value);

    // let category2 = document.getElementById("category2");
    // category2.insertAdjacentText("afterbegin", data.title);

    // let category3 = document.getElementById("category3");
    // category3.insertAdjacentText("afterbegin", data.title);

    // let category4 = document.getElementById("category4");
    // category4.insertAdjacentText("afterbegin", data.title);
  } catch (e) {
    console.log("error");
  }
}

getInfo();

// 27723 different category ids (95-99 doesn't have any clues)
