import joursFeriesApi from "../bad_old_legacy_sdk_you_dont_own_DONT_TOUCH/jours-feries-api.ts";
import {frenchDayName, isWeekDay, isWeekDayHumanReadable,} from "./shared-kernel.ts";

export const zoneWithTheMostHolidaysBetween2000And2025 = async (): Promise<string> => {
    const [first] = await joursFeriesApi
        .getAllZonesAndNumberOfHolidaysOrderedDesc();
    return first.zone;
};

export const theBestZoneToLiveInForALazyPersonThisYear = async (): Promise<string> => {
    return (await bestZonesToBeLivingInAsALazyPersonForYear(new Date().getFullYear()));
};

export async function bestZonesToBeLivingInAsALazyPersonForYear(annee: number) {
    const groupedByNumberOfHolidaysDuringTheWeek =
        (await joursFeriesApi.detailsOfHolidaysPerZone() as Array<any>).map(
            (it) => ({
                zone: it.zone as string,
                nbHolidays:
                (it.holidaysDatesIso8601 as Array<any>).filter((it2) =>
                    it2.startsWith("" + annee)
                ).length,
                nbHolidaysOnAWeekDay:
                (it.holidaysDatesIso8601 as Array<any>).filter((it2) =>
                    it2.startsWith("" + annee)
                ).filter((it3) => isWeekDay(it3)).length,
                holidaysHumanReadable: (it.holidaysDatesIso8601 as Array<any>).filter((it2) =>
                    it2.startsWith("" + annee)
                ).map((it4) =>
                    `${frenchDayName(it4)} ${isWeekDayHumanReadable(it4)} (${it4})`
                ),
            }),
        ).slice().sort((a, b) => b.nbHolidaysOnAWeekDay - a.nbHolidaysOnAWeekDay)
            .reduce((previousValue, currentValue) => {
                previousValue[currentValue.nbHolidaysOnAWeekDay] = [
                    ...previousValue[currentValue.nbHolidaysOnAWeekDay] || [],
                    currentValue,
                ];
                return previousValue;
            }, {});

    // Ex of grouping per holiday on day of week
    // {
    //    "3": [
    //        {
    //            zone: "alsace-moselle",
    //            nbHolidays: 4,
    //            nbHolidaysOnAWeekDay: 3,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Vendredi ouvré (2021-04-02)", "Lundi ouvré (2021-04-05)", "Samedi non ouvré (2021-05-01)"]
    //        },
    //        {
    //            zone: "guadeloupe",
    //            nbHolidays: 3,
    //            nbHolidaysOnAWeekDay: 3,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Lundi ouvré (2021-04-05)", "Samedi non ouvré (2021-05-01)"]
    //        }],
    //    "2": [
    //        {
    //            zone: "guyane",
    //            nbHolidays: 3,
    //            nbHolidaysOnAWeekDay: 2,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Lundi ouvré (2021-04-05)", "Samedi non ouvré (2021-05-01)"]
    //        },
    //        {
    //            zone: "la-reunion",
    //            nbHolidays: 3,
    //            nbHolidaysOnAWeekDay: 2,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Lundi ouvré (2021-04-05)", "Samedi non ouvré (2021-05-01)"]
    //        },
    //        {
    //            zone: "mayotte",
    //            nbHolidays: 2,
    //            nbHolidaysOnAWeekDay: 2,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Lundi ouvré (2021-04-05)"]
    //        },
    //        {
    //            zone: "saint-martin",
    //            nbHolidays: 2,
    //            nbHolidaysOnAWeekDay: 2,
    //            holidaysHumanReadable: ["Vendredi ouvré (2021-01-01)", "Lundi ouvré (2021-04-05)"]
    //        }
    //         ]
    //     }

    // grouping by number of holidays during the week allows then to pick the max value
    return groupedByNumberOfHolidaysDuringTheWeek[
    "" +
    Math.max(
        ...(Object.keys(groupedByNumberOfHolidaysDuringTheWeek).map((it) =>
            parseInt(it)
        )),
    )
        ]
        .map((it) => it.zone);
}

export async function numberOfHolidaysForMetropolitanFranceIn(annee: string) {
    return Object.keys(await joursFeriesApi.getHolidaysForMetropolitanFranceIn(annee))
        .length;
}

export async function numberOfHolidaysForMetropolitanFranceBetween2000And2025() {
    const holidaysInMetropolitanFrance = await joursFeriesApi.getHolidaysForMetropolitanFranceBetween2000And2025();
    return Object.keys(holidaysInMetropolitanFrance).length;
}

export async function numberOfHolidaysForSaintPierreEtMiquelonBetween2000And2025() {
    return Object.keys(
        await joursFeriesApi.getNumberOfHolidaysPerZone(
            "saint-pierre-et-miquelon",
        ),
    ).length;
}
