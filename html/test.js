// logic
// have an array of images and a variable = # of thumbnails
// switches out image when you click on thumbnail
// this is unfinished


images = ['http://d1ya1fm0bicxg1.cloudfront.net/2014/07/promoted-media-optimized_53da4ae651490.jpg',
'http://www.edmsauce.com/wp-content/uploads/2014/09/Porter-Robinson-Worlds-Tour-Art.jpg',
'http://41.media.tumblr.com/36749a04e9f4f7fcee29a476847bd81a/tumblr_nainsfU0641rrb7dfo1_500.jpg',
'http://payload170.cargocollective.com/1/12/391611/5705300/10271482_711133358945257_7454391078460532252_n.jpg',
'http://40.media.tumblr.com/b0763e17057768609ba85b34783926f6/tumblr_nmxve6TFgl1r4pdmzo1_500.jpg',
'http://thissongissick.com/wp-content/uploads/2014/06/artworks-000082629676-lqw32k-t500x500.jpg',
'http://cdn-ak.f.st-hatena.com/images/fotolife/m/marqs/20141223/20141223224740.jpg',
'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7a427018287469.562e3052a6268.jpg',
'https://pbs.twimg.com/media/CODhN86UkAAcU1k.jpg',
'http://40.media.tumblr.com/37a97b65972c36a7eeb9a42aa4d67d07/tumblr_nlmtf47EBT1t1bg5qo4_500.jpg',
'https://49.media.tumblr.com/7c59d98496f853facd23bab0a20c2fe2/tumblr_nc062pnjxZ1s8qsdlo1_500.gif',
'https://pbs.twimg.com/media/CQkZTELWgAAR1ap.png',
'http://i1210.photobucket.com/albums/cc418/edmtunes/blog/blog002/madeonyoureon_zpsb29a5d5e.jpg~original',
'https://s-media-cache-ak0.pinimg.com/736x/b7/14/76/b7147673cdba147cd0463fd21f06ff71.jpg',
'http://41.media.tumblr.com/e4013c221c65a990c4b835c7bdfc5e09/tumblr_mztfz82XEE1rv17teo1_1280.png'];
// array of images to draw from

numThumb = 4;       // number of thumbnails showing
                    // used to dynamically calculate the margins between each image

 $(document).ready(function() { // loads the code when document is ready

     // index = current value that you're on (where youre at in the array)
     // value = object (in this case, your images)
     // $.each is a loop that passes an array and a callback (a function). it iterates over the array
     // .append inserts specified content at the end of selected elements

     // goes through the array to add the thumbnails to the div
     $.each(images, function(index, value) {                                    // goes through the array
        $('#imageContain').append('<img src="' + value + '" />');               // inserts content with the value (images) in the #imageContain div
     });



     // for the first element of the array, add a margin left - for styling
     $('#imageContain img:first').css('margin-left', '2px');



     // for each image in #imageContain, apply the css property of 'margin-right' - to dynamically sets margin right on the thumbnail images
     // margin-right = (width of the window - (width of thumbnail image * number of thumbnails))/# of thumbnails
     $('#imageContain img').css('margin-right', ($('#thumbGallery').width() - ($('#imageContain img').width()*numThumb))/numThumb);



     // parseInt() = parses an integer and returns a string

     // dynamically sets the width of the imageContain
     // width = length of array * (width of image + margin-right)
     // "+ #" is to remove overlap of thumbnails - depends if you have any methods that add width, ex borders that determines the #
     $('#imageContain').css('width', images.length * ($('#imageContain img').width() + parseInt($('#imageContain img').css('margin-right')) + 3));



     // .position returns the top and left position of an element
     // .left returns a string of the left position of a positioned element

     // clicking the navigation arrows and moving the thumbGallery
     $('.thumbnailArrows').click(function() {                                   // if you click on the image w/ the class thumbnailArrows
        var whichArrow = $(this).children('img').attr('id');                    // assign this click to this variable
        var galleryWidth = $('#thumbGallery').width();                          // sets width of div thumbGallery to a variable
        var pos = $('#imageContain').position();                                // returns position of the div
        var positionLeft = pos.left;                                            // returns current left position as a string
        if (whichArrow == 'goLeft'){                                            // if the left navigation arrow gets clicked
            if (positionLeft == 0){                                             // if position = 0 do nothing
                // do nothing
            } else {                                                            // if not 0, positionLeft will be a negative number
                $('#imageContain').css('left', positionLeft + galleryWidth);    // add the positionLeft to the width of div to set positionLeft back to 0
            }                                                                   // moves gallery left to the next set of thumbnail images
        }
        else {                                                                               // else if the right navigation arrow gets clicked
            if ($('#imageContain').width() <= galleryWidth + Math.abs(positionLeft)){        // if width of the div is <= to (width of div + |positionLeft|) then donothing, we reached the end of our images
                //do nothing;
            } else {                                                                         // else if we haven't reached the end
                $('#imageContain').css('left', positionLeft - galleryWidth);                 // we take positionLeft - width of div to move the gallery right to the next set of thumbnail images
            }
        }
    });




    // .target returns the element that triggers the event
    // .not returns elements that don't match the criteria

    $('#imageContain img').addClass('borderNormal');                            // add 1px solid #ddd border like the one on joebutton
    $('#imageContain img:first').addClass('borderClass');                       // for the first element in the array, add a 1px solid #000 border like the one on joe button

    // toggles border (1px solid #000) on click
    $('#imageContain img').click(function (border) {                            // if you click an image in that div, pass the parameter 'border'
        $('#imageContain img').not(border.target).removeClass('borderClass');   // if it isn't the element that triggered the event (if it isn't clicked), remove the border
        $(this).toggleClass('borderClass');                                     // if it's the element that was clicked, change the border
    });



    // click on the thumbnails to change the thumbnail to the main image
    $('#imageContain img').click(function() {                                   // if you click on an image within the div #imageContain
        var newImg = $(this).attr('src');                                       // this = item that we just clicked -> set it to a variable
        $.each(images, function(index, value) {                                 // passes array [images] and a function that takes your index in the array and the image you're at
            if (value == newImg) {                                              // cycles through the array to find if where you clicked (newImg) matches the image (value)
                changeImage(index);                                             // switches image to the index # you're on
            }                                                                   // == index and value are the same
        });
    });


    // changes image to whatever the variable imgIndex passes to it
    // passes the parameter of imgIndex that you get from currentImage()
    function changeImage(imgIndex) {
        var change = $('#slideshow').attr('src', images[imgIndex]);             // change = your location in the array
        $('hold img').replaceWith(change);                                      // replace the image in the hold div with the image that you're currently at
    }

    // end
 });
