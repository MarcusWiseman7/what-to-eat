<script>
    import '../app.css';
    import EatPopup from '../components/popup.svelte';
    import EatButton from '../components/button.svelte';
    import AppMessage from '../components/message.svelte';

    const pageTitle = 'test';
    const year = new Date().getFullYear();

    let globalPopup = null;
    let appMessage = null;

    const closePopup = () => {
        globalPopup = null;
    };
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<div
    class="pt-20 bg-slate-500 text-white min-h-screen w-screen flex flex-col items-center justify-between overflow-x-hidden"
>
    <header
        class="fixed left-0 top-0 right-0 z-10 flex items-center justify-between px-4 lg:px-10 h-20 mb-6 shadow-lg bg-slate-800"
    >
        <a href="/" class="font-semibold text-4xl cursor-pointer">What to Eat</a>
        <a
            href="/card"
            class="rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700"
            >+ New Card</a
        >
    </header>

    <!-- PAGES -->
    <main class="w-full px-4 lg:px-0 lg:max-w-4xl 2xl:max-w-6xl">
        <slot />
    </main>

    <footer class="flex justify-center items-center w-full bg-slate-800 py-4">
        &copy; copyright {year} Marcus Wiseman
    </footer>
</div>

<!-- Global popup -->
{#if globalPopup}
    <EatPopup on:close={closePopup}>
        <div slot="header">This is my header</div>
        <div slot="content">
            Body dskjf kjsklfj ksjdfkjdskf jslkjfdslkjf lksjflkdsj lkfdsjlkj dskfdsjf lkjdsflkj lkjfdslkjf kjdsflk jsd
        </div>
        <div slot="actions">
            <div class="flex gap-4">
                <EatButton type="info">Cancel</EatButton>
                <EatButton>Click me!</EatButton>
            </div>
        </div>
    </EatPopup>
{/if}

<!-- App message -->
{#if appMessage}
    <AppMessage />
{/if}
