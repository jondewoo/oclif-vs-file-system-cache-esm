oclif-vs-file-system-cache-esm
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-vs-file-system-cache-esm.svg)](https://npmjs.org/package/oclif-vs-file-system-cache-esm)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-vs-file-system-cache-esm.svg)](https://npmjs.org/package/oclif-vs-file-system-cache-esm)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-vs-file-system-cache-esm
$ oclif-vs-file-system-cache-esm COMMAND
running command...
$ oclif-vs-file-system-cache-esm (--version)
oclif-vs-file-system-cache-esm/0.0.0 darwin-arm64 node-v20.9.0
$ oclif-vs-file-system-cache-esm --help [COMMAND]
USAGE
  $ oclif-vs-file-system-cache-esm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-vs-file-system-cache-esm hello PERSON`](#oclif-vs-file-system-cache-esm-hello-person)
* [`oclif-vs-file-system-cache-esm hello world`](#oclif-vs-file-system-cache-esm-hello-world)
* [`oclif-vs-file-system-cache-esm help [COMMAND]`](#oclif-vs-file-system-cache-esm-help-command)
* [`oclif-vs-file-system-cache-esm plugins`](#oclif-vs-file-system-cache-esm-plugins)
* [`oclif-vs-file-system-cache-esm plugins add PLUGIN`](#oclif-vs-file-system-cache-esm-plugins-add-plugin)
* [`oclif-vs-file-system-cache-esm plugins:inspect PLUGIN...`](#oclif-vs-file-system-cache-esm-pluginsinspect-plugin)
* [`oclif-vs-file-system-cache-esm plugins install PLUGIN`](#oclif-vs-file-system-cache-esm-plugins-install-plugin)
* [`oclif-vs-file-system-cache-esm plugins link PATH`](#oclif-vs-file-system-cache-esm-plugins-link-path)
* [`oclif-vs-file-system-cache-esm plugins remove [PLUGIN]`](#oclif-vs-file-system-cache-esm-plugins-remove-plugin)
* [`oclif-vs-file-system-cache-esm plugins reset`](#oclif-vs-file-system-cache-esm-plugins-reset)
* [`oclif-vs-file-system-cache-esm plugins uninstall [PLUGIN]`](#oclif-vs-file-system-cache-esm-plugins-uninstall-plugin)
* [`oclif-vs-file-system-cache-esm plugins unlink [PLUGIN]`](#oclif-vs-file-system-cache-esm-plugins-unlink-plugin)
* [`oclif-vs-file-system-cache-esm plugins update`](#oclif-vs-file-system-cache-esm-plugins-update)

## `oclif-vs-file-system-cache-esm hello PERSON`

Say hello

```
USAGE
  $ oclif-vs-file-system-cache-esm hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oclif-vs-file-system-cache-esm hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/jondewoo/oclif-vs-file-system-cache-esm/blob/v0.0.0/src/commands/hello/index.ts)_

## `oclif-vs-file-system-cache-esm hello world`

Say hello world

```
USAGE
  $ oclif-vs-file-system-cache-esm hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif-vs-file-system-cache-esm hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/jondewoo/oclif-vs-file-system-cache-esm/blob/v0.0.0/src/commands/hello/world.ts)_

## `oclif-vs-file-system-cache-esm help [COMMAND]`

Display help for oclif-vs-file-system-cache-esm.

```
USAGE
  $ oclif-vs-file-system-cache-esm help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-vs-file-system-cache-esm.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.6/src/commands/help.ts)_

## `oclif-vs-file-system-cache-esm plugins`

List installed plugins.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/index.ts)_

## `oclif-vs-file-system-cache-esm plugins add PLUGIN`

Installs a plugin into oclif-vs-file-system-cache-esm.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into oclif-vs-file-system-cache-esm.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_VS_FILE_SYSTEM_CACHE_ESM_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_VS_FILE_SYSTEM_CACHE_ESM_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ oclif-vs-file-system-cache-esm plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ oclif-vs-file-system-cache-esm plugins add myplugin

  Install a plugin from a github url.

    $ oclif-vs-file-system-cache-esm plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ oclif-vs-file-system-cache-esm plugins add someuser/someplugin
```

## `oclif-vs-file-system-cache-esm plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/inspect.ts)_

## `oclif-vs-file-system-cache-esm plugins install PLUGIN`

Installs a plugin into oclif-vs-file-system-cache-esm.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into oclif-vs-file-system-cache-esm.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the OCLIF_VS_FILE_SYSTEM_CACHE_ESM_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OCLIF_VS_FILE_SYSTEM_CACHE_ESM_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ oclif-vs-file-system-cache-esm plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ oclif-vs-file-system-cache-esm plugins install myplugin

  Install a plugin from a github url.

    $ oclif-vs-file-system-cache-esm plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ oclif-vs-file-system-cache-esm plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/install.ts)_

## `oclif-vs-file-system-cache-esm plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/link.ts)_

## `oclif-vs-file-system-cache-esm plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-vs-file-system-cache-esm plugins unlink
  $ oclif-vs-file-system-cache-esm plugins remove

EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins remove myplugin
```

## `oclif-vs-file-system-cache-esm plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/reset.ts)_

## `oclif-vs-file-system-cache-esm plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-vs-file-system-cache-esm plugins unlink
  $ oclif-vs-file-system-cache-esm plugins remove

EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/uninstall.ts)_

## `oclif-vs-file-system-cache-esm plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-vs-file-system-cache-esm plugins unlink
  $ oclif-vs-file-system-cache-esm plugins remove

EXAMPLES
  $ oclif-vs-file-system-cache-esm plugins unlink myplugin
```

## `oclif-vs-file-system-cache-esm plugins update`

Update installed plugins.

```
USAGE
  $ oclif-vs-file-system-cache-esm plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
