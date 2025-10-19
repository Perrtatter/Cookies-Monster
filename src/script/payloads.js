function earn_cookies(){

    let cookies_to_earn = document.getElementById("cookies_input").value;

    alert("You have earn " + cookies_to_earn + " cookies");
    Game.Earn(cookies_to_earn);
}

function change_cookies(){

    let new_cookies_number = document.getElementById("cookies_input").value;

    alert("You have " + new_cookies_number  + " cookies");
    Game.cookies = new_cookies_number
}

function infinite_cookies(){

    Game.cookies = 10 ** 303
}

function reset_cookies(){

    Game.cookies = 0
}

function earn_sugar_lumps(sugar_lumps_to_earn){

    Game.lumps = Game.lumps + sugar_lumps_to_earn
}

function change_sugar_lumps(sugar_lumps_new_number){

    Game.lumps = sugar_lumps_new_number
}

// show earned cookie
// show cookie hitbox
function show_earned_cookies(){

    alert(Game.cookiesEarned)
}

// change header link href