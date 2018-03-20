export class App { 
  message = "Languages"; 
  constructor() {
    this.selectedLanguages = [];
    this.map = this.seadMap();
  }

  seadMap(){
    let languages = new Map();
    languages.set("A", [
      "Afrikaans",
      "Albanian",
      "Amharic"
    ]);
    languages.set("B", [
      "Bamanankan",
      "Bashkort (Bashkir)",
      "Basque"
    ]);
    languages.set("C", [
      "Cantonese",
      "Catalan",
      "Cebuano"
    ]);
    
    return languages;
  }
}