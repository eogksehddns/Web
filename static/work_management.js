document.addEventListener('DOMContentLoaded', function() {
    const healthTips = [
        "충분한 수분 섭취를 위해 하루에 최소 8잔의 물을 마시세요.",
        "하루에 7-8시간 충분한 수면을 취하세요.",
        "스트레스를 관리하기 위해 명상이나 요가를 시도해보세요.",
        "과도한 음주를 피하고 알코올 섭취를 줄이세요.",
        "금연을 실천하고 흡연을 피하세요.",
        "신선한 과일과 채소를 매일 섭취하세요.",
        "규칙적으로 햇볕을 쬐어 비타민 D를 보충하세요.",
        "긍정적인 마음가짐을 유지하고 정신 건강을 챙기세요.",
        "충분한 수분 섭취와 규칙적인 운동을 잊지 마세요!"
    ];

    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    document.getElementById('health-tip-text').textContent = randomTip;
});
