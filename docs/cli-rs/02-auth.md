# Authentication

There are multiple ways to authenticate:
- set the CLI arguments `--email` and `--password` (optionally `--two-factor-code`)
- specify an auth config via the `--auth-config-path` flag
  (exported) via `filen export-auth-config`
- set environment variables (`FILEN_CLI_EMAIL` and `FILEN_CLI_PASSWORD`)
- if none of these is set, you will be prompted for credentials
  with the option to save them securely in the system keychain

> `export-auth-config`  
> Export an auth config (to be used with --auth-config-path option)

> `logout`  
> Delete saved credentials and exit