const bikes = [
  {
    name: "Yamaha R15",
    engine: "155cc",
    price: "Rs. 5,00,000",
    mileage: "40 km/l"
  },
  {
    name: "Bajaj Pulsar 150",
    engine: "149cc",
    price: "Rs. 2,80,000",
    mileage: "45 km/l"
  },
  {
    name: "Royal Enfield Classic 350",
    engine: "349cc",
    price: "Rs. 6,00,000",
    mileage: "35 km/l"
  },
  {
    name: "KTM Duke 200",
    engine: "199cc",
    price: "Rs. 5,50,000",
    mileage: "30 km/l"
  }
];

function renderBikes(filteredBikes = bikes) {
  const list = document.getElementById("bikeList");
  list.innerHTML = "";

  filteredBikes.forEach((bike, index) => {
    const div = document.createElement("div");
    div.className = "bike-item";
    div.innerHTML = `
      <div>
        <strong>${bike.name}</strong><br>
        Engine: ${bike.engine} | Mileage: ${bike.mileage}
      </div>
      <div>
        <input type="checkbox" class="compare-check" value="${index}" />
      </div>
    `;
    list.appendChild(div);
  });
}

function searchBikes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = bikes.filter(bike =>
    bike.name.toLowerCase().includes(input)
  );
  renderBikes(filtered);
}

function compareSelectedBikes() {
  const checked = document.querySelectorAll(".compare-check:checked");
  const compareContainer = document.getElementById("compareContainer");

  compareContainer.innerHTML = "";

  if (checked.length < 2) {
    compareContainer.innerHTML = "<p>Please select at least 2 bikes to compare.</p>";
    return;
  }

  checked.forEach(box => {
    const bike = bikes[box.value];
    const div = document.createElement("div");
    div.className = "compare-card";
    div.innerHTML = `
      <h3>${bike.name}</h3>
      <p><strong>Engine:</strong> ${bike.engine}</p>
      <p><strong>Price:</strong> ${bike.price}</p>
      <p><strong>Mileage:</strong> ${bike.mileage}</p>
    `;
    compareContainer.appendChild(div);
  });
}

// Initial render
renderBikes();
