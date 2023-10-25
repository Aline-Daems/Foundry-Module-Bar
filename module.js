Hooks.on("renderSheet", (app, html, data) => {
    // Vérifiez si la fiche de personnage est de type D&D 5e
    if (app.entity.type === "Character" && app.options.template === "path/to/dnd5e-sheet") {
      // Créez la barre de Mana
      const manaBar = `<div class="mana-bar"><span class="mana-label">Alignement</span><meter class="mana-meter" value="50" min="0" max="100"></meter></div>`;
      
      // Insérez la barre de Mana dans la fiche de personnage
      html.find(".alignement").append(manaBar);
    }
  });