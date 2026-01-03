# Authentication

There are multiple ways to authenticate:
- set the CLI arguments `--email` and `--password` (optionally `--two-factor-code`)
  (when the two-factor code is omitted and required, you will be prompted for it)
- specify an auth config via the `--auth-config-path` flag
  (exported via `filen export-auth-config`),
  or put an auth config in one of the default locations:
  (unless overwritten by the `--config-dir` flag)
  - `./filen-cli-auth-config.txt` (current working directory)
  - Linux/macOS: `$HOME/.filen-cli/filen-cli-auth-config.txt`
  - Windows: `%appdata%\filen-cli\filen-cli-auth-config.txt`
- set environment variables (`FILEN_CLI_EMAIL` and `FILEN_CLI_PASSWORD`, optionally `FILEN_CLI_2FA_CODE`)
  (when the two-factor code is omitted and required, you will be prompted for it)
- if none of these is set, you will be prompted for credentials,
  with the option to save them securely in the system keychain

> `export-auth-config`  
> Export an auth config (to be used with --auth-config-path option)

> `logout`  
> Delete saved credentials and exit