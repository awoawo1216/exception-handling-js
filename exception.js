// exception.js
function bagi(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka!");
    }

    if (b === 0) {
      throw new Error("Tidak bisa membagi dengan nol!");
    }

    const hasil = a / b;
    console.log(`Hasil pembagian ${a} / ${b} = ${hasil}`);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  } finally {
    console.log("Proses pembagian selesai.\n");
  }
}

// Contoh pemanggilan fungsi
bagi(10, 2);   // Normal
bagi(10, 0);   // Error: pembagian nol
bagi("10", 2); // Error: input bukan angka


