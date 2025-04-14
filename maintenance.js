function isMaintenanceMode(isUnderMaintenance = false) {
    try {
        let maintenanceTargetDate = new Date("2025-04-28T20:00:00+09:00");
        let now = new Date();
        
        // URL 쿼리 파라미터에서 maintenance 확인
        let urlParams = new URLSearchParams(window.location.search);
        let isMaintenanceParam = urlParams.get('isUnderMaintenance') === "true";
        
        return now >= maintenanceTargetDate || isUnderMaintenance || isMaintenanceParam;
    } catch (error) {
        console.error("유지보수 모드 확인 중 오류 발생:", error);
        return false;
    }
}