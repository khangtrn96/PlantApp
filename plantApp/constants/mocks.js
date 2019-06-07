const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'shop'],
        count: 147,
        image: require('../assets/icons/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 15,
        image: require('../assets/icons/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 50,
        image: require('../assets/icons/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'sprayers',
        tags: ['products', 'inspirations'],
        count: 10,
        image: require('../assets/icons/sprayers.png')
    },
    {
        id: 'pots',
        name: 'pots',
        tags: ['inspirations', 'shop'],
        count: 14,
        image: require('../assets/icons/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 100,
        image: require('../assets/icons/fertilizers.png')
    },

];

const products = [
    {
        id: 1,
        name:'Ullamco irure minim sit sit.',
        description: 'Sunt cupidatat reprehenderit aliqua mollit nulla deserunt labore sint. Officia nulla elit dolore laboris culpa veniam veniam irure enim culpa. Laborum est consectetur consectetur duis tempor qui amet cillum id fugiat commodo in Lorem. Velit enim aliqua minim occaecat et cupidatat enim. Consectetur pariatur do duis officia dolore esse commodo in. Do adipisicing minim aute velit. Sint est fugiat incididunt Lorem exercitation incididunt qui sunt minim nostrud et quis qui.',
        tags: ['Interior', '27 m²', 'Ideas'],
        gallery: [
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
            //showing only 3 images, show +3 for the rest
            require('../assets/images/plants_1.png'),
            require('../assets/images/plants_2.png'),
            require('../assets/images/plants_3.png'),
        ]
    }
];

const explore = [
    //image
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png')
];

const profile = {
    username:'Colt',
    location:'Solomon Islands',
    email:'Lewis.Krajcik96@hotmail.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 2500,
    notification: true,
    newsletter: false
};

export {
    categories,
    products,
    profile,
    explore
}