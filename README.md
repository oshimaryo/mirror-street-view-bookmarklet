# Mirror Street View

## Description

This bookmarklet allows you to mirror the Street View panorama.

## Usage
1. Drag the following link to your bookmarks bar: [Mirror Street View](javascript:void%20function(){const%20a=document.querySelector(%22.widget-scene-canvas%22);if(a){const%20b=a.classList.contains(%22mirrored%22);if(b)return%20a.classList.remove(%22mirrored%22),void(a.style.transform=%22%22);a.classList.add(%22mirrored%22),a.style.transform=%22rotateY(180deg)%22}}();)
2. Click the bookmarklet when you are on a Street View panorama.
3. Click the bookmarklet again to unmirror the panorama.
   

## acknowledgements

- [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/)
  

## License
MIT
