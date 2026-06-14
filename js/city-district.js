// ==============================
// CITY / DISTRICT SYSTEM
// ==============================

const citySelect =
  document.querySelector("#city-select");

const districtSelect =
  document.querySelector("#district-select");

if (citySelect && districtSelect) {

  // Şehir / İlçe Verileri
  const cityData = {

    "İstanbul": [
      "Kadıköy",
      "Beşiktaş",
      "Şişli",
      "Üsküdar",
      "Fatih"
    ],

    "Ankara": [
      "Çankaya",
      "Keçiören",
      "Mamak",
      "Etimesgut"
    ],

    "İzmir": [
      "Bornova",
      "Karşıyaka",
      "Konak",
      "Buca"
    ],

    "Sivas": [
      "Merkez",
      "Zara",
      "Kangal",
      "Divriği"
    ],

    "Bursa": [
      "Nilüfer",
      "Osmangazi",
      "Yıldırım"
    ]

  };

  // Şehirleri ekle
  Object.keys(cityData)
    .forEach((city) => {

      const option =
        document.createElement("option");

      option.value = city;
      option.textContent = city;

      citySelect.appendChild(option);

    });

  // Şehir değişince ilçeleri güncelle
  citySelect.addEventListener(
    "change",
    () => {

      const selectedCity =
        citySelect.value;

      districtSelect.innerHTML = "";

      // Şehir seçilmediyse
      if (!selectedCity) {

        districtSelect.disabled = true;

        districtSelect.innerHTML =
          `
          <option value="">
            Önce şehir seçin
          </option>
          `;

        return;

      }

      districtSelect.disabled = false;

      // Varsayılan option
      const defaultOption =
        document.createElement("option");

      defaultOption.value = "";

      defaultOption.textContent =
        "İlçe Seçiniz";

      districtSelect.appendChild(
        defaultOption
      );

      // İlçeleri ekle
      cityData[selectedCity]
        .forEach((district) => {

          const option =
            document.createElement("option");

          option.value = district;

          option.textContent = district;

          districtSelect.appendChild(
            option
          );

        });

    }
  );

}