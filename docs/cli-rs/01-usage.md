# Usage

Welcome to Filen CLI v0.2.3!

Invoke the Filen CLI with no command specified to enter interactive mode (REPL).
There, you can specify absolute paths (starting with "/") or relative paths (supports "." and "..").

## Options

- `-v, --verbose...`  
  Increase verbosity (-v, -vv, -vvv)  
- `-q, --quiet`  
  Hide progress bars and other non-essential output (overrides -v)  
- `--config-dir <CONFIG_DIR>`  
  Config directory (overwrite system default)  
- `-e, --email <EMAIL>`  
  Filen account email (requires --password)  
- `-p, --password <PASSWORD>`  
  Filen account password (requires --email)  
- `-t, --two-factor-code <TWO_FACTOR_CODE>`  
  Filen account two-factor code (optional, requires --email and --password)  
- `--auth-config-path <AUTH_CONFIG_PATH>`  
  Path to auth config file (exported via `filen export-auth-config`)  
- `--skip-update`  
  Skip checking for updates  
- `--force-update-check`  
  Force checking for updates  
- `--json`  
  Format command output as machine-readable JSON (where applicable)  
- `-V, --version`  
  Print version

## Updates

The updater checks for new releases from https://github.com/FilenCloudDienste/filen-cli-releases
when the CLI is run (unless skipped in the 5mins since the last check, or through the `--skip-update` flag).
The executable will be replaced in place, with the filename updated if it contains the version number.

## Commands

> `help [COMMAND_OR_TOPIC]`  
> Print help about a command or topic (default: general help)  
> 🠊 `[COMMAND_OR_TOPIC]` Command or topic to show help about

> `exit`  
> Exit the REPL