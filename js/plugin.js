$(window).on('load', function() { 
    // video play icon
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
            $(this).children(".video").get(0).pause();
            $(this).children('.playpause').css('display','none')
            // $(this).children(".playpause").fadeIn();
        }
    });
    $('.content-link button:first-child').click(function () {
        
        $('.content-link button:last-child').removeClass('active-link');
        $(this).addClass('active-link');
    
        $('#picture2').hide();
        $('#picture1').show();
    });
    // switch between two blocks
    $('.content-link button:last-child').click(function () {
        
        $('.content-link button:first-child').removeClass('active-link');
        $(this).addClass('active-link');
    
        $('#picture1').hide();
        $('#picture2').show();
    });

    // nav style
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
    }


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    // tel international
    var input = document.querySelector("#phone2");
    window.intlTelInput(input, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
        preferredCountries: ['Eg', 'us'],
      // separateDialCode: true,
        utilsScript: "../js/utils.js",
    });

    var input = document.querySelector("#phone3");
    window.intlTelInput(input, {
        preferredCountries: ['Eg', 'us'],
        utilsScript: "../js/utils.js",
    });
    // details filter collapse
    $('.collapse').collapse({
        show: true
    })
    // checkbox
    var group_=(el,callback)=>{
        el.forEach((checkbox)=>{
        callback(checkbox)
        })
        }
        var group_el=document.querySelectorAll("*[data-name] > input")
        group_(group_el,(item)=>{
        item.onclick=(e)=>{
        group_(group_el,(item)=>{
        item.checked=false;
        })
        
        e.target.checked=true;
        }
        })
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            preferredCountries: ['Eg', 'us'],
            utilsScript: "../js/utils.js",
        });
});