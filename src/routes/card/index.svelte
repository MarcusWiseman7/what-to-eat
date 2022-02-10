<script>
    import { btnClass } from '../../stores';

    $: recipe = {
        title: '',
        ingredients: [''],
        steps: [''],
    };

    let uploadedFile = null;
    let actImage = null;

    const checkInputs = (event) => {
        const id = event.target.id;
        const w = id.slice(0, id.indexOf('-'));
        const i = parseInt(id.slice(-1));

        if (recipe[w][i] && recipe[w].length < i + 2) {
            recipe[w].push('');
            recipe[w] = recipe[w]; // redundant to make reactive...
        } else if (!recipe[w][i] && !recipe[w][i + 1] && recipe[w].length >= i + 1) {
            recipe[w].splice(i + 1, 1);
            recipe[w] = recipe[w];
        }
    };

    const processFile = (event) => {
        if (event.target.files.length === 1 && event.target.files[0].type?.startsWith('image/')) {
            uploadedFile = event.target.files[0];
            event.target.value = ''; // allow upload of same file after cancel
            actImage = window.URL.createObjectURL(uploadedFile);
        }
    };

    const deleteUpload = () => {
        uploadedFile = null;
        actImage = null;
        window.URL.revokeObjectURL(uploadedFile);
    };

    const submitCard = () => {};
</script>

<svelte:head>
    <title>WhatToEat | New Card</title>
</svelte:head>

<h1 class="text-3xl font-semibold mb-3">Add new card</h1>

<div class="border rounded-lg shadow-xl p-6">
    <div class="grid grid-cols-3 gap-4">
        <label for="title" class="text-right text-2xl font-semibold">Recipe name</label>
        <input type="text" bind:value={recipe.title} class="bg-violet-400 rounded-lg" />

        {#if !actImage}
            <label for="file-upload-input" class={$btnClass}>
                <img src="icons/camera.svg" alt="Camera" />
                <span class="ml-2">Take Picture</span>
            </label>
        {:else}
            <div class="flex gap-4 w-full">
                <label for="file-upload-input">
                    <img src={actImage} alt="Uploaded pic" class="rounded-lg max-h-10 cursor-pointer" />
                </label>
                <button class={$btnClass} on:click={deleteUpload}>Delete</button>
            </div>
        {/if}
        <input class="hidden" type="file" id="file-upload-input" accept="image/*" on:change={processFile} />
    </div>

    <h3 class="grid grid-cols-3 mt-6 mb-1"><span class="text-2xl text-right mr-3 font-semibold">Ingredients</span></h3>
    <div class="grid grid-cols-3 gap-4">
        {#each recipe.ingredients as ingredient, i}
            <label for="ingredients-{i}" class="text-right">Ingredient {i + 1}</label>
            <input
                type="text"
                id="ingredients-{i}"
                bind:value={recipe.ingredients[i]}
                on:input={checkInputs}
                class="bg-violet-400 rounded-lg"
            />
            <span />
        {/each}
    </div>

    <h3 class="grid grid-cols-3 mt-6 mb-1"><span class="text-2xl text-right mr-3 font-semibold">Instructions</span></h3>
    <div class="grid grid-cols-3 gap-4">
        {#each recipe.steps as step, i}
            <label for="steps-{i}" class="text-right">Step {i + 1}</label>
            <textarea
                id="steps-{i}"
                cols="30"
                rows="3"
                bind:value={recipe.steps[i]}
                on:input={checkInputs}
                class="bg-violet-400 rounded-lg col-span-2"
            />
        {/each}
    </div>

    <div class="grid grid-cols-3 mt-8">
        <span />
        <button class={$btnClass} on:click={submitCard}>
            <img src="icons/add.svg" alt="Add" />
            <span>Add Card</span>
        </button>
    </div>
</div>
