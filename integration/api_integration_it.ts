import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import legacyApi from "../bad_old_legacy_sdk_you_dont_own_DONT_TOUCH/jours-feries-api.ts";

Deno.test("Legacy api integration test", async () => {
  const actual = await legacyApi.getHolidaysForMetropolitanFranceIn("2022");

  assertEquals(actual, {
    "2022-01-01": "1er janvier",
    "2022-04-18": "Lundi de Pâques",
    "2022-05-01": "1er mai",
    "2022-05-08": "8 mai",
    "2022-05-26": "Ascension",
    "2022-06-06": "Lundi de Pentecôte",
    "2022-07-14": "14 juillet",
    "2022-08-15": "Assomption",
    "2022-11-01": "Toussaint",
    "2022-11-11": "11 novembre",
    "2022-12-25": "Jour de Noël",
  }, "Jours fériés en métropole pour l'année 2022");
});
