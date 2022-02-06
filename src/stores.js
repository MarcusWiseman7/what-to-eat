import { writable } from 'svelte/store';

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
