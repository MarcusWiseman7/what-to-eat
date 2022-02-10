<script>
    import { cards } from '../stores';
    let search = '';

    $: filteredCards = search
        ? $cards.filter((card) =>
              card.title.toLowerCase().replace(' ', '').includes(search.toLowerCase().replace(' ', ''))
          )
        : $cards;
</script>

<svelte:head>
    <title>WhatToEat</title>
</svelte:head>

{#if $cards?.length}
    <div class="flex items-center">
        <label for="search_input" class="mr-3 pt-5 w-5">
            <img src="icons/search.svg" alt="Search" />
        </label>
        <input
            type="text"
            id="search_input"
            placeholder="Search"
            bind:value={search}
            class="text-violet-900 font-semibold text-xl bg-violet-200 rounded-md mt-6"
        />
    </div>
{/if}

{#if filteredCards?.length}
    <div class="lg:grid grid-cols-2 2xl:grid-cols-3 gap-4 cursor-pointer my-6">
        {#each filteredCards as card}
            <a
                href={'/card/' + card.id}
                class="h-60 lg:h-80 w-full rounded-md bg-violet-200 hover:ring-4 hover:ring-violet-500"
            >
                <h3 class="text-2xl font-semibold h-16 flex items-center pl-3 text-violet-900">{card.title}</h3>
                <img
                    src={'images/' + card.pic}
                    alt={card.title}
                    class="w-full h-48 lg:h-64 object-cover rounded-b-md"
                />
            </a>
        {/each}
    </div>
{:else if search.length > 0}
    <h3 class="text-2xl font-semibold my-4">No recipe cards found for search: "{search}"</h3>
    <h3 class="text-2xl font-semibold">Please try another search...</h3>
{:else}
    <h3 class="text-2xl font-semibold mt-4 mb-6">No recipe cards found, please add some to your book</h3>
    <a
        href="/card"
        class="rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700"
        >+ New Card</a
    >
{/if}
