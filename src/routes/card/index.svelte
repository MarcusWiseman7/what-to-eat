<script>
    const recipe = {
        title: '',
        ingredients: ['', ''],
        steps: ['', '', ''],
    };
</script>

<svelte:head>
    <title>WhatToEat | New Card</title>
</svelte:head>

<h1 class="text-3xl font-semibold mb-3">Add new card</h1>

<div class="border rounded-lg shadow-xl p-6">
    <div class="grid grid-cols-3 gap-4">
        <label for="title" class="text-right text-2xl font-semibold">Recipe name</label>
        <input type="text" bind:value={recipe.title} class="bg-violet-400 rounded-lg" />
    </div>

    <h3 class="grid grid-cols-3 mt-6 mb-1"><span class="text-2xl text-right mr-3 font-semibold">Ingredients</span></h3>
    <div class="grid grid-cols-3 gap-4">
        {#each recipe.ingredients as ingredient, i}
            <label for="ingredient-{i}" class="text-right">Ingredient {i + 1}</label>
            <input
                type="text"
                id="ingridient-{i}"
                bind:value={recipe.ingredients[i]}
                class="bg-violet-400 rounded-lg"
            />
            <span />
        {/each}
    </div>

    <h3 class="grid grid-cols-3 mt-6 mb-1"><span class="text-2xl text-right mr-3 font-semibold">Instructions</span></h3>
    <div class="grid grid-cols-3 gap-4">
        {#each recipe.steps as step, i}
            <label for="step-{i}" class="text-right">Step {i + 1}</label>
            <textarea
                id="step-{i}"
                cols="30"
                rows="3"
                bind:value={recipe.steps[i]}
                class="bg-violet-400 rounded-lg col-span-2"
            />
        {/each}
    </div>
</div>
