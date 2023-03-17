const ZEGAR_GRY = 1000; 
const DLUGOSC_BLOKU = 30 ;
const WIERSZE = 20 ;
const KOLUMNY = 10 ;
const PUNKT = 10 ;

const KSZTALT = [
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 

    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ],

    [
        [4,4],
        [4,4],
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ],

    // [
    //     [8,0,0],
    //     [8,8,0],
    //     [8,8,0],
    // ],

    // [
    //     [9,9,9],
    //     [9,0,9],
    //     [0,0,0]
    // ],

]

const KOLORY = [
    '#ffffff',
    '#280096',
    '#11007F',
    '#FFFFcc',
    '#7BC2EA',
    '#1E90FF',
    '#FFFF66',
    '#CCFFFF',
    // '#FFD700',
    // '#386087'
]


let images = [];
    
// Image loading global variables
let loadcount = 0;
let loadtotal = 0;
let preloaded = false;

// Load images
function loadImages(imagefiles) {
    // Initialize variables
    loadcount = 0;
    loadtotal = imagefiles.length;
    preloaded = false;
    
    // Load the images
    var loadedimages = [];
    for (var i=0; i<imagefiles.length; i++) {
        // Create the image object
        var image = new Image();
        
        // Add onload event handler
        image.onload = function () {
            loadcount++;
            if (loadcount == loadtotal) {
                // Done loading
                preloaded = true;
            }
        };
        
        // Set the source url of the image
        image.src = imagefiles[i];
        
        // Save to the image array
        loadedimages[i] = image;
    }
    
    // Return an array of images
    return loadedimages;
}

// images =loadImages([
//     'gear.png'
//     ]);
