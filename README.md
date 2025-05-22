# Brunsmann Experts App

Versie 1.0 – Inspectie- en rapportageplatform voor bootkeuringen

---

## 🚀 Introductie

De Brunsmann Experts App is een modulair platform waarmee experts snel en overzichtelijk aankoopkeuringen van boten kunnen uitvoeren. Klanten en rapporten worden centraal beheerd. Het rapport kan ingevuld en geëxporteerd worden als Word-bestand, met uitbreidingen zoals parafen, foto's en slimme invulhulp in ontwikkeling.

---

## 🔧 Functionaliteiten in deze versie

- Inloggen als expert (met testgebruikers)
- Klantenoverzicht met filter en zoekfunctie
- Klant aanmaken via `klant_toevoegen.html` (met klant-ID)
- Rapporten starten en bewerken per klant
- Rapport invullen (`rapport_aankoopkeuring_invullen.html`)
- Rapport exporteren naar Word (`rapport_export_word.html`)
- Klantgegevens opslaan in `localStorage`
- Rapporten beheren (toevoegen, openen, verwijderen)
- Logincheck op alle beveiligde pagina’s

---

## 📁 Bestandenstructuur (belangrijkste)

| Bestand | Functie |
|--------|---------|
| `index.html` | Landingspagina |
| `login.html` | Inloggen gebruiker |
| `dashboard.html` | Centrale knop naar klanten |
| `klanten_overzicht.html` | Overzicht van alle klanten |
| `klant_toevoegen.html` | Handmatig klant-ID invoeren/genereren |
| `klant_detail.html` | Klantgegevens + rapporten beheren |
| `rapport_aankoopkeuring_invullen.html` | Invulpagina rapport |
| `rapport_export_word.html` | Export naar Word |
| `instellingen.html` | Gebruikersbeheer, uploads etc. |
| `sidebar.html` | Navigatiebalk |
| `style.css` | Standaardstijl voor alle pagina’s |

---

## 👤 Testgebruiker

Om in te loggen kun je tijdelijk deze gebruiker gebruiken:

- **Gebruikersnaam:** Brunsmann4a
- **(Wachtwoord veld werkt nog niet functioneel)**

---

## 📘 Gebruik in stappen

1. Log in via `login.html`
2. Voeg een nieuwe klant toe via `klant_toevoegen.html`
3. Vul klantgegevens in op `klant_detail.html`
4. Klik op "Aankoopkeuring nieuw" om rapport aan te maken
5. Vul rapport in via `rapport_aankoopkeuring_invullen.html`
6. Exporteer naar Word via `rapport_export_word.html`

---

## ⏳ Bekende beperkingen / To do

- Rapport export naar PDF
- Parafencentrale met goedkeuring per hoofdstuk
- Fotopagina en terugverwijzingen vanuit rapport
- AI-suggesties en logica per boottype
- Centrale opslag in database (nu alleen localStorage)
- Klantportaal met alleen-lezen toegang
- Versiebeheer voor rapporten

---

## ✍ Ontwikkeling

Gebouwd met HTML, CSS en JavaScript (zonder backend). Alles draait lokaal in de browser met `localStorage`. Geen externe afhankelijkheden of frameworks.

> Ontwikkeld door Paul Brunsmann samen met ChatGPT, iteratief en modulair.