if Config.Core == "new" then
    ESX = Config.CoreExport()
else
    Citizen.CreateThread(function()
        while true do
            print(('^8[WARNING] ^7- You missconfigure Config.Core: ^1"%s"^7, available: ^2"ESX"^7'):format(Config.Core))
            Citizen.Wait(7500)
        end
    end)
end

hungerStatus = 0
thirstStatus = 0
stressStatus = 0
local speedometerOnScreen = false
local displayStatus = true

seatbelt = false
local lastSpeed = 0.0
local currentSpeed = 0.0

local isInVehicle = false
local myVehicle = nil
local mySpeed = nil

local minimapDisplay = Config.MinimapOnlyInVehicle and "vehicle" or "on"

Citizen.CreateThread(function()
    minimap = RequestScaleformMovie("minimap")
    repeat Wait(100) 
        minimap = RequestScaleformMovie("minimap")
    until HasScaleformMovieLoaded(minimap)
    loadPlayerMinimap()
    while true do
        SetRadarZoom(Config.MinimapZoom)
        Citizen.Wait(2500)
    end
end)

local lastHealth = 0
Citizen.CreateThread(function()
    while Config.Core == "new" do
        local status = Config.GetStatus()
        hungerStatus = status.hunger
        thirstStatus = status.thirst
        Citizen.Wait(Config.LoopTimeoutStatus)
    end
end)


Citizen.CreateThread(function()
    while true do
        Citizen.Wait(Config.LoopTimeoutHud)
        BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
        ScaleformMovieMethodAddParamInt(3)
        EndScaleformMovieMethod()
        local myPed = PlayerPedId()
        local myPlayer = PlayerId()
        local myHealth = GetEntityHealth(myPed) - 100
        local myArmor = GetPedArmour(myPed)
        local myStamina, isUnderWater = not IsEntityInWater(myPed) and (100 - GetPlayerSprintStaminaRemaining(myPlayer)) or (GetPlayerUnderwaterTimeRemaining(myPlayer)*10), IsEntityInWater(myPed)
        local pause = IsPauseMenuActive()
        local voice = NetworkIsPlayerTalking(myPlayer)
        local plyState = LocalPlayer.state
        local proximity = plyState.proximity
        isInVehicle = IsPedSittingInAnyVehicle(myPed)
        SendNUIMessage({
            action = "updateHud",
            health = myHealth,
            armor = myArmor,
            stamina = myStamina,
            hunger = hungerStatus,
            thirst = thirstStatus,
            talking = voice, -- true, false
            voicerange = proximity.mode
        })

        if isInVehicle then
            myVehicle = GetVehiclePedIsIn(myPed, false)
            mySpeed = (GetEntitySpeed(myVehicle) * (Config.UnitOfSpeed == 'kmh' and 3.6 or 2.236936))
            
            local door = false --> 0, 1, 2, 3, 4, 5
            local lightsOff, lightsOn, highbeams = GetVehicleLightsState(myVehicle)
            local myFuel = Config.GetFuel(myVehicle) --> 0.0 - 1.0
            local myVehHealth = Config.GetVehicleDamage(myVehicle) --> 0.0 - 1000.0
            if GetVehicleDoorAngleRatio(myVehicle, 0) ~= 0 or GetVehicleDoorAngleRatio(myVehicle, 1) ~= 0 or GetVehicleDoorAngleRatio(myVehicle, 2) ~= 0 or GetVehicleDoorAngleRatio(myVehicle, 3) ~= 0 or GetVehicleDoorAngleRatio(myVehicle, 4) ~= 0 or GetVehicleDoorAngleRatio(myVehicle, 5) ~= 0 then
                door = true
            end
            SendNUIMessage({
                action = "updateCarHud",
                unitofspeed = Config.UnitOfSpeed, --> kmh, mph
                speed = math.floor(mySpeed), --> 0 - 999
                lights = { --> 0, 1, 2
                    lightsOn = lightsOn, --> 0, 1
                    highbeams = highbeams --> 0, 1
                },
                seatbelt = seatbelt, --> true, false
                hasSeatbelt = Config.SeatBeltVehiclesClasses[GetVehicleClass(myVehicle)], --> true, false
                engineDamageLevel = (myVehHealth <= 1000.0 and myVehHealth >= 750.0) and 0 or (myVehHealth < 750.0 and myVehHealth >= 500.0) and 1 or (myVehHealth < 500.0 and myVehHealth >= 250.0) and 2 or 3, --> 0, 1, 2, 3
                fuel = myFuel, --> 0.0 - 1.0
            })
        end
        if isInVehicle and not speedometerOnScreen then
            SendNUIMessage({action = "showCarHud"})
            if Config.MinimapOnlyInVehicle then
                DisplayRadar(true)
            end
            speedometerOnScreen = true
        elseif speedometerOnScreen and not isInVehicle then
            SendNUIMessage({action = "hideCarHud"})
            seatbelt = false
            DisplayRadar(false)
            
            speedometerOnScreen = false
        end
    end
end)

loadPlayerMinimap = function()
    SendNUIMessage({action = 'getMinimap'})
end

loadPlayerSpeedometer = function()
    SendNUIMessage({action = 'loadDefaultSpeedometer', default = 'circle'})
end

Display = function(toggle)
    hudOnScreen = toggle
    SendNUIMessage({action = 'displayHud', display = toggle})
end

RegisterNetEvent('dadi-squarehud:display', function(toggle)
    SendNUIMessage({action = 'displayHud', display = toggle})
    if isInVehicle then
        DisplayRadar(toggle)
    end
end)

exports('Display', function(toggle)
    SendNUIMessage({action = 'displayHud', display = toggle})
    if Config.MinimapOnlyInVehicle and isInVehicle or not Config.MinimapOnlyInVehicle then
        DisplayRadar(toggle)
    end
end)

if Config.EnableSeatBelt then
    if Config.SeatBeltCommand then
        RegisterCommand(Config.SeatBeltCommand, function()
            SeatBelt()
        end, false)

        if Config.SeatBeltKey then
            RegisterKeyMapping(Config.SeatBeltCommand, Config.SeatBeltDescription, "keyboard", Config.SeatBeltKey)
        end
    end

    SeatBelt = function()
        if not isInVehicle then
            return
        end
        if not Config.SeatBeltVehiclesClasses[GetVehicleClass(myVehicle)] then
            return
        end
        seatbelt = not seatbelt
        PlaySeatbeltSound(seatbelt)
        Config.Notification(Config.Translate['notify.title.seat_belts'], seatbelt and Config.Translate['notify.seat_belts_buckled'] or Config.Translate['notify.seat_belts_unbuckled'], seatbelt and 'success' or 'error')
        Citizen.CreateThread(function()
            while seatbelt do
                DisableControlAction(0, 75, true)
                Citizen.Wait(1)
            end
        end)
    end

    Citizen.CreateThread(function()
        while true do
            local sleep = 2000
            if isInVehicle and not Config.SeatBeltAntiRagdollVehicles[GetVehicleClass(myVehicle)] then
                sleep = 50
                lastSpeed = currentSpeed
                currentSpeed = mySpeed
                local myVehVector = GetEntitySpeedVector(myVehicle, true).y > 15.0
                local myVehVelocity = GetEntityVelocity(myVehicle)
                local vhfr = (lastSpeed - mySpeed) / GetFrameTime() > 3000
                if not seatbelt then
                    sleep = 5
                    if lastSpeed > Config.SeatBeltMinimumSpeedToRagdoll and myVehVector and vhfr then
                        SeatBeltRagdoll(myVehVelocity)
                        if Config.Debug == 'true' then
                            print('^4Debug:^7', 'Ragdolling...')
                        end
                    end
                end
            end
            Citizen.Wait(sleep)
        end
    end)

    SeatBeltRagdoll = function(myVehVelocity)
        local myPed = PlayerPedId()
        local myCoords = GetEntityCoords(myPed)
        SetEntityCoords(myPed, myCoords.x, myCoords.y, myCoords.z+1.0, true, true, true)
        SetPedToRagdoll(myPed, 1000, 1000, 0, 0, 0, 0)
        SetEntityVelocity(myPed, myVehVelocity.x * 1.5, myVehVelocity.y * 1.5, myVehVelocity.z * 1.5)
        ShakeGameplayCam("SMALL_EXPLOSION_SHAKE", 0.25)
        Citizen.Wait(800)
        if math.random(1, 100) <= Config.SeatBeltChanceForInstantDeath then
            SetEntityHealth(myPed, 0)
        end
    end
end

if Config.EnableToggleHud then
    if Config.ToggleHudCommand then
        RegisterCommand(Config.ToggleHudCommand, function()
            displayStatus = not displayStatus
            exports[GetCurrentResourceName()]:Display(displayStatus)
        end, false)
    
        if Config.SeatBeltKey then
            RegisterKeyMapping(Config.ToggleHudCommand, Config.ToggleHudDescription, "keyboard", Config.ToggleHudKey)
        end
    end
end

RegisterNUICallback("loaded", function(data)
    SendNUIMessage({
        action = "load",
        id = GetPlayerServerId(PlayerId()),
        seatbeltAlarm = Config.SeatBeltAlarm,
        seatbeltAlarmMinimumSpeed = Config.SeatBeltAlarmMinimumSpeed,
    })
    if Config.MinimapOnlyInVehicle then
        DisplayRadar(false)
    else
        DisplayRadar(true)
    end
end)

exports('hasSeatbelt', function()
    return seatbelt
end)