TODO
1. Change default role to user
1. Add PostsLayout from tutorial part 2 repo
1. Update PostgeSQL password
1. Component > Comment // FIXME: CSS styles from RW tutorial not working, fix or make new ones
1. Add true input validation to contact us, specifically email
1. test markdown autonumbering
1. Add SESSION_SECRET to .env for authentication
    * yarn rw g secret
1. Setup ui ```yarn rw setup ui tailwindcss```
1. Make website and apply for docsGPT
1. Get local install of docsGPT up
1. Add SEO, MetaTags can help?
1. Find line about how rw imports don't need {} becuase of some built in functions
1. figure out where and how i was interacting directly with db/graphql api requests from the comannad line
1. Add dark mode to storybook and update tutorial



commands to remember
1. yarn rw dev
    * starts dev server on localhost:8910
1. yarn rw prisma migrate dev
    * updates prisma shema
1. yarn install
    * install dependencies from requirements.txt
1. yarn rw test
    * starts jest testing suite in terminal
1. yarn rw generate ______ (alias: g)
    * generate scaffolds, layouts, components, cells, etc.
    * FIXME explain differences between different generator types
1. yarn rw g types
    * generates types from your codebase, useful when first setting up a graphQL service or changeing type names
1. yarn rw console (alias: c)
    * Launch an interactive Redwood shell (experimental)

URLs
1. rw dev @ http://localhost:8910
2. yarn rw graphql @ http://localhost:8911/graphql
3. yarn rw storybook @ http://localhost:7910



Setup Steps
1. Install rw, yarn, graphql, etc.
1. If on windows follow this guide to get git bash and nvm setup
      https://redwoodjs.com/docs/how-to/windows-development-setup
1. Check that node and yarn are installed and uptodate FIXME: add necessary node and yarn versions
    ```
    node --version
    yarn --version
    ```
1. personal step not for other contributors run

    ```bash
      yarn create redwood-app rummy
    ```
1. Other contributors
    ```
    git clone https://github.com/enpose/rummy
    cd redwood-tutorial
    yarn install
    yarn rw prisma migrate dev
    yarn rw g secret
    ```
1. Make sure ```git config --get core.autocrlf``` is true if using windows
   CONFIRM LATER: Make sure ```git config --get core.autocrlf``` is input if using windows




<!-- # README

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then change into that directory and start the development server:

```
cd my-redwood-project
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page, which links to many great resources.

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command!
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal:
> ```
> yarn redwood --help
> ```
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

## Prisma and the database

Redwood wouldn't be a full-stack framework without a database. It all starts with the schema. Open the [`schema.prisma`](api/db/schema.prisma) file in `api/db` and replace the `UserExample` model with the following `Post` model:

```
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev

# ...

? Enter a name for the new migration: › create posts
```

> `rw` is short for `redwood`

You'll be prompted for the name of your migration. `create posts` will do.

Now let's generate everything we need to perform all the CRUD (Create, Retrieve, Update, Delete) actions on our `Post` model:

```
yarn redwood g scaffold post
```

Navigate to http://localhost:8910/posts/new, fill in the title and body, and click "Save":

Did we just create a post in the database? Yup! With `yarn rw g scaffold <model>`, Redwood created all the pages, components, and services necessary to perform all CRUD actions on our posts table.

## Frontend first with Storybook

Don't know what your data models look like?
That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data.
Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Before you start, see if the CLI's `setup ui` command has your favorite styling library:

```
yarn rw setup ui --help
```

## Testing with Jest

It'd be hard to scale from side project to startup without a few tests.
Redwood fully integrates Jest with the front and the backends and makes it easy to keep your whole app covered by generating test files with all your components and services:

```
yarn rw test
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing.md#scenarios)  and [GraphQL mocking](https://redwoodjs.com/docs/testing.md#mocking-graphql-calls).

## Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth!
Lock down your front and backends with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third party auth providers:

```
yarn rw setup auth --help
```

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing) -->
