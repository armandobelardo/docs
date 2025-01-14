---
sidebar_label: "astro deployment token create"
title: "astro deployment token create"
id: astro-deployment-token-create
description: Create a Deployment API token.
hide_table_of_contents: true
sidebar_custom_props: { icon: 'img/term-icon.png' }
---

:::cliastroonly
:::

Create a [Deployment API Token](deployment-api-tokens.md).

See [Authenticate an automation tool](automation-authentication.md) to use your API token in an automated process.

## Usage

```sh
astro deployment token create --deployment-id=<deployment-id>
```

## Options

| Option                         | Description                                                                            | Possible Values                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `-c`,`--clean-output`           |    Print only the token as output. For use of the command in scripts.                                                | `True` or `False` |
| `-d`,`--description`           |    Description of the token. If the description contains a space, specify the entire description within quotes ""                                                | String |
| `-e`,`--expiration`           |    Expiration of the token in days. If the flag isn't used the token won't have an expiration.                                                | An integer between 1 and 365 |
| `-n`,`--name`           |    The token's name. If the name contains a space, specify the entire name within quotes `""`.                                                | String |
| `-r`,`--role`           |    The role for the token. Possible values are `DEPLOYMENT_ADMIN` or a custom role name.                                                | Any valid Deployment role |

## Examples

```bash
# create a deployment token
astro deployment token create --deployment-id=clukapi6r000008l58530cg8i
```

## Related Commands

- [`astro deployment token list`](cli/astro-deployment-token-list.md)
- [`astro deployment token rotate`](cli/astro-deployment-token-rotate.md)
- [`astro deployment token update`](cli/astro-deployment-token-update.md)