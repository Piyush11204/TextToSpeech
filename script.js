let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voiceSelect = document.querySelector("#voiceSelect");

        // Populate the voices dropdown when the voices are loaded
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            voiceSelect.innerHTML = voices
                .map(voice => `<option value="${voice.name}">${voice.name}</option>`)
                .join("");
        };

        // Update the speech voice when a new voice is selected
        voiceSelect.addEventListener("change", () => {
            speech.voice = voices.find(voice => voice.name === voiceSelect.value);
        });

        // Set the speech text and speak when the button is clicked
        document.querySelector("#speakButton").addEventListener("click", () => {
            speech.text = document.querySelector("#textToSpeak").value;
            speech.voice = voices.find(voice => voice.name === voiceSelect.value);
            window.speechSynthesis.speak(speech);
        });