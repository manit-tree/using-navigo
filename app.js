$.ready(() => {
    const router = new Navigo('/');

    router.on('/home', () => {
        console.log('navigato to home');
    })

    router.on('/about', () => {
        console.log('navigato to about');
    })

    router.on('/products', () => {
        console.log('navigato to products');
    })

    router.on('/services', () => {
        console.log('navigato to services');
    })

    router.on('/contact', () => {
        console.log('navigato to contact');
    })

    router.on('/', () => {
        console.log('navigato to home');
    })

    router.resolve();

    let app = $('#app');

    app.on('click', evt => {
        let el = evt.target;

        if (el.matches('a')) {
            evt.preventDefault();

            let href = el.getAttribute('href');
            router.navigate(href);
        }
    })
})