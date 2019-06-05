# SmartWorkbenchFrontend

Das ist das Frontend unseres IoT-Projekts *SmartWorkbench* 🔨

Um dir sämtliche Module und Abhängigkeiten zu installieren, solltest Du als erstes ein `npm i` ausführen. Dann kannst du mit `npm start` den lokalen Entwicklungsserver starten, welcher standardmäßig auf Port 3000 läuft und dann kannst Du auch schon loslegen. Details zu diesen Befehlen sowie vieles weiteres Nützliches rund um diese React App findest Du in der *README.md* im */webapp* Verzeichnis 👀

## Schnittstellendokumentation ##
Damit eine reibungslose Kommunikation zwischen Frontend und Backend geschehen kann 💫 müssen die jeweiligen Schnittstellen eindeutig definiert werden.

Die Daten werden im *json*-Format ausgetauscht, wobei folgende Struktur zu beachten ist: Das Array enthält alle Bauanleitungen, wobei jede Bauanleitung einen Titel (`manualTitle`) und Bauanweisungen (`manualInstructions`) hat. Die Bauanweisungen sind selbst wieder ein Array an durchzuführenden Schritten. jeder Schritt hat einen Titel (`instructionsTitle`), ein Bild zur Visualisierung (`instructionVisualization`) und eine textuelle Beschreibung, was genau zu tun ist (`instructionDescription`). Ein *json*-Objekt kann dann z.B. folgendermaßen aussehen:
```javascript
manuals: [{
          manualTitle: "Legohaus bauen",
          manualInstructions: [
            {
              instructionTitle: "Dach bauen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            },
            {
              instructionTitle: "Mauer bauen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            },
            {
              instructionTitle: "Dach und Mauer zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            }
          ]
        },
        {
          manualTitle: "Legomännchen bauen",
          manualInstructions: [
            {
              instructionTitle: "Kopf und Körper zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
            },
            {
              instructionTitle: "Körper und Beine zusammensetzen",
              instructionVisualization: "",
              instructionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            },
          ]
        },
      ]
```
