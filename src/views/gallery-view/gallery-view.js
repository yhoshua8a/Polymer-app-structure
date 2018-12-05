    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class GalleryView extends Polymer.Element {
        static get is() {
            return 'gallery-view';
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
        

        if (newRoute.page === "gallery" && oldRoute) {
            console.log("HERE", newRoute, oldRoute);
            this.set('dataHeroes', []);

            for (let i = 0; i < 20; i++) {
                const id = Math.floor((Math.random() * 100)-1);
                let dataHero = {};

                await fetch(`https://superheroapi.com/api.php/2113315678698733/${id}/image`)
                    .then((response) => response.json())
                    .then((json) => {
                        dataHero = Object.assign({}, json);
                    })

                    this.push('dataHeroes', dataHero);
            }
        }
      }

        
    }

    customElements.define(GalleryView.is, GalleryView);

