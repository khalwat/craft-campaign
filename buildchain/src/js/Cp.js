/** global: Campaign */
/** global: Craft */
/** global: Garnish */
/**
 * CP class
 */
Campaign.CP = Garnish.Base.extend(
    {
        init: function() {
            this.loadElementThumbs();
            this.addListener($.find('.show-more'), 'click', 'showMore');
            this.addListener($.find('.interaction-filter'), 'change', 'filterInteraction');
        },

        loadElementThumbs: function() {
            var elements = $('.elementThumb');

            if (elements.length) {
                (new Craft.ElementThumbLoader()).load(elements);
            }
        },

        showMore: function(event) {
            event.preventDefault();

            var $this = $(event.target);
            $('#' + $this.attr('data-id')).find('.hidden').removeClass('hidden');
            $this.remove();
        },

        filterInteraction: function(event) {
            event.preventDefault();

            var $this = $(event.target);
            var baseUrl = window.location.href.split('?')[0];
            window.location.href = $this.val() ? baseUrl + '?interaction=' + $this.val() : baseUrl;
        },
    }
);

new Campaign.CP();
