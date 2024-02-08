// Fonction qui implémente le chiffrement
function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      // Détermination de la base ASCII en fonction de la casse de la lettre
      const base = c < 'a' ? 65 : 97;
      // Calcul de la nouvelle position de la lettre chiffrée en utilisant le décalage
      return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
    });
}

function translate() {
    // Récupère la valeur du champ de texte avec l'id 'plaintext'
    const plaintextValue = document.getElementById('plaintext').value;
    
    // Récupère la valeur du champ de texte avec l'id 'shift' et la convertit en entier
    const shiftValue = parseInt(document.getElementById('shift').value);
    
    // Appelle la fonction caesarCipher() avec le texte d'origine et le décalage, et stocke le résultat dans la variable outputValue
    const outputValue = caesarCipher(plaintextValue, shiftValue);
    
    // Met à jour le contenu de l'élément avec l'id 'output' avec le texte chiffré
    document.getElementById('output').innerHTML = outputValue;
}

// Ajoute des écouteurs d'événements pour mettre à jour le texte chiffré lorsque l'utilisateur saisit du texte dans les champs de texte
document.getElementById('plaintext').addEventListener('input', translate);
document.getElementById('shift').addEventListener('input', translate);