# warthog-demo
 Warthog Demo

This demo was created for the [this article](https://levelup.gitconnected.com/conventional-graphql-api-generation-made-easy-with-warthog-node-js-b844a0c30b78) on [Level Up Coding](
https://levelup.gitconnected.com/) by [GitConnected.com](https://gitconnected.com/).

<details>
<summary>Expand for Postgres installation options</summary>
<p>

### Homebrew (OSX)

If you're on OSX and have [homebrew](http://brew.sh/) and [homebrew-cask](https://github.com/caskroom/homebrew-cask) installed, you can simply run:

```bash
brew cask install postgres
```

Or you can install Homebrew's official version:

```bash
brew install postgresql
`brew --prefix`/opt/postgres/bin/createuser -s postgres
```

### Postgres.app (OSX)

Otherwise, you can install [Postgres.app](https://postgresapp.com/) manually.

### Docker

See the [warthog-starter](https://github.com/goldcaddy77/warthog-starter/pull/6/files) project for how to use Docker to run Postgres.

</p>
</details>

## Usage

Warthog comes with a CLI that makes it easy to get started.

### Create new project with the CLI

```bash
# Add warthog so that we can use the CLI
yarn add warthog

# Bootstrap a new application using Warthog CLI
yarn warthog new

# Install dependencies from generated package.json
yarn

# Generate a resource (model, resolver and service)
yarn warthog generate user name! nickname age:int! verified:bool!

# Generate typescript classes and GraphQL schema
yarn warthog codegen

# Create your DB
yarn warthog db:create

# Generate the DB migration for your newly generated model
yarn warthog db:migrate:generate --name=create-user-table

# Run the DB migration
yarn warthog db:migrate

# Start the server
yarn start:dev
```