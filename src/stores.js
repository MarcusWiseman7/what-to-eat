import { readable, writable } from 'svelte/store';

export const btnClass = readable(
    'rounded-lg font-semibold text-xl px-3 lg:px-8 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 flex justify-center items-center cursor-pointer'
);
export let globalPopup = writable(null);

export let cards = writable([
    {
        title: 'Pizza',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdsjjfjghfkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Grapefruit cassarole',
        pic: 'vatican.jpg',
        id: 'dsfkhsdsdfsdfsdjfhdsgjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Pie',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdssdfsdjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
    {
        title: 'Lemon suitcases',
        pic: 'vatican.jpg',
        id: 'dsfkhsdjfhdssdsdfsdfsdfsdfsdjkfdsjkf',
        ingredients: ['celery', 'bread', 'milk', 'cheese', 'apples'],
        steps: [
            'mix',
            'blend',
            'slkdjfklsdj sdlkfj lksjfkljsdklfj dslkjfsdlkjfkl',
            'askdflk dsjk lsdkjlkdsjflkj sdlkjsdlkfjdskfjd lkfjdslkfjd',
            'sdkf jfkjdsfklj dkfjdkljfdskljsdkljfdlks',
        ],
    },
]);
