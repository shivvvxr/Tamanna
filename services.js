const products = [
  { name: "Data Center Setup", img: "data-center.png" },
  { name: "Server Supply & Installation", img: "cloud-server.png" },
  { name: "LAN Networking Services", img: "network-switch.png" },
  { name: "Website Development", img: "web-link.png" },
  { name: "Antivirus Solutions", img: "antivirus.png" },
  { name: "Netscaler Solutions", img: "connection.png" },
  { name: "Citrix / VMware Solutions", img: "solution.png" },
  { name: "Security Solutions", img: "cyber-security.png" },
  { name: "CCTV Installation Services", img: "security-camera.png" },
  { name: "Biometric Solutions", img: "biometric.png" },
  { name: "Electric Fencing Solutions", img: "fence.png" },
  { name: "Vehicle Hiring Services", img: "car.png" },
  { name: "Manpower Supply Services", img: "worker.png" },
  { name: "Interior Design", img: "interior-design.png" },
];

const featuredProducts = products.slice(0, 5); // first 5 as featured

const featuredCarousel = document.getElementById("featuredCarousel");
const productsGrid = document.getElementById("productsGrid");

featuredProducts.forEach(p => {
  const div = document.createElement("div");
  div.className = "bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center min-w-[200px] transition-transform hover:scale-105 hover:shadow-xl";
  div.innerHTML = `<img src="${p.img}" alt="${p.name}" class="w-32 h-32 object-contain mb-3"><h3 class="font-semibold">${p.name}</h3>`;
  featuredCarousel.appendChild(div);
});

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl";
  div.innerHTML = `<img src="${p.img}" alt="${p.name}" class="w-32 h-32 object-contain mb-3"><h3 class="font-semibold">${p.name}</h3>`;
  productsGrid.appendChild(div);
});
