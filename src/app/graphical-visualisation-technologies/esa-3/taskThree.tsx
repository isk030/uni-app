export const TaskThree = () => {
    return (
        <div>
            <p className='font-bold'>Aufgabenstellung:</p>
            <p>Das ist ESA 3</p>
            <br />
            <p>
                Es ist Ihnen überlassen, ob Sie die Bilder auf mehrere Dateien
                verteilen, oder alle Bilder der Animation als Sprite-Sheet, also
                in einer Datei anordnen.
            </p>
            <br />
            <p className='font-bold'>Erweiterungen: </p>
            <div>
                <ol>
                    <li>
                        1: Außer einer Scheibe kreieren und animieren Sie noch
                        ein anderes Objekt Ihrer Wahl als Sprite-Sheet, z. B.
                        einen hüpfenden Hasen.
                    </li>
                    <br />
                    <li>
                        2: Die Scheibe dreht sich automatisch mit Taste a, dazu
                        muss diese kontinuierlich animiert werden (die Animation
                        sollte bei einem weiteren Drücken von a auch wieder
                        angehalten werden).
                    </li>
                </ol>
            </div>
            <br />
            <p>
                <span className='font-bold'>Interaktion:</span> Auf den
                Tastendruck l oder r soll sich die Scheibe augenscheinlich ein
                Stück nach links beziehungsweise nach rechts drehen. Zum Drehen
                muss man wiederholt drücken (mit l und r soll es nur also einen
                Schritt/ ein Bild weiter gehen.). Das automatische Drehen und
                Stoppen für die Erweiterung erfolgt über die Taste a. Alternativ
                können Sie die Funktionalität auf Button abbilden. Beachten Sie
                dabei Human/Mensch-Computer-Interaction (HCI) Kriterien beim
                Interaktionsdesign: ISO 9241-11 Anforderungen an die
                Gebrauchstauglichkeit und die ISO 9241-110 zu
                Interaktionsprinzipien.
            </p>
        </div>
    );
};
