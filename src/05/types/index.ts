export enum RuleNames {
    SeedToSoil = 'seed-to-soil',
    SpoilToFertilizer = 'soil-to-fertilizer',
    FertilizerToWater = 'fertilizer-to-water',
    WaterToLight = 'water-to-light',
    LightToTemperature = 'light-to-temperature',
    TemperatureToHumidity = 'temperature-to-humidity',
    HumidityToLocation = 'humidity-to-location',
}

export type Rule = {
    sourceStart: number,
    sourceEnd: number,
    destinationRange: number,
}

export type Rules = Rule[] | null