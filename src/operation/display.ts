import { QueryService_v1Client as QueryService } from "iroha-helpers/lib/proto/endpoint_pb_service";
import queries from "iroha-helpers/lib/queries";

const IROHA_ADDRESS = "http://localhost:8081";

const adminPriv =
  "0f0ce16d2afbb8eca23c7d8c2724f0c257a800ee2bbd54688cec6b898e3f7e33";

const adminId = "admin@japan";

const queryService = new QueryService(IROHA_ADDRESS);

export const display = {
  checkBalance: (accountId: string) => {
    return new Promise((resolve, reject) => {
      queries
        .getAccountAssets(
          {
            privateKey: adminPriv,
            creatorAccountId: adminId,
            queryService,
            timeoutLimit: 5000,
          },
          {
            accountId: accountId,
            pageSize: 100,
            firstAssetId: undefined,
          }
        )
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        });
    });
  },
  getAccount: (accountName: string) => {
    return new Promise((resolve, reject) => {
      const accountId = accountName + '@japan'
      queries
        .getAccount(
          {
            privateKey: adminPriv,
            creatorAccountId: adminId,
            queryService,
            timeoutLimit: 5000,
          },
          {
            accountId: accountId,
          }
        )
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
