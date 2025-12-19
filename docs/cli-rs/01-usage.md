# Usage

Welcome to the Filen CLI!

Invoke the Filen CLI with no command specified to enter interactive mode.
There, you can specify absolute paths (starting with "/") or relative paths (supports "." and "..").

> `help [COMMAND_OR_TOPIC]`  
> Print help about a command or topic (default: general help)  
> 🠊 `[COMMAND_OR_TOPIC]` Command or topic to show help about

> `exit`  
> Exit the REPL

## Updates

The updater checks for new releases from https://github.com/FilenCloudDienste/filen-cli-releases
when the CLI is run (unless skipped in the 5mins since the last check, or through the `--skip-update` flag).
The executable will be replaced in place, with the filename updated if it contains the version number.

## Mounting

> `mount [MOUNT_POINT]`  
> Mount Filen as a network drive  
> 🠊 `[MOUNT_POINT]` Where to mount the network drive (default: system default)