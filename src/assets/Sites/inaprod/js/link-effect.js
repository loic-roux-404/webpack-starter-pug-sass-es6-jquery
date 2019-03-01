
//gallery theme par défault 

/*jQuery(document).ready(function(){
	jQuery("#gallery").unitegallery(
	{ 
        //regler la hauteur des images manuellement en css ou avec un style="" sur le html, les images font toutes la meme taille
        //gallery_width:500,//obligatoire pour bien voir la diapo                                  
        //gallery_height:400,     
        slider_textpanel_always_on: false,
        gallery_mousewheel_role: "none", //empecher le zoom avec la souris et autre evenements

    }
    );
});*/

$(document).ready(function(){
	$("#gallery").unitegallery({ 

					theme_enable_preloader: true,		//enable preloader circle
					theme_preloading_height: 200,		//the height of the preloading div, it show before the gallery
					theme_preloader_vertpos: 100,		//the vertical position of the preloader
					theme_gallery_padding: 10,			//the horizontal padding of the gallery from the sides
					theme_appearance_order: "normal",	//normal, shuffle, keep - the appearance order of the tiles. The keep is "keep order"				//auto open lightbox at start - if some number gived, like 0
					
					//gallery options:
					
					gallery_theme: "tiles"	,			//choose gallery theme (if more then one themes includes)
					gallery_width:"100%",				//gallery width
					gallery_min_width: 150,				//gallery minimal width when resizing
					gallery_background_color: "",		//set custom background color. If not set it will be taken from css.
                    //liens vers les autres options -----> http://unitegallery.net/index.php?page=tiles-columns-options 
                    gallery_mousewheel_role: "none"

				});
});

//liens vers les options des autres themes





















