---
title: Developing a Client Contract
---

# {{$frontmatter.title}}

<TocHeader />
[[TOC]]

A [client](../../protocols/request-response/client.md) is a contract that makes requests to [providers](../../protocols/request-response/provider.md) using the [`Airnode.sol`](../../protocols/request-response/general-structure.md#airnodesol) contract that implements the protocol. A client is [endorsed](../../protocols/request-response/endorsement.md) by a [requester](../../protocols/request-response/requester.md), which means that it can specify its request to be fulfilled by the respective requester's [designated wallet](../../protocols/request-response/designated-wallet.md).

The Airnode protocol is designed to be flexible, and is meant to serve a variety of use cases. See the [Airnode client examples](https://github.com/api3dao/airnode-client-examples) for some potential design patterns. The first step a requester needs to take is to develop and deploy such a client contract.

## Endorsing your contract

Assuming you have already [created a requester](creating-requester.md), you should endorse the client contract so that it can make requests. You can use [`@api3/airnode-admin`](https://github.com/api3dao/airnode/tree/master/packages/admin#endorse-client) to endorse client contracts. Endorsing a client contract means it can make requests that will be fulfilled by the designated wallet associated with your requester record. You can use [`@api3/airnode-admin`](https://github.com/api3dao/airnode/tree/master/packages/admin#derive-designated-wallet) to derive your designated wallet and fund it so that the provider you have made requests to can fulfill your requests.