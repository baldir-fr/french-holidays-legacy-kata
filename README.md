# French holidays

French holidays are sometimes a mess.
In France there are a few regions that have different rules than the general ones.

Hopefully there is [a public HTTP API](https://api.gouv.fr/documentation/jours-feries) provided by the French government!

A lazy french developer decided to use this API to see where is the best place to live to have the most holidays in the next years.

You want to help this french developer to refactor this mess but there is an internet failure.
You won't be able to call the Live API.

## Preparation


- [Install deno](https://deno.land/#installation)
- [Prepare your environment for deno](https://deno.land/manual@v1.25.2/getting_started/setup_your_environment)

For the first time, you have to run the main program and the integration tests to make sure Deno dependencies are downloaded locally (see scripts below).

Then, you will be able to develop without internet.
Or you can also simulate internet restriction by not allowing net access in deno command.

```shell
# First deno run to download dependencies (allow internet for the program to run properly)
deno run --allow-net main.ts
# First run API integration tests
deno test --allow-net integration/*.ts
```

- The kata will be done "offline" of without `--allow-net` flag
- **You CANNOT CHANGE** anything that lives in the folder called `bad_old_legacy_sdk_you_dont_own_DONT_TOUCH`.

You have access to some informations about the behaviour of the API

- [open-api/openapi.yml](open-api/openapi.yml)
- [HTTP Response samples](open-api/exemples/Exemples.md)
- Sample of the programs console outputs: `expected_outputs/`
- Offline documentation for Deno and TypeScript
  - For typescript : [Typescript handbook (PDF)](offline_docs/typescript-handbook.pdf), [Typescript handbook (epub)](offline_docs/typescript-handbook.epub)
  - Deno
    - [Using permissions](offline_docs/deno_permissions.md)
    - [Fetching HTTP Data](offline_docs/deno_fetch_data.md)
    - [Deno Test assertions](offline_docs/deno_testing_assertions.md)
    - [Deno Test coverage](offline_docs/deno_testing_coverage.md)


## Part 1

Refactor the ugly code without touching what's inside `bad_old_legacy_sdk_you_dont_own_DONT_TOUCH`.
You tests and programs cannot access internet, so either:
- shut down your computer's internet connexion
- run deno commands using `--no-prompt` flag instead of `--allow-net`

```shell
# Run program without permission to use internet
deno run --no-prompt main.ts
# Run unit tests without permission to use internet
deno test --no-prompt
# Run unit tests in watch mode without permission to use internet
deno test --no-prompt --watch test/
```

If you are stuck,you may run API integration tests using internet.
- `integration/api_integration_it.ts`
- you can add new integration test only if they call directly the legacy API service.

```shell
# Run integration tests with internet access
deno test --allow-net integration/*.ts

```


If you run the `main.ts` program, you should expect similar outputs than [expected_outputs/golden-master.main.txt](expected_outputs/golden-master.main.txt).


## Part 2

In this 2 program, the french developer wants to know what are the best zones to live in this curent year.
It also says if the current day is a week dans or a weekend day.

```shell
# Run program without permission to use internet
deno run --no-prompt main2.ts
# Run unit tests without permission to use internet
deno test --no-prompt
# Run unit tests in watch mode without permission to use internet
deno test --no-prompt --watch test/
```

If you run the `main2.ts` program, you should expect similar outputs than [expected_outputs/golden-master.main2.txt](expected_outputs/golden-master.main2.txt).

You may have a problem if you test this program **a different day**. How can you solve that?

## Practices

- Using code coverage to help us add tests to existing code
- Using linter to guide refactorings
- Refactoring legacy code
- Testing code that relies on networks (test doubles)
- Golden Master
- Approval testing

## Additional goals

- Working offline
- Deno and Typescript
- Learning your IDE refactoring capacities
- Using OpenApi to deduce API return types
