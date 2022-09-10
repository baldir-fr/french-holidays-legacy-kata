import {numberOfKeysForObject} from "./src/shared-kernel.ts";
import joursFeriesApi from "./bad_old_legacy_sdk_you_dont_own_DONT_TOUCH/jours-feries-api.ts";
import {
    bestZonesToBeLivingInAsALazyPersonForYear,
    numberOfHolidaysForMetropolitanFranceIn,
    numberOfHolidaysForSaintPierreEtMiquelonBetween2000And2025,
    numberOfHolidaysForMetropolitanFranceBetween2000And2025,
    zoneWithTheMostHolidaysBetween2000And2025,
} from "./src/jours-feries-service.ts";
`
// You can check deno's permission to access the french API this way`
let apiAccessPermission = await Deno.permissions.query({
    name: "net",
    host: "calendrier.api.gouv.fr",
});
if (apiAccessPermission.state === "granted") {
} else {
    // Access is not permitted
}

const holidaysForAlsaceMoselleBetween2000And2025 = async (
    annee: string | null = null,
) => {
    if (annee === null) {
        return await joursFeriesApi.getHolidaysForAlsaceMoselleBetween2000And2025();
    }
    return await joursFeriesApi.getHolidaysForAlsaceMoselleIn(annee);
};

async function numberOfHolidaysForAlsaceMoselleBetween2000And2025() {
    return numberOfKeysForObject(await holidaysForAlsaceMoselleBetween2000And2025());
}

console.log(
    "Number of holidays for Alsace-Moselle zone between 2000 and 2025 : ",
    await numberOfHolidaysForAlsaceMoselleBetween2000And2025(),
);

const numberForHolidaysForAlsaceMoselleIn2022 =
    await (async function (year: string) {
        return numberOfKeysForObject(await holidaysForAlsaceMoselleBetween2000And2025(year));
    })("2022");

console.log(
    "Number of holidays for Alsace-Moselle zone in 2022 : ",
    numberForHolidaysForAlsaceMoselleIn2022,
);
console.log(
    "Number of holidays for Metropolitan France between 2000 and 2025 : ",
    await numberOfHolidaysForMetropolitanFranceBetween2000And2025(),
);
console.log(
    "Number of holidays for Metropolitan France in 2022 : ",
    await numberOfHolidaysForMetropolitanFranceIn("2022"),
);
console.log(
    "Number of holidays for Saint-Pierre et Miquelon between 2000 and 2025 : ",
    await numberOfHolidaysForSaintPierreEtMiquelonBetween2000And2025(),
);

console.log(
    "The best zones to live to live in as a lazy French person in 2013",
    await bestZonesToBeLivingInAsALazyPersonForYear(2013),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2014",
    await bestZonesToBeLivingInAsALazyPersonForYear(2014),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2015",
    await bestZonesToBeLivingInAsALazyPersonForYear(2015),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2016",
    await bestZonesToBeLivingInAsALazyPersonForYear(2016),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2017",
    await bestZonesToBeLivingInAsALazyPersonForYear(2017),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2018",
    await bestZonesToBeLivingInAsALazyPersonForYear(2018),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2019",
    await bestZonesToBeLivingInAsALazyPersonForYear(2019),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2020",
    await bestZonesToBeLivingInAsALazyPersonForYear(2020),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2021",
    await bestZonesToBeLivingInAsALazyPersonForYear(2021),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2022",
    await bestZonesToBeLivingInAsALazyPersonForYear(2022),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2023",
    await bestZonesToBeLivingInAsALazyPersonForYear(2023),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2024",
    await bestZonesToBeLivingInAsALazyPersonForYear(2024),
);
console.log(
    "The best zones to live to live in as a lazy French person in 2025",
    await bestZonesToBeLivingInAsALazyPersonForYear(2025),
);

console.log(
    "🎉 The ultimate zone to live in as a lazy French person is: ",
    await zoneWithTheMostHolidaysBetween2000And2025(),
);