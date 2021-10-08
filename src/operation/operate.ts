import { CommandService_v1Client as CommandService } from "iroha-helpers/lib/proto/endpoint_pb_service";

import commands from "iroha-helpers/lib/commands";
import { createKey } from "./createKey";
const IROHA_ADDRESS = "http://localhost:8081";

export const adminPriv =
  "0f0ce16d2afbb8eca23c7d8c2724f0c257a800ee2bbd54688cec6b898e3f7e33"

export const adminId = "admin@japan"
const commandService = new CommandService(IROHA_ADDRESS)

export const controller = {
  createAccount: (accountName: string) => {
    return new Promise((resolve, reject) => {
      const keys = createKey();
      commands
        .createAccount(
          {
            privateKeys: [adminPriv],
            creatorAccountId: adminId,
            quorum: 1,
            commandService,
            timeoutLimit: 5000,
          },
          {
            accountName: accountName,
            domainId: "japan",
            publicKey: keys[0],
          }
        )
        .then(() => {
          resolve(keys[1]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  addAssetQuantity: (assetName: string) => {
    return new Promise((resolve, reject) => {
      commands
        .addAssetQuantity(
          {
            privateKeys: [adminPriv],
            creatorAccountId: adminId,
            quorum: 1,
            commandService,
            timeoutLimit: 5000,
          },
          {
            assetId: 'localcoin#japan',
            amount: '10',
          }
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        })
    })
  },
  transferAsset: (
    dAccount: string,
    sAccount: string ,
    assetName: string,
    amount: string,
    passward: string 
  ) => {
    return new Promise((resolve, reject) => {
      commands
        .transferAsset(
          {
            privateKeys: [passward],
            creatorAccountId: sAccount,
            quorum: 1,
            commandService,
            timeoutLimit: 5000,
          },
          {
            srcAccountId: sAccount,
            destAccountId: dAccount,
            assetId: assetName,
            description: "transfered",
            amount: amount,
          }
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}


