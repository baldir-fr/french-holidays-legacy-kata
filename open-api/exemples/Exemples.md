# Data samples

https://calendrier.api.gouv.fr/

## Zones

```json
[
  "alsace-moselle",
  "guadeloupe",
  "guyane",
  "la-reunion",
  "martinique",
  "mayotte",
  "metropole",
  "nouvelle-caledonie",
  "polynesie-francaise",
  "saint-barthelemy",
  "saint-martin",
  "saint-pierre-et-miquelon",
  "wallis-et-futuna"
]
```

## Fetch holidays for a zone between 2000 and 2025

```shell
curl -X 'GET' \
'https://calendrier.api.gouv.fr/jours-feries/metropole.json' \
-H 'accept: application/json'
```

- [jours-feries-metropole.json](jours-feries-metropole.json)

## Fetch holidays for a zone in a year

```shell
curl -X 'GET' \
  'https://calendrier.api.gouv.fr/jours-feries/metropole/2025.json' \
  -H 'accept: application/json'
```

- [jours-feries-metropole-2025.json](jours-feries-metropole-2025.json)
