document.getElementById("generateButton").addEventListener("click", generateHaiku);

function generateHaiku() {
    const haikuContainer = document.getElementById("haikuContainer");

    // Phrases for each line
    const line1 = getRandomPhrase(5);
    const line2 = getRandomPhrase(7);
    const line3 = getRandomPhrase(5);

    // Combine the phrases into a haiku
    const generatedHaiku = `${line1} (${countSyllables(line1)} syllables)<br>${line2} (${countSyllables(line2)} syllables)<br>${line3} (${countSyllables(line3)} syllables)`;

    // Set the haiku content
    haikuContainer.innerHTML = `<h3>Your Haiku:</h3><p>${generatedHaiku}</p>`;
}

function getRandomPhrase(syllables) {
    const phrases = [
        "Neural networks hum",
        "Silicon minds at work",
        "Code dances in loops",
        "Quantum thoughts unfold",
        "Algorithms whisper",
        "Circuits pulse and glow",
        "Electric minds in sync",
        "Virtual whispers flow",
        "Machine intelligence grows",
        "Synapses fire and spark",
        "Data streams like a river",
        "Binary stars align",
        "Artificial minds dream",
        "Quantum bits entwine",
        "Logic gates open wide",
        "Code weaves a tapestry",
        "Synthetic minds awaken"
    ];

    // Filter phrases by syllable count
    const filteredPhrases = phrases.filter(phrase => countSyllables(phrase) === syllables);

    // Randomly select a phrase
    return filteredPhrases[Math.floor(Math.random() * filteredPhrases.length)];
}

function countSyllables(word) {
  const syllableRegex = /[^aeiouy]*[aeiouy]+/gi;
  const matches = word.match(syllableRegex);
  return matches ? matches.length : 0;
}
