/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';

export const DocumentationTwo = () => {
    return (
        <div className='overflow-visible overflow-scroll h-[80vh]'>
            <h1>
                Projektdokumentation: Entwicklung eines
                Feedforward-Neural-Networks zur Regression
            </h1>
            <p>
                In diesem Projekt habe ich mich der Herausforderung gestellt,
                eine reellwertige Funktion mit einem Feedforward-Neural-Network
                (FNN) zu regressieren. Dabei kamen PyTorch, Next.js und FastAPI
                zum Einsatz.
            </p>
            <br />
            <h2>Kernaspekte des Projekts</h2>
            <ul>
                <li>
                    <strong>Algorithmische Konfiguration:</strong> Ein
                    signifikanter Teil meiner Zeit floss in die Ermittlung
                    optimaler Netzwerkkonfigurationen anhand algorithmischer
                    Kombination der Netztwerkparameter. Die Komplexität und
                    Dauer dieses Prozesses waren größer als zunächst angenommen,
                    und einige Fehler erschwerten die Arbeit, sodass ich für die
                    fortschreitenden Schritte weniger Zeit hatte.
                </li>
                <br />
                <li>
                    <strong>Manuelle Optimierung:</strong> Letztendlich führte
                    das manuelle Testen und Anpassen der Netzwerkparameter zu
                    stetigen Verbesserungen. Insbesondere die Kombination aus
                    Batch-Normalization und linearen Layern erwies sich als
                    effektiv, um das Modell zu optimieren.
                </li>
                <br />
                <li>
                    <strong>Weight Decay:</strong> Die Experimente mit
                    L2-Regularisierung hatten einen unterschiedlichen Einfluss
                    auf die Modellperformance, was mich dazu veranlasste,
                    verschiedene Werte zu testen und zu evaluieren.
                </li>
            </ul>
            <br />
            <p>
                Das bestmögliche Modell, das ich entwickelte, erzielte niedrige
                Verlustwerte, was auf eine hohe Genauigkeit bei der
                Datenanpassung hindeutet.
                <ul>
                    <li>
                        <strong>Bias:</strong> Durch die Feinjustierung der
                        Modellarchitektur konnte ich den Bias reduzieren.
                    </li>
                    <p>
                        <strong>Beschreibung:</strong> Fehler durch
                        vereinfachende Annahmen im Lernalgorithmus. Ein hoher
                        Bias führt oft zu Underfitting
                    </p>
                    <p>
                        <strong>Auswirkung im Projekt:</strong> Anfangs
                        möglicherweise hoher Bias, da das FNN-Modell zu simpel
                        war, um die Funktion y(x) richtig abzubilden.
                    </p>
                    <br />
                    <li>
                        <strong>Variance:</strong> Das Ausbalancieren des
                        Modells war entscheidend, um Overfitting zu vermeiden
                    </li>
                    <p>
                        <strong>Beschreibung:</strong> Fehler durch
                        Überanpassung an Trainingsdaten. Eine hohe Variance
                        führt zu Overfitting,
                    </p>
                    <p>
                        <strong>Auswirkung im Projekt:</strong> Mit zunehmender
                        Modellkomplexität stieg möglicherweise die Variance, was
                        zu einer guten Performance auf Trainingsdaten, aber
                        schlechter Generalisierung führte.
                    </p>
                </ul>
            </p>
            <br />
            <p>Ergebnisse sind unter dem Tab Lösungen ersichtlich.</p>
            <br />
            <ul>
                <li>
                    Zu beobachten war, wie sich Overfitting und Underfitting in
                    Abhängigkeit von der Netzwerkkonfiguration verhalten.
                </li>
                <li>
                    Die Integration von Batch-Normalization-Layern trug hierbei
                    wesentlich zur Stabilisierung des Trainingsprozesses bei.
                </li>
            </ul>
            <br />

            <br />
            <h1>Technologieübersicht</h1>
            <br />
            <div>
                <div>
                    <h2>PyTorch</h2>
                    <strong> Link:</strong>{' '}
                    <a href='https://pytorch.org/docs/stable/index.html'>
                        PyTorch offizielle Dokumentation
                    </a>
                </div>
                <br />
                <div>
                    <h2>NumPy</h2>

                    <p>
                        <strong>Link:</strong>{' '}
                        <a href='https://numpy.org/doc/stable/'>
                            NumPy offizielle Dokumentation
                        </a>
                    </p>
                </div>
            </div>
            <div className=' grid grid-cols-2 gap-1s'>
                <img className='mx-auto' src='esa-2-doc.png' width={600}></img>
                <img className='mx-auto' src='esa-2-doc2.png' width={600}></img>
            </div>
        </div>
    );
};
