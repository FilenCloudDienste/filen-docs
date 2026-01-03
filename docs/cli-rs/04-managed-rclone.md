# Managed Rclone

The Filen CLI includes a managed installation of [filen-rclone](https://github.com/FilenCloudDienste/filen-rclone).
It is automatically downloaded and configured (authenticated) when you run the `rclone` or `mount` commands.

> `mount [MOUNT_POINT]`  
> Mount Filen as a network drive  
> 🠊 `[MOUNT_POINT]` Where to mount the network drive (default: system default)

> `rclone [CMD]...`  
> Execute an Rclone command using filen-rclone  
> 🠊 `[CMD]...` The command to execute. Your Filen drive is available as the "filen" remote