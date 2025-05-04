function earn_cookies(cookies_to_earn){Game.Earn(cookies_to_earn)}
function change_cookies(new_cookies_number){Game.cookies = new_cookies_number}
function infinite_cookies(){Game.cookies = 10 ** 303}
function reset_cookies(){Game.cookies = 0}
function earn_sugar_lumps(sugar_lumps_to_earn){Game.lumps = sugar_lumps_to_earn}
function show_earned_cookies(){alert(Game.cookiesEarned)}
