const fs = require("fs");
class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
  }

  static async getItemRandom(fileName, response) {
      try {
        let data = await fs.promises.readFile(fileName, "utf-8");
        data = JSON.parse(data);
        const numberRandom =  Math.floor(Math.random() * data.length)+1;
        data = data.find(item => item.id === numberRandom);
        return response.json(data);
      } catch (error) {
        return response.json({ error: "Error, no existe el archivo" });
      }
  }

  static async getAll(fileName, response) {
    try {
      let data = await fs.promises.readFile(fileName, "utf-8");
      data = JSON.parse(data);
      return response.json(data);
    } catch (error) {
      console.log("Error, no existe:", fileName);
      return response.json({ error: "Error, no existe el archivo" });
    }
  }
}

module.exports = Contenedor;
