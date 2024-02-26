# POC Google Docs Read

## Overview

This is a simple proof of concept to read a Google Docs document using the Google Docs API.

## Prerequisites

### Dependencies

- [Bun](https://bun.sh)

### Google Cloud Project Setup

1. Create a new project in the [Google Cloud Console](https://console.cloud.google.com/).

2. Enable the Google Docs API for the project. [(Click here to see how to enable an API in GCP)](https://support.google.com/googleapi/answer/6158841?hl=en)

3. Create a [new service account](https://cloud.google.com/iam/docs/service-accounts-create) for the project. (No need to configure any roles since google apps (docs, sheets, etc) are not supported by the IAM system.)

4. Download the service account credentials as a JSON file.

5. Share the Google Docs document with the service account email address. (The service account email address can be found in the JSON file.)

## Usage

1. Set the GCP environment variables.

```sh
cp .env.example .env
```

2. Fill in the `.env` file with the service account credentials.

3. Run the script.

```sh
bun i
bun run index.ts
```

## References

- [Google Docs Node.js API](https://googleapis.dev/nodejs/googleapis/latest/docs/index.html)
- [Google Cloud Console](https://console.cloud.google.com/)
