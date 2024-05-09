PlaySeatbeltSound = function(seatbelt)
    SendNUIMessage({action = 'playSound', type = "seatbelt", status = seatbelt})
end

AddEventHandler('onClientResourceStart', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end
    Citizen.Wait(150)
    if Config.Core == "ESX" then
        while not ESX do
            Citizen.Wait(200)
        end
        if ESX.IsPlayerLoaded() then
            local PlayerData = ESX.GetPlayerData()
            if Config.Debug then
                print('^7Debug: ^0Ha cargado el jugador '..PlayerData.identifier)
            end
        end
    elseif Config.Core ~= "ESX" then
        print('^7Debug: ^0Deja el Config.Core en ESX.')
    end
end)

--    ___  __ __  ___         _ _  ___  _  ___  ___ 
--   | . \|  \  \| . |  ___  | | || . || ||  _]| __]
--   |  _/|     ||   | |___| | | || | || || [__| _] 
--   |_|  |_|_|_||_|_|       |__/ `___'|_|`___/|___]

-- RegisterNetEvent('your_custom_seatbelt', function(toggle)
--     seatbelt = toggle
-- end)