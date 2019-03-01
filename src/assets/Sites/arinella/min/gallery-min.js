$(document).ready(function() {
    $("#btn-ext").bind("click", function(e) {
        $("#exterieur").toggle("slow");
        $("#interieur").fadeToggle("fast");
        $(this).prop("disabled", true);
        $("#btn-int").prop("disabled", false);
        e.preventDefault();
    });
    $("#btn-int").bind("click", function(a) {
        $("#interieur").toggle("slow");
        $("#exterieur").fadeToggle("fast");
        $(this).prop("disabled", true);
        $("#btn-ext").prop("disabled", false);
        a.preventDefault();
    });
    if ($(".interieur").css("display") == "block") {
        $("#btn-int").unbind("click", a);
    }
    if ($(".exterieur").css("display") == "block") {
        $("#btn-ext").unbind("click", e);
    }
    jQuery("#gallery-int").unitegallery({
        gallery_theme:"tiles",
        theme_enable_preloader:false,
        tiles_col_width:420,
        tiles_align:"center",
        tiles_space_between_cols:60,
        tiles_exact_width:true,
        tiles_max_columns:4,
        tiles_min_columns:1,
        tiles_space_between_cols_mobile:50,
        lightbox_overlay_opacity:.75,
        lightbox_top_panel_opacity:0,
        lightbox_textpanel_title_text_align:"center",
        lightbox_arrows_offset:25,
        lightbox_textpanel_title_font_family:"Poiret One",
        tile_enable_textpanel:true,
        tile_textpanel_bg_opacity:.75,
        tile_textpanel_title_font_family:"Poiret One"
    });
    jQuery("#gallery-ext").unitegallery({
        gallery_theme:"tiles",
        theme_enable_preloader:false,
        tiles_col_width:420,
        tiles_align:"center",
        tiles_space_between_cols:60,
        tiles_exact_width:true,
        tiles_max_columns:4,
        tiles_min_columns:1,
        tiles_space_between_cols_mobile:50,
        lightbox_overlay_opacity:.75,
        lightbox_top_panel_opacity:0,
        lightbox_textpanel_title_text_align:"center",
        lightbox_arrows_offset:25,
        lightbox_textpanel_title_font_family:"Poiret One",
        tile_enable_textpanel:true,
        tile_textpanel_bg_opacity:.75,
        tile_textpanel_title_font_family:"Poiret One"
    });
});