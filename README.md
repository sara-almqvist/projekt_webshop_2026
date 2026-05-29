# Projekt: Bygga en Webshop med React

Detta projekt är en del av kurserna Avancerad JavaScript och Frontend Ramverk/Bibliotek i utbildningen [Fullstack-utvecklare vid Företagsuniversitet (klass FSU25)](https://www.foretagsuniversitetet.se/yh-utbildningar/Fullstack-utvecklare-Stockholm).

## Beskrivning

Applikationen hämtar data från DummyJSON API och webshoppen är döpt till _Allt och lite till_. Webbshoppen är på svenska men kräver att man söker på engelska och även produktnamn och beskrivningar visas på engelska.

Applikationens innehåll:

- **Startsida** med sökfält och tre populära produkter som visas innan användaren söker eller om användaren suddar ut sin sökning
- **Kategori-sida** där användaren kan välja mellan de olika tillgängliga produktkategorierna
- **Produktlista** visas vid sökning eller klick på kategori. I produktlistan syns titel, bild, pris och om produkten är favoritmarkerad av användaren. Användaren kan hovra över bilden för att se produktbeskrivningen eller klicka på "Visa detaljer" för att komma till produktdetalj-sidan. Det går också att lägga produkten i kundvagnen (visuell bekräftelse genom ändrad text på knappen samt att antalet produkter i kundvagnen i övre högre hörnet uppdateras).
- **Produktdetaljsidan** visar beskrivning och du kan välja hur många av produkten du vill köpa utöver titel, bild och pris. Under vald produkt visas liknande produkter för att inspirera köparen/användaren.
- **Kundvagn** : här visas produkterna användaren lagt i kundvagnen och det går att ta bort enskild vara, allt i kundvagnen och justera kvantiten. Totalsumman och knapp för att komma till kassan.
- **Kassan/checkout**: Om användaren är ny på sidan fylls leveransuppgifter i, annars finns möjlighet att kontrollera och ändra genom att öppna dialog-fönster. Innehållet i kundvagnen presenteras och totalsumman. Kunden kan fortsätta handla (komma tillbaka till butiken) eller beställa (kommer till orderbekräftelse-sida).
- **About-sida** med en påhittad bakgrundshistoria om webshoppen
- **Kontakta Kundservice** med kontaktuppgifter och kontaktformulär
- **Favoritlista** där användaren kan spara (hjärtmarkera) sina favoritprodukter. Om inga favoriter valts visas några förslag.
- Information om användaren, kundvagn och favoriter sparas i LocalStorage för att finnas kvar om användaren t ex av misstag stänger ner sidan eller vill fortsätta handla vid ett senare tillfälle.

## Beskrivning av debounce-funktion och felhantering

Jag använder `useEffect` med `setTimer` som debounce-funktion i komponenten Search.jsx. Detta för att inte göra multipla API-anrop innan användaren hunnit skriva klart i sökfältet. För att undvika anrop vid tomt sökfält eller omladdning används en `useState` (isFetched).

Även i komponenten ProductDetails används `useEffect` med `setTimer` då API-anrop efter en enskild-produkt görs på denna sida.
RelatedProducts, InspirationProducts och Categories gör också API-anrop och har samma uppbyggnad av `useEffect` med `setTimer`.

Vid API-anrop används try-catch som felhantering.
Vid inputfält används validering i viss mån. Har också säkerställt att kvantiteten vid placering i kundvagn alltid blir 1 om användaren inte gör ett aktivt val att köpa flera av samma vara.

## Instruktioner

1. Klona repositoriet
   `git clone https://github.com/sara-almqvist/projekt_webshop_2026.git`

2. Navigera till projektmappen
   `cd project_webshop_2026`

3. Installera beroenden
   `npm install`

4. Starta utvecklingsservern
   `npm run dev`

5. Öppna i webbläsaren

Jag har använt Tailwind CSS för styling och Lucide-react för ikoner samt react-router-dom för navigering mellan olika vyer utöver den funktionalitet som ingår i React (med Vite).
