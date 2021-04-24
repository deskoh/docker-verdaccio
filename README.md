# Verdaccio NPM Registry (AirGap mode)

[Verdaccio](https://verdaccio.org/en/) with [verdaccio-offline-storage](https://www.npmjs.com/package/verdaccio-offline-storage) plugin.

## Getting Started

### Running the Registry

```sh
$ docker-compose up
# Access the registry: http://localhost:4873/
```

[verdaccio-offline-storage](https://www.npmjs.com/package/verdaccio-offline-storage) plugin will show cached packages in Web UI.

### Configure Registry

```sh
# See https://docs.npmjs.com/cli/v6/commands/npm-config

# Set per-user config (~/.npmrc)
npm set registry http://localhost:4873/

# Set per-project config
echo "registry=http://localhost:4873/" > .npmrc
```

### URL Prefix

After packages are cached, enable offline mode in `config/config.yaml`.

```yaml
# Uncomment to resolve locally EVERY package (when uplink not available)
offline: true
```

## Resources

[Verdaccio](https://verdaccio.org/en/)

[verdaccio-offline-storage plugin](https://www.npmjs.com/package/verdaccio-offline-storage)
