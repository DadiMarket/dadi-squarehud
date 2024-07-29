Config = {}
Config.Core = 'new' -- Old or new esx!
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

-- The more you lower the number, the faster the hud will update, but the more resources it will consume.
Config.LoopTimeoutHud = 110
Config.LoopTimeoutStatus = 1000

Config.EnableToggleHud = false -- Activate / Deactivate hud with one button
Config.ToggleHudCommand = '+toggle_hud'
Config.ToggleHudKey = 'K' -- If you change this key, it is necessary to clear the game cache or change in the game settings, for new players there will be this key
Config.ToggleHudDescription = 'Toggle hud display'

Config.EnableSeatBelt = true -- Activate / Deactivate seat belt
Config.SeatBeltCommand = 'seatbelt'
Config.SeatBeltKey = 'B'
Config.SeatBeltDescription = 'Seat belt'

Config.SeatBeltMinimumSpeedToRagdoll = 100 -- The minimum speed at which an unrestrained player can fall out of a vehicle
Config.SeatBeltChanceForInstantDeath = 50 -- 50 = 50%

Config.SeatBeltAlarm = true -- Activate / Deactivate seat belt alarm
Config.SeatBeltAlarmMinimumSpeed = 40.0

-- @SeatBeltVehiclesClasses: false = seat belts cannot be fastened in the vehicle
-- @SeatBeltVehiclesClasses: true = seat belts can be fastened in the vehicle
Config.SeatBeltVehiclesClasses = { -- Classes of vehicles in which seat belts may be fastened
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

-- @SeatBeltAntiRagdollVehicles: false = the player can fall
-- @SeatBeltAntiRagdollVehicles: true = the player cannot fall
Config.SeatBeltAntiRagdollVehicles = { -- Vehicle classes that are not taken into account in case of a hard hit (the player will not fall from them).
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

Config.UnitOfSpeed = 'mph' -- 'kmh' or 'mph'

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

Config.GetFuel = function(vehicle)
    return GetVehicleFuelLevel(vehicle)
end

Config.GetVehicleDamage = function(vehicle)
    return GetVehicleEngineHealth(vehicle)
end

Config.Debug = false -- Only developers