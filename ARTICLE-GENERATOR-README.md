# SEO Article Generator for Recruiting Website

Diese Anwendung generiert automatisch SEO-optimierte Artikel zu Recruiting-Themen, um die organische Reichweite Ihrer Website zu verbessern und das Suchmaschinenranking zu optimieren.

## Funktionen

- **Automatische Artikelgenerierung**: Erstellt regelmäßig neue, SEO-optimierte Artikel zu Recruiting-Themen
- **Zeitplanung**: Generiert Artikel in SEO-sinnvollen Abständen (standardmäßig 2x pro Woche)
- **API-Endpunkte**: Vollständige Kontrolle über die Artikelgenerierung über RESTful API
- **Datenbankintegration**: Speichert Artikel in einer SQLite-Datenbank
- **Integration mit bestehendem Blog**: Nahtlose Integration mit der bestehenden Blog-Seite

## Einrichtung

1. Erstellen Sie einen OpenAI API-Schlüssel unter [https://platform.openai.com/](https://platform.openai.com/)
2. Tragen Sie den API-Schlüssel in die `.env`-Datei ein:
   ```
   OPENAI_API_KEY="Ihr-OpenAI-API-Schlüssel"
   ```
3. Optional: Ändern Sie den API-Schlüssel für die Artikelgenerierung in der `.env`-Datei:
   ```
   GENERATE_API_KEY="Ihr-geheimer-API-Schlüssel"
   ```

## Verwendung

### Manuelle Artikelgenerierung

Um einen neuen Artikel manuell zu generieren, senden Sie eine POST-Anfrage an den Endpunkt `/api/articles/generate`:

```bash
curl -X POST https://ihre-domain.de/api/articles/generate \
  -H "Authorization: Bearer defaultapikey"
```

### Zeitplaner starten/stoppen

Der Zeitplaner startet standardmäßig automatisch im Produktionsmodus. Sie können ihn über die folgenden API-Endpunkte steuern:

```bash
# Zeitplaner-Status prüfen
curl https://ihre-domain.de/api/scheduler \
  -H "Authorization: Bearer defaultapikey"

# Zeitplaner starten (optional mit benutzerdefiniertem Cron-Ausdruck)
curl -X POST https://ihre-domain.de/api/scheduler \
  -H "Authorization: Bearer defaultapikey" \
  -H "Content-Type: application/json" \
  -d '{"cronExpression": "0 10 * * 1,4"}'

# Zeitplaner stoppen
curl -X DELETE https://ihre-domain.de/api/scheduler \
  -H "Authorization: Bearer defaultapikey"
```

### Cron-Ausdrücke

Der Standard-Cron-Ausdruck `0 10 * * 1,4` generiert Artikel zweimal pro Woche (montags und donnerstags um 10:00 Uhr). Hier sind einige alternative Beispiele:

- `0 12 * * 1` - Jeden Montag um 12:00 Uhr
- `0 10 1,15 * *` - Am 1. und 15. jedes Monats um 10:00 Uhr
- `0 9 * * 1-5` - Jeden Wochentag (Montag bis Freitag) um 9:00 Uhr

## Artikel abrufen

Die generierten Artikel sind automatisch über die reguläre Blog-Seite zugänglich. Zusätzlich können Sie über die API-Endpunkte auf sie zugreifen:

```bash
# Alle Artikel abrufen
curl https://ihre-domain.de/api/articles

# Alle Artikel einer bestimmten Kategorie abrufen
curl https://ihre-domain.de/api/articles?category=Trends

# Artikel mit einem bestimmten Tag abrufen
curl https://ihre-domain.de/api/articles?tag=Personalgewinnung

# Einzelnen Artikel über seinen Slug abrufen
curl https://ihre-domain.de/api/articles/artikel-slug-hier
```

## SEO-Optimierung

Die generierten Artikel sind bereits für SEO optimiert:

1. **Relevante Themen**: Die Artikel behandeln Themen, die für Recruiting und Personalgewinnung relevant sind
2. **Optimierte Frequenz**: Die Standardeinstellung von 2 Artikeln pro Woche bietet regelmäßigen frischen Content ohne Überflutung
3. **Schlüsselwort-Optimierung**: Die Artikel enthalten natürlich eingebettete relevante Keywords
4. **Strukturierter Content**: Klare Überschriften, Unterüberschriften und gut lesbare Absätze
5. **Meta-Daten**: Aussagekräftige Titel und Beschreibungen für bessere CTR

## Problembehandlung

- **API-Fehler**: Stellen Sie sicher, dass Sie die richtigen API-Schlüssel verwenden
- **Keine Artikel generiert**: Überprüfen Sie den OpenAI API-Schlüssel und das Guthaben
- **Scheduler-Probleme**: Überprüfen Sie den Status mit dem GET-Endpunkt und starten Sie ihn bei Bedarf neu

Bei Fragen oder Problemen wenden Sie sich bitte an Ihren Administrator. 