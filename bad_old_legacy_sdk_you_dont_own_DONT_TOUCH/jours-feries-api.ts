// LEGACY : You cannot change this code!!!
class LegacyJoursFeriesService {
  // Available zones are :
  //
  // alsace-moselle, guadeloupe, guyane, la-reunion, martinique, mayotte, metropole, nouvelle-caledonie,
  // polynesie-francaise, saint-barthelemy, saint-martin, saint-pierre-et-miquelon, wallis-et-futuna

  // https://calendrier.api.gouv.fr/jours-feries/alsace-moselle.json
  async getHolidaysForAlsaceMoselleBetween2000And2025(): Promise<any> {
    const resp = await fetch(
      "https://calendrier.api.gouv.fr/jours-feries/alsace-moselle.json",
    );
    return resp.json();
  }

  async getHolidaysForAlsaceMoselleIn(year: string): Promise<any> {
    const resp = await fetch(
      "https://calendrier.api.gouv.fr/jours-feries/alsace-moselle/" + year +
        ".json",
    );
    return resp.json();
  }

  async getHolidaysForMetropolitanFranceBetween2000And2025(): Promise<any> {
    const resp = await fetch(
      "https://calendrier.api.gouv.fr/jours-feries/metropole.json",
    );
    return resp.json();
  }

  async getHolidaysForMetropolitanFranceIn(year: string): Promise<any> {
    const resp = await fetch(
      "https://calendrier.api.gouv.fr/jours-feries/metropole/" + year +
        ".json",
    );
    return resp.json();
  }

  async getAllZonesAndNumberOfHolidaysOrderedDesc(): Promise<any> {
    return (await this.detailsOfHolidaysPerZone())
      .map((it) => ({ zone: it.zone, nbHolidays: it.nbHolidays }))
      .slice().sort((a, b) => b.nbHolidays - a.nbHolidays);
  }

  public async detailsOfHolidaysPerZone() {
    const zones = this.getZones();
    const holidaysPerZone = [];
    for (const zone of zones) {
      const o = await this.getNumberOfHolidaysPerZone(zone);

      holidaysPerZone.push({
        zone,
        nbHolidays: Object.keys(o).length,
        holidaysDatesIso8601: Object.keys(o)
      });
    }
    return holidaysPerZone;
  }

  public async getNumberOfHolidaysPerZone(zone: string) {
    return (await fetch(
      "https://calendrier.api.gouv.fr/jours-feries/" + zone + ".json",
    )).json();
  }

  private getZones() {
    return [
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
      "wallis-et-futuna",
    ];
  }
}

export default new LegacyJoursFeriesService();
