export interface IGeolocation {
  current: {
    air_quality: { co: number; no2: number; o3: number };
    cloud: number;
    condition: { text: string; icon: string; code: number };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
}
