
  const hero = document.getElementById('hero');
  const images = [
    '/MotoSpeca/assets/DUKE 200.webp',
    // '/assets/ns-200-removebg-preview.png',
    '/assets/ns-200.jpg'
  ];
  let current = 0;
  let interval;

  function showImage(index) {
    current = (index + images.length) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
  }

  function nextImage() {
    showImage(current + 1);
    resetAutoSlide();
  }

  function prevImage() {
    showImage(current - 1);
    resetAutoSlide();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      showImage(current + 1);
    }, 10000); // 10 seconds
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Initial load
  showImage(current);
  startAutoSlide();


const bikes = [
  {
    name: "Bajaj Pulsar NS200",
    image: "/MotoSpeca/assets/bajaj-pulsar-ns200-bike-removebg.png",
    specs: [
      "Engine: 199.5 cc",
      "Power: 24.5 PS @ 9750 rpm",
      "Torque: 18.74 Nm @ 8000 rpm",
      "Brakes: Front & Rear Disc",
      "ABS: Dual Channel"
    ]
  },
  {
    name: "Yamaha R15 V4",
    image: "/assets/R15M-0-300x214.png",
    specs: [
      "Engine: 155 cc",
      "Power: 18.4 PS @ 10000 rpm",
      "Torque: 14.2 Nm @ 7500 rpm",
      "Brakes: Front & Rear Disc",
      "ABS: Dual Channel"
    ]
  },
  {
    name: "TVS Apache RTR 160",
    image: "/assets/APACHE 160.png",
    specs: [
      "Engine: 159.7 cc",
      "Power: 16.04 PS @ 8750 rpm",
      "Torque: 13.85 Nm @ 7000 rpm",
      "Brakes: Front Disc, Rear Drum",
      "ABS: Single Channel"
    ]
  },
  {
    name: "KTM Duke 200 ",
    image: "/assets/DUKE 200.webp",
    specs: [
"Engine displacement: 199.5 cc ",
"Power: ~25 PS (19 kW) @ 10,000 rpm ",
"Torque: ~19.3 Nm @ 8,000 rpm ",
"Brakes:",
"->Front: 300 mm disc",
"->Rear: 230 mm disc ",
"ABS: Dual-channel (Bosch) ABS standard "

    ]
  },
  {
    name: "Yamaha MT‑15",
    image: "/assets/Yamaha-mt-15-nepal-rbg.png",
    specs: [
      "Engine:155 cc, liquid-cooled, 4-stroke, SOHC, 4-valve",
      "Power:18.4 PS @ 10,000 rpm",
      "Torque:14.1 Nm @ 7,500 rpm",
      "Brakes: ",
      "Front:282 mm disc",
      "Rear 220 mm disc",
      "ABS: Single Channel"
    ]
  },
  // {
  //   name: "TVS Apache RTR 160",
  //   image: "/assets/APACHE 160.png",
  //   specs: [
  //     "Engine: 159.7 cc",
  //     "Power: 16.04 PS @ 8750 rpm",
  //     "Torque: 13.85 Nm @ 7000 rpm",
  //     "Brakes: Front Disc, Rear Drum",
  //     "ABS: Single Channel"
  //   ]
  // },{
  //   name: "TVS Apache RTR 160",
  //   image: "/assets/APACHE 160.png",
  //   specs: [
  //     "Engine: 159.7 cc",
  //     "Power: 16.04 PS @ 8750 rpm",
  //     "Torque: 13.85 Nm @ 7000 rpm",
  //     "Brakes: Front Disc, Rear Drum",
  //     "ABS: Single Channel"
  //   ]
  // },{
  //   name: "TVS Apache RTR 160",
  //   image: "/assets/APACHE 160.png",
  //   specs: [
  //     "Engine: 159.7 cc",
  //     "Power: 16.04 PS @ 8750 rpm",
  //     "Torque: 13.85 Nm @ 7000 rpm",
  //     "Brakes: Front Disc, Rear Drum",
  //     "ABS: Single Channel"
  //   ]
  // },
  // Add more bikes here...
];

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalSpecs = document.getElementById("modalSpecs");

function showModal(index) {
  const bike = bikes[index];
  modalTitle.textContent = bike.name;
  modalImage.src = bike.image;

  // Clear previous specs
  modalSpecs.innerHTML = "";
  bike.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    modalSpecs.appendChild(li);
  });

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// Optional: close modal when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
