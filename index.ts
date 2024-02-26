import { auth, docs } from "@googleapis/docs";

const authClient = new auth.GoogleAuth({
  credentials: {
    client_email: Bun.env.GCP_CLIENT_EMAIL,
    private_key: Bun.env.GCP_PRIVATE_KEY,
  },
  scopes: ["https://www.googleapis.com/auth/documents.readonly"],
});

const docsClient = docs({ version: "v1", auth: authClient });

const main = async () => {
  console.log("Fetching document");
  const documentId = "18tQQTiqGclXYeM6cFfH-iJLb4Q3Ak7QcxNuFkeMSqGE";
  const response = await docsClient.documents.get({
    documentId,
  });
  console.log(response.data);
};

main();
