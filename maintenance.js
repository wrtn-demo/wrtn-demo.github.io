function isMaintenanceMode() {
    // let isUnderMaintenance = true;
    let isUnderMaintenance = false;
    
    let hasMaintenanceHash = window.location.hash === '#maintenance';
    let maintenanceTargetDate = new Date("2025-04-28T20:00:00+09:00");
    let now = new Date();
    return now >= maintenanceTargetDate || isUnderMaintenance || hasMaintenanceHash;
}