export function numberOfKeysForObject(o: Object) {
    return Object.keys(o).length;
}

// iso8601 : yyyy-mm-dd
export function frenchDayName(dateIso8601: string) {
    return frenchDayNameFromDayNumber(new Date(dateIso8601).getDay());
}

function frenchDayNameFromDayNumber(day: number) {
    switch (day) {
        case 0: {
            return "Dimanche";
        }
        case 1: {
            return "Lundi";
        }
        case 2: {
            return "Mardi";
        }
        case 3: {
            return "Mercredi";
        }
        case 4: {
            return "Jeudi";
        }
        case 5: {
            return "Vendredi";
        }
        case 6: {
            return "Samedi";
        }
        default:
            throw new RangeError("The day number must bes between 0 znd 6");
    }
}

export function dateToShortISO8601(date: Date) {
    return date.toISOString().split("T")[0];
}

// In france a week day (from monday to friday) is called "jour ouvré"
// a weekend day is called "jour non ouvré"
export function isWeekDay(dateIso8601: string) {
    const day = new Date(dateIso8601).getDay();
    return day > 0 && day < 6;
}


export function isWeekDayHumanReadable(dateIso8601: string) {
    return isWeekDay(dateIso8601) ? "ouvré" : "non ouvré";
}

export function today() {
    return new Date();
}