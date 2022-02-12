<script>
    import { createEventDispatcher, onDestroy } from 'svelte';
    import { scale } from 'svelte/transition';

    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');

    let popup;

    const handle_keydown = (e) => {
        if (e.key === 'Escape') {
            close();
            return;
        }

        if (e.key === 'tab') {
            // trap focus
            const nodes = popup.querySelectorAll('*');
            const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

            let index = tabbable.indexOf(document.activeElement);
            if (index === -1 && e.shiftKey) index = 0;

            index += tabbable.length + (e.shiftKey ? -1 : 1);
            index %= tabbable.length;

            tabbable[index].focus();
            e.preventDefault();
        }
    };

    const previously_focused = typeof document !== 'undefined' && document.activeElement;

    if (previously_focused) {
        onDestroy(() => {
            previously_focused.focus();
        });
    }
</script>

<svelte:window on:keydown={handle_keydown} />

<!-- Holder -->
<div
    on:click={close}
    class="h-screen w-screen fixed left-0 top-0 z-40 flex justify-center items-center bg-slate-900 bg-opacity-80"
>
    <!-- Popup -->
    <div
        on:click|stopPropagation
        bind:this={popup}
        role="dialog"
        transition:scale={{ duration: 500, delay: 100 }}
        class="h-full w-full lg:rounded-lg lg:h-auto lg:w-auto lg:max-w-3xl bg-white relative flex flex-col items-center py-6 px-20"
    >
        <!-- Closer -->
        <div on:click={close} class="absolute top-0 left-0 py-3 px-4 cursor-pointer">X</div>

        <!-- Header -->
        <div class="text-4xl font-semibold">
            <slot name="header" />
        </div>

        <!-- Content -->
        <div class="mt-6">
            <slot name="content" />
        </div>

        <!-- Actions -->
        <div class="mt-6">
            <slot name="actions" />
        </div>
    </div>
</div>
