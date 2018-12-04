(function garageFriendViewDefinition (customElement) {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class GarageFriend extends Polymer.Element {
        static get is() {
            return 'garage-friend-view';
        }

        static get properties() {
        return {
          
        };
      }

        
    }

    customElements.define(GarageFriend.is, GarageFriend);
})(window.customElements);
