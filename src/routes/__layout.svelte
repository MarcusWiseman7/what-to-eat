<script>
    import '../app.css';
    import AppPopup from '$lib/components/popup.svelte';
    import AppButton from '$lib/components/button.svelte';
    import addSrc from '$lib/assets/icons/add.svg';
    import { btnClass, globalPopup } from '../stores';
</script>

<div
    class="pt-20 bg-slate-500 text-white min-h-screen w-screen flex flex-col items-center justify-between overflow-x-hidden select-none"
>
    <header
        class="fixed left-0 top-0 right-0 z-10 flex items-center justify-between px-4 lg:px-10 h-20 mb-6 shadow-lg bg-slate-800"
    >
        <a href="/" class="font-semibold text-4xl cursor-pointer">What to Eat</a>
        <a href="/card/new" class={$btnClass}>
            <img src={addSrc} alt="Add" />
            <span>New Card</span>
        </a>
    </header>

    <!-- PAGES -->
    <main class="w-full px-4 lg:px-0 lg:max-w-4xl 2xl:max-w-6xl">
        <slot />
    </main>

    <footer class="flex justify-center items-center w-full bg-slate-800 py-4">
        Marcus Wiseman {new Date().getFullYear()} &copy;
    </footer>
</div>

<!-- Global popup -->
{#if $globalPopup}
    <AppPopup on:close={$globalPopup.onClose}>
        <div slot="header">{$globalPopup.title}</div>
        <div slot="content">{$globalPopup.content}</div>
        <div slot="actions">
            <div class="flex gap-4">
                <AppButton type="info" on:click={$globalPopup.onSecondaryBtn}>{$globalPopup.secondaryBtn}</AppButton>
                <AppButton on:click={$globalPopup.onPrimaryBtn}>{$globalPopup.primaryBtn}</AppButton>
            </div>
        </div>
    </AppPopup>
{/if}
