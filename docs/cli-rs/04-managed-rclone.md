# Managed Rclone

The Filen CLI includes a managed installation of [filen-rclone](https://github.com/FilenCloudDienste/filen-rclone).
It is automatically downloaded and configured (authenticated) when you run the commands like `rclone`, `mount`, etc.

> `rclone [CMD]...`  
> Execute an Rclone command using filen-rclone  
> 🠊 `[CMD]...` The command to execute. Your Filen drive is available as the "filen" remote

> `mount [MOUNT_POINT]`  
> Mount Filen as a network drive  
> 🠊 `[MOUNT_POINT]` Where to mount the network drive (default: system default)

> `webdav [OPTIONS]`  
> Runs a WebDAV server exposing your Filen drive  
> 🠊 `--url <URL>` URL for the server (default: 127.0.0.1:8080)  
> 🠊 `--root <ROOT>` Directory that the server exposes (default: the entire Filen drive)  
> 🠊 `--user <USER>` Username for authentication to the server (default: no authentication)  
> 🠊 `--password <PASSWORD>` Password for authentication to the server (default: no authentication)  
> 🠊 `--read-only` The server is read-only

> `ftp [OPTIONS]`  
> Runs an FTP server exposing your Filen drive  
> 🠊 `--url <URL>` URL for the server (default: 127.0.0.1:8080)  
> 🠊 `--root <ROOT>` Directory that the server exposes (default: the entire Filen drive)  
> 🠊 `--user <USER>` Username for authentication to the server (default: no authentication)  
> 🠊 `--password <PASSWORD>` Password for authentication to the server (default: no authentication)  
> 🠊 `--read-only` The server is read-only

> `sftp [OPTIONS] --user <USER> --password <PASSWORD>`  
> Runs an SFTP server exposing your Filen drive  
> 🠊 `--url <URL>` URL for the server (default: 127.0.0.1:8080)  
> 🠊 `--root <ROOT>` Directory that the server exposes (default: the entire Filen drive)  
> 🠊 `--user <USER>` Username for authentication to the server  
> 🠊 `--password <PASSWORD>` Password for authentication to the server  
> 🠊 `--read-only` The server is read-only

> `http-server [OPTIONS]`  
> Runs an HTTP server exposing your Filen drive  
> 🠊 `--url <URL>` URL for the server (default: 127.0.0.1:8080)  
> 🠊 `--root <ROOT>` Directory that the server exposes (default: the entire Filen drive)  
> 🠊 `--user <USER>` Username for authentication to the server (default: no authentication)  
> 🠊 `--password <PASSWORD>` Password for authentication to the server (default: no authentication)  
> 🠊 `--read-only` The server is read-only

> `s3 [OPTIONS]`  
> Runs an S3 server exposing your Filen drive  
> 🠊 --url <URL>  
> 🠊 URL for the server (default: 127.0.0.1:8080)  
> 🠊 --root <ROOT>  
> 🠊 Directory that the server exposes (default: the entire Filen drive)  
> 🠊 --access-key-id <ACCESS_KEY_ID>  
> 🠊 Access key ID for authentication to the server [default: user]  
> 🠊 --secret-access-key <SECRET_ACCESS_KEY>  
> 🠊 Secret access key for authentication to the server [default: password]  
> 🠊 --read-only  
> 🠊 The server is read-only  
> 🠊 Print help

> `export-api-key`  
> Exports your user API key (for use with non-managed Rclone)