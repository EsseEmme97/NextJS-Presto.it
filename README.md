
# Il Progetto
Presto.it è una web app progettata per visualizzare e creare annunci di vendita e acquisto per beni di seconda mano.

# Installazione
Il progetto utilizza principalmente Next.js 14.0.3. Per garantire una corretta visualizzazione, si consiglia di creare un file .env contenente le seguenti variabili:


NEXTAUTH_SECRET = Consulta la documentazione [qui](https://next-auth.js.org/configuration/options)
GITHUB_ID = [Dato fornito per l'implementazione del login con GitHub]
GITHUB_SECRET = [Dato fornito per l'implementazione del login con GitHub]
MONGODB_URI = [Dato fornito dalla piattaforma MongoDB Atlas per l'accesso al database]


# Struttura del Progetto
Le cartelle del progetto sono organizzate come segue:

app: Contiene l'intera struttura del progetto Next.js.
assets: Contiene tutti i file SVG responsabili delle icone utilizzate nel progetto.
components: Contiene tutti i singoli componenti utilizzati all'interno della cartella app.
utils: Contiene alcune funzioni riutilizzate all'interno del progetto.

# Logica di Sviluppo
Il progetto mira a utilizzare le ultime tecnologie implementate in Next.js 14. La maggior parte dei componenti viene renderizzata lato server per ottimizzare le prestazioni durante il caricamento e migliorare l'indicizzazione SEO.

Solo pochi componenti vengono renderizzati lato client, separando chiaramente l'aggiornamento dell'interfaccia grafica dalla gestione dei dati.

Tutte le immagini e i font vengono pre-caricati lato server, migliorando le prestazioni di caricamento.

Un obiettivo principale durante lo sviluppo è stato ridurre al minimo le richieste al database. Ciò è stato realizzato utilizzando le ultime funzionalità di caching implementate da Next.js, particolarmente evidente nella navigazione della sezione Annunci dell'applicazione.

La sfida interessante è stata implementare la funzionalità degli annunci lato server. Invece di utilizzare hook come useState e useEffect per gestire il filtraggio lato client, i filtri vengono applicati al server mediante l'aggiornamento dell'URL, che invia una nuova richiesta al server con i parametri di filtraggio utente, consentendo l'aggiornamento dell'interfaccia utente lato server.

Le richieste che creano o modificano dati utilizzano le nuove funzionalità sperimentali di React, come i server components, gestendo ogni richiesta tramite una server action.

# Prossime Funzionalità

- Creazione di post personalizzati.
- Visualizzazione dei post creati per ogni utente.