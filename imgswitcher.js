const breakpoint = 800; // Change this value to your desired breakpoint


// Function to switch image sources
function switchImageSources() {
 

    var featuredItems = document.getElementsByClassName('featureditem');

    for (let i = 0; i < featuredItems.length; i++) {
        var img = featuredItems[i].querySelector("a img");
        var defaultSrc = img.getAttribute('data-src');
        
        var responsiveSrc = img.getAttribute('weirdsrc');
       

        if (window.innerWidth <= breakpoint) {
           
            if (img.src != responsiveSrc) {
                img.src = responsiveSrc;

            
            }
        } else {
            if (img.src != defaultSrc) {
                img.src = defaultSrc;

            }
        }
    }

    var leftItems = document.getElementsByClassName('featureditemleft');

    for (let i = 0; i < leftItems.length; i++) {
        var img = leftItems[i].querySelector("a img");
        var defaultSrc = img.getAttribute('data-src');
        var responsiveSrc = img.getAttribute('weirdsrc');

        if (window.innerWidth <= breakpoint) {
            if (img.src != responsiveSrc) {
                img.src = responsiveSrc;
            }
        } else {
            if (img.src != defaultSrc) {
                img.src = defaultSrc;
            }
        }
    }

    
}

function setImages(){
    const divsWithoutClass = document.querySelectorAll('div.articleitem:not(.featureditem):not(.featureditemleft)');


// Loop through the NodeList and perform any desired actions
    divsWithoutClass.forEach((div) => {
    // Your code here. For example, adding a new class to the selected divs:
        var setterimage = div.querySelector("a img");
       setterimage.setAttribute('src', setterimage.getAttribute('weirdsrc'));
    });
}



// Call the function on window load
window.addEventListener('load', switchImageSources);
window.addEventListener('load', setImages);

// Call the function on window resize
window.addEventListener('resize', switchImageSources);
