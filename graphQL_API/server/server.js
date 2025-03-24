import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
const users = [
    { id: 1, name: "Raj Patel", salary: 20000 },
    { id: 2, name: "Heni Patel", salary: 25000 },
    { id: 3, name: "Avadh Patel", salary: 30000 },
]

const typeDefs = `
    type Query{
        getUser : [User]
        getUserById(id:ID!) : User
    }
    type Mutation{
        createUser(name:String!, salary: Int!) : User
    }
    type User{
        id:ID
        name:String
        salary:Int
    }
`;

const resolvers = {
    Query: {
        getUser: () => users,
        getUserById: (args) => {
            const id = parseInt(args.id)
            return users.find(user => user.id === id);
        }
    },
    Mutation: {
        createUser: (args) => {
            const { name, salary } = args;
            const newUser = {
                id: users.length + 1,
                name,
                salary,
            }
            users.push(newUser)
            return newUser;
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('server start on : ' + url);