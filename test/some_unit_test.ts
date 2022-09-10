import {assertEquals} from "https://deno.land/std@0.152.0/testing/asserts.ts";
import {isWeekDay} from "../src/shared-kernel.ts";

Deno.test("Deno testing assertions", () => {
  // Premier test échouant exprès pour vérifier le fonctionnement de la lib d'assertions.
  assertEquals(true, false, "assertEquals(true,true) should not fail");
});

Deno.test("Jour non ouvré", () => {
  assertEquals(isWeekDay("2022-09-10"), false, "jour non ouvré");
});