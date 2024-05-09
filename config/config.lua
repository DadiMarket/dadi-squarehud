Config = {}
Config.Core = 'ESX' -- NO TOCAR!
Config.CoreExport = function()
    return exports['es_extended']:getSharedObject()
end

Config.Notification = function(title, message, type)
    if type == 'success' then
        TriggerEvent('esx:showNotification', message)
    elseif type == 'error' then
        TriggerEvent('esx:showNotification', message)
    end
end

Config.Translate = {
    ['notify.title.seat_belts'] = 'SEAT BELTS',
    ['notify.seat_belts_buckled'] = 'The seat belts were fastened.',
    ['notify.seat_belts_unbuckled'] = 'Seat belts were unbuckled.',
}

-- Mientras mas bajes el numero, mas rapido se actualizara el hud, pero consumira mas recursos.
Config.LoopTimeoutHud = 110
Config.LoopTimeoutStatus = 1000

Config.EnableCustomizationMenu = true -- Activar menu de personalizacion / Desactivar menu de personalizacion
Config.CustomizationMenuCommand = 'hud'
Config.CustomizationMenuKey = 'I' -- Si cambia esta clave, es necesario borrar la caché del juego o cambiar en la configuración del juego, para los nuevos jugadores habrá esta clave
Config.CustomizationMenuDescription = 'Hud Customization'

Config.EnableToggleHud = false -- Activar / Desactivar hud con una tecla
Config.ToggleHudCommand = '+toggle_hud'
Config.ToggleHudKey = 'K' -- Si cambia esta clave, es necesario borrar la caché del juego o cambiar en la configuración del juego, para los nuevos jugadores habrá esta clave
Config.ToggleHudDescription = 'Toggle hud display'

Config.EnableSeatBelt = true -- Activar / Desactivar cinturón de seguridad
Config.SeatBeltCommand = 'seatbelt'
Config.SeatBeltKey = 'B'
Config.SeatBeltDescription = 'Seat belt'

Config.SeatBeltMinimumSpeedToRagdoll = 100 -- La velocidad mínima a la que un jugador sin cinturón de seguridad puede caerse de un vehículo
Config.SeatBeltChanceForInstantDeath = 50 -- 50 = 50%

Config.SeatBeltAlarm = true -- Activar / Desactivar alarma de cinturón de seguridad
Config.SeatBeltAlarmMinimumSpeed = 40.0

-- @SeatBeltVehiclesClasses: false = los cinturones de seguridad no pueden abrocharse en el vehículo
-- @SeatBeltVehiclesClasses: true = los cinturones de seguridad pueden abrocharse en el vehículo
Config.SeatBeltVehiclesClasses = { -- Clases de vehículos en los que pueden abrocharse los cinturones de seguridad
    [0] = true, -- Compacts
    [1] = true, -- Sedans
    [2] = true, -- SUVs
    [3] = true, -- Coupes
    [4] = true, -- Muscle
    [5] = true, -- Sports Classics
    [6] = true, -- Sports
    [7] = true, -- Super
    [8] = false, -- Motorcycles
    [9] = true, -- Off-road
    [10] = true, -- Industrial
    [11] = true, -- Utility
    [12] = true, -- Vans
    [13] = false, -- Cycles
    [14] = false, -- Boats
    [15] = false, -- Helicopters
    [16] = false, -- Planes
    [17] = true, -- Service
    [18] = true, -- Emergency
    [19] = true, -- Military
    [20] = true, -- Commercial
    [21] = true, -- Trains
    [22] = true, -- Open Wheel
}

-- @SeatBeltAntiRagdollVehicles: false = el jugador puede caerse
-- @SeatBeltAntiRagdollVehicles: true = el jugador no puede caerse
Config.SeatBeltAntiRagdollVehicles = { -- Clases de vehículos que no se tienen en cuenta en caso de golpe fuerte (el jugador no caerá de ellos).
    [0] = false, -- Compacts
    [1] = false, -- Sedans
    [2] = false, -- SUVs
    [3] = false, -- Coupes
    [4] = false, -- Muscle
    [5] = false, -- Sports Classics
    [6] = false, -- Sports
    [7] = false, -- Super
    [8] = true, -- Motorcycles
    [9] = false, -- Off-road
    [10] = false, -- Industrial
    [11] = false, -- Utility
    [12] = false, -- Vans
    [13] = true, -- Cycles
    [14] = true, -- Boats
    [15] = true, -- Helicopters
    [16] = true, -- Planes
    [17] = false, -- Service
    [18] = false, -- Emergency
    [19] = false, -- Military
    [20] = false, -- Commercial
    [21] = false, -- Trains
    [22] = false, -- Open Wheel
}

Config.DisableCompass = false -- Desactivar brújula
Config.CompassType = "camera" -- NO TOCAR!

Config.UnitOfSpeed = 'kmh' -- 'kmh' or 'mph'

Config.DisableGTAHudInVehicle = true -- elimina los nativos gta 5 visualización de nombres de calles, etc.

Config.MinimapZoom = 1100
Config.MinimapOnlyInVehicle = true

Config.GetStatus = function()
    local data = {}
    TriggerEvent("esx_status:getStatus", "hunger", function(hungerStat)
        data.hunger = hungerStat.getPercent()
    end)
    TriggerEvent("esx_status:getStatus", "thirst", function(thirstStat)
        data.thirst = thirstStat.getPercent()
    end)
    return data
end

Config.Radio = function()
    local currentFreq = exports["origen_radio"]:GetMultiFrec();
    return currentFreq
end

Config.GetFuel = function(vehicle)
    -- return GetVehicleFuelLevel(vehicle)
    return exports['LegacyFuel']:GetFuel(vehicle)
end

Config.GetVehicleDamage = function(vehicle)
    return GetVehicleEngineHealth(vehicle)
end

Config.Debug = false -- Solo desarrolladores como el Geme B)