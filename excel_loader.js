
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("vragen-container");
  const hoofdstukKey = "rapport_motor_excel"; // Pas dit aan per pagina

  const base64 = localStorage.getItem(hoofdstukKey);
  if (!base64) {
    container.innerHTML = "<p style='color:red;'>Geen Excel gevonden in instellingen.</p>";
    return;
  }

  try {
    const binary = atob(base64.split(",")[1]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    const workbook = XLSX.read(bytes, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    container.innerHTML = "";

    data.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "vraag-blok";
      div.innerHTML = `
        <label><strong>${item.onderdeel}</strong><br>
          ${item.i_tekst ? '<small>' + item.i_tekst + '</small><br>' : ''}
          ${getInput(item.veldtype, index)}
          ${item.foto_mogelijk === 'Ja' ? '<br><input type="file" accept="image/*">' : ''}
        </label>
        <hr>`;
      container.appendChild(div);
    });
  } catch (e) {
    container.innerHTML = "<p style='color:red;'>Excel laden uit localStorage mislukt.</p>";
    console.error(e);
  }

  function getInput(type, id) {
    if (type === "Ja/Nee") {
      return `<select name="vraag_${id}">
                <option value="">Kies...</option>
                <option value="Ja">Ja</option>
                <option value="Nee">Nee</option>
              </select>`;
    } else if (type === "G/RV/V/M/S") {
      return `<select name="vraag_${id}">
                <option value="">Kies...</option>
                <option value="G">G</option>
                <option value="RV">RV</option>
                <option value="V">V</option>
                <option value="M">M</option>
                <option value="S">S</option>
              </select>`;
    } else {
      return `<textarea name="vraag_${id}" rows="2" cols="40"></textarea>`;
    }
  }
});
