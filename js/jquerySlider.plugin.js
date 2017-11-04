jQuery.fn.slideLeftHide = function( speed, callback ) {    
    this.animate({    
        width : "hide",    
        paddingLeft : "hide",    
        paddingRight : "hide",    
        marginLeft : "hide",    
        marginRight : "hide"    
    }, speed, callback );    
};    
jQuery.fn.slideLeftShow = function( speed, callback ) {    
    this.animate({    
        width : "show",    
        paddingLeft : "show",    
        paddingRight : "show",    
        marginLeft : "show",    
        marginRight : "show"    
    }, speed, callback );    
}; 
jQuery.fn.slideRightHide = function( speed, callback ) {    
    this.animate({    
        width : "hide",    
        paddingLeft : "hide",    
        paddingRight : "hide",    
        marginLeft : "hide",    
        marginRight : "hide"    
    }, speed, callback );    
};    
jQuery.fn.slideRightShow = function( speed, callback ) {    
    this.animate({    
        width : "show",    
        paddingLeft : "show",    
        paddingRight : "show",    
        marginLeft : "show",    
        marginRight : "show"    
    }, speed, callback );    
}; 