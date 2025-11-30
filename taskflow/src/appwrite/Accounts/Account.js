import { Client, Account, ID } from "appwrite";
import config from "../../config/config";

export class AccountService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setProject(config.appwrite_project_id)
            .setEndpoint(config.appwrite_endpoint)

        this.account = new Account(this.client)
    }

    async createAccount({UserID, Email, Password, Name}) {
        try {
            const userAccount = await this.account.create({
                UserId: ID.unique(),
                Email: Email,
                Password: Password,
                Name: Name,
            })
        } catch (error) {
            throw new Error("Error in createAccount - Account.js: ", error);
        }
    }

    async login({Email, Password}) {
        try {
            return await this.account.createEmailPasswordSession({
                Email: Email,
                Password: Password
            })
        } catch (error) {
            throw new Error("Error in login - Account.js: ", error);
        }
    }
}

const object_AccountService = new AccountService()
export default object_AccountService