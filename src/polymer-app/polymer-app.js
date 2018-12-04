
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class PolymerApp extends Polymer.Element {
        static get is() {
            return 'polymer-app';
        }

        static get properties() {
        return {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
          },
          routeData: {
            type: Object
          },
          subroute: String,
          // This shouldn't be neccessary, but the Analyzer isn't picking up
          // Polymer.Element#rootPath
          rootPath: String,
        };
      }

      static get observers() {
        return [
          '_routePageChanged(routeData.page)',
        ];
      }

      _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = page || 'home';
      }

      _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        let resolvedPageUrl = this.resolveUrl(`/src/views/${page}-view/${page}-view.html`);

        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPageError.bind(this),
            true);
      }

      _showPageError() {
        this.page = 'error';
      }
    }

    customElements.define(PolymerApp.is, PolymerApp);

