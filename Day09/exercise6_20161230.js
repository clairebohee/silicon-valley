var new_div = $('<div class="important">Got a new div coming in here!</div>')

// can we see the new div on the page yet?
new_div.css('color','red').attr('id','primary').text("Hi, I'm new here")

// is it on the page yet?
$('body').append(new_div)

// how about now?

// what's this do?
new_div.fadeOut(2000).delay(1000).fadeIn().slideUp(4000)
