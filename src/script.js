var encryptionMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};


function processText(event, operation) {
  event.preventDefault();

  var inputText = document.getElementById('inputText1').value;
  var outputText = '';

  if (inputText === '') {
    // Mostrar la imagen y el párrafo cuando no hay texto en la textarea
    document.getElementById('messageNotFound').style.display = 'block';
    document.getElementById('outputText').textContent = '';
    document.getElementById('buttonCopiar').style.display = 'none';
    return;
  }  else {
    document.getElementById('messageNotFound').style.display = 'none';
    document.getElementById('outputText').textContent = outputText;
    document.getElementById('buttonCopiar').style.display = 'block';

    if (operation === 'encrypt') {
      outputText = encriptar(inputText, encryptionMap);
    } else {
      outputText = decryptText(inputText);
    }

    document.getElementById('outputText').textContent = outputText;
  }
}

function encriptar(text, map) {
  var transformedText = '';

  for (var i = 0; i < text.length; i++) {
    var char = text[i];

    if (map.hasOwnProperty(char)) {
      transformedText += map[char];
    } else {
      transformedText += char;
    }
  }

  

  return transformedText;
}

function decryptText(text) {
  var decryptedText = text.replaceAll('enter', 'e')
                          .replaceAll('imes', 'i')
                          .replaceAll('ai', 'a')
                          .replaceAll('ober', 'o')
                          .replaceAll('ufat', 'u');
  
 

  return decryptedText;
}


function copyToClipboard() {
  var outputText = document.getElementById('outputText').textContent;

  navigator.clipboard.writeText(outputText)
    .then(function() {
      alert('Texto copiado al portapapeles');
    })
    .catch(function(error) {
      console.error('Error al copiar al portapapeles:', error);
    });
}

