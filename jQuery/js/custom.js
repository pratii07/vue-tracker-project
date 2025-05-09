// // jQuery("button").click(function(){
// //     console.log("worked!!!!!!!!!!!")
// // })

// jQuery.noConflict();
// jQuery("button").ready(function($){
//     // $("button").click(function(){
//     //     console.log("chal rha hiiii...")
//     // })
//     // $("button").dblclick(function(){
//     //     console.log("dobleclick..")
//     // })
//     // $("button").mouseleave(function(){
//     //     console.log("leave work.")
//     // })
//     // $("button").mouseenter(function(){
//     //     console.log("enter work...")
//     // })

//     // $("#name").keypress(function(){
//     //     console.log("key press...")
//     // })
//     // $("#name").keydown(function(){
//     //     console.log("key down...")
//     // })
//     // $("#name").keyup(function(){
//     //     console.log("key up...")
//     // })

//     // form Event 

//     // $("#fname").focus(function(){
//     //     console.log("focus field...")
//     // })
//     // $("#fname").blur(function(){
//     //     console.log("blur field...")
//     // })

//     // submit Event
//     // $("form").submit(function(e){
//     //     console.log("form submit");
//     //     e.preventDefault();
//     // })

// })


jQuery.noConflict();
jQuery(document).ready(function($){
    // $("#hide").click(5000,function(){
    //     $("#img1").hide(function(){
    //         console.log("Chuupa diya...");
    //     });
    // });
    // $("#show").click(function(){
    //     $("#img1").show(5000,function(){
    //         console.log("show ho rha hai naa...");
    //     })
    // })
    //  $("#toggle").click(function(){
    //     $("#img1").toggle(1000,function(){
    //         console.log("show/hide ho rha hai ...");
    //     })
    // })

    // fadeIn,fadeOut,fadeToggle,fadeTo,slideUp,slideDown,slideToggle,

    $("#animate").click(function(){
        $("#img2").animate({left: "+=80" }, 100,function(){
            console.log("Anamation is working....") 
        });
    });
    // get-value
    // let textdata = $("h4").text();
    // console.log(textdata) ;
    // set value
    // $("#set-text").click(function(){
    //     $("h4").text("Mera naam Prateeksha")          
    // })
    // get attribute
    // $("#btn-set-atr-val").click(function(){
    //     console.log("old data", $("#name").attr("data-sid"));
        
    //     $("#name").attr("data-sid", "7");
        
    //     console.log("new data : ", $("#name").attr("data-sid"));
    // });

    // img change using attr
    $("#btn-set-atr-img").click(function(){
        $("img1").attr("src","mummbai.jpeg")
    })
    

});