# Esercizio_1_Activa

Questo è un progetto Node.js che implementa un server CRUD per la creazione e gestione degli utenti (User).

## Descrizione

L'obiettivo di questo progetto è fornire un'API per creare e gestire gli utenti. L'API consente di eseguire operazioni di creazione (POST), ottenere (GET), aggiornare (PUT) e cancellare (DELETE) gli utenti. Inoltre, fornisce un'API per ottenere gli utenti con opzioni di ricerca avanzate e un endpoint per la documentazione dell'API tramite Swagger-OpenAPI.

## Tecnologie utilizzate nel progetto

Il progetto è stato sviluppato utilizzando le seguenti tecnologie:

- Node.js
- Docker (se si vuole usare Mongodb containerizzato)

## Se si vuole utilizzare il MongoDB in Docker
### Configurazion del Database MongoDB

Il progetto utilizza MongoDB come database per la gestione degli utenti. Di seguito sono riportati i passaggi per configurare MongoDB utilizzando Docker:

1. Assicurati di avere Docker installato sul tuo sistema.

2. Esegui il seguente comando per scaricare l'immagine più recente di MongoDB dalla Docker Hub:

```bash
docker pull mongodb/mongodb-community-server:latest
```

3. Dopo aver scaricato l'immagine, esegui il comando seguente per creare e avviare un'istanza di MongoDB in un contenitore Docker:

```bash
docker run --name mongodb -d -e MONGO_INITDB_ROOT_USERNAME='username' -e MONGO_INITDB_ROOT_PASSWORD='password' -p 27017:27017 mongodb/mongodb-community-server:latest
```

Assicurati di sostituire 'username' con il nome utente desiderato e 'password' con la password desiderata per l'utente amministratore di MongoDB. Inoltre, la porta 27017 del contenitore MongoDB viene mappata alla porta 27017 del tuo sistema locale.

Una volta completati questi passaggi, avrai MongoDB in esecuzione tramite Docker con l'utente amministratore configurato.


## Dipendenze del progetto

Il progetto utilizza le seguenti dipendenze:

- cors: Middleware per la gestione dei cors nel server Express
- dotenv: Carica le variabili d'ambiente da un file .env
- express: Framework per la creazione di API RESTful in Node.js
- mongoose: Libreria di object modeling per MongoDB
- swagger-jsdoc: Generazione automatica della documentazione dell'API tramite commenti JSDoc
- swagger-ui-express: Middleware per visualizzare la documentazione dell'API tramite Swagger UI

## Installazione

1. Clona il repository sul tuo computer
2. Assicurati di avere

 Node.js e npm installati
3. Apri il terminale nella directory del progetto
4. Esegui il comando `npm install` per installare le dipendenze del progetto

## Configurazione

Il file `.env` nella root del progetto deve contenere le seguenti variabili d'ambiente:

```
PORT=numero_porta
MONGODB_URI=uri_mongodb
MONGODB_USERNAME=username
MONGODB_PASSWORD=password
MONGODB_DB_NAME=nome_database
```

Assicurati di sostituire `numero_porta`,`uri_mongodb`, `username`, `password` e `nome_database` con i valori corretti.

## Avvio del server

1. Assicurati che MongoDB sia in esecuzione sulla tua macchina. Puoi utilizzare Docker per eseguire un'istanza di MongoDB.
2. Apri il terminale nella directory del progetto
3. Esegui il comando `npm start` per avviare il server
4. Se la porta è settata correttamente nel file .env, il server sarà disponibile all'indirizzo `http://localhost:numero_porta` (Es. PORT=8080 => `http://localhost:8080`)

## Schema dell'utente

```
  {
  "firstName": "Filippo",
  "lastName": "Di Marco",
  "placeOfBirth": "Palermo",
  "dateOfBirth": "1995-07-05T22:01:00.000Z",
  "gender": "male"
  }
```

Il formato della data deve essere "yyyy-mm-dd" o "yyyy-mm-ddThh:mm:ss.nnnZ", e il campo gender può essere solo "male" o "female". Le altre stringhe possono iniziare con una lettera e contenere solo caratteri, punti e spazi.
## API

### Creazione di un utente

- Metodo: POST
- Endpoint: `/user`
- Descrizione: Crea un nuovo utente
- Parametri di richiesta: Nessuno
- Corpo della richiesta: Un oggetto JSON contenente i dati dell'utente da creare
- Risposta di successo: Il nuovo utente creato con i dettagli completi
- Esempio:

```http
POST /user

{
  "firstName": "Filippo",
  "lastName": "Di Marco",
  "placeOfBirth": "Palermo",
  "dateOfBirth": "1995-07-05",
  "gender": "male"
}
```

### Ottenere tutti gli utenti

- Metodo: GET
- Endpoint: `/user`
- Descrizione: Ottiene tutti gli utenti presenti nel sistema
- Parametri di richiesta: Nessuno
- Corpo della richiesta: Nessuno
- Risposta di successo: Un array JSON contenente tutti gli utenti presenti nel sistema
- Esempio:

```http
GET /user
```

### Ottenere un utente specifico

- Metodo: GET
- Endpoint: `/user/{id}`
- Descrizione: Ottiene un utente specifico tramite il suo ID
- Parametri di richiesta: `id` (ObjectId) - l'ID dell'utente desiderato
- Corpo della richiesta: Nessuno
- Risposta di successo: L'utente corrispondente all'ID specificato
- Esempio:

```http
GET /user/61359f9f937d335d9b53b144
```

### Aggiornare un utente

- Metodo: PUT
- Endpoint: `/user/{id}`
- Descrizione: Aggiorna un utente specifico tramite il suo ID
- Parametri di richiesta: `id` (ObjectId) - l'ID dell'utente da aggiornare
- Corpo della richiesta: Un oggetto JSON contenente i dati dell'utente aggiornati
- Risposta di successo: L'utente aggiornato con i dettagli completi
- Esempio:

```http
PUT /user/61359f9f937d335d9b53b144

{
  "firstName": "Filippo",
  "lastName": "Di Marco",
  "placeOfBirth": "Palermo",
  "dateOfBirth": "1995-07-05",
  "gender": "male"
}
```

### Eliminare un utente

- Metodo: DELETE
- Endpoint: `/user/{id}`
- Descrizione: Elimina un utente specifico tramite il suo ID
- Parametri di richiesta: `id` (ObjectId) - l'ID dell'utente da eliminare
- Corpo della richiesta: Nessuno
- Risposta di successo: Nessuna risposta
- Esempio:

```http
DELETE /user/61359f9f937d335d9b53b144
```

### Ottenere gli utenti con opzioni di ricerca

- Metodo: GET
- Endpoint: `/user`
- Descrizione: Ottiene gli utenti con opzioni di ricerca avanzate
- Parametri di richiesta:
  - `birthPlace` (stringa) - luogo di nascita dell'utente
  - `limit` (numero) - limite di risultati da restituire
  - `page` (numero) - numero di pagina dei risultati
- Corpo della richiesta: Nessuno
- Risposta di successo: Un array JSON contenente gli utenti che soddisfano i criteri di ricerca
- Esempio:

```http
GET /user?birthPlace=Palermo&limit=10&page=1
```

### Documentazione dell'API

- Metodo: GET
- Endpoint: `/api-docs`
- Descrizione: Fornisce la documentazione dell'API tramite Swagger-OpenAPI
- Parametri di richiesta: Nessuno
- Corpo della richiesta: Nessuno
- Risposta di successo: La documentazione dell'API in formato Swagger-OpenAPI
- Esempio:

```http
GET /api-docs
```

## Licenza

Il progetto non include una licenza specifica al momento.

## Informazioni sul documento

Questo documento è stato generato utilizzando ChatGPT3, un modello di intelligenza artificiale addestrato per elaborare il linguaggio naturale. ChatGPT3 fornisce risposte informative e utili basate sulla sua vasta conoscenza fino a settembre 2021.

Si prega di notare che le informazioni fornite potrebbero non essere aggiornate o riflettere gli sviluppi più recenti dopo tale data. È sempre consigliabile verificare le informazioni e consultare fonti aggiornate per una conoscenza più recente e accurata.