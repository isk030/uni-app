/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';

export const DocumentationThree = () => {
    return (
        <div className='overflow-visible overflow-scroll h-[80vh]'>
            <h1>Einführung und Hintergrund</h1>
            <p>
                In diesem Projekt habe ich mich mit der Entwicklung von Modellen
                zur Wortvorhersage beschäftigt, indem ich sowohl ein Recurrent
                Neural Network (RNN) als auch ein Feed-Forward Neural Network
                (FFNN) trainiert habe. Die verwendeten Trainingsdaten stammen
                aus dem Buch „Effie Briest“ von Theodor Fontane, einem
                klassischen Werk der deutschen Literatur.
            </p>
            <br />
            <h2>Experimentieren mit der Netzwerkarchitektur</h2>
            <br />
            <p>
                Finale Architektur des LSTM-Modells: Embedding-Schicht (100
                Dimensionen): Dient zur Vektorisierung der Worte und bildet die
                Basis des Modells.
            </p>

            <p>
                LSTM-Schicht (256 Einheiten, 30% Dropout): Gewählt aufgrund
                ihrer Fähigkeit, Langzeitabhängigkeiten in Sequenzen zu
                erfassen.
            </p>

            <p>
                Dense-Ausgabeschicht (Softmax-Aktivierung): Generiert eine
                Wahrscheinlichkeitsverteilung über das Vokabular.{' '}
            </p>

            <p>
                Finale Architektur des FFNN-Modells: Embedding-Schicht:
                Identisch zum LSTM-Modell, um Konsistenz zu wahren.
            </p>

            <p>
                Flatten-Schicht: Transformiert die sequentiellen Daten in einen
                flachen Vektor.
            </p>

            <p>
                Dense-Schichten (512 Einheiten, ReLU-Aktivierung): Ausreichend
                dimensioniert, um die Komplexität des Textes zu erfassen.
            </p>
            <br />
            <h2>Ergebnisse der Wortvorhersage</h2>
            <p>
                Die Experimente haben gezeigt, dass die Vorhersagegenauigkeit
                (k=1) beim LSTM-Modell höher war als beim FFNN. Dies spiegelt
                sich auch in den Top-k-Genauigkeiten wider, mit besseren
                Ergebnissen für k=5, 10, 20 und 100 beim LSTM. Die
                Perplexity-Werte waren beim LSTM-Modell durchweg niedriger, was
                auf eine höhere Vorhersagequalität hinweist.
            </p>
            <br />
            <p>Vergleich der Performance von RNN und FFNN</p>
            <p>
                Der Vergleich zwischen RNN (LSTM) und FFNN zeigte deutlich, dass
                das RNN besser für die Wortvorhersageaufgabe geeignet ist. Dies
                liegt an seiner Fähigkeit, sequentielle Informationen zu
                speichern und zu verarbeiten. Während das FFNN schneller
                trainiert wurde, mangelte es ihm an der Fähigkeit, die
                Kontextabhängigkeit der Wörter effektiv zu erfassen, was zu
                schlechteren Vorhersageergebnissen führte.
            </p>

            <br />
            <h1>
                Rekonstruktion der Trainingsdaten und Datenschutzüberlegungen
            </h1>
            <br />
            <p>
                Eine interessante Beobachtung war, dass das LSTM-Modell in
                einigen Fällen fähig war, Teile der Trainingsdaten (Text aus
                "Effie Briest") zu rekonstruieren. Dies wirft wichtige Fragen
                hinsichtlich des Datenschutzes auf, besonders wenn man bedenkt,
                dass private Daten wie E-Mails für das Training verwendet werden
                könnten. In zukünftigen Projekten muss sorgfältig erwogen
                werden, welche Daten zum Training verwendet werden, insbesondere
                um die Privatsphäre der Nutzer zu schützen. Die Verwendung von
                öffentlichen oder anonymisierten Daten
            </p>
            <div className=' grid grid-cols-2 gap-1s'>
                <img className='mx-auto' src='esa331.png' width={600}></img>
                <img className='mx-auto' src='esa332.png' width={600}></img>
                <img className='mx-auto' src='esa333.png' width={600}></img>
            </div>
        </div>
    );
};
