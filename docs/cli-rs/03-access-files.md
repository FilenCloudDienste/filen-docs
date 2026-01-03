# Accessing Files

> `cd <DIRECTORY>`  
> Change the working directory (in REPL)  
> 🠊 `<DIRECTORY>` Directory to navigate into (supports "..")

> `ls [DIRECTORY]`  
> List files in a directory  
> 🠊 `[DIRECTORY]` Directory to list files in (default: the current working directory)

> `cat <FILE>`  
> Print the contents of a file  
> 🠊 `<FILE>` File to print

> `head [OPTIONS] <FILE>`  
> Print the first lines of a file  
> 🠊 `<FILE>` File to print  
> 🠊 `-n, --lines <LINES>` Number of lines to print [default: 10]

> `tail [OPTIONS] <FILE>`  
> Print the last lines of a file  
> 🠊 `<FILE>` File to print  
> 🠊 `-n, --lines <LINES>` Number of lines to print [default: 10]

> `stat <FILE_OR_DIRECTORY>`  
> Show information about a file, a directory or the Filen drive  
> 🠊 `<FILE_OR_DIRECTORY>` File or directory to show information about ("/" for the Filen drive)

> `mkdir [OPTIONS] <DIRECTORY>`  
> Create a new directory  
> 🠊 `<DIRECTORY>` Directory to create  
> 🠊 `-r, --recursive` Recursively create parent directories

> `rm [OPTIONS] <FILE_OR_DIRECTORY>`  
> Remove a file or directory  
> 🠊 `<FILE_OR_DIRECTORY>` File or directory to remove  
> 🠊 `-p, --permanent` Permanently delete the file or directory (default: move to trash)

> `mv <SOURCE> <DESTINATION>`  
> Move a file or directory  
> 🠊 `<SOURCE>` Source file or directory  
> 🠊 `<DESTINATION>` Destination parent directory

> `cp <SOURCE> <DESTINATION>`  
> Copy a file or directory  
> 🠊 `<SOURCE>` Source file or directory  
> 🠊 `<DESTINATION>` Destination parent directory

> `favorite <FILE_OR_DIRECTORY>`  
> Favorite a file or directory  
> 🠊 `<FILE_OR_DIRECTORY>` File or directory to favorite

> `unfavorite <FILE_OR_DIRECTORY>`  
> Unfavorite a file or directory  
> 🠊 `<FILE_OR_DIRECTORY>` File or directory to unfavorite

> `list-trash`  
> List trashed items with option to restore or permanently delete them

> `empty-trash`  
> Permanently delete all trashed items