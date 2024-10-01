# Backend Server with Express

Is a simple server that does CRUD operations to a user with name and email.

## Usage/Examples

Go to postman (recommended) and use the method get, post, put and delete

The path is

http://localhost:3000/users - to read and create

http://localhost:3000/users/id - to update and delete

To see the users just go to the link using method GET:

```bash
http://localhost:3000/users
```

To see one user just go to the link using method GET:

```bash
http://localhost:3000/users?name=test
http://localhost:3000/users?email=test
```
To create, use the method POST and on the body, select json and type:

```bash
{
    "name": "yourname",
    "email": "your@email.com",
}
```

To update use the sabe body as before, but change the method to PUT and change what you want.

```bash
{
    "name": "yourNEWname",
    "email": "yourNEW@email.com",
}
```

To delete, after create or read a user, you will see a ID, copy and paste after the users on the link:

```bash
 example: http://localhost:3000/users/66faffa2f721ac669d645c62
```

## Deployment

### Using docker

Pull the Latest Images

```bash
docker pull danielfonn/problem5-backend
```

Run Docker Compose file that is on the root of this project

```bash
docker-compose up -d
```

### Without docker

make sure you have installed
-node.js (https://nodejs.org/)

-mongoDB (https://www.mongodb.com/try/download/community)

-prisma CLI (https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)

If you have any probmens installing or setting up one of this, their websites has all the step by step on how to do it.

So first you need to clone this repo:

```bash
git clone https://github.com/DanielFonsecaa/DanielFonseca-99TechChallange.git
```

go the the directory

```bash
cd DanielFonseca-99TechChallange
```

Install dependencies

```bash
npm install
```

create a .env file in the root of the project and use the following template

```bash
mkdir .env
```

In this case, the url is set via an environment variable which is defined in .env (the example uses a MongoDB AtlasURL):

edit the .env

DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"

Here is guideline:

mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE

Here's a short explanation of each component:

USERNAME: The name of your database user
PASSWORD: The password for your database user
HOST: The host where a mongod (or mongos) instance is running
PORT: The port where your database server is running (typically 27017 for MongoDB)
DATABASE: The name of the database

After adding to the .env, go to terminal again and initialize prisma and generate prisma client

```bash
npx prisma init

npx prisma generate
```

To get started with Prisma Client, you need to install the @prisma/client package:

```bash
npm install @prisma/client
```

and then to create new indexes and regenerate prisma Client

```bash
npx prisma db push
```

To map your data model to the database schema, you need to use the prisma migrate CLI commands:

```bash
npx prisma migrate dev --name init
```

after all this you can simply use the command

```bash
npm run dev
```

this command is inside a script inside package.json
