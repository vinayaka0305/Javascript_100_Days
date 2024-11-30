const getBatteryInfo = async () => {
  try {
    const battery = await navigator.getBattery();
    // console.log(battery);
    console.log("Battery Level:", battery.level * 100 + "%");
    console.log("Is Charging:", battery.charging ? "Yes" : "No");
    console.log("Charging Time:", battery.chargingTime, "seconds");
    console.log("Discharging Time:", battery.dischargingTime, "seconds");

     // Optional: Set up event listeners to react to battery changes
    battery.addEventListener("levelchange", () => {
      console.log("Battery Level changed to:", battery.level * 100 + "%");
    });

    battery.addEventListener("chargingchange", () => {
      console.log(
        "Charging status changed to:",
        battery.charging ? "Yes" : "No"
      );
    });
  } catch (error) {
    console.error("Error getting battery information", error);
  }
};

getBatteryInfo();


// Explanation
// Properties Access: Once navigator.getBattery() resolves, the BatteryManager object (battery in this example) gives access to:
// battery.level (in decimals, e.g., 0.5 for 50%)
// battery.charging (boolean indicating charging status)
// battery.chargingTime (seconds until fully charged if charging)
// battery.dischargingTime (seconds until fully discharged if not charging)
// Event Listeners:
// levelchange: Fired whenever the battery level changes.
// chargingchange: Fired whenever the charging state changes.
// Note
// Some environments (e.g., iOS Safari, and more recent browser versions) may not support this API due to privacy considerations, so it’s crucial to check for support.