
'use strict';

/**
 * @customElement
 * @polymer
 */
class BiographyView extends Polymer.Element {
    static get is() {
        return 'biography-view';
    }

    static get properties() {
        return {
            routeData: {
                observer: '_handleRoute'
            },

            dataHeroes: {
                type: Array,
                value: []
            }
        };
    }

    async _handleRoute(newRoute, oldRoute) {
        

        if (newRoute.page === "biography" && oldRoute) {
            console.log("HERE", newRoute, oldRoute);
            this.set('dataHeroes', []);

            for (let i = 0; i < 10; i++) {
                const id = Math.floor(Math.random() * 100);
                let dataHero = {};


                await fetch(`https://superheroapi.com/api.php/2113315678698733/${id}/biography`)
                    .then((response) => response.json())
                    .then((json) => {
                        dataHero = Object.assign({}, json);
                    })

                await fetch(`https://superheroapi.com/api.php/2113315678698733/${id}/image`)
                    .then((response) => response.json())
                    .then((json) => {
                        dataHero = Object.assign(dataHero, json);
                    })

                    this.push('dataHeroes', dataHero);
            }
        }
    }



}

customElements.define(BiographyView.is, BiographyView);

