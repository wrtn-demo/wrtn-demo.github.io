function isMaintenanceMode(isUnderMaintenance = false) {
    try {
        // 유지보수 시작 시간 (한국 기준 4월 28일 00시)
        let maintenanceStartDate = new Date("2025-04-28T00:00:00+09:00");
        // 유지보수 종료 시간 (한국 기준 4월 28일 20시)
        let maintenanceEndDate = new Date("2025-04-28T20:00:00+09:00");
        let now = new Date();
        
        // URL 쿼리 파라미터에서 maintenance 확인
        let urlParams = new URLSearchParams(window.location.search);
        let isMaintenanceParam = urlParams.get('isUnderMaintenance') === "true";
        
        // 현재 시간이 유지보수 시작 시간과 종료 시간 사이에 있는지 확인
        let isInMaintenancePeriod = now >= maintenanceStartDate && now <= maintenanceEndDate;
        
        return isInMaintenancePeriod || isUnderMaintenance || isMaintenanceParam;
    } catch (error) {
        console.error("유지보수 모드 확인 중 오류 발생:", error);
        return false;
    }
}