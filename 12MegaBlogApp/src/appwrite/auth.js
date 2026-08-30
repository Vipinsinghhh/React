import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
}

async function createAccount({email, password, name}) {
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {
            // call another method
            return this.login({email, password});
        } else {
            return userAccount;
        }
    } catch (error) {
        throw error;
    }
}

async function login({email, password}) {
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        throw error;
    }
}

async function getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
}

async function logout() {
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite serive :: logout :: error", error);
    }
}

const authService = new AuthService()

export default authService