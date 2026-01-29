# Managed Rclone

The Filen CLI includes a managed installation of [filen-rclone](https://github.com/FilenCloudDienste/filen-rclone).
It is automatically downloaded and configured (authenticated) when you run the commands like `rclone`, `mount`, etc.

> `rclone [CMD]...`  
> Execute an Rclone command using filen-rclone  
> 🠊 `[CMD]...` The command to execute. Your Filen drive is available as the "filen" remote

> `mount [OPTIONS] [MOUNT_POINT] [RCLONE_ARGS]...`  
> Mount Filen as a network drive  
> 🠊 `[MOUNT_POINT]` Where to mount the network drive (default: system default)  
> 🠊 `[RCLONE_ARGS]...` Additional arguments to Rclone  
> 🠊 `--cache-size <CACHE_SIZE>` The maximum cache size (e.g. "500Mi", "10Gi") (default: calculated from available disk space)  
> 🠊 `--transfers <TRANSFERS>` The number of parallel transfers

> `serve [OPTIONS] <SERVER> [RCLONE_ARGS]...`  
> Runs a WebDAV, FTP, SFTP or HTTP server exposing your Filen drive  
> 🠊 `<SERVER>` The type of server to run: webdav, ftp, sftp, http  
> 🠊 `[RCLONE_ARGS]...` Additional arguments to Rclone  
> 🠊 `--addr <ADDRESS>` IP and port for the server ("<ip>:<port>" or ":<port>") [default: :80]  
> 🠊 `--root <ROOT>` Directory that the server exposes (default: the entire Filen drive)  
> 🠊 `--user <USER>` Username for authentication to the server (default: no authentication). On S3 servers, this is the Access Key ID  
> 🠊 `--password <PASSWORD>` Password for authentication to the server (default: no authentication). On S3 servers, this is the Secret Access Key  
> 🠊 `--read-only` The server is read-only  
> 🠊 `--cache-size <CACHE_SIZE>` The maximum cache size (e.g. "500Mi", "10Gi") (default: calculated from available disk space)  
> 🠊 `--transfers <TRANSFERS>` The number of parallel transfers

> `export-api-key`  
> Exports your user API key (for use with non-managed Rclone)