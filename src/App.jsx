
import { useState, useEffect } from "react";



function App() {

  const sounds = [
    {
      key: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "S",
      id: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      id: "Kick-n-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const [display, setDisplay] = useState("");

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);

    document.getElementById(id).style.transform = "scale(0.4)";
    setTimeout(() => {
      document.getElementById(id).style.transform = "scale(1)";
    }, 100);
  };

  const handleKeyPress = (event) => {
    const sound = sounds.find((sound) => sound.key === event.key.toUpperCase());
    if (sound) {
      playSound(sound.key, sound.id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine" className="container">
      <i className="fa-solid fa-drum"></i>
      <h1>Drum Machine</h1>
      <div id="display">{display || "Pressione uma tecla ou clique em um botão!"}</div>
      <div className="pads-container">
        {sounds.map((sound) => (
          <div
            key={sound.key}
            id={sound.id}
            className="drum-pad"
            onClick={() => playSound(sound.key, sound.id)}
          >
            {sound.key}
            <audio className="clip" id={sound.key} src={sound.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
