import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "tcppgzs2",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk3t9hmZXP2ncrrihaIFgBH4z1Q92JHuDt2ATz8itFnpIODSbvvmpntKgVJMGQHB4Cdwf0hPIXLPaKZA96OekLaWHJPQAmfgUkzckHMg3uEpJfusTTlaY0zeqZ48qCdqCB3r53gtcNOIpjokt4P7qaq2ztZyWCkptB6JKHZjtLHk12xDE16X",
  useCdn: false,
});
