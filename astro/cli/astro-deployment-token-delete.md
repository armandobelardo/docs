---
sidebar_label: "astro deployment token delete"
title: "astro deployment token delete"
id: astro-deployment-token-delete
description: Delete a Deployment API token.
hide_table_of_contents: true
sidebar_custom_props: { icon: 'img/term-icon.png' }
---

:::cliastroonly
:::

Delete a [Deployment API Token](deployment-api-tokens.md).

See [Authenticate an automation tool](automation-authentication.md) to use your API token in an automated process.

## Usage

```sh
astro deployment token delete --deployment-id=<deployment-id>
```

## Options

| Option                         | Description                                                                            | Possible Values                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `-f`,`--force`           |    Delete or remove the API token without showing a warning                                                | N/A |
| `-t`,`--name`           |    The name of the token to be deleted. If the name contains a space, specify the entire name within quotes ""                                                | String |

## Examples

```bash
# Delete a Deployment API token
astro deployment token delete --deployment-id=clukapi6r000008l58530cg8i
```

## Related Commands

- [`astro deployment token list`](cli/astro-deployment-token-list.md)
- [`astro deployment token rotate`](cli/astro-deployment-token-rotate.md)
- [`astro deployment token update`](cli/astro-deployment-token-update.md)