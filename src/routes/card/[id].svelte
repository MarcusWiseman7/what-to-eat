<script>
    // import { page } from '$app/stores';
    // import { cards } from '../../stores';

    // const { id } = $page.params;
    // const { title, ingredients, pic, steps } = $cards.find((c) => c.id === id) || {};
    export let card;
    const { id, title, ingredients, pic, steps } = card;
</script>

<svelte:head>
    <title>{'WhatToEat' + (title ? ' | ' + title : '')}</title>
</svelte:head>

{#if id && title}
    <div class="lg:grid grid-cols-2 gap-4 my-6">
        <div>
            <h1 class="text-3xl font-semibold mb-3">{title}</h1>

            <!-- Mobile ingredients -->
            {#if ingredients?.length}
                <div class="ml-4 hidden lg:block">
                    <h3 class="text-xl font-semibold mb-1">Ingredients</h3>

                    {#each ingredients as ingredient}
                        <p class="flex items-center text-lg font-semibold">
                            <span class="text-2xl mr-2 font-normal">&diam;</span>{ingredient}
                        </p>
                    {/each}
                </div>
            {/if}
        </div>

        <img src={'../images/' + pic} alt={title} class="w-full rounded-lg shadow-lg" />
    </div>

    <!-- Desktop ingredients -->
    {#if ingredients?.length}
        <div class="lg:hidden mb-6">
            <h3 class="text-xl font-semibold mb-1">Ingredients</h3>

            {#each ingredients as ingredient}
                <p class="flex items-center text-lg font-semibold">
                    <span class="text-2xl mr-2 font-normal">&diam;</span>{ingredient}
                </p>
            {/each}
        </div>
    {/if}

    {#if steps?.length}
        <div class="mb-6 lg:ml-4">
            <h3 class="text-xl font-semibold mb-1">Instructions</h3>
            {#each steps as step, i}
                <p class="text-lg font-semibold"><span class="mr-2">{i + 1}:</span>{step}</p>
            {/each}
        </div>
    {/if}
{/if}
