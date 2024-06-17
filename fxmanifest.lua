fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Dadi Market'
description 'Hud and seat belt system for FiveM servers'
version '1.0.0'

shared_script 'config/config.lua'

client_scripts {
	'client/*.lua',
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server/*.lua',
}

ui_page 'web/index.html'

files {
	'web/index.html',
	'web/**/*.*'
}

escrow_ignore {
	'config/*.lua',
}