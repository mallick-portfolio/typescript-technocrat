{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type VehicleKey = keyof Vehicle;
  let myVehicel: VehicleKey = "bike";

  type User = {
    name: string;
    age: number;
  };
  type ObjectGenerics = keyof User;

  // to it uisng function
  const getObjectValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
}
