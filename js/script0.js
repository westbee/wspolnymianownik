// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// parallax menu background position

if( $(window).width() > 700 ) {
  $("#parallax-menu").attr("data-position", "center center");
} else {
  $("#parallax-menu").attr("data-position", "-100px center");
}

// Custom

(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.7";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  var feed = new Instafeed({
    get: 'user',
    userId: '3645636448',
    clientId: '8f1cdeeab6e346dfb19bbdc532c8a27c',
    accessToken: '3645636448.8f1cdee.10958734af8e4dca8ac33b41795603c1',
    resolution: 'thumbnail',
    orientation: 'square',
    template: '<div class="col-xs-4 col-sm-3 col-md-2 insta-break"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="instagram-{{orientation}} img-responsive" /></a></div>',
    sortBy: 'most-recent',
    limit: 12,
    links: false
  });
  feed.run();

  // footer
  var date = new Date().getFullYear();
  var footerContent = `
    <div class="container text-center">
      <p>&copy;2017-${date} Wspólny Mianownik. All rights reserved.</p>
    </div>
  `;

$('footer').append(footerContent);
