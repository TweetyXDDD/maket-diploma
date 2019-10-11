

(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle('.toggle');
  });

  this.Toggle = (function() {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab");
      this.panels = this.el.find(".panel");
      this.bind();
    }

    Toggle.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle.prototype.bind = function() {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function(e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle;

  })();

}).call(this);

$(function() {
    var thIndex = 0,
        curThIndex = null;

    $(function(){
        $('table thead tr th').click(function(){
            thIndex = $(this).index();
            if(thIndex != curThIndex){
                curThIndex = thIndex;
                sorting = [];
                tbodyHtml = null;
                $('table tbody tr').each(function(){
                    sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
                });

                sorting = sorting.sort();
                sortIt();
            }
        });
    })

    function sortIt(){
        for(var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++){
            rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
            tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
        }
        $('table tbody').html(tbodyHtml);
    }
});