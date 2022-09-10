import {today, dateToShortISO8601, isWeekDayHumanReadable, frenchDayName} from "./src/shared-kernel.ts";
import {theBestZoneToLiveInForALazyPersonThisYear,} from "./src/jours-feries-service.ts";

// Tester ce code pour que le résultat soit similaire au contenu du fichier
// golden-master-2.txt
// comme si la date d'aujourd'hui était le Samedi 10 septembre 2022

const todayIso8601 = dateToShortISO8601(today());
console.log(`Today it is ${frenchDayName(todayIso8601)} (${todayIso8601}), it is a "${isWeekDayHumanReadable(todayIso8601)}" day.`)
console.log("And the best zones to live in as a lazy French person this year are : ", await theBestZoneToLiveInForALazyPersonThisYear());
