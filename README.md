# Node.js QR Code Generator

## Descrizione

Questo progetto è un generatore di QR Code costruito con Node.js. Consente agli utenti di inserire un URL e ne genera il QR Code come immagine in formato PNG. Inoltre, crea un file di testo contenente l'URL inserito.

## Funzionalità

- Generazione di un QR Code in base all'URL inserito.
- Salvataggio dell'immagine del QR Code in formato PNG.
- Creazione di un file di testo contenente l'URL inserito.

## Tecnologie Utilizzate

- Node.js
- Librerie `inquired` e `qr-image`
- File System (fs) di Node.js

## Installazione e Avvio Locale

1. Clona o scarica la repository sul tuo computer.
2. Assicurati di avere Node.js installato sul tuo sistema.
3. Apri il terminale e naviga nella directory del progetto.
4. Esegui il comando `npm install` per installare le dipendenze necessarie.

## Come Utilizzare

1. Apri il terminale e naviga nella directory del progetto.
2. Esegui il seguente comando per avviare il generatore di QR Code: `node index.js`.
3. Nel terminale verrà richiesto di inserire l'URL per cui desideri generare un QR Code.
4. Dopo aver inserito l'URL, verrà generata un'immagine in formato PNG del QR Code nella stessa cartella del progetto, con il titolo `qr_img.png`. Verrà inoltre creato un file di testo chiamato `URL.txt` contenente l'URL inserito.
