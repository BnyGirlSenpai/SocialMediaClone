import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65c4bbd14e51eeaaf865',
  databaseId: '65c5cc48a180512c182b',
  storageId: '65c5cc0c3da9aaae9a38',
  userCollectionId: '65c5cd01219a0221bffb',
  postCollectionId: '65c5ccb5174668659e5e',
  savesCollectionId: '65c5cd17271dcd36ddfb',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
