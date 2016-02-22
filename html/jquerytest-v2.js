var images = ['http://d1ya1fm0bicxg1.cloudfront.net/2014/07/promoted-media-optimized_53da4ae651490.jpg',
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

var position = 0;

var numThumb = 3;

var preload = [];
for (i = 0; i < images.length; i++) {
    preload[i] = new Image();
    preload[i].src = images[i];
}

// goes through the array, makes an image element for each index in the array
// attaches attribute "src"
// append prints out the image in the container of the gallery

/*
this is to change the zoomed Image
theory: replace 'loadImage' with the array
var options = {zoomOffsetX:0, zoomPosition:'inside'};
var myInstance = new CloudZoom($('#mainImage'),options);
myInstance.loadImage('https://pbs.twimg.com/media/CODhN86UkAAcU1k.jpg');
*/


function getNextPosition(id, max) {
    var slot =  images.indexOf($(id).attr("src")) + 1;
    // slot finds the position of the source in the images array and adds 1 to the index

    if (slot > max) {
    // if slot is last slot in array, return max
      return max;   // ex if max = images.length return the length
    }

    return slot; // returns the next thumbnail
}


function getPreviousPosition(id, min) {
  // passes the parametes of id and min

    var slot =  images.indexOf($(id).attr("src")) - 1;
    // slot finds the position of the source in the images array and subracts 1 to the index

    if (slot < min) {
    // if slot less than the min then return the min (index 0)
      return min;   // ex if min = 0 then return because that's the end
  }

  return slot; // returns the next thumbnail
}


function initializeSlider() {

    // doesn't load all of the images at once (bad practice if you do)


    for (i = 0; i < images.length; i++) {
        var image = document.createElement("img");
        $(image).attr("src", images[i]);
        $('#mainImage').append(image);
    }


    // populates the thumbnail gallery
    for (i = 0; i < images.length; i++) {
        var thumb = document.createElement('img');
        $(thumb).attr('src', images[i])
        $(thumb).attr('id',"thumbnail"+i);
        $('#imageContain').append(thumb);
    }

    // applies CSS - borders
    // $('#imageContain img').css({
    //         'border-color': '#ddd',
    //         'border-width':'1px',
    //         'border-style':'solid'
    //        });
    // $('#imageContain img:first').css({
    //         'margin-left': '10px',
    //       });

    $('#imageContain img').css('margin-right', ($('#thumbGallery').width() - ($('#imageContain img').width()*numThumb))/numThumb);
    $('#imageContain').css('width', images.length * ($('#imageContain img').width() + parseInt($('#imageContain img').css('margin-right')) + 3));
}

initializeSlider();



// when you click the right arrow, increase the position of the index
// if your position is too big, decrease it to fit the array.length
$('#rightArrow').click(function(){
    position++;


    if (position > images.length) {
        position--;
    }


    // changes the thumbnails
    setThumb("#thumbnail0", getNextPosition("#thumbnail0", images.length - 3));
    setThumb("#thumbnail1", getNextPosition("#thumbnail1", images.length - 2));
    setThumb("#thumbnail2", getNextPosition("#thumbnail2", images.length - 1));

    refreshImage();
    changeZoom();
    // goRight();
});


// when you click the left arrow, decrease the position of the index
// if your position is too small (negative #), increase it (= 0, arrays start @ 0)
$('#leftArrow') .click(function(){
    position--;

    if (position < 0) {
      position++;
    }

    setThumb("#thumbnail0", getPreviousPosition("#thumbnail0", 0));
    setThumb("#thumbnail1", getPreviousPosition("#thumbnail1", 1));
    setThumb("#thumbnail2", getPreviousPosition("#thumbnail2", 2));

    // will not work if there's less than 3 images
    // you hard coded -1, -2

    refreshImage();
    changeZoom();
    // goLeft();
});


$('#imageContain img').click(function(border){
    position = images.indexOf(this.src);

    refreshImage();
    changeZoom();

    // $('#imageContain img').not(border.target).css({
    //     'border-color': '#ddd',
    //     'border-width':'1px',
    //     'border-style':'solid'
    //   });
    //
    // $(this).css({
    //     'border-color': '#000',
    //     'border-width':'1px',
    //     'border-style':'solid'
    //   });
});

// $('.thumbnailArrows').click(function() {
//         var whichArrow = $(this).children('img').attr('id');
//         var imgWidth = $('#imageContain img').width();
//         var pos = $('#imageContain').position();
//         var posi = pos.left;
//
//         if (whichArrow == 'leftArrow'){
//             if (posi == 0){
//                 //do nothing
//             } else {
//                 $('#thumbGallery').animate({
//                     scrollLeft: '-=70' }, 1000);
//             }
//         }
//         else {
//             if ($('#imageContain').width() <= imgWidth+Math.abs(posi)){
//                 //do nothing;
//             } else {
//                  $('#thumbGallery').stop().animate({
//                      scrollLeft: '+=20' }, 1000);
//             }
//         }
//     });



function refreshImage() {
    $('#mainImage').attr('src', images[position]);
}


// sets the thumbnail position
function setThumb(thumbnailID, slot) {
    // sets border to the image you're on
    // if(slot == position) {
    //     $(thumbnailID).css({
    //       'border-color': '#000',
    //       'border-width':'1px',
    //       'border-style':'solid'});
    //     }

    // whatever selector gets passes through, attach the source attribute that matches the position you're at
    $(thumbnailID).attr('src', images[slot]);
}


// changes the zoomed image
function changeZoom() {
    var options = {zoomOffsetX:0, zoomPosition:'inside'};
    var myInstance = new CloudZoom($('#mainImage'),options);
    myInstance.loadImage(images[position]);
}

// function goLeft() {
//   $('#thumbGallery').animate({left:'-=15px'},'slow');
// }
//
//
// function goRight() {
//         var windowWid = $('#window').width();
//         //get left position
//         var pos = $('#imageHolder').position();
//         var posi = pos.left;
//   $('#thumbGallery').animate({left: posi-windowWid});
// }
