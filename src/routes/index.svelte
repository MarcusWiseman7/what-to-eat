<script>
    const cards = [
        {
            title: 'Food Example One',
            pic: 'vatican.jpg',
            id: 'dsfkhsdjfhdsjjfjghfkfdsjkf',
        },
        {
            title: 'Food Example One',
            pic: 'vatican.jpg',
            id: 'dsfkhsdsdfsdfsdjfhdsgjkfdsjkf',
        },
        {
            title: 'Food Example One',
            pic: 'vatican.jpg',
            id: 'dsfkhsdjfhdssdfsdjkfdsjkf',
        },
    ];
</script>

<div class="lg:grid grid-cols-2 2xl:grid-cols-3 gap-4 cursor-pointer my-6">
    {#each cards as card}
        <a href={'/card/' + card.id} class="h-60 lg:h-80 w-full rounded-md bg-violet-200">
            <h3 class="text-2xl font-semibold h-16 flex items-center pl-3 text-violet-900">{card.title}</h3>
            <img src={'images/' + card.pic} alt={card.title} class="w-full h-48 lg:h-64 object-cover rounded-b-md" />
        </a>
    {/each}
</div>
