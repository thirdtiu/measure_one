$(document).ready(function() {
    
  // start boostra affix replacement
  var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
    
    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
      
  };

  
  

  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');
    
    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });
    
    // init
    toggleAffix(ele, $(window), wrapper);
  });

  // end bootstrap affix replacement

  $("#my-menu").mmenu({
    "extensions": ["shadow-panels","fx-listitems-slide","border-none", "fullscreen","position-right"],
    "navbar": {
        title: `
            <div class="mm-custom-header">
                <img src="../_assets/images/logo-dark.png" />
                <a href="#wrapper" style="border: none;"><img src="../_assets/images/close.png" /></a>
            </div>
            `
    }
  }, {
        // configuration
        classNames: {
        selected: "active"
        }
  });

  // bootstrap nav to dropdown on hover
  $('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

  //make bootstrap parent nav item  clickable
  $('.navbar .dropdown > a').click(function() {
    location.href = this.href;
  });




})


function toggleDropdown (e) {
    let _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
    setTimeout(function(){
      let shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0);
  }

  