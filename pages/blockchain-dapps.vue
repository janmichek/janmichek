<template>
  <NuxtLayout name="slug">
    <article class="blockchain-dapps">
      <title-slug
        title="Blockchain learning dapps"
        description="
      Last two months (Aug/Sep 2021) I spend 100+ hours of learning and coding blockchain dapps as an introduction to
      this world. It learned me a lot about Solidity, web3, Ganache and Drizzle, but still a lot to learn.
      <br>
      <br>
      Most of these tutorials had frontend built on React, so I remade them into Vue.
      Frontend-wise, these dapps are very simple. My point was to demonstrate what I went through in blockchain dev.
    "/>
      <ul>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-drizzle-simple">
              Basic usage of Drizzle components
            </app-link>
          </h4>
          <div>Simple usage of Drizzle components in Vue frontend.</div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-drizzle-custom">
              Custom Drizzle components
            </app-link>
          </h4>
          <div>
            This demo implements custom Drizzle components using Drizzle store and events.
            It also fires flash message when data changed.
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-ipfs">
              IPFS Dapp
            </app-link>
          </h4>
          <div>
            This app will upload image to IPFS network and obtain CID of that file.
            It is also using basic Drizzle implementation.
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-nft">
              NFT Dapp
            </app-link>
          </h4>
          <div>
            In this app you can create token in form of color hex code and mint it into blockchain.
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-swap">
              Swap Dapp
            </app-link>
          </h4>
          <div>
            DAPP which let you exchange ETH for made up DAPP currency and vice versa.
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-staking">
              Staking Dapp
            </app-link>
          </h4>
          <div>
            This DeFi app let you earn interest for depositing cryptocurrency.
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-bank">
              Bank Dapp
            </app-link>
          </h4>
          <div>
            This app will let you to deposit amount of ETH and withdraw the whole deposit with an interest for saving
            the funds
          </div>
        </li>
        <li class="blockchain-dapps__item">
          <h4>
            <app-link
              target="_blank"
              to="https://github.com/janmichek/blockchain-election">
              Election Dapp
            </app-link>
          </h4>
          <div>
            App which simulates voting for two candidates. Each account can only vote once.
            There is an event after voting implemented which affects UI.
          </div>
        </li>
      </ul>
    </article>
  </NuxtLayout>
</template>

<style scoped>
.blockchain-dapps {
  &__item {
    margin-bottom: var(--gutter-lg);
  }
}
</style>
