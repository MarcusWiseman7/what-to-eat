<script>
    const recipe = {
        title: '',
        ingredients: [''],
        steps: [''],
    };
</script>

<svelte:head>
    <title>WhatToEat | New Card</title>
</svelte:head>

<h1 class="text-3xl font-semibold mb-3">Add new card</h1>

<div class=" border rounded-lg shadow-xl p-6">
    <label for="title" class="mr-4">Recipe name</label>
    <input
        type="text"
        bind:value={recipe.title}
        class="bg-transparent ring-2 ring-white focus:ring-2 focus:ring-violet-700 border-violet-700 rounded-lg"
    />

    <h3 class="text-xl">Ingredient</h3>
    <div class="">
        {#each recipe.ingredients as ingredient, i}
            <label for="ingredient-{i}" class="">Ingredient {i + 1}</label>
            <input type="text" id="ingridient-{i}" bind:value={recipe.ingredients[i]} class="" />
        {/each}
    </div>

    {#each recipe.steps as step, i}
        <label for="step-{i}" class="">Step {i + 1}</label>
        <input type="text" id="step-{i}" bind:value={recipe.steps[i]} class="" />
    {/each}
</div>
